import { PortfolioVisual } from "~/components/ui/portfolio-visual";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { EditorialPageIntro } from "~/components/ui/editorial-page-intro";
import { caseStudies } from "../config/case-studies";

export function CaseStudiesPage() {
  return (
    <>
      <EditorialPageIntro
        label="Case studies / Illustrative scenarios"
        title="In practice."
        description="The preparation, judgment and follow-through behind a well-run day. These sample scenarios show how I would approach the work; they contain no client information."
      />
      <section
        className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1440px] gap-x-12 gap-y-14 pb-16 sm:w-[calc(100%-5rem)] sm:pb-28 md:grid-cols-[1.1fr_1fr] md:gap-y-24"
        aria-label="Illustrative case studies"
      >
        {caseStudies.map((study, index) => (
          <article
            key={study.slug}
            className={
              index === 1
                ? "md:mt-32"
                : index === 2
                  ? "md:col-span-2 md:ml-auto md:w-[72%]"
                  : undefined
            }
          >
            <Link href={`/case-studies/${study.slug}`} className="group block">
              <PortfolioVisual
                className={`relative overflow-hidden bg-mist ${index === 2 ? "aspect-[1.65]" : "aspect-[1.05]"}`}
              >
                <Image
                  src={study.image}
                  alt={study.alt}
                  fill
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes={
                    index === 2
                      ? "(max-width:768px) 90vw,70vw"
                      : "(max-width:768px) 90vw,47vw"
                  }
                  className="object-cover object-center saturate-[.3] transition-transform duration-1000 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105 motion-reduce:transition-none"
                />
                <span className="absolute bottom-5 right-5 grid size-12 place-items-center rounded-full bg-paper text-ink">
                  <ArrowUpRight
                    size={22}
                    strokeWidth={1.2}
                    aria-hidden="true"
                  />
                </span>
              </PortfolioVisual>
              <p className="mb-3 mt-6 text-caption text-muted">
                {study.category} / Sample scenario
              </p>
              <h2 className="font-display font-medium text-[clamp(28px,3.4vw,49px)] leading-[1.1] tracking-[-.035em]">
                {study.title}
              </h2>
              <p className="mt-4 max-w-[410px] text-body text-muted">
                {study.summary}
              </p>
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}
