"use client";

import * as React from "react";

import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";

const STORAGE_KEY = "axis-micro-cookie-consent";

export function CookieBanner() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const existing = window.localStorage.getItem(STORAGE_KEY);
    setOpen(existing !== "accepted");
  }, []);

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setOpen(false);
  };

  return (
    <Collapse in={open}>
      <Container maxWidth="lg" sx={{ position: "fixed", left: 0, right: 0, bottom: 16, zIndex: 1200 }}>
        <Alert
          severity="info"
          action={
            <Button color="inherit" size="small" onClick={accept}>
              Accept
            </Button>
          }
          sx={{ borderRadius: 3, border: 1, borderColor: "divider" }}
        >
          We use cookies to improve site performance and analytics. By continuing, you agree to our
          cookie policy.
        </Alert>
      </Container>
    </Collapse>
  );
}

