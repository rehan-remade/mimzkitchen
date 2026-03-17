"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
import LeafDivider from "@/components/LeafDivider";
import AddressLookup from "@/components/AddressLookup";

const menuItems = [
  { id: "cinnamon-roll", name: "Cinnamon Roll", desc: "Per roll", price: 6 },
  { id: "cheesecake-slice", name: "Basque Cheesecake", desc: "Single slice", price: 7 },
  { id: "cheesecake-whole", name: "Whole Basque Cheesecake", desc: "Serves 8\u201310", price: 50 },
  { id: "sauce-butterscotch", name: "Salted Butterscotch Sauce", desc: "Sauce pot, sold separately", price: 0 },
  { id: "sauce-chocolate", name: "Chocolate Ganache Sauce", desc: "Sauce pot, sold separately", price: 0 },
  { id: "sauce-raspberry", name: "Raspberry Coulis", desc: "Sauce pot, sold separately", price: 0 },
];

const INSTAGRAM_USERNAME = "mimzskitchen";
const WHATSAPP_NUMBER = "447404697364";

type OrderType = "pickup" | "delivery";

export default function OrderPage() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [name, setName] = useState("");
  const [orderType, setOrderType] = useState<OrderType>("pickup");
  const [prefDate, setPrefDate] = useState("");
  const [prefTime, setPrefTime] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [copied, setCopied] = useState(false);

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

  const buildOrderMessage = () => {
    const items = menuItems
      .filter((item) => (quantities[item.id] || 0) > 0)
      .map((item) => `  - ${quantities[item.id]}x ${item.name}`)
      .join("\n");

    let msg = `Hi Mimz's Kitchen!\n\n`;
    msg += `I'd like to place an order for ${orderType}:\n\n`;
    msg += `${items}\n\n`;
    msg += `Name: ${name}\n`;
    const prefStr = [prefDate, prefTime].filter(Boolean).join(" at ");
    if (prefStr) msg += `Preferred time: ${prefStr}\n`;
    if (orderType === "delivery") {
      if (address) msg += `Address: ${address}\n`;
      if (postcode) msg += `Postcode: ${postcode}\n`;
    }
    msg += `\nThank you!`;

    return msg;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(buildOrderMessage());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const buildEmailHref = () => {
    const subject = encodeURIComponent(`New Order from ${name}`);
    const body = encodeURIComponent(buildOrderMessage());
    return `mailto:askmimz@mimzskitchen.com?subject=${subject}&body=${body}`;
  };

  const handleInstagram = async () => {
    const message = buildOrderMessage();
    try {
      await navigator.clipboard.writeText(message);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = message;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => {
      window.open(`https://ig.me/m/${INSTAGRAM_USERNAME}`, "_blank");
    }, 600);
    setTimeout(() => setCopied(false), 3000);
  };

  const isValid =
    itemCount > 0 &&
    name.trim().length > 0 &&
    (orderType === "pickup" || address.trim().length > 0);

  const inputClass =
    "w-full px-4 py-3 bg-parchment-dark/50 border border-gold/20 rounded-sm font-serif text-espresso placeholder:text-espresso/30 focus:outline-none focus:border-gold transition-colors";

  return (
    <section className="pt-28 md:pt-36 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-[0.75rem] uppercase tracking-[0.25em] text-gold font-medium">
            Pickup &amp; Delivery
          </span>
          <h1 className="font-display text-5xl md:text-6xl text-espresso mt-2 mb-4">
            Place an Order
          </h1>
          <LeafDivider />
          <p className="font-serif italic text-espresso/65 mt-4 max-w-md mx-auto">
            Select your items, fill in your details, and send your order
            via WhatsApp or Instagram.
          </p>
        </div>

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
                  <p className="font-serif text-sm text-espresso/50">{item.desc}</p>
                  {item.price > 0 && (
                    <span className="font-sans text-base font-medium text-espresso">
                      £{item.price.toFixed(2)}
                    </span>
                  )}
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
              <span className="font-serif text-espresso/75">
                {itemCount} item{itemCount !== 1 ? "s" : ""}
              </span>
              <span className="font-serif text-xl text-espresso">
                Total: £{total.toFixed(2)}
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
            {/* Name */}
            <div>
              <label className="block font-sans text-[0.75rem] uppercase tracking-[0.2em] text-espresso/75 mb-2">
                Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                className={inputClass}
                placeholder="Your name"
              />
            </div>

            {/* Pickup / Delivery toggle */}
            <div>
              <label className="block font-sans text-[0.75rem] uppercase tracking-[0.2em] text-espresso/75 mb-2">
                Order Type
              </label>
              <div className="grid grid-cols-2 gap-[1px] bg-gold/20">
                {(["pickup", "delivery"] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setOrderType(type)}
                    className={`py-3 font-sans text-[0.8rem] uppercase tracking-[0.15em] transition-colors ${
                      orderType === type
                        ? "bg-espresso text-cream"
                        : "bg-parchment-dark/50 text-espresso/75 hover:bg-parchment-dark"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Delivery address — with address lookup */}
            {orderType === "delivery" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4"
              >
                <div>
                  <label className="block font-sans text-[0.75rem] uppercase tracking-[0.2em] text-espresso/75 mb-2">
                    Address
                  </label>
                  <AddressLookup
                    inputClass={inputClass}
                    onChange={(val) => setAddress(val)}
                    onSelect={(addr, pc) => {
                      setAddress(addr);
                      setPostcode(pc);
                    }}
                  />
                </div>
                <div>
                  <label className="block font-sans text-[0.75rem] uppercase tracking-[0.2em] text-espresso/75 mb-2">
                    Postcode
                  </label>
                  <input
                    type="text"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    className={inputClass}
                    placeholder="e.g. SW1A 1AA"
                  />
                </div>
              </motion.div>
            )}

            {/* Preferred date & time */}
            <div>
              <label className="block font-sans text-[0.75rem] uppercase tracking-[0.2em] text-espresso/75 mb-2">
                Preferred {orderType === "pickup" ? "pickup" : "delivery"} date &amp; time
              </label>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="date"
                  value={prefDate}
                  onChange={(e) => setPrefDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className={inputClass}
                />
                <select
                  value={prefTime}
                  onChange={(e) => setPrefTime(e.target.value)}
                  className={inputClass}
                >
                  <option value="">Time</option>
                  <option>8:00 AM</option>
                  <option>9:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>12:00 PM</option>
                  <option>1:00 PM</option>
                  <option>2:00 PM</option>
                  <option>3:00 PM</option>
                </select>
              </div>
              <p className="font-serif text-sm text-espresso/50 mt-2 italic">
                Let us know when works best for you and we&apos;ll do our best to
                accommodate. We&apos;ll confirm the exact time when we get back to you.
              </p>
            </div>
          </div>
        </div>

        {/* Order buttons */}
        <div className="space-y-3">
          <button
            onClick={handleWhatsApp}
            disabled={!isValid}
            className="w-full py-4 bg-[#25D366] text-white text-[0.8rem] uppercase tracking-[0.2em] font-sans hover:bg-[#1fb855] transition-colors rounded-sm disabled:opacity-40 disabled:cursor-not-allowed grid grid-cols-[1.25rem_1fr] items-center gap-3 px-[calc(50%-7.5rem)]"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span className="text-left">Order via WhatsApp</span>
          </button>

          <a
            href={isValid ? buildEmailHref() : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full py-4 bg-espresso text-cream text-[0.8rem] uppercase tracking-[0.2em] font-sans hover:bg-oak transition-colors rounded-sm grid grid-cols-[1.25rem_1fr] items-center gap-3 px-[calc(50%-7.5rem)] ${
              !isValid ? "opacity-40 pointer-events-none" : ""
            }`}
            aria-disabled={!isValid}
          >
            <FaEnvelope className="w-5 h-5" />
            <span className="text-left">Order via Email</span>
          </a>

          <button
            onClick={handleInstagram}
            disabled={!isValid}
            className="w-full py-4 bg-gradient-to-r from-[#833AB4] via-[#C13584] to-[#F56040] text-white text-[0.8rem] uppercase tracking-[0.2em] font-sans hover:opacity-90 transition-opacity rounded-sm disabled:opacity-40 disabled:cursor-not-allowed grid grid-cols-[1.25rem_1fr] items-center gap-3 px-[calc(50%-7.5rem)]"
          >
            <FaInstagram className="w-5 h-5" />
            <span className="text-left">Order via Instagram</span>
          </button>
        </div>

        {/* Copied toast */}
        <motion.div
          initial={false}
          animate={{ opacity: copied ? 1 : 0, y: copied ? 0 : 10 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-espresso text-cream px-6 py-3 rounded-sm shadow-lg pointer-events-none z-50"
        >
          <p className="font-sans text-[0.8rem] tracking-[0.1em]">
            Order copied to clipboard — paste it in the DM!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
