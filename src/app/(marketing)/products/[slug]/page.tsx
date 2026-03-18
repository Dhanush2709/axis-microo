import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/content/config/site";
import { compileMdx } from "@/lib/mdx";
import { getProductBySlug, getProductSlugs, getRelatedProducts } from "@/lib/products";
import { ProductDetailSections } from "@/sections/products/ProductDetailSections";

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const product = await getProductBySlug(slug);
    return {
      title: product.meta.seoTitle,
      description: product.meta.seoDesc,
      keywords: [...product.meta.materials, ...product.meta.industries, product.meta.category],
      alternates: { canonical: `${siteConfig.url}/products/${slug}` },
      openGraph: {
        title: product.meta.seoTitle,
        description: product.meta.seoDesc,
        url: `${siteConfig.url}/products/${slug}`,
        images: [product.meta.thumbnail],
      },
      twitter: {
        card: "summary_large_image",
        title: product.meta.seoTitle,
        description: product.meta.seoDesc,
        images: [product.meta.thumbnail],
      },
    };
  } catch {
    return {
      title: "Product",
      description: "Product details",
    };
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const { meta, content } = await getProductBySlug(slug);
    const related = await getRelatedProducts(slug, meta.industries[0] ?? "automotive");
    const compiled = await compileMdx({ source: content, frontmatter: meta });

    return (
      <>
        <JsonLd
          id={`product-schema-${slug}`}
          data={{
            "@context": "https://schema.org",
            "@type": "Product",
            name: meta.title,
            description: meta.seoDesc,
            image: [meta.thumbnail, ...meta.images],
            manufacturer: { "@type": "Organization", name: siteConfig.name },
            brand: { "@type": "Brand", name: siteConfig.name },
          }}
        />
        <ProductDetailSections product={meta} relatedProducts={related}>
          {compiled.content}
        </ProductDetailSections>
      </>
    );
  } catch {
    notFound();
  }
}

