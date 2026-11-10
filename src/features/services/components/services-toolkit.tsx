import { ArrowUpRight } from "lucide-react";
import { cn } from "~/shared/ui/utils";
import { toolGroups } from "../config/tools";
import { ToolBrand } from "./tool-brand";

const categoryColumns = {
  3: "min-[1200px]:col-span-3",
  4: "min-[1200px]:col-span-4",
  5: "min-[1200px]:col-span-5",
  6: "min-[1200px]:col-span-6",
  8: "min-[1200px]:col-span-8",
} as const;

const workSamples = toolGroups.flatMap((group) =>
  group.tools.flatMap((tool) =>
    "sampleHref" in tool
      ? [{ href: tool.sampleHref, label: tool.sampleLabel }]
      : [],
  ),
);

export function ServicesToolkit() {
  return (
    <section className="bg-mist py-16 sm:py-20" aria-labelledby="tools-title">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1440px] sm:w-[calc(100%-5rem)]">
        <div className="mx-auto mb-10 max-w-[780px] text-center">
          <p className="inline-flex rounded-full border border-rule px-4 py-2 text-label font-medium uppercase tracking-[.1em] text-muted">
            Tools &amp; platforms
          </p>
          <h2
            id="tools-title"
            className="mt-5 text-balance font-display text-[clamp(43px,6vw,86px)] font-medium leading-none tracking-[-.045em]"
          >
            The toolkit.
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-pretty text-body text-muted">
            The right tool depends on the task. These are the platforms I use to
            organise schedules, keep information accessible and coordinate the
            work.
          </p>
        </div>
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-4 min-[720px]:grid-cols-2 min-[1200px]:grid-cols-12">
          {toolGroups.map((group) => (
            <section
              key={group.category}
              className={cn(
                "min-w-0 overflow-hidden rounded-xl border border-rule/60 bg-sheet shadow-[0_2px_8px_rgba(0,0,0,.035)]",
                group.columnSpan !== 3 && "min-[720px]:col-span-2",
                categoryColumns[group.columnSpan],
              )}
              aria-label={group.category}
            >
              <h3
                className={cn(
                  "flex min-h-10 w-full items-center justify-center whitespace-nowrap bg-ink/[.04] px-4 text-center text-[12px] font-semibold leading-[1.4] tracking-normal min-[390px]:text-[13px] min-[390px]:uppercase min-[390px]:tracking-[.035em] sm:px-5",
                  group.category.length > 40 &&
                    "text-[11px] min-[390px]:text-[12px] min-[390px]:normal-case min-[720px]:text-[13px] min-[1200px]:uppercase",
                )}
              >
                {group.category}
              </h3>
              <ul className="mx-auto mt-4 flex max-w-full list-none flex-wrap justify-center gap-x-2 gap-y-4 px-4 pb-5 min-[390px]:gap-x-3 sm:px-5 sm:pb-6">
                {group.tools.map((tool) => (
                  <li key={tool.name} className="min-w-16 flex-none">
                    <ToolBrand name={tool.name} symbolSrc={tool.symbolSrc} />
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <nav
          aria-label="Tool work samples"
          className="mt-6 flex flex-wrap justify-center gap-3"
        >
          {workSamples.map((sample) => (
            <a
              key={sample.href}
              href={sample.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-rule px-4 py-2 text-center text-label text-muted transition-colors hover:bg-sheet hover:text-ink motion-reduce:transition-none"
            >
              {sample.label}
              <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
