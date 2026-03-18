import Link from "next/link";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export function SimpleInfoPage({
  title,
  description,
  ctaHref,
  ctaLabel,
}: {
  title: string;
  description: string;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={2} sx={{ maxWidth: 900 }}>
        <Typography variant="h3">{title}</Typography>
        <Typography color="text.secondary">{description}</Typography>
        {ctaHref && ctaLabel ? (
          <Button component={Link} href={ctaHref} variant="contained" sx={{ width: "fit-content" }}>
            {ctaLabel}
          </Button>
        ) : null}
      </Stack>
    </Container>
  );
}

