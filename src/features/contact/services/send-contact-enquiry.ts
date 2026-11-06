import "server-only";

import { contactTopics, type ContactTopic } from "~/features/contact/config/contact-topics";

type ContactEnquiry = {
  name: string;
  email: string;
  topic: ContactTopic;
  message: string;
};

export function parseContactEnquiry(value: unknown): ContactEnquiry | null {
  if (!value || typeof value !== "object") return null;

  const input = value as Record<string, unknown>;
  const name = typeof input.name === "string" ? input.name.trim() : "";
  const email = typeof input.email === "string" ? input.email.trim() : "";
  const topic = typeof input.topic === "string" ? input.topic : "";
  const message = typeof input.message === "string" ? input.message.trim() : "";

  if (
    !name || name.length > 100 ||
    !email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !contactTopics.includes(topic as ContactTopic) ||
    !message || message.length > 1500
  ) {
    return null;
  }

  return { name, email, topic: topic as ContactTopic, message };
}

export async function sendContactEnquiry(
  enquiry: ContactEnquiry,
  recipient: string,
): Promise<"sent" | "not-configured" | "failed"> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) return "not-configured";

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: enquiry.email,
        subject: `New service request: ${enquiry.topic}`,
        text: [
          "A new service request was sent through AY's portfolio.",
          "",
          `Name: ${enquiry.name}`,
          `Email: ${enquiry.email}`,
          `Support requested: ${enquiry.topic}`,
          "",
          "Message:",
          enquiry.message,
        ].join("\n"),
      }),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });

    return response.ok ? "sent" : "failed";
  } catch {
    return "failed";
  }
}
