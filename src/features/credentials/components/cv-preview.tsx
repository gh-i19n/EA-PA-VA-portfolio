"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { curriculumVitae } from "../config/credentials-content";
import styles from "./cv-preview.module.css";

export function CvPreview() {
  const panelId = useId();
  const [selectedId, setSelectedId] =
    useState<(typeof curriculumVitae)[number]["id"]>("general");
  const selectedVersion =
    curriculumVitae.find((version) => version.id === selectedId) ?? curriculumVitae[0];

  return (
    <div className={styles.preview}>
      <div className={styles.versionPicker} role="group" aria-label="Choose a CV version">
        {curriculumVitae.map((version) => (
          <button
            key={version.id}
            type="button"
            aria-pressed={selectedId === version.id}
            aria-controls={`${panelId}-${version.id}`}
            onClick={() => setSelectedId(version.id)}
            className={styles.versionButton}
          >
            {version.label}
          </button>
        ))}
      </div>
      <p className={styles.description} aria-live="polite" aria-atomic="true">
        {selectedVersion.description}
      </p>
      <div className={styles.documents}>
        {curriculumVitae.map((version) => (
          <figure
            key={version.id}
            id={`${panelId}-${version.id}`}
            className={styles.version}
            data-active={selectedId === version.id}
            aria-label={`${version.label} preview`}
            aria-hidden={selectedId !== version.id}
            inert={selectedId !== version.id}
          >
            <ol
              role="list"
              className={styles.pages}
              data-page-count={version.pages.length}
              aria-label={`All ${version.pages.length} pages of Ayomide Ajibola’s ${version.label.toLowerCase()}`}
            >
              {version.pages.map((page) => (
                <li key={page.number} className={styles.page}>
                  <a
                    href={`${version.documentHref}#page=${page.number}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View page ${page.number} of Ayomide Ajibola’s ${version.label.toLowerCase()} (PDF, opens in a new tab)`}
                    className={styles.pageLink}
                  >
                    <Image
                      src={page.src}
                      alt={`Page ${page.number} of Ayomide Ajibola’s ${version.label.toLowerCase()}`}
                      width={version.previewWidth}
                      height={version.previewHeight}
                      sizes={version.pages.length === 2
                        ? "(max-width: 639px) 42vw, (max-width: 1023px) 260px, 290px"
                        : page.number === 1
                          ? "(max-width: 639px) 58vw, (max-width: 1023px) 320px, 380px"
                          : "(max-width: 639px) 28vw, (max-width: 1023px) 160px, 190px"}
                      className={styles.paper}
                    />
                    <span className={styles.pageLabel} aria-hidden="true">
                      Page {page.number}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
            <figcaption className={styles.caption}>
              <span className={styles.name}>{version.pages.length} pages · PDF</span>
              <a
                href={version.documentHref}
                target="_blank"
                rel="noreferrer"
                aria-label={`${version.linkLabel} (PDF, opens in a new tab)`}
                className={styles.documentLink}
              >
                {version.linkLabel}
                <ArrowUpRight size={18} strokeWidth={1.4} aria-hidden="true" />
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
      <noscript>
        <a href="/documents/ayomide-ajibola-remote-cv.pdf" target="_blank" rel="noreferrer">
          View remote CV (PDF, opens in a new tab)
        </a>
      </noscript>
    </div>
  );
}
