import Link from "next/link";
import Image from "next/image";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { getAllPosts, getFeaturedPosts } from "@/lib/blog";
import { BlogGrid } from "@/sections/blog/BlogGrid";
import { BlogHero } from "@/sections/blog/BlogHero";

export async function BlogIndexPage() {
  const [posts, featuredPosts] = await Promise.all([getAllPosts(), getFeaturedPosts()]);
  const featured = featuredPosts[0] ?? posts[0];
  const gridPosts = posts.filter((post) => post.slug !== featured?.slug);

  return (
    <>
      <BlogHero />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {featured ? (
          <Card sx={{ borderRadius: 0, mb: 4 }}>
            <CardActionArea component={Link} href={`/blog/${featured.slug}`}>
              <Box sx={{ position: "relative", minHeight: { xs: 300, md: 420 } }}>
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(8,13,31,0.1) 0%, rgba(8,13,31,0.8) 100%)",
                  }}
                />
                <CardContent sx={{ position: "absolute", bottom: 0, zIndex: 1, color: "#FFFFFF", maxWidth: 760 }}>
                  <Stack spacing={1}>
                    <Typography variant="overline" sx={{ color: "secondary.main" }}>
                      Featured Post
                    </Typography>
                    <Typography variant="h3" sx={{ color: "#FFFFFF" }}>
                      {featured.title}
                    </Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.86)" }}>{featured.excerpt}</Typography>
                    <Button variant="contained" color="secondary" sx={{ width: "fit-content" }}>
                      Read Article
                    </Button>
                  </Stack>
                </CardContent>
              </Box>
            </CardActionArea>
          </Card>
        ) : null}

        <BlogGrid posts={gridPosts} />
      </Container>
    </>
  );
}

