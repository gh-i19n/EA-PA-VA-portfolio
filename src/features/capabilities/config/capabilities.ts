export const skillGroups = [
  { title: "Executive organisation", description: "Calendar judgment, inbox triage, meeting preparation and priority management.", keywords: ["Prioritisation", "Calendar strategy", "Attention to detail"] },
  { title: "Communication & relationships", description: "Clear correspondence, considered stakeholder coordination and discreet communication.", keywords: ["Business writing", "Stakeholder care", "Discretion"] },
  { title: "Coordination & delivery", description: "Keeping projects, logistics and everyday commitments moving toward a clear next step.", keywords: ["Follow-through", "Travel planning", "Project coordination"] },
  { title: "Research & information", description: "Finding what matters, organising it clearly and making it useful for a decision.", keywords: ["Research", "Documentation", "Reporting"] },
] as const;

export const toolGroups = [
  { category: "The working day", description: "Calendars, correspondence and documents.", tools: ["Google Workspace", "Microsoft 365", "Calendly"] },
  { category: "Projects & systems", description: "Tasks, knowledge and the next action.", tools: ["Notion", "Asana", "Trello"] },
  { category: "People & conversations", description: "Keeping a distributed working day connected.", tools: ["Slack", "Zoom", "Microsoft Teams"] },
] as const;
