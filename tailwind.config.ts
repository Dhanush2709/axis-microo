import type { Config } from "tailwindcss";

// Minimal Tailwind setup: only used if you decide to add utility helpers.
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;

