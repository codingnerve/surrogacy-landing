import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, source } = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email" },
        { status: 400 }
      );
    }

    // ======================
    // SEND EMAIL TO ADMIN
    // ======================

    const adminEmail = await resend.emails.send({
      from: "Genix Fertility <enquiry@genixfertility.in>",
      to: ["infogenixfertility@gmail.com"],
      replyTo: email,
      subject: `New Website Enquiry from ${name}`,
      html: `
      <div style="font-family:Arial;max-width:600px;margin:auto;padding:20px;border:1px solid #eee;border-radius:10px">
      
      <h2 style="color:#e11d48;">New Lead Received</h2>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>

      <p><strong>Message:</strong></p>
      <div style="background:#f9fafb;padding:10px;border-radius:6px">
      ${message}
      </div>

      <p><strong>Form Source:</strong> ${source || "Landing Page"}</p>

      <hr/>

      <p style="font-size:12px;color:#666">
      ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
      </p>

      </div>
      `,
    });

    if (adminEmail.error) {
      console.error(adminEmail.error);
      return NextResponse.json(
        { error: "Email failed" },
        { status: 500 }
      );
    }

    // ======================
    // USER AUTO REPLY
    // ======================

    await resend.emails.send({
      from: "Genix Fertility <enquiry@genixfertility.in>",
      to: [email],
      subject: "We received your enquiry - Genix Fertility",
      html: `
      <div style="font-family:Arial;max-width:600px;margin:auto;padding:20px;border:1px solid #eee;border-radius:10px">
      
      <h2>Hello ${name},</h2>

      <p>Thank you for contacting <strong>Genix Fertility</strong>.</p>

      <p>
      Our fertility care coordinator will contact you within
      <strong>24 hours</strong>.
      </p>

      <p><strong>Your Message:</strong></p>

      <div style="background:#fef2f2;padding:10px;border-radius:6px">
      "${message}"
      </div>

      <br/>

      <p>
      Regards,<br>
      <strong>Genix Fertility Team</strong>
      </p>

      </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}