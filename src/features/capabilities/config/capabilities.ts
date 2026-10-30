export const skillGroups = [
  {
    title: "Executive organisation",
    description:
      "Balancing access, priorities and preparation in a complex working day.",
    keywords: ["Calendar strategy", "Inbox judgment", "Priority management"],
  },
  {
    title: "Communication",
    description:
      "Giving each person the information they need, in the right tone and at the right time.",
    keywords: ["Executive correspondence", "Stakeholder liaison", "Discretion"],
  },
  {
    title: "Coordination",
    description:
      "Connecting owners, dependencies and deadlines so commitments move forward.",
    keywords: ["Action tracking", "Travel logistics", "Project coordination"],
  },
  {
    title: "Information",
    description:
      "Turning scattered information into a concise, useful reference for a decision.",
    keywords: ["Research", "Briefing documents", "Process documentation"],
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
      },
      {
        name: "Microsoft 365",
        purpose: "Outlook, documents, executive collaboration",
      },
      { name: "Calendly", purpose: "Scheduling with clear availability" },
    ],
  },
  {
    category: "Projects & knowledge",
    description: "A reliable place for the next step.",
    tools: [
      { name: "Notion", purpose: "Briefs, processes, reference libraries" },
      { name: "Asana", purpose: "Owners, dependencies, progress" },
      { name: "Trello", purpose: "Visible task and workflow tracking" },
    ],
  },
  {
    category: "Remote collaboration",
    description: "Context across locations.",
    tools: [
      { name: "Slack", purpose: "Team coordination and updates" },
      { name: "Zoom", purpose: "Meeting setup and remote logistics" },
      {
        name: "Microsoft Teams",
        purpose: "Conversations, meetings, shared work",
      },
    ],
  },
] as const;
