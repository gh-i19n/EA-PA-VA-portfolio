/** Shared timing decisions; independent of the animation runtime. */
export const motion = {
  interaction: 0.22,
  document: 0.45,
  entrance: 0.9,
  ease: "power3.out",
  headlineEase: "power4.out",
  reducedMotion: "(prefers-reduced-motion: reduce)",
} as const;
