import type { Metadata } from "next";
import { Great_Vibes, Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  "Small-batch cinnamon rolls and Basque cheesecakes, baked fresh with love. Based near Windsor & Slough.";

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
                "https://www.instagram.com/mimzskitchen",
              ],
              image: `${siteUrl}/og.png`,
              priceRange: "££",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Product",
                name: "Cinnamon Roll",
                description:
                  "Handmade cinnamon roll with cream cheese frosting, baked fresh to order in small batches. Made with real butter, free-range eggs, and cinnamon.",
                image: "https://2tphzoqtq9aupm3q.public.blob.vercel-storage.com/images/riGTnP4gdCfdx4dTF8rbv_vqaBkGdk.png",
                brand: {
                  "@type": "Brand",
                  name: "Mimz's Kitchen",
                },
                offers: {
                  "@type": "Offer",
                  url: `${siteUrl}/order`,
                  priceCurrency: "GBP",
                  price: "6.00",
                  availability: "https://schema.org/PreOrder",
                  seller: {
                    "@type": "Organization",
                    name: "Mimz's Kitchen",
                  },
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Product",
                name: "Basque Cheesecake Slice",
                description:
                  "A rustic indulgent Basque cheesecake with a deeply caramelised top and impossibly creamy centre. Inspired by Northern Spain, baked fresh to order.",
                image: "https://2tphzoqtq9aupm3q.public.blob.vercel-storage.com/images/ggLQR5whirgCeVyK3Fd8z_3wt1ympl.png",
                brand: {
                  "@type": "Brand",
                  name: "Mimz's Kitchen",
                },
                offers: {
                  "@type": "Offer",
                  url: `${siteUrl}/order`,
                  priceCurrency: "GBP",
                  price: "7.00",
                  availability: "https://schema.org/PreOrder",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Product",
                name: "Whole Basque Cheesecake",
                description:
                  "A whole Basque cheesecake serving 8 to 10 people. Deeply caramelised top with a creamy custard-like centre. Baked fresh to order.",
                image: "https://2tphzoqtq9aupm3q.public.blob.vercel-storage.com/images/ggLQR5whirgCeVyK3Fd8z_3wt1ympl.png",
                brand: {
                  "@type": "Brand",
                  name: "Mimz's Kitchen",
                },
                offers: {
                  "@type": "Offer",
                  url: `${siteUrl}/order`,
                  priceCurrency: "GBP",
                  price: "50.00",
                  availability: "https://schema.org/PreOrder",
                },
              },
            ]),
          }}
        />
        <Navbar />
        <main className="overflow-x-clip">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
