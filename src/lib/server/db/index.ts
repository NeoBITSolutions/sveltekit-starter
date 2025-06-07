import { sql } from "drizzle-orm";
import type { AnySQLiteColumn } from "drizzle-orm/sqlite-core";

export * from "./schema";

export const lower = (value: AnySQLiteColumn) => {
  return sql`lower(${value})`;
};
