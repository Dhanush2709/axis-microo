"use client";

import * as React from "react";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={2}>
        <Typography variant="h4">Something went wrong</Typography>
        <Typography color="text.secondary">{error.message}</Typography>
        <Button variant="contained" onClick={reset} sx={{ width: "fit-content" }}>
          Try again
        </Button>
      </Stack>
    </Container>
  );
}

