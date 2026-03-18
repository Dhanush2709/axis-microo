"use client";

import * as React from "react";

import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";

export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = React.useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <Stack direction="row" spacing={1}>
      <Tooltip title="Share on X">
        <IconButton
          component="a"
          href={`https://x.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          target="_blank"
          rel="noreferrer"
          size="small"
        >
          <XIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Share on LinkedIn">
        <IconButton
          component="a"
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noreferrer"
          size="small"
        >
          <LinkedInIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title={copied ? "Copied" : "Copy link"}>
        <IconButton onClick={copyLink} size="small">
          <ContentCopyRoundedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}
