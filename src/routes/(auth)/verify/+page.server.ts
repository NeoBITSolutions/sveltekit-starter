import { CLOUDFLARE_TURNSTILE_SECRET_KEY } from "$env/static/private";
import { verificationCodeSchema } from "$lib/schemas";
import { verificationCodes } from "$lib/server/db";
import {
  createSession,
  deleteVerificationCodeCookie,
  generateSessionToken,
  getUser,
  getVerificationToken,
  setSessionTokenCookie,
  validateCAPTCHAToken,
} from "$lib/server/services";
import { error, redirect } from "@sveltejs/kit";
import { addMinutes, isAfter } from "date-fns";
import { eq } from "drizzle-orm";
import { fail, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";

export const load = async ({ locals: { session, user } }) => {
  if (session && user) {
    redirect(302, "/dashboard");
  }

  return {
    verificationForm: await superValidate(zod(verificationCodeSchema)),
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

    const verificationCode = await getVerificationToken(db, form.data.verificationCode);
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

    await db.delete(verificationCodes).where(eq(verificationCodes.userId, verificationCode.userId));
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
};
