export const caseStudies = [
  {
    slug: "the-executive-week",
    title: "The executive week.",
    category: "Executive assistance",
    summary: "Making space for priorities in a calendar full of competing demands.",
    image: "/images/folio/meeting-room.jpg",
    alt: "A carefully arranged meeting room",
    challenge: "A leader's week can become a collection of meetings with little room to prepare, think or follow through. This illustrative scenario explores a more intentional rhythm.",
    approach: [
      { title: "Start with priorities.", text: "Identify the decisions, deadlines and relationships that deserve time. Build the week around them, including preparation and uninterrupted focus." },
      { title: "Prepare the room.", text: "Bring the agenda, background reading and outstanding questions into a concise briefing. Confirm who needs to be there and what a useful meeting should achieve." },
      { title: "Close the loop.", text: "Capture decisions, assign clear next steps and track the follow-up. Keep the leader informed through a short, consistent update." },
    ],
    deliverables: ["Weekly priority map", "Meeting briefing pack", "Decisions & follow-up log"],
    intendedResult: "A week with clearer priorities, useful preparation and visible next steps.",
  },
  {
    slug: "every-journey-considered",
    title: "Every journey, considered.",
    category: "Travel & personal logistics",
    summary: "Joining the moving parts of a business trip into one considered itinerary.",
    image: "/images/folio/in-transit.jpg",
    alt: "An aircraft wing viewed through an airplane window",
    challenge: "Flights, appointments and ground transport each have their own timings. This illustrative scenario looks at how a single itinerary can make the whole journey easier to navigate.",
    approach: [
      { title: "See the whole journey.", text: "Start with the purpose of the trip and fixed commitments. Allow for travel time, transfers, rest and the practical details around each appointment." },
      { title: "Connect the arrangements.", text: "Coordinate bookings, confirmations and contacts. Put the essential information into a clear itinerary that is useful on the move." },
      { title: "Prepare for change.", text: "Keep alternatives, contact details and dependencies close at hand. Communicate changes clearly so each person knows what happens next." },
    ],
    deliverables: ["Consolidated travel itinerary", "Booking & contact reference", "Contingency notes"],
    intendedResult: "A connected plan that makes the next step clear, wherever the day leads.",
  },
] as const;

export type CaseStudy = (typeof caseStudies)[number];
export function findCaseStudy(slug: string) { return caseStudies.find((study) => study.slug === slug); }
