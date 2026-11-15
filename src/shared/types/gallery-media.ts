import type { GalleryImage } from "./gallery-image";

export type GalleryDocument = {
  src: string;
  caption: string;
  pageCount?: number;
  sections?: readonly { title: string; page: number }[];
};

export type GalleryMedia =
  | (GalleryImage & { kind: "image" })
  | (GalleryDocument & { kind: "pdf" });
