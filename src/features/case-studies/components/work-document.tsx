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
        "relative rounded-[3px] bg-white text-ink shadow-[0_15px_60px_-20px_#233e3530]",
        compact ? "p-5 sm:p-6" : "p-6 sm:p-10",
      )}
      aria-label={`${sample.label}, illustrative sample`}
    >
      <header className="flex items-center justify-between gap-5 border-b border-rule pb-4">
        <span className="text-[11px] font-medium">AY / Executive office</span>
        <span className="rounded-full bg-mist px-2.5 py-1 text-[9px] text-muted">
          Illustrative sample
        </span>
      </header>
      <p
        className={cn(
          "text-[10px] text-muted",
          compact ? "mb-2 mt-5" : "mb-3 mt-7",
        )}
      >
        {sample.subtitle}
      </p>
      <h3
        className={cn(
          "font-semibold leading-[1.2] tracking-[-.045em]",
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
              "grid grid-cols-[48px_1fr] gap-3 border-t border-rule/70",
              compact ? "py-3" : "py-5 sm:grid-cols-[55px_1fr]",
            )}
          >
            <span className="pt-0.5 text-[10px] font-medium text-muted">
              {row.reference}
            </span>
            <div>
              <p
                className={cn(
                  "font-medium",
                  compact ? "text-[11px]" : "text-[13px]",
                )}
              >
                {row.title}
              </p>
              {!compact && (
                <p className="mt-1.5 max-w-[320px] text-[11px] leading-[1.7] text-muted">
                  {row.note}
                </p>
              )}
              <span className="mt-2 inline-flex items-center gap-1.5 text-[9px] text-ink">
                {/decision|approval|following/i.test(row.status) ? (
                  <ArrowUpRight
                    size={10}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                ) : (
                  <Check size={10} strokeWidth={1.8} aria-hidden="true" />
                )}
                {row.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
      {!compact && (
        <p className="mt-4 flex items-start gap-3 rounded-[2px] bg-celery/70 p-4 text-[11px] leading-[1.8]">
          <ArrowUpRight
            size={16}
            className="mt-0.5 shrink-0"
            aria-hidden="true"
          />
          {sample.annotation}
        </p>
      )}
      <p className="mt-3 border-t border-rule pt-3 text-[9px] text-muted">
        Prepared with context. Ready for the next step.
      </p>
    </article>
  );
}
