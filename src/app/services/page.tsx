import type { Metadata } from "next";
import { ServicesPage } from "~/features/services/components/services-page";

export const metadata: Metadata = { title: "Services & Tools", description: "Explore AY’s executive support, meeting preparation, project coordination and travel services, with real work samples and the tools behind them." };

export default function Page() { return <ServicesPage />; }
