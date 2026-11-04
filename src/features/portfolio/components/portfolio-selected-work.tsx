import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PortfolioVisual } from "~/components/ui/portfolio-visual";
import { PortfolioLink } from "~/components/ui/portfolio-link";
import { caseStudies } from "~/features/case-studies/config/case-studies";

export function PortfolioSelectedWork() {
  return (
    <section className="bg-mist py-16 sm:py-24" aria-labelledby="work-title">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1440px] sm:w-[calc(100%-5rem)]">
        <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 lg:flex-row lg:items-end">
          <div>
            <h2
              id="work-title"
              className="font-display font-medium text-[clamp(43px,7vw,102px)] leading-none tracking-[-.045em]"
            >
              Behind the day.
            </h2>
          </div>
          <PortfolioLink href="/case-studies" quiet>
            All case studies
          </PortfolioLink>
        </div>
        <div className="grid gap-9 md:grid-cols-[1.2fr_1fr] md:gap-12">
          <article>
            <Link
              href="/case-studies/the-executive-week"
              className="group block"
            >
              <PortfolioVisual className="relative aspect-[1.6] overflow-hidden bg-rule">
                <Image
                  src={caseStudies[0].image}
                  alt={caseStudies[0].alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 52vw"
                  className="object-cover object-center saturate-[.35] transition-transform duration-1000 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105 motion-reduce:transition-none"
                />
                <span className="absolute bottom-5 right-5 grid size-11 place-items-center rounded-full bg-paper text-ink">
                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.2}
                    aria-hidden="true"
                  />
                </span>
              </PortfolioVisual>
              <p className="mb-3 mt-5 text-caption text-muted">
                Executive organisation / Work sample
              </p>
              <h3 className="font-display font-medium text-[clamp(27px,2.9vw,42px)] tracking-[-.03em]">
                The executive week.
              </h3>
              <p className="mt-3 max-w-[480px] text-body text-muted">
                {caseStudies[0].summary}
              </p>
            </Link>
          </article>
          <article className="md:mt-12">
            <Link
              href="/case-studies/every-journey-considered"
              className="group block"
            >
              <PortfolioVisual className="relative aspect-[1.45] overflow-hidden bg-rule">
                <Image
                  src={caseStudies[1].image}
                  alt={caseStudies[1].alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="object-cover saturate-[.35] transition-transform duration-1000 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105 motion-reduce:transition-none"
                />
                <span className="absolute bottom-5 right-5 grid size-11 place-items-center rounded-full bg-paper text-ink">
                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.2}
                    aria-hidden="true"
                  />
                </span>
              </PortfolioVisual>
              <p className="mb-3 mt-5 text-caption text-muted">
                Travel & personal logistics / Work sample
              </p>
              <h3 className="font-display font-medium text-[clamp(27px,2.9vw,42px)] tracking-[-.03em]">
                Every journey, considered.
              </h3>
              <p className="mt-3 max-w-[440px] text-body text-muted">
                {caseStudies[1].summary}
              </p>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
