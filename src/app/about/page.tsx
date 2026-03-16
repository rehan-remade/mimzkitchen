"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const values = [
  {
    title: "Small Batch",
    description:
      "We bake in small quantities so every item is fresh, warm, and made with full attention.",
  },
  {
    title: "Real Ingredients",
    description:
      "European butter, free-range eggs, pure vanilla, and Ceylon cinnamon. No shortcuts.",
  },
  {
    title: "Made by Hand",
    description:
      "Every bun is rolled, every cheesecake is poured by hand. There are no assembly lines here.",
  },
];

export default function AboutPage() {
  return (
    <section className="pt-28 md:pt-36 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-[0.65rem] uppercase tracking-[0.25em] text-gold font-medium">
            Who We Are
          </span>
          <h1 className="font-display text-5xl md:text-6xl text-espresso mt-2 mb-4">
            Our Story
          </h1>
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

        {/* Story */}
        <motion.div {...fadeUp(0.1)} className="max-w-2xl mx-auto mb-20">
          <p className="font-serif text-lg text-espresso/70 leading-relaxed mb-6">
            Mimz&apos;s Kitchen started with a simple craving: a perfect
            cinnamon bun. Not the mass-produced kind you find at the mall, but
            the soft, fragrant, pull-apart kind that fills an entire kitchen with
            warmth.
          </p>
          <p className="font-serif text-lg text-espresso/70 leading-relaxed mb-6">
            What began as weekend bakes for friends and family quickly became
            something more. People kept coming back. They brought their friends.
            They asked if we could make one more tray, just one more. And so, in
            2024, Mimz&apos;s Kitchen was born.
          </p>
          <p className="font-serif text-lg text-espresso/70 leading-relaxed mb-6">
            Inspired by the rustic bakeries of Paris and the burnt cheesecakes of
            San Sebasti&aacute;n, we keep things simple: exceptional ingredients,
            time-honoured techniques, and enough patience to let the dough rise
            properly.
          </p>
          <p className="font-serif italic text-gold text-lg">
            We don&apos;t rush. Good things take time.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div {...fadeUp(0.2)}>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-espresso mb-2">
              What We Believe
            </h2>
            <div className="w-10 h-px bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-[2px] bg-gold/30">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-parchment p-8 text-center"
              >
                <h3 className="font-serif text-xl text-espresso mb-3">
                  {value.title}
                </h3>
                <p className="font-serif text-sm text-espresso/55 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-20">
          <p className="font-serif italic text-espresso/50 mb-6">
            Come taste the difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/menu"
              className="px-8 py-3 border border-gold text-oak text-[0.72rem] uppercase tracking-[0.2em] font-sans hover:bg-gold/10 transition-colors rounded-sm"
            >
              View Menu
            </Link>
            <Link
              href="/order"
              className="px-8 py-3 bg-oak text-cream text-[0.72rem] uppercase tracking-[0.2em] font-sans hover:bg-espresso transition-colors rounded-sm"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
