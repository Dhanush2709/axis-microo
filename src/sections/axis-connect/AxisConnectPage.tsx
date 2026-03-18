import { BenefitsSection } from "@/sections/axis-connect/BenefitsSection";
import { HowItWorks } from "@/sections/axis-connect/HowItWorks";
import { PlatformCTA } from "@/sections/axis-connect/PlatformCTA";
import { PlatformHero } from "@/sections/axis-connect/PlatformHero";
import { RoleCards } from "@/sections/axis-connect/RoleCards";

export function AxisConnectPage() {
  return (
    <>
      <PlatformHero />
      <HowItWorks />
      <RoleCards />
      <BenefitsSection />
      <PlatformCTA />
    </>
  );
}

