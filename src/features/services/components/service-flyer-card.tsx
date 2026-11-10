"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import type { serviceAreas } from "../config/services-content";

export function ServiceFlyerCard({
  service,
}: {
  service: (typeof serviceAreas)[number];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const detailsId = `${service.id}-details`;

  function closeDetails() {
    trigger.current?.focus({ preventScroll: true });
    setIsPinned(false);
    setIsOpen(false);
  }

  return (
    <article
      id={service.id}
      aria-labelledby={`${service.id}-title`}
      className="relative isolate aspect-[4/3] min-w-0 scroll-mt-10 overflow-hidden rounded-panel border border-rule/70 bg-paper"
      onPointerEnter={(event) => {
        if (event.pointerType !== "touch") setIsOpen(true);
      }}
      onPointerLeave={(event) => {
        if (!isPinned && !event.currentTarget.contains(document.activeElement)) {
          setIsOpen(false);
        }
      }}
      onFocusCapture={(event) => {
        if (event.target.matches(":focus-visible")) setIsOpen(true);
      }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPinned(false);
          setIsOpen(
            window.matchMedia("(hover: hover)").matches &&
              event.currentTarget.matches(":hover"),
          );
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          event.preventDefault();
          event.stopPropagation();
          closeDetails();
        }
      }}
    >
      <Image
        src={service.sample.image}
        alt={service.sample.alt}
        fill
        unoptimized
        sizes="(min-width: 1520px) 704px, (min-width: 768px) 46vw, 90vw"
        className="object-contain"
      />
      <button
        ref={trigger}
        type="button"
        aria-label={`Read about ${service.title}`}
        aria-controls={detailsId}
        aria-expanded={isOpen}
        className="absolute inset-0 z-10 block w-full rounded-[inherit] focus-visible:-outline-offset-8"
        onClick={() => {
          setIsPinned(true);
          setIsOpen(true);
        }}
      />
      <div
        id={detailsId}
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`absolute inset-0 z-20 grid grid-rows-[auto_max-content_auto] gap-4 overflow-y-auto overscroll-contain bg-ink/95 p-5 text-sheet transition-opacity duration-300 ease-out motion-reduce:transition-none lg:grid-rows-[auto_minmax(0,1fr)_auto] lg:overflow-hidden lg:p-8 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 max-lg:bg-ink lg:static">
          <h3
            id={`${service.id}-title`}
            className="min-w-0 self-center font-display text-[clamp(26px,3vw,42px)] font-medium leading-[1.08] tracking-[-.035em]"
          >
            {service.title}
          </h3>
          <button
            type="button"
            aria-label={`Close ${service.title} details`}
            onClick={closeDetails}
            className="grid size-11 shrink-0 place-items-center rounded-full border border-sheet/30 transition-colors hover:bg-sheet/10 motion-reduce:transition-none"
          >
            <X size={20} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
        <div
          role="region"
          aria-label={`${service.title} details`}
          tabIndex={0}
          className="min-h-0 pr-2 focus-visible:-outline-offset-2 lg:overflow-y-auto lg:overscroll-contain"
        >
          <p className="text-[18px] leading-[1.45] tracking-[-.02em] sm:text-[20px]">
            {service.introduction}
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-sheet/85 sm:text-body">
            {service.description}
          </p>
          <ul className="mt-5 flex list-none flex-wrap gap-x-4 gap-y-2 border-t border-sheet/20 pt-4">
            {service.capabilities.map((capability) => (
              <li className="text-caption text-sheet/85" key={capability}>
                {capability}
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={"detailHref" in service ? service.detailHref : service.sample.href}
          className="flex min-h-11 w-fit items-center gap-4 border-b border-sheet/40 text-label transition-colors hover:border-sheet motion-reduce:transition-none"
        >
          {"detailHref" in service ? "View service details" : "View work sample"}
          <ArrowUpRight size={18} strokeWidth={1.4} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
