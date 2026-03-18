import Link from "next/link";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export function CTASection() {
  return (
    <Box sx={{ py: 15, bgcolor: "background.paper" }}>
      <Container maxWidth="md">
        <Stack spacing={2} alignItems="center" textAlign="center">
          <Typography variant="h2">Ready to Start Your Next Project?</Typography>
          <Typography color="text.secondary">Get a custom quote within 24 hours</Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 1 }}>
            <Button component={Link} href="/contact" variant="contained" color="secondary" size="large">
              Request a Quote
            </Button>
            <Button component={Link} href="/downloads/company-profile.pdf" variant="outlined" size="large">
              Download Company Profile
            </Button>
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2.5} sx={{ pt: 2 }}>
            <Typography variant="caption">Response within 24 hours</Typography>
            <Typography variant="caption">ISO Certified</Typography>
            <Typography variant="caption">20+ Years Experience</Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

