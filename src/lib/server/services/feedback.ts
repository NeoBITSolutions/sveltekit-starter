import type { Feedback } from "$lib/schemas/feedback";
import { feedbacks } from "$lib/server/db";
import type { DrizzleD1Database } from "drizzle-orm/d1";

export const createFeedback = async (db: DrizzleD1Database, feedback: Feedback) => {
  const _feedback = await db.insert(feedbacks).values(feedback).returning();
  if (_feedback.length === 0) {
    return null;
  }

  return _feedback[0];
};
