import { PortfolioVisual } from "~/components/ui/portfolio-visual";
import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { PortfolioLink } from "~/components/ui/portfolio-link";
import { PortfolioPageTitle } from "~/components/ui/portfolio-page-title";
import { PortfolioContours } from "~/components/ui/portfolio-contours";

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
      <div className="relative isolate overflow-hidden rounded-feature bg-mist">
        <PortfolioVisual
          reveal="arrival"
          radius="inherit"
          className="absolute inset-0"
        >
          <Image
            src="/images/folio/portrait-placeholder.jpg"
            alt="Stock portrait used as a design placeholder for AY"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 640px) 100vw, 95vw"
            className="object-cover object-[50%_10%] saturate-[.35] max-sm:object-[40%_center]"
          />
          <PortfolioContours appearance="portrait" />
        </PortfolioVisual>
        <div
          className="absolute inset-0 bg-linear-to-t from-[#151914]/90 via-[#151914]/15 to-transparent"
          aria-hidden="true"
        />
        <div className="relative flex min-h-[540px] flex-col justify-end px-5 pb-7 pt-24 text-white sm:min-h-[650px] sm:px-10 sm:pb-10 lg:min-h-[min(76dvh,850px)] lg:px-14 lg:pb-12">
          <p className="mb-6 max-w-[220px] text-support text-white/90 sm:mb-8 sm:max-w-none">
            The details, anticipated.
            <br />
            The day, taken care of.
          </p>
          <div className="mb-16 ml-auto w-fit max-w-full text-right sm:mb-0">
            <PortfolioPageTitle
              title={"Executive\nAssistant."}
              id="hero-title"
              appearance="portrait"
            />
          </div>
          <a
            className="absolute bottom-9 left-6 grid size-12 place-items-center rounded-full border border-white/50 sm:bottom-12 sm:left-10 sm:size-16 lg:left-14"
            href="#introduction"
            aria-label="Discover AY's executive support"
          >
            <ArrowDownRight size={25} strokeWidth={1} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-x-8 gap-y-2 py-4 text-caption text-muted">
        <span>Executive, virtual & personal support</span>
        <span className="text-right">Portrait placeholder / Dayana Joseph</span>
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
