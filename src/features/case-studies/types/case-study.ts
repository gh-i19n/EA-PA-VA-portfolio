import type { WorkSampleId } from "./work-sample";
import type { ServiceCategoryId } from "~/config/service-categories";

export type CaseStudy = {
  slug: string;
  title: string;
  serviceCategory: ServiceCategoryId;
  summary: string;
  image: string;
  alt: string;
  sample?: WorkSampleId;
  challenge: string;
  constraints: readonly string[];
  approach: readonly { title: string; text: string }[];
  deliverables: readonly string[];
  judgment: string;
  intendedResult: string;
  artifact?: {
    href: string;
    preview: string;
    alt: string;
    label: string;
    width: number;
    height: number;
  };
};
