import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ProjectCardData } from "../types/project-card";
import { ProjectVideoPreview } from "./project-video-preview";

export function ProjectCard({ project, eager = false }: { project: ProjectCardData; eager?: boolean }) {
  return (
    <article
      className="flex min-w-0 flex-col overflow-hidden rounded-panel border border-rule/70 bg-paper"
      aria-labelledby={`${project.id}-category`}
    >
      <h2
        id={`${project.id}-category`}
        className="shrink-0 bg-ink/[.04] px-5 py-4 font-display text-[22px] font-semibold leading-[1.2] tracking-[-.025em] sm:px-7"
      >
        {project.category}
      </h2>
      {project.recording ? (
        <ProjectVideoPreview title={project.title} recording={project.recording} poster={project.poster} eager={eager} />
      ) : (
        <div className="relative aspect-video shrink-0 bg-mist">
          <Image
            src={project.poster}
            alt={project.alt}
            fill
            unoptimized
            loading={eager ? "eager" : "lazy"}
            sizes="(min-width:1520px) 704px, (min-width:1152px) 46vw, 90vw"
            className="object-contain p-5 sm:p-7"
          />
        </div>
      )}
      <Link
        href={project.href}
        target={project.opensNewTab ? "_blank" : undefined}
        rel={project.opensNewTab ? "noreferrer" : undefined}
        prefetch={project.opensNewTab ? false : undefined}
        aria-label={project.linkLabel}
        className="group flex min-h-24 flex-1 items-center justify-between gap-5 border-t border-rule/60 px-5 py-5 focus-visible:-outline-offset-4 sm:px-7 sm:py-6"
      >
        <div className="min-w-0">
          <h3 className="text-balance font-display text-[clamp(24px,2.2vw,32px)] font-medium leading-[1.15] tracking-[-.03em] group-hover:underline">
            {project.title}
          </h3>
          <span className="mt-2 block text-pretty text-caption text-muted">
            {project.contents.join(" · ")}
          </span>
        </div>
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-ink text-paper transition-transform duration-300 group-hover:rotate-45 motion-reduce:transition-none">
          <ArrowUpRight size={20} strokeWidth={1.3} aria-hidden="true" />
        </span>
      </Link>
    </article>
  );
}
