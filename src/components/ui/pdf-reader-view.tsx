"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ChevronLeft, ChevronRight, Minus, Plus, RotateCcw } from "lucide-react";
import { Input } from "~/components/primitives/input";
import type { PdfReaderProps } from "./pdf-reader";
import { cn } from "~/shared/ui/utils";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import styles from "./pdf-reader.module.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();
const documentOptions = { isEvalSupported: false };

export function PdfReaderView({ document, page, onPageChange, expanded = false }: PdfReaderProps) {
  const [numPages, setNumPages] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [width, setWidth] = useState(0);
  const [draft, setDraft] = useState<string | null>(null);
  const [failed, setFailed] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);
  const viewport = useRef<HTMLDivElement>(null);
  const id = useId();
  const current = Math.max(1, Math.min(page, numPages || page));

  useEffect(() => {
    const element = viewport.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => {
      if (entry) setWidth(Math.max(160, Math.floor(entry.contentRect.width - 32)));
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    viewport.current?.scrollTo({ top: 0, left: 0 });
  }, [current]);

  function goToPage(next: number) {
    const bounded = Number.isFinite(next) ? Math.max(1, Math.min(Math.trunc(next), numPages || 1)) : current;
    setDraft(null);
    onPageChange(bounded);
  }

  function commitPage() {
    const value = draft ?? String(current);
    goToPage(/^\d+$/.test(value.trim()) ? Number(value) : current);
  }

  function retry() {
    setFailed(null);
    setNumPages(0);
    setAttempt((value) => value + 1);
  }

  return (
    <div className={styles.reader}>
      <div aria-label="Document controls" className={styles.toolbar}>
        <div className={styles.pagination}>
          <button type="button" aria-label="Previous PDF page" disabled={!numPages || current === 1 || Boolean(failed)} onClick={() => goToPage(current - 1)} className={styles.control}><ChevronLeft size={13} aria-hidden="true" /></button>
          <div className={styles.pageField}>
            <label htmlFor={`${id}-page`} className="sr-only">PDF page</label>
            <Input
              id={`${id}-page`}
              className={styles.pageInput}
              type="text"
              inputMode="numeric"
              disabled={!numPages || Boolean(failed)}
              value={draft ?? String(current)}
              aria-label={`PDF page, ${numPages || document.pageCount || "unknown"} pages in total`}
              onChange={(event) => setDraft(event.target.value)}
              onBlur={commitPage}
              onKeyDown={(event) => {
                if (event.key === "Enter") { event.preventDefault(); commitPage(); }
              }}
            />
          </div>
          <span aria-hidden="true" className="tabular-nums">/ {numPages || document.pageCount || "…"}</span>
          <button type="button" aria-label="Next PDF page" disabled={!numPages || current >= numPages || Boolean(failed)} onClick={() => goToPage(current + 1)} className={styles.control}><ChevronRight size={13} aria-hidden="true" /></button>
        </div>
        <div className={styles.zoom}>
          <button type="button" aria-label="Zoom out" disabled={!numPages || zoom <= 0.75 || Boolean(failed)} onClick={() => setZoom((value) => Math.max(0.75, value - 0.25))} className={styles.control}><Minus size={13} aria-hidden="true" /></button>
          <span className={styles.zoomValue}>{Math.round(zoom * 100)}%</span>
          <button type="button" aria-label="Zoom in" disabled={!numPages || zoom >= 2 || Boolean(failed)} onClick={() => setZoom((value) => Math.min(2, value + 0.25))} className={styles.control}><Plus size={13} aria-hidden="true" /></button>
          <button type="button" onClick={() => setZoom(1)} disabled={!numPages || zoom === 1 || Boolean(failed)} className={styles.fitControl}>Fit width</button>
        </div>
      </div>
      {document.sections?.length ? (
        <nav aria-label="PDF sections" className={styles.sections}>
          <ol className={styles.sectionList}>
            {document.sections.map((section) => (
              <li key={`${section.page}-${section.title}`}>
                <button type="button" disabled={!numPages || Boolean(failed)} onClick={() => goToPage(section.page)} aria-label={`${section.title}, page ${section.page}`} className={styles.sectionLink}>{section.title}</button>
              </li>
            ))}
          </ol>
        </nav>
      ) : null}
      <div
        ref={viewport}
        tabIndex={0}
        role="region"
        aria-label={`${document.caption}, PDF page ${current}`}
        className={cn(styles.viewport, expanded && styles.expanded)}
        onKeyDown={(event) => {
          if (!numPages || failed || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.target !== event.currentTarget) return;
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            goToPage(current + (event.key === "ArrowLeft" ? -1 : 1));
          }
        }}
      >
        {failed ? (
          <div role="status" className={styles.message}>
            <p>{failed}</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button type="button" onClick={retry} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-rule px-4 text-label"><RotateCcw size={15} aria-hidden="true" />Try again</button>
              <a href={document.src} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center text-label underline underline-offset-4">Open original PDF in a new tab</a>
            </div>
          </div>
        ) : (
          <div className={styles.sheet}>
            <Document
              key={attempt}
              file={document.src}
              options={documentOptions}
              externalLinkTarget="_blank"
              externalLinkRel="noopener noreferrer"
              onItemClick={({ pageNumber }) => { if (pageNumber) goToPage(pageNumber); }}
              loading={<p role="status" className={styles.message}>Loading PDF…</p>}
              onLoadSuccess={({ numPages: count }) => count > 0 ? setNumPages(count) : setFailed("This PDF has no pages to display.")}
              onLoadError={() => setFailed("This PDF couldn’t load. Try again or open the original document.")}
              onSourceError={() => setFailed("The PDF file is unavailable. Try again or open the original document.")}
              onPassword={() => setFailed("This PDF needs a password. Open the original document to read it.")}
            >
              {width > 0 && <Page
                key={`${current}-${zoom}-${width}`}
                pageNumber={current}
                width={Math.round(width * zoom)}
                devicePixelRatio={Math.min(globalThis.devicePixelRatio || 1, 2)}
                renderTextLayer
                renderAnnotationLayer
                renderForms={false}
                loading={<p role="status" className={styles.message}>Rendering page {current}…</p>}
                onRenderError={() => setFailed("This page couldn’t be displayed. Try again or open the original document.")}
                onLoadError={() => setFailed("This page couldn’t load. Try again or open the original document.")}
              />}
            </Document>
          </div>
        )}
      </div>
      <p role="status" aria-atomic="true" className="sr-only">{numPages && !failed ? `PDF page ${current} of ${numPages}, zoom ${Math.round(zoom * 100)} percent.` : ""}</p>
    </div>
  );
}
