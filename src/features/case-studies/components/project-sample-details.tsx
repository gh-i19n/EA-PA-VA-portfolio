import {
  IllustratedAccordion,
  type IllustratedAccordionItem,
} from "~/components/ui/illustrated-accordion";
import type { ProjectStory } from "../types/project-story";

export function ProjectSampleDetails({ id, title, story, imageSrc }: {
  id: string;
  title: string;
  story: ProjectStory;
  imageSrc: string;
}) {
  const image = { src: imageSrc, alt: story.imageAlt, caption: story.imageCaption };
  const items: readonly IllustratedAccordionItem[] = [
    { id: "problem", label: "Problem", ...story.problem, image },
    { id: "solution", label: "Solution", ...story.solution, image },
    { id: "approach", label: "Approach", ...story.approach, image },
  ];

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mt-12 sm:mt-16">
      <header className="mb-6 flex flex-wrap items-baseline justify-between gap-3 sm:mb-8">
        <h2 id={`${id}-title`} className="font-display text-[clamp(28px,4vw,44px)] font-medium leading-tight tracking-[-.03em]">
          A closer look.
        </h2>
        <p className="text-support text-muted">{title}</p>
      </header>
      <IllustratedAccordion items={items} label={`Problem, solution and approach for ${title}`} />
    </section>
  );
}
