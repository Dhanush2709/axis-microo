import Link from "next/link";

import MUIBreadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";

import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { siteConfig } from "@/content/config/site";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schemaItems = items.map((item) => ({
    name: item.label,
    item: `${siteConfig.url}${item.href ?? ""}`,
  }));

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <MUIBreadcrumbs aria-label="breadcrumb">
        {items.map((item, index) =>
          item.href && index !== items.length - 1 ? (
            <Typography
              key={`${item.label}-${item.href}`}
              component={Link}
              href={item.href}
              sx={{ textDecoration: "none", color: "text.secondary", fontSize: "0.85rem" }}
            >
              {item.label}
            </Typography>
          ) : (
            <Typography key={item.label} sx={{ fontSize: "0.85rem" }}>
              {item.label}
            </Typography>
          ),
        )}
      </MUIBreadcrumbs>
    </>
  );
}
