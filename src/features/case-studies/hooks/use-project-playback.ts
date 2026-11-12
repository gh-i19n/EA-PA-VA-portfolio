"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type PlaybackState = {
  status: "idle" | "loading" | "playing" | "paused" | "error";
  hasFrame: boolean;
};

/** Load visible recordings on demand, and preserve a visitor's pause choice. */
export function useProjectPlayback(userInitiated = false) {
  const video = useRef<HTMLVideoElement>(null);
  const visible = useRef(false);
  const requested = useRef(false);
  const requestId = useRef(0);
  const manuallyPaused = useRef(false);
  const explicitlyStarted = useRef(userInitiated);
  const automaticBlocked = useRef(false);
  const [state, setState] = useState<PlaybackState>({ status: "idle", hasFrame: false });

  const pause = useCallback((manual = false) => {
    if (manual) manuallyPaused.current = true;
    requested.current = false;
    requestId.current += 1;
    video.current?.pause();
    setState((previous) => previous.status === "error" || previous.status === "idle"
      ? previous
      : { ...previous, status: "paused" });
  }, []);

  const play = useCallback(async (automatic = false) => {
    const player = video.current;
    if (!player || requested.current || document.hidden) return;
    if (automatic && (
      manuallyPaused.current || automaticBlocked.current ||
      (window.matchMedia("(prefers-reduced-motion: reduce)").matches && !explicitlyStarted.current)
    )) return;

    if (!automatic) {
      manuallyPaused.current = false;
      automaticBlocked.current = false;
      explicitlyStarted.current = true;
    }
    requested.current = true;
    const currentRequest = ++requestId.current;
    setState((previous) => ({ ...previous, status: "loading" }));
    if (player.error) player.load();

    try {
      await player.play();
      if (currentRequest !== requestId.current) return;
      setState({ status: "playing", hasFrame: true });
    } catch (error) {
      if (currentRequest !== requestId.current) return;
      requested.current = false;
      automaticBlocked.current = true;
      // Low-power modes can require a tap even for a muted recording.
      const blocked = error instanceof DOMException && error.name === "NotAllowedError";
      setState((previous) => ({ ...previous, status: blocked ? "paused" : "error" }));
    }
  }, []);

  useEffect(() => {
    const player = video.current;
    if (!player) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePlayback = () => {
      if (visible.current && !document.hidden) void play(true);
      else pause();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible.current = Boolean(entry?.isIntersecting && entry.intersectionRatio >= 0.2);
      updatePlayback();
    }, { threshold: [0, 0.2] });
    observer.observe(player);

    function motionChanged() {
      explicitlyStarted.current = false;
      if (reducedMotion.matches) pause();
      else updatePlayback();
    }
    document.addEventListener("visibilitychange", updatePlayback);
    reducedMotion.addEventListener("change", motionChanged);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updatePlayback);
      reducedMotion.removeEventListener("change", motionChanged);
      requested.current = false;
      requestId.current += 1;
      player.pause();
    };
  }, [pause, play]);

  return {
    videoRef: video,
    ...state,
    active: state.status === "loading" || state.status === "playing",
    toggle: () => requested.current ? pause(true) : void play(),
    pause: () => pause(true),
    retry: () => void play(),
    events: {
      onPlaying: () => {
        if (requested.current) setState({ status: "playing", hasFrame: true });
        else video.current?.pause();
      },
      onPlay: () => {
        if (document.hidden || !visible.current) {
          requested.current = false;
          video.current?.pause();
          return;
        }
        // Native controls are an explicit request to resume a paused recording.
        if (!requested.current) {
          requested.current = true;
          manuallyPaused.current = false;
          automaticBlocked.current = false;
          explicitlyStarted.current = true;
        }
      },
      onPause: () => {
        if (video.current?.paused && requested.current) {
          requested.current = false;
          manuallyPaused.current = true;
          requestId.current += 1;
          setState((previous) => ({ ...previous, status: "paused" }));
        }
      },
      onWaiting: () => {
        if (requested.current) setState((previous) => ({ ...previous, status: "loading" }));
      },
      onError: () => {
        requested.current = false;
        automaticBlocked.current = true;
        requestId.current += 1;
        setState({ status: "error", hasFrame: false });
      },
    },
  };
}
