import Link from "next/link";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function NotFound() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={2}>
        <Typography variant="h3">Page not found</Typography>
        <Typography color="text.secondary">
          The page you’re looking for doesn’t exist or has been moved.
        </Typography>
        <Button component={Link} href="/" variant="contained" sx={{ width: "fit-content" }}>
          Go home
        </Button>
      </Stack>
    </Container>
  );
}

