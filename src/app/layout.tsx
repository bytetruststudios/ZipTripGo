import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZipTripGo – Your Ultimate Travel Companion",
  description: "Find your next adventure with our comprehensive travel guides on culture, cuisine, flights, and must-see destinations.",
  alternates: { canonical: "https://your-travel-domain.com" },
  openGraph: {
    title: "ZipTripGo",
    description: "Your ultimate guide to unforgettable travel, authentic culture, and local cuisine.",
    url: "https://your-travel-domain.com",
    siteName: "ZipTripGo",
    images: [{ url: "/og-travel.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      { rel: "android-chrome", url: "/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "android-chrome", url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
  themeColor: "#0f172a",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
      <Script id="org-jsonld" type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "ZipTripGo",
  "url": "https://your-travel-domain.com",
  "sameAs": ["https://github.com/your-org", "https://www.linkedin.com/company/your-org", "https://www.fiverr.com/your-org"],
})}
</Script>
    </html>
  );
}