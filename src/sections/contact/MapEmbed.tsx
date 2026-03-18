import Box from "@mui/material/Box";

export function MapEmbed() {
  return (
    <Box sx={{ width: "100%", aspectRatio: "16/5", border: 0, overflow: "hidden" }}>
      <iframe
        title="Axis Micro Factory Location"
        src="https://www.google.com/maps?q=Pune%20Maharashtra&z=12&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Box>
  );
}

