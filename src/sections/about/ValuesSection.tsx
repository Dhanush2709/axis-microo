import PrecisionManufacturingRoundedIcon from "@mui/icons-material/PrecisionManufacturingRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const values = [
  {
    title: "Precision",
    text: "We hold tolerances others won't commit to.",
    icon: <PrecisionManufacturingRoundedIcon sx={{ color: "secondary.main", fontSize: 34 }} />,
  },
  {
    title: "Integrity",
    text: "Transparent timelines, honest pricing.",
    icon: <VerifiedRoundedIcon sx={{ color: "secondary.main", fontSize: 34 }} />,
  },
  {
    title: "Innovation",
    text: "Axis Connect — rethinking vendor relationships.",
    icon: <LightbulbRoundedIcon sx={{ color: "secondary.main", fontSize: 34 }} />,
  },
  {
    title: "Excellence",
    text: "ISO certified, client-first quality.",
    icon: <WorkspacePremiumRoundedIcon sx={{ color: "secondary.main", fontSize: 34 }} />,
  },
];

export function ValuesSection() {
  return (
    <Box sx={{ py: 10, bgcolor: "primary.dark", color: "#FFFFFF" }}>
      <Container maxWidth="lg">
        <Stack spacing={1.2} sx={{ mb: 3 }}>
          <Typography variant="h2" sx={{ color: "#FFFFFF" }}>
            Our Values
          </Typography>
        </Stack>

        <Grid container spacing={2.5}>
          {values.map((value) => (
            <Grid key={value.title} item xs={12} md={6}>
              <Card sx={{ borderRadius: 0, bgcolor: "rgba(255,255,255,0.08)" }}>
                <CardContent>
                  <Stack spacing={1}>
                    {value.icon}
                    <Typography sx={{ color: "#FFFFFF", fontWeight: 700 }}>{value.title}</Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.82)" }}>{value.text}</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

