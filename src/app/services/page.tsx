import type { Metadata } from "next";
import { ServicesPage } from "~/features/services/components/services-page";

export const metadata: Metadata = { title: "Services", description: "Explore executive, virtual and personal assistance, shaped around your priorities." };

export default function Page() { return <ServicesPage />; }
