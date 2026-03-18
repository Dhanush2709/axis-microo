import Link from "next/link";
import Image from "next/image";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { formatDate } from "@/lib/utils";
import type { BlogFrontmatter } from "@/types/blog.types";

export function BlogCard({ post }: { post: BlogFrontmatter }) {
  return (
    <Card sx={{ borderRadius: 0, height: "100%" }}>
      <CardActionArea component={Link} href={`/blog/${post.slug}`}>
        <Image
          src={post.coverImage}
          alt={post.title}
          width={800}
          height={420}
          sizes="(max-width: 900px) 100vw, 33vw"
          style={{ width: "100%", height: 220, objectFit: "cover" }}
        />
        <CardContent>
          <Stack spacing={0.8}>
            <Chip label={post.category} size="small" color="secondary" sx={{ width: "fit-content" }} />
            <Typography variant="h6">{post.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {post.excerpt}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {formatDate(post.publishedAt)} · {post.readingTime}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

