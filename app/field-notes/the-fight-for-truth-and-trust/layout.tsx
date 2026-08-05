import type { Metadata } from "next";
import { ArticleJsonLd } from "@/components/JsonLd";

const title = "The Fight for Truth and Trust";
const description =
  "The first of three essays on the Independent International Scientific Panel on Artificial Intelligence, and why verified fact is the ground everything else stands on.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/field-notes/the-fight-for-truth-and-trust" },
  openGraph: {
    title,
    description,
    type: "article",
    publishedTime: "2026-08-05",
    authors: ["Sean Cranbury"],
    images: [
      {
        url: "/the-fight-for-truth-and-trust-og.png",
        width: 1024,
        height: 507,
        alt: "The Fight for Truth and Trust — Field Note 045",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/the-fight-for-truth-and-trust-og.png"],
  },
};

export default function FightForTruthAndTrustLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ArticleJsonLd
        title={title}
        description={description}
        slug="the-fight-for-truth-and-trust"
        datePublished="2026-08-05"
        image="/the-fight-for-truth-and-trust-og.png"
      />
      {children}
    </>
  );
}
