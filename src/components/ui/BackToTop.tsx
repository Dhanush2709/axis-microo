"use client";

import * as React from "react";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

export function BackToTop() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Zoom in={visible}>
      <Fab
        color="secondary"
        size="small"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        sx={{ position: "fixed", right: 20, bottom: 24, zIndex: 1300 }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}
