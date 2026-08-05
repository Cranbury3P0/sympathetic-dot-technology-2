import type { MetadataRoute } from "next";
import { getAllProductSlugs } from "@/lib/products";

const BASE_URL = "https://sympathetic.technology";

const FIELD_NOTES: { slug: string; date: string }[] = [
  { slug: "the-fight-for-truth-and-trust", date: "2026-08-05" },
  { slug: "the-masters-tools-will-never-destroy-the-masters-datacenter", date: "2026-07-13" },
  { slug: "frame-within-a-frame", date: "2026-06-04" },
  { slug: "the-pope-has-entered-the-chat", date: "2026-05-26" },
  { slug: "a-new-cultural-embassy", date: "2026-05-25" },
  { slug: "time-for-vancouver-to-come-clean-about-ai", date: "2026-05-24" },
  { slug: "introducing-controlled-intelligence", date: "2026-05-10" },
  { slug: "the-ai-frontier-is-inside-your-office", date: "2026-05-05" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/field-notes`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/meridian`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/resonance`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/controlled-intelligence`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/harvard-capstone`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/verbatim`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/verbatim/amanuensis`, changeFrequency: "monthly", priority: 0.6 },
  ];

  const fieldNoteRoutes: MetadataRoute.Sitemap = FIELD_NOTES.map(({ slug, date }) => ({
    url: `${BASE_URL}/field-notes/${slug}`,
    lastModified: date,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const productRoutes: MetadataRoute.Sitemap = getAllProductSlugs().map((slug) => ({
    url: `${BASE_URL}/verbatim/${slug}`,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...fieldNoteRoutes, ...productRoutes];
}
