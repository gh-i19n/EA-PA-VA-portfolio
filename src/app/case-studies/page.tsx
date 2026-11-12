import type { Metadata } from "next";
import { CaseStudiesPage } from "~/features/case-studies/components/case-studies-page";

export const metadata: Metadata = { title: "Project", description: "Portfolio work samples in executive support, project coordination, Excel reporting and travel planning." };

export default function Page() { return <CaseStudiesPage />; }
