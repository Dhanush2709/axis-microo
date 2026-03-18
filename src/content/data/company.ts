export type CompanyStat = {
  label: string;
  value: number;
  suffix?: string;
  decimal?: number;
};

export type Milestone = {
  year: number;
  title: string;
  description: string;
  image?: string;
};

export const companyInfo = {
  foundedYear: 2005,
  founderName: "Rohit Mehta",
  founderBio:
    "A first-generation manufacturing entrepreneur focused on precision engineering and long-term customer value.",
  storyParagraphs: [
    "Axis Micro began in Pune in 2005 with a small team and one clear objective: deliver precision components that customers can trust without compromise.",
    "From early CNC operations to full process control and quality systems, the company scaled by combining technical discipline with transparent customer communication.",
    "Today Axis Micro supports automotive, hydraulic, and pneumatic programs with an experienced team, a modern machine park, and a growing digital ecosystem through Axis Connect.",
  ],
  factoryAreaSqFt: 15000,
  teamSize: 50,
  cityHQ: "Pune, Maharashtra",
} as const;

export const companyStats: CompanyStat[] = [
  { value: 500, suffix: "+", label: "Products Manufactured" },
  { value: 20, suffix: "+", label: "Years of Excellence" },
  { value: 1000, suffix: "+", label: "Satisfied Clients" },
  { value: 3, suffix: "", label: "ISO Certifications" },
  { value: 50, suffix: "+", label: "Expert Engineers" },
  { value: 99.8, suffix: "%", label: "Quality Pass Rate", decimal: 1 },
];

export const milestones: Milestone[] = [
  {
    year: 2005,
    title: "Founded in Pune, Maharashtra",
    description: "Axis Micro starts operations with a focused precision machining setup.",
  },
  {
    year: 2008,
    title: "First CNC Machine Park Established",
    description: "Expanded capacity with dedicated CNC turning and milling resources.",
  },
  {
    year: 2012,
    title: "ISO 9001:2008 Certification Achieved",
    description: "Formalized quality systems for repeatability and customer assurance.",
  },
  {
    year: 2016,
    title: "Expanded to 10,000 sq ft Facility",
    description: "Scaled floor space and process flow for larger production programs.",
  },
  {
    year: 2019,
    title: "IATF 16949 Automotive Certification",
    description: "Strengthened automotive quality compliance and supplier confidence.",
  },
  {
    year: 2022,
    title: "1000+ Products in Catalog",
    description: "Broadened product portfolio across automotive, hydraulic, and pneumatic sectors.",
  },
  {
    year: 2024,
    title: "Launched Axis Connect Platform",
    description: "Introduced digital vendor discovery and quote workflows for surface treatment.",
  },
];
