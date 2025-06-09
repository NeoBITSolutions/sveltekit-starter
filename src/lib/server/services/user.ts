import { users } from "$lib/server/db";
import { eq } from "drizzle-orm";
import type { DrizzleD1Database } from "drizzle-orm/d1";

export const getUser = async (db: DrizzleD1Database, id: string) => {
  const user = await db.select().from(users).where(eq(users.id, id)).limit(1);
  if (user.length === 0) {
    return null;
  }

  return user[0];
};

export const getUserByEmail = async (db: DrizzleD1Database, email: string) => {
  const user = await db.select().from(users).where(eq(users.email, email)).limit(1);
  if (user.length === 0) {
    return null;
  }

  return user[0];
};
