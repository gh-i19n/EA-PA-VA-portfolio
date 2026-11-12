export const projectPresentations = {
  "the-executive-week": {
    title: "Scheduling & everyday administration",
    contents: ["Calendar planning", "Inbox & email", "Records & data"],
    format: "landscape",
  },
  "every-journey-considered": {
    title: "Executive travel planning",
    contents: ["Itinerary", "Budget", "Travel checklist"],
    format: "document",
  },
  "closing-the-loop": {
    title: "Task & project coordination",
    contents: ["Task boards", "Handoffs", "Live production"],
    format: "landscape",
  },
  "documents-and-communication": {
    title: "Documents, reporting & communication",
    contents: ["Reports", "Agendas", "Presentations", "Research"],
    format: "landscape",
  },
} as const satisfies Record<string, {
  title: string;
  contents: readonly string[];
  format: "landscape" | "document";
}>;
