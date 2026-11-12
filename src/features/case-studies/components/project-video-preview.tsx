"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { cn } from "~/shared/ui/utils";
import { useProjectPlayback } from "../hooks/use-project-playback";
import styles from "./project-video-preview.module.css";

export function ProjectVideoPreview({ title, recording, poster, eager = false }: {
  title: string;
  recording: string;
  poster: string;
  eager?: boolean;
}) {
  const { videoRef, status, hasFrame, active, toggle, pause, events } = useProjectPlayback();
  const label = active ? "Pause" : status === "error" ? "Retry" : "Play";

  return (
    <div>
      <button
        type="button"
        aria-label={`${label} ${title} preview`}
        aria-pressed={active}
        aria-busy={status === "loading"}
        className={cn(styles.media, "group text-left focus-visible:-outline-offset-4 focus-visible:outline-mustard")}
        onClick={toggle}
        onKeyDown={(event) => {
          if (event.key === "Escape") pause();
        }}
      >
        <Image
          src={poster}
          alt=""
          fill
          unoptimized
          loading={eager ? "eager" : "lazy"}
          sizes="(min-width:1520px) 704px, (min-width:1152px) 46vw, 90vw"
          className="pointer-events-none object-contain"
        />
        <video
          ref={videoRef}
          src={recording}
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          data-visible={hasFrame}
          className={styles.video}
          {...events}
        >
          Video preview unavailable.
        </video>
        <span className="pointer-events-none absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 sm:inset-x-5 sm:bottom-5" aria-hidden="true">
          <span className="rounded-full bg-ink/90 px-3 py-2 text-caption font-medium text-sheet">
            {status === "loading" ? "Loading preview…"
              : status === "error" ? "Tap to retry"
              : status === "playing" ? "Silent preview"
              : "Play preview"}
          </span>
          <span className="grid size-12 shrink-0 place-items-center rounded-full bg-ink/90 text-sheet transition-colors group-hover:bg-ink motion-reduce:transition-none">
            {active ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
          </span>
        </span>
      </button>
      <p role="status" className="sr-only">
        {status === "error" ? "Video preview unavailable. Retry or open the project using the link below." : ""}
      </p>
    </div>
  );
}
