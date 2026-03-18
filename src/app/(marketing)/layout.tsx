import type { Metadata } from "next";

import Box from "@mui/material/Box";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { siteConfig } from "@/content/config/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    siteName: siteConfig.name,
  },
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ minHeight: "100dvh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Box component="main" sx={{ flex: 1, pt: { xs: "64px", md: "72px" } }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

