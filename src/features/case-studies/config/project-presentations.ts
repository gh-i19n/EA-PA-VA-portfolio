import type { WorkSampleId } from "../types/work-sample";

export const projectPresentations = {
  brief: {
    category: "Executive Support",
    title: "Calendar & meeting preparation",
    contents: ["Appointment schedule", "Meeting agenda"],
    format: "landscape",
  },
  travel: {
    category: "Travel planning",
    title: "Executive travel planning",
    contents: ["Itinerary", "Budget", "Travel checklist"],
    format: "document",
  },
  handoff: {
    category: "Project coordination",
    title: "Task & project coordination",
    contents: ["Trello board", "Video walkthrough"],
    format: "landscape",
  },
} as const satisfies Record<WorkSampleId, {
  category: string;
  title: string;
  contents: readonly string[];
  format: "landscape" | "document";
}>;
