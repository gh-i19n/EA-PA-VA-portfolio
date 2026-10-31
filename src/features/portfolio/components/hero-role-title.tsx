"use client";

import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "~/config/motion";

const roles = ["Executive", "Virtual", "Personal"] as const;

gsap.registerPlugin(useGSAP);

export function HeroRoleTitle({ id }: { id: string }) {
  const scope = useRef<HTMLDivElement>(null);
  const role = useRef<HTMLSpanElement>(null);
  const assistant = useRef<HTMLSpanElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const roleIndex = useRef(0);
  const [isPaused, setIsPaused] = useState(false);
  const [canRotate, setCanRotate] = useState(false);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const roleElement = role.current;
        const assistantElement = assistant.current;
        if (!roleElement || !assistantElement) return;

        setCanRotate(true);
        setIsPaused(false);

        gsap.from([roleElement, assistantElement], {
          yPercent: 105,
          autoAlpha: 0,
          duration: motion.entrance,
          stagger: 0.08,
          ease: motion.headlineEase,
        });

        const rotation = gsap.timeline({
          delay: 3,
          repeat: -1,
          repeatDelay: 2.25,
        });

        rotation
          .to(roleElement, {
            yPercent: -115,
            autoAlpha: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
              roleIndex.current = (roleIndex.current + 1) % roles.length;
              roleElement.textContent = roles[roleIndex.current];
              gsap.set(roleElement, { yPercent: 115 });
            },
          })
          .fromTo(
            roleElement,
            { yPercent: 115, autoAlpha: 0 },
            {
              yPercent: 0,
              autoAlpha: 1,
              duration: 0.45,
              ease: motion.headlineEase,
              immediateRender: false,
            },
          );

        timeline.current = rotation;
        return () => {
          timeline.current = null;
        };
      });

      media.add(motion.reducedMotion, () => {
        setCanRotate(false);
        timeline.current = null;
      });

      return () => media.revert();
    },
    { scope },
  );

  function toggleRotation() {
    const currentTimeline = timeline.current;
    if (!currentTimeline) return;

    if (isPaused) {
      currentTimeline.resume();
      setIsPaused(false);
    } else {
      currentTimeline.pause();
      setIsPaused(true);
    }
  }

  return (
    <div
      ref={scope}
      className="relative mb-2 ml-auto w-fit max-w-full text-right sm:mb-0"
    >
      <h1
        id={id}
        aria-label="Executive assistant, virtual assistant, and personal assistant"
        className="font-display font-medium leading-[.96] tracking-[-.045em]"
      >
        <span className="flex items-center justify-end gap-3 pb-[.08em]">
          <span
            className="block shrink-0 overflow-hidden text-[clamp(42px,7vw,104px)] text-mustard max-sm:text-[clamp(34px,8vw,42px)]"
            aria-hidden="true"
          >
            <span ref={role} className="inline-block whitespace-nowrap">
              Executive
            </span>
          </span>
          {canRotate && (
            <button
              type="button"
              aria-label={isPaused ? "Resume role rotation" : "Pause role rotation"}
              aria-controls={id}
              aria-pressed={isPaused}
              onClick={toggleRotation}
              className="grid size-9 shrink-0 place-items-center rounded-full border border-mustard/60 text-mustard transition-colors hover:bg-mustard hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mustard motion-reduce:hidden"
            >
              {isPaused ? (
                <Play size={14} fill="currentColor" aria-hidden="true" />
              ) : (
                <Pause size={14} fill="currentColor" aria-hidden="true" />
              )}
            </button>
          )}
        </span>
        <span
          className="block overflow-hidden pb-[.08em] text-[clamp(60px,11.5vw,172px)] max-sm:text-[clamp(48px,12vw,60px)]"
          aria-hidden="true"
        >
          <span ref={assistant} className="inline-block whitespace-nowrap">
            Assistant.
          </span>
        </span>
      </h1>
    </div>
  );
}
