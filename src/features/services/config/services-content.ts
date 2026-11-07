export const serviceAreas = [
  {
    id: "executive-time",
    title: "Executive Support",
    introduction: "A working day shaped around your priorities.",
    description:
      "I organise your calendar, manage incoming email and handle everyday administration. Appointments, requests and follow-ups stay connected, so you can focus on the work that needs you.",
    capabilities: [
      "Calendar Management",
      "Scheduling",
      "Email Management",
      "Email Communication",
      "Administrative Support",
    ],
    sample: {
      image: "/images/work/calendar-availability.png",
      alt: "AY’s calendar scheduling sample showing recurring appointment availability",
      label: "Calendar scheduling",
      href: "/case-studies/the-executive-week",
    },
  },
  {
    id: "decision-support",
    title: "Meetings & research",
    introduction: "Arrive with the context. Leave with a next step.",
    description:
      "From leadership reviews to important partner conversations, I bring the agenda, background and outstanding decisions together, then keep the follow-up visible.",
    capabilities: [
      "Meeting Agendas",
      "Research",
      "Documentation & Report Writing",
      "Presentations",
    ],
    sample: {
      image: "/images/work/meeting-agenda.png",
      alt: "AY’s team-alignment meeting agenda with opening remarks, updates and reporting roles",
      label: "Meeting preparation",
      href: "/case-studies/the-executive-week",
    },
  },
  {
    id: "operations",
    title: "Projects & coordination",
    introduction: "A dependable point of coordination.",
    description:
      "I connect people, information and deadlines across the work you delegate. Dependencies are tracked, owners stay informed and issues reach you with context and options.",
    capabilities: [
      "Project Management",
      "Task Coordination",
      "File Management",
      "Communications",
      "Progress Reporting",
    ],
    sample: {
      image: "/images/work/trello-workflow.jpg",
      alt: "AY’s Trello workflow with task stages, owners, due dates and checklists",
      label: "Task coordination",
      href: "/case-studies/closing-the-loop",
    },
  },
  {
    id: "personal-logistics",
    title: "Travel & personal logistics",
    introduction: "Considered arrangements for the whole person.",
    description:
      "Business commitments and personal arrangements often share a calendar. I coordinate the details around both, with clear preferences, agreed authority and discretion.",
    capabilities: [
      "Travel Planning",
      "Itineraries & Reservations",
      "Appointments & Personal Administration",
      "Event & Offsite Logistics",
    ],
    sample: {
      image: "/images/work/travel-itinerary.png",
      alt: "AY’s Lagos–Abuja itinerary with travel times, accommodation and meeting arrangements",
      label: "Travel planning",
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
