import type { Metadata } from "next";

const title = "Amanuensis — VERBATIM / Sympathetic Technology";
const description =
  "Amanuensis is the newly corrected and authoritative reprinting of the debut collection of Olivia Richards, originally issued in a pamphlet edition of 300 copies by the Freedom Collective of Ohio in 1956.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    images: [
      {
        url: "/AMANEUNSIS_FINAL.png",
        width: 1024,
        height: 1536,
        alt: "Amanuensis by Olivia Richards — Satellite Editions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/AMANEUNSIS_FINAL.png"],
  },
};

export default function AmanuensisLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
