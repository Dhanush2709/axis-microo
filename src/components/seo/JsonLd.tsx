import Script from "next/script";

export function JsonLd({ id, data }: { id: string; data: Record<string, unknown> }) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationSchema(input: {
  name: string;
  url: string;
  logo: string;
  email: string;
  phone: string;
  address: { line1: string; city: string; state: string; pin: string };
  social: { linkedin: string; twitter: string; youtube: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: input.name,
    url: input.url,
    logo: `${input.url}${input.logo}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: input.address.line1,
      addressLocality: input.address.city,
      addressRegion: input.address.state,
      postalCode: input.address.pin,
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: input.phone,
      email: input.email,
    },
    sameAs: [input.social.linkedin, input.social.twitter, input.social.youtube],
  };
}

export function websiteSchema(input: { name: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: input.name,
    url: input.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${input.url}/products?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
