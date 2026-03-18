import type { Components, Theme } from "@mui/material/styles";

export const MuiChip: Components<Theme>["MuiChip"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.shape.borderRadius * 2,
      fontWeight: 600,
    }),
  },
};

