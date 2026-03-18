import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllProducts } from "@/lib/products";
import { ApplicationsGrid } from "@/sections/industries/ApplicationsGrid";
import { IndustryHero } from "@/sections/industries/IndustryHero";
import { RelatedProducts } from "@/sections/industries/RelatedProducts";

const industryMap = {
  automotive: {
    label: "Automotive",
    image:
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=1600&q=60",
    challenges: [
      "Tight tolerances in high-volume programs",
      "Durability under dynamic load",
      "Reliable production scheduling",
    ],
    applications: [
      { title: "Engine Components", description: "Precision-machined parts for core engine sub-assemblies.", image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1200&q=60" },
      { title: "Transmission Housings", description: "Gear and housing components with repeatable fit.", image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=60" },
      { title: "Chassis Brackets", description: "Structural brackets optimized for strength and consistency.", image: "https://images.unsplash.com/photo-1632823469161-1c8e8dfafadf?auto=format&fit=crop&w=1200&q=60" },
      { title: "Actuator Parts", description: "Robust components for electro-mechanical actuation systems.", image: "https://images.unsplash.com/photo-1597764690523-15bea4c581c9?auto=format&fit=crop&w=1200&q=60" },
      { title: "Mounting Hardware", description: "Precision hardware with reliable thread and surface quality.", image: "https://images.unsplash.com/photo-1562141961-4be49a4cb5ff?auto=format&fit=crop&w=1200&q=60" },
      { title: "Safety Assemblies", description: "Critical parts manufactured with strict quality assurance.", image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=60" },
    ],
  },
  hydraulic: {
    label: "Hydraulic",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1600&q=60",
    challenges: [
      "High-pressure sealing requirements",
      "Material consistency and corrosion control",
      "Lifecycle reliability in demanding environments",
    ],
    applications: [
      { title: "Cylinder Components", description: "Bores, pistons, rods, and end caps for hydraulic assemblies.", image: "https://images.unsplash.com/photo-1581093458791-9d15482f9fbb?auto=format&fit=crop&w=1200&q=60" },
      { title: "Valve Bodies", description: "Complex body machining with controlled flow-channel accuracy.", image: "https://images.unsplash.com/photo-1581091870632-2d82f14c5f16?auto=format&fit=crop&w=1200&q=60" },
      { title: "Pump Parts", description: "High-precision rotating and static pump components.", image: "https://images.unsplash.com/photo-1581090700227-1e8fe6f50d3b?auto=format&fit=crop&w=1200&q=60" },
      { title: "Fittings", description: "Threaded fittings with leak-safe dimensional consistency.", image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=60" },
      { title: "Control Blocks", description: "Machined manifolds for directional and flow control.", image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=60" },
      { title: "Service Kits", description: "Repeatable replacement and maintenance components.", image: "https://images.unsplash.com/photo-1581093588401-16ec57d11f82?auto=format&fit=crop&w=1200&q=60" },
    ],
  },
  pneumatic: {
    label: "Pneumatic",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1600&q=60",
    challenges: [
      "Fast-response control precision",
      "Air-leak prevention and finish quality",
      "Consistency across batch and volume runs",
    ],
    applications: [
      { title: "Valve Components", description: "Precision internal components for pneumatic valve systems.", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=60" },
      { title: "Actuator Bodies", description: "Machined actuator components with stable repeatability.", image: "https://images.unsplash.com/photo-1581091870622-2f88edb74f1a?auto=format&fit=crop&w=1200&q=60" },
      { title: "Fittings & Couplers", description: "Leak-resistant fittings for compressed-air routing.", image: "https://images.unsplash.com/photo-1581091226045-1f17c1fe7f0e?auto=format&fit=crop&w=1200&q=60" },
      { title: "Flow Control Blocks", description: "Compact manifolds for pneumatic control architectures.", image: "https://images.unsplash.com/photo-1597764690523-15bea4c581c9?auto=format&fit=crop&w=1200&q=60" },
      { title: "Sensor Mounts", description: "Stable mounts for feedback and instrumentation units.", image: "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?auto=format&fit=crop&w=1200&q=60" },
      { title: "Custom Assemblies", description: "Application-specific sub-assemblies for automation lines.", image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=1200&q=60" },
    ],
  },
} as const;

type IndustrySlug = keyof typeof industryMap;

export async function generateStaticParams() {
  return Object.keys(industryMap).map((industry) => ({ industry }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>;
}): Promise<Metadata> {
  const { industry } = await params;
  const config = industryMap[industry as IndustrySlug];
  if (!config) return { title: "Industry" };
  return {
    title: `${config.label} Manufacturing Solutions`,
    description: `Precision manufacturing solutions for ${config.label.toLowerCase()} applications.`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry } = await params;
  const config = industryMap[industry as IndustrySlug];
  if (!config) notFound();

  const products = (await getAllProducts()).filter((product) =>
    product.industries.includes(industry),
  );

  return (
    <>
      <IndustryHero title={config.label} image={config.image} challenges={config.challenges} />
      <ApplicationsGrid industryTitle={config.label} applications={config.applications} />
      <RelatedProducts industry={config.label} products={products} />
    </>
  );
}

