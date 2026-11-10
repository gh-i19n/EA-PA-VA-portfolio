import type { Metadata } from "next";
import { ExecutiveAdministrativeSupportPage } from "~/features/services/components/executive-administrative-support-page";

export const metadata: Metadata = {
  title: "Executive & Administrative Support",
  description:
    "Explore AY’s executive and administrative support, including inbox and calendar management, general administration, records and data entry.",
};

export default function Page() {
  return <ExecutiveAdministrativeSupportPage />;
}
