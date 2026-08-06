import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sympathetic Technology",
    short_name: "Sympathetic",
    description:
      "Vancouver-based research, systems, and publishing practice working at the intersection of infrastructure, governance, and culture.",
    start_url: "/",
    display: "standalone",
    background_color: "#F0EDE6",
    theme_color: "#0A0A0A",
    icons: [
      {
        src: "/icon.png",
        sizes: "1024x1024",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "1024x1024",
        type: "image/png",
      },
    ],
  };
}
