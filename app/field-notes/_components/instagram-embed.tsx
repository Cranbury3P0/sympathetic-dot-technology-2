"use client";

import Script from "next/script";
import { useEffect } from "react";
import styles from "./editorial-article.module.css";

type InstgrmWindow = Window & {
  instgrm?: { Embeds: { process: () => void } };
};

function processInstagramEmbeds() {
  (window as InstgrmWindow).instgrm?.Embeds.process();
}

export function InstagramEmbed({ permalink }: { permalink: string }) {
  const base = permalink.replace(/\/?(\?.*)?$/, "/");
  const embedPermalink = `${base}?utm_source=ig_embed&utm_campaign=loading`;

  useEffect(() => {
    processInstagramEmbeds();
  }, [embedPermalink]);

  return (
    <section className={styles.embedSection} aria-label="Embedded Instagram video">
      <span>Video / Instagram</span>
      <div className={styles.instagramEmbed}>
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink={embedPermalink}
          data-instgrm-version="14"
          style={{
            background: "#fff",
            border: 0,
            borderRadius: 3,
            boxShadow:
              "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
            margin: "0 auto",
            maxWidth: 540,
            minWidth: 280,
            padding: 0,
            width: "100%",
          }}
        />
      </div>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onReady={processInstagramEmbeds}
      />
    </section>
  );
}
