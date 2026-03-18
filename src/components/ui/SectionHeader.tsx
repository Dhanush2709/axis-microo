import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <Stack spacing={1.5} sx={{ mb: 5, textAlign: align, maxWidth: 860, mx: align === "center" ? "auto" : 0 }}>
      <Typography variant="overline" sx={{ color: "secondary.main" }}>
        {eyebrow}
      </Typography>
      <Typography variant="h2" sx={{ fontSize: { xs: "2.2rem", md: "3rem" } }}>
        {title}
      </Typography>
      {subtitle ? (
        <Typography variant="body1" color="text.secondary">
          {subtitle}
        </Typography>
      ) : null}
    </Stack>
  );
}
