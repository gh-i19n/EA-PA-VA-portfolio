import { PortfolioLink } from "./portfolio-link";

export function ContactInvitation({
  title = "What needs your attention?",
}: {
  title?: string;
}) {
  return (
    <aside
      className="mx-auto flex w-[calc(100%-2.75rem)] max-w-[1320px] flex-col items-start justify-between gap-7 border-t border-rule py-14 sm:w-[calc(100%-5rem)] sm:py-20 md:flex-row md:items-center md:gap-16"
      aria-label="Work with AY"
    >
      <div>
        <p className="mb-4 text-label text-muted">
          An introduction is a good place to start.
        </p>
        <h2 className="font-display font-medium max-w-[750px] text-[clamp(30px,3.6vw,50px)] leading-[1.15] tracking-[-.035em]">
          {title}
        </h2>
      </div>
      <div className="shrink-0">
        <PortfolioLink href="/contact">Let&apos;s talk</PortfolioLink>
      </div>
    </aside>
  );
}
