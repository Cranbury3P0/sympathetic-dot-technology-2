import type { Metadata } from "next";
import { ArticleJsonLd } from "@/components/JsonLd";

const title = "The Pope Has Entered the Chat";
const description =
  "The Pontiff of the Vatican: the man who represents the greatest collection of purloined art and cultural property in the history of the world. The co-founder of the modern digital equivalent. They sat together and talked about ethics.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/field-notes/the-pope-has-entered-the-chat" },
  openGraph: {
    title,
    description,
    type: "article",
    publishedTime: "2026-05-26",
    authors: ["Sean Cranbury"],
    images: [
      {
        url: "/260407-pope-leo-es.webp",
        width: 2500,
        height: 1667,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/260407-pope-leo-es.webp"],
  },
};

export default function PopeHasEnteredTheChatLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ArticleJsonLd
        title={title}
        description={description}
        slug="the-pope-has-entered-the-chat"
        datePublished="2026-05-26"
        image="/260407-pope-leo-es.webp"
      />
      {children}
    </>
  );
}
