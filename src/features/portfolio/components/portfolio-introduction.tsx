import Image from "next/image";
import { PortfolioLink } from "~/components/ui/portfolio-link";
import { PortfolioVisual } from "~/components/ui/portfolio-visual";
import { siteImages } from "~/config/site";

export function PortfolioIntroduction() {
  return (
    <section
      id="introduction"
      className="bg-sheet py-14 sm:py-20"
      aria-labelledby="introduction-title"
    >
      <div className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1440px] items-center gap-9 sm:w-[calc(100%-5rem)] md:grid-cols-[minmax(0,.7fr)_minmax(0,1.3fr)] md:gap-12 lg:gap-16 xl:grid-cols-[420px_minmax(0,620px)] xl:justify-center">
        <PortfolioVisual className="relative aspect-[1.12] w-full max-w-[420px] bg-mist">
          <Image
            src={siteImages.introductionPortrait}
            alt="AY working at her desk, taking notes beside her laptop"
            fill
            sizes="(max-width:767px) 90vw, (max-width:1279px) 32vw, 420px"
            className="object-cover object-center"
          />
        </PortfolioVisual>
        <div className="min-w-0 xl:flex xl:flex-col xl:items-start xl:gap-8">
          <h2
            id="introduction-title"
            className="font-display text-[clamp(34px,4.2vw,60px)] font-medium leading-[1.12] tracking-[-.035em] xl:text-[clamp(42px,3.4vw,60px)]"
          >
            More time for the work that matters.
          </h2>
          <div className="mt-6 xl:mt-0">
            <div className="max-w-[620px] space-y-4 text-pretty text-body text-muted">
              <p>
                My name is Ayomide Ajibola, a results-driven Executive Assistant
                who works behind the scenes to help CEOs, executives, and
                founders reclaim their time, stay organised, and keep work
                moving through proactive administrative support and project
                coordination.
              </p>
              <p>
                I have delivered conflict-free scheduling, streamlined team
                coordination, and organised documentation across a 16-person
                team supporting a 500-graduate employability initiative. I have
                also managed follow-ups, coordinated priorities, and handled
                confidential information with discretion, allowing leadership to
                focus more on strategic priorities while I keep the operational
                details moving.
              </p>
            </div>
            <div className="mt-6 flex flex-row flex-wrap items-center justify-start gap-x-8 gap-y-3">
              <PortfolioLink href="/about" quiet>More about me</PortfolioLink>
              <PortfolioLink href="/case-studies" quiet>Explore projects</PortfolioLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
