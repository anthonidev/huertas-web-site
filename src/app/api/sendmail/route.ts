import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    // Leer el cuerpo de la solicitud
    const { to, from, html, subject, text } = await req.json();

    // Validar que todos los campos requeridos estén presentes
    if (!to || !from || !html || !subject || !text) {
      return NextResponse.json({ message: 'Todos los campos son requeridos' }, { status: 400 });
    }

    // Enviar el correo utilizando Resend
    const send = await resend.emails.send({
      from,
      to,
      subject,
      html,
      text,
    });

    // Verificar si el envío fue exitoso
    if (send) {
      return NextResponse.json({ message: 'Email sent', send }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Error al enviar el email' }, { status: 500 });
    }
  } catch (error) {
    // Manejo de errores
    return NextResponse.json(
      { message: 'Error al procesar la solicitud', error: error },
      { status: 500 },
    );
  }
}
