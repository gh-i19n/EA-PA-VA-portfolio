import type { Metadata } from "next";
import { CredentialsPage } from "~/features/credentials/components/credentials-page";

export const metadata: Metadata = { title: "Credentials & Testimonials", description: "Professional recommendations and Ayomide Ajibola’s executive assistant CV." };

export default function Page() { return <CredentialsPage />; }
