import type { Components, Theme } from "@mui/material/styles";

export const MuiCard: Components<Theme>["MuiCard"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.shape.borderRadius * 3,
      border: `1px solid ${theme.palette.divider}`,
      boxShadow: "none",
    }),
  },
};

