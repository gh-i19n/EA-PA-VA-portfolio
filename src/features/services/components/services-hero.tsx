import { ArrowDown } from "lucide-react";
import { PortfolioContours } from "~/components/ui/portfolio-contours";
import { PortfolioPageTitle } from "~/components/ui/portfolio-page-title";
import { ServicesToolVisual } from "./services-tool-visual";

export function ServicesHero() {
  return (
    <header className="relative isolate mx-auto grid w-[calc(100%-2.5rem)] max-w-[1440px] items-center gap-10 overflow-hidden pb-14 pt-8 sm:w-[calc(100%-5rem)] sm:py-14 md:grid-cols-[1fr_1.05fr] lg:gap-16 lg:py-16 xl:gap-24">
      <PortfolioContours appearance="services" />
      <div className="relative z-10 min-w-0 [&_h1]:text-[clamp(52px,8.5vw,124px)]">
        <PortfolioPageTitle title={"Services &\ntools."} />
        <p className="mt-7 max-w-[460px] text-pretty text-body text-muted sm:mt-9">
          I manage the calendars, communication and coordination around your
          work, giving your priorities the attention they need. Here is what you
          can put in my hands, and the tools I use to keep it moving.
        </p>
        <nav
          aria-label="Explore services and tools"
          className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3 sm:mt-9"
        >
          <a
            href="#skills-title"
            className="group inline-flex min-h-11 items-center gap-4 border-b border-rule py-2 text-label"
          >
            Explore services
            <ArrowDown
              size={15}
              strokeWidth={1.4}
              aria-hidden="true"
              className="transition-transform group-hover:translate-y-1 motion-reduce:transition-none"
            />
          </a>
          <a
            href="#tools-title"
            className="group inline-flex min-h-11 items-center gap-4 border-b border-rule py-2 text-label"
          >
            See the toolkit
            <ArrowDown
              size={15}
              strokeWidth={1.4}
              aria-hidden="true"
              className="transition-transform group-hover:translate-y-1 motion-reduce:transition-none"
            />
          </a>
        </nav>
      </div>
      <ServicesToolVisual />
    </header>
  );
}
