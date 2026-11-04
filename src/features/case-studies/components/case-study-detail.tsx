import { PortfolioVisual } from "~/components/ui/portfolio-visual";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { EditorialPageIntro } from "~/components/ui/editorial-page-intro";
import { caseStudies, type CaseStudy } from "../config/case-studies";
import { WorkDocument } from "./work-document";

export function CaseStudyDetail({ study }: { study: CaseStudy }) {
  const index = caseStudies.findIndex((item) => item.slug === study.slug);
  const next = caseStudies[(index + 1) % caseStudies.length];
  return (
    <>
      <div className="mx-auto mt-6 w-[calc(100%-2.5rem)] max-w-[1440px] sm:w-[calc(100%-5rem)]">
        <Link
          href="/case-studies"
          className="inline-flex min-h-11 items-center gap-3 text-label"
        >
          <ArrowLeft size={14} strokeWidth={1.3} aria-hidden="true" />
          All case studies
        </Link>
      </div>
      <EditorialPageIntro
        title={study.title}
        description={study.summary}
      />
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1440px] sm:w-[calc(100%-5rem)]">
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
      </div>
      <div className="bg-sheet mt-12 sm:mt-20">
        <section
          className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1440px] gap-8 py-14 sm:w-[calc(100%-5rem)] sm:py-24 lg:grid-cols-[.8fr_1.2fr] lg:gap-28"
          aria-labelledby="brief-title"
        >
          <h2
            id="brief-title"
            className="font-display font-medium text-[clamp(36px,5vw,72px)] leading-none tracking-[-.035em]"
          >
            The brief.
          </h2>
          <div>
            <p className="max-w-[650px] text-body">
              {study.challenge}
            </p>
            <ul className="mt-8 grid list-none gap-3 border-t border-rule pt-6">
              {study.constraints.map((item) => (
                <li key={item} className="text-support text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <section
        className="bg-mist py-16 sm:py-24"
        aria-labelledby="approach-title"
      >
        <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1440px] sm:w-[calc(100%-5rem)]">
          <h2
            id="approach-title"
            className="font-display font-medium mb-12 text-[clamp(40px,6vw,86px)] leading-none tracking-[-.04em]"
          >
            The approach.
          </h2>
          <ol className="list-none">
            {study.approach.map((step, i) => (
              <li
                className="grid gap-5 border-t border-rule py-8 md:grid-cols-[.12fr_.78fr_1.1fr] md:gap-10 md:py-10"
                key={step.title}
              >
                <span className="pt-1 text-label text-muted">{i + 1}.</span>
                <h3 className="font-display font-medium max-w-[370px] text-[28px] leading-[1.15] tracking-[-.03em]">
                  {step.title}
                </h3>
                <p className="max-w-[550px] text-body text-muted">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section
        className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1440px] gap-10 py-16 sm:w-[calc(100%-5rem)] sm:py-24 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-28"
        aria-labelledby="handoff-title"
      >
        <div>
          <h2
            id="handoff-title"
            className="font-display font-medium text-[clamp(37px,5vw,72px)] leading-[1.04] tracking-[-.04em]"
          >
            Make the next
            <br />
            step clear.
          </h2>
          <ul className="my-8 list-none space-y-3">
            {study.deliverables.map((item) => (
              <li
                className="flex gap-3 text-support before:mt-2 before:size-[3px] before:shrink-0 before:bg-ink before:content-['']"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="max-w-[450px] border-t border-rule pt-6 text-body text-muted">
            {study.judgment}
          </p>
        </div>
        <div className="mx-auto w-full max-w-[520px]">
          <WorkDocument variant={study.sample} />
        </div>
      </section>
      <div className="bg-linen ">
        <section
          className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1440px] gap-8 border-t border-rule py-12 sm:w-[calc(100%-5rem)] sm:py-16 lg:grid-cols-[.8fr_1.2fr] lg:gap-28"
          aria-labelledby="outcome-title"
        >
          <h2 id="outcome-title" className="font-display font-medium text-[30px] tracking-[-.03em]">
            What this enables.
          </h2>
          <p className="max-w-[620px] text-body text-muted">
            {study.intendedResult}
          </p>
        </section>
      </div>
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1440px] pb-16 sm:w-[calc(100%-5rem)] sm:pb-24">
        <Link
          href={`/case-studies/${next.slug}`}
          className="group flex items-end justify-between gap-7 border-t border-rule pt-8"
        >
          <span>
            <span className="mb-5 block text-label text-muted">
              Next illustrative study
            </span>
            <span className="font-display text-[clamp(30px,5vw,72px)] font-medium leading-[1.1] tracking-[-.035em]">
              {next.title}
            </span>
          </span>
          <ArrowUpRight
            size={35}
            strokeWidth={1}
            className="shrink-0 transition-transform duration-300 group-hover:rotate-45 motion-reduce:transition-none"
            aria-hidden="true"
          />
        </Link>
      </div>
    </>
  );
}
