import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs — Allergens, Orders & Delivery | Mimz's Kitchen",
  description:
    "Common questions about Mimz's Kitchen cinnamon rolls and Basque cheesecakes — allergens, ordering, storage, delivery near Windsor & Slough.",
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
