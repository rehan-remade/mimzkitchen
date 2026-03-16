"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  {
    name: "Cinnamon Buns",
    description:
      "Soft, swirled dough laced with Ceylon cinnamon and topped with a silky cream cheese glaze. Baked golden each morning.",
    price: "From $4.50",
    icon: (
      <svg
        viewBox="0 0 80 80"
        className="w-16 h-16 text-oak/40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="40" cy="40" r="30" />
        <path d="M40 10 C55 20, 60 35, 40 40 C20 45, 25 60, 40 70" />
        <path d="M40 18 C50 25, 52 35, 40 40 C28 45, 30 55, 40 62" />
        <circle cx="40" cy="40" r="5" />
      </svg>
    ),
  },
  {
    name: "Basque Cheesecake",
    description:
      "Caramelised and crackled on top, impossibly creamy within. A rustic, flourless recipe inspired by San Sebasti\u00e1n.",
    price: "From $7.00",
    icon: (
      <svg
        viewBox="0 0 80 80"
        className="w-16 h-16 text-oak/40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="15" y="30" width="50" height="30" rx="3" />
        <rect x="12" y="25" width="56" height="8" rx="2" />
        <path d="M20 30 C25 20, 35 18, 40 20 C45 22, 55 20, 60 30" />
        <line x1="25" y1="38" x2="55" y2="38" strokeDasharray="3 3" />
        <line x1="25" y1="48" x2="55" y2="48" strokeDasharray="3 3" />
      </svg>
    ),
  },
];

export default function Products() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
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

        {/* Product grid */}
        <div className="grid md:grid-cols-2 gap-[2px] bg-gold/30">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-parchment hover:bg-parchment-dark transition-colors duration-300 p-10 md:p-14"
            >
              <div className="mb-6">{product.icon}</div>
              <h3 className="font-serif text-2xl md:text-3xl text-espresso mb-3 group-hover:text-oak transition-colors">
                {product.name}
              </h3>
              <div className="w-8 h-px bg-gold mb-4 group-hover:w-16 transition-all duration-300" />
              <p className="font-serif text-espresso/60 leading-relaxed mb-6 max-w-sm">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm text-gold font-medium">
                  {product.price}
                </span>
                <Link
                  href="/order"
                  className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-oak hover:text-gold transition-colors"
                >
                  Order &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
