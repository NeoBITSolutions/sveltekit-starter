import { dev } from "$app/environment";
import { RESEND_API_KEY } from "$env/static/private";
import { getAppUrl } from "$lib/server/utils";
import { APP_NAME, FROM_EMAIL, getVerificationEmailTemplate } from "$lib/utils";
import { Resend } from "resend";

export const sendVerificationEmail = async (email: string, code: string) => {
  if (dev) {
    console.log("Verification code:", code);

    return {
      error: null,
    };
  }

  const resend = new Resend(RESEND_API_KEY);

  return await resend.emails.send({
    from: FROM_EMAIL,
    to: [email],
    subject: `Sign in to ${APP_NAME}`,
    html: getVerificationEmailTemplate(`${getAppUrl()}/verify/${code}`, code),
  });
};
