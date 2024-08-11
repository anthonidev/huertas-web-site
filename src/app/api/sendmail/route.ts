import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(
  { Response }: { Response: any },
  request: { body: { to: string; from: string; html: string; subject: string; text: string } },
  { error }: { error: any },
) {
  try {
    const body = request.body;
    const { to, from, html, subject, text } = body;

    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    const send = await resend.emails.send({
      from,
      to,
      subject,
      html,
      text,
    });

    if (send.data) {
      return Response.json({ send }, { status: 200 });
    } else {
      return Response.json({ send }, { status: 500 });
    }
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
