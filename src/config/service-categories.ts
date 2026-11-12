/** Shared category names and capabilities for Services and project libraries. */
export const serviceCategories = {
  executive: {
    id: "executive-time",
    order: 0,
    title: "Executive & Administrative Support",
    capabilities: [
      "Email and inbox management",
      "Calendar and appointment scheduling",
      "General administrative support",
      "File and records management",
      "Data entry",
    ],
  },
  operations: {
    id: "operations",
    order: 1,
    title: "Project & Operations Management",
    capabilities: [
      "Project coordination and management",
      "Task and deadline tracking",
      "Workflow coordination",
      "AI-powered workflow automation",
    ],
  },
  documentation: {
    id: "decision-support",
    order: 2,
    title: "Documentation & Communication",
    capabilities: [
      "Documentation and report writing",
      "Meeting agendas and preparation",
      "Presentation design and preparation",
      "Proofreading and editing",
      "Research and article writing",
      "PDF formatting",
    ],
  },
  travel: {
    id: "personal-logistics",
    order: 3,
    title: "Travel & Logistics Management",
    capabilities: [
      "Travel planning and coordination",
      "Itinerary preparation",
      "Flight and accommodation arrangements",
      "Appointment and booking coordination",
    ],
  },
} as const;

export type ServiceCategoryId = keyof typeof serviceCategories;
export type ServiceCapability<Category extends ServiceCategoryId = ServiceCategoryId> =
  (typeof serviceCategories)[Category]["capabilities"][number];
