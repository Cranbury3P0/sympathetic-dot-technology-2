import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Prata } from "next/font/google";
import { LegalBar, Nav } from "sympathetic-ds";
import styles from "./page.module.css";

const prata = Prata({
  variable: "--font-field-serif",
  subsets: ["latin"],
  weight: "400",
});

const ACCENTS = {
  haida: "#b63a2b",
  basil: "#456b4d",
  sunburnt: "#d5a534",
  klein: "#002fa7",
} as const;

export const metadata: Metadata = {
  title: "Field Notes — Sympathetic Technology",
  description:
    "Observations on AI, governance, infrastructure, publishing, and cultural change.",
};

const ENTRIES = [
  {
    id: "044",
    title: "The Master’s Tools Will Never Dismantle the Master’s Datacenter",
    shortTitle: "The Master’s Datacenter",
    excerpt:
      "On Audre Lorde, Meta’s new gigawatt data centre in Alberta, and a communications environment that has learned to only reproduce itself.",
    category: "Masters Tools",
    date: "13 July 2026",
    image: "/meta-alberta-datacenter-render.png",
    imagePosition: "center",
    href: "/field-notes/the-masters-tools-will-never-destroy-the-masters-datacenter",
    accent: "klein",
  },
  {
    id: "042",
    title: "Canada’s AI Strategy 01: Frame After Frame",
    shortTitle: "Frame After Frame",
    excerpt:
      "A circle that contains circles. What Canada’s National AI Strategy diagram reveals about adoption, trust, and frames all the way down.",
    category: "AI Strategy",
    date: "04 June 2026",
    image: "/filip-kominik.jpg",
    imagePosition: "center 60%",
    href: "/field-notes/frame-within-a-frame",
    accent: "basil",
  },
  {
    id: "041",
    title: "The Pope Has Entered the Chat",
    shortTitle: "The Pope Has Entered the Chat",
    excerpt:
      "Institutional authority, authenticity, and AI in the public sphere.",
    category: "Human Dignity",
    date: "26 May 2026",
    image: "/260407-pope-leo-es.webp",
    imagePosition: "center 20%",
    href: "/field-notes/the-pope-has-entered-the-chat",
    accent: "haida",
  },
  {
    id: "040",
    title: "A New Cultural Embassy",
    shortTitle: "A New Cultural Embassy",
    excerpt:
      "Vancouver can demand something better than a server room on unceded territory.",
    category: "Cultural Infrastructure",
    date: "25 May 2026",
    image: "/cultural-embassy-vancouver-ai-cover.png",
    imagePosition: "center",
    href: "/field-notes/a-new-cultural-embassy",
    accent: "klein",
  },
  {
    id: "039",
    title: "Time for Vancouver to Come Clean About AI",
    shortTitle: "Come Clean About AI",
    excerpt:
      "Five hundred people marched because an 18-year-old organized it with a week’s notice.",
    category: "AI Infrastructure",
    date: "24 May 2026",
    image: "/Come-Clean-vancouver-ai-data-centers-cover.png",
    imagePosition: "center",
    href: "/field-notes/time-for-vancouver-to-come-clean-about-ai",
    accent: "sunburnt",
  },
  {
    id: "038",
    title: "Introducing Controlled Intelligence",
    shortTitle: "Controlled Intelligence",
    excerpt:
      "A governance-first framework for deploying AI without surrendering institutional control.",
    category: "Governance",
    date: "10 May 2026",
    image: "/VH.png",
    imagePosition: "center 60%",
    href: "/field-notes/introducing-controlled-intelligence",
    accent: "basil",
  },
  {
    id: "037",
    title: "The AI Frontier Is Inside Your Office",
    shortTitle: "Inside Your Office",
    excerpt:
      "The adoption is already over. It just didn’t go through governance.",
    category: "Governance",
    date: "05 May 2026",
    image: "/omer-haktan-bulut-xXUDcznITWA-unsplash.jpg",
    imagePosition: "center 40%",
    href: "/field-notes/the-ai-frontier-is-inside-your-office",
    accent: "haida",
  },
] as const;

const latest = ENTRIES[0];
const features = ENTRIES.slice(1, 3);
const archive = ENTRIES.slice(3);

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function accentStyle(accent: keyof typeof ACCENTS) {
  return { "--entry-accent": ACCENTS[accent] } as CSSProperties;
}

export default function FieldNotesPage() {
  return (
    <main className={`${styles.page} ${prata.variable}`}>
      <Nav activeItem="FIELD NOTES" logoHref="/" />

      <header className={styles.cover}>
        <Link
          className={styles.coverImage}
          href={latest.href}
          aria-label={`Read ${latest.title}`}
        >
          <Image
            src={latest.image}
            alt="Rendering of Meta’s proposed Alberta data centre"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 48vw"
            style={{ objectFit: "cover", objectPosition: latest.imagePosition }}
          />
          <span>Observation {latest.id}</span>
        </Link>

        <div className={styles.coverContent}>
          <div className={styles.coverKicker}>
            <span>Sympathetic Technology</span>
            <span>Field Notes / 2026</span>
          </div>

          <div className={styles.coverTitle}>
            <span>Field</span>
            <span>Notes</span>
          </div>

          <p className={styles.coverIntro}>
            Independent observations on artificial intelligence, culture,
            infrastructure, and power.
          </p>

          <div className={styles.coverFooter}>
            <span>Published from Vancouver, BC</span>
            <span>{ENTRIES.length} observations</span>
          </div>
        </div>
      </header>

      <section
        className={styles.lead}
        aria-labelledby="latest-heading"
        style={accentStyle(latest.accent)}
      >
        <div className={styles.leadTopline}>
          <span>The latest field note</span>
          <span>{latest.date}</span>
        </div>

        <article className={styles.leadSpread}>
          <div className={styles.leadHeadline}>
            <span className={styles.eyebrow}>
              Observation {latest.id} / {latest.category}
            </span>
            <h1 id="latest-heading">
              The Master’s
              <br />
              Datacenter
            </h1>
            <p>{latest.excerpt}</p>
            <Link href={latest.href} className={styles.readLink}>
              Read the field note <Arrow />
            </Link>
          </div>

          <div className={styles.leadVisual}>
            <Image
              src={latest.image}
              alt=""
              fill
              sizes="(max-width: 760px) 100vw, 53vw"
              style={{ objectFit: "cover", objectPosition: latest.imagePosition }}
            />
            <span>
              “A communications environment that has learned to reproduce
              itself.”
            </span>
          </div>
        </article>
      </section>

      <section className={styles.features} aria-labelledby="features-heading">
        <div className={styles.featureIntro}>
          <span>Current signals / 02—03</span>
          <h2 id="features-heading">Two notes from the field</h2>
        </div>

        <div className={styles.featureGrid}>
          {features.map((entry) => (
            <Link
              href={entry.href}
              className={styles.feature}
              key={entry.id}
              style={accentStyle(entry.accent)}
            >
              <div className={styles.featureImage}>
                <Image
                  src={entry.image}
                  alt=""
                  fill
                  sizes="(max-width: 760px) 90vw, 45vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: entry.imagePosition,
                  }}
                />
              </div>
              <div className={styles.featureCopy}>
                <div className={styles.featureMeta}>
                  <span>Observation {entry.id}</span>
                  <span>{entry.category} / {entry.date}</span>
                </div>
                <h3>{entry.title}</h3>
                <p>{entry.excerpt}</p>
                <span className={styles.featureArrow}>
                  Read <Arrow />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.interlude}>
        <span>Our editorial position</span>
        <blockquote>
          Looking sideways.
          <br />
          Asking who benefits.
          <br />
          Refusing the inevitable.
        </blockquote>
        <p>
          Field Notes treats technology as culture: something made by people,
          governed by institutions, and open to critique.
        </p>
      </section>

      <section className={styles.paletteBand} aria-label="Field Notes editorial colours">
        <div style={accentStyle("haida")}>
          <span>01</span>
          <strong>Haida red</strong>
        </div>
        <div style={accentStyle("basil")}>
          <span>02</span>
          <strong>Basil green</strong>
        </div>
        <div style={accentStyle("sunburnt")}>
          <span>03</span>
          <strong>Sunburnt yellow</strong>
        </div>
        <div style={accentStyle("klein")}>
          <span>04</span>
          <strong>Klein blue</strong>
        </div>
      </section>

      <section className={styles.archive} aria-labelledby="archive-heading">
        <div className={styles.archiveHeading}>
          <span>Index / Field Notes</span>
          <h2 id="archive-heading">Archive</h2>
          <p>Observations {archive[archive.length - 1].id}—{latest.id}</p>
        </div>

        <div className={styles.archiveList}>
          {archive.map((entry) => (
            <Link
              href={entry.href}
              className={styles.archiveItem}
              key={entry.id}
              style={accentStyle(entry.accent)}
            >
              <span className={styles.archiveNumber}>{entry.id}</span>
              <div className={styles.archiveImage}>
                <Image
                  src={entry.image}
                  alt=""
                  fill
                  sizes="(max-width: 760px) 28vw, 16vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: entry.imagePosition,
                  }}
                />
              </div>
              <div className={styles.archiveCopy}>
                <span>{entry.category}</span>
                <h3>{entry.shortTitle}</h3>
                <p>{entry.excerpt}</p>
              </div>
              <div className={styles.archiveDate}>
                <span>{entry.date}</span>
                <Arrow />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className={styles.fieldFooter}>
        <span>Field Notes / Sympathetic Technology</span>
        <p>Independent criticism for a technological century.</p>
        <span>Vancouver, Canada / 2026</span>
      </footer>

      <LegalBar />
    </main>
  );
}
