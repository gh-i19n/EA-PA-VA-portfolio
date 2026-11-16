"use client";

import { ArrowUpRight } from "lucide-react";
import { ContentAccordion } from "~/components/ui/content-accordion";
import { MediaGallery } from "~/components/ui/media-gallery";
import { SelectField } from "~/components/ui/select-field";
import { cn } from "~/shared/ui/utils";
import type { ProjectWorkSampleGroup, ProjectWorkSampleNote } from "../types/project-work-sample";
import { sampleCountLabel, sampleMedia } from "../utils/sample-media";
import styles from "./project-sample-details.module.css";

const groupTitle = (group: ProjectWorkSampleGroup) => group.displayTitle ?? group.capability;

/** A service remains selected while visitors inspect its images and context. */
export function ProjectSampleDetails({ id, groups, capability, onServiceSelect }: {
  id: string;
  groups: readonly ProjectWorkSampleGroup[];
  capability: string;
  onServiceSelect: (capability: string) => void;
}) {
  const activeIndex = Math.max(0, groups.findIndex((group) => group.capability === capability));
  const active = groups[activeIndex] ?? groups[0];
  if (!active) return null;

  const notes = [
    { label: "Problem", text: active.problem },
    { label: "Solution", text: active.solution },
    { label: "Approach", text: active.approach },
  ].map<ProjectWorkSampleNote>(({ label, text }) => typeof text === "string"
    ? { title: label, paragraphs: [text] }
    : text);
  const noteContent = (note: ProjectWorkSampleNote) => (
    <div className={styles.noteBody}>
      {note.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {note.bullets?.length ? (
        <ul className={styles.noteList}>
          {note.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
        </ul>
      ) : null}
    </div>
  );

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mt-16 border-t border-rule pt-10 sm:mt-24 sm:pt-12">
      <header className="mb-8 flex flex-wrap items-baseline justify-between gap-3 sm:mb-10">
        <h2 id={`${id}-title`} className="font-display text-[clamp(28px,4vw,44px)] font-medium leading-tight tracking-[-.03em]">A closer look.</h2>
      </header>
      <div className={styles.layout}>
        <div className="lg:hidden">
          <SelectField
            id={`${id}-service`}
            name={`${id}-service`}
            label="Choose a service"
            placeholder="Choose a service"
            value={String(activeIndex)}
            onValueChange={(value) => {
              const selected = groups[Number(value)];
              if (selected) onServiceSelect(selected.capability);
            }}
            options={groups.map((group, index) => ({ value: String(index), label: groupTitle(group) }))}
          />
        </div>
        <div role="group" aria-label="Choose a service to explore" className="hidden self-start lg:block">
          <p className="mb-4 text-caption text-muted">Services in this project</p>
          <ul className="list-none border-t border-rule">
            {groups.map((group, index) => (
              <li key={group.capability} className="border-b border-rule">
                <button
                  type="button"
                  aria-pressed={activeIndex === index}
                  aria-controls={`${id}-content`}
                  onClick={() => onServiceSelect(group.capability)}
                  className={cn(styles.service, activeIndex === index && styles.selected)}
                >
                  <span className="min-w-0">
                    <span className="block text-support font-medium leading-snug">{groupTitle(group)}</span>
                    <span className="mt-2 block text-caption text-muted">{sampleCountLabel(group)}</span>
                  </span>
                  <ArrowUpRight size={18} aria-hidden="true" className={cn("shrink-0", activeIndex !== index && "opacity-0")} />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div id={`${id}-content`} role="region" aria-labelledby={`${id}-service-title`} className={styles.content}>
          <header className="mb-5">
            <h3 id={`${id}-service-title`} className="text-balance font-display text-[clamp(24px,3vw,34px)] font-medium leading-tight tracking-[-.025em]">{groupTitle(active)}</h3>
          </header>
          <MediaGallery key={active.capability} items={sampleMedia(active)} label={groupTitle(active)} />
          <ContentAccordion
            label="Problem, solution and approach"
            items={notes.map((note, index) => ({
              id: `note-${index}`,
              title: note.title.replace(/^\d+\.\s*/, ""),
              content: noteContent(note),
            }))}
          />
          {active.note && <p className="mt-5 max-w-prose text-caption text-muted">{active.note}</p>}
          <p role="status" aria-atomic="true" className="sr-only">Showing {groupTitle(active)}: {sampleCountLabel(active)}, with the problem, solution and approach.</p>
        </div>
      </div>
    </section>
  );
}
