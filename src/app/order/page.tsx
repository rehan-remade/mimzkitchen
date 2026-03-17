"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import LeafDivider from "@/components/LeafDivider";

const menuItems = [
  { id: "cinnamon-roll", name: "Cinnamon Roll", price: 4.5 },
  { id: "basque-cheesecake", name: "Basque Cheesecake", price: 7.0 },
];

export default function OrderPage() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pickup, setPickup] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const updateQty = (id: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const total = menuItems.reduce(
    (sum, item) => sum + (quantities[item.id] || 0) * item.price,
    0
  );

  const itemCount = Object.values(quantities).reduce((a, b) => a + b, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="pt-28 md:pt-36 pb-20 px-6 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-16 h-16 rounded-full bg-oak/10 flex items-center justify-center mx-auto mb-6">
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8 text-oak"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className="font-display text-4xl text-espresso mb-3">
            Thank You!
          </h1>
          <p className="font-serif text-espresso/60 leading-relaxed">
            Your order has been received. We&apos;ll send a confirmation to{" "}
            <span className="text-oak">{email}</span> shortly.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="pt-28 md:pt-36 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-[0.65rem] uppercase tracking-[0.25em] text-gold font-medium">
            Pickup &amp; Delivery
          </span>
          <h1 className="font-display text-5xl md:text-6xl text-espresso mt-2 mb-4">
            Place an Order
          </h1>
          <LeafDivider />
          <p className="font-serif italic text-espresso/50 mt-4 max-w-md mx-auto">
            Select your items, choose a pickup time, and we&apos;ll have
            everything ready for you.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Items */}
          <div className="mb-12">
            <h2 className="font-display text-2xl text-espresso mb-2">
              Select Items
            </h2>
            <div className="w-8 h-px bg-gold mb-6" />

            <div className="space-y-4">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-4 px-5 bg-parchment-dark/50 rounded-sm"
                >
                  <div>
                    <h3 className="font-serif text-espresso">{item.name}</h3>
                    <span className="font-sans text-sm text-gold">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => updateQty(item.id, -1)}
                      className="w-8 h-8 flex items-center justify-center border border-gold/30 text-oak hover:bg-gold/10 transition-colors rounded-sm text-lg"
                    >
                      &minus;
                    </button>
                    <span className="font-sans w-6 text-center text-espresso">
                      {quantities[item.id] || 0}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQty(item.id, 1)}
                      className="w-8 h-8 flex items-center justify-center border border-gold/30 text-oak hover:bg-gold/10 transition-colors rounded-sm text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {itemCount > 0 && (
              <div className="mt-6 pt-4 border-t border-gold/20 flex justify-between items-center">
                <span className="font-serif text-espresso/60">
                  {itemCount} item{itemCount !== 1 ? "s" : ""}
                </span>
                <span className="font-serif text-xl text-espresso">
                  Total: ${total.toFixed(2)}
                </span>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="mb-12">
            <h2 className="font-display text-2xl text-espresso mb-2">
              Your Details
            </h2>
            <div className="w-8 h-px bg-gold mb-6" />

            <div className="space-y-4">
              <div>
                <label className="block font-sans text-[0.65rem] uppercase tracking-[0.2em] text-espresso/60 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-parchment-dark/50 border border-gold/20 rounded-sm font-serif text-espresso placeholder:text-espresso/30 focus:outline-none focus:border-gold transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-sans text-[0.65rem] uppercase tracking-[0.2em] text-espresso/60 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-parchment-dark/50 border border-gold/20 rounded-sm font-serif text-espresso placeholder:text-espresso/30 focus:outline-none focus:border-gold transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block font-sans text-[0.65rem] uppercase tracking-[0.2em] text-espresso/60 mb-2">
                  Pickup Time
                </label>
                <select
                  required
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full px-4 py-3 bg-parchment-dark/50 border border-gold/20 rounded-sm font-serif text-espresso focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="">Select a time</option>
                  <option>Tomorrow 8:00 AM</option>
                  <option>Tomorrow 9:00 AM</option>
                  <option>Tomorrow 10:00 AM</option>
                  <option>Tomorrow 11:00 AM</option>
                  <option>Tomorrow 12:00 PM</option>
                  <option>Tomorrow 1:00 PM</option>
                  <option>Tomorrow 2:00 PM</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={itemCount === 0}
            className="w-full py-4 bg-oak text-cream text-[0.72rem] uppercase tracking-[0.2em] font-sans hover:bg-espresso transition-colors rounded-sm disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Submit Order &mdash; ${total.toFixed(2)}
          </button>
        </form>
      </div>
    </section>
  );
}
