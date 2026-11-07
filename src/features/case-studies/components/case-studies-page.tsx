import { PortfolioVisual } from "~/components/ui/portfolio-visual";
import { PortfolioContours } from "~/components/ui/portfolio-contours";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "../config/case-studies";
import { projectPresentations } from "../config/project-presentations";

export function CaseStudiesPage() {
  return (
    <>
      <header className="relative isolate mx-auto grid w-[calc(100%-2.5rem)] max-w-[1440px] gap-6 overflow-hidden py-10 sm:w-[calc(100%-5rem)] sm:py-12 md:grid-cols-[1fr_1.1fr] md:items-end md:gap-16">
        <PortfolioContours appearance="project" />
        <h1
          id="projects-title"
          className="relative z-10 font-display text-[clamp(48px,6.5vw,90px)] font-medium leading-none tracking-[-.045em]"
        >
          Project
        </h1>
        <p className="relative z-10 max-w-[530px] text-pretty text-body text-muted md:justify-self-end">
          Explore my work in calendar planning, travel preparation and task
          coordination. Each project includes the original sample and an
          explanation of the work.
        </p>
      </header>
      <div className="bg-sheet py-10 sm:py-14">
        <section
          className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1440px] gap-6 sm:w-[calc(100%-5rem)] lg:grid-cols-3 lg:gap-7 xl:gap-8"
          aria-labelledby="projects-title"
        >
          {caseStudies.map((study, index) => {
            const presentation = projectPresentations[study.sample];
            const document = presentation.format === "document" ? study.artifact : undefined;

            return (
              <article
                key={study.slug}
                className="min-w-0"
                aria-labelledby={`${study.slug}-title`}
              >
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="group grid h-full min-w-0 overflow-hidden rounded-panel border border-rule/70 bg-paper md:grid-cols-[1.05fr_1fr] lg:flex lg:flex-col"
                  aria-labelledby={`${study.slug}-title`}
                >
                  <PortfolioVisual
                    radius="inherit"
                    className={`relative aspect-[1.35] w-full md:aspect-auto md:min-h-[320px] lg:aspect-[1.25] lg:min-h-0 ${
                      presentation.format === "document" ? "bg-linen" : "bg-mist"
                    }`}
                  >
                    <Image
                      src={document?.preview ?? study.image}
                      alt={document?.alt ?? study.alt}
                      fill
                      loading={index === 0 ? "eager" : "lazy"}
                      sizes="(min-width: 1520px) 460px, (min-width: 1024px) 32vw, (min-width: 768px) 50vw, 95vw"
                      className="object-contain p-5 transition-transform duration-700 group-hover:scale-[1.025] motion-reduce:transition-none sm:p-7 lg:p-5 xl:p-7"
                    />
                  </PortfolioVisual>
                  <div className="flex min-w-0 flex-1 flex-col p-6 sm:p-7 lg:p-6 xl:p-8">
                    <p className="text-caption text-muted">{presentation.category}</p>
                    <h2
                      id={`${study.slug}-title`}
                      className="mt-3 font-display text-[clamp(28px,2.4vw,36px)] font-medium leading-[1.12] tracking-[-.03em]"
                    >
                      {presentation.title}
                    </h2>
                    <p className="mt-4 text-pretty text-body text-muted">
                      {study.summary}
                    </p>
                    <ul className="mt-5 flex list-none flex-wrap gap-x-4 gap-y-2 text-caption">
                      {presentation.contents.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <div className="mt-auto pt-7">
                      <span className="flex min-h-11 items-center justify-between gap-5 border-t border-rule pt-4 text-label font-medium">
                        View project
                        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-ink text-paper transition-transform duration-300 group-hover:rotate-45 motion-reduce:transition-none">
                          <ArrowUpRight size={17} strokeWidth={1.3} aria-hidden="true" />
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </section>
      </div>
    </>
  );
}
