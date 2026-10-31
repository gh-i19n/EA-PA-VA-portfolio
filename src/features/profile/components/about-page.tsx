import { PortfolioVisual } from "~/components/ui/portfolio-visual";
import Image from "next/image";
import { EditorialPageIntro } from "~/components/ui/editorial-page-intro";
import { PortfolioLink } from "~/components/ui/portfolio-link";
import { siteImages } from "~/config/site";

const principles = [
  {
    title: "Judgment",
    text: "I learn your priorities, preferences and decision-making style. That context helps me assess a request, anticipate a dependency and bring a recommendation when a choice needs your attention.",
  },
  {
    title: "Discretion",
    text: "Sensitive conversations and personal arrangements are handled with care. Access, delegated authority and approval limits are agreed at the beginning of the relationship.",
  },
  {
    title: "Ownership",
    text: "I keep track of the next step, confirm who is responsible and make progress visible. You should know where things stand without having to chase the details.",
  },
];

export function AboutPage() {
  return (
    <>
      <EditorialPageIntro
        label="About AY"
        title={"AY, at\nyour side."}
        description="An experienced executive assistant. A steady point of coordination. A person who takes your priorities personally."
      />
      <section
        className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1440px] gap-10 pb-16 sm:w-[calc(100%-5rem)] sm:pb-28 lg:grid-cols-[1.1fr_1fr] lg:gap-24"
        aria-labelledby="story-title"
      >
        <figure>
          <PortfolioVisual
            reveal="arrival"
            className="relative aspect-[.96] overflow-hidden bg-mist"
          >
            <Image
              src={siteImages.aboutPortrait}
              alt="AY smiling in a mustard blouse with one hand near her face"
              fill
              loading="eager"
              sizes="(max-width:1024px) 90vw,48vw"
              className="object-cover object-center saturate-[.92]"
            />
          </PortfolioVisual>
        </figure>
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
      <section
        className="bg-mist py-16 sm:py-24"
        aria-labelledby="principles-title"
      >
        <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1440px] sm:w-[calc(100%-5rem)]">
          <p className="mb-10 text-label text-muted" id="principles-title">
            How I work
          </p>
          {principles.map((item) => (
            <article
              key={item.title}
              className="grid gap-5 border-t border-rule py-8 md:grid-cols-[1.1fr_1fr] md:gap-24 md:py-10"
            >
              <h2 className="font-display font-medium text-[clamp(35px,5.2vw,75px)] leading-none tracking-[-.035em]">
                {item.title}
              </h2>
              <p className="max-w-[480px] text-body text-muted md:pt-1">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
