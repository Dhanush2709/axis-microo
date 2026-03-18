export type CareerPosition = {
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Internship" | "Contract";
  description: string;
};

export const careerPositions: CareerPosition[] = [
  {
    title: "CNC Programmer",
    department: "Production Engineering",
    location: "Pune, Maharashtra",
    type: "Full-time",
    description: "Develop and optimize CNC programs for precision parts in high-mix production.",
  },
  {
    title: "Quality Engineer",
    department: "Quality Assurance",
    location: "Pune, Maharashtra",
    type: "Full-time",
    description: "Drive process capability, inspection planning, and customer quality documentation.",
  },
  {
    title: "Production Supervisor",
    department: "Operations",
    location: "Pune, Maharashtra",
    type: "Full-time",
    description: "Coordinate shift execution, throughput targets, and production discipline.",
  },
  {
    title: "Graduate Engineer Trainee",
    department: "Engineering",
    location: "Pune, Maharashtra",
    type: "Internship",
    description: "Hands-on training across process engineering, quality systems, and production planning.",
  },
];

