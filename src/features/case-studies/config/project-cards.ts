import type { ProjectCardData } from "../types/project-card";
import { serviceCategories } from "~/config/service-categories";
import { caseStudies } from "./case-studies";
import { projectPresentations } from "./project-presentations";
import { projectRecordings } from "./project-recordings";

/** The project index follows the same category order as the services page. */
export const projectCards = [
  ...caseStudies.map((study) => {
    const presentation = projectPresentations[study.slug];
    const category = serviceCategories[study.serviceCategory];
    const document = presentation.format === "document" ? study.artifact : undefined;
    const recordings = projectRecordings[study.serviceCategory];
    const featured = recordings[0];

    return {
      id: study.slug,
      order: category.order,
      category: category.title,
      title: presentation.title,
      contents: recordings.length
        ? [`${recordings.length} recordings`, ...presentation.contents]
        : presentation.contents,
      poster: featured?.poster ?? document?.preview ?? study.image,
      alt: document?.alt ?? study.alt,
      recording: featured?.src,
      href: `/case-studies/${study.slug}`,
      linkLabel: `View ${presentation.title} project`,
      opensNewTab: false,
    };
  }),
].sort((a, b) => a.order - b.order) satisfies readonly ProjectCardData[];
