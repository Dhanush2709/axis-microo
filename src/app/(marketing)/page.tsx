import type { Metadata } from "next";
import dynamic from "next/dynamic";

import { AxisConnectCTA } from "@/sections/home/AxisConnectCTA";
import { CTASection } from "@/sections/home/CTASection";
import { HeroSection } from "@/sections/home/HeroSection";
import { IndustriesSection } from "@/sections/home/IndustriesSection";
import { ManufacturingProcess } from "@/sections/home/ManufacturingProcess";
import { ProductsShowcase } from "@/sections/home/ProductsShowcase";
import { QualitySection } from "@/sections/home/QualitySection";
import { StatsSection } from "@/sections/home/StatsSection";

const TestimonialsSection = dynamic(
  () => import("@/sections/home/TestimonialsSection").then((m) => m.TestimonialsSection),
);

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Precision Engineering Homepage",
    description:
      "Axis Micro manufactures precision components and machinery for automotive, hydraulic, and pneumatic industries.",
    alternates: { canonical: "/" },
    openGraph: {
      title: "Axis Micro — Precision Engineering",
      description:
        "Precision engineered components and machinery for critical industrial applications.",
      images: ["/og-default.jpg"],
    },
  };
}

export default function Page() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <IndustriesSection />
      <ProductsShowcase />
      <ManufacturingProcess />
      <QualitySection />
      <AxisConnectCTA />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
