import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, message } = await request.json();

    const html = `
      <h2>Nuevo contacto desde SolucionesWeb</h2>
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse; font-family:Arial; width:100%; max-width:600px;">
        <tr><td style="font-weight:bold;background:#f3f4f6;">Nombre</td><td>${name}</td></tr>
        <tr><td style="font-weight:bold;background:#f3f4f6;">Email</td><td>${email}</td></tr>
        <tr><td style="font-weight:bold;background:#f3f4f6;">Teléfono</td><td>${phone || "—"}</td></tr>
        <tr><td style="font-weight:bold;background:#f3f4f6;">Servicio</td><td>${service || "—"}</td></tr>
        <tr><td style="font-weight:bold;background:#f3f4f6;">Mensaje</td><td>${message}</td></tr>
      </table>
    `;

    const { data, error } = await resend.emails.send({
      from: "SolucionesWeb <onboarding@resend.dev>",
      to: ["solucionesweeb@gmail.com"],
      subject: `Nuevo contacto de ${name} - SolucionesWeb`,
      html,
      replyTo: email,
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }

    return Response.json({ success: true, data });
  } catch (err) {
    const error = err as Error;
    return Response.json({ error: error.message }, { status: 500 });
  }
}
