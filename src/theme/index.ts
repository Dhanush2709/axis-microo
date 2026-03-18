import { createTheme } from "@mui/material/styles";

import { getPalette } from "@/theme/palette";
import { typography } from "@/theme/typography";
import { MuiButton } from "@/theme/overrides/MuiButton";
import { MuiCard } from "@/theme/overrides/MuiCard";
import { MuiChip } from "@/theme/overrides/MuiChip";

export function createAxisTheme(mode: "light" | "dark") {
  return createTheme({
    palette: getPalette(mode),
    typography,
    shape: {
      borderRadius: 4,
    },
    components: {
      MuiButton,
      MuiCard,
      MuiChip,
    },
  });
}

export const theme = createAxisTheme("light");

