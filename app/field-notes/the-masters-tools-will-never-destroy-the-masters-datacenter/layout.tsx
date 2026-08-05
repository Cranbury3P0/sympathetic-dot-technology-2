import type { Metadata } from "next";
import { ArticleJsonLd } from "@/components/JsonLd";

const title = "The Master's Tools Will Never Dismantle the Master's Datacenter";
const description =
  "Increasingly I feel like we're trapped inside a communications environment that has become incapable of producing anything except more of itself.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/field-notes/the-masters-tools-will-never-destroy-the-masters-datacenter" },
  openGraph: {
    title,
    description,
    type: "article",
    publishedTime: "2026-07-13",
    authors: ["Sean Cranbury"],
    images: [
      {
        url: "/meta-alberta-datacenter-render.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/meta-alberta-datacenter-render.png"],
  },
};

export default function MastersDatacenterLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ArticleJsonLd
        title={title}
        description={description}
        slug="the-masters-tools-will-never-destroy-the-masters-datacenter"
        datePublished="2026-07-13"
        image="/meta-alberta-datacenter-render.png"
      />
      {children}
    </>
  );
}
