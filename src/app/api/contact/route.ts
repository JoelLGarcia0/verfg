import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, subject, service, message } = body;

    // Basic server-side validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL || "info@verafg.com";

    const serviceLabels: Record<string, string> = {
      "individual-tax": "Individual Tax Return",
      "business-tax": "Business Tax Return",
      "bookkeeping": "Bookkeeping and Accounting",
      "payroll": "Payroll Services",
      "advisory": "Advisory and Planning",
    };

    const serviceLabel = service ? (serviceLabels[service] || service) : "";

    const details = [
      { label: "Name", value: name },
      { label: "Email", value: email },
      ...(phone ? [{ label: "Phone", value: phone }] : []),
      ...(serviceLabel ? [{ label: "Service", value: serviceLabel }] : []),
    ];

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#f3ebdf;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3ebdf;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;">
        <!-- Header -->
        <tr>
          <td style="background:#550b14;padding:32px 40px;text-align:center;">
            <h1 style="margin:0;color:#f3ebdf;font-size:24px;font-weight:400;letter-spacing:2px;">
              VERA FINANCIAL GROUP
            </h1>
          </td>
        </tr>
        <!-- Subject -->
        <tr>
          <td style="padding:32px 40px 16px;">
            <h2 style="margin:0;color:#550b14;font-size:18px;font-weight:600;">
              ${subject?.trim() ? subject : "New Contact Form Message"}
            </h2>
            <hr style="border:none;border-top:1px solid #f3ebdf;margin:16px 0 0;" />
          </td>
        </tr>
        <!-- Contact Details -->
        <tr>
          <td style="padding:0 40px 24px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${details
                .map(
                  (d) => `
              <tr>
                <td style="padding:8px 0;color:#999;font-size:13px;text-transform:uppercase;letter-spacing:1px;width:100px;vertical-align:top;">
                  ${d.label}
                </td>
                <td style="padding:8px 0;color:#171717;font-size:15px;">
                  ${d.value}
                </td>
              </tr>`
                )
                .join("")}
            </table>
          </td>
        </tr>
        <!-- Message -->
        <tr>
          <td style="padding:0 40px 32px;">
            <div style="background:#faf9f7;border-left:3px solid #550b14;padding:20px 24px;border-radius:0 4px 4px 0;">
              <p style="margin:0 0 4px;color:#999;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Message</p>
              <p style="margin:0;color:#171717;font-size:15px;line-height:1.6;white-space:pre-wrap;">${message}</p>
            </div>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#faf9f7;padding:20px 40px;text-align:center;border-top:1px solid #f3ebdf;">
            <p style="margin:0;color:#999;font-size:12px;">
              Sent from the VERA Financial Group website contact form
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`.trim();

    await resend.emails.send({
      from: "VERA Financial Group <contact@restweb.dev>",
      to,
      replyTo: email,
      subject: subject?.trim()
        ? `[VERA Contact] ${subject}`
        : "[VERA Contact] New message",
      html,
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Failed to send" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
