import { FeedbackTypes } from "$lib/enums";
import { z } from "zod";
import { captchaSchema } from ".";

const feedbackSchema = z.object({
  name: z.string().nonempty("Name is mandatory!"),
  email: z.string().email().nonempty("Email is mandatory!"),
  subject: z.string().nonempty("Subject is mandatory!"),
  message: z.string().nonempty("Message is mandatory!"),
  type: z.enum([
    FeedbackTypes.nonSupport.feedback,
    FeedbackTypes.nonSupport.general,
    FeedbackTypes.support.feature,
    FeedbackTypes.support.improvement,
    FeedbackTypes.support.bug,
  ]),
});
export type Feedback = z.infer<typeof feedbackSchema>;

export const createFeedbackSchema = z.discriminatedUnion("public", [
  z
    .object({
      public: z.literal(true),
    })
    .merge(feedbackSchema)
    .merge(captchaSchema),
  z
    .object({
      public: z.literal(false),
    })
    .merge(feedbackSchema),
]);
