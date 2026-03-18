"use client";

import * as React from "react";

import Box from "@mui/material/Box";

export function ScrollProgress() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const next = scrollHeight > 0 ? Math.min(100, (scrollTop / scrollHeight) * 100) : 0;
      setProgress(next);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1400,
        height: 3,
        width: `${progress}%`,
        bgcolor: "secondary.main",
        transition: "width 80ms linear",
      }}
    />
  );
}
