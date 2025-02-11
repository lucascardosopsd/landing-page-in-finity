import { NewLeadTemplate } from "@/components/NewLeadTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type BodyType = {
  name: string;
  email: string;
  target: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as BodyType;

    const { data, error } = await resend.emails.send({
      from: "IN-FINITY <in-finity@resend.dev>",
      to: ["infinityjales@gmail.com"],
      subject: "Novo Lead",
      react: NewLeadTemplate({
        email: body.email,
        name: body.name,
        target: body.target,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
