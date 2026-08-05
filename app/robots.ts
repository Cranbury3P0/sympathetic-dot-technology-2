import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/web-design-intake"],
      },
    ],
    sitemap: "https://sympathetic.technology/sitemap.xml",
  };
}
