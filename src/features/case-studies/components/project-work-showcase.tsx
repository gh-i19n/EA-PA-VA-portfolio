"use client";

import { useId, useState, type ReactNode } from "react";
import type { ServiceCategoryId } from "~/config/service-categories";
import type { ProjectRecording } from "../types/project-recording";
import type { ProjectWorkSampleGroup } from "../types/project-work-sample";
import { ProjectRecordingGallery } from "./project-recording-gallery";
import { ProjectSampleDetails } from "./project-sample-details";

export function ProjectWorkShowcase({ recordings, serviceCategory, groups, children }: {
  recordings: readonly ProjectRecording[];
  serviceCategory: ServiceCategoryId;
  groups: readonly ProjectWorkSampleGroup[];
  children?: ReactNode;
}) {
  const id = useId();
  const [capability, setCapability] = useState<string>(recordings[0]?.capability ?? groups[0]?.capability ?? "");

  return (
    <>
      {recordings.length ? (
        <ProjectRecordingGallery recordings={recordings} serviceCategory={serviceCategory} detailsId={`${id}-details`} onServiceSelect={setCapability} />
      ) : children}
      <ProjectSampleDetails id={`${id}-details`} groups={groups} capability={capability} onServiceSelect={setCapability} />
    </>
  );
}
