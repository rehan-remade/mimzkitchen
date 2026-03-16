import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";

const socials = [
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
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
                alt="Mimz's Kitchen"
                width={80}
                height={80}
                className="w-20 h-20"
              />
              <span className="font-display text-3xl text-cream">
                Mimz&apos;s Kitchen
              </span>
            </Link>
            <p className="font-serif italic text-cream/50 text-sm leading-relaxed max-w-xs mb-6">
              Small-batch cinnamon buns and Basque cheesecakes, baked fresh daily
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
                  className="w-9 h-9 rounded-full border border-cream/15 flex items-center justify-center text-cream/40 hover:text-gold hover:border-gold/40 transition-colors"
                >
                  <social.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans text-[0.65rem] uppercase tracking-[0.25em] text-gold mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Our Story", href: "/about" },
                { label: "Menu", href: "/menu" },
                { label: "Order", href: "/order" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-serif text-sm text-cream/60 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div id="find-us">
            <h4 className="font-sans text-[0.65rem] uppercase tracking-[0.25em] text-gold mb-4">
              Find Us
            </h4>
            <address className="font-serif text-sm text-cream/60 not-italic leading-relaxed">
              123 Rue de la Boulangerie
              <br />
              Paris-Inspired District
              <br />
              <br />
              Open daily: 7am &ndash; 3pm
              <br />
              hello@mimzskitchen.com
            </address>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[0.6rem] uppercase tracking-[0.2em] text-cream/30">
            &copy; 2024 Mimz&apos;s Kitchen. All rights reserved.
          </p>
          <p className="font-serif italic text-[0.7rem] text-cream/30">
            Baked with love
          </p>
        </div>
      </div>
    </footer>
  );
}
