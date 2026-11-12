import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PortfolioVisual } from "~/components/ui/portfolio-visual";
import { PortfolioLink } from "~/components/ui/portfolio-link";
import travelCoordinationImage from "../../../../public/images/work/travel-coordination.png";

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
              Behind the scenes.
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
              <PortfolioVisual className="relative overflow-hidden bg-rule">
                <Image
                  src="/images/work/calendar-month-view.png"
                  alt="Google Calendar month view with scheduled meetings, sessions, and follow-ups"
                  width={1913}
                  height={931}
                  unoptimized
                  className="block h-auto w-full"
                />
              </PortfolioVisual>
              <h3 className="mt-5 flex items-center justify-between gap-4 font-display font-medium text-[clamp(27px,2.9vw,42px)] tracking-[-.03em]">
                <span>Calendar scheduling.</span>
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-paper text-ink">
                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.2}
                    aria-hidden="true"
                  />
                </span>
              </h3>
            </Link>
          </article>
          <article className="md:mt-12">
            <Link
              href="/case-studies/every-journey-considered"
              className="group block"
            >
              <PortfolioVisual className="relative overflow-hidden bg-rule">
                <Image
                  src={travelCoordinationImage}
                  alt="Travel coordination overview showing a Lagos–Abuja itinerary and boarding pass, with a separate Abuja–Lagos flight record"
                  width={1800}
                  height={1200}
                  unoptimized
                  className="block h-auto w-full"
                />
              </PortfolioVisual>
              <h3 className="mt-5 flex items-center justify-between gap-4 font-display font-medium text-[clamp(27px,2.9vw,42px)] tracking-[-.03em]">
                <span>Travel Booking</span>
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-paper text-ink">
                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.2}
                    aria-hidden="true"
                  />
                </span>
              </h3>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
