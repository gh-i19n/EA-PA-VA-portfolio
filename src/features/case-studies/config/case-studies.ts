import type { CaseStudy } from "../types/case-study";
export type { CaseStudy } from "../types/case-study";

export const caseStudies = [
  {
    slug: "the-executive-week",
    title: "The executive week.",
    category: "Executive organisation",
    sample: "brief",
    summary:
      "Turning a crowded calendar into a week with room for the decisions that matter.",
    image: "/images/folio/meeting-room.jpg",
    alt: "A prepared meeting room with a long conference table",
    challenge:
      "A founder has leadership reviews, partner conversations and an approaching project decision competing for the same week. Meeting invitations are arriving faster than the context behind them. The brief is to make the week workable and keep preparation from becoming an afterthought.",
    constraints: [
      "Fixed partner commitments",
      "A decision deadline with incomplete information",
      "Focus time that needs protecting",
    ],
    approach: [
      {
        title: "Establish the priorities",
        text: "Confirm the decisions, relationships and deadlines that deserve the founder's time. Review each calendar commitment against that purpose, including who needs to attend and what preparation it requires.",
      },
      {
        title: "Prepare the conversation",
        text: "Bring the agenda, previous decisions and unanswered questions into a short briefing. Request missing inputs early, resolve logistics and flag the decision the executive will need to make.",
      },
      {
        title: "Keep the week connected",
        text: "Protect preparation and focus windows, communicate changes to the people affected and maintain a short action record. End the week with a concise view of what moved, what remains open and what comes next.",
      },
    ],
    deliverables: [
      "A priority-led weekly calendar",
      "A concise executive morning brief",
      "Meeting agendas and preparation notes",
      "A decisions and follow-up record",
    ],
    judgment:
      "An invitation does not automatically become a priority. I would establish the purpose, assess the cost to the rest of the week and bring a clear recommendation when a trade-off needs the executive's decision.",
    intendedResult:
      "The intended outcome is a calendar that reflects priorities, meetings that begin with context and actions that remain visible after the room clears. This is an illustrative scenario, not a measured client result.",
  },
  {
    slug: "every-journey-considered",
    title: "Every journey, considered.",
    category: "Travel & personal logistics",
    sample: "travel",
    summary:
      "Connecting the arrangements around a business trip into one usable plan.",
    image: "/images/folio/in-transit.jpg",
    alt: "An aircraft wing seen above the clouds",
    challenge:
      "A leader is travelling from Lagos to London for a partner meeting. Flights, transfers, accommodation and preparation have separate dependencies. The brief is to coordinate the whole journey, give the traveller one reliable reference and plan for a change in arrival time.",
    constraints: [
      "A fixed meeting window",
      "Local times and transfer dependencies",
      "Preferences, rest and preparation",
    ],
    approach: [
      {
        title: "Work back from the commitment",
        text: "Start with the purpose and timing of the meeting. Build the journey around an appropriate arrival buffer, rest, preparation and the practical time required between each location.",
      },
      {
        title: "Consolidate the details",
        text: "Keep confirmations, local times, locations and contacts in a single itinerary. Check each arrangement against the next dependency so the traveller knows what happens on arrival and whom to contact.",
      },
      {
        title: "Prepare the alternative",
        text: "Identify which people need an update if timings change. Keep options and contact details close, confirm changes within agreed authority and bring cost or schedule decisions back with useful context.",
      },
    ],
    deliverables: [
      "A consolidated, local-time itinerary",
      "Booking and contact reference",
      "Meeting preparation and access notes",
      "A change and communication plan",
    ],
    judgment:
      "The cheapest or earliest booking may create the least workable day. I would weigh the full journey against the purpose of the trip, the executive's preferences and the approved budget before presenting options.",
    intendedResult:
      "The intended outcome is a connected journey with clear next steps and a practical response to change. The itinerary shown is a sample of the approach; it contains no real booking or client details.",
  },
  {
    slug: "closing-the-loop",
    title: "Closing the loop.",
    category: "Operations & follow-through",
    sample: "handoff",
    summary:
      "Giving decisions an owner, a next action and a dependable path forward.",
    image: "/images/ay-editorial-desk.png",
    alt: "An open notebook and pen on a desk",
    challenge:
      "A weekly leadership review has produced several commitments across operations and external suppliers. One unresolved budget decision affects a proposed launch date. The brief is to turn the discussion into an actionable handoff and bring the dependency back before it becomes a surprise.",
    constraints: [
      "Several people own different actions",
      "A supplier estimate is still outstanding",
      "The budget requires executive approval",
    ],
    approach: [
      {
        title: "Record the decision accurately",
        text: "Separate decisions from discussion. Confirm the next action, responsible person and expected timing, then share a concise record with the people who need it.",
      },
      {
        title: "Follow the dependencies",
        text: "Track the supplier response and its effect on the schedule. Follow up with context, keep owners informed and distinguish a blocked action from work that can continue.",
      },
      {
        title: "Escalate with options",
        text: "Bring the outstanding approval to the executive with the relevant estimate, schedule implications and a clear set of options. Update the action record once a decision is confirmed.",
      },
    ],
    deliverables: [
      "A concise decision record",
      "An owner and deadline for each action",
      "A dependency and escalation note",
      "A weekly progress summary",
    ],
    judgment:
      "Ownership includes recognising the limits of delegated authority. I would progress coordination independently, while bringing the budget decision and its consequences to the person authorised to approve it.",
    intendedResult:
      "The intended outcome is visible ownership and earlier attention to blocked work. This scenario illustrates the coordination process and makes no claim about actual client delivery.",
  },
] as const satisfies readonly CaseStudy[];

export function findCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
