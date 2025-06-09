import { invites } from "$lib/server/db";
import { eq } from "drizzle-orm";
import type { DrizzleD1Database } from "drizzle-orm/d1";

export const isInvited = async (db: DrizzleD1Database, email: string) => {
  const validInvite = await db.select().from(invites).where(eq(invites.email, email)).limit(1);
  if (validInvite.length === 0) {
    return false;
  }

  return validInvite[0].active;
};
