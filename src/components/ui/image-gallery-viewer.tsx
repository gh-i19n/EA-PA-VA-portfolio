"use client";

import { useEffect, useId, useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import type { GalleryImage } from "~/shared/types/gallery-image";
import { GalleryImageDisplay } from "./gallery-image-display";

const controlClass = "inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full border border-rule px-3 text-label hover:bg-mist";

export function ImageGalleryViewer({ images, index, open, onClose, onChange }: {
  images: readonly GalleryImage[];
  index: number;
  open: boolean;
  onClose: () => void;
  onChange: (index: number) => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const image = images[index];

  useEffect(() => {
    const element = dialog.current;
    if (!open || !element) return;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!image) return null;

  function move(offset: number) {
    onChange((index + offset + images.length) % images.length);
  }

  return (
    <dialog
      ref={dialog}
      aria-labelledby={titleId}
      onClose={onClose}
      onKeyDown={(event) => {
        if (event.altKey || event.ctrlKey || event.metaKey || images.length < 2) return;
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
      className="fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-[1600px] overflow-y-auto rounded-frame border border-rule bg-sheet p-0 text-ink backdrop:bg-ink/70"
    >
      {open && (
        <div className="flex max-h-[calc(100dvh-2rem)] flex-col">
          <header className="flex shrink-0 items-center justify-between gap-4 border-b border-rule px-4 py-3 sm:px-6">
            <h2 id={titleId} className="text-support font-medium">{image.caption}</h2>
            <button type="button" onClick={() => dialog.current?.close()} className={controlClass}>
              <span className="sr-only sm:not-sr-only">Close</span><X size={18} aria-hidden="true" />
            </button>
          </header>
          <div className="min-h-0 overflow-auto overscroll-contain bg-mist p-3 sm:p-6">
            <GalleryImageDisplay key={image.src} image={image} expanded />
          </div>
          <footer className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-rule px-4 py-3 sm:px-6">
            <a href={image.src} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 text-label underline underline-offset-4">
              Original image <span className="sr-only">in a new tab</span><ArrowUpRight size={16} aria-hidden="true" />
            </a>
            {images.length > 1 && (
              <div className="flex items-center gap-3">
                <button type="button" aria-label="Previous image" onClick={() => move(-1)} className={controlClass}><ArrowLeft size={18} aria-hidden="true" /></button>
                <span role="status" aria-atomic="true" className="text-caption tabular-nums">{index + 1} / {images.length}</span>
                <button type="button" aria-label="Next image" onClick={() => move(1)} className={controlClass}><ArrowRight size={18} aria-hidden="true" /></button>
              </div>
            )}
          </footer>
        </div>
      )}
    </dialog>
  );
}
