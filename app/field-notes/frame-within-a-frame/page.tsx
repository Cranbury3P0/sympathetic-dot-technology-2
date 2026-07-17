"use client";

import type { ReactNode } from "react";
import { AccessGate } from "@/components/AccessGate";
import type { AccessType } from "@/lib/access";
import { Nav, Breadcrumb, PrevNext } from "sympathetic-ds";

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
  featuredImageCredit?: string;
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
  featuredImage: "/filip-kominik.jpg",
  featuredImagePosition: "center center",
  deck: "The diagram is a circle that contains circles, wheels within wheels. There is an inadvertent hypnotic effect to the design, arrows curling around the inner ring and not quite agreeing on which way to turn. Weird vibes but don't blame the bureaucrats for that. They were doing their best with a hard brief, and the core diagram that they landed on to distill the very essence of this strategy may provide more questions than answers.",
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
    "I\u2019m planning a series of essays on the parts that sit closest to my work.",
    <>
      In no particular order:
      <ul style={{ marginTop: "1em", marginBottom: "1em", paddingLeft: "1.5em", listStyleType: "disc" }}>
        <li>the case for sovereign AI, especially in healthcare, and how the strategy speaks to it;</li>
        <li>the commitment, or the lack of one, to Canadian writers, artists, filmmakers, and other creators, and whether copyright has quietly been abandoned;</li>
        <li>and what the future of work looks like for people who have no interest in jumping into the hype, or whose jobs get cut by executives using AI as the reason.</li>
      </ul>
      There will be other thoughts too.
    </>,
    "But let\u2019s start where the document starts, with a diagram.",
    "Here is what it shows. It\u2019s a circle and circles are easy to understand. After all the wheel, that greatest of all inventions, is also a circle.",
    "And this diagram which is a circle contains wheels within wheels.",
    "The outermost ring holds the six pillars, from protecting Canadians to building global alliances. Inside that ring sit three words: trust, opportunity, sovereignty.",
    "Inside that, the part that actually moves, written three times and chased by those confused little arrows, is adoption.",
    "And in the dark center, still, not spinning, are the words \u201cAI for All.\u201d",
    "The slogan sits at the calm middle. The engine is one ring out, and the engine is adoption.",
    "The introduction to the strategy says the same thing in plain sentences. Canadians benefit from AI only if they use it and they will use it only if they trust it.",
    <>
      <em style={{ fontStyle: "italic" }}>&ldquo;Trust makes adoption possible. Opportunity and sovereignty ensure adoption creates benefits.&rdquo;</em>
      <br />
      This is the logic. It\u2019s easy to follow.
    </>,
    "Trust, opportunity, and sovereignty are framing around a verb. The whole apparatus exists to get Canadians adopting.",
    "And so the trust piece is where a lot of people are having trouble right now. Skepticism is a completely valid response to the full court press that industry, media, and now the government, are putting on people without ever being asked.",
    "How can you trust something that the leaders of the AI industry have gleefully claimed will steal your job?",
    "What if you\u2019re a creator and it stole your work without asking and definitely without payment?",
    "What if it hallucinates every time you use it?",
    "What if the people who are the greatest advocates for AI are the people in your community that you trust the least?",
    "Here\u2019s the money quote: \u201cTrust is the north star of this strategy. Prosperity and sovereignty in this era belong to nations that can leverage trust to adopt, build, and govern AI on their own terms.\u201d",
    "Trust is a lever. You pull it to make the wheel go. Whether AI has done the work to earn anyone\u2019s trust is another question, and the diagram has no ring for that.",
    "And what exactly are we saying when we deploy the words \u201cProsperity and sovereignty in this era\u2026\u201d? There seems to be something happening in that sentence that goes beyond a simple \u201cwe\u2019re adapting to modern innovations and cultural change\u201d and into another, maybe darker, place.",
    "What is it implying about future geopolitical relationships, future battlefields, or the future of territorial rights?",
    "This is where the frames start going all the way down. Watch what happens to the people who decline to participate.",
    "Watch what happens to the people who throw themselves on the gears of this machination.",
    "Statistics Canada finds that 78 percent of firms not using AI say they don\u2019t see how it helps the goods or services they sell. The strategy cannot let that stand as a judgment on the products, so it reframes it: \u201ca translation problem,\u201d and, to be safe, \u201cnot resistance.\u201d",
    "A clear no becomes a vocabulary gap.",
    "Open that frame and there is another one behind it, the one where the customer is surely allowed to be right but as a consequence, no longer relevant to the economy.",
    "I have studied AI and I read widely across several channels and as many points of view as I can stomach (note: not all AI POVs are digestible nor worth your time). Adoption is a thing that comes up a lot.",
    "It is a common place that a person reaches after AI does something useful or interesting against a real problem or question. You try AI again and get a similar result. Try it again and it hallucinates.",
    "Trust comes and goes.",
    "Canada\u2019s AI strategy runs the logic backward. It sets a target, sixty percent of businesses using AI by 2034, up from twelve today, and then asks what trust and literacy it will take to hit the number. Once adoption is the figure you\u2019re optimizing, everything else gets tuned to produce it, including the value you just called your north star.",
    "So: frames within frames. The pillars frame the values, the values frame adoption, adoption frames a slogan that doesn\u2019t move.",
    "Keep opening them, expecting to reach the thing the strategy is finally for, and you arrive at the still point in the middle that says \u201cAI for All\u201d and tells you nothing about who, or on whose terms. The bureaucrats drew an honest picture.",
    "The center is a frame too.",
  ],
  pullQuote: "The center is a frame too.",
  featuredImageCredit: "Photo: Filip Kominik.",
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
  nextObservation: { title: "The Master's Tools Will Never Destroy the Master's Datacenter", href: "/field-notes/the-masters-tools-will-never-destroy-the-masters-datacenter" },
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

      <Nav activeItem="FIELD NOTES" logoHref="/" />

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

          <Breadcrumb observationNumber={article.observationNumber} />

          <div className="fn-article-hero">
            <div className="fn-article-hero-text">
              <h1 style={{ fontFamily: CONDENSED, fontWeight: 900, fontSize: "clamp(3.5rem, 11vw, 15rem)", letterSpacing: "-0.02em", textTransform: "uppercase", lineHeight: 0.88, margin: 0 }}>
                {article.titleLines.map((line, i) => (
                  <span key={i} style={{ display: "block", whiteSpace: "nowrap" }}>{line}</span>
                ))}
              </h1>
            </div>
            <div className="fn-article-hero-img" style={{ position: "relative" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={article.featuredImage} alt={article.title} style={{ objectPosition: article.featuredImagePosition ?? "center center" }} />
              {article.featuredImageCredit && (
                <div style={{
                  position: "absolute", bottom: "0.5rem", right: "0.75rem",
                  fontFamily: BARLOW, fontWeight: 300, fontSize: "10px",
                  letterSpacing: "0.04em", color: "#F0EDE6", opacity: 0.55,
                  pointerEvents: "none",
                }}>
                  {article.featuredImageCredit}
                </div>
              )}
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
                    <div key={i} style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "18px", lineHeight: 1.8, margin: "0 0 1.5rem", color: INK }}>
                      {para}
                    </div>
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

          <PrevNext previous={article.previousObservation} next={article.nextObservation} />

        </div>
      </div>
    </main>
  );
}

export default function FrameWithinAFramePage() {
  return <FieldNoteArticleTemplate article={article} />;
}
