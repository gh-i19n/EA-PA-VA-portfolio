import type { GalleryMedia } from "~/shared/types/gallery-media";
import type { ProjectWorkSample } from "../types/project-work-sample";

export function sampleMedia(sample: ProjectWorkSample): GalleryMedia[] {
  return [
    ...sample.images.map((image) => ({ ...image, kind: "image" as const })),
    ...(sample.documents ?? []).map((document) => ({ ...document, kind: "pdf" as const })),
  ];
}

export function sampleCountLabel(sample: ProjectWorkSample): string {
  const counts = [];
  if (sample.images.length) counts.push(`${sample.images.length} ${sample.images.length === 1 ? "image" : "images"}`);
  if (sample.documents?.length) counts.push(`${sample.documents.length} ${sample.documents.length === 1 ? "PDF" : "PDFs"}`);
  return counts.join(" · ") || "No files yet";
}
