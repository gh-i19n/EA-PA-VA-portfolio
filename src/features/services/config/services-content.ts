import { serviceCategories } from "~/config/service-categories";

export const serviceAreas = [
  {
    ...serviceCategories.executive,
    introduction: "A working day shaped around your priorities.",
    description:
      "I organise your calendar, manage incoming email and handle everyday administration. Appointments, requests and follow-ups stay connected, so you can focus on the work that needs you.",
    sample: {
      image: "/images/services/ay-executive-support.png",
      alt: "Ayomide Ajibola's Executive Support services: calendars and appointments, inbox management, meeting preparation, project coordination, records management and administrative follow-ups",
      label: "Executive support",
      href: "/case-studies/the-executive-week",
    },
  },
  {
    ...serviceCategories.operations,
    introduction: "A dependable point of coordination.",
    description:
      "I connect people, information and deadlines across the work you delegate. Dependencies are tracked, owners stay informed and issues reach you with context and options.",
    sample: {
      image: "/images/services/ay-project-operations.png",
      alt: "Ayomide Ajibola's Project and Operations Management flyer: project coordination, task and deadline tracking, workflow coordination and AI-powered workflow automation",
      label: "Project and operations management",
      href: "/case-studies/closing-the-loop",
    },
  },
  {
    ...serviceCategories.documentation,
    introduction: "Clear documents. Considered communication.",
    description:
      "I prepare reports, meeting agendas and presentations, research and write articles, and proofread, edit and format documents so information is clear and ready to use.",
    sample: {
      image: "/images/services/ay-documentation-communication.png",
      alt: "Ayomide Ajibola's Documentation and Communication flyer: report writing, meeting preparation, presentations, proofreading, research, article writing and PDF formatting",
      label: "Documentation and communication",
      href: "/case-studies/documents-and-communication",
    },
  },
  {
    ...serviceCategories.travel,
    introduction: "Clear arrangements, from planning to departure.",
    description:
      "I coordinate travel plans, prepare itineraries and organise flight, accommodation and appointment bookings. I keep the details connected so you have a clear plan before you travel.",
    sample: {
      image: "/images/services/ay-travel-logistics.png",
      alt: "Ayomide Ajibola's Travel and Logistics Management flyer: travel planning, itinerary preparation, flight and accommodation arrangements, appointments and bookings",
      label: "Travel and logistics management",
      href: "/case-studies/every-journey-considered",
    },
  },
] as const;
