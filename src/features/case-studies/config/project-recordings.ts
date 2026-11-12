import type { ServiceCapability, ServiceCategoryId } from "~/config/service-categories";
import type { ProjectRecording } from "../types/project-recording";
import { projectStories } from "./project-stories";

function recording<Category extends ServiceCategoryId>(
  serviceCategory: Category,
  capability: ServiceCapability<Category>,
  id: Exclude<keyof typeof projectStories, "travel-itinerary">,
  title: string,
  description: string,
): ProjectRecording<Category> {
  return {
    serviceCategory,
    capability,
    id,
    title,
    description,
    src: `/videos/projects/${id}.mp4`,
    poster: `/images/projects/${id}.jpg`,
    story: projectStories[id],
  };
}

export const projectRecordings = {
  executive: [
    recording("executive", "Calendar and appointment scheduling", "calendar-planning", "Calendar planning", "A walkthrough of scheduled sessions across Google Calendar."),
    recording("executive", "Calendar and appointment scheduling", "calendar-overview", "Monthly calendar overview", "An overview of meetings and training sessions across the month."),
    recording("executive", "Calendar and appointment scheduling", "weekly-scheduling", "Weekly scheduling", "A colour-coded weekly schedule with separate meeting and focus blocks."),
    recording("executive", "Calendar and appointment scheduling", "calendly-booking", "Calendly availability", "Choosing an available date and time for a discovery call."),
    recording("executive", "Calendar and appointment scheduling", "selar-booking", "Selar bookings", "Selecting a consultation slot and completing the booking questions."),
    recording("executive", "File and records management", "digital-filing", "Digital filing", "A Google Drive folder structure for shared documents, meetings and team resources."),
    recording("executive", "Email and inbox management", "inbox-filters", "Inbox filters", "Setting Gmail filter actions, labels and categories. The view focuses on the filter controls."),
    recording("executive", "Email and inbox management", "scheduled-email", "Scheduled email", "Choosing a scheduled delivery time in Outlook."),
    recording("executive", "Email and inbox management", "email-templates", "Speaker email templates", "An excerpt from a reusable speaker-outreach email template."),
    {
      serviceCategory: "executive",
      capability: "Data entry",
      id: "excel-reporting",
      title: "Student enrolment reporting",
      description: "An aggregate enrolment summary with pivot tables and a chart. Individual student records are excluded.",
      src: "/videos/excel-reporting.mp4",
      poster: "/images/work/excel-reporting.jpg",
      story: projectStories["excel-reporting"],
    },
  ],
  operations: [
    {
      serviceCategory: "operations",
      capability: "Task and deadline tracking",
      id: "trello-workflow",
      title: "Trello workflow",
      description: "Task stages, due dates and checklists in the supplied team board.",
      src: "/videos/trello-workflow.mp4",
      poster: "/images/work/trello-workflow.jpg",
      story: projectStories["trello-workflow"],
    },
    recording("operations", "Project coordination and management", "airtable-tracking", "Airtable project tracking", "Project stages, dates and task descriptions arranged in an Airtable tracker."),
    recording("operations", "Workflow coordination", "action-deliverables", "Action handoff", "A written handoff grouping the next tasks, deadlines and follow-up actions."),
    {
      ...recording("operations", "Project coordination and management", "project-management-production", "Project management", "An excerpt from a theatre production I directed."),
      hasAudio: true,
    },
  ],
  documentation: [
    recording("documentation", "Presentation design and preparation", "presentation-design", "Presentation design", "A walkthrough of the Bridge500 introduction, mission and programme slides."),
    recording("documentation", "Documentation and report writing", "communication-templates", "Communication templates", "Communication channels, timing, approval steps and reusable message templates."),
    recording("documentation", "Meeting agendas and preparation", "meeting-agenda", "Meeting agenda", "Department updates, action items and upcoming priorities arranged in a meeting agenda."),
    recording("documentation", "Documentation and report writing", "meeting-report-review", "Meeting reporting", "The updated recording of structured meeting notes, discussion points and follow-up actions."),
    recording("documentation", "Presentation design and preparation", "figma-designs", "Speaker profiles in Figma", "A set of speaker-profile layouts prepared in Figma."),
    recording("documentation", "Research and article writing", "research-questionnaire", "Research questionnaire", "A Google Forms questionnaire covering promotion, communication and appointment management."),
    recording("documentation", "Documentation and report writing", "survey-summary", "Survey response summaries", "Aggregate survey charts covering preferences and booking habits."),
    recording("documentation", "Research and article writing", "research-article", "Research article", "A formatted research document exploring the Harlem Renaissance and African American theatre."),
    recording("documentation", "Research and article writing", "research-writing", "Research writing", "An excerpt from a referenced research document about parenting and child development."),
  ],
  travel: [],
} as const satisfies { [Category in ServiceCategoryId]: readonly ProjectRecording<Category>[] };
