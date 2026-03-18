import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const qualityPoints = [
  "CMM Inspection",
  "Statistical Process Control",
  "100% Dimensional Verification",
];

const certifications = [
  { name: "ISO 9001:2015", year: "Issued 2017" },
  { name: "IATF 16949", year: "Issued 2020" },
  { name: "ISO 14001:2015", year: "Issued 2022" },
  { name: "RoHS Compliance", year: "Audited 2024" },
  { name: "Supplier Quality Score", year: "99.8% pass rate" },
  { name: "Traceability Standard", year: "Batch-level tracking" },
];

export function QualitySection() {
  return (
    <Box sx={{ py: 14, bgcolor: "primary.dark", color: "#FFFFFF" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="overline" sx={{ color: "secondary.main" }}>
              QUALITY ASSURANCE
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, mb: 2, color: "#FFFFFF" }}>
              Certified Excellence in Every Component
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.84)", mb: 3 }}>
              Our quality philosophy combines process discipline, precision inspection, and complete
              traceability to ensure every part meets customer standards from first sample to volume
              production.
            </Typography>
            <Stack spacing={1.2}>
              {qualityPoints.map((point) => (
                <Stack key={point} direction="row" spacing={1} alignItems="center">
                  <CheckCircleRoundedIcon sx={{ color: "secondary.main" }} />
                  <Typography sx={{ color: "rgba(255,255,255,0.92)" }}>{point}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={1.5}>
              {certifications.map((cert) => (
                <Grid key={cert.name} item xs={6}>
                  <Card
                    sx={{
                      p: 1.6,
                      borderRadius: 0,
                      border: "2px solid transparent",
                      bgcolor: "#FFFFFF",
                      transition: "border-color 0.2s ease",
                      "&:hover": { borderColor: "secondary.main" },
                    }}
                  >
                    <Typography variant="overline" sx={{ color: "primary.main" }}>
                      Certification
                    </Typography>
                    <Typography sx={{ fontWeight: 700, color: "primary.main" }}>{cert.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {cert.year}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

