import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import StraightenOutlinedIcon from "@mui/icons-material/StraightenOutlined";
import TextureOutlinedIcon from "@mui/icons-material/TextureOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { qcProcess } from "@/content/data/certifications";

const icons = [
  <Inventory2OutlinedIcon key="incoming" color="secondary" />,
  <PrecisionManufacturingOutlinedIcon key="inprocess" color="secondary" />,
  <StraightenOutlinedIcon key="cmm" color="secondary" />,
  <TextureOutlinedIcon key="finish" color="secondary" />,
  <FactCheckOutlinedIcon key="final" color="secondary" />,
  <ScienceOutlinedIcon key="customer" color="secondary" />,
];

export function QCProcess() {
  return (
    <Box sx={{ py: 10, bgcolor: "background.default" }}>
      <Container maxWidth="md">
        <Stack spacing={2.2}>
          <Typography variant="h3">Quality Control Process</Typography>
          {qcProcess.map((step, index) => (
            <Paper
              key={step.title}
              sx={{ borderRadius: 0, p: 2, borderLeft: "3px solid", borderLeftColor: "secondary.main" }}
            >
              <Stack direction="row" spacing={1.2} alignItems="flex-start">
                <Box sx={{ mt: 0.2 }}>{icons[index]}</Box>
                <Stack spacing={0.6}>
                  <Typography sx={{ fontWeight: 700 }}>{step.title}</Typography>
                  <Typography color="text.secondary">{step.description}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Tools used:</strong> {step.tools.join(", ")}
                  </Typography>
                </Stack>
              </Stack>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

