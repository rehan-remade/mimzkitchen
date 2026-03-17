"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollHint() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <motion.div
      style={{ opacity }}
      className="flex flex-col items-center py-6"
    >
      <span className="font-sans text-[0.75rem] uppercase tracking-[0.3em] text-gold/70 mb-2">
        scroll
      </span>
      <span className="block w-px h-6 bg-gold/40 animate-scroll-pulse" />
    </motion.div>
  );
}
