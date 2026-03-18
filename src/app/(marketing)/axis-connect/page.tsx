import type { Metadata } from "next";

export { AxisConnectPage as default } from "@sections/axis-connect";

import { siteConfig } from "@/content/config/site";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Axis Connect — B2B Vendor Marketplace for Surface Treatment";
  const description =
    "Find verified plating vendors with transparent pricing, timeline visibility, and secure quote workflows.";
  return {
    title,
    description,
    keywords: ["vendor marketplace", "surface treatment platform", "plating quotes", "Axis Connect"],
    alternates: { canonical: `${siteConfig.url}/axis-connect` },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/axis-connect`,
      images: ["/og-default.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-default.jpg"],
    },
  };
}

