import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export function IndustryHero({
  title,
  image,
  challenges,
}: {
  title: string;
  image: string;
  challenges: readonly string[];
}) {
  return (
    <Box
      sx={{
        py: 10,
        color: "#FFFFFF",
        backgroundImage: `linear-gradient(180deg, rgba(8,13,31,0.65), rgba(8,13,31,0.82)), url('${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Typography sx={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 700, fontSize: { xs: "2rem", md: "3.4rem" } }}>
              {title} Manufacturing Solutions
            </Typography>
            <Typography sx={{ mt: 1.2, color: "rgba(255,255,255,0.84)" }}>
              Axis Micro helps teams in this sector solve production and quality challenges with
              precision manufacturing expertise.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack spacing={1.1}>
              <Typography variant="overline" sx={{ color: "secondary.main" }}>
                Key Challenges
              </Typography>
              {challenges.map((challenge) => (
                <Typography key={challenge} sx={{ color: "rgba(255,255,255,0.9)" }}>
                  • {challenge}
                </Typography>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

