export const serviceAreas = [
  {
    id: "executive-time",
    title: "Time & communication",
    introduction: "A working day shaped around your priorities.",
    description:
      "I manage the flow of requests around you: assessing urgency, resolving calendar conflicts and making sure the right conversations receive your attention.",
    capabilities: [
      "Complex calendars & time zones",
      "Inbox triage & correspondence",
      "Focus time & preparation buffers",
      "Stakeholder coordination",
    ],
  },
  {
    id: "decision-support",
    title: "Meeting & decision support",
    introduction: "Arrive with the context. Leave with a next step.",
    description:
      "From leadership reviews to important partner conversations, I bring the agenda, background and outstanding decisions together, then keep the follow-up visible.",
    capabilities: [
      "Agendas & executive briefs",
      "Research & background notes",
      "Meeting logistics & materials",
      "Decisions, actions & follow-up",
    ],
  },
  {
    id: "operations",
    title: "Operations & follow-through",
    introduction: "A dependable point of coordination.",
    description:
      "I connect people, information and deadlines across the work you delegate. Dependencies are tracked, owners stay informed and issues reach you with context and options.",
    capabilities: [
      "Project & deadline coordination",
      "Processes & documentation",
      "Supplier & team liaison",
      "Progress reporting & escalation",
    ],
  },
  {
    id: "personal-logistics",
    title: "Travel & personal logistics",
    introduction: "Considered arrangements for the whole person.",
    description:
      "Business commitments and personal arrangements often share a calendar. I coordinate the details around both, with clear preferences, agreed authority and discretion.",
    capabilities: [
      "Business travel & itineraries",
      "Reservations & appointments",
      "Event & offsite logistics",
      "Personal administration",
    ],
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
