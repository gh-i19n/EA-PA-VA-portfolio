import type { ServiceCapability, ServiceCategoryId } from "~/config/service-categories";
import type { ProjectWorkSample } from "../types/project-work-sample";
import { projectScreenshots as images } from "./project-screenshots";
import { folderScreenshots as source, projectImageFolders as folders } from "./project-folder-images";

type WorkSampleLibrary = {
  [Category in ServiceCategoryId]: Record<ServiceCapability<Category>, ProjectWorkSample>;
};

/** Each service keeps one capture of each distinct view; source inventories retain the originals. */
export const projectWorkSamples: WorkSampleLibrary = {
  executive: {
    "Email and inbox management": {
      images: [
        source["email-02"], source["email-03"], source["email-04"],
        source["email-05"], source["email-06"], source["email-07"],
        source["email-08"], source["email-09"], source["email-10"],
      ],
      problem: "Routine sorting, repeated outreach and delivery timing can turn the inbox into a long list of manual tasks.",
      solution: "Use inbox filters, scheduled delivery and reusable speaker emails to give recurring communication a clear structure.",
      approach: "Define the sorting rules, prepare the message, personalise the details and review the delivery time before sending.",
    },
    "Calendar and appointment scheduling": {
      images: [
        source["calendar-01"], source["calendar-03"], source["calendar-04"],
        source["calendar-05"], source["calendar-06"], source["calendar-07"],
        source["calendar-09"], source["calendar-10"], source["calendar-11"],
        source["calendar-12"], source["calendar-13"],
        images["calendar-week"], images["calendly-dates"],
      ],
      problem: "Meetings, training and consultations need to fit together without leaving people unsure about dates or availability.",
      solution: "Bring commitments into shared calendar views and give visitors a clear way to choose an appointment slot.",
      approach: "Name each event, set its time, review the month and week, then make suitable slots available through the booking tools.",
    },
    "General administrative support": {
      images: [source["communication-04"]],
      problem: "Day-to-day responsibilities still need clear instructions and follow-through when an executive is busy or away.",
      solution: "Prepare a practical handover that keeps responsibilities, access arrangements and next steps visible.",
      approach: "Confirm ongoing tasks and access, agree escalation arrangements and prepare the information people need to continue the work.",
    },
    "File and records management": {
      images: [...folders.filing],
      problem: "Shared documents and recordings are difficult to find when they do not have a consistent home.",
      solution: "Organise programme documents, meeting materials and recordings in clearly named Google Drive folders.",
      approach: "Group related files, use recognisable names and keep recurring resources in the same location.",
    },
    "Data entry": {
      images: [
        source["dataEntry-01"], source["dataEntry-02"], source["dataEntry-04"],
        source["dataEntry-05"], source["dataEntry-06"],
      ],
      problem: "Enrolment records, attendance and giving data need consistent entries and summaries before the overall picture can be understood.",
      solution: "Organise the records in spreadsheets, then use pivot tables, summary tables and charts to compare the figures.",
      approach: "Structure the columns, review the entries and totals, then prepare charts and reporting views.",
    },
  },
  operations: {
    "Project coordination and management": {
      images: [images["airtable-projects"], images["directed-production"]],
      documents: [{
        src: "/documents/production-planning-and-execution.pdf?v=2",
        caption: "Production planning and execution",
        pageCount: 33,
        sections: [
          { title: "Project overview", page: 1 },
          { title: "Objectives & scope", page: 2 },
          { title: "Team structure", page: 3 },
          { title: "Project phases", page: 4 },
          { title: "Timeline & budget", page: 5 },
          { title: "Risk register", page: 29 },
          { title: "Communication & challenges", page: 30 },
          { title: "Outcomes & lessons", page: 31 },
          { title: "Skills demonstrated", page: 32 },
          { title: "Project completion", page: 33 },
        ],
      }],
      problem: "Several moving parts need a shared direction, clear dates and a way to see how the work is progressing.",
      solution: "Use structured project records to coordinate work. In the theatre production shown here, I brought the performance together as director.",
      approach: "Keep stages and dates visible in the tracker; guide the cast, movement and pacing toward a coherent performance.",
    },
    "Task and deadline tracking": {
      images: [images["trello-board"], images["action-handoff"]],
      problem: "When tasks move at different speeds, deadlines and the next action can become hard to follow.",
      solution: "Keep work stages, dates and delivery expectations together in task boards and written handoffs.",
      approach: "Separate work by stage, attach the relevant detail to each task and review what is waiting, in progress or complete.",
    },
    "Workflow coordination": {
      images: [images["action-handoff"], source["communication-01"], source["communication-04"]],
      problem: "A conversation or recurring process needs to become clear work that someone can pick up and carry forward.",
      solution: "Document the next actions, communication channels and handover arrangements in a reference the team can return to.",
      approach: "State the action and timing, agree the approval or escalation path and keep reusable messages beside the process.",
    },
    "AI-powered workflow automation": {
      images: [source["calendar-11"], source["email-05"]],
      problem: "Meeting records and repeated inbox decisions add routine steps to everyday coordination.",
      solution: "The meeting setup combines Gemini note-taking, transcription and recording options. The supporting inbox example shows repeatable sorting rules.",
      approach: "Choose the meeting-record options and sharing permissions, define repeatable email actions and review the settings before use.",
    },
  },
  documentation: {
    "Documentation and report writing": {
      images: [...folders.reports, source["design-01"]],
      problem: "Discussion points and survey responses need a written structure people can use again.",
      solution: "Prepare reports and response summaries with clear sections and visible follow-up information.",
      approach: "Group related information, distinguish discussion from action and review the document for a useful reading order.",
    },
    "Communication templates": {
      images: [...folders.communication, source["email-11"], source["email-01"]],
      problem: "Recurring invitations, reminders and follow-ups need consistent wording and the right details for each recipient.",
      solution: "Prepare reusable message templates and communication guidance for speaker outreach, session reminders and programme updates.",
      approach: "Set out the purpose and next action, personalise the names and event details, then review the message and delivery timing.",
    },
    "Meeting agendas and preparation": {
      images: [source["reports-02"], source["reports-01"], source["calendar-11"], source["calendar-12"]],
      problem: "Participants need to know what the meeting will cover and what they should prepare before joining.",
      solution: "Set out the meeting details, progress updates, reporting roles and priorities in an agenda.",
      approach: "Arrange the discussion in a clear order, identify who is reporting and carry the follow-up into the meeting record.",
    },
    "Presentation design and preparation": {
      images: [
        source["design-01"], source["design-02"], source["design-03"],
        source["design-05"], source["design-06"], source["design-07"],
        source["design-08"], source["design-09"], source["design-10"],
        source["design-11"], source["design-12"],
        source["reports-03"], images["programme-slides"],
      ],
      problem: "Presentations, speaker profiles, documents and website concepts need a clear hierarchy so readers can follow the information.",
      solution: "Use consistent layouts, readable headings and related visual treatments across the supplied design examples.",
      approach: "Group the content by topic, establish a text and image hierarchy and review the layouts together for consistency.",
    },
    "Proofreading and editing": {
      images: [...folders.research],
      problem: "Research writing needs a close wording and consistency check before it is ready to share.",
      solution: "Review the text with attention to grammar, phrasing and readability. The introduction shown here includes visible review marks.",
      approach: "Read in context, inspect the flagged wording and review proposed changes against the meaning of the passage.",
    },
    "Research and article writing": {
      images: [...folders.research, source["reports-06"], source["reports-07"], source["reports-08"], source["reports-09"], source["reports-10"], images["research-writing"]],
      problem: "A broad subject needs focused questions, a clear line of discussion and material that supports the writing.",
      solution: "Structure the research through questionnaires and referenced writing, from the research topic to the discussion.",
      approach: "Define the information needed, organise questions and sections, then connect the discussion to its sources.",
    },
    "PDF formatting": {
      images: [...folders.communication, ...folders.travel, images["travel-page-1"], images["travel-page-2"], images["travel-page-3"]],
      problem: "A document needs to remain easy to follow when its information spans several pages.",
      solution: "Give headings, tables, message templates and checklists a clear hierarchy in the finished document.",
      approach: "Group related content, check the page sequence and inspect the exported pages for readable spacing and alignment.",
    },
  },
  travel: {
    "Travel planning and coordination": {
      images: [images["travel-page-1"], images["travel-page-2"], images["travel-page-3"], ...folders.travel],
      problem: "Flights, transfers, accommodation and meetings need to work as one connected journey.",
      solution: "The examples include a timed itinerary, estimated budget and preparation checklist, together with separate flight receipts and boarding documents.",
      approach: "Arrange the journey in time order, allow for the transfers and identify the documents and materials needed.",
      note: "The itinerary is a planning sample. The flight receipts and boarding documents are separate supplied examples.",
    },
    "Itinerary preparation": {
      images: [images["travel-page-1"], images["travel-page-2"], images["travel-page-3"], ...folders.travel],
      problem: "A traveller needs to see what happens next without searching across several messages or documents.",
      solution: "Set out the outbound journey, meeting activities and return travel in a timed itinerary.",
      approach: "Keep the activity, time and practical details together, then add a checklist for the journey.",
    },
    "Flight and accommodation arrangements": {
      images: [...folders.travel, images["flight-itinerary"], images["travel-page-2"], images["travel-page-1"]],
      problem: "Transport and accommodation need to fit the trip schedule and have a visible cost allowance.",
      solution: "Record the route, hotel stay and estimated travel costs alongside the proposed schedule.",
      approach: "Review the departure and return plan, allow for transfers and compare the flight and accommodation estimates before booking.",
      note: "The flight documents and planning itinerary are separate examples. Accommodation costs appear as estimates in the itinerary.",
    },
    "Appointment and booking coordination": {
      images: [images["calendly-dates"], ...folders.calendar.slice(0, 5), ...folders.travel, images["travel-page-1"]],
      problem: "A booking needs a suitable time and enough context for both the host and visitor to prepare.",
      solution: "Make the available appointment dates and consultation details visible through guided booking pages.",
      approach: "Present the appointment, choose an available slot and review how it fits with the wider schedule.",
    },
  },
};
