import type { ServiceCapability, ServiceCategoryId } from "~/config/service-categories";
import type { ProjectWorkSample } from "../types/project-work-sample";
import { projectScreenshots as images } from "./project-screenshots";
import { folderScreenshots as source, projectImageFolders as folders } from "./project-folder-images";

type WorkSampleLibrary = {
  [Category in ServiceCategoryId]: Partial<Record<ServiceCapability<Category>, ProjectWorkSample>>;
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
      problem: {
        title: "The Problem",
        paragraphs: [
          "A single email account can receive hundreds or even thousands of messages over time. Without a proper email management system, important communications can easily get buried among newsletters, promotional messages, routine updates, and unnecessary conversations.",
          "This can result in:",
        ],
        bullets: [
          "Important emails getting lost or overlooked in a crowded inbox.",
          "Difficulty identifying urgent messages that require immediate attention.",
          "Delayed responses to clients, partners, and other stakeholders.",
          "Spending unnecessary time searching for specific emails.",
          "Difficulty tracking emails that require delegation or follow-up.",
          "An overwhelming inbox that makes communication management less efficient.",
        ],
      },
      solution: {
        title: "2. The Solution",
        paragraphs: [
          "I developed a structured email management system to declutter the inbox, organise incoming messages, and establish a clear process for prioritising, responding to, delegating, and following up on emails.",
          "The goal was to create a clean, organised, and easy-to-navigate inbox where important communications receive attention at the right time.",
          "The system focused on:",
        ],
        bullets: [
          "Inbox clean-up and decluttering.",
          "Categorising emails based on priority and required action.",
          "Creating labels for easy identification and tracking.",
          "Setting up automated email filters.",
          "Managing subscriptions and reducing unnecessary incoming messages.",
          "Establishing a clear workflow for email responses and follow-ups.",
        ],
      },
      approach: {
        title: "3. My Approach",
        paragraphs: [
          "I organised and decluttered the inbox by reviewing existing messages, archiving important conversations, deleting irrelevant emails, unsubscribing from unwanted newsletters, and identifying communications requiring attention.",
          "I introduced a priority-based labelling system, including Urgent Response, Important, Delegate, Awaiting Response, and Follow-Up, to categorise emails according to their importance and required action. I also configured automated filters to sort incoming messages into designated labels, reducing manual organisation.",
          "Finally, I established a clear email management workflow for reviewing, prioritising, responding to, delegating, archiving, and tracking outstanding communications, ensuring that important emails receive timely attention from arrival to resolution.",
        ],
      },
    },
    "Calendar and appointment scheduling": {
      images: [
        source["calendar-06"], source["calendar-07"],
        source["calendar-09"], source["calendar-10"], source["calendar-11"],
        source["calendar-12"], source["calendar-13"],
        images["calendar-week"],
        source["calendar-01"], source["calendar-03"], source["calendar-04"],
        source["calendar-05"],
        images["calendly-dates"],
      ],
      problem: {
        title: "1. The Problem",
        paragraphs: [
          "Managing multiple meetings, training sessions, consultations, and appointments can become overwhelming, especially when several commitments compete for the same time.",
          "Without a well-organised scheduling system, executives may experience:",
        ],
        bullets: [
          "Double bookings and conflicting appointments.",
          "Overlapping meetings, training sessions, and consultations.",
          "Difficulty keeping track of daily, weekly, and monthly commitments.",
          "Missed meetings due to inadequate reminders.",
          "Challenges scheduling appointments with clients across different time zones.",
        ],
      },
      solution: {
        title: "2. The Solution",
        paragraphs: [
          "I developed a structured calendar and appointment management system designed to keep meetings organised, prevent scheduling conflicts, and make appointment booking seamless.",
          "The system focused on:",
        ],
        bullets: [
          "Creating a centralised calendar for all professional commitments.",
          "Organising meetings, training sessions, and consultations.",
          "Implementing colour-coded labels for easy identification of different activities.",
          "Establishing automated reminders to minimise missed appointments.",
          "Setting up an appointment booking system that allows clients to select available dates and times.",
          "Accommodating different time zones to make scheduling easier for international clients.",
        ],
      },
      approach: {
        title: "3. My Approach",
        paragraphs: [
          "I created and organised a dedicated calendar to manage meetings, training sessions, consultations, and other commitments, ensuring proper scheduling and preventing appointment conflicts. I structured the calendar into monthly, weekly, and daily views for effective planning and monitoring, using colour-coded categories to make activities easily identifiable.",
          "I also integrated an appointment booking system that allows clients to select available dates and time slots independently, with automated booking confirmations and reminders. Additionally, I considered different time zones to ensure seamless scheduling for clients in various locations.",
        ],
      },
    },
    "File and records management": {
      images: [...folders.filing],
      problem: {
        title: "1. The Problem",
        paragraphs: [
          "Without a proper file management and documentation system, important business documents, records, credentials, and work files can easily become misplaced, duplicated, or difficult to retrieve.",
          "When files are stored randomly without clear naming conventions or folder structures, it becomes challenging to locate the right document when needed.",
        ],
      },
      solution: {
        title: "2. The Solution",
        paragraphs: [
          "I developed a structured digital file management system to organise, categorise, and centralise documents in one accessible location.",
          "The goal was to create a well-organised digital workspace where every document has a designated location, a clear name, and a logical folder structure.",
          "The system focused on:",
        ],
        bullets: [
          "Creating a centralised master folder.",
          "Developing clearly labelled subfolders.",
          "Categorising documents according to their purpose and function.",
          "Establishing consistent file naming conventions.",
          "Organising records for easy access and retrieval.",
          "Maintaining a structured documentation system.",
        ],
      },
      approach: {
        title: "3. My Approach",
        paragraphs: [
          "I developed a centralised digital filing system by creating a master folder with a structured hierarchy of subfolders to organise documents according to their categories and purposes. I sorted and stored administrative documents, credentials, reports, presentations, meeting records, and project files in their appropriate locations.",
          "I also established consistent file-naming conventions using dates, document types, and project names to make files easy to identify and retrieve. This created an organised digital workspace that simplifies document storage, access, updates, and sharing.",
        ],
      },
    },
    "Data entry": {
      images: [
        source["dataEntry-01"], source["dataEntry-02"], source["dataEntry-06"],
        source["dataEntry-04"], source["dataEntry-05"],
      ],
      problem: {
        title: "1. The Problem",
        paragraphs: [
          "Managing large volumes of raw data without a proper structure can make record-keeping and reporting difficult.",
          "Information such as enrolment records, attendance registers, membership details, and financial contributions needs to be consistently entered, categorised, and organised before meaningful insights can be drawn.",
          "Without a structured data management system, organisations may experience:",
        ],
        bullets: [
          "Inconsistent or incomplete data entries.",
          "Difficulty tracking enrolment and attendance records.",
          "Challenges identifying trends across different categories.",
        ],
      },
      solution: {
        title: "2. The Solution",
        paragraphs: [
          "I developed a structured spreadsheet-based data management system to organise raw records, improve data accuracy, and transform information into meaningful summaries and visual reports.",
          "The goal was to make data easier to manage, monitor, compare, and interpret.",
          "The system focused on:",
        ],
        bullets: [
          "Organising raw data into structured spreadsheets.",
          "Categorising records by relevant fields.",
          "Maintaining consistent data entry formats.",
          "Using pivot tables to summarise and analyse records.",
          "Creating summary tables to highlight key figures.",
          "Developing charts and graphical representations to communicate insights.",
          "Making attendance, enrolment, and financial contribution records easier to track.",
        ],
      },
      approach: {
        title: "3. My Approach",
        paragraphs: [
          "I organised and managed records by entering available information into structured spreadsheets and categorising data using relevant fields such as dates, gender, courses, participants, attendance, and financial contributions. I used pivot tables to summarise and compare records, generating insights such as course enrolment, attendance trends, gender distribution, and financial contributions.",
          "I also created summary tables and visual reports, including bar and pie charts, to present key figures clearly, making information easier to interpret, compare, and use for reporting and decision-making.",
        ],
      },
    },
  },
  operations: {
    "Project coordination and management": {
      images: [images["directed-production"]],
      documents: [{
        src: "/documents/production-planning-and-execution.pdf?v=11",
        caption: "Production planning and execution",
        pageCount: 11,
        sections: [
          { title: "Project overview", page: 1 },
          { title: "Objectives & scope", page: 2 },
          { title: "Team structure", page: 3 },
          { title: "Project phases", page: 4 },
          { title: "Timeline", page: 5 },
          { title: "Resource & budget", page: 6 },
          { title: "Risk management", page: 7 },
          { title: "Communication & challenges", page: 8 },
          { title: "Outcomes & lessons", page: 9 },
          { title: "Skills demonstrated", page: 10 },
          { title: "Project completion", page: 11 },
        ],
      }],
      problem: {
        title: "1. The Problem",
        paragraphs: [
          "Every project requires proper planning, coordination, and supervision to ensure that activities are completed within the expected timelines and objectives.",
          "Managing a theatrical production involving multiple teams, cast members, technical crew, rehearsals, and production activities required a structured approach to keep everyone aligned.",
          "Without proper project coordination, challenges could arise, including:",
        ],
        bullets: [
          "Poor coordination between different teams and departments.",
          "Unclear roles, responsibilities, and task ownership.",
          "Missed deadlines and overlapping activities.",
          "Difficulty tracking project progress and outstanding tasks.",
          "Poor communication and information gaps between team members.",
          "Challenges managing resources, logistics, and production budgets.",
          "Inadequate rehearsal coordination, affecting the overall performance.",
        ],
      },
      solution: {
        title: "2. The Solution",
        paragraphs: [
          "I coordinated and managed a theatrical production by implementing a structured project management approach that brought together planning, task coordination, documentation, communication, and execution.",
          "I established a centralised project tracking system to organise activities, assign responsibilities, monitor deadlines, and keep the different teams aligned throughout the production process.",
          "The goal was to ensure that every team understood its responsibilities, every activity had a timeline, and all production elements came together successfully.",
        ],
      },
      approach: {
        title: "3. My Approach",
        paragraphs: [
          "I led the planning and coordination of a stage production by defining project objectives, deliverables, activities, and timelines, breaking the production process into manageable stages. I created a centralised project database to track team members, roles, assigned tasks, rehearsal schedules, deadlines, and progress updates.",
          "I coordinated the cast, production team, and technical crew, ensuring clear communication, task allocation, and timely follow-ups. I also managed production timelines, organised rehearsals, monitored performance readiness, and coordinated stage movements, transitions, and technical activities.",
          "During the final production, I supervised stage operations, monitored timing, and coordinated team activities to ensure smooth execution and the achievement of project objectives.",
        ],
      },
    },
    "Task and deadline tracking": {
      images: [images["trello-board"], images["action-handoff"]],
      problem: {
        title: "1. Problem",
        paragraphs: [
          "When multiple tasks are being handled by different people, work can easily become difficult to coordinate and monitor.",
          "Without a proper task management system, deadlines can be missed, responsibilities may become unclear, and important action points can be overlooked.",
        ],
      },
      solution: {
        title: "2. Solution",
        paragraphs: [
          "I established a structured project coordination and task management system to organise activities, assign responsibilities, monitor progress, and ensure timely completion of deliverables.",
          "The goal was to create a centralised workflow where every task had an assigned person, a clear deadline, and a defined next action.",
          "This involved:",
        ],
        bullets: [
          "Creating centralised task boards to manage project activities.",
          "Assigning tasks to the appropriate team members.",
          "Establishing deadlines and expected deliverables.",
          "Following up on outstanding tasks and pending deliverables.",
        ],
      },
      approach: {
        title: "3. My Approach",
        paragraphs: [
          "I created a structured project management system in Trello to organise projects, assign tasks to team members, set deadlines, monitor progress, and track task completion. This provided a centralised workspace for managing responsibilities, monitoring deliverables, and ensuring tasks were completed within agreed timelines.",
        ],
      },
    },
    "Workflow coordination": {
      images: [source["communication-04"], images["action-handoff"], source["communication-01"], source["reports-02"]],
      problem: {
        title: "1. The Problem",
        paragraphs: [
          "When tasks, instructions, and recurring activities are communicated informally without proper documentation, team members may struggle to understand their responsibilities, follow consistent processes, and know what actions to take next. This can lead to unclear roles, repeated explanations, inconsistent task execution, communication gaps, approval delays, poor handovers, loss of important information, and a lack of standard templates for routine communication and documentation.",
        ],
      },
      solution: {
        title: "2. The Solution",
        paragraphs: [
          "I developed structured workflow documentation to turn conversations, instructions, and recurring activities into clear, repeatable processes that team members can easily understand and follow.",
          "The goal was to establish a consistent working system where responsibilities, action points, communication channels, and handover procedures were clearly documented.",
          "This involved:",
        ],
        bullets: [
          "Documenting step-by-step processes.",
          "Creating Standard Operating Procedures (SOPs).",
          "Defining roles and responsibilities.",
          "Establishing clear communication and reporting channels.",
        ],
      },
      approach: {
        title: "3. My Approach",
        paragraphs: [
          "I reviewed existing processes, instructions, and recurring activities to understand how tasks were initiated, assigned, executed, and completed. I translated informal instructions into structured workflow documentation, clearly defining responsibilities, action points, deadlines, and expected outcomes.",
          "I developed step-by-step Standard Operating Procedures (SOPs) and reusable templates for meeting agendas and minutes, reports, task tracking, email communication, follow-ups, project updates, and handovers. I also documented communication and escalation channels and organised these resources into accessible reference materials.",
          "Finally, I reviewed and updated the workflows to ensure instructions remained clear, processes were consistent, and responsibilities could be transferred smoothly without disrupting ongoing operations.",
        ],
      },
    },
    "Workflow automation": {
      images: [source["calendar-11"], source["email-04"], source["email-05"], source["email-07"]],
      problem: {
        title: "1. Problem",
        paragraphs: [
          "Manually managing meeting schedules, appointment bookings, and repetitive emails consumes valuable time. It can lead to scheduling conflicts, delayed responses, missed appointments, and repetitive administrative tasks.",
        ],
      },
      solution: {
        title: "2. Solution",
        paragraphs: [
          "Implemented automation to streamline meeting scheduling, appointment bookings, email communication, and reminders, reducing manual administrative work and improving workflow efficiency.",
        ],
      },
      approach: {
        title: "3. My Approach",
        paragraphs: [
          "I automated appointment scheduling based on calendar availability, setting up booking confirmations, meeting links, and automated reminders. I also created email automation workflows for responses, notifications, and follow-ups, integrating scheduling, email, and calendar tools to ensure seamless information flow, reduce manual tasks, and improve operational efficiency.",
        ],
      },
    },
  },
  documentation: {
    "Documentation and report writing": {
      images: [
        source["reports-01"], source["reports-02"], source["reports-04"],
        source["reports-05"], source["reports-07"],
        source["reports-08"], source["reports-09"], source["reports-10"],
      ],
      problem: "Discussion points and survey responses need a written structure people can use again.",
      solution: "Prepare reports and response summaries with clear sections and visible follow-up information.",
      approach: "Group related information, distinguish discussion from action and review the document for a useful reading order.",
    },
    "Communication templates": {
      images: [...folders.communication, source["email-11"], source["email-01"]],
      problem: {
        title: "1. Problem",
        paragraphs: [
          "Recurring communications such as invitations, reminders, speaker outreach, announcements, and follow-ups require consistent wording and accurate information.",
          "Without reusable communication templates, teams may spend unnecessary time drafting similar messages, resulting in inconsistent communication, missing details, and delayed responses.",
          "This can lead to:",
        ],
        bullets: [
          "Inconsistent messaging across communications.",
          "Repetitive drafting of similar emails and messages.",
          "Missing event details or important information.",
          "Delayed invitations and follow-ups.",
          "Poor communication with speakers, participants, and stakeholders.",
        ],
      },
      solution: {
        title: "2. Solution",
        paragraphs: [
          "Developed reusable communication templates and messaging guidelines to streamline recurring communications, maintain consistency, and ensure that messages are clear, professional, and tailored to their recipients.",
        ],
      },
      approach: {
        title: "3. My Approach",
        paragraphs: [
          "I developed reusable communication templates for speaker invitations, event announcements, meeting reminders, follow-ups, and programme updates. I structured each message with a clear purpose, relevant details, and expected next action, while personalising content with recipient names, dates, and session information. I also established consistent communication guidelines for tone and formatting, reviewing messages for accuracy, clarity, and completeness before scheduling or sending them at the appropriate time.",
        ],
      },
    },
    "Research and article writing": {
      images: [...folders.research, images["research-writing"]],
      problem: {
        title: "1. Problem",
        paragraphs: [
          "Broad research topics can be difficult to develop into meaningful written content without clear research questions, relevant information, and a structured line of discussion.",
          "Without proper research and organisation, articles may lack direction, supporting evidence, and a logical flow.",
        ],
      },
      solution: {
        title: "2. Solution",
        paragraphs: [
          "Developed a structured research and writing process to transform broad topics into focused research questions, organised discussions, and well-referenced articles.",
        ],
      },
      approach: {
        title: "3. My Approach",
        paragraphs: [
          "I managed the research and content development process by defining research objectives, identifying key areas of investigation, and developing relevant questionnaires to gather information. I researched credible sources and supporting materials, organised findings into logically structured sections, and transformed the information into clear, coherent, and informative written content. I also reviewed references and citations, proofread the document, and refined the final content to ensure clarity, accuracy, and consistency.",
        ],
      },
    },
  },
  travel: {
    "Itinerary preparation": {
      images: [images["travel-page-1"], images["travel-page-2"], images["travel-page-3"]],
      problem: {
        title: "Problem",
        paragraphs: [
          "Business travel involves coordinating multiple arrangements, including flight bookings, accommodation, transportation, meeting schedules, and travel expenses. Without a structured itinerary, executives may experience scheduling conflicts, missed appointments, poor time management, or unexpected travel costs.",
        ],
      },
      solution: {
        title: "Solution",
        paragraphs: [
          "Developed a comprehensive travel itinerary that consolidated flight details, hotel accommodation, transportation arrangements, daily activities, meeting schedules, estimated budgets, and essential travel checklists into one organised document.",
        ],
      },
      approach: {
        title: "Approach",
        paragraphs: [
          "Researched travel options, organised departure and return schedules, coordinated accommodation and local transportation, structured daily activities around business commitments, prepared an estimated travel budget, and created a checklist of essential travel documents and personal work items to support a smooth and well-coordinated trip.",
        ],
      },
    },
    "Flight booking": {
      displayTitle: "Flight Booking and Travel Coordination",
      images: [images["flight-itinerary"], images["travel-page-2"], images["travel-page-1"]],
      problem: {
        title: "Problem",
        paragraphs: [
          "A client had a scheduled engagement in Lagos that required travelling from Abuja and returning after the engagement. The travel arrangements needed to align with the engagement schedule to ensure timely arrival and a smooth return journey.",
        ],
      },
      solution: {
        title: "Solution",
        paragraphs: [
          "Coordinated a round-trip flight booking from Abuja to Lagos and back, selecting suitable flight times that aligned with the client's engagement and return schedule. Also completed the online check-in process and ensured the necessary travel details were available ahead of departure.",
        ],
      },
      approach: {
        title: "Approach",
        paragraphs: [
          "Identified suitable airlines, compared available flight schedules and ticket prices, and selected flights based on the client's preferred travel times and engagement schedule. Completed the booking, confirmed the travel itinerary, and carried out online check-in ahead of departure to ensure a seamless travel experience.",
        ],
      },
    },
  },
};
