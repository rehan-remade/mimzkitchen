"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  {
    title: "Cinnamon Buns",
    items: [
      {
        name: "Classic Cinnamon Bun",
        description: "Ceylon cinnamon swirl with cream cheese glaze",
        price: "$4.50",
      },
      {
        name: "Pecan Caramel Bun",
        description: "Topped with toasted pecans and salted caramel",
        price: "$5.50",
      },
      {
        name: "Apple Cinnamon Bun",
        description: "Spiced apple compote layered through soft dough",
        price: "$5.00",
      },
      {
        name: "Mini Bun Box (6)",
        description: "Half-dozen bite-sized classic buns, perfect for sharing",
        price: "$14.00",
      },
    ],
  },
  {
    title: "Basque Cheesecakes",
    items: [
      {
        name: "Classic Basque Cheesecake",
        description:
          "Caramelised top, impossibly creamy centre. San Sebasti\u00e1n style.",
        price: "$7.00 / slice",
      },
      {
        name: "Whole Basque Cheesecake (8\")",
        description: "Serves 8\u201310. Perfect for gatherings.",
        price: "$48.00",
      },
      {
        name: "Matcha Basque Cheesecake",
        description: "Ceremonial-grade matcha folded into the classic recipe",
        price: "$8.00 / slice",
      },
      {
        name: "Seasonal Special",
        description: "Ask us about this month\u2019s limited edition flavour",
        price: "Market price",
      },
    ],
  },
  {
    title: "Drinks",
    items: [
      {
        name: "Drip Coffee",
        description: "Single-origin, freshly brewed",
        price: "$3.50",
      },
      {
        name: "Oat Latte",
        description: "Espresso with creamy oat milk",
        price: "$5.00",
      },
      {
        name: "Chai Latte",
        description: "House-spiced masala chai, steamed milk",
        price: "$5.00",
      },
      {
        name: "Fresh-Squeezed OJ",
        description: "Made to order",
        price: "$4.50",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <section className="pt-28 md:pt-36 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-[0.65rem] uppercase tracking-[0.25em] text-gold font-medium">
            What We Offer
          </span>
          <h1 className="font-display text-5xl md:text-6xl text-espresso mt-2 mb-4">
            Our Menu
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
          <p className="font-serif italic text-espresso/50 mt-4 max-w-md mx-auto">
            Everything is made fresh each morning. Availability may vary &mdash;
            we bake until it&apos;s gone.
          </p>
        </div>

        {/* Categories */}
        {categories.map((category, ci) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.1 }}
            className="mb-16 last:mb-0"
          >
            <h2 className="font-display text-3xl text-espresso mb-2">
              {category.title}
            </h2>
            <div className="w-10 h-px bg-gold mb-8" />

            <div className="space-y-6">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="group flex items-start justify-between gap-4 pb-6 border-b border-gold/15 last:border-b-0"
                >
                  <div>
                    <h3 className="font-serif text-lg text-espresso group-hover:text-oak transition-colors">
                      {item.name}
                    </h3>
                    <p className="font-serif text-sm text-espresso/50 mt-1">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-sans text-sm text-gold font-medium whitespace-nowrap pt-1">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* CTA */}
        <div className="text-center mt-16 pt-12 border-t border-gold/20">
          <p className="font-serif italic text-espresso/50 mb-6">
            Ready to order? We offer pickup &amp; local delivery.
          </p>
          <Link
            href="/order"
            className="inline-flex px-10 py-3.5 bg-oak text-cream text-[0.72rem] uppercase tracking-[0.2em] font-sans hover:bg-espresso transition-colors rounded-sm"
          >
            Place an Order
          </Link>
        </div>
      </div>
    </section>
  );
}
