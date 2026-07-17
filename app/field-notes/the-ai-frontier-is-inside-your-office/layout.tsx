import type { Metadata } from "next";

const title = "The AI Frontier Is Inside Your Office";
const description = "The adoption is already over. It just didn't go through governance.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "article",
    publishedTime: "2026-05-05",
    authors: ["Sean Cranbury"],
    images: [
      {
        url: "/omer-haktan-bulut-xXUDcznITWA-unsplash.jpg",
        width: 6240,
        height: 4160,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/omer-haktan-bulut-xXUDcznITWA-unsplash.jpg"],
  },
};

export default function AIFrontierLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
