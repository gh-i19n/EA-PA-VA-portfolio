import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function PortfolioSupport() {
  return (
    <section
      hidden
      className="bg-sheet px-5 py-20 sm:px-10 sm:py-28"
      aria-labelledby="support-title"
    >
      <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
        <p className="text-label text-muted">Services &amp; tools</p>
        <h2
          id="support-title"
          className="mt-4 text-balance font-display text-[clamp(38px,6vw,72px)] font-medium leading-[1.02] tracking-[-.045em]"
        >
          Find the support you need.
        </h2>
        <p className="mt-5 max-w-[620px] text-pretty text-body text-muted">
          From everyday administration to projects, documents and travel,
          explore support designed to keep your work organised and moving
          forward.
        </p>
        <Link
          href="/services"
          className="group mt-8 inline-flex min-h-12 w-fit items-center gap-3 rounded-full bg-ink px-5 py-3 text-label font-medium text-sheet transition-colors hover:bg-ink/85 focus-visible:outline-ink! motion-reduce:transition-none sm:px-6"
        >
          Explore services
          <ArrowUpRight
            size={18}
            strokeWidth={1.5}
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
          />
        </Link>
      </div>
    </section>
  );
}
