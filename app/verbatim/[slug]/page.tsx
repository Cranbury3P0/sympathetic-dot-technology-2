/**
 * /app/verbatim/[slug]/page.tsx
 *
 * Dynamic route for VERBATIM product pages.
 * Content is read from /content/products/[slug].json at build time.
 *
 * Static route /verbatim/amanuensis takes precedence — this route
 * handles all other product slugs.
 */

import { notFound } from "next/navigation";
import { getProduct, getAllProductSlugs } from "@/lib/products";
import { VerbatimProduct } from "@/components/VerbatimProduct";

/* ── Static params — pre-render all known products ─────── */

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

/* ── Metadata ───────────────────────────────────────────── */

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Not Found" };
  return {
    title: `${product.name.replace("\n", " ")} — VERBATIM / Sympathetic Technology`,
    description: product.deck,
  };
}

/* ── Page ───────────────────────────────────────────────── */

export default async function VerbatimProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return <VerbatimProduct product={product} />;
}
