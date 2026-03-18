export type Certification = {
  code: string;
  title: string;
  issuingBody: string;
  scope: string;
  validSince: string;
  logo: string;
  certFile: string;
};

export const certifications: Certification[] = [
  {
    code: "ISO 9001:2015",
    title: "Quality Management System",
    issuingBody: "International Organization for Standardization",
    scope: "Precision component manufacturing and quality assurance workflows.",
    validSince: "2017",
    logo:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=60",
    certFile: "/downloads/iso-9001-2015.pdf",
  },
  {
    code: "IATF 16949",
    title: "Automotive Quality Management",
    issuingBody: "International Automotive Task Force",
    scope: "Automotive manufacturing process controls and supplier quality compliance.",
    validSince: "2019",
    logo:
      "https://images.unsplash.com/photo-1581092918484-8313f0c47893?auto=format&fit=crop&w=400&q=60",
    certFile: "/downloads/iatf-16949.pdf",
  },
  {
    code: "ISO 14001",
    title: "Environmental Management System",
    issuingBody: "International Organization for Standardization",
    scope: "Environmental compliance and sustainable manufacturing operations.",
    validSince: "2021",
    logo:
      "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?auto=format&fit=crop&w=400&q=60",
    certFile: "/downloads/iso-14001.pdf",
  },
];

export type QCCheckpoint = {
  title: string;
  description: string;
  tools: string[];
};

export const qcProcess: QCCheckpoint[] = [
  {
    title: "Incoming Material Inspection",
    description: "Raw material grade, dimensions, and certifications are verified at receipt.",
    tools: ["Vernier", "Material test certificates", "Micrometer"],
  },
  {
    title: "In-Process Dimensional Checks",
    description: "Critical dimensions are monitored between process stages to avoid drift.",
    tools: ["Go/No-Go gauges", "In-process probing", "Dial indicators"],
  },
  {
    title: "CMM Inspection",
    description: "Coordinate measuring machine validates geometric tolerances and profiles.",
    tools: ["Mitutoyo CMM", "CAD comparison software"],
  },
  {
    title: "Surface Finish Measurement",
    description: "Surface roughness parameters are measured against customer requirements.",
    tools: ["Surface roughness tester", "Profile analyzer"],
  },
  {
    title: "Final Inspection Report",
    description: "Batch-level reports document dimensional, visual, and process compliance.",
    tools: ["Digital inspection records", "Traceability logs"],
  },
  {
    title: "Customer-Specific Testing",
    description: "Additional test plans are executed as per customer and industry standards.",
    tools: ["Custom fixtures", "Functional test rigs", "PPAP records"],
  },
];

export type TestingEquipment = {
  name: string;
  rangeOrAccuracy: string;
  count: number;
  image: string;
};

export const testingEquipment: TestingEquipment[] = [
  {
    name: "CMM",
    rangeOrAccuracy: "700 x 1000 x 600mm | ±0.003mm",
    count: 1,
    image:
      "https://images.unsplash.com/photo-1581092918484-8313f0c47893?auto=format&fit=crop&w=1000&q=60",
  },
  {
    name: "Surface Roughness Tester",
    rangeOrAccuracy: "Ra 0.05–40µm",
    count: 2,
    image:
      "https://images.unsplash.com/photo-1581093458791-9d15482f9fbb?auto=format&fit=crop&w=1000&q=60",
  },
  {
    name: "Hardness Tester",
    rangeOrAccuracy: "HRC / HRB multi-scale",
    count: 2,
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1000&q=60",
  },
  {
    name: "Profile Projector",
    rangeOrAccuracy: "Up to 50x optical magnification",
    count: 1,
    image:
      "https://images.unsplash.com/photo-1581090700227-1e8fe6f50d3b?auto=format&fit=crop&w=1000&q=60",
  },
  {
    name: "Spectrometer",
    rangeOrAccuracy: "Alloy composition validation",
    count: 1,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=60",
  },
  {
    name: "Vision System",
    rangeOrAccuracy: "2D profile and dimensional checks",
    count: 2,
    image:
      "https://images.unsplash.com/photo-1581091215367-59ab6dcef7f9?auto=format&fit=crop&w=1000&q=60",
  },
];
