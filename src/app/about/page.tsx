import type { Metadata } from "next";
import { AboutPage } from "~/features/profile/components/about-page";

export const metadata: Metadata = { title: "About", description: "Meet AY, a thoughtful partner for executive, virtual and personal support." };

export default function Page() { return <AboutPage />; }
