"use client";

import * as React from "react";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import { BlogCard } from "@/sections/blog/BlogCard";
import type { BlogFrontmatter } from "@/types/blog.types";

export function BlogGrid({ posts }: { posts: BlogFrontmatter[] }) {
  const tags = React.useMemo(
    () => ["All", ...Array.from(new Set(posts.flatMap((post) => post.tags)))],
    [posts],
  );
  const [activeTag, setActiveTag] = React.useState("All");

  const filtered = React.useMemo(
    () => (activeTag === "All" ? posts : posts.filter((post) => post.tags.includes(activeTag))),
    [activeTag, posts],
  );

  return (
    <Stack spacing={2.5}>
      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
        {tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            color={activeTag === tag ? "secondary" : "default"}
            onClick={() => setActiveTag(tag)}
            clickable
          />
        ))}
      </Stack>
      <Grid container spacing={2.5}>
        {filtered.map((post) => (
          <Grid key={post.slug} item xs={12} md={4}>
            <BlogCard post={post} />
          </Grid>
        ))}
      </Grid>
      {filtered.length === 0 ? <Box>No posts found for this tag.</Box> : null}
    </Stack>
  );
}

