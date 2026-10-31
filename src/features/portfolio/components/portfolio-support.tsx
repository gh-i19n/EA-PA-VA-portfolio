import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolioSupport } from "../config/support";

export function PortfolioSupport() {
  return (
    <section
      className="mx-auto w-[calc(100%-2.5rem)] max-w-[1440px] pb-16 sm:w-[calc(100%-5rem)] sm:pb-28"
      aria-labelledby="support-title"
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-rule pb-5">
        <h2 id="support-title" className="font-medium text-label text-muted">
          The responsibility I can carry
        </h2>
        <span className="text-caption text-muted">Explore services</span>
      </div>
      {portfolioSupport.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group grid grid-cols-[minmax(0,1fr)] items-center gap-3 border-b border-rule py-7 sm:py-9 md:grid-cols-[minmax(0,1fr)_auto] md:gap-10"
        >
          <span className="font-display text-[clamp(26px,4vw,58px)] font-medium leading-[1.1] tracking-[-.035em] transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-3 motion-reduce:transition-none">
            {item.title}
          </span>
          <span className="flex min-w-0 items-center justify-between gap-5 text-label text-muted md:min-w-[290px]">
            <span className="min-w-0 [overflow-wrap:anywhere]">{item.detail}</span>
            <ArrowUpRight
              size={22}
              strokeWidth={1.2}
              className="shrink-0 text-ink transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:rotate-45 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </span>
        </Link>
      ))}
    </section>
  );
}
