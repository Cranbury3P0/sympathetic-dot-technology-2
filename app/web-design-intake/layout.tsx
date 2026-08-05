import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design Intake Form · Sympathetic Technology",
  description:
    "Vision, Instinct, and Aesthetics — an evocative intake for new web design clients.",
  openGraph: {
    title: "Web Design Intake Form · Sympathetic Technology",
    description:
      "Vision, Instinct, and Aesthetics — an evocative intake for new web design clients.",
  },
  robots: { index: false, follow: false },
};

export default function WebDesignIntakeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
