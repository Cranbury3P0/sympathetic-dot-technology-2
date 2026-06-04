"use client";

import { AccessGate } from "@/components/AccessGate";
import { FitTitleLines } from "@/components/FitTitleLines";
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
  title: "A New Cultural Embassy: Rethinking Vancouver's Proposed AI Data Centres",
  titleLines: ["A NEW", "CULTURAL", "EMBASSY"],
  observationNumber: "040",
  date: "May 25, 2026",
  category: "Cultural Infrastructure",
  author: "Sean Cranbury",
  readingTime: "9 min",
  tags: ["Cultural Embassy", "AI Data Centre", "Vancouver", "Indigenous Governance", "British Columbia"],
  featuredImage: "/cultural-embassy-vancouver-ai-cover.png",
  featuredImagePosition: "center center",
  deck: "Vancouver has both the standing and the structural conditions to demand something better. The data centres being proposed for this city could be anchors for the culture and art whose labour made them possible.",
  body: [
    "The data centres being proposed for Vancouver will consume water, draw power, and generally be corporate reminders of decisions made without consideration or consultation of the people who live, work, and create in these spaces.",
    "The centres will occupy land on unceded Coast Salish territory. They will hum with the power of the expropriated creative work of writers, artists, photographers, and coders who were never asked and never paid.",
    "Sealing that work behind a Telus logo and a server room door, accessible only to engineers and approved personnel, is another erasure.",
    "And one that we can prevent.",
    "The better approach, and Vancouver has both the standing and the structural conditions to demand it, is to build these facilities as publicly open cultural spaces that do the technical work invisibly while their public face belongs entirely to the artists, writers, and communities whose labour made the technology possible.",
    "This is not a new idea for Vancouver.",
    "The Museum of Anthropology at UBC was designed by Arthur Erickson specifically to house and honour the work of the Northwest Coastal Nations, with a great hall built to the scale of the art it holds and a skylight that falls on Bill Reid's \"The Raven and the First Men\".",
    "The welcome figures at YVR, carved by Susan Point and her son Thomas Cannell, stand at the entrance to the airport as a formal assertion of whose territory every arriving passenger has just landed on. The city already knows how to build infrastructure that begins with the question of cultural authority rather than treating it as an afterthought. The data centres represent a choice to forget that knowledge.",
    "Here's another idea: call it the Susan Point Cultural Embassy and Data Centre.",
    "Susan Point's work is threaded through the unceded territory, adorns public spaces, and speaks with the artforms she commands.",
    "The data infrastructure becomes a commitment and the funding mechanism for the cultural institution, not the other way around. An embassy isn't a mural in the lobby or a city-mandated land acknowledgment on a plaque. An embassy operates under the authority of the culture it represents, not the corporation that put together the building around it. If the Musqueam, Squamish, and Tsleil-Waututh Nations hold governance authority over the cultural spaces built inside these facilities, that's a formal recognition of territorial reality. It's also the only version of this proposal that couldn't be quietly defunded the next time a quarterly report disappoints.",
    "The precedents for this kind of cultural endowment built on institutional debt are long and complicated. Even in the centre of the DTES the Carnegie Community Centre (formerly Carnegie Library) was funded by a man whose steel mills broke workers and whose philanthropy was partly a calculated act of reputation management.",
    "The data centres being proposed for Vancouver could follow pretty much the same arc, but only if the cultural institutions they fund are structured as independent public trusts from the start, with Indigenous cultural authority at the centre, rather than as community relations programs that a VP can rebrand or dissolve.",
    "Government and industry are always going to blunder through opportunities like this with a sort of benign obliviousness that can be seen as willful ignorance. Summon the media, wear a decent suit, show off an architectural drawing, answer some vague questions, and call it a day.",
    "Not good enough.",
    "We've already established the argument for building the most ecologically and environmentally excellent data centres in the world and it suits Vancouver's posture as a future-facing city to take things further and make the data centres anchors and embassies for local culture and art, the very work and expression that makes us human, that connects us to each other and our shared histories, and the very work that these technologies extract from us without acknowledgment or compensation.",
  ],
  pullQuote: "An embassy operates under the authority of the culture it represents, not the corporation that put together the building around it.",
  supportingImages: [
    {
      src: "/Susan Point, Behind Four Winds, 2012, screenprint, Collection of the Vancouver Art Gallery.jpg",
      alt: "Susan Point, Behind Four Winds, 2012, screenprint",
      caption: "Susan Point, Behind Four Winds, 2012, screenprint. Collection of the Vancouver Art Gallery.",
    },
    {
      src: "/TelusDataCentreRendering.jpg",
      alt: "Telus data centre rendering, Vancouver",
      caption: "Architectural rendering of proposed Telus data centre. What it could be instead.",
      wide: true,
    },
  ],
  relatedObservations: [
    { id: "041", title: "The Pope Has Entered the Chat", href: "/field-notes/the-pope-has-entered-the-chat" },
    { id: "039", title: "Time for Vancouver to Come Clean About AI", href: "/field-notes/time-for-vancouver-to-come-clean-about-ai" },
    { id: "038", title: "Introducing Controlled Intelligence", href: "/field-notes/introducing-controlled-intelligence" },
  ],
  previousObservation: { title: "The Pope Has Entered the Chat", href: "/field-notes/the-pope-has-entered-the-chat" },
  nextObservation: { title: "Time for Vancouver to Come Clean About AI", href: "/field-notes/time-for-vancouver-to-come-clean-about-ai" },
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

      {/* ── OUTER GRID: rail | main ── */}
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

          {/* Sources */}
          <div style={{ borderTop: RULE, paddingTop: "1rem", marginTop: "0.5rem" }}>
            <div style={{ ...LABEL, marginBottom: "0.75rem" }}>SOURCES</div>
            {[
              { label: "The Art of Susan Point", href: "https://susanpoint.com" },
              { label: "Carnegie Community Centre", href: "https://carnegie.vcn.bc.ca" },
              { label: "Museum of Anthropology at UBC", href: "https://moa.ubc.ca" },
            ].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
                display: "block",
                fontFamily: BARLOW,
                fontWeight: 300,
                fontSize: "11px",
                lineHeight: 1.5,
                color: INK,
                opacity: 0.6,
                textDecoration: "none",
                marginBottom: "0.5rem",
              }}>
                {label} →
              </a>
            ))}
          </div>
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
              <h1>
                <FitTitleLines lines={article.titleLines} />
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
                    postSlug="a-new-cultural-embassy"
                    postTitle={article.title}
                    accessType={accessType}
                    hasAccess={hasAccess}
                  >
                    <BodyParas paras={article.body} />
                    <PullQuote />
                  </AccessGate>
                </div>

                {/* Right image column — shown for public posts */}
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
export default function CulturalEmbassyPage() {
  return <FieldNoteArticleTemplate article={article} />;
}
