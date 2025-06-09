import {
  createSession,
  deleteVerificationCodeCookie,
  deleteVerificationCodesForUser,
  generateSessionToken,
  getUser,
  getVerificationCode,
  setSessionTokenCookie,
} from "$lib/server/services";
import { error, redirect } from "@sveltejs/kit";
import { addMinutes, isAfter } from "date-fns";

export const load = async ({ cookies, locals: { db, session, user }, params }) => {
  if (session && user) {
    redirect(302, "/dashboard");
  }

  const verificationCode = await getVerificationCode(db, params.code);
  if (!verificationCode) {
    redirect(302, "/sign-in");
  }

  if (
    isAfter(new Date(), addMinutes(verificationCode.expiresAt, -new Date().getTimezoneOffset()))
  ) {
    redirect(302, "/sign-in");
  }

  await deleteVerificationCodesForUser(db, verificationCode.userId);
  const _user = await getUser(db, verificationCode.userId);
  if (!_user) {
    console.error("Could not find user with id", verificationCode.userId);
    error(500);
  }

  const sessionToken = generateSessionToken();
  const _session = await createSession(db, sessionToken, _user.id);
  if (!_session) {
    console.error("No session was created for user with id", _user.id);
    error(500);
  }

  setSessionTokenCookie(cookies, sessionToken, _session.expiresAt);
  deleteVerificationCodeCookie(cookies);
  redirect(302, "/dashboard");
};
