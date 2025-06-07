import { relations, sql } from "drizzle-orm";
import { sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";
import { lower, users } from "..";

export const profiles = sqliteTable(
  "profiles",
  {
    id: text("id")
      .notNull()
      .default(
        sql`(lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))),2) || '-' || substr('89ab',abs(random()) % 4 + 1, 1) || substr(lower(hex(randomblob(2))),2) || '-' || lower(hex(randomblob(6))))`
      )
      .primaryKey(),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, {
        onUpdate: "cascade",
        onDelete: "cascade",
      }),
    displayName: text("display_name").notNull(),
    profilePicture: text("profile_picture"),
    createdAt: text("created_at")
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
    updatedAt: text("updated_at")
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => [uniqueIndex("profiles_display_name_unique_idx").on(lower(table.displayName))]
);

export const profilesRelations = relations(profiles, ({ one }) => ({
  user: one(users, {
    fields: [profiles.userId],
    references: [users.id],
  }),
}));

export type ProfileSelect = typeof profiles.$inferSelect;
export type ProfileInsert = typeof profiles.$inferInsert;
