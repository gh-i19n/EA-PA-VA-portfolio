import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PortfolioLink } from "~/components/ui/portfolio-link";
import { portfolioSupport } from "../config/support";

export function PortfolioSupport() {
  return (
    <section
      className="mx-auto w-[calc(100%-2.5rem)] max-w-[1440px] py-16 sm:w-[calc(100%-5rem)] sm:py-24"
      aria-labelledby="support-title"
    >
      <div className="mb-6 flex flex-col justify-between gap-6 border-b border-rule pb-8 lg:flex-row lg:items-end">
        <div>
          <h2 id="support-title" className="max-w-[800px] font-display text-[clamp(36px,5.5vw,78px)] font-medium leading-[1.05] tracking-[-.04em]">
            What I can take<br />off your plate.
          </h2>
        </div>
        <PortfolioLink href="/services" quiet>Explore all services</PortfolioLink>
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
