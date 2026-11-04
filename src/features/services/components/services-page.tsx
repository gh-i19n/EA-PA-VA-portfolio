import { EditorialPageIntro } from "~/components/ui/editorial-page-intro";
import { PortfolioLink } from "~/components/ui/portfolio-link";
import { serviceAreas, onboardingSteps } from "../config/services-content";

export function ServicesPage() {
  return (
    <>
      <EditorialPageIntro
        title={"Executive\nsupport."}
        description="I take responsibility for the preparation, communication and coordination around a demanding role. Here is what you can put in my hands."
      />
      <div className="bg-sheet pt-12 sm:pt-20">
        <section
          className="mx-auto w-[calc(100%-2.5rem)] max-w-[1440px] pb-16 sm:w-[calc(100%-5rem)] sm:pb-28"
          aria-label="Areas of executive support"
        >
          {serviceAreas.map((item) => (
            <article
              id={item.id}
              key={item.id}
              className="grid scroll-mt-10 gap-7 border-t border-rule py-10 sm:py-14 lg:grid-cols-[1.1fr_1fr] lg:gap-24"
            >
              <h2 className="font-display font-medium max-w-[650px] text-[clamp(35px,5.5vw,80px)] leading-[1.04] tracking-[-.04em]">
                {item.title}
              </h2>
              <div className="lg:pt-1">
                <p className="mb-5 max-w-[500px] text-[20px] leading-[1.4] tracking-[-.03em]">
                  {item.introduction}
                </p>
                <p className="max-w-[480px] text-body text-muted">
                  {item.description}
                </p>
                <ul className="mt-7 grid list-none gap-3 sm:grid-cols-2 sm:gap-x-7">
                  {item.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-baseline gap-3 text-label before:size-[3px] before:shrink-0 before:bg-ink before:content-['']"
                    >
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
          <div className="border-t border-rule pt-8">
            <PortfolioLink href="/case-studies" quiet>
              See the thinking in practice
            </PortfolioLink>
          </div>
        </section>
      </div>
      <section
        className="bg-mist py-16 sm:py-24"
        aria-labelledby="process-title"
      >
        <div className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1440px] gap-10 sm:w-[calc(100%-5rem)] lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <h2
            id="process-title"
            className="font-display font-medium max-w-[550px] text-[clamp(40px,6vw,84px)] leading-[1.02] tracking-[-.04em]"
          >
            Working
            <br />
            together.
          </h2>
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
