import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      return NextResponse.json(
        { error: "Server is not configured with DISCORD_WEBHOOK_URL" },
        { status: 500 }
      );
    }

    const content = [
      "New contact form submission from fly20.dev:",
      name ? `**Name:** ${name}` : "**Name:** N/A",
      email ? `**Email:** ${email}` : "**Email:** N/A",
      "**Message:**",
      message || "N/A",
    ].join("\n");

    const discordResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });

    if (!discordResponse.ok) {
      return NextResponse.json(
        { error: "Failed to send message to Discord" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error handling contact form submission:", error);
    return NextResponse.json(
      { error: "Unexpected error while handling contact form" },
      { status: 500 }
    );
  }
}
