import type { ServiceCapability, ServiceCategoryId } from "~/config/service-categories";
import type { ProjectStory } from "./project-story";

export type ProjectRecording<Category extends ServiceCategoryId = ServiceCategoryId> = {
  id: string;
  title: string;
  description: string;
  src: string;
  poster: string;
  hasAudio?: boolean;
  serviceCategory: Category;
  capability: ServiceCapability<Category>;
  story: ProjectStory;
};
