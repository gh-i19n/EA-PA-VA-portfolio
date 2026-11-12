import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PortfolioVisual } from "~/components/ui/portfolio-visual";
import { EditorialPageIntro } from "~/components/ui/editorial-page-intro";
import type { CaseStudy } from "../types/case-study";
import { projectRecordings } from "../config/project-recordings";
import { projectStories } from "../config/project-stories";
import { ProjectRecordingGallery } from "./project-recording-gallery";
import { ProjectSampleDetails } from "./project-sample-details";

export function CaseStudyDetail({ study }: { study: CaseStudy }) {
  const recordings = projectRecordings[study.serviceCategory];

  return (
    <>
      <div className="mx-auto mt-6 w-[calc(100%-2.5rem)] max-w-[1440px] sm:w-[calc(100%-5rem)]">
        <Link href="/case-studies" className="inline-flex min-h-11 items-center gap-3 text-label">
          <ArrowLeft size={14} strokeWidth={1.3} aria-hidden="true" />
          All case studies
        </Link>
      </div>
      <EditorialPageIntro title={study.title} description={study.summary} />
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1440px] pb-16 sm:w-[calc(100%-5rem)] sm:pb-24">
        {recordings.length ? (
          <ProjectRecordingGallery recordings={recordings} serviceCategory={study.serviceCategory} />
        ) : (
          <>
            <PortfolioVisual className="relative aspect-[1.2] overflow-hidden bg-mist sm:aspect-[2.1]">
              <Image
                src={study.image}
                alt={study.alt}
                fill
                loading="eager"
                sizes="95vw"
                className="object-cover object-[center_45%] saturate-[.3]"
              />
            </PortfolioVisual>
            {study.artifact && (
              <a
                href={study.artifact.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex min-h-11 items-center gap-3 text-label underline underline-offset-4"
              >
                {study.artifact.label}
                <span className="sr-only">in a new tab</span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            )}
            {study.serviceCategory === "travel" && (
              <ProjectSampleDetails
                id={`${study.slug}-details`}
                title="Executive travel planning"
                story={projectStories["travel-itinerary"]}
                imageSrc={study.artifact?.preview ?? study.image}
              />
            )}
          </>
        )}
      </div>
    </>
  );
}
