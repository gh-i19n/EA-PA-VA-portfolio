"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "~/config/motion";

type Draft = { text: string; href: string };
type EmailEnquiryProps = { recipient: string; topics: readonly string[] };

gsap.registerPlugin(useGSAP);

export function EmailEnquiry({ recipient, topics }: EmailEnquiryProps) {
  const scope = useRef<HTMLDivElement>(null);
  const [draft, setDraft] = useState<Draft | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const nameInput = useRef<HTMLInputElement>(null);
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
    if (!name || !message) {
      setError("Please add your name and a short introduction.");
      (!name ? nameInput.current : messageInput.current)?.focus();
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
      className="bg-mist p-[45px] max-[800px]:p-8 max-[600px]:px-[22px] max-[600px]:py-7"
    >
      <noscript>
        <p className="mb-6 text-sm leading-[1.8]">
          This form opens your email app. You can also write directly to{" "}
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
        hidden={draft !== null}
      >
        <h2 className="mb-[35px] mt-0 font-display text-[42px] font-normal leading-[1.15] tracking-[-.045em] max-[600px]:text-[34px]">
          Your introduction.
        </h2>
        <div className="grid grid-cols-2 gap-x-[25px] gap-y-7 max-[800px]:grid-cols-1">
          <label className="flex flex-col gap-3 text-xs">
            Your name
            <input
              className="w-full min-w-0 rounded-none border-0 border-b border-rule bg-transparent px-0 py-3 text-sm leading-[1.7] text-ink outline-offset-4 placeholder:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-ledger max-[600px]:text-base"
              ref={nameInput}
              name="name"
              autoComplete="name"
              required
              maxLength={100}
              placeholder="How should I address you?"
            />
          </label>
          <label className="flex flex-col gap-3 text-xs">
            Your email
            <input
              className="w-full min-w-0 rounded-none border-0 border-b border-rule bg-transparent px-0 py-3 text-sm leading-[1.7] text-ink outline-offset-4 placeholder:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-ledger max-[600px]:text-base"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              placeholder="you@company.com"
            />
          </label>
          <label className="col-span-full flex flex-col gap-3 text-xs">
            What kind of support?
            <select
              className="min-h-[50px] w-full min-w-0 rounded-none border-0 border-b border-rule bg-transparent px-0 py-3 text-sm leading-[1.7] text-ink outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ledger max-[600px]:text-base"
              name="topic"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select an area
              </option>
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </label>
          <label className="col-span-full flex flex-col gap-3 text-xs">
            A little about your world
            <textarea
              className="min-h-[130px] w-full min-w-0 resize-y rounded-none border-0 border-b border-rule bg-transparent px-0 py-3 text-sm leading-[1.7] text-ink outline-offset-4 placeholder:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-ledger max-[600px]:text-base"
              ref={messageInput}
              name="message"
              required
              rows={5}
              maxLength={1500}
              placeholder="What would you love to take off your plate?"
            />
          </label>
        </div>
        {error && (
          <p
            className="mt-[18px] text-xs leading-[1.8] text-[#8c2934]"
            role="alert"
          >
            {error}
          </p>
        )}
        <button
          className="mt-[30px] inline-flex min-h-12 items-center justify-between gap-[25px] rounded-full border border-ink bg-ink px-5 py-[14px] text-xs text-paper hover:bg-ledger motion-reduce:transition-none"
          type="submit"
        >
          Prepare an introduction
          <ArrowUpRight size={18} aria-hidden="true" />
        </button>
        <p className="mb-0 mt-[18px] max-w-[370px] text-[11px] leading-[1.8] text-muted">
          Review your introduction, then open it in your email app. Nothing is
          sent automatically.
        </p>
      </form>
      {draft && (
        <section data-enquiry-draft aria-labelledby="draft-title">
          <h2
            className="mb-5 mt-0 font-display text-[42px] font-normal leading-[1.15] tracking-[-.045em] max-[600px]:text-[34px]"
            id="draft-title"
            tabIndex={-1}
            ref={draftTitle}
          >
            Your introduction.
          </h2>
          <p className="mb-0 mt-0 max-w-[370px] text-[11px] leading-[1.8] text-muted">
            Nothing has been sent. Open the draft in your email app to review
            and send it.
          </p>
          <p className="mt-[25px] text-xs">To: {recipient}</p>
          <pre className="mb-0 mt-5 whitespace-pre-wrap bg-paper p-5 font-[inherit] text-sm leading-[1.8] [overflow-wrap:anywhere]">
            {draft.text}
          </pre>
          <div className="mt-[25px] flex flex-wrap items-center gap-5">
            <a
              className="inline-flex min-h-12 items-center justify-between gap-[25px] rounded-full border border-ink bg-ink px-5 py-[14px] text-xs text-paper hover:bg-ledger motion-reduce:transition-none"
              href={draft.href}
            >
              Open email draft
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <button
              className="inline-flex min-h-11 items-center gap-[9px] border-0 bg-transparent p-0 text-xs text-ink"
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
            className="mb-0 mt-[15px] min-h-4 text-[11px] text-muted"
            role="status"
          >
            {copied ? "Introduction copied." : ""}
          </p>
          {error && (
            <p
              className="mt-[18px] text-xs leading-[1.8] text-[#8c2934]"
              role="alert"
            >
              {error}
            </p>
          )}
          <button
            className="min-h-11 border-0 bg-transparent p-0 text-xs text-ink underline underline-offset-[5px]"
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
