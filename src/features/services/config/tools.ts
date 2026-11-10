function symbolTool(name: string, purpose: string, fileName: string) {
  const symbolSrc = `/images/tools/symbols/${fileName}`;

  return {
    name,
    purpose,
    symbolSrc,
    logo: {
      src: symbolSrc,
      width: 64,
      height: 64,
      displayWidth: 48,
      kind: "symbol" as const,
    },
  };
}

const tools = {
  otter: symbolTool(
    "Otter.ai",
    "Meeting transcription and notes",
    "otter-ai.png",
  ),
  fireflies: symbolTool(
    "Fireflies.ai",
    "Meeting summaries and action items",
    "fireflies-ai.png",
  ),
  readAi: symbolTool(
    "Read AI",
    "Meeting reports and documentation",
    "read-ai.png",
  ),
  grammarly: symbolTool(
    "Grammarly",
    "Proofreading and writing support",
    "grammarly.svg",
  ),
  figma: symbolTool(
    "Figma",
    "Visual design and collaboration",
    "figma.svg",
  ),
  canva: symbolTool(
    "Canva",
    "Presentations and visual documents",
    "canva.png",
  ),
  googleSearch: symbolTool(
    "Google Search",
    "Online research and source discovery",
    "google-workspace.svg",
  ),
  perplexity: symbolTool(
    "Perplexity",
    "Research and source discovery",
    "perplexity.svg",
  ),
  chatgpt: symbolTool(
    "ChatGPT",
    "Drafting, research and productivity support",
    "chatgpt.svg",
  ),
  claude: symbolTool(
    "Claude",
    "Writing, analysis and document support",
    "claude.svg",
  ),
  microsoftCopilot: symbolTool(
    "Microsoft Copilot",
    "AI assistance across everyday work",
    "microsoft-copilot.svg",
  ),
  notebooklm: symbolTool(
    "NotebookLM",
    "Research notes and source-based summaries",
    "notebooklm.svg",
  ),
  evernote: symbolTool(
    "Evernote",
    "Research notes and information organisation",
    "evernote.svg",
  ),
  clockify: symbolTool(
    "Clockify",
    "Time tracking and timesheets",
    "clockify.svg",
  ),
  worldTimeBuddy: symbolTool(
    "World Time Buddy",
    "Time-zone coordination",
    "world-time-buddy.ico",
  ),
  onePassword: symbolTool(
    "1Password",
    "Password and confidential information management",
    "1password.svg",
  ),
  lastPass: symbolTool(
    "LastPass",
    "Password and confidential information management",
    "lastpass.svg",
  ),
  googleWorkspace: {
    name: "Google Workspace",
    purpose: "Calendar, email, shared documents",
    symbolSrc: "/images/tools/symbols/google-workspace.svg",
    logo: {
      src: "/images/tools/google-workspace.svg",
      width: 1525,
      height: 192,
      displayWidth: 278,
      kind: "wordmark",
    },
  },
  microsoft365: {
    name: "Microsoft 365",
    purpose: "Outlook, documents, executive collaboration",
    symbolSrc: "/images/tools/symbols/microsoft-365.svg",
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
  calendly: {
    name: "Calendly",
    purpose: "Scheduling with clear availability",
    symbolSrc: "/images/tools/symbols/calendly.svg",
    logo: {
      src: "/images/tools/calendly.svg",
      width: 148.337,
      height: 32,
      displayWidth: 176,
      kind: "wordmark",
    },
  },
  selar: {
    name: "Selar",
    purpose: "Session bookings and payments",
    symbolSrc: "/images/tools/symbols/selar.png",
    logo: {
      src: "/images/tools/symbols/selar.png",
      width: 114,
      height: 114,
      displayWidth: 48,
      kind: "symbol",
    },
  },
  notion: {
    name: "Notion",
    purpose: "Briefs, processes, reference libraries",
    symbolSrc: "/images/tools/symbols/notion.svg",
    logo: {
      src: "/images/tools/notion.svg",
      width: 105,
      height: 30,
      displayWidth: 147,
      kind: "wordmark",
    },
  },
  airtable: {
    name: "Airtable",
    purpose: "Structured records and shared project information",
    symbolSrc: "/images/tools/symbols/airtable.svg",
    logo: {
      src: "/images/tools/airtable.svg",
      width: 24,
      height: 24,
      displayWidth: 36,
      kind: "symbol",
    },
  },
  asana: {
    name: "Asana",
    purpose: "Owners, dependencies, progress",
    symbolSrc: "/images/tools/symbols/asana.svg",
    logo: {
      src: "/images/tools/asana.svg",
      width: 112,
      height: 22,
      displayWidth: 174,
      kind: "wordmark",
    },
  },
  trello: {
    name: "Trello",
    purpose: "Visible task and workflow tracking",
    symbolSrc: "/images/tools/symbols/trello.svg",
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
  zapier: {
    name: "Zapier",
    purpose: "Workflow automation across everyday apps",
    symbolSrc: "/images/tools/symbols/zapier.svg",
    logo: {
      src: "/images/tools/zapier.svg",
      width: 24,
      height: 24,
      displayWidth: 36,
      kind: "symbol",
    },
  },
  slack: {
    name: "Slack",
    purpose: "Team coordination and updates",
    symbolSrc: "/images/tools/symbols/slack.svg",
    logo: {
      src: "/images/tools/slack.png",
      width: 201,
      height: 75,
      displayWidth: 150,
      kind: "wordmark",
    },
  },
  zoom: {
    name: "Zoom",
    purpose: "Meeting setup and remote logistics",
    symbolSrc: "/images/tools/symbols/zoom.svg",
    logo: {
      src: "/images/tools/zoom.png",
      width: 232,
      height: 52,
      displayWidth: 150,
      kind: "wordmark",
    },
  },
  fathom: {
    name: "Fathom",
    purpose: "Meeting notes, summaries and action items",
    symbolSrc: "/images/tools/symbols/fathom.png",
    logo: {
      src: "/images/tools/symbols/fathom.png",
      width: 512,
      height: 512,
      displayWidth: 48,
      kind: "symbol",
    },
  },
  microsoftTeams: {
    name: "Microsoft Teams",
    purpose: "Conversations, meetings, shared work",
    symbolSrc: "/images/tools/symbols/microsoft-teams.svg",
    logo: {
      src: "/images/tools/microsoft-teams.svg",
      width: 48,
      height: 48,
      displayWidth: 48,
      kind: "symbol",
    },
  },
} as const;

export const toolGroups = [
  {
    category: "Workspace & project management",
    columnSpan: 6,
    tools: [tools.trello, tools.notion, tools.asana],
  },
  {
    category: "Automation & workflows",
    columnSpan: 3,
    tools: [tools.zapier, tools.airtable],
  },
  {
    category: "Scheduling & appointments",
    columnSpan: 3,
    tools: [tools.calendly, tools.selar],
  },
  {
    category: "Communication & collaboration",
    columnSpan: 4,
    tools: [tools.slack, tools.zoom, tools.microsoftTeams],
  },
  {
    category: "Productivity",
    columnSpan: 8,
    tools: [
      tools.googleWorkspace,
      tools.microsoft365,
      tools.grammarly,
      tools.figma,
      tools.canva,
    ],
  },
  {
    category: "Meeting management and documentation",
    columnSpan: 4,
    tools: [tools.fathom, tools.otter, tools.fireflies, tools.readAi],
  },
  {
    category: "Research & AI productivity",
    columnSpan: 8,
    tools: [
      tools.googleSearch,
      tools.perplexity,
      tools.chatgpt,
      tools.claude,
      tools.microsoftCopilot,
      tools.notebooklm,
      tools.evernote,
    ],
  },
  {
    category: "Time tracking & time zones",
    columnSpan: 4,
    tools: [tools.clockify, tools.worldTimeBuddy],
  },
  {
    category: "Password & confidential information management",
    columnSpan: 8,
    tools: [tools.onePassword, tools.lastPass],
  },
] as const;
