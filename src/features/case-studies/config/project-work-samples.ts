import type { ServiceCapability, ServiceCategoryId } from "~/config/service-categories";
import type { ProjectWorkSample } from "../types/project-work-sample";
import { projectScreenshots as images } from "./project-screenshots";

type WorkSampleLibrary = {
  [Category in ServiceCategoryId]: Record<ServiceCapability<Category>, ProjectWorkSample>;
};

/** Capability names follow the shared service catalogue; descriptions stay within the supplied evidence. */
export const projectWorkSamples: WorkSampleLibrary = {
  executive: {
    "Email and inbox management": {
      images: [images["inbox-rules"], images["scheduled-email"], images["speaker-outreach"]],
      problem: "Routine sorting, repeated outreach and delivery timing can turn the inbox into a long list of manual tasks.",
      solution: "Use inbox filters, scheduled delivery and reusable speaker emails to give recurring communication a clear structure.",
      approach: "Define the sorting rules, prepare the message, personalise the details and review the delivery time before sending.",
    },
    "Calendar and appointment scheduling": {
      images: [images["calendar-week"], images["calendar-month"], images["weekly-schedule"], images["calendar-day"], images["calendar-session"], images["calendar-availability"], images["calendly-dates"], images["selar-consultation"], images["selar-time-slots"]],
      problem: "Meetings, training and consultations need to fit together without leaving people unsure about dates or availability.",
      solution: "Bring commitments into shared calendar views and give visitors a clear way to choose an appointment slot.",
      approach: "Name each event, set its time, review the month and week, then make suitable slots available through the booking tools.",
    },
    "General administrative support": {
      images: [images["administrative-sop"], images["meeting-agenda"], images["speaker-outreach"]],
      problem: "Day-to-day responsibilities still need clear instructions and follow-through when an executive is busy or away.",
      solution: "Prepare a practical handover, meeting materials and communication templates that keep the next steps visible.",
      approach: "Confirm ongoing tasks and access, agree escalation arrangements and prepare the information people need to continue the work.",
    },
    "File and records management": {
      images: [images["drive-programme-folders"], images["drive-library"], images["drive-recordings"]],
      problem: "Shared documents and recordings are difficult to find when they do not have a consistent home.",
      solution: "Organise programme documents, meeting materials and recordings in clearly named Google Drive folders.",
      approach: "Group related files, use recognisable names and keep recurring resources in the same location.",
    },
    "Data entry": {
      images: [images["enrolment-summary"], images["survey-summary"]],
      problem: "Individual records need to become a useful overview before a team can compare totals and response patterns.",
      solution: "Summarise the data with pivot tables and charts that show the overall picture.",
      approach: "Group the relevant fields, review the totals and present an aggregate view. Public samples exclude individual student records.",
    },
  },
  operations: {
    "Project coordination and management": {
      images: [images["airtable-projects"], images["directed-production"]],
      problem: "Several moving parts need a shared direction, clear dates and a way to see how the work is progressing.",
      solution: "Use structured project records to coordinate work. In the theatre production shown here, I brought the performance together as director.",
      approach: "Keep stages and dates visible in the tracker; guide the cast, movement and pacing toward a coherent performance.",
    },
    "Task and deadline tracking": {
      images: [images["trello-board"], images["airtable-projects"], images["action-handoff"]],
      problem: "When tasks move at different speeds, deadlines and the next action can become hard to follow.",
      solution: "Keep work stages, dates and delivery expectations together in task boards and written handoffs.",
      approach: "Separate work by stage, attach the relevant detail to each task and review what is waiting, in progress or complete.",
    },
    "Workflow coordination": {
      images: [images["action-handoff"], images["administrative-sop"], images["communication-channels"], images["communication-messages"]],
      problem: "A conversation or recurring process needs to become clear work that someone can pick up and carry forward.",
      solution: "Document the next actions, communication channels and handover arrangements in a reference the team can return to.",
      approach: "State the action and timing, agree the approval or escalation path and keep reusable messages beside the process.",
    },
    "AI-powered workflow automation": {
      images: [images["inbox-rules"], images["automated-replies-sop"]],
      problem: "Repeated inbox decisions and absence replies add routine steps to everyday communication.",
      solution: "The supplied examples show email filter rules and a documented plan for automated replies.",
      approach: "Identify the recurring action, define the rule or response and review the setup before it is used.",
      note: "These screenshots show rule-based email automation; they do not show an AI workflow.",
    },
  },
  documentation: {
    "Documentation and report writing": {
      images: [images["alignment-report"], images["communication-guide"], images["communication-channels"], images["communication-messages"], images["administrative-sop"], images["survey-summary"]],
      problem: "Discussion points, recurring messages and survey responses need a written structure people can use again.",
      solution: "Prepare reports, communication guides and response summaries with clear sections and visible follow-up information.",
      approach: "Group related information, distinguish discussion from action and review the document for a useful reading order.",
    },
    "Meeting agendas and preparation": {
      images: [images["meeting-agenda"], images["alignment-report"]],
      problem: "Participants need to know what the meeting will cover and what they should prepare before joining.",
      solution: "Set out the meeting details, progress updates, reporting roles and priorities in an agenda.",
      approach: "Arrange the discussion in a clear order, identify who is reporting and carry the follow-up into the meeting record.",
    },
    "Presentation design and preparation": {
      images: [images["programme-slides"], images["speaker-oyindamola"], images["speaker-ruby"]],
      problem: "Programme and speaker information needs to be readable without putting every detail in the same place.",
      solution: "Use a clear slide sequence and consistent speaker-profile layouts to give each topic room.",
      approach: "Group the content by topic, establish a text hierarchy and review the layouts together for consistency.",
    },
    "Proofreading and editing": {
      images: [images["research-review"], images["research-article"]],
      problem: "Research writing needs a close wording and consistency check before it is ready to share.",
      solution: "Review the text with attention to grammar, phrasing and readability. The introduction shown here includes visible review marks.",
      approach: "Read in context, inspect the flagged wording and review proposed changes against the meaning of the passage.",
    },
    "Research and article writing": {
      images: [images["research-article"], images["research-title-page"], images["research-review"], images["research-writing"], images["research-form"], images["interview-form"], images["client-questionnaire"]],
      problem: "A broad subject needs focused questions, a clear line of discussion and material that supports the writing.",
      solution: "Structure the research through questionnaires and referenced writing, from the research topic to the discussion.",
      approach: "Define the information needed, organise questions and sections, then connect the discussion to its sources.",
    },
    "PDF formatting": {
      images: [images["communication-channels"], images["communication-messages"], images["travel-page-1"], images["travel-page-2"], images["travel-page-3"]],
      problem: "A document needs to remain easy to follow when its information spans several pages.",
      solution: "Give headings, tables, message templates and checklists a clear hierarchy in the finished document.",
      approach: "Group related content, check the page sequence and inspect the exported pages for readable spacing and alignment.",
    },
  },
  travel: {
    "Travel planning and coordination": {
      images: [images["travel-page-1"], images["travel-page-2"], images["travel-page-3"]],
      problem: "Flights, transfers, accommodation and meetings need to work as one connected journey.",
      solution: "Bring the travel schedule, estimated budget and preparation checklist into one planning document.",
      approach: "Arrange the journey in time order, allow for the transfers and identify the documents and materials needed.",
      note: "This is a planning sample. Timings, availability and estimated costs need reconfirming for a live trip.",
    },
    "Itinerary preparation": {
      images: [images["travel-page-1"], images["travel-page-2"], images["travel-page-3"]],
      problem: "A traveller needs to see what happens next without searching across several messages or documents.",
      solution: "Set out the outbound journey, meeting activities and return travel in a timed itinerary.",
      approach: "Keep the activity, time and practical details together, then add a checklist for the journey.",
    },
    "Flight and accommodation arrangements": {
      images: [images["flight-itinerary"], images["travel-page-2"], images["travel-page-1"]],
      problem: "Transport and accommodation need to fit the trip schedule and have a visible cost allowance.",
      solution: "Record the route, hotel stay and estimated travel costs alongside the proposed schedule.",
      approach: "Review the departure and return plan, allow for transfers and compare the flight and accommodation estimates before booking.",
      note: "Planning sample: flight and accommodation estimates for review before booking.",
    },
    "Appointment and booking coordination": {
      images: [images["calendly-dates"], images["selar-consultation"], images["selar-time-slots"], images["travel-page-1"]],
      problem: "A booking needs a suitable time and enough context for both the host and visitor to prepare.",
      solution: "Make the available appointment dates and consultation details visible through guided booking pages.",
      approach: "Present the appointment, choose an available slot and review how it fits with the wider schedule.",
    },
  },
};
