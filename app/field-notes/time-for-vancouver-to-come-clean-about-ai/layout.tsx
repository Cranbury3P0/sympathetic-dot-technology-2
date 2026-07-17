import type { Metadata } from "next";

const title = "Time for Vancouver to Come Clean About AI";
const description =
  "Five hundred people marched through downtown Vancouver yesterday because an 18-year-old organized it with a week's notice. Politicians and industry should be asking themselves what the next one looks like if they keep not paying attention.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "article",
    publishedTime: "2026-05-24",
    authors: ["Sean Cranbury"],
    images: [
      {
        url: "/Come-Clean-vancouver-ai-data-centers-cover.png",
        width: 1024,
        height: 768,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/Come-Clean-vancouver-ai-data-centers-cover.png"],
  },
};

export default function ComeCleanLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
