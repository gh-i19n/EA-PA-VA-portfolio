"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import styles from "./email-enquiry.module.css";

type Draft = { text: string; href: string };
type EmailEnquiryProps = { recipient: string; topics: readonly string[] };

export function EmailEnquiry({ recipient, topics }: EmailEnquiryProps) {
  const [draft, setDraft] = useState<Draft | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const nameInput = useRef<HTMLInputElement>(null);
  const messageInput = useRef<HTMLTextAreaElement>(null);
  const draftTitle = useRef<HTMLHeadingElement>(null);

  useEffect(() => { if (draft) draftTitle.current?.focus(); }, [draft]);

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const topic = String(data.get("topic") ?? "");
    const message = String(data.get("message") ?? "").trim();
    if (!name || !message) {
      setError("Please add your name and a short introduction.");
      (!name ? nameInput.current : messageInput.current)?.focus();
      return;
    }
    const text = `Hello AY,\n\n${message}\n\nI'm interested in: ${topic}\n\n${name}\n${email}`;
    setError("");
    setCopied(false);
    setDraft({ text, href: `mailto:${recipient}?subject=${encodeURIComponent("An introduction: " + topic)}&body=${encodeURIComponent(text)}` });
  }

  async function copyDraft() {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(draft.text);
      setCopied(true);
      setError("");
    } catch {
      setCopied(false);
      setError("Copy is unavailable in this browser. You can select the introduction below and copy it manually.");
    }
  }

  function edit() {
    setDraft(null);
    setError("");
    setCopied(false);
    requestAnimationFrame(() => nameInput.current?.focus());
  }

  return (
    <div className={styles.composer}>
      <form onSubmit={prepare} hidden={draft !== null}>
        <h2>A good place to start.</h2>
        <div className={styles.fields}>
          <label>Your name<input ref={nameInput} name="name" autoComplete="name" required maxLength={100} placeholder="How should I address you?" /></label>
          <label>Your email<input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" /></label>
          <label className={styles.fullWidth}>What kind of support?<select name="topic" defaultValue="" required><option value="" disabled>Select an area</option>{topics.map((topic) => <option key={topic} value={topic}>{topic}</option>)}</select></label>
          <label className={styles.fullWidth}>A little about your world<textarea ref={messageInput} name="message" required rows={5} maxLength={1500} placeholder="What would you love to take off your plate?" /></label>
        </div>
        {error && <p className={styles.error} role="alert">{error}</p>}
        <button className={styles.prepareButton} type="submit">Prepare an introduction<ArrowUpRight size={18} aria-hidden="true" /></button>
        <p className={styles.note}>Review your introduction, then open it in your email app. Nothing is sent automatically.</p>
      </form>
      {draft && <section className={styles.draft} aria-labelledby="draft-title">
        <h2 id="draft-title" tabIndex={-1} ref={draftTitle}>Your introduction.</h2>
        <p className={styles.note}>Nothing has been sent. Open the draft in your email app to review and send it.</p>
        <p className={styles.recipient}>To: {recipient}</p>
        <pre>{draft.text}</pre>
        <div className={styles.draftActions}>
          <a className={styles.prepareButton} href={draft.href}>Open email draft<ArrowUpRight size={18} aria-hidden="true" /></a>
          <button className={styles.copyButton} type="button" onClick={copyDraft}>{copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}{copied ? "Copied" : "Copy introduction"}</button>
        </div>
        <p className={styles.copyStatus} role="status">{copied ? "Introduction copied." : ""}</p>
        {error && <p className={styles.error} role="alert">{error}</p>}
        <button className={styles.editButton} type="button" onClick={edit}>Edit details</button>
      </section>}
    </div>
  );
}
