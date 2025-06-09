import { dev } from "$app/environment";
import { sessions, users, verificationCodes } from "$lib/server/db";
import { SESSION_COOKIE_NAME, VERIFICATION_CODE_COOKIE_NAME } from "$lib/utils";
import { generateRandomString } from "@oslojs/crypto/random";
import { sha256 } from "@oslojs/crypto/sha2";
import { encodeBase32LowerCaseNoPadding, encodeHexLowerCase } from "@oslojs/encoding";
import type { Cookies } from "@sveltejs/kit";
import { addDays, addMinutes, differenceInDays } from "date-fns";
import { eq } from "drizzle-orm";
import type { DrizzleD1Database } from "drizzle-orm/d1";

export const validateCAPTCHAToken = async (token: string, secret: string) => {
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    body: JSON.stringify({
      secret: secret,
      response: token,
    }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data: {
    success: boolean;
    "error-codes"?: string[];
  } = await response.json();

  return {
    success: data.success,
    errorCodes: data["error-codes"] ?? [],
  };
};

export const generateVerificationToken = async (db: DrizzleD1Database, userId: string) => {
  await db.delete(verificationCodes).where(eq(verificationCodes.userId, userId));
  const random = {
    read(bytes: Uint8Array) {
      crypto.getRandomValues(bytes);
    },
  };
  const code = generateRandomString(random, "abcdefghijklmnopqrstuvwxyz0123456789", 8);
  const expiresAt = addMinutes(new Date(), 20).toISOString();
  const verificationCode = await db
    .insert(verificationCodes)
    .values({
      userId,
      code,
      expiresAt: `${expiresAt.substring(0, 10)} ${expiresAt.substring(11, 19)}`,
    })
    .returning();
  if (verificationCode.length === 0) {
    return null;
  }

  return verificationCode[0];
};

export const setVerificationCodeCookie = (cookies: Cookies, verificationCode: string) => {
  cookies.set(VERIFICATION_CODE_COOKIE_NAME, verificationCode, {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: !dev,
  });
};

export const deleteVerificationCodeCookie = (cookies: Cookies) => {
  cookies.delete(VERIFICATION_CODE_COOKIE_NAME, {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: !dev,
  });
};

export const getVerificationCode = async (db: DrizzleD1Database, code: string) => {
  const verificationCode = await db
    .select()
    .from(verificationCodes)
    .where(eq(verificationCodes.code, code))
    .limit(1);
  if ((await verificationCode).length === 0) {
    return null;
  }

  return verificationCode[0];
};

export const deleteVerificationCodesForUser = async (db: DrizzleD1Database, userId: string) => {
  await db.delete(verificationCodes).where(eq(verificationCodes.userId, userId));
};

export const generateSessionToken = () => {
  const bytes = new Uint8Array(20);
  crypto.getRandomValues(bytes);

  return encodeBase32LowerCaseNoPadding(bytes);
};

export const createSession = async (db: DrizzleD1Database, token: string, userId: string) => {
  const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
  const session = await db
    .insert(sessions)
    .values({
      id: sessionId,
      userId,
      expiresAt: addDays(new Date(), 30),
    })
    .returning();
  if (session.length === 0) {
    return null;
  }

  return session[0];
};

export const setSessionTokenCookie = (cookies: Cookies, sessionToken: string, expiresAt: Date) => {
  cookies.set(SESSION_COOKIE_NAME, sessionToken, {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: !dev,
    expires: expiresAt,
  });
};

export const deleteSessionTokenCookie = (cookies: Cookies) => {
  cookies.delete(SESSION_COOKIE_NAME, {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: !dev,
  });
};

export const validateSessionToken = async (db: DrizzleD1Database, token: string) => {
  const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
  const result = await db
    .select({ user: users, session: sessions })
    .from(sessions)
    .innerJoin(users, eq(sessions.userId, users.id))
    .where(eq(sessions.id, sessionId));

  if (result.length === 0) {
    return { user: null, session: null };
  }

  const { user, session } = result[0];
  if (Date.now() >= session.expiresAt.getTime()) {
    await db.delete(sessions).where(eq(sessions.id, session.id));

    return { user: null, session: null };
  }

  if (differenceInDays(new Date(), session.expiresAt) <= 15) {
    session.expiresAt = addDays(new Date(), 30);
    await db
      .update(sessions)
      .set({
        expiresAt: session.expiresAt,
      })
      .where(eq(sessions.id, session.id));
  }

  return { user, session };
};

export const invalidateSession = async (db: DrizzleD1Database, sessionId: string) => {
  await db.delete(sessions).where(eq(sessions.id, sessionId));
};
