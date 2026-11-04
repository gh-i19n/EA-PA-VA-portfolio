import type { CaseStudy } from "../types/case-study";
export type { CaseStudy } from "../types/case-study";

export const caseStudies = [
  {
    slug: "the-executive-week",
    title: "The executive week.",
    category: "Executive organisation",
    sample: "brief",
    summary:
      "Bookable availability and a prepared meeting agenda, brought into a clearer working rhythm.",
    image: "/images/work/calendar-availability.png",
    alt: "AY’s Google Calendar appointment schedule with recurring training availability",
    challenge:
      "The scheduling sample sets out bookable windows for training sessions. A separate team-meeting agenda shows how opening remarks, progress updates and role-based reports are prepared before a conversation.",
    constraints: [
      "A defined appointment duration",
      "Availability varies across weekdays",
      "Separate scheduling and meeting-agenda samples"
    ],
    approach: [
      {
        title: "Define the available windows",
        text:
          "The calendar sample sets a session duration and recurring availability across the working week, giving booking requests a clear set of options."
      },
      {
        title: "Prepare the conversation",
        text:
          "The supplied agenda sets out the meeting time, platform, opening remarks and progress-update section, with the reporting roles identified."
      },
      {
        title: "Make the next step visible",
        text:
          "Availability and preparation sit in documents people can consult before the meeting, so timing and purpose are easier to understand."
      }
    ],
    deliverables: [
      "Google Calendar appointment-schedule sample",
      "Recurring availability and session duration",
      "Team-meeting agenda prepared by AY",
      "Progress-update and reporting sections"
    ],
    judgment:
      "A useful calendar shows when a conversation can happen. A useful agenda explains what needs attention when people arrive.",
    intendedResult:
      "The schedule makes available meeting windows visible; the agenda gives participants a clear order for updates and discussion.",
    artifact: {
      href: "/images/work/meeting-agenda.png",
      preview: "/images/work/meeting-agenda.png",
      alt: "AY’s supplied weekly team-alignment meeting agenda",
      label: "Open the meeting-agenda sample",
      width: 807,
      height: 815
    }
  },
  {
    slug: "every-journey-considered",
    title: "Every journey, considered.",
    category: "Travel & personal logistics",
    sample: "travel",
    summary:
      "A Lagos–Abuja planning sample connecting the schedule, estimated budget and travel checklist.",
    image: "/images/work/travel-cover.png",
    alt: "Preview of AY’s Lagos–Abuja executive travel itinerary",
    challenge:
      "The supplied itinerary brings airport movements, accommodation, a board meeting, meals and return travel into one reference. It also includes an estimated budget and a checklist of documents, work items and personal essentials.",
    constraints: [
      "Lagos–Abuja route and meeting schedule",
      "Airport, hotel and local-transport arrangements",
      "Indicative costs and a traveller-preparation checklist"
    ],
    approach: [
      {
        title: "Connect the journey",
        text:
          "The itinerary sets out activities in time order, from airport arrival through the meeting programme and the return journey."
      },
      {
        title: "Make the costs visible",
        text:
          "Separate budget lines cover flights, accommodation, local transport, meals and contingency. They are planning estimates in the supplied sample, not current quotations."
      },
      {
        title: "Prepare the traveller",
        text:
          "The checklist groups identification, reservations, meeting materials, electronics and personal essentials so preparation can happen before departure."
      }
    ],
    deliverables: [
      "A Lagos–Abuja executive travel itinerary",
      "Meeting, hotel and airport schedule",
      "Estimated travel-budget breakdown",
      "Documents and essentials checklist"
    ],
    judgment:
      "The document is a planning work sample. Its schedule, availability and estimated costs would need reconfirming for a live trip.",
    intendedResult:
      "The sample shows how travel arrangements, preparation and indicative costs can be gathered into one usable document. The original planning document is available to read in full.",
    artifact: {
      href: "/documents/lagos-abuja-itinerary.pdf",
      preview: "/images/work/travel-itinerary.png",
      alt: "First-page preview of the supplied Lagos–Abuja itinerary",
      label: "Read the travel itinerary (PDF)",
      width: 1132,
      height: 1600
    }
  },
  {
    slug: "closing-the-loop",
    title: "Closing the loop.",
    category: "Operations & follow-through",
    sample: "handoff",
    summary:
      "A Trello walkthrough showing task stages, due dates and checklist-based follow-through.",
    image: "/images/work/trello-workflow.jpg",
    alt: "AY’s supplied Trello board showing To-do, In Progress and Done lists",
    recording: "/videos/trello-workflow.mp4",
    challenge:
      "The supplied recording shows a team board organised into To-do, In Progress and Done. Opening individual cards reveals task descriptions, checklists, due dates and completion indicators.",
    constraints: [
      "Several team members and task stages",
      "Due dates attached to individual cards",
      "Checklist detail behind the board overview"
    ],
    approach: [
      {
        title: "Separate the work stages",
        text:
          "The board keeps queued, active and completed work in distinct lists, making the current stage of a task visible from the overview."
      },
      {
        title: "Keep the detail with the task",
        text:
          "Individual cards contain descriptions and checklists, so the next action can be understood without relying only on the card title."
      },
      {
        title: "Follow through on dates and completion",
        text:
          "Due dates and checklist completion give the team a shared reference for progress. The recording moves between the overview and card detail so both can be inspected."
      }
    ],
    deliverables: [
      "Trello board with distinct workflow stages",
      "Task descriptions and checklists",
      "Visible due dates and completion indicators",
      "A silent walkthrough of the supplied board"
    ],
    judgment:
      "A board is most useful when its overview and card detail agree. Clear stages, dates and checklists make it easier to see what needs attention.",
    intendedResult:
      "The board brings the current stage, next action and supporting checklist into one place, giving people a shared reference for follow-through.",
    artifact: {
      href: "/videos/trello-workflow.mp4",
      preview: "/images/work/trello-workflow.jpg",
      alt: "Preview of the Trello workflow recording",
      label: "Watch the Trello workflow (silent)",
      width: 1280,
      height: 724
    }
  }
] as const satisfies readonly CaseStudy[];

export function findCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
