import { AxisConnectCTA } from "@/sections/home/AxisConnectCTA";
import { CTASection } from "@/sections/home/CTASection";
import { HeroSection } from "@/sections/home/HeroSection";
import { IndustriesSection } from "@/sections/home/IndustriesSection";
import { ManufacturingProcess } from "@/sections/home/ManufacturingProcess";
import { ProductsShowcase } from "@/sections/home/ProductsShowcase";
import { QualitySection } from "@/sections/home/QualitySection";
import { StatsSection } from "@/sections/home/StatsSection";
import { TestimonialsSection } from "@/sections/home/TestimonialsSection";

export function HomePage() {
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

