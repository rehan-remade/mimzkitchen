import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story — Handmade with Love | Mimz's Kitchen",
  description:
    "How Mimz's Kitchen began — small-batch cinnamon rolls and Basque cheesecakes, inspired by rustic patisseries. Based near Windsor & Slough.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
