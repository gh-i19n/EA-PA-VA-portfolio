import Image from "next/image";
import { PortfolioLink } from "~/components/ui/portfolio-link";
import { PortfolioVisual } from "~/components/ui/portfolio-visual";
import { siteImages } from "~/config/site";

export function PortfolioIntroduction() {
  return (
    <section
      id="introduction"
      className="bg-sheet py-14 sm:py-20"
      aria-labelledby="introduction-title"
    >
      <div className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1440px] items-center gap-9 sm:w-[calc(100%-5rem)] md:grid-cols-[minmax(0,.7fr)_minmax(0,1.3fr)] md:gap-12 lg:gap-16 xl:grid-cols-[420px_minmax(0,1fr)]">
        <PortfolioVisual className="relative aspect-[1.12] w-full max-w-[420px] bg-mist">
          <Image
            src={siteImages.introductionPortrait}
            alt="AY working at her desk, taking notes beside her laptop"
            fill
            sizes="(max-width:767px) 90vw, (max-width:1279px) 32vw, 420px"
            className="object-cover object-center"
          />
        </PortfolioVisual>
        <div className="min-w-0 xl:grid xl:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] xl:items-center xl:gap-8">
          <h2
            id="introduction-title"
            className="font-display text-[clamp(34px,4.2vw,60px)] font-medium leading-[1.12] tracking-[-.035em] xl:text-[clamp(42px,3.4vw,60px)]"
          >
            I protect your time.
            <br />
            Connect the details.
            <br />
            Keep things moving.
          </h2>
          <div className="mt-6 xl:mt-0">
            <p className="max-w-[560px] text-pretty text-body text-muted">
              I&apos;m AY, an executive assistant supporting founders and senior
              leaders. I bring judgment, discretion and follow-through to complex
              calendars, decision-ready meetings and the work around your work.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 xl:flex-col xl:items-start xl:gap-y-2">
              <PortfolioLink href="/about" quiet>Get to know AY</PortfolioLink>
              <PortfolioLink href="/contact" quiet>Discuss your support</PortfolioLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
