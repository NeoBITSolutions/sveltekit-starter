import { z } from "zod";

export const captchaSchema = z.object({
  captchaToken: z.string().min(1, "Captcha token is required"),
});
