import type { PaletteOptions } from "@mui/material/styles";

export const lightPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#1A237E",
    light: "#534BAE",
    dark: "#000051",
  },
  secondary: {
    main: "#FF6F00",
    light: "#FFA040",
    dark: "#C43E00",
    contrastText: "#FFFFFF",
  },
  background: {
    default: "#F8F9FB",
    paper: "#FFFFFF",
  },
  divider: "rgba(26, 35, 126, 0.12)",
  success: { main: "#1B5E20" },
  warning: { main: "#E65100" },
  error: { main: "#B71C1C" },
  info: { main: "#0D47A1" },
  text: {
    primary: "#11183F",
    secondary: "#2C356E",
  },
};

export const darkPalette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#1A237E",
    light: "#534BAE",
    dark: "#000051",
  },
  secondary: {
    main: "#FF6F00",
    light: "#FFA040",
    dark: "#C43E00",
    contrastText: "#FFFFFF",
  },
  background: {
    default: "#080D1F",
    paper: "#0E1530",
  },
  divider: "rgba(83, 75, 174, 0.24)",
  success: { main: "#1B5E20" },
  warning: { main: "#E65100" },
  error: { main: "#B71C1C" },
  info: { main: "#0D47A1" },
};

export function getPalette(mode: "light" | "dark"): PaletteOptions {
  return mode === "dark" ? darkPalette : lightPalette;
}
