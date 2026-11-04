import { PortfolioVisual } from "~/components/ui/portfolio-visual";
import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { PortfolioContours } from "~/components/ui/portfolio-contours";
import { HeroRoleTitle } from "./hero-role-title";

export function PortfolioHero() {
  return (
    <section
      className="mx-auto w-[calc(100%-2.5rem)] max-w-[1440px] pb-6 pt-5 sm:w-[calc(100%-5rem)] sm:pt-7"
      aria-labelledby="hero-title"
    >
      <div className="relative isolate overflow-hidden rounded-feature bg-ink">
        <PortfolioVisual
          reveal="arrival"
          radius="inherit"
          className="absolute inset-0"
        >
          <Image
            src="/images/ay.png"
            alt="AY smiling in a mustard blouse"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 640px) 100vw, 95vw"
            className="translate-y-70 scale-[1.3] origin-bottom-left object-contain object-left-bottom max-lg:-translate-x-20 max-lg:translate-y-35 max-lg:scale-[1]"
          />
          <PortfolioContours appearance="portrait" />
        </PortfolioVisual>
        <div
          className="absolute inset-0 bg-linear-to-t from-[#151914]/90 via-[#151914]/15 to-transparent"
          aria-hidden="true"
        />
        <div className="relative flex w-full min-h-[clamp(440px,92vw,540px)] flex-col justify-end px-5 pb-6 pt-24 text-white sm:min-h-[650px] sm:px-10 sm:pb-10 lg:min-h-[min(76dvh,850px)] lg:px-14 lg:pb-12">
          <div className="absolute left-5 right-20 top-6 z-10 text-left sm:left-auto sm:right-10 sm:top-10 sm:w-[min(46%,440px)] sm:text-right lg:right-14">
            <p className="font-display text-[clamp(26px,2.4vw,38px)] font-medium leading-[1.15] tracking-[-.035em]">
              I&apos;m Ayomide Ajibola.
              <span className="mt-1 block text-white/75">Call me AY.</span>
            </p>
            <p className="mt-4 max-w-[360px] text-support text-white/85 sm:ml-auto">
              I help founders and senior leaders stay focused, prepared and a
              step ahead.
            </p>
          </div>
          <HeroRoleTitle id="hero-title" />
          <a
            className="absolute right-5 top-5 grid size-12 place-items-center rounded-full border border-white/50 sm:bottom-12 sm:left-10 sm:right-auto sm:top-auto sm:size-16 lg:left-14"
            href="#introduction"
            aria-label="Discover AY's executive support"
          >
            <ArrowDownRight size={25} strokeWidth={1} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
