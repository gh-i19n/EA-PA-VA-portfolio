import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PortfolioLink } from "~/components/ui/portfolio-link";
import { EditorialPageIntro } from "~/components/ui/editorial-page-intro";
import { onboardingSteps, serviceAreas } from "../config/services-content";

const service = serviceAreas[0];

export function ExecutiveAdministrativeSupportPage() {
  return (
    <>
      <div className="mx-auto mt-6 w-[calc(100%-2.5rem)] max-w-[1440px] sm:w-[calc(100%-5rem)]">
        <Link
          href="/services"
          className="inline-flex min-h-11 items-center gap-3 text-label"
        >
          <ArrowLeft size={14} strokeWidth={1.3} aria-hidden="true" />
          All services
        </Link>
      </div>

      <EditorialPageIntro
        title={service.title}
        description={`${service.introduction} ${service.description}`}
      />

      <section
        className="bg-sheet py-14 sm:py-24"
        aria-labelledby="support-scope-title"
      >
        <div className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1440px] gap-10 sm:w-[calc(100%-5rem)] lg:grid-cols-[.8fr_1.2fr] lg:gap-28">
          <div>
            <p className="text-label text-muted">Executive support</p>
            <h2
              id="support-scope-title"
              className="mt-4 max-w-[520px] font-display text-[clamp(38px,5.4vw,76px)] font-medium leading-[1.02] tracking-[-.04em]"
            >
              Keep the day organised.
            </h2>
          </div>
          <div>
            <p className="max-w-[650px] text-body text-muted">
              Support is shaped around the work you want to delegate. These are
              the practical areas I can take on:
            </p>
            <ul className="mt-8 list-none border-t border-rule">
              {service.capabilities.map((capability) => (
                <li
                  className="border-b border-rule py-5 text-[18px] leading-snug sm:text-[21px]"
                  key={capability}
                >
                  {capability}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1440px] gap-10 py-16 sm:w-[calc(100%-5rem)] sm:py-24 lg:grid-cols-[.8fr_1.2fr] lg:gap-28"
        aria-labelledby="working-together-title"
      >
        <div>
          <p className="text-label text-muted">Getting started</p>
          <h2
            id="working-together-title"
            className="mt-4 max-w-[520px] font-display text-[clamp(38px,5.4vw,76px)] font-medium leading-[1.02] tracking-[-.04em]"
          >
            A clear way to begin.
          </h2>
        </div>
        <ol className="list-none">
          {onboardingSteps.map((step) => (
            <li
              className="border-t border-rule py-6 first:pt-0 sm:py-8"
              key={step.title}
            >
              <h3 className="font-display text-[24px] font-medium leading-tight tracking-[-.03em] sm:text-[30px]">
                {step.title}
              </h3>
              <p className="mt-3 max-w-[620px] text-body text-muted">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-ink py-14 text-paper sm:py-20">
        <div className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1440px] gap-8 sm:w-[calc(100%-5rem)] lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-label text-paper/70">Related work sample</p>
            <h2 className="mt-4 font-display text-[clamp(36px,5vw,70px)] font-medium leading-[1.04] tracking-[-.04em]">
              The executive week.
            </h2>
            <p className="mt-4 max-w-[600px] text-body text-paper/75">
              Bookable availability and a prepared meeting agenda, brought into
              a clearer working rhythm.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <PortfolioLink href={service.sample.href} light quiet>
              View the work sample
            </PortfolioLink>
            <PortfolioLink href="/contact" light quiet>
              Discuss your support
            </PortfolioLink>
          </div>
        </div>
      </section>
    </>
  );
}
