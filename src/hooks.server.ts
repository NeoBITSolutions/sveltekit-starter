import {
  deleteSessionTokenCookie,
  setSessionTokenCookie,
  validateSessionToken,
} from "$lib/server/services";
import { SESSION_COOKIE_NAME } from "$lib/utils";
import { error, redirect } from "@sveltejs/kit";
import { drizzle } from "drizzle-orm/d1";

export const handle = async ({ event, resolve }) => {
  const { cookies, locals, platform, route } = event;
  if (!route.id) {
    error(404);
  }

  if (!platform) {
    error(500, "Platform not found");
  }

  locals.db = drizzle(platform.env.DB);
  const sessionToken = cookies.get(SESSION_COOKIE_NAME);
  if (!sessionToken) {
    locals.user = null;
    locals.session = null;
    locals.profile = null;
    locals.roles = [];
    if (route.id.includes("(app)")) {
      redirect(302, "/sign-in");
    }

    return resolve(event);
  }

  const { user, session } = await validateSessionToken(locals.db, sessionToken);
  if (session) {
    setSessionTokenCookie(cookies, sessionToken, session.expiresAt);
  } else {
    deleteSessionTokenCookie(cookies);
  }

  locals.user = user;
  locals.session = session;

  return resolve(event);
};
