import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, DM_Sans, JetBrains_Mono } from "next/font/google";

import { Providers } from "@/app/providers";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { JsonLd, organizationSchema, websiteSchema } from "@/components/seo/JsonLd";
import { BackToTop } from "@/components/ui/BackToTop";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { siteConfig } from "@/content/config/site";

import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#1A237E",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Axis Micro — Precision Engineering",
    template: "%s | Axis Micro",
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axis Micro — Precision Engineering",
    description: siteConfig.description,
    images: ["/og-default.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${barlowCondensed.variable} ${dmSans.variable} ${jetBrainsMono.variable}`}
      >
        <JsonLd
          id="organization-schema"
          data={organizationSchema({
            name: siteConfig.name,
            url: siteConfig.url,
            logo: "/og-default.jpg",
            email: siteConfig.email,
            phone: siteConfig.phone,
            address: siteConfig.address,
            social: siteConfig.social,
          })}
        />
        <JsonLd
          id="website-schema"
          data={websiteSchema({ name: siteConfig.name, url: siteConfig.url })}
        />
        <Providers>{children}</Providers>
        <ScrollProgress />
        <BackToTop />
        <CookieBanner />
      </body>
    </html>
  );
}
