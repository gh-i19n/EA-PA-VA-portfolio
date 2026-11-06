export const skillGroups = [
  {
    id: "executive-organisation",
    title: "Executive Support",
    description:
      "Balancing access, priorities and preparation in a complex working day.",
    keywords: [
      "Administrative Support",
      "Calendar Management",
      "Email Management",
      "Scheduling",
    ],
    images: ["/images/work/calendar-availability.png", "/images/work/meeting-agenda.png"],
  },
  {
    id: "communication",
    title: "Communications",
    description:
      "Giving each person the information they need, in the right tone and at the right time.",
    keywords: ["Email Communication", "Meeting Agendas"],
    images: ["/images/work/speaker-outreach.png", "/images/work/event-communication.png"],
  },
  {
    id: "coordination",
    title: "Task Coordination",
    description:
      "Connecting owners, dependencies and deadlines so commitments move forward.",
    keywords: ["Project Management", "Travel Planning"],
    images: ["/images/work/trello-workflow.jpg", "/images/work/travel-itinerary.png"],
  },
  {
    id: "information",
    title: "Information",
    description:
      "Turning scattered information into a concise, useful reference for a decision.",
    keywords: ["File Management", "Research"],
    images: ["/images/work/research-writing.png", "/images/work/excel-reporting.jpg"],
  },
] as const;

export const toolGroups = [
  {
    category: "Calendar & communication",
    description: "The working day, connected.",
    tools: [
      {
        name: "Google Workspace",
        purpose: "Calendar, email, shared documents",
        logo: {
          src: "/images/tools/google-workspace.svg",
          width: 1525,
          height: 192,
          displayWidth: 278,
          kind: "wordmark",
        },
      },
      {
        name: "Microsoft 365",
        purpose: "Outlook, documents, executive collaboration",
        sampleHref: "/videos/excel-reporting.mp4",
        sampleLabel: "View Excel reporting sample (silent)",
        logo: {
          src: "/images/tools/microsoft-365.svg",
          width: 1320,
          height: 214,
          displayWidth: 240,
          kind: "wordmark",
        },
      },
      {
        name: "Calendly",
        purpose: "Scheduling with clear availability",
        logo: {
          src: "/images/tools/calendly.svg",
          width: 148.337,
          height: 32,
          displayWidth: 176,
          kind: "wordmark",
        },
      },
    ],
  },
  {
    category: "Projects & knowledge",
    description: "A reliable place for the next step.",
    tools: [
      {
        name: "Notion",
        purpose: "Briefs, processes, reference libraries",
        logo: {
          src: "/images/tools/notion.svg",
          width: 105,
          height: 30,
          displayWidth: 147,
          kind: "wordmark",
        },
      },
      {
        name: "Asana",
        purpose: "Owners, dependencies, progress",
        logo: {
          src: "/images/tools/asana.svg",
          width: 112,
          height: 22,
          displayWidth: 174,
          kind: "wordmark",
        },
      },
      {
        name: "Trello",
        purpose: "Visible task and workflow tracking",
        sampleHref: "/videos/trello-workflow.mp4",
        sampleLabel: "View Trello workflow sample (silent)",
        logo: {
          src: "/images/tools/trello.svg",
          width: 312,
          height: 105,
          displayWidth: 154,
          kind: "wordmark",
        },
      },
    ],
  },
  {
    category: "Remote collaboration",
    description: "Context across locations.",
    tools: [
      {
        name: "Slack",
        purpose: "Team coordination and updates",
        logo: {
          src: "/images/tools/slack.png",
          width: 201,
          height: 75,
          displayWidth: 150,
          kind: "wordmark",
        },
      },
      {
        name: "Zoom",
        purpose: "Meeting setup and remote logistics",
        logo: {
          src: "/images/tools/zoom.png",
          width: 232,
          height: 52,
          displayWidth: 150,
          kind: "wordmark",
        },
      },
      {
        name: "Microsoft Teams",
        purpose: "Conversations, meetings, shared work",
        logo: {
          src: "/images/tools/microsoft-teams.svg",
          width: 48,
          height: 48,
          displayWidth: 48,
          kind: "symbol",
        },
      },
    ],
  },
] as const;
