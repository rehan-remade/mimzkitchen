"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 min-h-[calc(100vh-5rem)]">
        {/* Left column */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-16 md:py-0">
          {/* Eyebrow */}
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-4 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="font-sans text-[0.65rem] uppercase tracking-[0.25em] text-gold font-medium">
              Rustic Homemade Treats
            </span>
            <span className="h-px w-10 bg-gold" />
          </motion.div>

          {/* H1 */}
          <motion.h1
            {...fadeUp(0.25)}
            className="font-display text-5xl sm:text-6xl lg:text-[5.5rem] text-espresso leading-[1.1] mb-6"
          >
            Baked with love &amp; time
          </motion.h1>

          {/* Subheading */}
          <motion.p
            {...fadeUp(0.4)}
            className="font-serif italic text-lg md:text-xl text-espresso/60 max-w-[380px] mb-8 leading-relaxed"
          >
            Small-batch cinnamon buns and Basque cheesecakes, made from scratch
            each morning.
          </motion.p>

          {/* Gold divider */}
          <motion.div
            {...fadeUp(0.5)}
            className="w-16 h-px bg-gold mb-8"
          />

          {/* CTAs */}
          <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-4">
            <Link
              href="/order"
              className="px-8 py-3 bg-oak text-cream text-[0.72rem] uppercase tracking-[0.2em] font-sans hover:bg-espresso transition-colors rounded-sm"
            >
              Order Today
            </Link>
            <Link
              href="/menu"
              className="px-8 py-3 border border-gold text-oak text-[0.72rem] uppercase tracking-[0.2em] font-sans hover:bg-gold/10 transition-colors rounded-sm"
            >
              Our Menu
            </Link>
          </motion.div>
        </div>

        {/* Right column */}
        <div className="relative bg-parchment-dark flex items-center justify-center overflow-hidden">
          {/* Decorative circle frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-gold/30 flex items-center justify-center"
          >
            <div className="w-[calc(100%-2rem)] h-[calc(100%-2rem)] rounded-full border border-gold/20 flex items-center justify-center">
              {/* Whisk SVG */}
              <svg
                viewBox="0 0 100 140"
                className="w-24 h-32 md:w-32 md:h-44 text-oak/30"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <ellipse cx="50" cy="50" rx="20" ry="40" />
                <ellipse cx="50" cy="50" rx="12" ry="38" />
                <ellipse cx="50" cy="50" rx="4" ry="36" />
                <line x1="50" y1="90" x2="50" y2="135" strokeWidth="3" />
                <line x1="46" y1="90" x2="46" y2="130" strokeWidth="1" />
                <line x1="54" y1="90" x2="54" y2="130" strokeWidth="1" />
              </svg>
            </div>
          </motion.div>

          {/* Est. badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
            className="absolute top-8 right-8 md:top-16 md:right-16 w-20 h-20 md:w-24 md:h-24 rounded-full bg-oak text-cream flex flex-col items-center justify-center"
          >
            <span className="text-[0.5rem] md:text-[0.6rem] uppercase tracking-[0.15em] font-sans">
              Est. with
            </span>
            <span className="font-display text-lg md:text-xl">love</span>
            <span className="text-[0.55rem] md:text-[0.65rem] font-sans text-cream/70">
              2024
            </span>
          </motion.div>

          {/* Caption overlay */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute bottom-8 left-8 md:bottom-12 md:left-12 flex items-start gap-3"
          >
            <span className="w-0.5 h-10 bg-gold block mt-0.5" />
            <p className="font-serif italic text-sm text-espresso/50">
              Handmade
              <br />
              every morning
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
