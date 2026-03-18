import { CompanyStory } from "@/sections/about/CompanyStory";
import { FactorySection } from "@/sections/about/FactorySection";
import { MilestoneTimeline } from "@/sections/about/MilestoneTimeline";
import { TeamGrid } from "@/sections/about/TeamGrid";
import { ValuesSection } from "@/sections/about/ValuesSection";

export function AboutPage() {
  return (
    <>
      <CompanyStory />
      <MilestoneTimeline />
      <ValuesSection />
      <TeamGrid />
      <FactorySection />
    </>
  );
}

