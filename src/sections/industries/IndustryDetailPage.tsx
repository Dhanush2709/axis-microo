import Link from "next/link";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export function IndustryDetailPage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={2} sx={{ maxWidth: 900 }}>
        <Typography variant="h3">{title}</Typography>
        <Typography color="text.secondary">{description}</Typography>
        <Typography>
          This page is designed to expand into applications, capability highlights, and related
          products—driven from typed content in <code>src/content</code>.
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
          <Button component={Link} href="/products" variant="contained">
            Explore products
          </Button>
          <Button component={Link} href="/contact" variant="outlined">
            Discuss your requirement
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

