"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState, type CSSProperties } from "react";
import { Pause, Play } from "lucide-react";
import { toolGroups } from "../config/tools";
import styles from "./services-tool-visual.module.css";

type Tool = (typeof toolGroups)[number]["tools"][number];

const featuredNames = new Set<string>([
  "Google Workspace",
  "Microsoft 365",
  "Notion",
  "Asana",
  "Trello",
  "Slack",
]);
const featuredTools = toolGroups
  .flatMap<Tool>((group) => group.tools)
  .filter((tool) => featuredNames.has(tool.name));

export function ServicesToolVisual() {
  const frame = useRef<HTMLElement>(null);
  const logosId = useId();
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const element = frame.current;
    if (!element) return;

    let inView = false;
    const updatePlayback = () => {
      element.dataset.inView = String(inView && !document.hidden);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        updatePlayback();
      },
      { threshold: 0.15 },
    );

    observer.observe(element);
    document.addEventListener("visibilitychange", updatePlayback);
    return () => {
      element.dataset.inView = "false";
      observer.disconnect();
      document.removeEventListener("visibilitychange", updatePlayback);
    };
  }, []);

  return (
    <figure
      ref={frame}
      data-in-view="false"
      data-paused={paused}
      className={`${styles.visual} relative z-10 flex aspect-[1.1] w-full flex-col overflow-hidden rounded-frame border border-rule/50 bg-sheet p-5 sm:p-8 md:aspect-[.95] lg:aspect-[1.25] lg:p-10`}
    >
      <ul
        id={logosId}
        aria-label="Featured tools"
        className="grid min-h-0 flex-1 list-none grid-cols-2 grid-rows-3 gap-3 sm:gap-5"
      >
        {featuredTools.map((tool, index) => (
          <li
            key={tool.name}
            className="flex min-w-0 items-center justify-center rounded-control border border-rule/30 bg-paper/60 px-4 sm:px-5"
          >
            <div
              className={`${styles.logo} flex w-full items-center justify-center`}
              style={
                {
                  "--drift-delay": `${index * -1.8}s`,
                } as CSSProperties
              }
            >
              <Image
                src={tool.logo.src}
                alt={tool.name}
                width={tool.logo.width}
                height={tool.logo.height}
                loading="eager"
                sizes="(min-width: 1280px) 200px, 150px"
                style={{ width: tool.logo.displayWidth * 0.72, height: "auto" }}
                className="max-w-full object-contain"
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex min-h-9 items-center justify-between gap-4 sm:mt-6">
        <figcaption className="text-caption text-muted">
          Tools behind the work
        </figcaption>
        <button
          type="button"
          aria-controls={logosId}
          aria-label={
            paused ? "Play tool logo animation" : "Pause tool logo animation"
          }
          onClick={() => setPaused((value) => !value)}
          className={`${styles.control} grid size-9 shrink-0 place-items-center rounded-full border border-rule text-muted transition-colors hover:bg-paper hover:text-ink`}
        >
          {paused ? (
            <Play size={13} strokeWidth={1.6} aria-hidden="true" />
          ) : (
            <Pause size={13} strokeWidth={1.6} aria-hidden="true" />
          )}
        </button>
      </div>
    </figure>
  );
}
