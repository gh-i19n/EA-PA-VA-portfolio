import type { Metadata } from "next";
import { SkillsToolsPage } from "~/features/capabilities/components/skills-tools-page";

export const metadata: Metadata = { title: "Skills & Tools", description: "Explore the capabilities and working tools behind AY's assistance." };

export default function Page() { return <SkillsToolsPage />; }
