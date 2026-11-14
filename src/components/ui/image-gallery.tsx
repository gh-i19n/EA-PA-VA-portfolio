"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Expand } from "lucide-react";
import { cn } from "~/shared/ui/utils";
import type { GalleryImage } from "~/shared/types/gallery-image";
import { GalleryImageDisplay } from "./gallery-image-display";
import { ImageGalleryViewer } from "./image-gallery-viewer";
import styles from "./image-gallery.module.css";

const controlClass = "grid size-11 shrink-0 place-items-center rounded-full border border-rule transition-colors hover:bg-mist motion-reduce:transition-none";

/** A manually browsed gallery with thumbnails and a native modal image viewer. */
export function ImageGallery({ images, label }: { images: readonly GalleryImage[]; label: string }) {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const thumbnails = useRef<HTMLOListElement>(null);
  const id = useId();
  const image = images[index] ?? images[0];

  useEffect(() => {
    const list = thumbnails.current;
    const selected = list?.children[index] as HTMLElement | undefined;
    if (!list || !selected) return;
    const listBounds = list.getBoundingClientRect();
    const selectedBounds = selected.getBoundingClientRect();
    if (selectedBounds.left < listBounds.left) list.scrollLeft -= listBounds.left - selectedBounds.left + 8;
    if (selectedBounds.right > listBounds.right) list.scrollLeft += selectedBounds.right - listBounds.right + 8;
  }, [index]);

  if (!image) return <p className="text-support text-muted">No images are available for this service yet.</p>;

  function move(offset: number) {
    setIndex((current) => (current + offset + images.length) % images.length);
  }

  return (
    <div role="group" aria-label={`${label} screenshots`} className="min-w-0">
      <figure>
        <button
          ref={trigger}
          type="button"
          aria-haspopup="dialog"
          aria-label={`Enlarge ${image.caption}`}
          aria-describedby={`${id}-caption`}
          onClick={() => setExpanded(true)}
          className={styles.stage}
        >
          <GalleryImageDisplay key={image.src} image={image} />
          <span className="absolute bottom-3 right-3 grid size-11 place-items-center rounded-full border border-rule bg-sheet text-ink"><Expand size={18} aria-hidden="true" /></span>
        </button>
        <figcaption id={`${id}-caption`} className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-caption text-muted">
          <span role="status" aria-atomic="true">{image.caption} <span className="ml-2 tabular-nums">{index + 1} / {images.length}</span></span>
          <a href={image.src} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center underline underline-offset-4">Open original <span className="sr-only">image in a new tab</span></a>
        </figcaption>
      </figure>
      {images.length > 1 && (
        <div className="mt-3 flex min-w-0 items-center gap-3">
          <button type="button" aria-label={`Previous ${label} screenshot`} onClick={() => move(-1)} className={controlClass}><ArrowLeft size={18} aria-hidden="true" /></button>
          <ol ref={thumbnails} aria-label="Choose a screenshot" className={styles.thumbnails}>
            {images.map((item, itemIndex) => (
              <li key={item.src} className="shrink-0">
                <button
                  type="button"
                  aria-label={`Show ${item.caption}`}
                  aria-pressed={index === itemIndex}
                  onClick={() => setIndex(itemIndex)}
                  className={cn("relative block h-16 w-20 overflow-hidden rounded-inset border-2 bg-sheet transition-colors motion-reduce:transition-none", index === itemIndex ? "border-ink" : "border-rule/70 hover:border-ink/60")}
                >
                  <Image src={item.src} alt="" fill unoptimized sizes="80px" loading="lazy" className="object-contain p-1" />
                </button>
              </li>
            ))}
          </ol>
          <button type="button" aria-label={`Next ${label} screenshot`} onClick={() => move(1)} className={controlClass}><ArrowRight size={18} aria-hidden="true" /></button>
        </div>
      )}
      <ImageGalleryViewer
        images={images}
        index={index}
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
