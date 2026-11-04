import type { Metadata } from "next";
import { CaseStudiesPage } from "~/features/case-studies/components/case-studies-page";

export const metadata: Metadata = { title: "Case Studies", description: "AY’s portfolio work samples in calendar coordination, travel planning and task follow-through." };

export default function Page() { return <CaseStudiesPage />; }
