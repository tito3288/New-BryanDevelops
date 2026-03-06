import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, budget, message } =
      await request.json();

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const budgetLabels: Record<string, string> = {
      "under-1k": "Under $1,000",
      "1k-3k": "$1,000 - $3,000",
      "3k-5k": "$3,000 - $5,000",
      "5k-10k": "$5,000 - $10,000",
      "10k+": "$10,000+",
    };

    await transporter.sendMail({
      from: `"Bryan Develops Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Contact Form: ${name} - ${service}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4f46e5; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-weight: 600; width: 120px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; color: #111827;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-weight: 600; vertical-align: top;">Email</td>
              <td style="padding: 10px 0; color: #111827;"><a href="mailto:${email}" style="color: #4f46e5;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-weight: 600; vertical-align: top;">Phone</td>
              <td style="padding: 10px 0; color: #111827;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-weight: 600; vertical-align: top;">Service</td>
              <td style="padding: 10px 0; color: #111827;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-weight: 600; vertical-align: top;">Budget</td>
              <td style="padding: 10px 0; color: #111827;">${budget ? budgetLabels[budget] || budget : "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-weight: 600; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #111827; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="color: #9ca3af; font-size: 12px; margin-top: 20px; border-top: 1px solid #e5e7eb; padding-top: 10px;">
            Sent from bryandevelops.com contact form
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
