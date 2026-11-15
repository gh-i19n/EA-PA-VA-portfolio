import type { GalleryImage } from "~/shared/types/gallery-image";
import type { GalleryDocument } from "~/shared/types/gallery-media";

export type ProjectWorkSample = {
  images: readonly GalleryImage[];
  documents?: readonly GalleryDocument[];
  problem: string;
  solution: string;
  approach: string;
  note?: string;
};

export type ProjectWorkSampleGroup = ProjectWorkSample & { capability: string };
