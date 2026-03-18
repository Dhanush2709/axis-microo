export type Service = {
  slug: string;
  title: string;
  description: string;
  tolerances?: string;
  materials?: string[];
  capabilities: string[];
  image: string;
  axisConnectPowered?: boolean;
};

export const services: Service[] = [
  {
    slug: "precision-cnc-machining",
    title: "Precision CNC Machining",
    description: "High-accuracy machining for critical geometries and repeatable production runs.",
    tolerances: "±0.005mm",
    materials: ["Steel", "Aluminum", "Brass"],
    capabilities: ["Tolerance control", "Toolpath optimization", "Batch-to-volume scaling"],
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1400&q=60",
  },
  {
    slug: "vmc-operations",
    title: "VMC (Vertical Machining Center) Operations",
    description: "Complex profile and cavity machining for high-precision components.",
    capabilities: ["3-axis and 4-axis setups", "Fixture repeatability", "High-speed machining"],
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=60",
  },
  {
    slug: "turning-milling",
    title: "Turning & Milling",
    description: "Integrated turning and milling workflows for reduced cycle time.",
    capabilities: ["Live tooling", "Threading", "Contour and profile operations"],
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&q=60",
  },
  {
    slug: "grinding-honing",
    title: "Grinding & Honing",
    description: "Fine surface and dimensional finishing for high-spec components.",
    capabilities: ["Surface finish control", "Bore honing", "Roundness correction"],
    image:
      "https://images.unsplash.com/photo-1581093458791-9d15482f9fbb?auto=format&fit=crop&w=1400&q=60",
  },
  {
    slug: "assembly-sub-assembly",
    title: "Assembly & Sub-Assembly",
    description: "Ready-to-use assemblies with validated fit, finish, and functional checks.",
    capabilities: ["Torque validation", "Pre-dispatch checks", "Custom kitting"],
    image:
      "https://images.unsplash.com/photo-1581090700227-1e8fe6f50d3b?auto=format&fit=crop&w=1400&q=60",
  },
  {
    slug: "surface-treatment",
    title: "Surface Treatment (via Axis Connect)",
    description:
      "We use Axis Connect to source verified plating vendors with transparent pricing and traceable turnaround times.",
    capabilities: ["Vendor verification", "Transparent pricing", "Turnaround visibility"],
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1400&q=60",
    axisConnectPowered: true,
  },
  {
    slug: "quality-inspection",
    title: "Quality Inspection & Testing",
    description: "Measurement and process verification for production confidence.",
    capabilities: ["CMM support", "SPC tracking", "Documentation packs"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=60",
  },
  {
    slug: "custom-component-design",
    title: "Custom Component Design",
    description: "Design-for-manufacturing collaboration for robust and scalable parts.",
    capabilities: ["DFM reviews", "Prototype support", "Tolerance balancing"],
    image:
      "https://images.unsplash.com/photo-1581091215367-59ab6dcef7f9?auto=format&fit=crop&w=1400&q=60",
  },
];
