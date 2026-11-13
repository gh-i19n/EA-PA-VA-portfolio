"use client";

import Autoplay from "embla-carousel-autoplay";
import { Plus } from "lucide-react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "~/components/primitives/carousel";
import styles from "./recommendation-folio.module.css";

type Recommendation = {
  id: string;
  organisation: string;
  quote: string;
  name: string;
  role: string;
  recommendation: {
    title: string;
    paragraphs: readonly string[];
    signOff?: string;
  };
};

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToMotionPreference(onChange: () => void) {
  const query = window.matchMedia(reducedMotionQuery);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function prefersReducedMotion() {
  return window.matchMedia(reducedMotionQuery).matches;
}

function RecommendationLetter({ item }: { item: Recommendation }) {
  const [opening, ...continuation] = item.recommendation.paragraphs;

  return (
    <div className={styles.letterStack}>
      <article className={styles.letter} aria-label={`Recommendation from ${item.organisation}`}>
        <header className={styles.letterHeader}>
          <p className={styles.letterOrganisation}>{item.organisation}</p>
        </header>
        <h3 className={styles.letterTitle}>{item.recommendation.title}</h3>
        <blockquote className={styles.letterBody}>
          <p>{opening ?? item.quote}</p>
        </blockquote>
        {continuation.length > 0 && (
          <details className={styles.disclosure}>
            <summary className={styles.readMore}>
              <span>
                <span className={styles.whenClosed}>Read full recommendation</span>
                <span className={styles.whenOpen}>Close full recommendation</span>
                <span className="sr-only"> from {item.organisation}</span>
              </span>
              <Plus aria-hidden="true" size={18} strokeWidth={1.4} className={styles.expandIcon} />
            </summary>
            <div className={styles.continuation}>
              <blockquote className={styles.letterBody}>
                {continuation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </blockquote>
              {item.recommendation.signOff && (
                <p className={styles.signOff}>{item.recommendation.signOff}</p>
              )}
            </div>
          </details>
        )}
        <footer className={styles.letterAttribution}>
          <p>{item.name}</p>
          <p>{item.role}</p>
        </footer>
      </article>
    </div>
  );
}

/** Rotating recommendations that pause while readers interact with a quote or letter. */
export function RecommendationFolio({ items }: { items: readonly Recommendation[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [autoplay] = useState(() => Autoplay({
    delay: 3000,
    playOnInit: false,
    stopOnInteraction: true,
    stopOnFocusIn: false,
  }));
  const [isPlaying, setIsPlaying] = useState(false);
  const reducedMotion = useSyncExternalStore(subscribeToMotionPreference, prefersReducedMotion, () => true);
  const rotationEnabled = !reducedMotion;
  const controls = useRef<HTMLDivElement>(null);
  const activeIndex = Math.min(selectedIndex, Math.max(0, items.length - 1));

  useEffect(() => {
    if (!api) return;

    const viewport = api.rootNode();
    const resize = () => {
      const slide = api.slideNodes()[api.selectedScrollSnap()];
      if (slide) {
        viewport.style.setProperty("--recommendation-height", `${slide.getBoundingClientRect().height}px`);
      }
    };
    const select = () => {
      const index = api.selectedScrollSnap();
      const focusedSlide = api.slideNodes().find((slide) => slide.contains(document.activeElement));
      if (focusedSlide && focusedSlide !== api.slideNodes()[index]) {
        controls.current?.querySelector("button")?.focus({ preventScroll: true });
      }
      setSelectedIndex(index);
      resize();
    };

    // Fit the selected letter, including its expanded text, without an inner scrollbar.
    const observer = new ResizeObserver(resize);
    api.slideNodes().forEach((slide) => observer.observe(slide));
    api.on("select", select);
    api.on("reInit", select);
    const frame = requestAnimationFrame(select);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      api.off("select", select);
      api.off("reInit", select);
      viewport.style.removeProperty("--recommendation-height");
    };
  }, [api, items]);

  useEffect(() => {
    if (!api || items.length < 2) return;
    const carousel = api.rootNode().closest<HTMLElement>('[data-slot="carousel"]');
    if (!carousel) return;

    let hovered = window.matchMedia("(hover: hover)").matches && carousel.matches(":hover");
    let dragging = false;
    let disposed = false;

    const synchronize = () => {
      if (disposed) return;
      const focused = carousel.contains(document.activeElement);
      const reading = api.slideNodes()[api.selectedScrollSnap()]?.querySelector("details[open]");
      const canRotate = rotationEnabled && !hovered && !dragging && !focused && !reading && !document.hidden;
      if (canRotate) {
        if (!autoplay.isPlaying()) autoplay.play();
      } else {
        autoplay.stop();
      }
    };
    const synchronizeAfterEvent = () => queueMicrotask(synchronize);
    const enter = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      hovered = true;
      synchronize();
    };
    const leave = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      hovered = false;
      synchronize();
    };
    const dragStart = () => { dragging = true; synchronize(); };
    const dragEnd = () => { dragging = false; synchronize(); };
    const select = () => { autoplay.reset(); synchronize(); };
    const play = () => setIsPlaying(true);
    const stop = () => setIsPlaying(false);

    carousel.addEventListener("pointerenter", enter);
    carousel.addEventListener("pointerleave", leave);
    carousel.addEventListener("focusin", synchronize);
    carousel.addEventListener("focusout", synchronizeAfterEvent);
    carousel.addEventListener("toggle", synchronizeAfterEvent, true);
    document.addEventListener("visibilitychange", synchronize);
    api.on("pointerDown", dragStart);
    api.on("pointerUp", dragEnd);
    api.on("select", select);
    api.on("reInit", synchronize);
    api.on("autoplay:play", play);
    api.on("autoplay:stop", stop);
    // Recheck every restart, including restarts after the browser tab becomes visible.
    api.on("autoplay:timerset", synchronizeAfterEvent);
    const frame = requestAnimationFrame(synchronize);

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      autoplay.stop();
      carousel.removeEventListener("pointerenter", enter);
      carousel.removeEventListener("pointerleave", leave);
      carousel.removeEventListener("focusin", synchronize);
      carousel.removeEventListener("focusout", synchronizeAfterEvent);
      carousel.removeEventListener("toggle", synchronizeAfterEvent, true);
      document.removeEventListener("visibilitychange", synchronize);
      api.off("pointerDown", dragStart);
      api.off("pointerUp", dragEnd);
      api.off("select", select);
      api.off("reInit", synchronize);
      api.off("autoplay:play", play);
      api.off("autoplay:stop", stop);
      api.off("autoplay:timerset", synchronizeAfterEvent);
    };
  }, [api, autoplay, items.length, rotationEnabled]);

  if (items.length === 0) return null;

  return (
    <Carousel
      setApi={setApi}
      plugins={[autoplay]}
      opts={{
        align: "start",
        loop: items.length > 1,
        breakpoints: { "(prefers-reduced-motion: reduce)": { duration: 0 } },
      }}
      aria-label="Professional recommendations"
      className={styles.folio}
    >
      <p className="sr-only" role="status" aria-live={isPlaying ? "off" : "polite"} aria-atomic="true">
        Recommendation from {items[activeIndex].organisation}
      </p>
      <CarouselContent className={styles.slides}>
        {items.map((item, index) => (
          <CarouselItem
            key={item.id}
            aria-label={`Recommendation from ${item.organisation}`}
            aria-hidden={index !== activeIndex}
            inert={index !== activeIndex}
            className={styles.panel}
          >
            <div className={styles.layout}>
              <figure className={styles.quote}>
                <span className={styles.quoteMark} aria-hidden="true">“</span>
                <blockquote className={styles.quoteText}>
                  <p>{item.quote}</p>
                </blockquote>
                <figcaption className={styles.attribution}>
                  <span className={styles.author}>{item.name}</span>
                  <span className={styles.role}>{item.role}</span>
                </figcaption>
              </figure>
              <RecommendationLetter item={item} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {items.length > 1 && (
        <div ref={controls} className={styles.controls}>
          <CarouselPrevious size="icon-lg" aria-label="Previous recommendation" className={styles.arrow} />
          <CarouselNext size="icon-lg" aria-label="Next recommendation" className={styles.arrow} />
        </div>
      )}
    </Carousel>
  );
}
