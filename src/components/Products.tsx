"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MediaSlot from "./MediaSlot";

const ease = [0.25, 0.1, 0.25, 1] as const;

function ProductRow({
  eyebrow,
  name,
  description,
  ingredients,
  price,
  shotId,
  shotLabel,
  imageSrc,
  imageAlt,
  imageQuality = 100,
  flipped,
  bgClass,
}: {
  eyebrow: string;
  name: string;
  description: string;
  ingredients: string;
  price: string;
  shotId: string;
  shotLabel: string;
  imageSrc?: string;
  imageAlt?: string;
  imageQuality?: number;
  flipped?: boolean;
  bgClass: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const imgDir = flipped ? 40 : -40;
  const txtDir = flipped ? -40 : 40;

  return (
    <div
      ref={ref}
      className={`grid md:min-h-[520px] ${
        flipped ? "md:grid-cols-[40fr_60fr]" : "md:grid-cols-[60fr_40fr]"
      }`}
    >
      {/* Image pane */}
      <motion.div
        initial={{ opacity: 0, x: imgDir }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease }}
        className={`group relative overflow-hidden h-[55vw] md:h-auto ${
          flipped ? "order-first md:order-last" : ""
        }`}
      >
        <div className="absolute inset-0 md:transition-transform md:duration-700 md:ease-out md:group-hover:scale-[1.04]">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt ?? shotLabel}
              fill
              quality={imageQuality}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          ) : (
            <MediaSlot
              shotId={shotId}
              label={shotLabel}
              ratio="3:2"
              className="w-full h-full"
            />
          )}
        </div>
      </motion.div>

      {/* Text pane */}
      <motion.div
        initial={{ opacity: 0, x: txtDir }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease, delay: 0.15 }}
        className={`${bgClass} flex flex-col justify-center px-6 py-10 md:px-[4.5rem] md:py-16`}
      >
        <span className="font-sans text-[0.65rem] uppercase tracking-[0.25em] text-gold font-medium">
          {eyebrow}
        </span>
        <h3 className="font-display text-[2.4rem] md:text-[3.8rem] text-espresso leading-[1.1] mt-1">
          {name}
        </h3>
        <div className="w-9 h-px bg-gold my-3 md:mt-3 md:mb-6" />
        <p className="font-serif italic text-[1.05rem] text-[#6b4f30] leading-[1.85] max-w-md mb-4">
          {description}
        </p>
        <p className="font-sans text-[0.72rem] uppercase tracking-[0.1em] text-[#a08860] mb-9">
          {ingredients}
        </p>
        <span className="font-serif text-[1rem] text-gold mb-5">{price}</span>
        <Link
          href="/order"
          className="group/btn inline-flex items-center gap-2 w-fit px-7 py-3 bg-oak text-cream text-[0.72rem] uppercase tracking-[0.2em] font-sans hover:bg-espresso transition-colors rounded-sm"
        >
          Order yours
          <span className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1">
            &rarr;
          </span>
        </Link>
      </motion.div>
    </div>
  );
}

export default function Products() {
  return (
    <section className="pt-16 pb-14 md:pt-16 md:pb-14">
      {/* Section header */}
      <div className="text-center mb-14 px-6">
        <span className="font-sans text-[0.65rem] uppercase tracking-[0.25em] text-gold font-medium">
          What We Bake
        </span>
        <h2 className="font-display text-4xl md:text-5xl text-espresso mt-2 mb-4">
          Our Specialities
        </h2>
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-gold/40" />
          <svg
            viewBox="0 0 20 20"
            className="w-4 h-4 text-gold"
            fill="currentColor"
          >
            <path d="M10 2l2.5 5 5.5.8-4 3.9.9 5.5L10 14.7l-4.9 2.5.9-5.5-4-3.9 5.5-.8z" />
          </svg>
          <span className="h-px w-12 bg-gold/40" />
        </div>
      </div>

      {/* Row 1 — Cinnamon Buns (image left, text right) */}
      <ProductRow
        eyebrow="Our signature"
        name="Cinnamon Buns"
        description="Soft, swirled dough laced with Ceylon cinnamon and topped with a silky cream cheese glaze. Baked golden each morning."
        ingredients="Ceylon cinnamon · Brown butter · Cream cheese glaze"
        price="From £3.50"
        shotId="01"
        shotLabel="The golden pull"
        imageSrc="https://2tphzoqtq9aupm3q.public.blob.vercel-storage.com/images/cC5tvFDAhiJTuIm3Aa6N4_EWm6XC5X.png"
        imageAlt="Close-up of a glazed cinnamon bun with soft pillowy interior exposed on a ceramic plate"
        imageQuality={75}
        bgClass="bg-parchment"
      />

      {/* 1px divider */}
      <div className="h-px w-full bg-espresso/[0.12]" />

      {/* Row 2 — Basque Cheesecake (text left, image right) */}
      <ProductRow
        eyebrow="The showstopper"
        name="Basque Cheesecake"
        description="Caramelised and crackled on top, impossibly creamy within. A rustic, flourless recipe inspired by San Sebastián."
        ingredients="Full-fat cream cheese · Vanilla · Crème fraîche"
        price="From £5.50 · Whole from £32"
        shotId="02"
        shotLabel="The whole cheesecake"
        imageSrc="https://2tphzoqtq9aupm3q.public.blob.vercel-storage.com/images/ggLQR5whirgCeVyK3Fd8z_3wt1ympl.png"
        imageAlt="Basque cheesecake, dark caramelised crust with pale creamy interior"
        imageQuality={75}
        flipped
        bgClass="bg-parchment-dark"
      />
    </section>
  );
}
