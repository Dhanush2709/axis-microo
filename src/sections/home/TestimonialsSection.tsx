"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";

import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/content/data/testimonials";

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [index, setIndex] = React.useState(0);
  const [hovered, setHovered] = React.useState(false);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi || hovered) return;
    const id = window.setInterval(() => emblaApi.scrollNext(), 5000);
    return () => window.clearInterval(id);
  }, [emblaApi, hovered]);

  return (
    <Box sx={{ py: 15, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <SectionHeader eyebrow="Client Voices" title="Trusted by Teams That Build at Scale" />

        <Box onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <Box sx={{ overflow: "hidden" }} ref={emblaRef}>
            <Box sx={{ display: "flex" }}>
              {testimonials.map((testimonial) => (
                <Box
                  key={`${testimonial.name}-${testimonial.company}`}
                  sx={{
                    flex: "0 0 100%",
                    minWidth: 0,
                    px: 1,
                    "@media (min-width:900px)": { flex: "0 0 50%" },
                    "@media (min-width:1200px)": { flex: "0 0 33.3333%" },
                  }}
                >
                  <Card sx={{ p: 2.2, height: "100%", borderRadius: 0 }}>
                    <FormatQuoteRoundedIcon sx={{ color: "secondary.main", fontSize: 36 }} />
                    <Typography sx={{ fontStyle: "italic", my: 1.5 }}>"{testimonial.quote}"</Typography>
                    <Stack direction="row" spacing={1.2} alignItems="center">
                      <Avatar>{testimonial.name[0]}</Avatar>
                      <Box>
                        <Typography sx={{ fontWeight: 700 }}>{testimonial.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role} · {testimonial.company}
                        </Typography>
                      </Box>
                    </Stack>
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>

          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
            <Stack direction="row" spacing={1}>
              <IconButton onClick={() => emblaApi?.scrollPrev()} aria-label="Previous testimonial">
                <ArrowBackIosNewRoundedIcon fontSize="small" />
              </IconButton>
              <IconButton onClick={() => emblaApi?.scrollNext()} aria-label="Next testimonial">
                <ArrowForwardIosRoundedIcon fontSize="small" />
              </IconButton>
            </Stack>

            <Stack direction="row" spacing={0.8}>
              {testimonials.map((_, dotIndex) => (
                <Box
                  key={dotIndex}
                  onClick={() => emblaApi?.scrollTo(dotIndex)}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: dotIndex === index ? "secondary.main" : "divider",
                    cursor: "pointer",
                  }}
                />
              ))}
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

