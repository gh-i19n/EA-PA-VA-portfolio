import { IntroductionVideo } from "~/components/ui/introduction-video";
import { PortfolioLink } from "~/components/ui/portfolio-link";
import { introductionVideo } from "~/config/site";
import { AboutHero } from "./about-hero";
import { AboutQualities } from "./about-qualities";

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <div className="bg-sheet pt-12 sm:pt-20">
        <section
          className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1440px] gap-10 pb-16 sm:w-[calc(100%-5rem)] sm:pb-28 lg:grid-cols-[1.1fr_1fr] lg:gap-24"
          aria-labelledby="story-title"
        >
          <IntroductionVideo {...introductionVideo} className="self-start" />
          <div className="self-end lg:pb-9">
            <h2
              id="story-title"
              className="font-display font-medium max-w-[520px] text-[clamp(34px,4.2vw,60px)] leading-[1.1] tracking-[-.035em]"
            >
              The detail is where
              <br />
              the difference is.
            </h2>
            <p className="mt-7 text-body text-ink">
              I support founders and senior leaders at the point where time,
              people and decisions meet.
            </p>
            <p className="mt-5 max-w-[460px] text-body text-muted">
              My work spans complex calendars, executive correspondence, meeting
              preparation, operational coordination and personal logistics. I pay
              attention to how those responsibilities connect: what needs to
              happen first, who needs context and where a small delay could become
              a larger problem.
            </p>
            <p className="mb-6 mt-5 max-w-[460px] text-body text-muted">
              I bring a senior EA's perspective and a personal sense of ownership.
              The aim is a working relationship where you can delegate with
              confidence and keep your attention on the decisions only you can
              make.
            </p>
            <PortfolioLink href="/services" quiet>
              Explore my support
            </PortfolioLink>
          </div>
        </section>
      </div>
      <AboutQualities />
    </>
  );
}
