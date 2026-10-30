"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "~/config/motion";
import { siteNavigation } from "~/config/site";

gsap.registerPlugin(useGSAP);

const covers = [
  {
    title: "About",
    description: "The person behind the preparation",
    href: "/about",
    image: "/images/folio/portrait-placeholder.jpg",
  },
  {
    title: "Services",
    description: "The responsibility I can carry",
    href: "/services",
    image: "/images/ay-editorial-desk.png",
  },
  {
    title: "Selected work",
    description: "A closer look at the thinking",
    href: "/case-studies",
    image: "/images/folio/meeting-room.jpg",
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
        { opacity: 1, duration: 0.25, overwrite: true },
      );
      gsap.fromTo(
        "[data-menu-cover]",
        { y: 65, opacity: 0, rotation: 2 },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 0.7,
          stagger: 0.07,
          ease: motion.headlineEase,
          overwrite: true,
        },
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
        duration: 0.2,
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
        aria-label="AY, executive assistant. Home"
        className="flex shrink-0 items-center gap-4"
      >
        <span className="font-display text-[38px] font-bold leading-none tracking-[-.055em]">
          AY
        </span>
        <span className="text-caption text-muted">
          Executive
          <br />
          Assistant
        </span>
      </Link>
      <nav
        aria-label="Main navigation"
        className="ml-auto hidden items-center gap-8 lg:flex"
      >
        {[siteNavigation[1], siteNavigation[2], siteNavigation[3]].map(
          (item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active(item.href) ? "page" : undefined}
              className="py-3 text-label underline-offset-4 hover:underline aria-[current=page]:underline"
            >
              {item.label}
            </Link>
          ),
        )}
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
        className="group ml-auto flex min-h-11 shrink-0 items-center gap-4 text-label lg:ml-8"
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
              className="font-display text-[38px] font-bold tracking-[-.055em]"
              href="/"
            >
              AY
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
            className="grid gap-5 md:grid-cols-3 md:gap-6 lg:gap-10"
          >
            {covers.map((cover) => (
              <Link
                data-menu-cover
                key={cover.href}
                href={cover.href}
                onClick={finishClose}
                aria-current={active(cover.href) ? "page" : undefined}
                className="group flex min-h-[230px] flex-col rounded-[calc(var(--radius-inset)+1.25rem)] bg-paper p-5 text-ink md:min-h-[min(65dvh,650px)] md:rounded-[calc(var(--radius-inset)+1.5rem)] md:p-6"
              >
                <span className="flex items-center justify-between text-caption text-muted">
                  AY / Portfolio
                  <ArrowUpRight size={15} aria-hidden="true" />
                </span>
                <span className="mb-8 mt-6 font-display text-[clamp(35px,3.6vw,58px)] font-medium leading-[1.05] tracking-[-.04em]">
                  {cover.title}
                </span>
                <div className="relative mt-auto aspect-[1.8] overflow-hidden rounded-inset md:aspect-[1.2]">
                  {open && (
                    <Image
                      src={cover.image}
                      alt=""
                      fill
                      loading="eager"
                      sizes="(max-width: 768px) 90vw, 30vw"
                      className="object-cover saturate-[.5] transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105 motion-reduce:transition-none"
                    />
                  )}
                </div>
                <span className="mt-4 text-caption text-muted">
                  {cover.description}
                </span>
              </Link>
            ))}
          </nav>
          <nav
            aria-label="More portfolio pages"
            className="mt-8 flex flex-wrap gap-x-10 gap-y-2 border-t border-paper/20 pt-5 sm:mt-10"
          >
            {[
              siteNavigation[0],
              siteNavigation[4],
              siteNavigation[5],
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={finishClose}
                className="py-3 text-support underline-offset-4 hover:underline"
                aria-current={active(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </dialog>
    </header>
  );
}
