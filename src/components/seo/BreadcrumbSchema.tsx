import { JsonLd } from "@/components/seo/JsonLd";

type Crumb = {
  name: string;
  item: string;
};

export function BreadcrumbSchema({ items }: { items: Crumb[] }) {
  return (
    <JsonLd
      id="breadcrumb-schema"
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.item,
        })),
      }}
    />
  );
}
