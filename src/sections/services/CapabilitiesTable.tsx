import Link from "next/link";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

const rows = [
  ["CNC Turning Center", "Mazak QT-250", "Ø300mm", "6", "±0.01mm"],
  ["Vertical Machining Center", "Haas VF-2", "762 x 406 x 508mm", "5", "±0.01mm"],
  ["Cylindrical Grinder", "Toyoda GL4", "Ø250 x 400mm", "2", "±0.005mm"],
  ["Honing Machine", "Nagel ECO", "Ø20 - Ø140mm", "2", "±0.005mm"],
  ["CMM", "Mitutoyo Crysta", "700 x 1000 x 600mm", "1", "±0.003mm"],
];

export function CapabilitiesTable() {
  return (
    <Box sx={{ py: 10, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Stack spacing={2.2}>
          <Typography variant="h3">Machine Park & Capabilities</Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Machine Type</TableCell>
                <TableCell>Model</TableCell>
                <TableCell>Capacity</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Tolerance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row[0]}>
                  {row.map((col) => (
                    <TableCell key={col}>{col}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Button
            component={Link}
            href="/downloads/company-profile.pdf"
            variant="outlined"
            sx={{ width: "fit-content" }}
          >
            Download Full Capabilities List (PDF)
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

