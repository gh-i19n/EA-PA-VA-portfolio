import type { Certificate, Testimonial } from "../types/credentials";

export const curriculumVitae = {
  previewSrc: "/images/credentials/ay-cv-preview.png",
  previewWidth: 1273,
  previewHeight: 1800,
  documentHref: "/documents/ayomide-ajibola-cv.pdf",
} as const;

// Populate only with AY's actual, approved feedback and verifiable credentials.
export const testimonials: readonly Testimonial[] = [];
export const certificates: readonly Certificate[] = [];
