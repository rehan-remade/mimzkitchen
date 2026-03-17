"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MediaSlot from "./MediaSlot";

type Slide = {
  shotId: string;
  label: string;
  ratio: "4:3";
  src?: string;
  alt?: string;
};

const slides: Slide[] = [
  {
    shotId: "01",
    label: "Fresh Out of the Oven",
    ratio: "4:3",
    src: "https://2tphzoqtq9aupm3q.public.blob.vercel-storage.com/images/Re4NFP7Rn-Z-amr0fbTsb_kIhH10CR.png",
    alt: "Overhead shot of six golden cinnamon rolls in a seasoned baking tin with steam rising",
  },
  {
    shotId: "02",
    label: "The whole cheesecake",
    ratio: "4:3",
    src: "https://2tphzoqtq9aupm3q.public.blob.vercel-storage.com/images/zQgQGqF8aoM2woNJYPKxw_LM8aYSHF.png",
    alt: "45-degree angle shot of a whole Basque burnt cheesecake on aged dark slate with deeply caramelised top",
  },
  {
    shotId: "03",
    label: "The morning spread",
    ratio: "4:3",
    src: "https://2tphzoqtq9aupm3q.public.blob.vercel-storage.com/images/wyMjoDbkrJZ1lZ0WJBflM_S4SvHLTH.png",
    alt: "Overhead flatlay of cinnamon rolls and Basque cheesecake on parchment paper with coffee and wildflowers in morning light",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advance = useCallback(
    (dir: 1 | -1 = 1) =>
      setCurrent((prev) => (prev + dir + slides.length) % slides.length),
    []
  );

  // Auto-advance every 5s, pause on hover
  useEffect(() => {
    if (paused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => advance(1), 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, advance]);

  return (
    <section className="pt-20 md:pt-24">
      {/* Hero container — auto on mobile, editorial 75vh on desktop */}
      <div className="relative md:h-[75vh] flex flex-col md:flex-row">
        {/* ─── LEFT COLUMN — Brand text panel ─── */}
        <div className="order-2 md:order-1 md:w-[35%] bg-parchment flex flex-col justify-center px-6 md:px-10 lg:px-14 py-8 md:py-0 relative z-10">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-3 md:mb-5">
            <span className="h-px w-8 bg-gold" />
            <span className="font-sans text-[0.75rem] uppercase tracking-[0.25em] text-gold font-medium">
              Rustic Homemade Treats
            </span>
            <span className="h-px w-8 bg-gold" />
          </div>

          {/* H1 */}
          <h1 className="font-display text-[2.4rem] md:text-[4.2rem] text-espresso leading-[1.1] mb-3 md:mb-4">
            Baked with love &amp; passion
          </h1>

          {/* Gold divider */}
          <div className="w-10 h-px bg-gold mb-4" />

          {/* Subtext */}
          <p className="font-serif italic text-[0.95rem] md:text-[1rem] text-espresso/70 max-w-[340px] mb-5 md:mb-7 leading-relaxed">
            Small-batch cinnamon rolls and Basque cheesecake, made from scratch
            each morning.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap gap-3 mb-5 md:mb-8">
            <Link
              href="/order"
              className="px-7 py-2.5 bg-oak text-cream text-[0.8rem] uppercase tracking-[0.2em] font-sans hover:bg-espresso transition-colors rounded-sm"
            >
              Order Today
            </Link>
          </div>

          {/* Carousel dots */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 bg-gold"
                    : "w-2 bg-gold/30 hover:bg-gold/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ─── Gold vertical divider ─── */}
        <div className="hidden md:block w-px bg-gold/25 relative z-10" />

        {/* ─── RIGHT COLUMN — Image carousel ─── */}
        <div
          className="order-1 md:order-2 md:flex-1 relative overflow-hidden h-[65vw] md:h-full group"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Slides — crossfade via AnimatePresence */}
          <AnimatePresence mode="sync">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }}
              exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeIn" } }}
              className="absolute inset-0"
            >
              {"src" in slides[current] && slides[current].src ? (
                <Image
                  src={slides[current].src}
                  alt={slides[current].alt ?? slides[current].label}
                  fill
                  quality={100}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 65vw"
                  priority={current === 0}
                />
              ) : (
                <MediaSlot
                  shotId={slides[current].shotId}
                  label={slides[current].label}
                  ratio={slides[current].ratio}
                  className="w-full h-full"
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Slide counter — top right */}
          <span className="absolute top-4 right-5 z-20 font-sans text-[0.7rem] tracking-[0.15em] text-cream/80 mix-blend-difference pointer-events-none">
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>

          {/* Arrow controls — visible on hover */}
          <button
            onClick={() => advance(-1)}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-cream/80"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={() => advance(1)}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-cream/80"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Mobile dots — below image on small screens */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 md:hidden z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 bg-gold"
                    : "w-2 bg-cream/50 hover:bg-cream/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
