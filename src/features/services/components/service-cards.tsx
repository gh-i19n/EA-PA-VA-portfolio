import { PortfolioLink } from "~/components/ui/portfolio-link";
import { serviceAreas } from "../config/services-content";
import { ServiceFlyerCard } from "./service-flyer-card";

export function ServiceCards() {
  return (
    <section
      id="skills-title"
      className="bg-sheet py-14 sm:py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1440px] sm:w-[calc(100%-5rem)]">
        <div className="mb-10 sm:mb-14">
          <h2
            id="services-heading"
            className="font-display text-[clamp(40px,5.5vw,78px)] font-medium leading-[1.05] tracking-[-.04em]"
          >
            How I can help.
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,32rem),1fr))] gap-6 sm:gap-8">
          {serviceAreas.map((service) => (
            <ServiceFlyerCard key={service.id} service={service} />
          ))}
        </div>
        <div className="mt-8 flex justify-end">
          <PortfolioLink href="/case-studies" quiet>
            Explore the projects
          </PortfolioLink>
        </div>
      </div>
    </section>
  );
}
