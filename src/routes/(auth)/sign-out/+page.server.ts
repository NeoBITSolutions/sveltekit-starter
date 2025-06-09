import { deleteSessionTokenCookie, invalidateSession } from "$lib/server/services";
import { redirect } from "@sveltejs/kit";

export const actions = {
  default: async ({ cookies, locals: { db, session, user } }) => {
    if (!session || !user) {
      redirect(302, "sign-in");
    }

    await invalidateSession(db, session.id);
    deleteSessionTokenCookie(cookies);
    redirect(302, "/");
  },
};
