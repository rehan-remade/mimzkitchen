import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";

const socials = [
  { label: "Instagram", href: "https://instagram.com/mimzkitchen", icon: FaInstagram },
  { label: "TikTok", href: "https://tiktok.com", icon: FaTiktok },
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/70 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-4 mb-5">
              <Image
                src="/logo.png"
                alt=""
                width={80}
                height={80}
                className="w-20 h-20"
              />
              <span className="font-display text-3xl text-cream">
                Mimz&apos;s Kitchen
              </span>
            </Link>
            <p className="font-serif italic text-cream/65 text-sm leading-relaxed max-w-xs mb-6">
              Small-batch cinnamon rolls and Basque cheesecakes, baked fresh daily
              with love.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-cream/15 flex items-center justify-center text-cream/80 hover:text-gold hover:border-gold/40 transition-colors"
                >
                  <social.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans text-[0.75rem] uppercase tracking-[0.25em] text-gold mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Our Story", href: "/about" },
                { label: "Order", href: "/order" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-serif text-sm text-cream/80 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div id="find-us">
            <h4 className="font-sans text-[0.75rem] uppercase tracking-[0.25em] text-gold mb-4">
              Contact
            </h4>
            <div className="font-serif text-sm text-cream/80 leading-relaxed space-y-2">
              <a
                href="tel:+447404697364"
                className="block hover:text-cream transition-colors"
              >
                +44 7404 697364
              </a>
              <a
                href="mailto:askmimz@mimzskitchen.com"
                className="block hover:text-cream transition-colors"
              >
                askmimz@mimzskitchen.com
              </a>
              <p className="pt-3 text-cream/70 font-sans text-[0.75rem] uppercase tracking-[0.15em]">
                Based near Windsor &amp; Slough
              </p>
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[0.75rem] uppercase tracking-[0.2em] text-cream/70">
            &copy; 2024 Mimz&apos;s Kitchen. All rights reserved.
          </p>
          <p className="font-serif italic text-[0.75rem] text-cream/70">
            Baked with love
          </p>
        </div>
      </div>
    </footer>
  );
}
