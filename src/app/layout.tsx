import type { Metadata } from "next";
import { Suspense, type ReactNode } from "react";
import {
  Cormorant_Garamond,
  Noto_Sans_Devanagari,
  Outfit,
  Tiro_Devanagari_Hindi,
} from "next/font/google";
import { SiteFrame } from "@/components/site-frame";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

const displayHi = Tiro_Devanagari_Hindi({
  subsets: ["devanagari"],
  weight: "400",
  variable: "--font-display-hi",
});

const sansHi = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600"],
  variable: "--font-sans-hi",
});

export const metadata: Metadata = {
  title: {
    default: "Al Safar | Kashmir group tours from Jabalpur",
    template: "%s · Al Safar",
  },
  description:
    "6-day all-inclusive guided group tours from Jabalpur to Kashmir. Packages from ₹13,000 per person. Stay, meals, travel, and a guide. Office at Russell Chowk, Napier Town, Jabalpur. Call or WhatsApp +91 77718 42703.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Al Safar",
  telephone: "+917771842703",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Russell Chowk, Napier Town",
    addressLocality: "Jabalpur",
    addressCountry: "IN",
  },
  areaServed: "Kashmir",
  description:
    "6-day all-inclusive guided group tours from Jabalpur to Kashmir. Packages from ₹13,000 per person.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${sans.variable} ${displayHi.variable} ${sansHi.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Suspense fallback={<div className="h-18 border-b border-sand bg-paper" />}>
          <SiteFrame>{children}</SiteFrame>
        </Suspense>
      </body>
    </html>
  );
}
