import { CLOUDFLARE_TURNSTILE_SECRET_KEY } from "$env/static/private";
import { signInSchema } from "$lib/schemas";
import {
  generateVerificationToken,
  getUserByEmail,
  sendVerificationEmail,
  setVerificationCodeCookie,
  validateCAPTCHAToken,
} from "$lib/server/services";
import { error, redirect } from "@sveltejs/kit";
import { fail, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";

export const load = async ({ locals: { session, user } }) => {
  if (session && user) {
    redirect(302, "/dashboard");
  }

  return {
    form: await superValidate(zod(signInSchema)),
  };
};

export const actions = {
  default: async ({ cookies, locals: { db }, request }) => {
    const form = await superValidate(request, zod(signInSchema));
    if (!form.valid) {
      return fail(400, {
        form,
      });
    }

    const { success, errorCodes } = await validateCAPTCHAToken(
      form.data.captchaToken,
      CLOUDFLARE_TURNSTILE_SECRET_KEY
    );
    if (!success) {
      console.error("CAPTCHA validation failed:", errorCodes);

      return fail(401, {
        form,
        message: "Invalid CAPTCHA. Please refresh the page!",
      });
    }

    const user = await getUserByEmail(db, form.data.email);
    if (!user) {
      return fail(401, {
        form,
        message: "Could not find user with this email address. Please sign up first!",
      });
    }

    const verificationCode = await generateVerificationToken(db, user.id);
    if (!verificationCode) {
      console.error("Failed to generate verification code for user:", user.email);
      error(500);
    }

    setVerificationCodeCookie(cookies, JSON.stringify(verificationCode));
    const { error: emailResponseError } = await sendVerificationEmail(
      form.data.email,
      verificationCode.code
    );
    if (emailResponseError) {
      console.error("Failed to send verification email:", emailResponseError);
      error(500);
    }

    return { form };
  },
};
