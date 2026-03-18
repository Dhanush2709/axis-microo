import type { Components, Theme } from "@mui/material/styles";

export const MuiButton: Components<Theme>["MuiButton"] = {
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    root: {
      borderRadius: 4,
      fontWeight: 700,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      fontSize: "0.8125rem",
      transition: "transform 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease",
    },
    containedPrimary: {
      background: "linear-gradient(135deg, #1A237E 0%, #283593 100%)",
      color: "#FFFFFF",
      padding: "12px 28px",
      "&:hover": {
        transform: "translateY(-1px)",
        boxShadow: "0 8px 22px rgba(26,35,126,0.36)",
      },
    },
    containedSecondary: {
      backgroundColor: "#FF6F00",
      color: "#FFFFFF",
      padding: "12px 28px",
      "&:hover": {
        backgroundColor: "#E65100",
      },
    },
    outlinedPrimary: {
      borderWidth: 2,
      borderColor: "#1A237E",
      "&:hover": {
        borderWidth: 2,
        borderColor: "#1A237E",
        backgroundColor: "rgba(26,35,126,0.04)",
      },
    },
  },
};

