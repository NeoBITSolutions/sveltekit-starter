import { CLOUDFLARE_TURNSTILE_SECRET_KEY } from "$env/static/private";
import { createFeedbackSchema } from "$lib/schemas/feedback";
import { validateCAPTCHAToken } from "$lib/server/services";
import { createFeedback } from "$lib/server/services/feedback.js";
import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";

export const load = async () => {
  return {
    form: await superValidate({ public: true }, zod(createFeedbackSchema)),
  };
};

export const actions = {
  default: async ({ locals: { db }, request }) => {
    const form = await superValidate(request, zod(createFeedbackSchema));
    if (!form.valid) {
      return fail(400, {
        form,
      });
    }

    if (form.data.public) {
      const { success, errorCodes } = await validateCAPTCHAToken(
        form.data.captchaToken,
        CLOUDFLARE_TURNSTILE_SECRET_KEY
      );
      if (!success) {
        console.error("CAPTCHA validation failed:", errorCodes);

        return fail(401, {
          form,
          message: "Invalid CAPTCHA. Please refresh the page!",
        });
      }
    }

    await createFeedback(db, form.data);

    return { form };
  },
};
