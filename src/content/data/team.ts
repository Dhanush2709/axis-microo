export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
};

export const team: TeamMember[] = [
  {
    name: "Rahul Kulkarni",
    role: "Managing Director",
    bio: "Leads strategic growth and manufacturing excellence initiatives.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=60",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Sneha Patil",
    role: "Head of Quality",
    bio: "Drives quality systems, customer audits, and process capability improvements.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=60",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Amit Deshmukh",
    role: "Production Manager",
    bio: "Oversees high-mix production planning, throughput, and delivery commitments.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=60",
    linkedin: "https://www.linkedin.com",
  },
];
