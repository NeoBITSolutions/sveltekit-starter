import type { DrizzleD1Database } from "drizzle-orm/d1";

declare global {
  namespace App {
    interface Locals {
      db: DrizzleD1Database;
    }
    interface Platform {
      env: {
        DB: D1Database;
      };
    }
  }
}

export {};
