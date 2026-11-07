"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore, type FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "~/config/motion";
import { FormFields } from "./form-fields";
import { TextField } from "./text-field";
import { TextAreaField } from "./text-area-field";
import { SelectField } from "./select-field";

type EmailEnquiryProps = { recipient: string; topics: readonly string[] };
type EnquiryField = "name" | "email" | "topic" | "message";
type FieldErrors = Partial<Record<EnquiryField, string>>;
type ApiResponse = { message?: string };

const subscribeToHydration = () => () => {};
const clientReady = () => true;
const serverReady = () => false;

gsap.registerPlugin(useGSAP);

export function EmailEnquiry({ recipient, topics }: EmailEnquiryProps) {
  const id = useId();
  const ready = useSyncExternalStore(subscribeToHydration, clientReady, serverReady);
  const scope = useRef<HTMLDivElement>(null);
  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const topicInput = useRef<HTMLButtonElement>(null);
  const messageInput = useRef<HTMLTextAreaElement>(null);
  const successMessage = useRef<HTMLParagraphElement>(null);
  const returningToForm = useRef(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  useEffect(() => {
    if (status === "sent") successMessage.current?.focus();
    else if (returningToForm.current) {
      nameInput.current?.focus();
      returningToForm.current = false;
    }
  }, [status]);

  useGSAP(
    () => {
      if (status !== "sent") return;
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-enquiry-success]", {
          opacity: 0,
          x: 18,
          duration: motion.document,
          ease: motion.ease,
        });
      });
      return () => media.revert();
    },
    { scope, dependencies: [status], revertOnUpdate: true },
  );

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status !== "idle") return;

    const form = event.currentTarget;
    const data = new FormData(form);
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

    setError("");
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          topic,
          message,
          website: String(data.get("website") ?? ""),
        }),
      });
      const result = await response.json().catch(() => null) as ApiResponse | null;
      if (!response.ok) {
        throw new Error(result?.message || "We couldn't send your request just now.");
      }
      setStatus("sent");
    } catch (cause) {
      setStatus("idle");
      setError(
        cause instanceof Error
          ? cause.message
          : "We couldn't send your request just now. Please try again.",
      );
    }
  }

  function clearFieldError(field: EnquiryField) {
    setFieldErrors((previous) => {
      if (!previous[field]) return previous;
      const next = { ...previous };
      delete next[field];
      return next;
    });
  }

  function prepareAnotherRequest() {
    returningToForm.current = true;
    setStatus("idle");
    setError("");
  }

  return (
    <div
      ref={scope}
      className="min-w-0 rounded-panel bg-mist p-[45px] max-[800px]:p-8 max-[600px]:px-[22px] max-[600px]:py-7"
    >
      <noscript>
        <p className="mb-6 text-body">
          You can write directly to{" "}
          <a className="underline underline-offset-4" href={`mailto:${recipient}`}>
            {recipient}
          </a>
          .
        </p>
      </noscript>
      <form
        action={`mailto:${recipient}`}
        method="post"
        encType="text/plain"
        onSubmit={submit}
        noValidate
        aria-busy={status === "sending"}
      >
        <h2 id={`${id}-heading`} className="mb-[35px] mt-0 font-display text-[42px] font-normal leading-[1.15] tracking-[-.03em] max-[600px]:text-[34px]">
          Service request form
        </h2>
        <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
          <TextField
            id={`${id}-website`}
            label="Leave this field empty"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
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
            label="What kind of service?"
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
            label="Describe what you do"
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
          disabled={!ready || status !== "idle"}
        >
          <span className="min-w-0 [overflow-wrap:anywhere]">
            {status === "sending" ? "Sending service request" : "Send service request"}
          </span>
          {status === "sent" ? (
            <Check className="shrink-0" size={18} aria-hidden="true" />
          ) : (
            <ArrowUpRight className="shrink-0" size={18} aria-hidden="true" />
          )}
        </button>
        <p className="mb-0 mt-[18px] max-w-[370px] text-label text-muted">
          Let&apos;s make work easier, together.
        </p>
        {status === "sent" && (
          <div data-enquiry-success className="mt-5" aria-live="polite">
            <p
              ref={successMessage}
              className="mb-2 text-body text-ink"
              role="status"
              tabIndex={-1}
            >
              Your service request has been sent to AY.
            </p>
            <button
              className="min-h-11 border-0 bg-transparent p-0 text-label text-ink underline underline-offset-[5px]"
              type="button"
              onClick={prepareAnotherRequest}
            >
              Edit or send another request
            </button>
          </div>
        )}
        {error && (
          <p className="mt-[18px] text-label text-[#8c2934]" role="alert">
            {error}{" "}
            <a className="underline underline-offset-4" href={`mailto:${recipient}`}>
              Email AY directly.
            </a>
          </p>
        )}
      </form>
    </div>
  );
}
