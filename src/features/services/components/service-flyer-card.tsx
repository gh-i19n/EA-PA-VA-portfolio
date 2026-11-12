"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { cn } from "~/shared/ui/utils";
import type { serviceAreas } from "../config/services-content";
import styles from "./service-flyer-card.module.css";

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
      className={cn(
        "relative isolate aspect-[4/3] min-w-0 scroll-mt-10 overflow-hidden rounded-panel border border-rule/70 bg-paper",
        styles.card,
      )}
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
        className={styles.details}
      >
        <div className={styles.header}>
          <h3
            id={`${service.id}-title`}
            className={styles.title}
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
          className={cn(styles.copy, "focus-visible:-outline-offset-2")}
        >
          <p className={styles.introduction}>
            {service.introduction}
          </p>
          <p className={styles.description}>
            {service.description}
          </p>
          <div className={styles.capabilities}>
            <p className={styles.listTitle}>Support includes</p>
            <ul className={styles.capabilitiesList}>
              {service.capabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
          </div>
        </div>
        {"href" in service.sample && (
          <Link
            href={service.sample.href}
            className="flex min-h-12 w-fit items-center gap-3 rounded-full bg-sheet px-5 py-3 text-support font-medium text-ink transition-colors hover:bg-paper focus-visible:outline-sheet motion-reduce:transition-none"
          >
            View work sample
            <ArrowUpRight size={18} strokeWidth={1.4} aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
}
