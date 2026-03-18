import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export function BlogHero() {
  return (
    <Box sx={{ py: 8, bgcolor: "primary.dark", color: "#FFFFFF" }}>
      <Container maxWidth="lg">
        <Stack spacing={1}>
          <Typography variant="overline" sx={{ color: "secondary.main" }}>
            Axis Micro Blog
          </Typography>
          <Typography sx={{ fontFamily: "var(--font-barlow-condensed)", fontSize: { xs: "2.2rem", md: "3.5rem" }, fontWeight: 700 }}>
            Engineering Insights
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.82)", maxWidth: 760 }}>
            Practical articles on quality systems, machining tolerances, vendor collaboration, and
            precision manufacturing best practices.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

