import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { curriculumVitae } from "../config/credentials-content";
import styles from "./cv-preview.module.css";

export function CvPreview() {
  return (
    <figure className={styles.preview}>
      <ol role="list" className={styles.pages} aria-label="All three pages of AY’s CV">
        {curriculumVitae.pages.map((page) => (
          <li key={page.number} className={styles.page}>
            <a
              href={`${curriculumVitae.documentHref}#page=${page.number}`}
              target="_blank"
              rel="noreferrer"
              aria-label={`View page ${page.number} of AY’s CV (PDF, opens in a new tab)`}
              className={styles.pageLink}
            >
              <Image
                src={page.src}
                alt={`Page ${page.number} of Ayomide Ajibola’s executive assistant CV`}
                width={curriculumVitae.previewWidth}
                height={curriculumVitae.previewHeight}
                sizes={page.number === 1
                  ? "(max-width: 639px) 58vw, (max-width: 1023px) 320px, 350px"
                  : "(max-width: 639px) 28vw, (max-width: 1023px) 160px, 175px"}
                className={styles.paper}
              />
              <span className={styles.pageLabel} aria-hidden="true">Page {page.number}</span>
            </a>
          </li>
        ))}
      </ol>
      <figcaption className={styles.caption}>
        <span className={styles.name}>Ayomide Ajibola</span>
        <a
          href={curriculumVitae.documentHref}
          target="_blank"
          rel="noreferrer"
          aria-label="View AY’s complete three-page CV (PDF, opens in a new tab)"
          className={styles.documentLink}
        >
          View CV
          <ArrowUpRight size={18} strokeWidth={1.4} aria-hidden="true" />
        </a>
      </figcaption>
    </figure>
  );
}
