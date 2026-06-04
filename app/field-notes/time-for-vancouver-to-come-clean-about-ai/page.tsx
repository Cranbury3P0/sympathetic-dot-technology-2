"use client";

import { AccessGate } from "@/components/AccessGate";
import type { AccessType } from "@/lib/access";

/* ── TYPES ── */

type RelatedObservation = { id: string; title: string; href: string };
type SupportingImage = { src: string; alt?: string; caption?: string; wide?: boolean };

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
  body: string[];
  pullQuote?: string;
  supportingImages?: SupportingImage[];
  relatedObservations?: RelatedObservation[];
  previousObservation?: { title: string; href: string };
  nextObservation?: { title: string; href: string };
  access?: AccessType;
  allowPreviewParagraphs?: number;
  stripeProductId?: string;
  stripePriceId?: string;
};

/* ── ARTICLE DATA ── */

const article: ArticleData = {
  title: "Time for Vancouver to Come Clean About AI",
  titleLines: ["TIME FOR", "VANCOUVER TO", "COME CLEAN", "ABOUT AI"],
  observationNumber: "039",
  date: "May 24, 2026",
  category: "AI Infrastructure",
  author: "Sean Cranbury",
  readingTime: "8 min",
  tags: ["AI Infrastructure", "Governance", "Vancouver", "Data Centres", "British Columbia"],
  featuredImage: "/Come-Clean-vancouver-ai-data-centers-cover.png",
  featuredImagePosition: "center center",
  deck: "Five hundred people marched through downtown Vancouver yesterday because an 18-year-old organized it with a week's notice. Politicians and industry should be asking themselves what the next one looks like if they keep not paying attention.",
  body: [
    "Five hundred people marched through downtown Vancouver yesterday because an 18-year-old organized it with a week's notice. They went from Waterfront Station, down Granville Street, over the bridge, and on to Granville Island.",
    "Anyone trying to convince themselves this was a brief tremor of disruption, a fringe reaction that will dissipate, is not reading the room. People here are not impressed by what they're seeing which appears to be government and industry pushing unpopular plans through without consultation.",
    "People here are ready to drop the gloves over this, and if the people pushing these projects aren't paying attention, it's going to get ugly.",
    "The federal government sent Evan Solomon to Vancouver to make the announcement alongside Telus, as part of Ottawa's sovereign compute initiative. Stop me if you've heard this one before: former media personality turned politician arrives to front a project the public hasn't been consulted on.",
    "The general response moved from blank stares to something closer to \"Oh hell no\" in short order, and the fact that these folks didn't see it coming was honestly not that surprising but still a clear demonstration of their lack of planning.",
    "The objections aren't complicated.",
    "No meaningful public consultation happened before this announcement, and the land it concerns is unceded Musqueam, Squamish, and Tsleil-Waututh territory. We have not heard from Elders or the water defenders of those nations. Until we do, it's genuinely unclear how this project moves forward with any legitimacy.",
    "Meanwhile Vancouver's water and electricity capacity are already under pressure from growth, wildfire season is approaching, and Stage 3 water restrictions are likely to begin in June.",
    "Against that backdrop, Mayor Ken Sim called the proposed facilities \"world-class.\" Ken has not been right about very much lately, and the idea that shoehorning a data centre into the old Hootsuite building across from the Anza Club in Mount Pleasant represents world-class anything is a claim that only survives if nobody looks too closely at what world-class actually looks like.",
    "There is no plan, stated or implied, to make these facilities the lowest-impact, most environmentally advanced buildings of their kind in the world. That plan could exist. It doesn't.",
    "What's increasingly difficult to explain is who the public narrative here is supposed to reach. AI carries genuine enthusiasm in the tech sector and in certain corners of City Hall, but a significant and growing portion of the public arrived at their skepticism honestly.",
    "The infrastructure being proposed serves a technology that built its foundation on expropriated creative work: writing, art, photography, code, scraped without consent and monetized without compensation. That's no fringe grievance, that's a real manifestation of the threat that unchecked, unregulated AI brings to people every day.",
    "That it takes more than it gives, it's indifferent to genuine human community, that industry, politicians, and the scions of tech expansion offer little more than promises of an inevitable dystopian future where the best you can hope for is UBI or temporary shift work at the silicon pools.",
    "There is a version of this that works.",
    "It requires Ottawa, Telus, and City Hall to come to the table with something they have not yet produced: a plan that begins with the Musqueam, Squamish, and Tsleil-Waututh Nations, not as stakeholders to be consulted after the fact, but as the central voice in whether and how this project proceeds.",
    "It requires an environmental commitment that isn't \"we found an old building off Main Street\" but rather a genuine ambition to build the lowest-impact, most advanced facilities of their kind anywhere in the world. BC has the clean grid, the geography, and the expertise to make that claim honestly. Why is nobody making it?!",
    "Saturday's march was organized in a week by an 18-year-old. Politicians and industry should be asking themselves what the next one looks like if they keep not paying attention.",
  ],
  pullQuote: "BC has the clean grid, the geography, and the expertise to make that claim honestly. Why is nobody making it?",
  supportingImages: [
    {
      src: "/Come-Clean-02-2026.06.13-Not-Up-to-Code.jpeg",
      alt: "Not up to code — Vancouver AI data centre protest",
      caption: "Not up to code. Vancouver, May 2026.",
    },
    {
      src: "/Come-Clean-03.jpeg",
      alt: "Vancouver march against AI data centres, May 2026",
      caption: "Five hundred people. One week's notice. An 18-year-old with a plan.",
      wide: true,
    },
  ],
  relatedObservations: [
    { id: "041", title: "The Pope Has Entered the Chat", href: "/field-notes/the-pope-has-entered-the-chat" },
    { id: "040", title: "A New Cultural Embassy", href: "/field-notes/a-new-cultural-embassy" },
    { id: "038", title: "Introducing Controlled Intelligence", href: "/field-notes/introducing-controlled-intelligence" },
  ],
  previousObservation: { title: "A New Cultural Embassy", href: "/field-notes/a-new-cultural-embassy" },
  nextObservation: { title: "Introducing Controlled Intelligence", href: "/field-notes/introducing-controlled-intelligence" },
  access: "public",
};

/* ── TOKENS ── */

const RULE = "1px solid #0A0A0A";
const BARLOW = "var(--font-barlow), sans-serif";
const CONDENSED = "var(--font-barlow-condensed), sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";
const PAPER = "#F0EDE6";
const INK = "#0A0A0A";

const NAV_ITEMS = ["SYSTEMS", "FIELD NOTES", "WORK", "VERBATIM", "ABOUT", "CONTACT", "CLIENT LOGIN"];

const NAV_STYLE: React.CSSProperties = {
  fontFamily: BARLOW, fontWeight: 500, fontSize: "14px",
  letterSpacing: "0.08em", lineHeight: 1, textTransform: "uppercase",
  textDecoration: "none", color: INK, whiteSpace: "nowrap",
};

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
        style={{ width: "100%", height: "auto", display: "block", objectFit: "cover", ...style }}
        onError={(e) => {
          const el = e.currentTarget;
          el.style.display = "none";
          const ph = el.nextElementSibling as HTMLElement | null;
          if (ph) ph.style.display = "flex";
        }}
      />
      <div style={{
        display: "none", width: "100%", aspectRatio: "16/9", border: RULE,
        alignItems: "center", justifyContent: "center", background: "#E8E4DC", ...style,
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

      {/* ── NAV ── */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.125rem 1.5rem", borderBottom: RULE }}>
        <a href="/" style={{ ...NAV_STYLE, textDecoration: "none" }}>SYMPATHETIC.TECHNOLOGY</a>
        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <a key={item} href={
              item === "SYSTEMS" ? "/systems" :
              item === "FIELD NOTES" ? "/field-notes" :
              item === "VERBATIM" ? "/verbatim" : item === "CLIENT LOGIN" ? "/client" : "#"
            } style={{
              ...NAV_STYLE,
              ...(item === "FIELD NOTES" ? { textDecoration: "underline", textUnderlineOffset: "4px" } : {}),
            }}>
              {item}
            </a>
          ))}
          <span style={{ border: RULE, width: "1.5rem", height: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "0.6rem" }}>◉</span>
        </div>
        <span className="nav-mobile-icon" style={{ border: RULE, width: "1.5rem", height: "1.5rem", display: "none", alignItems: "center", justifyContent: "center", fontSize: "0.6rem" }}>◉</span>
      </nav>

      {/* ── OUTER GRID ── */}
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

          {/* Breadcrumb */}
          <div className="fn-article-breadcrumb">
            <span style={{ fontFamily: BARLOW, fontWeight: 600, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              FIELD NOTES / {article.observationNumber}
            </span>
            <a href="/field-notes" style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", color: INK, opacity: 0.6 }}>
              ← ALL FIELD NOTES
            </a>
          </div>

          {/* ── HERO ── */}
          <div className="fn-article-hero">
            <div className="fn-article-hero-text">
              <h1 style={{
                fontFamily: CONDENSED,
                fontWeight: 900,
                fontSize: "clamp(3.5rem, 11vw, 15rem)",
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

          {/* ── BODY + IMAGES ── */}
          {(() => {
            const accessType = article.access ?? "public";
            const hasAccess = accessType === "public" ? true : false;

            function BodyParas({ paras }: { paras: string[] }) {
              return (
                <>
                  {paras.map((para, i) => (
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
                  ))}
                </>
              );
            }

            function PullQuote() {
              if (!article.pullQuote) return null;
              return (
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
                </div>
              );
            }

            return (
              <div className="fn-article-body">
                <div className="fn-article-body-text">
                  <AccessGate
                    postSlug="time-for-vancouver-to-come-clean-about-ai"
                    postTitle={article.title}
                    accessType={accessType}
                    hasAccess={hasAccess}
                  >
                    <BodyParas paras={article.body} />
                    <PullQuote />
                  </AccessGate>
                </div>

                {(accessType === "public" || hasAccess) && (
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
                )}
              </div>
            );
          })()}

          {/* ── PREVIOUS / NEXT ── */}
          <nav className="fn-article-prevnext">
            <div>
              {article.previousObservation && (
                <a href={article.previousObservation.href} style={{ textDecoration: "none", color: INK }}>
                  <div style={{ ...LABEL, marginBottom: "0.4rem", opacity: 0.5 }}>← PREVIOUS</div>
                  <div style={{ fontFamily: BARLOW, fontWeight: 400, fontSize: "14px", lineHeight: 1.3 }}>
                    {article.previousObservation.title}
                  </div>
                </a>
              )}
            </div>
            <div style={{ textAlign: "center" }}>
              <a href="/field-notes" style={{ ...LABEL, fontSize: "11px", textDecoration: "none", color: INK, opacity: 0.5 }}>
                ALL FIELD NOTES
              </a>
            </div>
            <div style={{ textAlign: "right" }}>
              {article.nextObservation && (
                <a href={article.nextObservation.href} style={{ textDecoration: "none", color: INK }}>
                  <div style={{ ...LABEL, marginBottom: "0.4rem", opacity: 0.5 }}>NEXT →</div>
                  <div style={{ fontFamily: BARLOW, fontWeight: 400, fontSize: "14px", lineHeight: 1.3 }}>
                    {article.nextObservation.title}
                  </div>
                </a>
              )}
            </div>
          </nav>

        </div>{/* end .fn-article-main */}
      </div>{/* end .fn-article-outer */}
    </main>
  );
}

/* ── PAGE ── */
export default function VancouverAIPage() {
  return <FieldNoteArticleTemplate article={article} />;
}
