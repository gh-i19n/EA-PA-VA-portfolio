import type { Metadata } from "next";
import { CaseStudiesPage } from "~/features/case-studies/components/case-studies-page";

export const metadata: Metadata = { title: "Case Studies", description: "Illustrative studies of executive coordination and thoughtful travel support." };

export default function Page() { return <CaseStudiesPage />; }
