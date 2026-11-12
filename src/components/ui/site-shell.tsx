import type { ReactNode } from "react";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { footerNavigation, siteContact } from "~/config/site";
import { SiteNavigation } from "./site-navigation";
import { SiteHeader } from "./site-header";
import { PortfolioContours } from "./portfolio-contours";
import { ContactChannels } from "./contact-channels";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div>
      <a
        className="fixed left-4 top-3 z-[100] -translate-y-[160%] bg-ink px-6 py-4 text-support text-paper focus:translate-y-0"
        href="#main"
      >
        Skip to content
      </a>
      <SiteHeader>
        <Suspense
          fallback={
            <header className="mx-auto flex min-h-[88px] w-[calc(100%-2.5rem)] max-w-[1440px] items-center justify-between sm:min-h-[100px] sm:w-[calc(100%-5rem)]">
              <Link href="/" className="font-display text-4xl font-bold tracking-[-.045em]">
                AY
              </Link>
              <Link href="/contact" className="text-label">
                Contact
              </Link>
            </header>
          }
        >
          <SiteNavigation />
        </Suspense>
      </SiteHeader>
      <main id="main" tabIndex={-1} className="pt-(--site-header-height)">
        {children}
      </main>
      <footer className="relative isolate overflow-hidden rounded-t-feature bg-ink text-paper">
        <PortfolioContours appearance="footer" />
        <div className="relative mx-auto w-[calc(100%-2.5rem)] max-w-[1440px] pb-6 pt-14 sm:w-[calc(100%-5rem)] sm:pt-20">
          <div className="flex flex-col items-start gap-2 text-label sm:items-end">
            <a
              href={siteContact.mailto}
              className="w-fit py-2 text-support underline-offset-4 hover:underline"
            >
              {siteContact.email}
            </a>
            <ContactChannels appearance="dark" label="Contact AY" />
          </div>
          <Link
            href="/contact"
            className="group my-10 flex flex-wrap items-center justify-between gap-5 py-4 sm:my-16"
          >
            <span className="font-display text-[clamp(60px,13.5vw,196px)] font-medium leading-none tracking-[-.045em]">
              Let&apos;s talk.
            </span>
            <span className="grid size-[clamp(54px,9vw,128px)] shrink-0 place-items-center rounded-full border border-paper/40 transition-[background,color,transform] duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:rotate-45 group-hover:bg-paper group-hover:text-ink motion-reduce:transition-none">
              <ArrowUpRight
                className="size-7 sm:size-12"
                strokeWidth={1}
                aria-hidden="true"
              />
            </span>
          </Link>
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-7 gap-y-1 border-t border-paper/20 pt-6 sm:gap-x-10"
          >
            {footerNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-label text-paper/70 underline-offset-4 hover:text-paper hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
