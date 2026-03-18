import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import TrackChangesRoundedIcon from "@mui/icons-material/TrackChangesRounded";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const benefits = [
  {
    title: "Transparent Pricing",
    description:
      "Vendors list price per quantity tier upfront. No hidden charges or last-minute revisions.",
    icon: <VisibilityRoundedIcon sx={{ color: "secondary.main", fontSize: 34 }} />,
  },
  {
    title: "Verified Vendors Only",
    description:
      "Every vendor is reviewed and approved. Buyers can rely on performance-backed trust signals.",
    icon: <VerifiedUserRoundedIcon sx={{ color: "secondary.main", fontSize: 34 }} />,
  },
  {
    title: "Secure Communication",
    description:
      "All messages happen within the platform, with protected contact details and audit trails.",
    icon: <SecurityRoundedIcon sx={{ color: "secondary.main", fontSize: 34 }} />,
  },
  {
    title: "Real-Time Tracking",
    description:
      "Status updates at every stage with automated notifications across request-to-delivery flow.",
    icon: <TrackChangesRoundedIcon sx={{ color: "secondary.main", fontSize: 34 }} />,
  },
];

export function BenefitsSection() {
  return (
    <Box sx={{ py: 10, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Stack spacing={1.2} sx={{ mb: 3 }}>
          <Typography variant="overline" sx={{ color: "secondary.main" }}>
            Why Axis Connect?
          </Typography>
          <Typography variant="h3">Built for Better Vendor Collaboration</Typography>
        </Stack>
        <Grid container spacing={2.5}>
          {benefits.map((benefit, index) => (
            <Grid key={benefit.title} item xs={12} md={6}>
              <Stack
                direction="row"
                spacing={1.2}
                sx={{
                  p: 2,
                  border: "1px solid",
                  borderColor: "divider",
                  bgcolor: index % 2 ? "background.paper" : "rgba(26,35,126,0.03)",
                  minHeight: 140,
                }}
              >
                {benefit.icon}
                <Stack spacing={0.8}>
                  <Typography sx={{ fontWeight: 700 }}>{benefit.title}</Typography>
                  <Typography color="text.secondary">{benefit.description}</Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

