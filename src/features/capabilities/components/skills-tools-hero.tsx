import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { PortfolioPageTitle } from "~/components/ui/portfolio-page-title";
import { PortfolioVisual } from "~/components/ui/portfolio-visual";

export function SkillsToolsHero() {
  return (
    <header className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1440px] items-center gap-10 pb-12 pt-8 sm:w-[calc(100%-5rem)] sm:py-12 md:grid-cols-[1fr_1.05fr] lg:gap-16 lg:py-16 xl:gap-24">
      <div className="min-w-0">
        <PortfolioPageTitle title={"Skills &\ntools."} />
        <p className="mt-7 max-w-[460px] text-pretty text-body text-muted sm:mt-9">
          I keep calendars, communication and day-to-day tasks organised,
          bringing structure to your work with practical skills and familiar
          tools.
        </p>
        <nav
          aria-label="Explore skills and tools"
          className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3 sm:mt-9"
        >
          <a
            href="#skills-title"
            className="group inline-flex min-h-11 items-center gap-4 border-b border-rule py-2 text-label"
          >
            Explore my skills
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
      <PortfolioVisual
        reveal="arrival"
        className="relative aspect-[1.2] w-full bg-mist md:aspect-[.85] lg:aspect-[1.2]"
      >
        <Image
          src="/images/ay-editorial-desk.png"
          alt="An open notebook and pen on a carefully arranged desk"
          fill
          loading="eager"
          sizes="(min-width: 1520px) 690px, (min-width: 768px) 48vw, 95vw"
          className="object-cover object-[center_65%]"
        />
      </PortfolioVisual>
    </header>
  );
}
