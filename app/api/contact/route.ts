import { NextResponse } from "next/server";
import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  console.error("Resend API key is missing");
  throw new Error("Resend API key is missing");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, lastname, email, telephone, subject, message } =
      await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Required fields are missing" },
        { status: 400 }
      );
    } // Send email using Resend
    await resend.emails.send({
      from: "Venador Prim <onboarding@resend.dev>",
      to: ["wedigitalmonk@gmail.com"],
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${telephone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email. Please try again later." },
      { status: 500 }
    );
  }
}
