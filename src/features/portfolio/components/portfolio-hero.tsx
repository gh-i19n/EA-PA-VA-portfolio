import { PortfolioVisual } from "~/components/ui/portfolio-visual";
import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { PortfolioLink } from "~/components/ui/portfolio-link";
import { PortfolioPageTitle } from "~/components/ui/portfolio-page-title";

export function PortfolioHero() {
  return (
    <section
      className="mx-auto w-[calc(100%-2.5rem)] max-w-[1440px] pb-6 sm:w-[calc(100%-5rem)]"
      aria-labelledby="hero-title"
    >
      <div className="mb-5 flex items-center justify-between gap-5 pt-5 text-[10px] sm:mb-7 sm:pt-7 sm:text-xs">
        <p>AY / Senior executive assistant</p>
        <p className="text-right text-muted">For founders & senior leaders</p>
      </div>
      <div className="relative isolate overflow-hidden bg-mist">
        <PortfolioVisual reveal="arrival" className="absolute inset-0">
          <Image
            src="/images/folio/portrait-placeholder.jpg"
            alt="Stock portrait used as a design placeholder for AY"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 640px) 100vw, 95vw"
            className="object-cover object-[50%_10%] saturate-[.35] max-sm:object-[40%_center]"
          />
        </PortfolioVisual>
        <div
          className="absolute inset-0 bg-linear-to-t from-[#151914]/90 via-[#151914]/15 to-transparent"
          aria-hidden="true"
        />
        <div className="relative flex min-h-[540px] flex-col justify-end px-5 pb-7 pt-24 text-white sm:min-h-[650px] sm:px-10 sm:pb-10 lg:min-h-[min(76dvh,850px)] lg:px-14 lg:pb-12">
          <p className="mb-6 max-w-[180px] text-[11px] leading-[1.7] text-white/75 sm:mb-8 sm:max-w-none">
            The details, anticipated.
            <br />
            The day, taken care of.
          </p>
          <PortfolioPageTitle
            title={"Executive\nAssistant."}
            id="hero-title"
            appearance="portrait"
          />
          <a
            className="absolute bottom-9 right-6 grid size-12 place-items-center rounded-full border border-white/50 sm:bottom-12 sm:right-10 sm:size-16 lg:right-14"
            href="#introduction"
            aria-label="Discover AY's executive support"
          >
            <ArrowDownRight size={25} strokeWidth={1} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="flex justify-between gap-6 py-4 text-[9px] text-muted">
        <span>Executive, virtual & personal support</span>
        <span className="text-right">Portrait placeholder / Dayana Joseph</span>
      </div>
      <div
        id="introduction"
        className="grid gap-8 pb-10 pt-14 sm:pb-20 sm:pt-24 lg:grid-cols-[1.55fr_1fr] lg:gap-28"
      >
        <h2 className="max-w-[820px] text-[clamp(35px,4.6vw,66px)] leading-[1.16] tracking-[-.055em]">
          I protect your time.
          <br />
          Connect the details.
          <br />
          Keep things moving.
        </h2>
        <div className="max-w-[390px] lg:pt-2">
          <p className="text-sm leading-[1.85] text-muted">
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
