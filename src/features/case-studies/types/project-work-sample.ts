import type { GalleryImage } from "~/shared/types/gallery-image";
import type { GalleryDocument } from "~/shared/types/gallery-media";

export type ProjectWorkSampleNote = {
  title: string;
  paragraphs: readonly [string, ...string[]];
  bullets?: readonly string[];
};

export type ProjectWorkSample = {
  images: readonly GalleryImage[];
  documents?: readonly GalleryDocument[];
  problem: string | ProjectWorkSampleNote;
  solution: string | ProjectWorkSampleNote;
  approach: string | ProjectWorkSampleNote;
  note?: string;
};

export type ProjectWorkSampleGroup = ProjectWorkSample & { capability: string };
