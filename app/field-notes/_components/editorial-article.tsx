import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Prata } from "next/font/google";
import { Nav, PrevNext } from "sympathetic-ds";
import { InstagramEmbed } from "./instagram-embed";
import styles from "./editorial-article.module.css";

const prata = Prata({
  variable: "--font-field-serif",
  subsets: ["latin"],
  weight: "400",
});

export type EditorialAccent = "haida" | "basil" | "sunburnt" | "klein";

type RelatedObservation = { id: string; title: string; href: string };
type SupportingImage = {
  src: string;
  alt?: string;
  caption?: string;
  wide?: boolean;
  /** Fill the frame edge-to-edge (material plate); default is contain with letterboxing. */
  cover?: boolean;
  objectPosition?: string;
};
type QuoteBlock = { quote: ReactNode[]; source?: string };
type BodyItem = ReactNode | QuoteBlock;

export type EditorialArticleData = {
  title: string;
  titleLines?: string[];
  observationNumber: string;
  date: string;
  category: string;
  author: string;
  readingTime: string;
  tags: string[];
  featuredImage: string;
  featuredImagePosition?: string;
  featuredImageCredit?: string;
  deck: string;
  /** Longer opening deck copy; uses readable lead size instead of display headline scale. */
  deckAsLead?: boolean;
  definition?: string;
  epigraph?: { text: string; source: string };
  body?: BodyItem[];
  /** When set, overrides automatic three-way split of `body`. */
  bodyChapters?: BodyItem[][];
  pullQuote?: string;
  pullQuoteSource?: string;
  supportingImages?: SupportingImage[];
  sources?: { label: string; detail: string }[];
  sourceLink?: { label: string; href: string };
  relatedObservations?: RelatedObservation[];
  previousObservation?: { title: string; href: string };
  nextObservation?: { title: string; href: string };
  /** Instagram reel or post URL to embed before prev/next navigation. */
  instagramEmbed?: string;
  /** Full-width break between reading sections: accent band, pull quote, and image. */
  interludePlate?: {
    kicker: string;
    quote: string;
    image: SupportingImage;
  };
};

const ACCENTS: Record<
  EditorialAccent,
  { color: string; ink: string; name: string }
> = {
  haida: { color: "#b63a2b", ink: "#fffaf2", name: "Haida red" },
  basil: { color: "#456b4d", ink: "#fffaf2", name: "Basil green" },
  sunburnt: { color: "#d5a534", ink: "#17140d", name: "Sunburnt yellow" },
  klein: { color: "#002fa7", ink: "#fffaf2", name: "Klein blue" },
};

function isQuoteBlock(item: BodyItem): item is QuoteBlock {
  return (
    typeof item === "object" &&
    item !== null &&
    !Array.isArray(item) &&
    "quote" in item
  );
}

function BodyCopy({ items }: { items: BodyItem[] }) {
  return items.map((item, index) => {
    if (isQuoteBlock(item)) {
      return (
        <blockquote className={styles.reportQuote} key={index}>
          {item.quote.map((line, lineIndex) => (
            <p key={lineIndex}>{line}</p>
          ))}
          {item.source && <footer>— {item.source}</footer>}
        </blockquote>
      );
    }

    if (typeof item === "string" || typeof item === "number") {
      return <p key={index}>{item}</p>;
    }

    return (
      <div className={styles.richBody} key={index}>
        {item}
      </div>
    );
  });
}

function CompleteImage({
  image,
  priority = false,
}: {
  image: SupportingImage;
  priority?: boolean;
}) {
  const frameClass = image.cover
    ? `${styles.completeImage} ${styles.completeImageCover}`
    : styles.completeImage;

  return (
    <figure className={styles.figure}>
      <div className={frameClass}>
        <Image
          src={image.src}
          alt={image.alt ?? ""}
          fill
          priority={priority}
          sizes="(max-width: 760px) 92vw, 46vw"
          style={{
            objectFit: image.cover ? "cover" : "contain",
            objectPosition: image.objectPosition ?? "center",
          }}
        />
      </div>
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  );
}

export function EditorialArticle({
  article,
  accent,
}: {
  article: EditorialArticleData;
  accent: EditorialAccent;
}) {
  const palette = ACCENTS[accent];
  const supporting = article.supportingImages ?? [];
  const chapters = article.bodyChapters ?? (() => {
    const body = article.body ?? [];
    const chunkSize = Math.max(1, Math.ceil(body.length / 3));
    return [
      body.slice(0, chunkSize),
      body.slice(chunkSize, chunkSize * 2),
      body.slice(chunkSize * 2),
    ].filter((chapter) => chapter.length > 0);
  })();
  const plateImage = supporting[0] ?? {
    src: article.featuredImage,
    alt: article.title,
    caption: article.featuredImageCredit,
  };
  const galleryImages = supporting.slice(1);
  const pageStyle = {
    "--accent": palette.color,
    "--accent-ink": palette.ink,
  } as CSSProperties;

  return (
    <main
      className={`${styles.page} ${prata.variable}`}
      style={pageStyle}
      data-accent={accent}
    >
      <Nav activeItem="FIELD NOTES" logoHref="/" />

      <div className={styles.breadcrumb}>
        <Link href="/field-notes">← Field Notes</Link>
        <span>Observation {article.observationNumber}</span>
      </div>

      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <div className={styles.heroKicker}>
            <span>{article.category}</span>
            <span>{article.date}</span>
          </div>
          <h1 className={article.title.length > 48 ? styles.longTitle : ""}>
            {article.title}
          </h1>
          <div className={styles.heroMeta}>
            <span>By {article.author}</span>
            <span>{article.readingTime} read</span>
          </div>
        </div>

        <div className={styles.heroImage}>
          <Image
            src={article.featuredImage}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 760px) 100vw, 52vw"
            style={{
              objectFit: "cover",
              objectPosition: article.featuredImagePosition ?? "center",
            }}
          />
          <span>{article.featuredImageCredit ?? `Field Note ${article.observationNumber}`}</span>
        </div>
      </header>

      <section
        className={
          article.deckAsLead
            ? `${styles.thesis} ${styles.thesisLead}`
            : styles.thesis
        }
      >
        <span>
          Field note {article.observationNumber} / {palette.name}
        </span>
        <p>{article.deck}</p>
      </section>

      {article.definition && (
        <section className={styles.definition}>
          <span>Working definition</span>
          <div>
            {article.definition.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
      )}

      {chapters[0] && (
        <section className={styles.reading}>
          <aside className={styles.readingRail}>
            <span>01</span>
            <p>{article.tags.slice(0, 3).join(" / ")}</p>
          </aside>
          <article className={styles.copy}>
            {article.epigraph && (
              <blockquote className={styles.epigraph}>
                “{article.epigraph.text}”
                <footer>— {article.epigraph.source}</footer>
              </blockquote>
            )}
            <BodyCopy items={chapters[0]} />
          </article>
        </section>
      )}

      <section className={styles.materialPlate}>
        <div className={styles.materialIntro}>
          <span>Material reference / 01</span>
          <h2>{article.category}</h2>
          <p>{plateImage.caption ?? article.deck}</p>
        </div>
        <CompleteImage image={plateImage} priority />
      </section>

      {chapters[1] && (
        <section className={styles.reading}>
          <aside className={styles.readingRail}>
            <span>02</span>
            <p>
              Observation
              <br />
              argument
              <br />
              consequence
            </p>
          </aside>
          <article className={styles.copy}>
            <BodyCopy items={chapters[1]} />
          </article>
        </section>
      )}

      {article.interludePlate && (
        <section className={styles.interludePlate}>
          <div className={styles.interludeIntro}>
            <span>{article.interludePlate.kicker}</span>
            <p>{article.interludePlate.quote}</p>
          </div>
          <CompleteImage image={article.interludePlate.image} />
        </section>
      )}

      {galleryImages.length > 0 && (
        <section className={styles.gallery} id="material-references">
          <div className={styles.galleryHeading}>
            <span>Material references</span>
            <h2>Evidence, context, atmosphere</h2>
          </div>
          <div className={styles.galleryGrid}>
            {galleryImages.map((image) => (
              <CompleteImage image={image} key={image.src} />
            ))}
          </div>
        </section>
      )}

      {chapters[2] && (
        <section className={styles.reading}>
          <aside className={styles.readingRail}>
            <span>03</span>
            <p>
              The view
              <br />
              from here
            </p>
          </aside>
          <article className={styles.copy}>
            <BodyCopy items={chapters[2]} />
          </article>
        </section>
      )}

      {article.pullQuote && (
        <section
          className={
            article.deckAsLead
              ? `${styles.closingQuote} ${styles.closingQuoteLead}`
              : styles.closingQuote
          }
        >
          <span>Editorial note / {palette.name}</span>
          <blockquote>“{article.pullQuote}”</blockquote>
          {article.pullQuoteSource && (
            <footer>— {article.pullQuoteSource}</footer>
          )}
        </section>
      )}

      {(article.sources?.length || article.sourceLink) && (
        <section className={styles.sources}>
          <span>Sources / further reading</span>
          <div>
            {article.sourceLink && (
              <a
                href={article.sourceLink.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {article.sourceLink.label} ↗
              </a>
            )}
            {article.sources?.map((source) => (
              <p key={`${source.label}-${source.detail}`}>
                <strong>{source.label}</strong> {source.detail}
              </p>
            ))}
          </div>
        </section>
      )}

      {article.instagramEmbed && (
        <InstagramEmbed permalink={article.instagramEmbed} />
      )}

      <PrevNext
        previous={article.previousObservation}
        next={article.nextObservation}
      />
    </main>
  );
}
