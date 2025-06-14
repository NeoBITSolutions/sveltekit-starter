import { sql } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { FeedbackStates, FeedbackTypes } from "../../../enums";

export const feedbacks = sqliteTable("feedbacks", {
  id: text("id")
    .notNull()
    .default(
      sql`(lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))),2) || '-' || substr('89ab',abs(random()) % 4 + 1, 1) || substr(lower(hex(randomblob(2))),2) || '-' || lower(hex(randomblob(6))))`
    )
    .primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  type: text("type", {
    enum: [
      FeedbackTypes.nonSupport.feedback,
      FeedbackTypes.nonSupport.general,
      FeedbackTypes.support.feature,
      FeedbackTypes.support.improvement,
      FeedbackTypes.support.bug,
    ],
  }).notNull(),
  state: text("state", {
    enum: [FeedbackStates.new, FeedbackStates.done],
  })
    .notNull()
    .default(FeedbackStates.new),
  createdAt: text("created_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export type FeedbackSelect = typeof feedbacks.$inferSelect;
export type FeedbackInsert = typeof feedbacks.$inferInsert;
