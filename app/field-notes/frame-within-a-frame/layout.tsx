import type { Metadata } from "next";

const title = "Canada's AI Strategy: It's frames all the way down";
const description =
  "It is a circle that contains circles. On what Canada's National AI Strategy diagram reveals about adoption, trust, and frames all the way down.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "article",
    publishedTime: "2026-06-04",
    authors: ["Sean Cranbury"],
    images: [
      {
        url: "/frame-within-a-frame-cover.png",
        width: 1024,
        height: 683,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/frame-within-a-frame-cover.png"],
  },
};

export default function FrameWithinAFrameLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
