import { PortfolioContours } from "~/components/ui/portfolio-contours";
import { projectCards } from "../config/project-cards";
import { ProjectCard } from "./project-card";

export function CaseStudiesPage() {
  return (
    <>
      <header className="relative isolate mx-auto grid w-[calc(100%-2.5rem)] max-w-[1440px] gap-6 overflow-hidden py-10 sm:w-[calc(100%-5rem)] sm:py-12 md:grid-cols-[1fr_1.1fr] md:items-end md:gap-16">
        <PortfolioContours appearance="project" />
        <h1
          id="projects-title"
          className="relative z-10 font-display text-[clamp(48px,6.5vw,90px)] font-medium leading-none tracking-[-.045em]"
        >
          Project
        </h1>
        <p className="relative z-10 max-w-[530px] text-pretty text-body text-muted md:justify-self-end">
          Explore my work in executive support, project coordination, reporting
          and travel planning. Preview the recordings or open a project for a
          closer look.
        </p>
      </header>
      <div className="bg-sheet py-10 sm:py-14">
        <section
          className="mx-auto grid w-[calc(100%-2.5rem)] max-w-[1440px] grid-cols-[repeat(auto-fit,minmax(min(100%,32rem),1fr))] gap-6 sm:w-[calc(100%-5rem)] sm:gap-8"
          aria-labelledby="projects-title"
        >
          {projectCards.map((project, index) => (
            <ProjectCard key={project.id} project={project} eager={index < 2} />
          ))}
        </section>
      </div>
    </>
  );
}
