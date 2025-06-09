import type { ProfileSelect, SessionSelect, UserRoleSelect, UserSelect } from "$lib/server/db";
import type { DrizzleD1Database } from "drizzle-orm/d1";

declare global {
  namespace App {
    interface Locals {
      db: DrizzleD1Database;
      user: UserSelect | null;
      session: SessionSelect | null;
      profile: ProfileSelect | null;
      roles: UserRoleSelect[];
    }
    interface Platform {
      env: {
        DB: D1Database;
      };
    }
  }
}

export {};
