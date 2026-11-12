import { PortfolioCategoryCard } from "~/components/ui/portfolio-category-card";
import { cn } from "~/shared/ui/utils";
import { aboutQualities } from "../config/about-qualities";

export function AboutQualities() {
  return (
    <section
      id="what-sets-me-apart"
      aria-labelledby="qualities-title"
      className="bg-mist py-16 sm:py-20"
    >
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1440px] sm:w-[calc(100%-5rem)]">
        <h2
          id="qualities-title"
          className="mx-auto mb-10 max-w-[900px] text-center font-display text-[clamp(40px,5.5vw,78px)] font-medium leading-[1.05] tracking-[-.04em] sm:mb-12"
        >
          What sets me apart
        </h2>
        <ul role="list" className="mx-auto grid max-w-[1180px] auto-rows-fr grid-cols-1 list-none gap-4 min-[720px]:grid-cols-2 min-[1200px]:grid-cols-6">
          {aboutQualities.map((quality, index) => {
            return (
              <PortfolioCategoryCard
                key={quality.id}
                as="li"
                title={quality.title}
                titlePlacement="body"
                className={cn(
                  "flex h-full flex-col",
                  index >= 3
                    ? "min-[1200px]:col-span-3"
                    : "min-[1200px]:col-span-2",
                  index === aboutQualities.length - 1 && "min-[720px]:col-span-2",
                )}
              >
                <p className="mt-4 max-w-[40ch] text-pretty text-support text-muted">
                  {quality.description}
                </p>
              </PortfolioCategoryCard>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
