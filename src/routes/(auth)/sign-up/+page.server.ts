import { env } from "$env/dynamic/private";
import { CLOUDFLARE_TURNSTILE_SECRET_KEY } from "$env/static/private";
import { signUpSchema } from "$lib/schemas";
import {
  createProfile,
  createUser,
  generateVerificationToken,
  getProfileByDisplayName,
  getUserByEmail,
  isInvited,
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
    form: await superValidate(zod(signUpSchema)),
  };
};

export const actions = {
  default: async ({ cookies, locals: { db }, request }) => {
    const form = await superValidate(request, zod(signUpSchema));
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

    if (env.SIGN_UP_WITH_INVITE_ONLY && env.SIGN_UP_WITH_INVITE_ONLY === "true") {
      const userIsInvited = await isInvited(db, form.data.email);
      if (!userIsInvited) {
        return fail(401, {
          form,
          message: "Could not create an account",
        });
      }
    }

    let user = await getUserByEmail(db, form.data.email);
    if (user) {
      return fail(401, {
        form,
        message: "There is already a user with this email. Please sign in!",
      });
    }

    const profile = await getProfileByDisplayName(db, form.data.displayName);
    if (profile) {
      return fail(401, {
        form,
        message: "Display name taken. Please choose another one!",
      });
    }

    user = await createUser(db, form.data.email);
    if (!user) {
      console.error("Could not create user with email", form.data.email);
      error(500);
    }

    await createProfile(db, { userId: user.id, displayName: form.data.displayName });
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
