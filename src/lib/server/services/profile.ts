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

export const getProfileByUserId = async (db: DrizzleD1Database, userId: string) => {
  const profile = await db.select().from(profiles).where(eq(profiles.userId, userId)).limit(1);
  if (profile.length === 0) {
    return null;
  }

  return profile[0];
};

export const createProfile = async (db: DrizzleD1Database, profile: ProfileInsert) => {
  const _profile = await db.insert(profiles).values(profile).returning();
  if (_profile.length === 0) {
    return null;
  }

  return _profile[0];
};
