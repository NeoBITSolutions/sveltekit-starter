import { z } from "zod";
import { captchaSchema } from "./common";

const baseUserSchema = z.object({
  email: z
    .string({ required_error: "Email is mandatory!" })
    .email("Invalid email address")
    .min(6, "Email must be at least 6 characters long")
    .max(255, "Email must be at most 255 characters long"),
});

export const signInSchema = baseUserSchema.merge(captchaSchema);

export const verificationCodeSchema = captchaSchema.extend({
  verificationCode: z
    .string({ required_error: "Verification code is mandatory!" })
    .min(8, "Verification code must be at least 8 characters long"),
});

export const resendVerificationCodeSchema = captchaSchema.extend({
  userId: z.string().uuid(),
});

export const signUpSchema = baseUserSchema.merge(captchaSchema).extend({
  displayName: z
    .string({ required_error: "Display name is mandatory!" })
    .min(2, "Display name must be at least 6 characters long")
    .max(255, "Display name must be at most 255 characters long"),
});
