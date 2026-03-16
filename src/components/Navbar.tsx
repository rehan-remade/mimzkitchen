"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { label: "Our Story", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Order", href: "/order" },
  { label: "Find Us", href: "/#find-us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-parchment/90 backdrop-blur-md shadow-sm"
          : "bg-parchment"
      } border-b border-gold/20`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="font-display text-3xl md:text-4xl text-oak">
          Mimz&apos;s Kitchen
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-sans text-[0.72rem] uppercase tracking-[0.2em] text-espresso/70 hover:text-oak transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/order"
          className="hidden md:inline-flex items-center px-6 py-2.5 bg-oak text-cream text-[0.72rem] uppercase tracking-[0.2em] font-sans hover:bg-espresso transition-colors rounded-sm"
        >
          Order Now
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-oak transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-oak transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-oak transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-parchment border-t border-gold/20 px-6 pb-6"
        >
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-sans text-[0.72rem] uppercase tracking-[0.2em] text-espresso/70 hover:text-oak transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/order"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center px-6 py-2.5 bg-oak text-cream text-[0.72rem] uppercase tracking-[0.2em] font-sans hover:bg-espresso transition-colors rounded-sm"
              >
                Order Now
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
