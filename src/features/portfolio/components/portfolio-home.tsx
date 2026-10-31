import { PortfolioVisual } from "~/components/ui/portfolio-visual";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PortfolioLink } from "~/components/ui/portfolio-link";
import { PortfolioHero } from "./portfolio-hero";
import { PortfolioSupport } from "./portfolio-support";
import { siteImages } from "~/config/site";

export function PortfolioHome() {
  return (
    <>
      <PortfolioHero />
      <PortfolioSupport />
      <section className="bg-mist py-16 sm:py-24" aria-labelledby="work-title">
        <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1440px] sm:w-[calc(100%-5rem)]">
          <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 lg:flex-row lg:items-end">
            <div>
              <p className="mb-5 text-label text-muted">
                Selected thinking / Illustrative scenarios
              </p>
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
                <PortfolioVisual className="relative aspect-[1.12] overflow-hidden bg-rule">
                  <Image
                    src="/images/folio/meeting-room.jpg"
                    alt="A meeting room prepared for a leadership conversation"
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
                  Executive organisation / Sample scenario
                </p>
                <h3 className="font-display font-medium text-[clamp(27px,2.9vw,42px)] tracking-[-.03em]">
                  The executive week.
                </h3>
              </Link>
            </article>
            <article className="md:mt-28">
              <Link
                href="/case-studies/every-journey-considered"
                className="group block"
              >
                <PortfolioVisual className="relative aspect-[.94] overflow-hidden bg-rule">
                  <Image
                    src="/images/folio/in-transit.jpg"
                    alt="An aircraft wing over the clouds"
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
                  Travel & personal logistics / Sample scenario
                </p>
                <h3 className="font-display font-medium text-[clamp(27px,2.9vw,42px)] tracking-[-.03em]">
                  Every journey, considered.
                </h3>
              </Link>
            </article>
          </div>
        </div>
      </section>
      <section
        className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1440px] gap-9 py-16 sm:w-[calc(100%-5rem)] sm:py-28 md:grid-cols-[.75fr_1.25fr] md:gap-20 lg:gap-32"
        aria-labelledby="personal-title"
      >
        <PortfolioVisual className="relative aspect-[1.04] overflow-hidden bg-mist">
          <Image
            src={siteImages.introductionPortrait}
            alt="AY working at her desk, taking notes beside her laptop"
            fill
            sizes="(max-width:768px) 90vw,35vw"
            className="object-cover object-center"
          />
        </PortfolioVisual>
        <div className="self-center">
          <p className="mb-7 text-label text-muted">
            The person behind the preparation
          </p>
          <h2
            id="personal-title"
            className="font-display font-medium text-[clamp(37px,4.9vw,70px)] leading-[1.05] tracking-[-.035em]"
          >
            Close to the detail.
            <br />
            Clear on what matters.
          </h2>
          <p className="mb-6 mt-7 max-w-[400px] text-body text-muted">
            I learn how you work, when to act and when a decision needs your
            attention. Discretion, sound judgment and a personal sense of
            ownership shape the way I support you.
          </p>
          <PortfolioLink href="/about" quiet>
            Get to know AY
          </PortfolioLink>
        </div>
      </section>
    </>
  );
}
