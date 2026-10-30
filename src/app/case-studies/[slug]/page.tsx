import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, findCaseStudy } from "~/features/case-studies/config/case-studies";
import { CaseStudyDetail } from "~/features/case-studies/components/case-study-detail";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return caseStudies.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = findCaseStudy((await params).slug);
  return { title: study?.title ?? "Case study not found", description: study?.summary };
}

export default async function Page({ params }: Props) {
  const study = findCaseStudy((await params).slug);
  if (!study) notFound();
  return <CaseStudyDetail study={study} />;
}
