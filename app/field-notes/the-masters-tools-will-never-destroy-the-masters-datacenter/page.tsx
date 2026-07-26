/* ─────────────────────────────────────────────────────────────
   FIELD NOTE ARTICLE — THE MASTER'S TOOLS WILL NEVER DISMANTLE
   THE MASTER'S DATACENTER
   Based on the shared Field Note article template.
───────────────────────────────────────────────────────────── */

import Image from "next/image";
import Link from "next/link";
import { Prata } from "next/font/google";
import { Nav, PrevNext } from "sympathetic-ds";
import styles from "./page.module.css";

const prata = Prata({
  variable: "--font-field-serif",
  subsets: ["latin"],
  weight: "400",
});

/* ── TYPES ── */

type RelatedObservation = { id: string; title: string; href: string };
type SupportingImage = { src: string; alt?: string; caption?: string; wide?: boolean };
type QuoteBlock = { quote: React.ReactNode[]; source?: string };
type BodyPara = React.ReactNode | QuoteBlock;

function isQuoteBlock(x: BodyPara): x is QuoteBlock {
  return typeof x === "object" && x !== null && "quote" in (x as Record<string, unknown>);
}

type ArticleData = {
  title: string;
  titleLines: string[];
  observationNumber: string;
  date: string;
  category: string;
  author: string;
  readingTime: string;
  tags: string[];
  featuredImage: string;
  featuredImagePosition?: string;
  deck: string;
  epigraph?: { text: string; source: string };
  body: BodyPara[];
  pullQuote?: string;
  pullQuoteSource?: string;
  supportingImages?: SupportingImage[];
  sourceLink?: { label: string; href: string };
  relatedObservations?: RelatedObservation[];
  previousObservation?: { title: string; href: string };
  nextObservation?: { title: string; href: string };
};

/* ── ARTICLE DATA ── */

const article: ArticleData = {
  title: "The Master's Tools Will Never Dismantle the Master's Datacenter",
  titleLines: ["THE MASTER’S", "TOOLS WILL NEVER", "DISMANTLE THE MASTER’S", "DATACENTER"],
  observationNumber: "044",
  date: "July 13, 2026",
  category: "Masters Tools",
  author: "Sean Cranbury",
  readingTime: "5 min",
  tags: ["Masters Tools", "Repetition", "Technology"],
  featuredImage: "/meta-alberta-datacenter-render.png",
  featuredImagePosition: "center center",
  deck: "Increasingly I feel like we're trapped inside a communications environment that has become incapable of producing anything except more of itself.",
  epigraph: {
    text: "This is an old and primary tool of all oppressors to keep the oppressed occupied with the master's concerns.",
    source: "Audre Lorde",
  },
  body: [
    "On September 29, 1979, Audre Lorde stood up at NYU's Institute for the Humanities and delivered an argument that has been echoing across universities, boardrooms, activist movements, and dinner tables ever since.",
    <>The occasion was a conference marking the thirtieth anniversary of the publication of Simone de Beauvoir&apos;s <em>The Second Sex</em>. The organizers assembled a panel with no Black women and no lesbians. Only late in the planning process did they recognize the omission and invite Lorde to participate.</>,
    "Rather than thanking the organizers for finally finding room for her, she used the invitation to articulate the accumulated frustration of Black women, lesbians, working-class women, and others whose experiences had been treated as optional additions to feminist thought rather than central to it.",
    "We didn't have intersections in those days, only curbs.",
    "You don't get free by winning an argument inside a centuries-old structure designed to make sure you always lose it.",
    "Lorde was talking about race, gender, power, and exclusion within feminism. She was talking about the wilful blindness of academia, too.",
    "I'm not borrowing her conclusions but I'm borrowing one of her metaphors because, nearly fifty years later, it is still as relevant as ever.",
    "Even if the context has shifted as it escaped the Ivory Tower and bestowed its withering scrutiny across the context of modern communications.",
    "News came via Reuters on July 8th of this year that Meta was building a $13 billion 1-gigawatt data centre in central Alberta.",
    {
      quote: [
        "The Alberta announcement represents the company's 33rd data center globally.",
        <>Executives made the announcement in Calgary alongside Premier Danielle Smith and other Alberta government officials, who have spent several years courting{" "}
          <a href="https://www.reuters.com/business/energy/alberta-pitches-cheap-natural-gas-data-center-boom-odds-with-canadas-clean-power-2026-06-09/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
            Silicon Valley
          </a>{" "}
          tech giants with the aim of spurring a large-scale investment in the oil-and-gas province.
        </>,
        "Alberta's technology minister, Nate Glubish, told reporters there are currently several other gigawatt-scale data center proposals in various stages of development in the province.",
        "“This is the first of its kind, the first of its size, the first of its scale, but it won’t be the last,” Glubish said.",
      ],
      source: "— Reuters",
    },
    "What is it that Sartre wrote nearly a century ago: hell is other people.",
    "The laundry list of villainy perpetrated by the people who build the tools that we use every day to communicate with one another instantaneously across vast distances is a tabulation without end and it's not my intent to enumerate them here.",
    "The tools are no longer a part of the internet just as the internet is no longer the internet that we believed we knew even tho few of us ever really understood it.",
    "Many aspects of the popular, consumer-facing internet have been fully swallowed by artificial intelligence. Whether it's the social platforms, the massive consumer platforms that seek to deliver goods straight to your door before you even know that you want them, or the ballooning number of AI-adjacent tools and services that arrive uninvited on our screen every day.",
    "It seems similar in a way to my shock and revulsion that I felt in my pre-teen years when Spider-Man flipped a switch on that fabricator in the original Secret Wars comics from 1984 and unleashed the mischievous alien intelligence that became his iconic black suit, Venom, pervasive, symbiotic intelligence that changes the host.",
    "What occurs to me is this: we're at the end of a period where we have watched these tools become less and less useful, where they only ever repeat themselves, where we repeat ourselves, echoing within the very system that many of us are trying, if not to overthrow, at least to escape.",
    "Increasingly I feel like we're trapped inside a communications environment that has become incapable of producing anything except more of itself.",
    "Repetition is repetition, after all, it's a human fate, so I guess I shouldn't complain.",
    "Other generations had Duke Ellington, the electric guitar, and color television. The laser disc, Public Enemy, the internet, and Napster. Smart phones, social media, the Jonas Brothers, and AI.",
    "Tomorrow it will be something new. We'll be outraged, voices quivering reassuringly with sanctimony, asking out loud again for the first time how it could ever come to this.",
    "But this repetition that we are experiencing and participating in right now has more than a drop of poison in it and the invisible blades of the tools that these massive corporations have built for our amusement and utility are slick with it.",
    "And the poison has a texture that gets up under our skin and turns us against one another in the comments and on the timelines and the backchannels as they continue to build datacentres in the badlands.",
    "I don't have any answer here which will come as no surprise but I have a feeling that abandoning the tools is a start, reading the classics in original book form is never a bad idea, and connecting with friends IRL is the best.",
    "Complaining about the internet on the internet, something I have worked hard to succeed at over the years, is over and done. Even though I've got a few more of these essays in me.",
    "The tools have trapped us and maybe, like the old poet said, the only way out is through.",
  ],
  pullQuote: "We live in capitalism. Its power seems inescapable. So did the divine right of kings. Any human power can be resisted and changed by human beings. Resistance and change often begin in art, and very often in our art, the art of words.",
  pullQuoteSource: "Ursula K. Le Guin",
  supportingImages: [
    {
      src: "/audre-lorde-masters-tools-penguin-modern.jpg",
      alt: "Audre Lorde, The Master's Tools Will Never Dismantle the Master's House",
      caption: "Audre Lorde, The Master's Tools Will Never Dismantle the Master's House (Penguin Modern, 2018).",
    },
    {
      src: "/venom-secret-wars-1984.avif",
      alt: "Spider-Man's black symbiote suit, from Secret Wars, 1984",
      caption: "Secret Wars, 1984 — the fabricator scene that introduced Spider-Man's black suit.",
    },
    {
      src: "/meta-alberta-datacenter-render.png",
      alt: "Rendering of Meta's proposed data centre in central Alberta",
      caption: "A rendering of Meta's proposed $13 billion, 1-gigawatt data centre in central Alberta.",
      wide: true,
    },
  ],
  sourceLink: {
    label: "Reuters: Meta to build C$13 billion Alberta data center, its first in Canada",
    href: "https://www.reuters.com/world/americas/meta-build-c13-billion-alberta-data-center-its-first-canada-2026-07-08/",
  },
  relatedObservations: [
    { id: "042", title: "Canada's AI Strategy 01 Frame after Frame", href: "/field-notes/frame-within-a-frame" },
    { id: "041", title: "The Pope Has Entered the Chat", href: "/field-notes/the-pope-has-entered-the-chat" },
    { id: "040", title: "A New Cultural Embassy", href: "/field-notes/a-new-cultural-embassy" },
    { id: "039", title: "Time for Vancouver to Come Clean About AI", href: "/field-notes/time-for-vancouver-to-come-clean-about-ai" },
  ],
  previousObservation: { title: "Canada's AI Strategy 01 Frame after Frame", href: "/field-notes/frame-within-a-frame" },
};

/* ── ARTICLE RENDERING ── */

function Paragraphs({ items }: { items: BodyPara[] }) {
  return items.map((para, i) => {
    if (isQuoteBlock(para)) {
      return (
        <blockquote className={styles.reportQuote} key={i}>
          {para.quote.map((line, j) => <p key={j}>{line}</p>)}
          {para.source && <footer>{para.source}</footer>}
        </blockquote>
      );
    }
    return <p key={i}>{para}</p>;
  });
}

function Figure({
  image,
  className = "",
}: {
  image: SupportingImage;
  className?: string;
}) {
  return (
    <figure className={`${styles.figure} ${className}`}>
      <div className={styles.figureImage}>
        <Image
          src={image.src}
          alt={image.alt ?? ""}
          fill
          sizes="(max-width: 720px) 88vw, 46vw"
          style={{ objectFit: "contain" }}
        />
      </div>
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  );
}

function FieldNoteArticleTemplate({ article }: { article: ArticleData }) {
  const supporting = article.supportingImages ?? [];

  return (
    <main className={`${styles.page} ${prata.variable}`}>
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
          <h1>
            <span>The Master’s</span>
            <span>Tools Will Never</span>
            <span>Dismantle the Master’s</span>
            <span>Datacenter</span>
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
            sizes="(max-width: 720px) 100vw, 52vw"
            style={{
              objectFit: "cover",
              objectPosition: article.featuredImagePosition ?? "center",
            }}
          />
          <span>Central Alberta / Proposed Meta datacentre</span>
        </div>
      </header>

      <section className={styles.thesis}>
        <span>Field note {article.observationNumber} / Thesis</span>
        <p>{article.deck}</p>
      </section>

      <section className={styles.reading}>
        <aside className={styles.readingRail}>
          <span>01</span>
          <p>
            Audre Lorde
            <br />
            tools
            <br />
            and structures
          </p>
        </aside>
        <article className={styles.copy}>
          {article.epigraph && (
            <blockquote className={styles.epigraph}>
              “{article.epigraph.text}”
              <footer>— {article.epigraph.source}</footer>
            </blockquote>
          )}
          <Paragraphs items={article.body.slice(0, 9)} />
        </article>
      </section>

      <section className={styles.dataPlate}>
        <div className={styles.dataPlateImage}>
          <Image
            src={article.featuredImage}
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.dataPlateCopy}>
          <span>Infrastructure / 2026</span>
          <p>
            $13 billion
            <br />
            1 gigawatt
            <br />
            central Alberta
          </p>
        </div>
      </section>

      <section className={styles.reading}>
        <aside className={styles.readingRail}>
          <span>02</span>
          <p>
            Platforms
            <br />
            repetition
            <br />
            and poison
          </p>
        </aside>
        <article className={styles.copy}>
          <Paragraphs items={article.body.slice(9, 18)} />
        </article>
      </section>

      <section className={styles.gallery} id="material-references">
        <div className={styles.galleryHeading}>
          <span>Material references</span>
          <h2>Tools, hosts, transformations</h2>
        </div>
        {supporting[0] && <Figure image={supporting[0]} className={styles.bookFigure} />}
        {supporting[1] && <Figure image={supporting[1]} className={styles.venomFigure} />}
      </section>

      <section className={styles.reading}>
        <aside className={styles.readingRail}>
          <span>03</span>
          <p>
            The only
            <br />
            way out
            <br />
            is through
          </p>
        </aside>
        <article className={styles.copy}>
          <Paragraphs items={article.body.slice(18)} />
        </article>
      </section>

      {article.pullQuote && (
        <section className={styles.closingQuote}>
          <span>On resistance</span>
          <blockquote>“{article.pullQuote}”</blockquote>
          <footer>— {article.pullQuoteSource}</footer>
        </section>
      )}

      {article.sourceLink && (
        <div className={styles.source}>
          <span>Primary source</span>
          <a href={article.sourceLink.href} target="_blank" rel="noopener noreferrer">
            {article.sourceLink.label} ↗
          </a>
        </div>
      )}

      <PrevNext previous={article.previousObservation} next={article.nextObservation} />
    </main>
  );
}

/* ── PAGE ── */
export default function MastersDatacenterArticlePage() {
  return <FieldNoteArticleTemplate article={article} />;
}
