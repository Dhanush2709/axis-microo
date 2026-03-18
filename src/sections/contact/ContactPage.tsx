import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { ContactForm } from "@/sections/contact/ContactForm";
import { ContactHero } from "@/sections/contact/ContactHero";
import { ContactInfo } from "@/sections/contact/ContactInfo";
import { MapEmbed } from "@/sections/contact/MapEmbed";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/content/config/site";

export function ContactPage() {
  return (
    <>
      <JsonLd
        id="contact-local-business-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: siteConfig.name,
          address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.address.line1,
            addressLocality: siteConfig.address.city,
            addressRegion: siteConfig.address.state,
            postalCode: siteConfig.address.pin,
            addressCountry: "IN",
          },
          telephone: siteConfig.phone,
          email: siteConfig.email,
          openingHours: "Mo-Sa 09:00-18:00",
          priceRange: "$$",
        }}
      />
      <ContactHero />
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <ContactForm />
            </Grid>
            <Grid item xs={12} md={5}>
              <ContactInfo />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <MapEmbed />
    </>
  );
}

