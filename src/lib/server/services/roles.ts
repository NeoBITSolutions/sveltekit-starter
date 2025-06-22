import { usersRoles } from "$lib/server/db";
import { eq } from "drizzle-orm";
import type { DrizzleD1Database } from "drizzle-orm/d1";

export const getUserRoles = async (db: DrizzleD1Database, userId: string) => {
  return db.select().from(usersRoles).where(eq(usersRoles.userId, userId));
};
