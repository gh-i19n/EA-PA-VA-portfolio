"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { Play, X } from "lucide-react";
import { cn } from "~/shared/ui/utils";

function waitForPicture(player: HTMLVideoElement, signal: AbortSignal) {
  if (signal.aborted) return Promise.reject(signal.reason);
  if (player.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
    return Promise.resolve();
  }

  return new Promise<void>((resolve, reject) => {
    function cleanup() {
      player.removeEventListener("loadeddata", ready);
      player.removeEventListener("canplay", ready);
      player.removeEventListener("error", fail);
      signal.removeEventListener("abort", cancel);
    }
    function ready() {
      if (player.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return;
      cleanup();
      resolve();
    }
    function fail() {
      cleanup();
      reject(new Error("The video could not load."));
    }
    function cancel() {
      cleanup();
      reject(signal.reason);
    }

    player.addEventListener("loadeddata", ready);
    player.addEventListener("canplay", ready);
    player.addEventListener("error", fail);
    signal.addEventListener("abort", cancel, { once: true });
    player.preload = "auto";
    player.load();
  });
}

/** A lightweight preview that opens a user-controlled, portrait video player. */
export function IntroductionVideo({
  src,
  poster,
  captions,
  duration,
  className,
}: {
  src: string;
  poster: string;
  captions: string;
  duration: string;
  className?: string;
}) {
  const titleId = useId();
  const dialog = useRef<HTMLDialogElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const pendingPlay = useRef<AbortController | null>(null);
  const [failed, setFailed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isPreparing, setIsPreparing] = useState(false);

  useEffect(() => () => {
    pendingPlay.current?.abort();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isOpen]);

  async function play() {
    const player = video.current;
    if (!player || pendingPlay.current) return;

    setFailed(false);
    if (!dialog.current?.open) dialog.current?.showModal();
    setIsOpen(true);
    setIsPreparing(true);
    const controller = new AbortController();
    pendingPlay.current = controller;

    try {
      await waitForPicture(player, controller.signal);
      // Start only once the browser has decoded a video frame.
      if (controller.signal.aborted || !dialog.current?.open) return;
      setIsPreparing(false);
      await player.play();
      if (controller.signal.aborted || !dialog.current?.open) player.pause();
    } catch {
      // Autoplay restrictions leave native controls available for a manual start.
      if (!controller.signal.aborted && player.error) setFailed(true);
    } finally {
      if (pendingPlay.current === controller) {
        pendingPlay.current = null;
        setIsPreparing(false);
      }
    }
  }

  function finishClose() {
    pendingPlay.current?.abort();
    pendingPlay.current = null;
    video.current?.pause();
    setIsPreparing(false);
    setIsOpen(false);
    trigger.current?.focus({ preventScroll: true });
  }

  return (
    <div className={cn("min-w-0", className)}>
      <button
        ref={trigger}
        type="button"
        onClick={play}
        aria-label={`Watch AY’s introduction (${duration})`}
        aria-haspopup="dialog"
        className="group relative block aspect-[1.12] w-full overflow-hidden rounded-frame bg-ink text-left text-white"
      >
        <Image
          src={poster}
          alt="AY introducing herself on camera"
          fill
          sizes="(max-width:768px) 90vw, (max-width:1024px) 45vw, 550px"
          className="object-cover object-[center_40%] transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
        />
        <span className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" aria-hidden="true" />
        <span className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-4 sm:inset-x-6 sm:bottom-6">
          <span>
            <span className="block font-display text-[28px] font-medium leading-tight tracking-[-.03em]">Meet AY</span>
            <span className="mt-1 block text-label text-white/85">A personal introduction · {duration}</span>
          </span>
          <span className="grid size-14 shrink-0 place-items-center rounded-full border border-white/60 bg-white/10 backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-ink motion-reduce:transition-none">
            <Play size={21} fill="currentColor" aria-hidden="true" />
          </span>
        </span>
      </button>

      <dialog
        ref={dialog}
        aria-labelledby={titleId}
        onClose={finishClose}
        onCancel={() => video.current?.pause()}
        className="fixed inset-0 m-auto max-h-[95dvh] w-[calc(100%-2rem)] max-w-[500px] rounded-panel border-0 bg-ink p-4 text-paper shadow-2xl backdrop:bg-ink/80 backdrop:backdrop-blur-sm sm:p-5"
      >
        <div className="mb-3 flex items-center justify-between gap-4">
          <h2 id={titleId} className="font-display text-2xl font-medium tracking-[-.03em]">Meet Ayomide</h2>
          <button
            type="button"
            aria-label="Close introduction video"
            onClick={() => dialog.current?.close()}
            className="grid size-11 shrink-0 place-items-center rounded-full border border-paper/30 hover:bg-paper/10"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        <video
          ref={video}
          src={src}
          poster={poster}
          width={720}
          height={960}
          controls={!isPreparing}
          playsInline
          preload="metadata"
          aria-busy={isPreparing}
          aria-label="Ayomide Ajibola’s personal introduction"
          onError={() => setFailed(true)}
          className="mx-auto block max-h-[76dvh] w-auto max-w-full rounded-document bg-black"
        >
          <track src={captions} kind="captions" srcLang="en" label="English" />
          Your browser cannot play this video. <a href={src}>Open AY’s introduction video</a>.
        </video>
        {isPreparing && (
          <p role="status" className="mt-3 text-label text-paper/75">
            Preparing video…
          </p>
        )}
        {failed && (
          <p role="alert" className="mt-4 text-support">
            The video could not load. {" "}
            <a href={src} className="underline underline-offset-4">Open it directly</a> or{" "}
            <button type="button" className="underline underline-offset-4" onClick={play}>try again</button>.
          </p>
        )}
      </dialog>
    </div>
  );
}
