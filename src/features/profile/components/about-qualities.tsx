import { Compass, ListChecks, MessageSquareText, ScanLine, Shuffle } from "lucide-react";
import { cn } from "~/shared/ui/utils";
import { aboutQualities } from "../config/about-qualities";

const qualityIcons = {
  communication: MessageSquareText,
  initiative: Compass,
  organisation: ListChecks,
  detail: ScanLine,
  adaptability: Shuffle,
};

export function AboutQualities() {
  return (
    <section
      id="what-sets-me-apart"
      aria-labelledby="qualities-title"
      className="bg-paper py-16 sm:py-24"
    >
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1440px] sm:w-[calc(100%-5rem)]">
        <h2
          id="qualities-title"
          className="mb-10 max-w-[800px] font-display text-[clamp(40px,5.5vw,78px)] font-medium leading-[1.05] tracking-[-.04em] sm:mb-14"
        >
          What sets me apart
        </h2>
        <ul role="list" className="grid list-none gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          {aboutQualities.map((quality, index) => {
            const Icon = qualityIcons[quality.id];
            return (
              <li
                key={quality.id}
                className={cn(
                  "flex min-w-0 flex-col rounded-panel border border-rule/70 bg-sheet p-6 sm:p-8 lg:col-span-2",
                  index >= 3 && "lg:col-span-3",
                  index === aboutQualities.length - 1 && "sm:col-span-2",
                )}
              >
                <Icon
                  size={30}
                  strokeWidth={1.4}
                  aria-hidden="true"
                  className="mb-7 text-muted sm:mb-9"
                />
                <h3 className="max-w-[430px] text-pretty font-display text-[clamp(26px,2.5vw,36px)] font-medium leading-[1.15] tracking-[-.03em]">
                  {quality.title}
                </h3>
                <p className="mt-auto max-w-[48ch] pt-5 text-pretty text-body text-muted">
                  {quality.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
