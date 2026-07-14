"use client";

/* ─────────────────────────────────────────────────────────────
   FIELD NOTE ARTICLE — THE MASTER'S TOOLS WILL NEVER DESTROY
   THE MASTER'S DATACENTER
   Based on the shared Field Note article template.
───────────────────────────────────────────────────────────── */

import { Nav, Breadcrumb, PrevNext } from "sympathetic-ds";

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
  title: "The Master's Tools Will Never Destroy the Master's Datacenter",
  titleLines: ["THE MASTER'S TOOLS", "WILL NEVER DESTROY", "THE MASTER'S DATACENTER"],
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

/* ── TOKENS ── */

const RULE = "1px solid #0A0A0A";
const BARLOW = "var(--font-barlow), sans-serif";
const CONDENSED = "var(--font-barlow-condensed), sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";
const PAPER = "#F0EDE6";
const INK = "#0A0A0A";

const LABEL: React.CSSProperties = {
  fontFamily: BARLOW, fontWeight: 600, fontSize: "10px",
  letterSpacing: "0.14em", textTransform: "uppercase", color: INK,
};

const META_VAL: React.CSSProperties = {
  fontFamily: BARLOW, fontWeight: 400, fontSize: "13px",
  lineHeight: 1.4, color: INK,
};

/* ── IMAGE PLACEHOLDER ── */

function ImgOrPlaceholder({
  src, alt = "", style, caption,
}: {
  src: string; alt?: string; style?: React.CSSProperties; caption?: string;
}) {
  return (
    <figure style={{ margin: 0 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          objectFit: "cover",
          ...style,
        }}
        onError={(e) => {
          const el = e.currentTarget;
          el.style.display = "none";
          const placeholder = el.nextElementSibling as HTMLElement | null;
          if (placeholder) placeholder.style.display = "flex";
        }}
      />
      <div style={{
        display: "none",
        width: "100%",
        aspectRatio: "16/9",
        border: RULE,
        alignItems: "center",
        justifyContent: "center",
        background: "#E8E4DC",
        ...style,
      }}>
        <span style={{ ...LABEL, fontSize: "9px", opacity: 0.5 }}>{src}</span>
      </div>
      {caption && (
        <figcaption style={{
          fontFamily: BARLOW, fontWeight: 300, fontSize: "11px",
          letterSpacing: "0.04em", color: INK, opacity: 0.6,
          marginTop: "0.5rem", lineHeight: 1.4,
        }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* ── ARTICLE TEMPLATE ── */

function FieldNoteArticleTemplate({ article }: { article: ArticleData }) {
  return (
    <main style={{ backgroundColor: PAPER, color: INK, margin: 0, minHeight: "100vh" }}>

      <Nav activeItem="FIELD NOTES" logoHref="/" />

      <div className="fn-article-outer">

        {/* ── LEFT RAIL ── */}
        <aside className="fn-article-rail">

          <div style={{ marginBottom: "1.5rem" }}>
            <div style={{ ...LABEL, marginBottom: "0.3rem" }}>OBSERVATION</div>
            <div style={{ fontFamily: CONDENSED, fontWeight: 900, fontSize: "2rem", letterSpacing: "-0.02em", lineHeight: 0.9 }}>
              {article.observationNumber}
            </div>
          </div>

          <div style={{ borderTop: RULE, paddingTop: "1rem", marginBottom: "1rem" }}>
            <div style={{ ...LABEL, marginBottom: "0.25rem" }}>DATE</div>
            <div style={META_VAL}>{article.date}</div>
          </div>

          <div style={{ borderTop: RULE, paddingTop: "1rem", marginBottom: "1rem" }}>
            <div style={{ ...LABEL, marginBottom: "0.25rem" }}>CATEGORY</div>
            <div style={META_VAL}>{article.category}</div>
          </div>

          <div style={{ borderTop: RULE, paddingTop: "1rem", marginBottom: "1rem" }}>
            <div style={{ ...LABEL, marginBottom: "0.35rem" }}>TAGS</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem" }}>
              {article.tags.map((tag) => (
                <span key={tag} style={{ ...META_VAL, fontSize: "11px" }}>{tag}</span>
              ))}
            </div>
          </div>

          <div style={{ borderTop: RULE, paddingTop: "1rem", marginBottom: "1rem" }}>
            <div style={{ ...LABEL, marginBottom: "0.25rem" }}>AUTHOR</div>
            <div style={META_VAL}>{article.author}</div>
          </div>

          <div style={{ borderTop: RULE, paddingTop: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ ...LABEL, marginBottom: "0.25rem" }}>READING TIME</div>
            <div style={META_VAL}>{article.readingTime}</div>
          </div>

          {article.relatedObservations && (
            <div className="fn-article-rail-related" style={{ borderTop: RULE, paddingTop: "1rem" }}>
              <div style={{ ...LABEL, marginBottom: "1rem" }}>RELATED OBSERVATIONS</div>
              {article.relatedObservations.map((obs) => (
                <a key={obs.id} href={obs.href} style={{ display: "block", textDecoration: "none", marginBottom: "1rem" }}>
                  <div style={{ fontFamily: CONDENSED, fontWeight: 900, fontSize: "1.1rem", letterSpacing: "-0.01em", lineHeight: 0.9, color: INK }}>
                    {obs.id}
                  </div>
                  <div style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "12px", lineHeight: 1.4, color: INK, marginTop: "0.2rem" }}>
                    {obs.title}
                  </div>
                </a>
              ))}
            </div>
          )}
        </aside>

        {/* ── MAIN CONTENT ── */}
        <div className="fn-article-main">

          <Breadcrumb observationNumber={article.observationNumber} />

          <div className="fn-article-hero">
            <div className="fn-article-hero-text">
              <h1 style={{
                fontFamily: CONDENSED,
                fontWeight: 900,
                fontSize: "clamp(1.75rem, 6.5vw, 7.5rem)",
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                lineHeight: 0.88,
                margin: 0,
              }}>
                {article.titleLines.map((line, i) => (
                  <span key={i} style={{ display: "block", whiteSpace: "nowrap" }}>{line}</span>
                ))}
              </h1>
            </div>

            <div className="fn-article-hero-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.featuredImage}
                alt={article.title}
                style={{ objectPosition: article.featuredImagePosition ?? "center center" }}
              />
            </div>
          </div>

          {/* ── DECK ── */}
          <div className="fn-article-deck">
            <p style={{
              fontFamily: SERIF,
              fontWeight: 400,
              fontSize: "clamp(1.4rem, 2.2vw, 2.2rem)",
              lineHeight: 1.45,
              margin: 0,
              maxWidth: "52ch",
            }}>
              {article.deck}
            </p>
          </div>

          {/* ── BODY + RIGHT IMAGES ── */}
          <div className="fn-article-body">
            <div className="fn-article-body-text">

              {/* Epigraph */}
              {article.epigraph && (
                <blockquote style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: "20px",
                  lineHeight: 1.6,
                  margin: "0 0 2rem",
                  paddingLeft: "1.25rem",
                  borderLeft: `3px solid ${INK}`,
                  color: INK,
                }}>
                  &ldquo;{article.epigraph.text}&rdquo;
                  <footer style={{
                    fontFamily: BARLOW, fontStyle: "normal", fontWeight: 500,
                    fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase",
                    marginTop: "0.75rem", opacity: 0.7,
                  }}>
                    — {article.epigraph.source}
                  </footer>
                </blockquote>
              )}

              {/* Body paragraphs (plain text, JSX, or quote blocks) */}
              {article.body.map((para, i) => {
                if (isQuoteBlock(para)) {
                  return (
                    <blockquote key={i} style={{
                      fontFamily: SERIF,
                      fontStyle: "italic",
                      fontSize: "17px",
                      lineHeight: 1.75,
                      margin: "0 0 1.5rem",
                      padding: "1rem 1.5rem",
                      borderLeft: `3px solid ${INK}`,
                      background: "#E8E4DC",
                      color: INK,
                    }}>
                      {para.quote.map((line, j) => (
                        <p key={j} style={{ margin: j < para.quote.length - 1 ? "0 0 1rem" : 0 }}>
                          {line}
                        </p>
                      ))}
                      {para.source && (
                        <footer style={{
                          fontFamily: BARLOW, fontStyle: "normal", fontWeight: 500,
                          fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase",
                          marginTop: "0.75rem", opacity: 0.7,
                        }}>
                          {para.source}
                        </footer>
                      )}
                    </blockquote>
                  );
                }
                return (
                  <p key={i} style={{
                    fontFamily: SERIF,
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: 1.8,
                    margin: "0 0 1.5rem",
                    color: INK,
                  }}>
                    {para}
                  </p>
                );
              })}

              {/* Pull quote */}
              {article.pullQuote && (
                <div className="fn-article-pull-quote">
                  <blockquote style={{
                    fontFamily: CONDENSED,
                    fontWeight: 700,
                    fontSize: "clamp(1.75rem, 3.5vw, 4rem)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.05,
                    margin: 0,
                    fontStyle: "normal",
                    color: INK,
                  }}>
                    &ldquo;{article.pullQuote}&rdquo;
                  </blockquote>
                  {article.pullQuoteSource && (
                    <footer style={{
                      fontFamily: BARLOW, fontWeight: 500,
                      fontSize: "13px", letterSpacing: "0.06em", textTransform: "uppercase",
                      marginTop: "1rem", opacity: 0.7,
                    }}>
                      — {article.pullQuoteSource}
                    </footer>
                  )}
                </div>
              )}

              {/* Source link */}
              {article.sourceLink && (
                <div style={{ borderTop: RULE, marginTop: "1rem", paddingTop: "1rem" }}>
                  <div style={{ ...LABEL, marginBottom: "0.4rem" }}>SOURCE</div>
                  <a
                    href={article.sourceLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: BARLOW, fontWeight: 400, fontSize: "13px", color: INK }}
                  >
                    {article.sourceLink.label}
                  </a>
                </div>
              )}
            </div>

            {/* Right image column */}
            <div className="fn-article-body-images">
              {article.supportingImages?.map((img, i) => (
                <ImgOrPlaceholder
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  caption={img.caption}
                  style={{ aspectRatio: img.wide ? "16/9" : "3/4", objectFit: "cover" }}
                />
              ))}
            </div>
          </div>

          {/* ── PREVIOUS / NEXT ── */}
          <PrevNext previous={article.previousObservation} next={article.nextObservation} />

        </div>
      </div>
    </main>
  );
}

/* ── PAGE ── */
export default function MastersDatacenterArticlePage() {
  return <FieldNoteArticleTemplate article={article} />;
}
