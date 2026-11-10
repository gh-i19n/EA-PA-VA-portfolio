export const serviceAreas = [
  {
    id: "executive-time",
    title: "Executive & Administrative Support",
    introduction: "A working day shaped around your priorities.",
    description:
      "I organise your calendar, manage incoming email and handle everyday administration. Appointments, requests and follow-ups stay connected, so you can focus on the work that needs you.",
    capabilities: [
      "Email and inbox management",
      "Calendar and appointment scheduling",
      "General administrative support",
      "File and records management",
      "Data entry",
    ],
    sample: {
      image: "/images/services/ay-executive-support.png",
      alt: "Ayomide Ajibola's Executive Support services: calendars and appointments, inbox management, meeting preparation, project coordination, records management and administrative follow-ups",
      label: "Executive support",
      href: "/case-studies/the-executive-week",
    },
    detailHref: "/services/executive-administrative-support",
  },
  {
    id: "operations",
    title: "Project & Operations Management",
    introduction: "A dependable point of coordination.",
    description:
      "I connect people, information and deadlines across the work you delegate. Dependencies are tracked, owners stay informed and issues reach you with context and options.",
    capabilities: [
      "Project coordination and management",
      "Task and deadline tracking",
      "Workflow coordination",
      "AI-powered workflow automation",
    ],
    sample: {
      image: "/images/services/ay-project-operations.png",
      alt: "Ayomide Ajibola's Project and Operations Management flyer: project coordination, task and deadline tracking, workflow coordination and AI-powered workflow automation",
      label: "Project and operations management",
      href: "/case-studies/closing-the-loop",
    },
  },
  {
    id: "decision-support",
    title: "Documentation & Communication",
    introduction: "Clear documents. Considered communication.",
    description:
      "I prepare reports, meeting agendas and presentations, research and write articles, and proofread, edit and format documents so information is clear and ready to use.",
    capabilities: [
      "Documentation and report writing",
      "Meeting agendas and preparation",
      "Presentation design and preparation",
      "Proofreading and editing",
      "Research and article writing",
      "PDF formatting",
    ],
    sample: {
      image: "/images/services/ay-documentation-communication.png",
      alt: "Ayomide Ajibola's Documentation and Communication flyer: report writing, meeting preparation, presentations, proofreading, research, article writing and PDF formatting",
      label: "Documentation and communication",
      href: "/case-studies/the-executive-week",
    },
  },
  {
    id: "personal-logistics",
    title: "Travel & Logistics Management",
    introduction: "Clear arrangements, from planning to departure.",
    description:
      "I coordinate travel plans, prepare itineraries and organise flight, accommodation and appointment bookings. I keep the details connected so you have a clear plan before you travel.",
    capabilities: [
      "Travel planning and coordination",
      "Itinerary preparation",
      "Flight and accommodation arrangements",
      "Appointment and booking coordination",
    ],
    sample: {
      image: "/images/services/ay-travel-logistics.png",
      alt: "Ayomide Ajibola's Travel and Logistics Management flyer: travel planning, itinerary preparation, flight and accommodation arrangements, appointments and bookings",
      label: "Travel and logistics management",
      href: "/case-studies/every-journey-considered",
    },
  },
] as const;

export const onboardingSteps = [
  {
    title: "Understand the pressure points",
    text: "We identify what is taking your attention, how you make decisions and what you would like to delegate.",
  },
  {
    title: "Agree the working relationship",
    text: "We define responsibilities, access, approval limits, communication and the decisions that stay with you.",
  },
  {
    title: "Build a dependable rhythm",
    text: "A practical handover, a clear priority list and regular check-ins give the partnership a considered start.",
  },
] as const;
