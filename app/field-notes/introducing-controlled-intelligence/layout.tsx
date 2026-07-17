import type { Metadata } from "next";

const title = "Introducing Controlled Intelligence";
const description =
  "Most healthcare associations and professional bodies have at least one staff member using consumer AI tools for their work. Leadership doesn't know which staff member it is, which documents have gone through the interface, or what commercial infrastructure is now holding information the organization considers internal.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "article",
    publishedTime: "2026-05-10",
    authors: ["Sean Cranbury"],
    images: [
      {
        url: "/VH.png",
        width: 2400,
        height: 1688,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/VH.png"],
  },
};

export default function ControlledIntelligenceLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
