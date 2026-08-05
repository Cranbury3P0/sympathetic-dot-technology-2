import { BRAND_AVATARS } from "@/lib/brand";

const BASE_URL = "https://sympathetic.technology";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sympathetic Technology",
    url: BASE_URL,
    logo: `${BASE_URL}${BRAND_AVATARS.whiteOnBlack}`,
    image: `${BASE_URL}${BRAND_AVATARS.whiteOnBlack}`,
    description:
      "Vancouver-based research, systems, and publishing practice working at the intersection of infrastructure, governance, and culture.",
    founder: { "@type": "Person", name: "Sean Cranbury" },
    foundingDate: "2009",
    sameAs: ["https://www.instagram.com/sympathetictechnology/"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vancouver",
      addressRegion: "BC",
      addressCountry: "CA",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  slug,
  datePublished,
  image,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  image?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    author: { "@type": "Person", name: "Sean Cranbury" },
    publisher: { "@type": "Organization", name: "Sympathetic Technology", url: BASE_URL },
    mainEntityOfPage: `${BASE_URL}/field-notes/${slug}`,
    ...(image ? { image: `${BASE_URL}${image}` } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
