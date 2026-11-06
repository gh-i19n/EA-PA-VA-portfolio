export const contactTopics = [
  "Administrative support",
  "Email & inbox management",
  "Calendar & appointment scheduling",
  "Project coordination",
  "Documentation & report writing",
  "Meeting agendas & presentations",
  "Data entry & PDF formatting",
  "Proofreading & editing",
  "Travel planning & itineraries",
  "Research & article writing",
  "AI automation",
  "General administrative tasks",
  "A combination of services",
] as const;

export type ContactTopic = (typeof contactTopics)[number];
