import type { Metadata } from "next";

const title = "A New Cultural Embassy: Rethinking Vancouver's Proposed AI Data Centres";
const description =
  "Vancouver has both the standing and the structural conditions to demand something better. The data centres being proposed for this city could be anchors for the culture and art whose labour made them possible.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "article",
    publishedTime: "2026-05-25",
    authors: ["Sean Cranbury"],
    images: [
      {
        url: "/cultural-embassy-vancouver-ai-cover.png",
        width: 1024,
        height: 682,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/cultural-embassy-vancouver-ai-cover.png"],
  },
};

export default function CulturalEmbassyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
