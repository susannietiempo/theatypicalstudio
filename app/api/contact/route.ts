import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  // Check if Resend API key is configured
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json(
      { error: "Email service is not configured" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, project, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Get the recipient email from environment variable, or use a default
    const recipientEmail = process.env.CONTACT_EMAIL || "hello@theatypicalstudio.com";
    
    // Get the sender email from environment variable, or use Resend's test domain
    const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";

    // Escape HTML to prevent XSS
    const escapeHtml = (text: string) => {
      const map: Record<string, string> = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      };
      return text.replace(/[&<>"']/g, (m) => map[m]);
    };

    const escapedName = escapeHtml(name);
    const escapedEmail = escapeHtml(email);
    const escapedProject = project ? escapeHtml(project) : "";
    const escapedMessage = escapeHtml(message).replace(/\n/g, "<br>");

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: `The Atypical Studio <${fromEmail}>`,
      to: [recipientEmail],
      replyTo: email,
      subject: project
        ? `New conversation: ${escapedProject}`
        : "New conversation from website",
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1A2332; font-size: 24px; margin-bottom: 20px;">New Conversation Request</h2>
          
          <div style="margin-bottom: 20px;">
            <p style="margin: 8px 0;"><strong>Name:</strong> ${escapedName}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> ${escapedEmail}</p>
            ${escapedProject ? `<p style="margin: 8px 0;"><strong>Project:</strong> ${escapedProject}</p>` : ""}
          </div>
          
          <div style="margin-top: 24px;">
            <h3 style="color: #1A2332; font-size: 18px; margin-bottom: 12px;">Message:</h3>
            <div style="background-color: #F5F3EF; padding: 16px; border-radius: 8px; color: #1A2332; line-height: 1.6;">
              ${escapedMessage}
            </div>
          </div>
        </div>
      `,
      text: `
New Conversation Request

Name: ${name}
Email: ${email}
${project ? `Project: ${project}` : ""}

Message:
${message}
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

