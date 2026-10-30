import type { Metadata } from "next";
import { ContactPage } from "~/features/contact/components/contact-page";

export const metadata: Metadata = { title: "Contact", description: "Introduce yourself and explore working with AY." };

export default function Page() { return <ContactPage />; }
