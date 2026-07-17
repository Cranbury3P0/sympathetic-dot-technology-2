import type { Metadata } from "next";

const title = "Speaking, Workshops & Learning — Sympathetic Technology";
const description =
  "Talks, workshops, and one-on-one learning sessions on AI, organizations, and creative work, built for the room rather than delivered as a fixed curriculum.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function VerbatimLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
