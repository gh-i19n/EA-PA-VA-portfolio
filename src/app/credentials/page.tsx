import type { Metadata } from "next";
import { CredentialsPage } from "~/features/credentials/components/credentials-page";

export const metadata: Metadata = { title: "Testimonials & Certificates", description: "Client perspectives, professional learning and verified credentials." };

export default function Page() { return <CredentialsPage />; }
