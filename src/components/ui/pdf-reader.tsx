"use client";

import dynamic from "next/dynamic";
import { Component, type ReactNode } from "react";
import type { GalleryDocument } from "~/shared/types/gallery-media";

export type PdfReaderProps = {
  document: GalleryDocument;
  page: number;
  onPageChange: (page: number) => void;
  expanded?: boolean;
};

const PdfReaderView = dynamic(() => import("./pdf-reader-view").then((module) => module.PdfReaderView), {
  ssr: false,
  loading: () => <p role="status" className="grid min-h-80 place-items-center p-6 text-support text-muted">Loading document reader…</p>,
});

class ReaderBoundary extends Component<{ children: ReactNode; src: string }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (this.state.failed) return <div role="status" className="grid min-h-60 place-content-center gap-4 p-6 text-center text-support"><p>The document reader couldn’t start.</p><a href={this.props.src} target="_blank" rel="noreferrer" className="underline underline-offset-4">Open the original PDF in a new tab</a></div>;
    return this.props.children;
  }
}

/** PDF.js loads only when a document is selected and stays out of server rendering. */
export function PdfReader(props: PdfReaderProps) {
  return <ReaderBoundary key={props.document.src} src={props.document.src}><PdfReaderView {...props} /></ReaderBoundary>;
}
