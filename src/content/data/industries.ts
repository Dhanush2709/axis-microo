export type Industry = {
  slug: "automotive" | "hydraulic" | "pneumatic";
  title: string;
  description: string;
  applications: string[];
};

export const industries: Industry[] = [
  {
    slug: "automotive",
    title: "Automotive",
    description: "Precision-engineered components for high-volume automotive assemblies.",
    applications: ["Engine parts", "Transmission systems", "Chassis brackets", "Actuator housings"],
  },
  {
    slug: "hydraulic",
    title: "Hydraulic Systems",
    description: "High-pressure components built for durability and dimensional consistency.",
    applications: ["Hydraulic cylinders", "Fittings", "Valve bodies", "Pump assemblies"],
  },
  {
    slug: "pneumatic",
    title: "Pneumatic Systems",
    description: "Fast-response precision parts for pneumatic control and automation circuits.",
    applications: ["Valves", "Actuators", "Fittings", "Control manifolds"],
  },
];
