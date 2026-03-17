import type { Metadata } from "next";
import { Great_Vibes, Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

const siteUrl = "https://www.mimzskitchen.com";

export const metadata: Metadata = {
  title: "Mimz's Kitchen — Artisan Bakery",
  description:
    "Small-batch cinnamon rolls and Basque cheesecakes, baked fresh daily with love. Based near Windsor & Slough.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Mimz's Kitchen — Artisan Bakery",
    description:
      "Small-batch cinnamon rolls and Basque cheesecakes, baked fresh daily with love.",
    url: siteUrl,
    siteName: "Mimz's Kitchen",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Mimz's Kitchen — Rustic Homemade Treats",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mimz's Kitchen — Artisan Bakery",
    description:
      "Small-batch cinnamon rolls and Basque cheesecakes, baked fresh daily with love.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${greatVibes.variable} ${cormorant.variable} ${jost.variable}`}
    >
      <body className="font-sans antialiased bg-parchment text-espresso">
        <Navbar />
        <main className="overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
