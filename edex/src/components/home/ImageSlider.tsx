"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Slide {
  src: string;
  alt: string;
  /** Optional stamp-style headline shown over this specific slide (e.g. "KNOWLEDGE TALK MATTERS"). */
  caption?: string;
}

export function ImageSlider({
  slides,
  intervalMs = 5000,
  children,
}: {
  slides: Slide[];
  /** Time each slide stays on screen before auto-advancing. */
  intervalMs?: number;
  /** Optional overlay content (headline, CTAs) rendered on top of the slides. */
  children?: React.ReactNode;
}) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (i: number) => setIndex((i + slides.length) % slides.length),
    [slides.length]
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Always keeps running on its own — no pause-on-hover/touch, so it never
  // gets stuck (a common issue on mobile where a tap has no matching
  // "un-hover" event to resume autoplay).
  useEffect(() => {
    if (slides.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [intervalMs, slides.length]);

  return (
    <div className="relative h-[420px] w-full overflow-hidden sm:h-[480px] md:h-[850px]">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-in-out",
            i === index ? "opacity-100" : "pointer-events-none opacity-0"
          )}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="250vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Darkening overlay so text/overlays stay legible on any photo */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/20 to-ink-900/40" />

      {/* Per-slide caption — fades with its slide, like a stamp over the photo */}
      {slides.map((slide, i) =>
        slide.caption ? (
          <div
            key={`caption-${slide.src}`}
            className={cn(
              "pointer-events-none absolute inset-x-0 top-10 flex justify-center px-4 transition-opacity duration-700 ease-in-out sm:top-14",
              i === index ? "opacity-100" : "opacity-0"
            )}
            aria-hidden={i !== index}
          >
            <span className="text-center text-lg font-bold uppercase tracking-[0.35em] text-white/90 sm:text-2xl md:text-3xl">
              {slide.caption}
            </span>
          </div>
        ) : null
      )}

      {children && (
        <div className="absolute inset-0 flex items-center justify-center px-6">
          {children}
        </div>
      )}

      {slides.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-white/25"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-white/25"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === index ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}