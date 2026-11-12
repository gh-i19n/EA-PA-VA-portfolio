import type { ServiceCapability, ServiceCategoryId } from "~/config/service-categories";

export type ProjectRecording<Category extends ServiceCategoryId = ServiceCategoryId> = {
  id: string;
  title: string;
  description: string;
  src: string;
  poster: string;
  hasAudio?: boolean;
  serviceCategory: Category;
  capability: ServiceCapability<Category>;
};
