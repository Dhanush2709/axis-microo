import type { TypographyOptions } from "@mui/material/styles/createTypography";

export const typography: TypographyOptions = {
  fontFamily: "var(--font-dm-sans), system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  h1: {
    fontFamily: "var(--font-barlow-condensed), var(--font-dm-sans), sans-serif",
    fontSize: "4.5rem",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    lineHeight: 1.05,
  },
  h2: {
    fontFamily: "var(--font-barlow-condensed), var(--font-dm-sans), sans-serif",
    fontSize: "3rem",
    fontWeight: 700,
    lineHeight: 1.1,
  },
  h3: {
    fontFamily: "var(--font-barlow-condensed), var(--font-dm-sans), sans-serif",
    fontSize: "2rem",
    fontWeight: 600,
    lineHeight: 1.2,
  },
  h4: { fontSize: "1.5rem", fontWeight: 600, lineHeight: 1.25 },
  h5: { fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.3 },
  h6: { fontSize: "1rem", fontWeight: 600, lineHeight: 1.35 },
  body1: { fontSize: "1rem", fontWeight: 400, lineHeight: 1.7 },
  body2: { fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.6 },
  caption: {
    fontSize: "0.75rem",
    fontWeight: 500,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
  },
  overline: {
    fontSize: "0.75rem",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  },
  button: {
    fontWeight: 700,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    fontSize: "0.8125rem",
  },
};

