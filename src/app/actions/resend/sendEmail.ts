import { resend } from "@/lib/resend";

type SendEmail = {
  subject: string;
  to: string;
  html: string;
};

export const sendEmail = ({ subject, html, to }: SendEmail) => {
  return resend.emails.send({
    from: "onboarding@resend.dev",
    to: to,
    subject: subject,
    html: html,
  });
};
