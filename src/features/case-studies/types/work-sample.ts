export type WorkSampleId = "brief" | "travel" | "handoff";

export type WorkSample = {
  id: WorkSampleId;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  judgment: string;
  annotation: string;
  slug: string;
  rows: readonly {
    reference: string;
    title: string;
    note: string;
    status: string;
  }[];
};
