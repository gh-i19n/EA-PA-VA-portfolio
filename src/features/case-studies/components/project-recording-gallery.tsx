"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { Play } from "lucide-react";
import { cn } from "~/shared/ui/utils";
import { serviceCategories, type ServiceCategoryId } from "~/config/service-categories";
import { useProjectPlayback } from "../hooks/use-project-playback";
import type { ProjectRecording } from "../types/project-recording";

function RecordingPlayer({ recording, id, userInitiated }: {
  recording: ProjectRecording;
  id: string;
  userInitiated: boolean;
}) {
  const { videoRef, status, retry, events } = useProjectPlayback(userInitiated);

  return (
    <div id={id}>
      <div className="relative overflow-hidden rounded-frame border border-rule/70 bg-mist">
        <video
          ref={videoRef}
          src={recording.src}
          poster={recording.poster}
          controls
          muted
          loop
          playsInline
          preload="none"
          aria-label={`${recording.title}${recording.hasAudio ? "" : ", silent"} work sample`}
          aria-describedby={`${id}-description`}
          className="aspect-video w-full object-contain lg:max-h-[650px]"
          {...events}
        >
          <a href={recording.src}>Open {recording.title}</a>
        </video>
        {status === "loading" && (
          <p className="pointer-events-none absolute left-4 top-4 rounded-full bg-ink/90 px-3 py-2 text-caption text-sheet" role="status">
            Loading recording…
          </p>
        )}
      </div>
      <div className="mt-5 flex flex-wrap items-start justify-between gap-3">
        <h3 className="font-display text-[clamp(24px,3vw,34px)] font-medium leading-tight tracking-[-.025em]">
          {recording.title}
        </h3>
        <a href={recording.src} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center text-caption underline underline-offset-4">
          Open video <span className="sr-only">in a new tab</span>
        </a>
      </div>
      <p id={`${id}-description`} className="mt-1 max-w-[760px] text-body text-muted">
        {recording.description}
      </p>
      {recording.hasAudio && (
        <p className="mt-2 text-caption text-muted">Use the player controls to turn on sound.</p>
      )}
      {status === "error" && (
        <p className="mt-3 text-support" role="status">
          This recording couldn’t load. <button type="button" onClick={retry} className="inline-flex min-h-11 items-center font-medium underline underline-offset-4">Try again</button> or open the video directly.
        </p>
      )}
    </div>
  );
}

export function ProjectRecordingGallery({ recordings, serviceCategory }: {
  recordings: readonly ProjectRecording[];
  serviceCategory: ServiceCategoryId;
}) {
  const [selection, setSelection] = useState({ index: 0, userInitiated: false, version: 0 });
  const id = useId();
  const selected = recordings[selection.index];
  if (!selected) return null;
  const capabilities = [...new Set(recordings.map((recording) => recording.capability))];
  const playlist = capabilities.flatMap((capability, groupIndex) =>
    recordings
      .map((recording, index) => ({ recording, index }))
      .filter(({ recording }) => recording.capability === capability)
      .map((item, index) => ({ ...item, groupIndex, startsGroup: index === 0 })),
  );

  return (
    <section aria-labelledby={`${id}-title`}>
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
        <h2 id={`${id}-title`} className="font-display text-[clamp(28px,4vw,44px)] font-medium tracking-[-.03em]">
          The work, in motion.
        </h2>
        <p className="text-caption text-muted">{serviceCategories[serviceCategory].title} · {recordings.length} recordings</p>
      </div>
      <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(250px,320px)] lg:gap-8">
        <RecordingPlayer key={`${selected.id}-${selection.version}`} id={`${id}-player`} recording={selected} userInitiated={selection.userInitiated} />
        <nav aria-label="Choose a project recording" className="min-w-0 lg:relative lg:min-h-0">
          <ol className="flex max-w-full list-none gap-3 overflow-x-auto pb-3 lg:absolute lg:inset-0 lg:flex-col lg:overflow-x-hidden lg:overflow-y-auto lg:pb-0 lg:pe-2">
            {playlist.map(({ recording, index, groupIndex, startsGroup }) => (
              <li key={recording.id} className="w-[240px] shrink-0 lg:w-full">
                {startsGroup && (
                  <h3 id={`${id}-capability-${groupIndex}`} className="mb-2 hidden text-caption font-medium text-muted lg:block">
                    {recording.capability}
                  </h3>
                )}
                <button
                  type="button"
                  aria-label={`Play ${recording.title}`}
                  aria-pressed={selection.index === index}
                  aria-controls={`${id}-player`}
                  aria-describedby={`${id}-capability-${groupIndex}`}
                  onClick={() => setSelection((previous) => ({ index, userInitiated: true, version: previous.version + 1 }))}
                  className={cn("flex min-h-24 w-full items-center gap-3 rounded-control border p-3 text-left transition-colors motion-reduce:transition-none", selection.index === index ? "border-mustard bg-mist" : "border-rule/70 bg-sheet hover:bg-mist")}
                >
                  <span className="relative grid h-16 w-20 shrink-0 place-items-center overflow-hidden rounded-inset bg-paper">
                    <Image src={recording.poster} alt="" fill unoptimized loading="lazy" sizes="80px" className="object-contain" />
                    <span className="relative grid size-7 place-items-center rounded-full bg-ink/85 text-sheet"><Play size={12} fill="currentColor" aria-hidden="true" /></span>
                  </span>
                  <span className="min-w-0 text-support font-medium leading-snug">{recording.title}</span>
                </button>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
