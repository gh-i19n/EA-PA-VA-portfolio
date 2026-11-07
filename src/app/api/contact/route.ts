import { siteContact } from "~/config/site";
import { handleContactRequest } from "~/features/contact/services/contact-request";

export function POST(request: Request) {
  return handleContactRequest(request, siteContact.email);
}
