"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Expand, FileText } from "lucide-react";
import { cn } from "~/shared/ui/utils";
import type { GalleryMedia } from "~/shared/types/gallery-media";
import { GalleryImageDisplay } from "./gallery-image-display";
import { MediaGalleryViewer } from "./media-gallery-viewer";
import { PdfReader } from "./pdf-reader";
import styles from "./media-gallery.module.css";

const controlClass = "grid size-11 shrink-0 place-items-center rounded-full border border-rule transition-colors hover:bg-mist disabled:opacity-40 motion-reduce:transition-none";

/** Images and original PDFs share one file picker; PDF pages have separate reading controls. */
export function MediaGallery({ items, label }: { items: readonly GalleryMedia[]; label: string }) {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [pages, setPages] = useState<Record<string, number>>({});
  const trigger = useRef<HTMLButtonElement>(null);
  const thumbnails = useRef<HTMLOListElement>(null);
  const id = useId();
  const activeIndex = Math.min(index, Math.max(0, items.length - 1));
  const item = items[activeIndex];

  useEffect(() => {
    const list = thumbnails.current;
    const selected = list?.children[activeIndex] as HTMLElement | undefined;
    if (!list || !selected) return;
    const listBounds = list.getBoundingClientRect();
    const selectedBounds = selected.getBoundingClientRect();
    if (selectedBounds.left < listBounds.left) list.scrollLeft -= listBounds.left - selectedBounds.left + 8;
    if (selectedBounds.right > listBounds.right) list.scrollLeft += selectedBounds.right - listBounds.right + 8;
  }, [activeIndex]);

  if (!item) return <p role="status" className="text-support text-muted">No files are available for this service yet.</p>;

  function move(offset: number) {
    setIndex((activeIndex + offset + items.length) % items.length);
  }

  const page = pages[item.src] ?? 1;
  const changePage = (next: number) => setPages((current) => ({ ...current, [item.src]: next }));

  return (
    <div role="group" aria-label={`${label} work samples`} className="min-w-0">
      <figure>
        {item.kind === "pdf" ? (
          <div className={styles.documentStage}>
            <PdfReader key={item.src} document={item} page={page} onPageChange={changePage} />
          </div>
        ) : (
          <button
            ref={trigger}
            type="button"
            aria-haspopup="dialog"
            aria-label={`Enlarge ${item.caption}`}
            aria-describedby={`${id}-caption`}
            onClick={() => setExpanded(true)}
            className={styles.stage}
          >
            <GalleryImageDisplay key={item.src} image={item} />
            <span className="absolute bottom-3 right-3 grid size-11 place-items-center rounded-full border border-rule bg-sheet text-ink"><Expand size={18} aria-hidden="true" /></span>
          </button>
        )}
        <figcaption id={`${id}-caption`} className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-caption text-muted">
          <span role="status" aria-atomic="true">{item.caption} <span className="ml-2 tabular-nums">File {activeIndex + 1} / {items.length}</span></span>
          <div className="flex flex-wrap items-center gap-x-5">
            {item.kind === "pdf" && <button ref={trigger} type="button" onClick={() => setExpanded(true)} aria-haspopup="dialog" className="inline-flex min-h-11 items-center gap-2 text-ink underline underline-offset-4"><Expand size={15} aria-hidden="true" />Expand document</button>}
            <a href={item.src} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center underline underline-offset-4">Open original <span className="sr-only">{item.kind === "pdf" ? "PDF" : "image"} in a new tab</span></a>
          </div>
        </figcaption>
      </figure>
      {items.length > 1 && (
        <div className="mt-3 flex min-w-0 items-center gap-3">
          <button type="button" aria-label={`Previous ${label} file`} onClick={() => move(-1)} className={controlClass}><ArrowLeft size={18} aria-hidden="true" /></button>
          <ol ref={thumbnails} aria-label="Choose a work sample" className={styles.thumbnails}>
            {items.map((media, itemIndex) => (
              <li key={media.src} className="shrink-0">
                <button
                  type="button"
                  aria-label={`Show ${media.caption}${media.kind === "pdf" ? " (PDF)" : ""}`}
                  aria-pressed={activeIndex === itemIndex}
                  onClick={() => setIndex(itemIndex)}
                  title={media.caption}
                  className={cn("relative block h-16 w-20 overflow-hidden rounded-inset border-2 bg-sheet transition-colors motion-reduce:transition-none", activeIndex === itemIndex ? "border-ink" : "border-rule/70 hover:border-ink/60")}
                >
                  {media.kind === "pdf" ? <span className={styles.documentThumbnail}><FileText size={22} strokeWidth={1.3} aria-hidden="true" /><span>PDF{media.pageCount ? ` · ${media.pageCount} pages` : ""}</span></span> : <Image src={media.src} alt="" fill unoptimized sizes="80px" loading="lazy" className="object-contain p-1" />}
                </button>
              </li>
            ))}
          </ol>
          <button type="button" aria-label={`Next ${label} file`} onClick={() => move(1)} className={controlClass}><ArrowRight size={18} aria-hidden="true" /></button>
        </div>
      )}
      <MediaGalleryViewer
        items={items}
        index={activeIndex}
        page={page}
        onPageChange={changePage}
        open={expanded}
        onChange={setIndex}
        onClose={() => {
          setExpanded(false);
          trigger.current?.focus({ preventScroll: true });
        }}
      />
    </div>
  );
}
