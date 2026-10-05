import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "@/app/globals.css";
import { SITE_CONFIG } from "@/constants/site";
import { generateJsonLd } from "@/lib/metadata";
import { SmoothScroll } from "@/components/layout";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-manrope",
});

export const viewport: Viewport = {
  themeColor: "#171414",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Wanderlush | Experience the Magic of Bromo",
    template: "%s | Wanderlush",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Mount Bromo",
    "East Java",
    "Indonesia Travel",
    "Luxury Villas",
    "Lava Jeep Tour",
    "Bromo Hiking",
    "Bromo Tengger Semeru",
  ],
  authors: [{ name: SITE_CONFIG.author }],
  creator: SITE_CONFIG.developer.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: "Wanderlush | Experience the Magic of Bromo",
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mount Bromo dramatic landscape with sea of sand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wanderlush | Experience the Magic of Bromo",
    description: SITE_CONFIG.description,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateJsonLd();

  return (
    <html
      lang="en"
      className={manrope.variable}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
