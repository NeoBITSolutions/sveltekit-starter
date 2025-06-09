import { CLOUDFLARE_TURNSTILE_SECRET_KEY } from "$env/static/private";
import { resendVerificationCodeSchema, verificationCodeSchema } from "$lib/schemas";
import {
  createSession,
  deleteVerificationCodeCookie,
  deleteVerificationCodesForUser,
  generateSessionToken,
  generateVerificationToken,
  getUser,
  getVerificationCode,
  sendVerificationEmail,
  setSessionTokenCookie,
  setVerificationCodeCookie,
  validateCAPTCHAToken,
} from "$lib/server/services";
import { VERIFICATION_CODE_COOKIE_NAME } from "$lib/utils";
import { error, redirect } from "@sveltejs/kit";
import { addMinutes, isAfter } from "date-fns";
import { fail, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";

export const load = async ({ cookies, locals: { session, user } }) => {
  if (session && user) {
    redirect(302, "/dashboard");
  }

  const code = cookies.get(VERIFICATION_CODE_COOKIE_NAME);
  let verificationCode = {
    id: "",
    code: "",
    userId: "",
    expiresAt: "",
    createdAt: "",
  };
  if (code) {
    verificationCode = JSON.parse(code);
  }

  return {
    verificationCode,
    verificationForm: await superValidate(zod(verificationCodeSchema)),
    resendVerificationCodeForm: await superValidate(
      { userId: verificationCode.userId },
      zod(resendVerificationCodeSchema)
    ),
  };
};

export const actions = {
  verify: async ({ cookies, locals: { db }, request }) => {
    const form = await superValidate(request, zod(verificationCodeSchema));
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

    const verificationCode = await getVerificationCode(db, form.data.verificationCode);
    if (!verificationCode) {
      console.error("Verification code not found", form.data.verificationCode);
      error(500);
    }

    if (
      isAfter(new Date(), addMinutes(verificationCode.expiresAt, -new Date().getTimezoneOffset()))
    ) {
      return fail(401, {
        form,
        message: "Verification code is expired. Please sign in again!",
      });
    }

    await deleteVerificationCodesForUser(db, verificationCode.userId);
    const existingUser = await getUser(db, verificationCode.userId);
    if (!existingUser) {
      console.error("Could not find user with id", verificationCode.userId);
      error(500);
    }

    const sessionToken = generateSessionToken();
    const session = await createSession(db, sessionToken, existingUser.id);
    if (!session) {
      console.error("No session was created for user with id", existingUser.id);
      error(500);
    }

    setSessionTokenCookie(cookies, sessionToken, session.expiresAt);
    deleteVerificationCodeCookie(cookies);

    return { form };
  },
  resendVerificationCode: async ({ cookies, locals: { db }, request }) => {
    const form = await superValidate(request, zod(resendVerificationCodeSchema));
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

    const user = await getUser(db, form.data.userId);
    if (!user) {
      console.error("Could not find user when resending verification code", form.data.userId);
      error(500);
    }

    await deleteVerificationCodesForUser(db, user.id);
    const verificationCode = await generateVerificationToken(db, user.id);
    if (!verificationCode) {
      console.error("Failed to generate verification code for user:", user.email);
      error(500);
    }

    setVerificationCodeCookie(cookies, JSON.stringify(verificationCode));
    const { error: emailResponseError } = await sendVerificationEmail(
      user.email,
      verificationCode.code
    );
    if (emailResponseError) {
      console.error("Failed to send verification email:", emailResponseError);
      error(500);
    }

    return { form };
  },
};
