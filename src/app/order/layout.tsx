import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Cinnamon Rolls & Cheesecake | Mimz's Kitchen",
  description:
    "Order fresh cinnamon rolls and Basque cheesecake for pickup or delivery near Windsor & Slough. Message us on WhatsApp, Instagram, or email.",
};

export default function OrderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
