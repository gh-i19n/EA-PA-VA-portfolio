import "server-only";

import { parseContactEnquiry, sendContactEnquiry } from "~/features/contact/services/send-contact-enquiry";

const maxBodyLength = 8_192;

export async function handleContactRequest(request: Request, recipient: string) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return Response.json(
      { message: "This request could not be verified. Refresh the page and try again." },
      { status: 403 },
    );
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > maxBodyLength) {
    return Response.json({ message: "Your message is too long." }, { status: 413 });
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return Response.json({ message: "This request could not be read." }, { status: 415 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ message: "Please review the form and try again." }, { status: 400 });
  }

  if (
    body && typeof body === "object" &&
    typeof (body as Record<string, unknown>).website === "string" &&
    (body as Record<string, string>).website.trim()
  ) {
    return Response.json({ message: "Your request has been sent to AY." });
  }

  const enquiry = parseContactEnquiry(body);
  if (!enquiry) {
    return Response.json(
      { message: "Please check your details and complete each field before sending." },
      { status: 400 },
    );
  }

  const result = await sendContactEnquiry(enquiry, recipient);
  if (result === "not-configured") {
    return Response.json({ message: "Email delivery is not configured yet." }, { status: 503 });
  }
  if (result === "failed") {
    return Response.json(
      { message: "We couldn't send your request just now. Please try again." },
      { status: 502 },
    );
  }

  return Response.json({ message: "Your service request has been sent to AY." });
}
