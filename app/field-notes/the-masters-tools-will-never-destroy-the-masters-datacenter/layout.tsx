import type { Metadata } from "next";

const title = "The Master's Tools Will Never Destroy the Master's Datacenter";
const description =
  "Increasingly I feel like we're trapped inside a communications environment that has become incapable of producing anything except more of itself.";

export const metadata: Metadata = {
  title,
  description,
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
  return children;
}
