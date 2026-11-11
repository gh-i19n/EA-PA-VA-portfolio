import type { ReactNode } from "react";
import { cn } from "~/shared/ui/utils";

/** Shared card surface with a title in the strip or the body. */
export function PortfolioCategoryCard({
  as: Component = "section",
  title,
  titlePlacement = "strip",
  className,
  children,
}: {
  as?: "section" | "li";
  title: string;
  titlePlacement?: "strip" | "body";
  className?: string;
  children: ReactNode;
}) {
  return (
    <Component
      className={cn(
        "min-w-0 overflow-hidden rounded-xl border border-rule/60 bg-sheet shadow-[0_2px_8px_rgba(0,0,0,.035)]",
        className,
      )}
      aria-label={Component === "section" ? title : undefined}
    >
      {titlePlacement === "body" ? (
        <>
          <div aria-hidden="true" className="h-10 w-full shrink-0 bg-ink/[.04]" />
          <div className="flex flex-1 flex-col items-center px-4 pb-5 pt-4 text-center sm:px-5 sm:pb-6">
            <h3 className="flex min-h-10 items-center justify-center text-balance font-display text-[22px] font-semibold leading-[1.2] tracking-[-.025em]">
              {title}
            </h3>
            {children}
          </div>
        </>
      ) : (
        <>
          <h3
            className={cn(
              "flex min-h-10 w-full items-center justify-center whitespace-nowrap bg-ink/[.04] px-4 text-center text-[12px] font-semibold leading-[1.4] tracking-normal min-[390px]:text-[13px] min-[390px]:uppercase min-[390px]:tracking-[.035em] sm:px-5",
              title.length > 40 &&
                "text-[11px] min-[390px]:text-[12px] min-[390px]:normal-case min-[720px]:text-[13px] min-[1200px]:uppercase",
            )}
          >
            {title}
          </h3>
          {children}
        </>
      )}
    </Component>
  );
}
