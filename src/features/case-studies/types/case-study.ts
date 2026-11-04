import type { WorkSampleId } from "./work-sample";

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  alt: string;
  sample: WorkSampleId;
  challenge: string;
  constraints: readonly string[];
  approach: readonly { title: string; text: string }[];
  deliverables: readonly string[];
  judgment: string;
  intendedResult: string;
  recording?: string;
  artifact?: {
    href: string;
    preview: string;
    alt: string;
    label: string;
    width: number;
    height: number;
  };
};
