import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "~/shared/ui/utils";

/** A complete editorial portfolio action, with a persistent label and direction. */
export function PortfolioLink({
  href,
  children,
  quiet = false,
  light = false,
}: {
  href: string;
  children: ReactNode;
  quiet?: boolean;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-12 w-fit items-center justify-between gap-9 border-b pb-2 pt-3 text-[13px] font-medium",
        light ? "border-paper/40 text-paper" : "border-ink/40 text-ink",
        quiet ? "gap-8" : "gap-12",
      )}
    >
      {children}
      <span
        className={cn(
          "grid size-8 shrink-0 place-items-center rounded-full transition-[background,color,transform] duration-300 ease-[cubic-bezier(.22,1,.36,1)] group-hover:rotate-45 motion-reduce:transition-none",
          light ? "bg-paper text-ink" : "bg-ink text-paper",
        )}
      >
        <ArrowUpRight size={17} strokeWidth={1.3} aria-hidden="true" />
      </span>
    </Link>
  );
}
