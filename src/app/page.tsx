import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Cinnamon Rolls & Basque Cheesecake | Mimz's Kitchen",
  description:
    "Small-batch cinnamon rolls and Basque cheesecakes, baked fresh with love. Order for pickup or delivery near Windsor & Slough.",
};
import ScrollHint from "@/components/ScrollHint";
import Marquee from "@/components/Marquee";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollHint />
      <Marquee />
      <Products />
    </>
  );
}
