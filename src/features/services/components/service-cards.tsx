import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PortfolioVisual } from "~/components/ui/portfolio-visual";
import { PortfolioLink } from "~/components/ui/portfolio-link";
import { serviceAreas } from "../config/services-content";

export function ServiceCards() {
  return (
    <section
      id="skills-title"
      className="bg-sheet py-14 sm:py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1440px] sm:w-[calc(100%-5rem)]">
        <div className="mb-10 grid gap-6 md:grid-cols-2 md:items-end md:gap-16 sm:mb-14">
          <h2
            id="services-heading"
            className="font-display text-[clamp(40px,5.5vw,78px)] font-medium leading-[1.05] tracking-[-.04em]"
          >
            How I can help.
          </h2>
          <p className="max-w-[460px] text-pretty text-body text-muted md:justify-self-end">
            From a busy inbox to a complex project, I bring structure to the work
            you delegate. Each area below is paired with a sample of my work.
          </p>
        </div>
        <div className="grid gap-6 sm:gap-8">
          {serviceAreas.map((service) => (
            <article
              id={service.id}
              key={service.id}
              aria-labelledby={`${service.id}-title`}
              className="grid scroll-mt-10 overflow-hidden rounded-panel border border-rule/70 bg-paper md:grid-cols-[.95fr_1.05fr]"
            >
              <Link
                href={service.sample.href}
                aria-label={`View the ${service.sample.label.toLowerCase()} work sample`}
                className="group flex min-w-0 flex-col justify-center bg-mist p-5 sm:p-7"
              >
                <figure>
                  <PortfolioVisual
                    radius="inherit"
                    className="relative aspect-[1.4] rounded-inset bg-paper/60"
                  >
                    <Image
                      src={service.sample.image}
                      alt={service.sample.alt}
                      fill
                      sizes="(min-width: 1520px) 630px, (min-width: 768px) 44vw, 90vw"
                      className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.025] motion-reduce:transition-none sm:p-5"
                    />
                  </PortfolioVisual>
                  <figcaption className="mt-4 flex items-center justify-between gap-4 text-caption text-muted">
                    <span>{service.sample.label} / Work sample</span>
                    <ArrowUpRight size={18} strokeWidth={1.4} aria-hidden="true" />
                  </figcaption>
                </figure>
              </Link>
              <div className="min-w-0 self-center p-6 sm:p-8 lg:p-12">
                <h3
                  id={`${service.id}-title`}
                  className="font-display text-[clamp(30px,3.4vw,49px)] font-medium leading-[1.08] tracking-[-.035em]"
                >
                  {service.title}
                </h3>
                <p className="mt-5 max-w-[500px] text-[20px] leading-[1.45] tracking-[-.025em]">
                  {service.introduction}
                </p>
                <p className="mt-4 max-w-[520px] text-pretty text-body text-muted">
                  {service.description}
                </p>
                <ul className="mt-6 flex list-none flex-wrap gap-x-5 gap-y-2 border-t border-rule pt-5">
                  {service.capabilities.map((capability) => (
                    <li className="text-label" key={capability}>
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
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
