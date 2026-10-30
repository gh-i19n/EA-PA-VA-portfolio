"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "~/config/motion";
import { FormFields } from "./form-fields";
import { TextField } from "./text-field";
import { TextAreaField } from "./text-area-field";
import { SelectField } from "./select-field";

type Draft = { text: string; href: string };
type EmailEnquiryProps = { recipient: string; topics: readonly string[] };
type EnquiryField = "name" | "email" | "topic" | "message";
type FieldErrors = Partial<Record<EnquiryField, string>>;

const subscribeToHydration = () => () => {};
const clientReady = () => true;
const serverReady = () => false;

gsap.registerPlugin(useGSAP);

export function EmailEnquiry({ recipient, topics }: EmailEnquiryProps) {
  const id = useId();
  const ready = useSyncExternalStore(subscribeToHydration, clientReady, serverReady);
  const scope = useRef<HTMLDivElement>(null);
  const [draft, setDraft] = useState<Draft | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const topicInput = useRef<HTMLButtonElement>(null);
  const messageInput = useRef<HTMLTextAreaElement>(null);
  const draftTitle = useRef<HTMLHeadingElement>(null);
  const returningToForm = useRef(false);

  useEffect(() => {
    if (draft) draftTitle.current?.focus();
    else if (returningToForm.current) {
      nameInput.current?.focus();
      returningToForm.current = false;
    }
  }, [draft]);

  useGSAP(
    () => {
      if (!draft) return;
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-enquiry-draft]", {
          opacity: 0,
          x: 18,
          duration: motion.document,
          ease: motion.ease,
        });
      });
      return () => media.revert();
    },
    { scope, dependencies: [draft], revertOnUpdate: true },
  );

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const topic = String(data.get("topic") ?? "");
    const message = String(data.get("message") ?? "").trim();
    const nextErrors: FieldErrors = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email || !emailInput.current?.validity.valid) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!topics.includes(topic)) nextErrors.topic = "Please choose an area of support.";
    if (!message) nextErrors.message = "Please add a short introduction.";
    setFieldErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      const firstInvalid = nextErrors.name ? nameInput.current
        : nextErrors.email ? emailInput.current
          : nextErrors.topic ? topicInput.current : messageInput.current;
      firstInvalid?.focus();
      return;
    }
    const text = `Hello AY,\n\n${message}\n\nI'm interested in: ${topic}\n\n${name}\n${email}`;
    setError("");
    setCopied(false);
    setDraft({
      text,
      href: `mailto:${recipient}?subject=${encodeURIComponent("An introduction: " + topic)}&body=${encodeURIComponent(text)}`,
    });
  }

  function clearFieldError(field: EnquiryField) {
    setFieldErrors((previous) => {
      if (!previous[field]) return previous;
      const next = { ...previous };
      delete next[field];
      return next;
    });
  }

  async function copyDraft() {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(draft.text);
      setCopied(true);
      setError("");
    } catch {
      setCopied(false);
      setError(
        "Copy is unavailable in this browser. You can select the introduction below and copy it manually.",
      );
    }
  }

  function edit() {
    returningToForm.current = true;
    setDraft(null);
    setError("");
    setCopied(false);
  }

  return (
    <div
      ref={scope}
      className="min-w-0 rounded-panel bg-mist p-[45px] max-[800px]:p-8 max-[600px]:px-[22px] max-[600px]:py-7"
    >
      <noscript>
        <p className="mb-6 text-body">
          You can write directly to{" "}
          <a
            className="underline underline-offset-4"
            href={`mailto:${recipient}`}
          >
            {recipient}
          </a>
          .
        </p>
      </noscript>
      <form
        action={`mailto:${recipient}`}
        method="post"
        encType="text/plain"
        onSubmit={prepare}
        noValidate
        hidden={draft !== null}
      >
        <h2 id={`${id}-heading`} className="mb-[35px] mt-0 font-display text-[42px] font-normal leading-[1.15] tracking-[-.03em] max-[600px]:text-[34px]">
          Your introduction.
        </h2>
        <FormFields labelledBy={`${id}-heading`}>
          <TextField
            id={`${id}-name`}
            label="Your name"
            ref={nameInput}
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="How should I address you?"
            error={fieldErrors.name}
            onChange={() => clearFieldError("name")}
          />
          <TextField
            id={`${id}-email`}
            label="Your email"
            ref={emailInput}
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="you@company.com"
            error={fieldErrors.email}
            onChange={() => clearFieldError("email")}
          />
          <SelectField
            id={`${id}-topic`}
            label="What kind of support?"
            ref={topicInput}
            name="topic"
            defaultValue=""
            required
            placeholder="Select an area"
            options={topics.map((topic) => ({ value: topic, label: topic }))}
            error={fieldErrors.topic}
            onValueChange={() => clearFieldError("topic")}
          />
          <TextAreaField
            id={`${id}-message`}
            label="A little about your world"
            ref={messageInput}
            name="message"
            required
            rows={5}
            maxLength={1500}
            placeholder="What would you love to take off your plate?"
            error={fieldErrors.message}
            onChange={() => clearFieldError("message")}
          />
        </FormFields>
        <button
          className="mt-[30px] inline-flex min-h-12 max-w-full items-center justify-between gap-[16px] rounded-full border border-ink bg-ink px-[20px] py-[14px] text-label text-paper hover:bg-ledger motion-reduce:transition-none"
          type="submit"
          disabled={!ready}
        >
          <span className="min-w-0 [overflow-wrap:anywhere]">Prepare an introduction</span>
          <ArrowUpRight className="shrink-0" size={18} aria-hidden="true" />
        </button>
        <p className="mb-0 mt-[18px] max-w-[370px] text-label text-muted">
          Review your introduction, then open it in your email app. Nothing is
          sent automatically.
        </p>
      </form>
      {draft && (
        <section data-enquiry-draft aria-labelledby={`${id}-draft-title`}>
          <h2
            className="mb-5 mt-0 font-display text-[42px] font-normal leading-[1.15] tracking-[-.03em] max-[600px]:text-[34px]"
            id={`${id}-draft-title`}
            tabIndex={-1}
            ref={draftTitle}
          >
            Your introduction.
          </h2>
          <p className="mb-0 mt-0 max-w-[370px] text-label text-muted">
            Nothing has been sent. Open the draft in your email app to review
            and send it.
          </p>
          <p className="mt-[25px] text-label">To: {recipient}</p>
          <pre className="mb-0 mt-5 whitespace-pre-wrap rounded-inset bg-paper p-5 font-[inherit] text-body [overflow-wrap:anywhere]">
            {draft.text}
          </pre>
          <div className="mt-[25px] flex flex-wrap items-center gap-5">
            <a
              className="inline-flex min-h-12 max-w-full items-center justify-between gap-[16px] rounded-full border border-ink bg-ink px-[20px] py-[14px] text-label text-paper hover:bg-ledger motion-reduce:transition-none"
              href={draft.href}
            >
              <span className="min-w-0 [overflow-wrap:anywhere]">Open email draft</span>
              <ArrowUpRight className="shrink-0" size={18} aria-hidden="true" />
            </a>
            <button
              className="inline-flex min-h-11 items-center gap-[9px] border-0 bg-transparent p-0 text-label text-ink"
              type="button"
              onClick={copyDraft}
            >
              {copied ? (
                <Check size={16} aria-hidden="true" />
              ) : (
                <Copy size={16} aria-hidden="true" />
              )}
              {copied ? "Copied" : "Copy introduction"}
            </button>
          </div>
          <p
            className="mb-0 mt-[15px] min-h-4 text-label text-muted"
            role="status"
          >
            {copied ? "Introduction copied." : ""}
          </p>
          {error && (
            <p
              className="mt-[18px] text-label text-[#8c2934]"
              role="alert"
            >
              {error}
            </p>
          )}
          <button
            className="min-h-11 border-0 bg-transparent p-0 text-label text-ink underline underline-offset-[5px]"
            type="button"
            onClick={edit}
          >
            Edit details
          </button>
        </section>
      )}
    </div>
  );
}
