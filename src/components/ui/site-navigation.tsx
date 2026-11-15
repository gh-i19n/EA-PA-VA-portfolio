"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "~/config/motion";
import { primaryNavigation } from "~/config/site";
import { BrandMark } from "./brand-mark";

gsap.registerPlugin(useGSAP);

const navigationItems = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Project",
    href: "/case-studies",
  },
  {
    title: "Services & tools",
    href: "/services",
  },
  {
    title: "Credentials",
    href: "/credentials",
  },
  {
    title: "Contact",
    href: "/contact",
  },
] as const;

export function SiteNavigation() {
  const pathname = usePathname();
  const scope = useRef<HTMLElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const closing = useRef(false);
  const [open, setOpen] = useState(false);
  const { contextSafe } = useGSAP({ scope });
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 64rem)");
    const closeOnDesktop = () => {
      if (desktop.matches) dialog.current?.close();
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  function openMenu() {
    if (!dialog.current || dialog.current.open) return;
    closing.current = false;
    dialog.current.showModal();
    setOpen(true);
    if (window.matchMedia(motion.reducedMotion).matches) return;
    const element = dialog.current;
    contextSafe(() => {
      gsap.fromTo(
        element,
        { opacity: 0 },
        { opacity: 1, duration: 0.16, ease: "power1.out", overwrite: true },
      );
    })();
  }
  function finishClose() {
    dialog.current?.close();
    closing.current = false;
    setOpen(false);
  }
  function closeMenu() {
    if (!dialog.current?.open || closing.current) return;
    closing.current = true;
    if (window.matchMedia(motion.reducedMotion).matches) {
      finishClose();
      return;
    }
    const element = dialog.current;
    contextSafe(() =>
      gsap.to(element, {
        opacity: 0,
        duration: 0.14,
        ease: "power1.in",
        overwrite: true,
        onComplete: finishClose,
      }),
    )();
  }
  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      ref={scope}
      className="relative z-20 mx-auto flex min-h-[88px] w-[calc(100%-2.5rem)] max-w-[1440px] flex-wrap items-center justify-between gap-x-5 gap-y-3 py-4 sm:w-[calc(100%-5rem)] sm:min-h-[100px] sm:py-0"
    >
      <Link
        href="/"
        aria-label="Ayomide Ajibola. Home"
        className="flex min-h-11 shrink-0 items-center"
      >
        <BrandMark className="h-9 w-[81px]" />
      </Link>
      <nav
        aria-label="Main navigation"
        className="ml-auto hidden items-center gap-8 lg:flex"
      >
        {primaryNavigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active(item.href) ? "page" : undefined}
            className="py-3 text-label underline-offset-4 hover:underline aria-[current=page]:underline"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="flex items-center gap-2 py-3 text-label underline-offset-4 hover:underline"
          aria-current={pathname === "/contact" ? "page" : undefined}
        >
          Contact
          <ArrowUpRight size={14} strokeWidth={1.4} aria-hidden="true" />
        </Link>
      </nav>
      <button
        ref={trigger}
        type="button"
        onClick={openMenu}
        aria-label="Menu"
        aria-expanded={open}
        aria-controls="portfolio-index"
        aria-haspopup="dialog"
        className="group ml-auto flex min-h-11 shrink-0 items-center gap-4 text-label lg:hidden"
      >
        Menu
        <span className="grid size-9 place-items-center rounded-full border border-ink/30 transition-transform duration-300 ease-[cubic-bezier(.22,1,.36,1)] group-hover:rotate-90 motion-reduce:transition-none">
          <Plus size={18} strokeWidth={1.2} aria-hidden="true" />
        </span>
      </button>
      <dialog
        id="portfolio-index"
        ref={dialog}
        aria-label="Explore AY's portfolio"
        onCancel={(event) => {
          event.preventDefault();
          closeMenu();
        }}
        onClose={() => {
          closing.current = false;
          setOpen(false);
        }}
        className="fixed inset-0 m-0 h-dvh max-h-dvh w-full max-w-none overflow-y-auto border-0 bg-ink p-0 text-paper backdrop:bg-ink/50"
      >
        <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1440px] pb-10 sm:w-[calc(100%-5rem)] sm:pb-14">
          <div className="flex min-h-[88px] items-center justify-between sm:min-h-[100px]">
            <Link
              onClick={finishClose}
              className="flex min-h-11 items-center"
              href="/"
              aria-label="Ayomide Ajibola. Home"
            >
              <BrandMark className="h-9 w-[81px]" />
            </Link>
            <button
              type="button"
              onClick={closeMenu}
              className="flex min-h-11 items-center gap-4 text-label"
            >
              Close menu
              <span className="grid size-9 place-items-center rounded-full border border-paper/40">
                <Plus
                  className="rotate-45"
                  size={18}
                  strokeWidth={1.2}
                  aria-hidden="true"
                />
              </span>
            </button>
          </div>
          <nav
            aria-label="Portfolio page index"
            className="mx-auto max-w-3xl"
          >
            <ol className="list-none border-t border-paper/20">
              {navigationItems.map((item) => (
                <li key={item.href} className="border-b border-paper/20">
                  <Link
                    href={item.href}
                    onClick={finishClose}
                    aria-current={active(item.href) ? "page" : undefined}
                    className="group flex min-h-20 items-center gap-5 py-5 text-paper outline-offset-4 transition-colors duration-150 hover:text-paper/70 focus-visible:outline-2 focus-visible:outline-paper aria-[current=page]:underline aria-[current=page]:underline-offset-8 motion-reduce:transition-none"
                  >
                    <span className="min-w-0 flex-1 font-display text-[clamp(30px,6vw,48px)] font-medium leading-tight tracking-[-.04em]">
                      {item.title}
                    </span>
                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className="shrink-0 opacity-60 transition-opacity duration-150 group-hover:opacity-100 motion-reduce:transition-none"
                    />
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </dialog>
    </header>
  );
}
