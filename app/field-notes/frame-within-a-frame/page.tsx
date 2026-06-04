"use client";

import type { ReactNode } from "react";
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
  body: ReactNode[];
  pullQuote?: string;
  supportingImages?: SupportingImage[];
  relatedObservations?: RelatedObservation[];
  previousObservation?: { title: string; href: string };
  nextObservation?: { title: string; href: string };
  access?: AccessType;
};

/* ── ARTICLE DATA ── */

const STRATEGY_URL = "https://ised-isde.canada.ca/site/ised/en/canadas-national-artificial-intelligence-strategy-ai-all";

const article: ArticleData = {
  title: "Canada's AI Strategy 01 Frame after Frame",
  titleLines: ["CANADA'S AI", "STRATEGY 01", "FRAME AFTER FRAME"],
  observationNumber: "042",
  date: "June 4, 2026",
  category: "AI Strategy & Governance",
  author: "Sean Cranbury",
  readingTime: "7 min",
  tags: ["AI Strategy", "Governance", "Canada", "Adoption", "Trust", "Sovereignty"],
  featuredImage: "/frame-within-a-frame-cover.png",
  featuredImagePosition: "center center",
  deck: "It is a circle that contains circles. There is an inadvertent hypnosis to it, arrows curling around the inner ring and not quite agreeing on which way to turn. Weird vibes. Don't blame the bureaucrats for that. They were doing their best with a hard brief, and the picture they landed on is more honest than they probably intended.",
  body: [
    <>
      Today Evan Solomon, the minister in charge of Canada&apos;s AI file, released{" "}
      <a
        href={STRATEGY_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#0A0A0A", textDecoration: "underline", textUnderlineOffset: "2px" }}
      >
        Canada&apos;s National AI Strategy
      </a>
      : AI for All. It is a large document that touches a lot of ground, and it will take slow, careful reading over the next few weeks to do it justice.
    </>,
    "I'm planning a series of essays on the parts that sit closest to my work. In no particular order: the case for sovereign AI, especially in healthcare, and how the strategy speaks to it; the commitment, or the lack of one, to Canadian writers, artists, filmmakers, and other creators, and whether copyright has quietly been abandoned; and what the future of work looks like for people who have no interest in jumping into the hype, or whose jobs get cut by executives using AI as the reason. There will be other thoughts too.",
    "But let's start where the document starts, with a diagram.",
    "Here is what it shows. The outermost ring holds the six pillars, from protecting Canadians to building global alliances. Inside that ring sit three words: trust, opportunity, sovereignty.",
    "Inside that, the part that actually moves, written three times and chased by those confused little arrows, is adoption.",
    "And in the dark center, still, not spinning, are the words \"AI for All.\"",
    "The slogan sits at the calm middle. The engine is one ring out, and the engine is adoption.",
    "The introduction says the same thing in plain sentences. Canadians benefit from AI only if they use it, the document reasons, and they will use it only if they trust it. Then: \"Trust makes adoption possible. Opportunity and sovereignty ensure adoption creates benefits.\"",
    "Trust, opportunity, and sovereignty are framing around a verb. The whole apparatus exists to get Canadians adopting.",
    "Here's the money quote: \"Trust is the north star of this strategy. Prosperity and sovereignty in this era belong to nations that can leverage trust to adopt, build, and govern AI on their own terms.\"",
    "Trust is a lever. You pull it to make the wheel go. Whether the systems have earned anyone's trust is a different question, and the diagram has no ring for that.",
    "And what exactly are we saying when we deploy the words \"Prosperity and sovereignty in this era\u2026\"? There seems to be something happening in that sentence that goes beyond a simple \"we're adapting to modern innovations and cultural change\" and into another place. What is it implying about future geopolitical relationships, future battlefields, the future of territorial rights?",
    "This is where the frames go all the way down. Watch what happens to the people who decline to participate.",
    "Statistics Canada finds that 78 percent of firms not using AI say they don't see how it helps the goods or services they sell. The strategy cannot let that stand as a judgment on the products, so it reframes it: \"a translation problem,\" and, to be safe, \"not resistance.\" A clear no becomes a vocabulary gap. Open that frame and there is another one behind it, the one where the customer was never allowed to be right.",
    "I have studied AI and I read widely across several channels and as many points of view as I can stomach (note: not all AI POVs are digestible). Adoption is a thing that comes up a lot.",
    "It is a common place that a person reaches after AI does something useful or interesting against a real problem. You try it again and get a similar result. Try it again and it hallucinates. Trust comes and goes.",
    "Canada's AI strategy runs the logic backward. It sets a target, sixty percent of businesses using AI by 2034, up from twelve today, and then asks what trust and literacy it will take to hit the number. Once adoption is the figure you're optimizing, everything else gets tuned to produce it, including the value you just called your north star.",
    "So: frames within frames. The pillars frame the values, the values frame adoption, adoption frames a slogan that doesn't move. Keep opening them, expecting to reach the thing the strategy is finally for, and you arrive at the still point in the middle that says \"AI for All\" and tells you nothing about who, or on whose terms. The bureaucrats drew an honest picture. The center is a frame too.",
  ],
  pullQuote: "The center is a frame too.",
  supportingImages: [
    {
      src: "/canada-ai-strategy-diagram.png",
      alt: "Canada's National AI Strategy diagram — six pillars, trust, opportunity, sovereignty, adoption, and AI for All at the center",
      caption: "Canada's National AI Strategy: AI for All — the labeled diagram from the opening of the document.",
    },
  ],
  relatedObservations: [
    { id: "041", title: "The Pope Has Entered the Chat", href: "/field-notes/the-pope-has-entered-the-chat" },
    { id: "040", title: "A New Cultural Embassy", href: "/field-notes/a-new-cultural-embassy" },
    { id: "038", title: "Introducing Controlled Intelligence", href: "/field-notes/introducing-controlled-intelligence" },
  ],
  previousObservation: { title: "The Pope Has Entered the Chat", href: "/field-notes/the-pope-has-entered-the-chat" },
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
        style={{ width: "100%", height: "auto", display: "block", objectFit: "contain", ...style }}
        onError={(e) => {
          const el = e.currentTarget;
          el.style.display = "none";
          const ph = el.nextElementSibling as HTMLElement | null;
          if (ph) ph.style.display = "flex";
        }}
      />
      <div style={{
        display: "none", width: "100%", aspectRatio: "1/1", border: RULE,
        alignItems: "center", justifyContent: "center", background: "transparent", ...style,
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

      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.125rem 1.5rem", borderBottom: RULE }}>
        <a href="/" style={{ ...NAV_STYLE, textDecoration: "none" }}>SYMPATHETIC.TECHNOLOGY</a>
        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <a key={item} href={
              item === "SYSTEMS" ? "/systems" :
              item === "FIELD NOTES" ? "/field-notes" :
              item === "VERBATIM" ? "/verbatim" : item === "CLIENT LOGIN" ? "/client" : "#"
            } style={{ ...NAV_STYLE, ...(item === "FIELD NOTES" ? { textDecoration: "underline", textUnderlineOffset: "4px" } : {}) }}>
              {item}
            </a>
          ))}
          <span style={{ border: RULE, width: "1.5rem", height: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "0.6rem" }}>◉</span>
        </div>
        <span className="nav-mobile-icon" style={{ border: RULE, width: "1.5rem", height: "1.5rem", display: "none", alignItems: "center", justifyContent: "center", fontSize: "0.6rem" }}>◉</span>
      </nav>

      <div className="fn-article-outer">

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
                  <div style={{ fontFamily: CONDENSED, fontWeight: 900, fontSize: "1.1rem", letterSpacing: "-0.01em", lineHeight: 0.9, color: INK }}>{obs.id}</div>
                  <div style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "12px", lineHeight: 1.4, color: INK, marginTop: "0.2rem" }}>{obs.title}</div>
                </a>
              ))}
            </div>
          )}
        </aside>

        <div className="fn-article-main">

          <div className="fn-article-breadcrumb">
            <span style={{ fontFamily: BARLOW, fontWeight: 600, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              FIELD NOTES / {article.observationNumber}
            </span>
            <a href="/field-notes" style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none", color: INK, opacity: 0.6 }}>
              ← ALL FIELD NOTES
            </a>
          </div>

          <div className="fn-article-hero">
            <div className="fn-article-hero-text">
              <h1 style={{ fontFamily: CONDENSED, fontWeight: 900, fontSize: "clamp(3.5rem, 11vw, 15rem)", letterSpacing: "-0.02em", textTransform: "uppercase", lineHeight: 0.88, margin: 0 }}>
                {article.titleLines.map((line, i) => (
                  <span key={i} style={{ display: "block", whiteSpace: "nowrap" }}>{line}</span>
                ))}
              </h1>
            </div>
            <div className="fn-article-hero-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={article.featuredImage} alt={article.title} style={{ objectPosition: article.featuredImagePosition ?? "center center" }} />
            </div>
          </div>

          <div className="fn-article-deck">
            <p style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(1.4rem, 2.2vw, 2.2rem)", lineHeight: 1.45, margin: 0, maxWidth: "52ch" }}>
              {article.deck}
            </p>
          </div>

          {(() => {
            const accessType = article.access ?? "public";
            const hasAccess = accessType === "public" ? true : false;

            function BodyParas({ paras }: { paras: ReactNode[] }) {
              return (
                <>
                  {paras.map((para, i) => (
                    <p key={i} style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "18px", lineHeight: 1.8, margin: "0 0 1.5rem", color: INK }}>
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
                  <blockquote style={{ fontFamily: CONDENSED, fontWeight: 700, fontSize: "clamp(1.75rem, 3.5vw, 4rem)", letterSpacing: "-0.02em", lineHeight: 1.05, margin: 0, fontStyle: "normal", color: INK }}>
                    &ldquo;{article.pullQuote}&rdquo;
                  </blockquote>
                </div>
              );
            }

            return (
              <div className="fn-article-body">
                <div className="fn-article-body-text">
                  <AccessGate
                    postSlug="frame-within-a-frame"
                    postTitle={article.title}
                    accessType={accessType}
                    hasAccess={hasAccess}
                  >
                    <BodyParas paras={article.body} />
                    <PullQuote />
                  </AccessGate>
                </div>

                {(accessType === "public" || hasAccess) && article.supportingImages && (
                  <div className="fn-article-body-images">
                    {article.supportingImages.map((img, i) => (
                      <ImgOrPlaceholder
                        key={i}
                        src={img.src}
                        alt={img.alt}
                        caption={img.caption}
                        style={{ aspectRatio: "1024/895" }}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })()}

          <nav className="fn-article-prevnext">
            <div>
              {article.previousObservation && (
                <a href={article.previousObservation.href} style={{ textDecoration: "none", color: INK }}>
                  <div style={{ ...LABEL, marginBottom: "0.4rem", opacity: 0.5 }}>← PREVIOUS</div>
                  <div style={{ fontFamily: BARLOW, fontWeight: 400, fontSize: "14px", lineHeight: 1.3 }}>{article.previousObservation.title}</div>
                </a>
              )}
            </div>
            <div style={{ textAlign: "center" }}>
              <a href="/field-notes" style={{ ...LABEL, fontSize: "11px", textDecoration: "none", color: INK, opacity: 0.5 }}>ALL FIELD NOTES</a>
            </div>
            <div style={{ textAlign: "right" }}>
              {article.nextObservation && (
                <a href={article.nextObservation.href} style={{ textDecoration: "none", color: INK }}>
                  <div style={{ ...LABEL, marginBottom: "0.4rem", opacity: 0.5 }}>NEXT →</div>
                  <div style={{ fontFamily: BARLOW, fontWeight: 400, fontSize: "14px", lineHeight: 1.3 }}>{article.nextObservation.title}</div>
                </a>
              )}
            </div>
          </nav>

        </div>
      </div>
    </main>
  );
}

export default function FrameWithinAFramePage() {
  return <FieldNoteArticleTemplate article={article} />;
}
