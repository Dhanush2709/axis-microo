import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { milestones } from "@/content/data/company";

export function MilestoneTimeline() {
  return (
    <Box sx={{ py: 10, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Stack spacing={1.2} sx={{ mb: 3 }}>
          <Typography variant="overline" sx={{ color: "secondary.main" }}>
            Milestones
          </Typography>
          <Typography variant="h3">Growth Timeline</Typography>
        </Stack>

        <Grid container spacing={2.2}>
          {milestones.map((milestone, index) => (
            <Grid key={`${milestone.year}-${milestone.title}`} item xs={12}>
              <Grid container spacing={2} direction={index % 2 ? "row-reverse" : "row"}>
                <Grid item xs={12} md={6}>
                  <Paper sx={{ p: 2, borderRadius: 0, borderLeft: "3px solid", borderLeftColor: "secondary.main" }}>
                    <Typography sx={{ fontFamily: "var(--font-barlow-condensed)", color: "secondary.main", fontSize: "2rem", lineHeight: 1, fontWeight: 700 }}>
                      {milestone.year}
                    </Typography>
                    <Typography sx={{ fontWeight: 700, mt: 0.3 }}>{milestone.title}</Typography>
                    <Typography color="text.secondary">{milestone.description}</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6} />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

