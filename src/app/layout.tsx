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
  title: "ByteTrust Studios – AI automations & Next.js apps",
  description: "We build AI automations, Next.js web apps, and custom software—fast, secure, and reliable.",
  alternates: { canonical: "https://your-domain.com" },
  openGraph: {
    title: "ByteTrust Studios",
    description: "AI automations & Next.js apps in weeks—not months.",
    url: "https://your-domain.com",
    siteName: "ByteTrust Studios",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
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
  themeColor: "#0f172a", // optional: tab theme color
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
      </body>
      <Script id="org-jsonld" type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ByteTrust Studios",
  url: "https://your-domain.com",
  sameAs: ["https://github.com/your", "https://www.linkedin.com/company/your", "https://www.fiverr.com/your"],
})}
</Script>
    </html>
  );
}
