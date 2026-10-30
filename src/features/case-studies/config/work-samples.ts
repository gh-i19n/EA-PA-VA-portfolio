import type { WorkSample } from "../types/work-sample";

export const workSamples = [
  {
    id: "brief",
    label: "Executive brief",
    title: "Your morning, prepared.",
    subtitle: "Monday / Priority briefing",
    description:
      "The context you need before the first meeting. Decisions, preparation and protected time in one concise view.",
    judgment:
      "A calendar invitation is a claim on your attention. I check its purpose, urgency and preparation before it takes a place in your day.",
    annotation:
      "Decision needed: approve the revised scope before the 14:00 partner call.",
    slug: "the-executive-week",
    rows: [
      {
        reference: "09:00",
        title: "Leadership alignment",
        note: "Agenda, last decisions and open questions attached.",
        status: "Brief ready",
      },
      {
        reference: "11:00",
        title: "Protected focus time",
        note: "Non-urgent requests held for the afternoon review.",
        status: "Protected",
      },
      {
        reference: "14:00",
        title: "Partner conversation",
        note: "Revised scope flagged for your approval.",
        status: "For decision",
      },
    ],
  },
  {
    id: "travel",
    label: "Travel plan",
    title: "One trip. Every connection.",
    subtitle: "Lagos to London / Sample itinerary",
    description:
      "One point of reference for the whole journey: arrangements, local times, meeting context and the next person to contact.",
    judgment:
      "I plan backwards from the commitment that matters. Arrival buffers, rest and alternatives are part of the itinerary from the beginning.",
    annotation:
      "If arrival changes: update the driver first, then confirm the revised meeting window.",
    slug: "every-journey-considered",
    rows: [
      {
        reference: "Arrival",
        title: "Airport to hotel",
        note: "Driver contact and pickup point kept with the booking.",
        status: "Coordinated",
      },
      {
        reference: "Day 1",
        title: "Settle in & prepare",
        note: "Rest window and meeting brief before the next day.",
        status: "Built in",
      },
      {
        reference: "Day 2",
        title: "Partner meeting",
        note: "Local time, venue access and transfer buffer in one view.",
        status: "Prepared",
      },
    ],
  },
  {
    id: "handoff",
    label: "Action handoff",
    title: "The meeting is only the start.",
    subtitle: "Weekly review / Decisions & next steps",
    description:
      "A decision becomes useful when someone owns the next step. Clear owners, dependencies and escalation keep the work moving.",
    judgment:
      "I distinguish a task I can progress from a decision only you can make, then bring back the relevant context and a clear recommendation.",
    annotation:
      "Escalation: the launch date depends on budget approval. Bring options to the next check-in.",
    slug: "closing-the-loop",
    rows: [
      {
        reference: "Today",
        title: "Share the decision record",
        note: "AY / Confirm actions with each owner.",
        status: "Ready",
      },
      {
        reference: "Wed",
        title: "Confirm supplier scope",
        note: "Operations / Waiting on the revised estimate.",
        status: "Following up",
      },
      {
        reference: "Fri",
        title: "Resolve the budget decision",
        note: "Executive / Options prepared for review.",
        status: "For approval",
      },
    ],
  },
] as const satisfies readonly WorkSample[];
