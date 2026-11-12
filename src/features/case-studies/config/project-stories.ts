import type { ProjectStory } from "../types/project-story";

/** Explanations describe the supplied work without claiming unmeasured results. */
export const projectStories = {
  "calendar-planning": {
    problem: {
      heading: "Several sessions, one calendar.",
      description: "Meetings and training sessions need clear times and a shared place to check them. When the details are scattered, it is harder to see what is coming up.",
    },
    solution: {
      heading: "Put the schedule in one view.",
      description: "The Google Calendar sample brings scheduled sessions together, with named events and visible time blocks.",
    },
    approach: {
      heading: "Make each commitment easy to find.",
      description: "The calendar gives each session a place in the working week.",
      steps: ["Name each event clearly.", "Place sessions in their time slots.", "Review the week for overlapping commitments and available time."],
    },
    imageAlt: "Google Calendar showing named training sessions and meetings in a weekly time grid",
    imageCaption: "Scheduled sessions in Google Calendar.",
  },
  "calendar-overview": {
    problem: {
      heading: "A week can hide the bigger picture.",
      description: "A busy month can include recurring meetings, training and one-off commitments. Looking at them separately makes the overall workload harder to judge.",
    },
    solution: {
      heading: "See the month before planning the day.",
      description: "The monthly calendar brings the commitments into one overview, making busy periods and upcoming sessions easier to spot.",
    },
    approach: {
      heading: "Review the schedule at a wider scale.",
      description: "The month view supports planning beyond the next appointment.",
      steps: ["Bring recurring and one-off sessions into the calendar.", "Review how commitments are spread across the month.", "Use the overview when considering another booking."],
    },
    imageAlt: "Monthly Google Calendar overview with meetings and training sessions across several weeks",
    imageCaption: "The month's commitments in one calendar overview.",
  },
  "weekly-scheduling": {
    problem: {
      heading: "Meetings need room alongside focused work.",
      description: "A list of appointments does not show how much of the working week is already committed. Meeting time and focus time need to be visible together.",
    },
    solution: {
      heading: "Give the week a clear structure.",
      description: "The sample uses colour-coded blocks to distinguish scheduled activities and show how the week is arranged.",
    },
    approach: {
      heading: "Plan with time blocks.",
      description: "The weekly view makes the shape of the schedule readable at a glance.",
      steps: ["Separate activities with consistent colours.", "Assign clear start and end times.", "Review the gaps between commitments before adding more work."],
    },
    imageAlt: "Colour-coded weekly schedule with meeting and focus-time blocks",
    imageCaption: "A weekly schedule organised into distinct time blocks.",
  },
  "calendly-booking": {
    problem: {
      heading: "Finding a meeting time can take several messages.",
      description: "Both sides need to agree on an available date and time before a discovery call can happen.",
    },
    solution: {
      heading: "Let the visitor choose from available times.",
      description: "The Calendly sample presents bookable dates and time slots in a guided booking flow.",
    },
    approach: {
      heading: "Make the next booking step clear.",
      description: "The recording follows the visitor's path from the calendar to a chosen slot.",
      steps: ["Open the available booking dates.", "Choose a suitable time slot.", "Review the appointment details before continuing."],
    },
    imageAlt: "Calendly booking page displaying available dates and times for a discovery call",
    imageCaption: "Available appointment times in the Calendly booking flow.",
  },
  "selar-booking": {
    problem: {
      heading: "An appointment needs more than a time slot.",
      description: "A consultation booking also needs the details that help the host understand who is attending and what the conversation is for.",
    },
    solution: {
      heading: "Keep the appointment and booking questions together.",
      description: "The Selar walkthrough connects the choice of a consultation slot with the questions required to continue the booking.",
    },
    approach: {
      heading: "Guide the visitor through the booking.",
      description: "The sample shows the steps a visitor follows to arrange a consultation.",
      steps: ["Select the consultation slot.", "Complete the booking questions.", "Review the details before moving to the next step."],
    },
    imageAlt: "Selar consultation booking screen with a selected slot and booking questions",
    imageCaption: "Consultation scheduling and booking details in Selar.",
  },
  "digital-filing": {
    problem: {
      heading: "Shared files need a clear home.",
      description: "When documents, meeting materials and team resources are mixed together, people have to spend time working out where to look.",
    },
    solution: {
      heading: "Organise files into recognisable folders.",
      description: "The Google Drive sample separates shared resources into a folder structure that gives different kinds of work a defined place.",
    },
    approach: {
      heading: "Build around how the team finds information.",
      description: "The folder names and grouping provide a route from the shared drive to the right resource.",
      steps: ["Group related documents and resources.", "Use folder names that describe their contents.", "Keep meeting materials and recurring team resources in consistent locations."],
    },
    imageAlt: "Google Drive folders organising shared documents, meeting materials and team resources",
    imageCaption: "A structured filing system in Google Drive.",
  },
  "inbox-filters": {
    problem: {
      heading: "Repeated email sorting takes attention.",
      description: "Incoming messages often need the same labels or actions. Handling each one separately adds routine work to the inbox.",
    },
    solution: {
      heading: "Use filters for repeatable inbox actions.",
      description: "The Gmail excerpt shows filter controls for assigning labels, categories and other actions to matching messages.",
    },
    approach: {
      heading: "Turn a recurring decision into a rule.",
      description: "The sample focuses on choosing the action a matching email should receive.",
      steps: ["Identify the type of message the filter should match.", "Choose the appropriate label, category or action.", "Review the rule before applying it."],
    },
    imageAlt: "Gmail filter settings showing available labels, categories and actions",
    imageCaption: "Gmail filter actions, with inbox contents excluded.",
  },
  "scheduled-email": {
    problem: {
      heading: "Writing time and sending time may differ.",
      description: "An email can be ready before the moment it should reach its recipient. Keeping it for later creates another task to remember.",
    },
    solution: {
      heading: "Choose the delivery time in advance.",
      description: "The Outlook sample shows the scheduling dialog used to choose when a prepared email should be sent.",
    },
    approach: {
      heading: "Set the timing before leaving the email.",
      description: "Scheduling keeps the chosen delivery time attached to the message.",
      steps: ["Prepare the message.", "Open the scheduling options.", "Choose and review the delivery date and time."],
    },
    imageAlt: "Outlook scheduling dialog for selecting an email delivery date and time",
    imageCaption: "The scheduled-delivery controls in Outlook.",
  },
  "email-templates": {
    problem: {
      heading: "Repeated outreach still needs to feel considered.",
      description: "Speaker invitations often share key information, but each message needs to be clear and appropriate for its recipient.",
    },
    solution: {
      heading: "Start with a reusable speaker email.",
      description: "The template provides a consistent starting point for speaker outreach, with space to adapt the details for each conversation.",
    },
    approach: {
      heading: "Keep the structure, adapt the message.",
      description: "The sample organises the outreach into a message that can be reviewed before sending.",
      steps: ["Set out the purpose of the invitation.", "Keep the key event information together.", "Personalise the recipient details and review the next step."],
    },
    imageAlt: "An excerpt from a reusable speaker-outreach email template",
    imageCaption: "A structured starting point for speaker outreach.",
  },
  "excel-reporting": {
    problem: {
      heading: "Individual records are hard to read as a whole.",
      description: "Enrolment data needs a summary before someone can understand the overall picture without reading every student record.",
    },
    solution: {
      heading: "Turn the records into an aggregate view.",
      description: "The Excel sample uses a pivot table and chart to present enrolment totals. The public excerpt excludes individual student records.",
    },
    approach: {
      heading: "Summarise first, then visualise.",
      description: "The recording shows the summary view rather than the underlying personal data.",
      steps: ["Group the relevant enrolment fields in a pivot table.", "Review the aggregate totals.", "Use a chart to make the summary easier to scan."],
    },
    imageAlt: "Excel pivot-table summary and chart showing aggregate student enrolment figures",
    imageCaption: "An aggregate enrolment view without individual student records.",
  },
  "trello-workflow": {
    problem: {
      heading: "Tasks need a visible owner and next step.",
      description: "With several tasks moving at once, a team needs to see what is waiting, what is in progress and what is complete. Due dates and supporting detail need to stay with the work.",
    },
    solution: {
      heading: "Bring progress and task detail into one board.",
      description: "The Trello sample separates To-do, In Progress and Done, with task descriptions, due dates and checklists inside the cards.",
    },
    approach: {
      heading: "Make the board and card detail work together.",
      description: "The walkthrough moves between the board overview and individual cards so both progress and the next action can be inspected.",
      steps: ["Separate tasks by their current stage.", "Keep descriptions, deadlines and checklists on the relevant card.", "Use completion indicators to follow the work through."],
    },
    imageAlt: "Trello board with To-do, In Progress and Done columns and task cards",
    imageCaption: "The Trello workflow used in this recording.",
  },
  "airtable-tracking": {
    problem: {
      heading: "Project updates can become scattered.",
      description: "Stages, dates and task descriptions need to be read together to understand where a piece of work stands.",
    },
    solution: {
      heading: "Keep the project information in a structured tracker.",
      description: "The Airtable sample brings project stages, dates and descriptions into a consistent record layout.",
    },
    approach: {
      heading: "Give each record the same useful structure.",
      description: "The walkthrough shows the tracking fields while the public copy excludes client-contact details and budget values.",
      steps: ["Organise work into project records.", "Keep stages, dates and descriptions in distinct fields.", "Review the records together when checking progress."],
    },
    imageAlt: "Airtable project tracker showing stages, dates and task descriptions",
    imageCaption: "Project tracking in Airtable, with sensitive fields excluded.",
  },
  "action-deliverables": {
    problem: {
      heading: "A discussion needs to become clear work.",
      description: "A team needs more than a reminder that something was discussed. The next tasks, deadlines and follow-up actions need to be easy to find.",
    },
    solution: {
      heading: "Write a handoff people can act on.",
      description: "The sample groups the next tasks and delivery expectations into a written action handoff.",
    },
    approach: {
      heading: "Separate the action from the surrounding conversation.",
      description: "The written handoff gives the next stage of work a reference people can return to.",
      steps: ["State the work that needs to happen next.", "Keep the relevant deadlines with the tasks.", "Make the follow-up actions visible in the same message."],
    },
    imageAlt: "Written handoff grouping next tasks, deadlines and follow-up actions",
    imageCaption: "An action handoff prepared for follow-through.",
  },
  "project-management-production": {
    problem: {
      heading: "Many performers need to tell one story.",
      description: "A live production brings performance, movement and timing together. Those parts need a shared direction so the audience can follow the story.",
    },
    solution: {
      heading: "Give the production a shared direction.",
      description: "I directed the theatre production shown in this excerpt, bringing the performances and on-stage action together.",
    },
    approach: {
      heading: "Guide the performance as a whole.",
      description: "The sample shows the staged performance. My role as director connects the interpretation of the story with how it is performed.",
      steps: ["Establish the direction of the story and its scenes.", "Guide the cast's delivery and movement.", "Keep the pacing and on-stage action connected."],
    },
    imageAlt: "Cast performing a scene on stage in the theatre production directed by Ayomide Ajibola",
    imageCaption: "A scene from the theatre production I directed.",
  },
  "presentation-design": {
    problem: {
      heading: "Programme information can be too much at once.",
      description: "A presentation needs to introduce the organisation, its purpose and its programme without asking the reader to absorb everything on one slide.",
    },
    solution: {
      heading: "Give the information a clear slide sequence.",
      description: "The Bridge500 presentation groups the introduction, mission and programme information into separate slides.",
    },
    approach: {
      heading: "Build a readable path through the information.",
      description: "The slide structure gives each part of the introduction room to be understood.",
      steps: ["Group related information by topic.", "Use clear headings to introduce each slide.", "Keep the visual treatment consistent through the presentation."],
    },
    imageAlt: "A slide from the Bridge500 introduction and programme presentation",
    imageCaption: "Programme information arranged as presentation slides.",
  },
  "communication-templates": {
    problem: {
      heading: "Recurring messages need a shared process.",
      description: "When several channels and people are involved, message content, timing and approval can become disconnected.",
    },
    solution: {
      heading: "Keep the message and its process together.",
      description: "The communication document brings channel choices, timing, approval steps and reusable messages into one reference.",
    },
    approach: {
      heading: "Define what is sent, where and when.",
      description: "The sample connects reusable wording with the steps needed to use it.",
      steps: ["Identify the message and intended channel.", "Record the timing and approval steps.", "Keep the reusable wording alongside that guidance."],
    },
    imageAlt: "Communication document with channels, timing, approval steps and message templates",
    imageCaption: "Reusable communication and channel guidance.",
  },
  "meeting-agenda": {
    problem: {
      heading: "A meeting needs a purpose before it starts.",
      description: "Participants need to know the discussion order, who is reporting and what needs their preparation.",
    },
    solution: {
      heading: "Prepare a clear agenda.",
      description: "The team-meeting agenda sets out opening remarks, progress updates, reporting roles and upcoming priorities in a defined order.",
    },
    approach: {
      heading: "Give the conversation a structure.",
      description: "The agenda provides a reference participants can read before the meeting and follow during it.",
      steps: ["State the meeting details and opening items.", "Arrange the progress updates and reporting roles.", "Include the priorities that need discussion."],
    },
    imageAlt: "Team-meeting agenda listing opening items, progress updates and reporting roles",
    imageCaption: "A prepared agenda for a team-alignment meeting.",
  },
  "meeting-report-review": {
    problem: {
      heading: "Discussion points need a useful record.",
      description: "After a meeting, people need to revisit what was discussed and what requires follow-up without relying on memory alone.",
    },
    solution: {
      heading: "Turn the notes into a structured report.",
      description: "The meeting-report sample groups discussion points and follow-up actions into sections that can be read again after the conversation.",
    },
    approach: {
      heading: "Keep the discussion and next steps connected.",
      description: "The report gives the meeting a written reference for follow-through.",
      steps: ["Organise the notes by discussion topic.", "Record the relevant points clearly.", "Separate the follow-up actions so they can be found again."],
    },
    imageAlt: "Meeting report with structured discussion notes and follow-up actions",
    imageCaption: "Discussion points and follow-up actions in a meeting report.",
  },
  "figma-designs": {
    problem: {
      heading: "Speaker information needs a consistent presentation.",
      description: "A set of speaker profiles should be readable as one collection while giving each person a clear place in the layout.",
    },
    solution: {
      heading: "Use a shared profile layout.",
      description: "The Figma sample brings the speaker profiles into a set of related designs with consistent visual treatment.",
    },
    approach: {
      heading: "Keep the structure consistent across profiles.",
      description: "The collection shows how the same layout can accommodate different speaker details.",
      steps: ["Arrange the portrait and profile information together.", "Use a consistent hierarchy for the text.", "Review the profiles side by side for consistency."],
    },
    imageAlt: "A collection of speaker-profile layouts arranged in Figma",
    imageCaption: "Speaker-profile designs in Figma.",
  },
  "research-questionnaire": {
    problem: {
      heading: "Research needs questions people can answer.",
      description: "Topics such as promotion, communication and appointment management need to be broken into clear questions before responses can be compared.",
    },
    solution: {
      heading: "Build a structured questionnaire.",
      description: "The Google Forms sample groups questions about those topics into a form respondents can work through.",
    },
    approach: {
      heading: "Turn each research topic into a clear question.",
      description: "The form provides a consistent way to collect responses across the research topics.",
      steps: ["Identify the information needed from respondents.", "Group related questions in a logical order.", "Review the wording and answer options for clarity."],
    },
    imageAlt: "Google Forms research questionnaire about promotion, communication and appointment management",
    imageCaption: "Research questions organised in Google Forms.",
  },
  "survey-summary": {
    problem: {
      heading: "Individual answers do not show the whole pattern.",
      description: "Survey responses need to be brought together before preferences and booking habits can be compared.",
    },
    solution: {
      heading: "Present the responses as aggregate charts.",
      description: "The sample shows summary charts that group the survey answers without presenting individual response records.",
    },
    approach: {
      heading: "Make the response patterns easier to read.",
      description: "The summary focuses on the distribution of answers across the questions.",
      steps: ["Bring the responses together by question.", "Use charts to show the distribution of answers.", "Review the aggregate view before drawing conclusions."],
    },
    imageAlt: "Aggregate survey charts summarising preferences and booking habits",
    imageCaption: "Survey-response summaries shown as aggregate charts.",
  },
  "research-article": {
    problem: {
      heading: "A broad topic needs a clear line of discussion.",
      description: "Research into the Harlem Renaissance and African American theatre needs a structure that helps readers follow the subject and its supporting material.",
    },
    solution: {
      heading: "Arrange the research as a readable document.",
      description: "The sample presents the topic in a formatted research document with a clear text structure.",
    },
    approach: {
      heading: "Give the research a coherent reading order.",
      description: "The document brings the discussion and supporting material into one written piece.",
      steps: ["Define the subject of the discussion.", "Group related points into sections.", "Review the writing and formatting for readability."],
    },
    imageAlt: "Formatted research document about the Harlem Renaissance and African American theatre",
    imageCaption: "An excerpt from the theatre-research document.",
  },
  "research-writing": {
    problem: {
      heading: "Research writing needs more than collected information.",
      description: "A discussion of parenting and child development needs a clear structure and references that keep the writing connected to its sources.",
    },
    solution: {
      heading: "Present the discussion with supporting references.",
      description: "The sample is an excerpt from a referenced research document, bringing the topic and source material into a written discussion.",
    },
    approach: {
      heading: "Connect the argument to its sources.",
      description: "The document uses a structured discussion and references to support the reading.",
      steps: ["Organise the main points around the research topic.", "Connect the discussion to the relevant source material.", "Review the structure, wording and references together."],
    },
    imageAlt: "An excerpt from a referenced research document about parenting and child development",
    imageCaption: "Research writing with supporting references.",
  },
  "travel-itinerary": {
    problem: {
      heading: "Every travel detail depends on the next.",
      description: "Airport movements, accommodation, a board meeting and return travel need to fit together. The traveller also needs a clear view of preparation and estimated costs.",
    },
    solution: {
      heading: "Bring the journey into one planning document.",
      description: "The Lagos–Abuja sample combines a timed itinerary, an estimated budget and a documents-and-essentials checklist.",
    },
    approach: {
      heading: "Connect the schedule, costs and preparation.",
      description: "The document is a planning sample. Availability, timings and estimated costs would need reconfirming for a live trip.",
      steps: ["Arrange the journey and meeting activities in time order.", "Separate the estimated costs for flights, accommodation, transport and meals.", "Group the documents, meeting materials and personal essentials in a checklist."],
    },
    imageAlt: "First page of the Lagos–Abuja travel itinerary with timed activities",
    imageCaption: "The supplied Lagos–Abuja itinerary and preparation document.",
  },
} as const satisfies Record<string, ProjectStory>;
