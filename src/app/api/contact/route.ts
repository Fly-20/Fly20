import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      email,
      message,
      company,
      projectType,
      budget,
      currentPlatform,
      challenge,
    } = await req.json();

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      return NextResponse.json(
        { error: "Server is not configured with DISCORD_WEBHOOK_URL" },
        { status: 500 }
      );
    }

    const lines: string[] = [];

    lines.push("New contact form submission from fly20.dev:");
    lines.push(name ? `**Name:** ${name}` : "**Name:** N/A");
    lines.push(email ? `**Email:** ${email}` : "**Email:** N/A");

    if (company || projectType || budget || currentPlatform || challenge) {
      lines.push("");
      lines.push("**Project Inquiry Details**");
      if (company) lines.push(`**Company:** ${company}`);
      if (projectType) lines.push(`**Project Type:** ${projectType}`);
      if (budget) lines.push(`**Budget Range:** ${budget}`);
      if (currentPlatform) lines.push(`**Current Platform / Stack:** ${currentPlatform}`);
      if (challenge) {
        lines.push("**Biggest Challenge:**");
        lines.push(challenge);
      }
    }

    if (message && !challenge) {
      lines.push("");
      lines.push("**Message:**");
      lines.push(message);
    }

    if (!message && !challenge) {
      lines.push("");
      lines.push("**Message:**");
      lines.push("N/A");
    }

    const content = lines.join("\n");

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
