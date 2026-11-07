import { PortfolioLink } from "~/components/ui/portfolio-link";
import { onboardingSteps } from "../config/services-content";
import { ServiceCards } from "./service-cards";
import { ServicesHero } from "./services-hero";
import { ServicesToolkit } from "./services-toolkit";

export function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceCards />
      <ServicesToolkit />
      <section
        className="bg-sheet py-16 sm:py-24"
        aria-labelledby="process-title"
      >
        <div className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1440px] gap-10 sm:w-[calc(100%-5rem)] lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <div>
            <h2
              id="process-title"
              className="font-display font-medium max-w-[550px] text-[clamp(40px,6vw,84px)] leading-[1.02] tracking-[-.04em]"
            >
              Working
              <br />
              together.
            </h2>
            <div className="mt-7">
              <PortfolioLink href="/contact" quiet>
                Discuss your support
              </PortfolioLink>
            </div>
          </div>
          <ol className="list-none">
            {onboardingSteps.map((step, index) => (
              <li
                key={step.title}
                className="grid grid-cols-[25px_1fr] gap-5 border-t border-rule py-7 first:border-0 first:pt-0"
              >
                <span className="pt-1 text-label text-muted">{index + 1}.</span>
                <div>
                  <h3 className="font-display font-medium text-[23px] leading-[1.3] tracking-[-.025em]">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[440px] text-body text-muted">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
