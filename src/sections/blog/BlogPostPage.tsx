import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import type { ComponentProps } from "react";

import Alert from "@mui/material/Alert";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { compileMdx } from "@/lib/mdx";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { ShareButtons } from "@/components/ui/ShareButtons";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/content/config/site";

function getHeadings(source: string) {
  return source
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const title = line.replace(/^##\s+/, "").trim();
      const id = title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");
      return { id, title };
    });
}

export async function BlogPostPage({ slug }: { slug: string }) {
  const post = await getPostBySlug(slug);
  const related = await getRelatedPosts(slug, post.meta.tags);
  const headings = getHeadings(post.content);
  const compiled = await compileMdx({
    source: post.content,
    frontmatter: post.meta,
    components: {
      h2: (props: ComponentProps<"h2">) => (
        <Typography variant="h3" component="h2" sx={{ mt: 4, mb: 1.2 }} {...props} />
      ),
      blockquote: (props: ComponentProps<"blockquote">) => (
        <Alert severity="info" sx={{ my: 2 }}>
          {props.children}
        </Alert>
      ),
      pre: (props: ComponentProps<"pre">) => (
        <Box component="pre" sx={{ p: 1.5, bgcolor: "#0e1530", color: "#fff", overflowX: "auto" }} {...props} />
      ),
      table: (props: ComponentProps<"table">) => (
        <Box sx={{ overflowX: "auto", my: 2 }}>
          <Box component="table" sx={{ width: "100%", borderCollapse: "collapse", "& td, & th": { border: "1px solid", borderColor: "divider", p: 1 } }} {...props} />
        </Box>
      ),
      img: (props: ComponentProps<"img">) => (
        <Image
          src={typeof props.src === "string" ? props.src : "/og-default.jpg"}
          alt={props.alt ?? ""}
          width={1000}
          height={560}
          style={{ width: "100%", height: "auto" }}
        />
      ),
    },
  });

  return (
    <Container maxWidth="lg" sx={{ py: 7 }}>
      <JsonLd
        id={`blog-article-schema-${slug}`}
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.meta.title,
          description: post.meta.excerpt,
          image: [post.meta.coverImage],
          datePublished: post.meta.publishedAt,
          dateModified: post.meta.updatedAt ?? post.meta.publishedAt,
          author: { "@type": "Person", name: post.meta.author.name },
          publisher: { "@type": "Organization", name: siteConfig.name },
        }}
      />

      <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="flex-start">
        <Box sx={{ width: "100%", maxWidth: 700 }}>
          <Image
            src={post.meta.coverImage}
            alt={post.meta.title}
            width={1400}
            height={560}
            sizes="(max-width: 768px) 100vw, 700px"
            style={{ width: "100%", height: 400, objectFit: "cover" }}
          />
          <Stack direction="row" spacing={1.2} alignItems="center" sx={{ mt: 2 }}>
            <Avatar src={post.meta.author.avatar} alt={post.meta.author.name} />
            <Typography variant="body2" color="text.secondary">
              {post.meta.author.name} · {formatDate(post.meta.publishedAt)} · {post.meta.readingTime}
            </Typography>
          </Stack>
          <Typography variant="h2" sx={{ mt: 1.5 }}>
            {post.meta.title}
          </Typography>

          <Box sx={{ mt: 3, "& p": { color: "text.secondary", lineHeight: 1.85 } }}>{compiled.content}</Box>

          <Card sx={{ mt: 3, borderRadius: 0 }}>
            <CardContent>
              <Typography sx={{ fontWeight: 700 }}>{post.meta.author.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {post.meta.author.role}
              </Typography>
              <Stack direction="row" spacing={0.7} useFlexGap flexWrap="wrap" sx={{ mt: 1 }}>
                {post.meta.tags.map((tag) => (
                  <Chip key={tag} label={tag} size="small" />
                ))}
              </Stack>
            </CardContent>
          </Card>

          <Box sx={{ mt: 2 }}>
            <ShareButtons url={`${siteConfig.url}/blog/${slug}`} title={post.meta.title} />
          </Box>
        </Box>

        <Stack sx={{ width: { xs: "100%", md: 300 }, position: { md: "sticky" }, top: { md: 96 } }} spacing={2}>
          <Card sx={{ borderRadius: 0 }}>
            <CardContent>
              <Typography sx={{ fontWeight: 700, mb: 1 }}>Table of Contents</Typography>
              <Stack spacing={0.6}>
                {headings.map((heading) => (
                  <Typography key={heading.id} component={Link} href={`#${heading.id}`} variant="body2" sx={{ textDecoration: "none", color: "text.secondary" }}>
                    {heading.title}
                  </Typography>
                ))}
              </Stack>
            </CardContent>
          </Card>

          <Card sx={{ borderRadius: 0 }}>
            <CardContent>
              <Typography sx={{ fontWeight: 700, mb: 1 }}>Related Articles</Typography>
              <Stack spacing={1}>
                {related.map((item) => (
                  <Typography key={item.slug} component={Link} href={`/blog/${item.slug}`} variant="body2" sx={{ textDecoration: "none" }}>
                    {item.title}
                  </Typography>
                ))}
              </Stack>
            </CardContent>
          </Card>

          <Card sx={{ borderRadius: 0, border: "2px solid", borderColor: "secondary.main" }}>
            <CardContent>
              <Typography sx={{ fontWeight: 700 }}>Request a Quote</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.8 }}>
                Need support for your next precision manufacturing project?
              </Typography>
              <Typography component={Link} href="/contact" sx={{ mt: 1, display: "inline-block", fontWeight: 700, textDecoration: "none", color: "secondary.dark" }}>
                Contact Axis Micro →
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </Container>
  );
}

export async function generateBlogMetadata(slug: string): Promise<Metadata> {
  const { meta } = await getPostBySlug(slug);
  return {
    title: meta.seoTitle,
    description: meta.seoDesc,
    keywords: [...meta.tags, "precision manufacturing", "Axis Micro blog"],
    alternates: { canonical: `${siteConfig.url}/blog/${slug}` },
    openGraph: {
      title: meta.seoTitle,
      description: meta.seoDesc,
      url: `${siteConfig.url}/blog/${slug}`,
      images: [meta.coverImage],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.seoTitle,
      description: meta.seoDesc,
      images: [meta.coverImage],
    },
  };
}

