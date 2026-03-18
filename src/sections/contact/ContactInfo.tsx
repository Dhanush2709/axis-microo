import Link from "next/link";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { siteConfig } from "@/content/config/site";

export function ContactInfo() {
  return (
    <Stack spacing={2}>
      <Card sx={{ borderRadius: 0 }}>
        <CardContent>
          <Stack spacing={1.4}>
            <Typography variant="h6">Axis Micro</Typography>
            <Stack direction="row" spacing={1} alignItems="flex-start">
              <LocationOnOutlinedIcon fontSize="small" />
              <Typography
                component={Link}
                href="https://maps.google.com/?q=Axis+Micro+Pune"
                target="_blank"
                rel="noreferrer"
                sx={{ textDecoration: "none", color: "text.secondary" }}
              >
                {siteConfig.address.line1}, {siteConfig.address.city}, {siteConfig.address.state}{" "}
                {siteConfig.address.pin}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <PhoneOutlinedIcon fontSize="small" />
              <Typography component={Link} href={`tel:${siteConfig.phone}`} sx={{ textDecoration: "none", color: "text.secondary" }}>
                {siteConfig.phone}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <EmailOutlinedIcon fontSize="small" />
              <Typography component={Link} href={`mailto:${siteConfig.email}`} sx={{ textDecoration: "none", color: "text.secondary" }}>
                {siteConfig.email}
              </Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary">
              Mon–Sat 9:00am–6:00pm IST
            </Typography>
            <Stack direction="row" spacing={1}>
              <Chip icon={<WhatsAppIcon />} label="WhatsApp" component={Link} href="https://wa.me/919999999999" clickable />
              <Chip icon={<LinkedInIcon />} label="LinkedIn" component={Link} href={siteConfig.social.linkedin} clickable />
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      <Box sx={{ p: 2, border: "2px solid", borderColor: "secondary.main", bgcolor: "rgba(255,111,0,0.04)" }}>
        <Typography sx={{ color: "secondary.dark", fontWeight: 700 }}>For Vendors — Join Axis Connect</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.8 }}>
          List your services and connect with verified manufacturers.
        </Typography>
        <Typography
          component={Link}
          href={`${siteConfig.axisConnectUrl}/register?role=vendor`}
          target="_blank"
          rel="noreferrer"
          sx={{ mt: 1.1, display: "inline-block", textDecoration: "none", fontWeight: 700, color: "secondary.dark" }}
        >
          Register as Vendor →
        </Typography>
      </Box>
    </Stack>
  );
}

