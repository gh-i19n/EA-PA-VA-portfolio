import type { GalleryImage } from "~/shared/types/gallery-image";

export type ProjectWorkSample = {
  images: readonly [GalleryImage, ...GalleryImage[]];
  problem: string;
  solution: string;
  approach: string;
  note?: string;
};

export type ProjectWorkSampleGroup = ProjectWorkSample & { capability: string };
