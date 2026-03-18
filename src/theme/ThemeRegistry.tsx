"use client";

import * as React from "react";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

import { createAxisTheme } from "@/theme";

function MuiThemeBridge({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const mode = resolvedTheme === "dark" ? "dark" : "light";
  const theme = React.useMemo(() => createAxisTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const emotionCache = React.useMemo(() => createCache({ key: "mui", prepend: true }), []);

  return (
    <CacheProvider value={emotionCache}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <MuiThemeBridge>{children}</MuiThemeBridge>
      </NextThemesProvider>
    </CacheProvider>
  );
}

