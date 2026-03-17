import type { Metadata } from "next";
import { Great_Vibes, Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
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
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jost",
  display: "swap",
});

const siteUrl = "https://www.mimzskitchen.com";

const siteDescription =
  "Small-batch cinnamon rolls and Basque cheesecakes, baked fresh daily with love. Based near Windsor & Slough.";

export const metadata: Metadata = {
  title: "Mimz's Kitchen — Artisan Bakery",
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Mimz's Kitchen — Artisan Bakery",
    description: siteDescription,
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
    description: siteDescription,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              name: "Mimz's Kitchen",
              description: siteDescription,
              url: siteUrl,
              telephone: "+447404697364",
              email: "askmimz@mimzskitchen.com",
              areaServed: {
                "@type": "Place",
                name: "Windsor & Slough, Berkshire",
              },
              servesCuisine: ["Bakery", "Pastries"],
              menu: `${siteUrl}/order`,
              sameAs: [
                "https://instagram.com/mimzkitchen",
              ],
              image: `${siteUrl}/og.png`,
              priceRange: "££",
            }),
          }}
        />
        <Navbar />
        <main className="overflow-x-clip">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
