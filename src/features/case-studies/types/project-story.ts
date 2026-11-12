export type ProjectStorySection = {
  heading: string;
  description: string;
};

export type ProjectStory = {
  problem: ProjectStorySection;
  solution: ProjectStorySection;
  approach: ProjectStorySection & { steps: readonly string[] };
  imageAlt: string;
  imageCaption: string;
};
