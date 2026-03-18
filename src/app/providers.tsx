"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { ThemeRegistry } from "@/theme/ThemeRegistry";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeRegistry>
      {children}
      <Analytics />
      <SpeedInsights />
    </ThemeRegistry>
  );
}

