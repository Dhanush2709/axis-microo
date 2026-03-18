export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "Axis Micro consistently delivers precision parts with dependable lead times.",
    name: "Procurement Lead",
    role: "Supply Chain",
    company: "Automotive Tier-1",
  },
  {
    quote: "Their engineering team helps us solve manufacturability challenges early.",
    name: "Plant Manager",
    role: "Operations",
    company: "Hydraulic Systems OEM",
  },
  {
    quote: "We reduced rework significantly after switching to Axis Micro components.",
    name: "Quality Head",
    role: "Quality Assurance",
    company: "Pneumatic Controls Pvt Ltd",
  },
  {
    quote: "On-time delivery and transparent communication have been excellent.",
    name: "Program Manager",
    role: "NPI",
    company: "Mobility Systems Ltd",
  },
  {
    quote: "Their inspection documentation is clear and always customer-ready.",
    name: "Vendor Development Engineer",
    role: "Supplier Quality",
    company: "Industrial Motion Corp",
  },
];
