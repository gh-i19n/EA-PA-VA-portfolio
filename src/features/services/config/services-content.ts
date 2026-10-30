export const serviceAreas = [
  {
    id: "executive",
    title: "Executive assistance",
    introduction: "A clear head. A well-run day.",
    description: "Thoughtful support around your priorities, with the preparation and follow-through that let you stay present in the room.",
    capabilities: ["Calendar & inbox management", "Meeting preparation", "Stakeholder coordination", "Travel & itineraries"],
  },
  {
    id: "virtual",
    title: "Virtual assistance",
    introduction: "Close attention, wherever you work.",
    description: "A dependable point of coordination for a distributed working day. Clear information, organised systems and nothing left hanging.",
    capabilities: ["Project coordination", "Research & reporting", "Documents & workflows", "Remote team support"],
  },
  {
    id: "personal",
    title: "Personal assistance",
    introduction: "Life, with a little more room.",
    description: "Considered help with the arrangements around a demanding life. Personal details handled with care and discretion.",
    capabilities: ["Personal scheduling", "Appointments & reservations", "Lifestyle administration", "Events & special occasions"],
  },
] as const;
