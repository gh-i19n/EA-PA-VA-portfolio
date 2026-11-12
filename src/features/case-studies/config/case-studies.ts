import type { CaseStudy } from "../types/case-study";
export type { CaseStudy } from "../types/case-study";

export const caseStudies = [
  {
    slug: "the-executive-week",
    title: "The executive week.",
    serviceCategory: "executive",
    sample: "brief",
    summary:
      "Calendar planning, appointment bookings, inbox workflows, digital filing and spreadsheet summaries, shown through the supplied recordings.",
    image: "/images/work/calendar-availability.png",
    alt: "AY’s Google Calendar appointment schedule with recurring training availability",
    challenge:
      "These samples show the administrative work around a busy schedule: coordinating calendar windows, making appointments bookable, organising shared files and setting up repeatable inbox actions. The speaker-email template and aggregate enrolment summary show supporting communication and spreadsheet work.",
    constraints: [
      "Availability varies across weekdays and booking tools",
      "Reusable email actions and shared filing structures",
      "Aggregate spreadsheet views with individual student records excluded"
    ],
    approach: [
      {
        title: "Define the available windows",
        text:
          "Google Calendar, Calendly and Selar show scheduled sessions and bookable appointment windows, giving requests a clear set of timing options."
      },
      {
        title: "Organise the inbox and shared files",
        text:
          "The Gmail filter, Outlook scheduling and Google Drive samples show how repeatable actions and a clear folder structure support everyday administration."
      },
      {
        title: "Prepare reusable messages and data views",
        text:
          "The speaker-outreach template provides a reusable starting point for email. The Excel sample summarises enrolment in a pivot table and chart."
      }
    ],
    deliverables: [
      "Google Calendar planning and weekly schedules",
      "Calendly and Selar booking walkthroughs",
      "Digital filing, inbox filters and scheduled email",
      "Reusable speaker-email template",
      "Aggregate enrolment spreadsheet summary"
    ],
    judgment:
      "Clear availability, organised records and repeatable email actions help keep everyday administrative work connected.",
    intendedResult:
      "The samples bring appointments, inbox organisation, shared records and spreadsheet summaries into a clearer working rhythm.",
    artifact: {
      href: "/videos/excel-reporting.mp4",
      preview: "/images/work/excel-reporting.jpg",
      alt: "An aggregate student-enrolment summary with a pivot table and chart",
      label: "Open the Excel reporting sample (silent)",
      width: 1440,
      height: 762
    }
  },
  {
    slug: "every-journey-considered",
    title: "Every journey, considered.",
    serviceCategory: "travel",
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
    serviceCategory: "operations",
    sample: "handoff",
    summary:
      "Task boards, written handoffs and a live-production excerpt, grouped as project and operations work samples.",
    image: "/images/work/trello-workflow.jpg",
    alt: "AY’s supplied Trello board showing To-do, In Progress and Done lists",
    challenge:
      "The supplied Trello recording shows a team board organised into To-do, In Progress and Done. Airtable shows project stages, dates and descriptions, while a written handoff groups tasks for follow-through. The collection also includes an excerpt from a live theatre production.",
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
      "An Airtable project-tracking walkthrough",
      "A written action-handoff sample",
      "A live-production project-management sample"
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
  },
  {
    slug: "documents-and-communication",
    title: "Documents that do the work.",
    serviceCategory: "documentation",
    summary:
      "Presentations, meeting documents, communication templates, research and survey summaries, shown in the supplied work samples.",
    image: "/images/projects/presentation-design.jpg",
    alt: "A slide from the supplied Bridge500 presentation",
    challenge:
      "Different pieces of work need different formats. These recordings show presentation slides, communication templates, meeting documents, research questionnaires and survey summaries, each arranged so its information can be read and used.",
    constraints: [
      "Several document formats and audiences",
      "Reusable templates alongside completed work samples",
      "Separate research documents and aggregate survey summaries"
    ],
    approach: [
      {
        title: "Give information a clear structure",
        text: "Agendas, meeting reports and presentations group the main points into sections, making the purpose and order of the document visible."
      },
      {
        title: "Prepare repeatable communication",
        text: "The communication templates set out message content, channel choices, approval steps and timing for recurring coordination."
      },
      {
        title: "Summarise the supporting detail",
        text: "Meeting reports group discussion points and follow-up actions. The questionnaire and survey samples show research questions and aggregate response charts."
      }
    ],
    deliverables: [
      "Presentation slides and Figma speaker-profile layouts",
      "Communication templates and channel guidance",
      "Meeting agenda and report excerpts",
      "Research documents, questionnaire and survey summaries"
    ],
    judgment:
      "The format should suit the reader: a clear agenda before a meeting, a concise message for coordination and a useful summary when the underlying data is detailed.",
    intendedResult:
      "The collection brings reusable communication, meeting preparation, research and reporting into formats that readers can follow and revisit.",
    artifact: {
      href: "/images/work/meeting-agenda.png",
      preview: "/images/work/meeting-agenda.png",
      alt: "AY’s supplied weekly team-alignment meeting agenda",
      label: "Open the meeting-agenda sample",
      width: 807,
      height: 815
    }
  }
] as const satisfies readonly CaseStudy[];

export function findCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
