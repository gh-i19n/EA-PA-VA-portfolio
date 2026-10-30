import { ArrowUpRight, Check } from "lucide-react";
import { cn } from "~/shared/ui/utils";
import { workSamples } from "../config/work-samples";
import type { WorkSampleId } from "../types/work-sample";

/** A readable, explicitly illustrative executive-support deliverable. */
export function WorkDocument({
  variant = "brief",
  compact = false,
}: {
  variant?: WorkSampleId;
  compact?: boolean;
}) {
  const sample =
    workSamples.find((item) => item.id === variant) ?? workSamples[0];
  return (
    <article
      className={cn(
        "relative rounded-document bg-white text-ink shadow-[0_15px_60px_-20px_#233e3530]",
        compact ? "p-5 sm:p-6" : "p-5 sm:p-10",
      )}
      aria-label={`${sample.label}, illustrative sample`}
    >
      <header className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3 border-b border-rule pb-4">
        <span className="text-caption font-medium">AY / Executive office</span>
        <span className="rounded-full bg-mist px-3 py-1.5 text-caption text-muted">
          Illustrative sample
        </span>
      </header>
      <p
        className={cn(
          "text-caption text-muted",
          compact ? "mb-2 mt-5" : "mb-3 mt-7",
        )}
      >
        {sample.subtitle}
      </p>
      <h3
        className={cn(
          "font-display font-medium leading-[1.2] tracking-[-.03em]",
          compact
            ? "text-[23px]"
            : "max-w-[350px] text-[clamp(26px,2.5vw,36px)]",
        )}
      >
        {sample.title}
      </h3>
      <ul className={cn("list-none p-0", compact ? "mt-4" : "mt-7")}>
        {(compact ? sample.rows.slice(0, 2) : sample.rows).map((row) => (
          <li
            key={row.title}
            className={cn(
              "grid gap-2 border-t border-rule/70 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-4",
              compact ? "py-4" : "py-5",
            )}
          >
            <span className="text-caption font-medium tabular-nums text-muted sm:pt-0.5">
              {row.reference}
            </span>
            <div>
              <p className="text-support font-medium">{row.title}</p>
              {!compact && (
                <p className="mt-2 max-w-[350px] text-support text-muted">
                  {row.note}
                </p>
              )}
              <span className="mt-3 inline-flex items-start gap-2 text-caption text-ink">
                {/decision|approval|following/i.test(row.status) ? (
                  <ArrowUpRight
                    size={14}
                    className="mt-1 shrink-0"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                ) : (
                  <Check
                    size={14}
                    className="mt-1 shrink-0"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                )}
                {row.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
      {!compact && (
        <p className="mt-4 flex items-start gap-3 rounded-inset bg-celery/70 p-4 text-label">
          <ArrowUpRight
            size={16}
            className="mt-0.5 shrink-0"
            aria-hidden="true"
          />
          {sample.annotation}
        </p>
      )}
      <p className="mt-3 border-t border-rule pt-3 text-caption text-muted">
        Prepared with context. Ready for the next step.
      </p>
    </article>
  );
}
