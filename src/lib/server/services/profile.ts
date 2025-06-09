import { profiles, type ProfileInsert } from "$lib/server/db";
import { eq } from "drizzle-orm";
import type { DrizzleD1Database } from "drizzle-orm/d1";

export const getProfileByDisplayName = async (db: DrizzleD1Database, displayName: string) => {
  const profile = await db
    .select()
    .from(profiles)
    .where(eq(profiles.displayName, displayName))
    .limit(1);
  if (profile.length === 0) {
    return null;
  }

  return profile[0];
};

export const createProfile = async (db: DrizzleD1Database, profileInsert: ProfileInsert) => {
  const profile = await db.insert(profiles).values(profileInsert).returning();
  if (profile.length === 0) {
    return null;
  }

  return profile[0];
};
