"use client";

import Image from "next/image";
import { useRef, useState, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "~/config/motion";
import { cn } from "~/shared/ui/utils";

gsap.registerPlugin(useGSAP);

const poolSize = 4;
const spawnDistance = 86;
const spawnInterval = 90;
const hoverMotionQuery =
  "(min-width: 768px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

/** A bounded, decorative photo trail. Content and links retain their native behaviour. */
export function PointerImageTrail({
  children,
  images,
  className,
}: {
  children: ReactNode;
  images: readonly string[];
  className?: string;
}) {
  const scope = useRef<HTMLDivElement>(null);
  const [loadImages, setLoadImages] = useState(false);

  useGSAP(
    () => {
      const root = scope.current;
      if (!root || images.length === 0) return;

      const media = gsap.matchMedia();
      media.add(hoverMotionQuery, () => {
        const cards = Array.from(
          root.querySelectorAll<HTMLDivElement>("[data-trail-card]"),
        );
        let bounds: DOMRect | null = null;
        let point = { x: 0, y: 0 };
        let lastPoint: typeof point | null = null;
        let frame: number | null = null;
        let lastSpawn = 0;
        let nextSlot = 0;
        let layer = 0;
        let isNearViewport = false;

        gsap.set(cards, { xPercent: -50, yPercent: -50, autoAlpha: 0 });

        // Each card owns one reusable timeline; pointer movement creates no tweens.
        const slots = cards.map((card) => {
          const slot = {
            card,
            x: 0,
            y: 0,
            fromX: 0,
            fromY: 0,
            driftX: 0,
            driftY: 0,
            tilt: 0,
            timeline: gsap.timeline({
              paused: true,
              onStart: () => {
                card.style.willChange = "transform, opacity";
              },
              onComplete: () => {
                card.style.willChange = "";
              },
            }),
          };

          slot.timeline
            .fromTo(
              card,
              {
                x: () => slot.fromX,
                y: () => slot.fromY,
                rotation: () => slot.tilt - 3,
                scale: 0.82,
                autoAlpha: 0,
              },
              {
                x: () => slot.x,
                y: () => slot.y,
                rotation: () => slot.tilt,
                scale: 1,
                autoAlpha: 1,
                duration: 0.32,
                ease: motion.headlineEase,
                immediateRender: false,
              },
              0,
            )
            .to(
              card,
              {
                x: () => slot.x + slot.driftX,
                y: () => slot.y + slot.driftY,
                rotation: () => slot.tilt + slot.driftX * 0.04,
                duration: 0.46,
                ease: "power2.out",
              },
              0.32,
            )
            .to(
              card,
              { autoAlpha: 0, scale: 0.86, duration: 0.45, ease: "power2.in" },
              1.5,
            );

          return slot;
        });

        const endInteraction = () => {
          if (frame !== null) cancelAnimationFrame(frame);
          frame = null;
          lastPoint = null;
        };

        const reset = () => {
          endInteraction();
          bounds = null;
          layer = 0;
          for (const { card, timeline } of slots) {
            timeline.pause();
            card.style.opacity = "0";
            card.style.visibility = "hidden";
            card.style.willChange = "";
          }
        };

        const showNextImage = (now: number) => {
          frame = null;
          if (!isNearViewport || document.hidden) return;
          bounds ??= root.getBoundingClientRect();

          const x = point.x - bounds.left;
          const y = point.y - bounds.top;
          const dx = lastPoint ? x - lastPoint.x : 0;
          const dy = lastPoint ? y - lastPoint.y : 0;

          if (
            lastPoint &&
            (dx * dx + dy * dy < spawnDistance * spawnDistance ||
              now - lastSpawn < spawnInterval)
          ) {
            return;
          }

          // Skip failed or unfinished images so the trail never shows empty frames.
          for (let attempt = 0; attempt < slots.length; attempt++) {
            const slot = slots[nextSlot];
            nextSlot = (nextSlot + 1) % slots.length;
            const image = slot.card.querySelector("img");
            if (!image?.complete || image.naturalWidth === 0) continue;

            slot.x = x;
            slot.y = y;
            slot.fromX = slot.x - gsap.utils.clamp(-22, 22, dx * 0.16);
            slot.fromY = slot.y - gsap.utils.clamp(-18, 18, dy * 0.16);
            slot.driftX = gsap.utils.clamp(-18, 18, dx * 0.13);
            slot.driftY = gsap.utils.clamp(-12, 12, dy * 0.13) + 10;
            slot.tilt = gsap.utils.clamp(-8, 8, dx * 0.045);
            slot.card.style.zIndex = String(++layer);
            slot.timeline.invalidate().restart();
            lastPoint = { x, y };
            lastSpawn = now;
            break;
          }
        };

        const onPointerMove = (event: PointerEvent) => {
          if (event.pointerType === "touch" || event.buttons !== 0) return;
          point = { x: event.clientX, y: event.clientY };
          // Schedule a single frame per movement burst, with no idle render loop.
          if (frame === null) frame = requestAnimationFrame(showNextImage);
        };

        const observer = new IntersectionObserver(
          ([entry]) => {
            isNearViewport = entry.isIntersecting;
            if (isNearViewport) setLoadImages(true);
            else reset();
          },
          { rootMargin: "180px 0px" },
        );
        const resize = new ResizeObserver(reset);
        observer.observe(root);
        resize.observe(root);
        root.dataset.trailEnabled = "true";
        root.addEventListener("pointermove", onPointerMove, { passive: true });
        root.addEventListener("pointerleave", reset);
        root.addEventListener("pointercancel", reset);
        root.addEventListener("pointerdown", reset);
        root.addEventListener("focusin", reset);
        window.addEventListener("scroll", reset, { passive: true });
        window.addEventListener("blur", reset);
        document.addEventListener("visibilitychange", reset);

        return () => {
          reset();
          observer.disconnect();
          resize.disconnect();
          delete root.dataset.trailEnabled;
          root.removeEventListener("pointermove", onPointerMove);
          root.removeEventListener("pointerleave", reset);
          root.removeEventListener("pointercancel", reset);
          root.removeEventListener("pointerdown", reset);
          root.removeEventListener("focusin", reset);
          window.removeEventListener("scroll", reset);
          window.removeEventListener("blur", reset);
          document.removeEventListener("visibilitychange", reset);
        };
      });

      return () => media.revert();
    },
    { scope, dependencies: [images], revertOnUpdate: true },
  );

  return (
    <div
      ref={scope}
      className={cn("relative", className)}
      data-pointer-image-trail
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 z-[80] overflow-visible"
        aria-hidden="true"
      >
        {images.length > 0 &&
          Array.from({ length: poolSize }, (_, index) => (
            <div
              key={index}
              data-trail-card
              className="invisible absolute left-0 top-0 aspect-[4/3] w-[clamp(175px,15vw,220px)] overflow-hidden rounded-document bg-mist opacity-0 shadow-lg shadow-ink/15"
            >
              {loadImages && (
                <Image
                  src={images[index % images.length]}
                  alt=""
                  fill
                  sizes="220px"
                  loading="eager"
                  className="object-cover"
                />
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
