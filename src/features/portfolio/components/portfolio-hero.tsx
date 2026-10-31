import { PortfolioVisual } from "~/components/ui/portfolio-visual";
import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { PortfolioLink } from "~/components/ui/portfolio-link";
import { PortfolioContours } from "~/components/ui/portfolio-contours";
import { HeroRoleTitle } from "./hero-role-title";

export function PortfolioHero() {
  return (
    <section
      className="mx-auto w-[calc(100%-2.5rem)] max-w-[1440px] pb-6 sm:w-[calc(100%-5rem)]"
      aria-labelledby="hero-title"
    >
      <div className="mb-5 flex items-center justify-between gap-x-8 gap-y-2 pt-5 text-caption max-[480px]:flex-col max-[480px]:items-start sm:mb-7 sm:pt-7 sm:text-label">
        <p>AY / Senior executive assistant</p>
        <p className="text-right text-muted">For founders & senior leaders</p>
      </div>
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
          <p className="absolute left-5 top-5 z-10 max-w-[220px] text-left text-support text-white/90 sm:left-10 sm:top-10 sm:max-w-none lg:left-14">
            The details, anticipated.
            <br />
            The day, taken care of.
          </p>
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
      <div className="py-4 text-caption text-muted">
        <span>Executive, virtual & personal support</span>
      </div>
      <div
        id="introduction"
        className="grid gap-8 pb-10 pt-14 sm:pb-20 sm:pt-24 lg:grid-cols-[1.55fr_1fr] lg:gap-28"
      >
        <h2 className="font-display font-medium max-w-[820px] text-[clamp(35px,4.6vw,66px)] leading-[1.16] tracking-[-.035em]">
          I protect your time.
          <br />
          Connect the details.
          <br />
          Keep things moving.
        </h2>
        <div className="max-w-[390px] lg:pt-2">
          <p className="text-body text-muted">
            I&apos;m AY. I work alongside founders and senior leaders to bring
            judgment, structure and follow-through to a demanding day. From
            complex calendars to decision-ready meetings, I take care of the
            work around your work.
          </p>
          <div className="mt-6">
            <PortfolioLink href="/contact">Discuss your support</PortfolioLink>
          </div>
        </div>
      </div>
    </section>
  );
}
