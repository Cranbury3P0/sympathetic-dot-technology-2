"use client";

/* ─────────────────────────────────────────────────────────────
   FIELD NOTE ARTICLE TEMPLATE
   Reusable template for all Field Notes entries.
   Pass an ArticleData object to render the full editorial layout.

   ACCESS CONTROL
   ──────────────
   Articles with access: "paid" show only the deck and
   allowPreviewParagraphs body paragraphs to visitors without
   access. The rest is replaced by an AccessGate / AccessCard.

   NOTE ON CONTENT PROTECTION
   ──────────────────────────
   This file is "use client" — the full body array is currently
   in the client bundle. To prevent this, migrate this page to a
   Server Component and call checkAccess() server-side, passing
   only the preview slice of body[] to the template when access
   is denied. See components/AccessGate.tsx for the full
   migration path.
───────────────────────────────────────────────────────────── */

import { AccessGate } from "@/components/AccessGate";
import type { AccessType } from "@/lib/access";

/* ── TYPES ── */

type RelatedObservation = { id: string; title: string; href: string };
type SupportingImage = { src: string; alt?: string; caption?: string; wide?: boolean };

type ArticleData = {
  title: string;
  titleLines: string[];           // controlled line breaks for the hero title
  observationNumber: string;
  date: string;
  category: string;
  author: string;
  readingTime: string;
  tags: string[];
  featuredImage: string;
  featuredImagePosition?: string;
  deck: string;
  body: string[];                 // paragraphs in order
  pullQuote?: string;
  supportingImages?: SupportingImage[];
  relatedObservations?: RelatedObservation[];
  previousObservation?: { title: string; href: string };
  nextObservation?: { title: string; href: string };
  /* ── access control ── */
  access?: AccessType;            // default: "public"
  allowPreviewParagraphs?: number; // how many body paras to show before gate
  stripeProductId?: string;       // TODO: Stripe product ID
  stripePriceId?: string;         // TODO: Stripe price ID (single-post)
};

/* ── ARTICLE DATA — THE POPE HAS ENTERED THE CHAT ── */

const article: ArticleData = {
  title: "The Pope Has Entered the Chat",
  titleLines: ["THE POPE", "HAS ENTERED", "THE CHAT"],
  observationNumber: "041",
  date: "May 26, 2026",
  category: "Human Dignity",
  author: "Sean Cranbury",
  readingTime: "12 min",
  tags: ["AI", "Institutions", "Religion", "Authority", "Communication", "Public Sphere"],
  featuredImage: "/260407-pope-leo-es.webp",
  featuredImagePosition: "center 15%",
  deck: "The Pontiff of the Vatican: the man who represents the greatest collection of purloined art and cultural property in the history of the world. The co-founder of the modern digital equivalent. They sat together and talked about ethics.",
  body: [
    "Irony, it turns out, is just irony.",
    "It was never alive despite being pronounced dead repeatedly over the years. It couldn't even be considered undead, which is a true blow to these dystopian times.",
    "Irony, it seems, is embodied best by that eternal slacker refrain: it is what it is.",
    "And it absolutely was what it was on Monday May 25, 2026 when Pope Leo XIV announced his first encyclical, Magnifica Humanitas, alongside Christopher Olah, co-founder of Anthropic.",
    "Picture this:",
    "The Pontiff of the Vatican: the man who represents the greatest collection of purloined art and cultural property in the history of the world. Olah: the co-founder of the modern digital equivalent.",
    "They sat together and talked about ethics.",
    "This might surprise anyone who hasn't been paying attention to a world in which Donald Trump is President for the second time. But we are living in a moment where irony and shame have been stripped of their social function.",
    "The words still exist. People still use them. But like \"ethics\" in the mouths of the powerful, their meaning is now entirely determined by the convenience and privilege of whoever is deploying them. A tech company publishes an ethics framework and hires someone with all the educational pedigree to impress the folks at NPR, someone who has never had to face unemployment because an algorithm made their job redundant, to explain why everything is going to be fine.",
    "A government announces a consultation process. A Pope issues a moral decree. The words arrive dressed for the occasion and leave having changed nothing, because the people generating the contradictions have correctly calculated that the cost of acknowledgement is lower than the cost of exposure.",
    "You have to look at what's actually in front of you, breathe in the petrichor, and call it by its name.",
    "So. The Pope and the AI co-founder sat together in the Vatican and talked about ethics.",
    "Leo XIV chose his papal name in direct reference to Leo XIII, whose 1891 encyclical Rerum Novarum addressed the social consequences of the Industrial Revolution and established the foundation of modern Catholic social teaching on labour and technology.",
    "He signed Magnifica Humanitas on May 15, exactly 135 years after Rerum Novarum was published. That timing is not decorative. Leo XIII wrote into industrial capitalism when the new things were wage labour, factory conditions, and who bore the cost of progress. Leo XIV is writing into artificial intelligence when the new things are models, platforms, and who bears the cost of inference.",
    "This is a Pope who understands institutional history as a weapon and chose his moment with full awareness of what he was doing.",
    "He presented the document alongside Christopher Olah, co-founder of Anthropic, the company currently in a legal battle with the Trump administration over the use of its models in military and surveillance contexts. He invited the co-founder of the most consequential AI company in the world into the room. Then he told him that the concentration of power and data in the hands of so few people was a danger, that \"it is not enough to invoke ethics in the abstract,\" and that robust legal frameworks and independent oversight were required. He called for \"disarming AI,\" clarifying that this \"does not mean rejecting technology, but preventing it from dominating humanity.\"",
    "The document states that never has humanity had such power over itself. The question it asks is whether that power is oriented toward the good of persons and the common good, or toward something else entirely.",
    "Leo explicitly refuses two exits that lesser documents would have taken: technological fatalism, the acceptance that whatever ships is whatever we deserve, and technological panic, the position that every advance is inherently hostile to humanity.",
    "Instead he recovers an older argument: the problem is orientation, custody, accountability. Governance is a moral duty, not a compliance checkbox. Policies after the fact are a form of negligence.",
    "Olah sat there and received it.",
    "The document is serious and the tradition behind it is real. The Church has 1.4 billion people who take their direction from Rome and not from Washington. The oldest continuous institution in the Western world has decided it is done watching the unchecked advance of a technology that has avoided accountability and regulation by governments everywhere.",
    "This battle, Leo seems to be saying, is over who governs the infrastructure of human thought, who owns the cultural record, whose consent is required before a civilization gets overwritten.",
    "In Vancouver we are watching that conflict arrive in the form of data centres proposed for unceded Coast Salish territory, announced without consultation, in a city that knows what rain smells like and knows the difference between being asked and being told.",
    "The question the encyclical is ultimately asking is what kind of humans do we intend to remain while building systems that simulate us. That is not a question the market will ask on its own.",
    "It is not a question that gets answered in a press release or a commencement speech or an architectural rendering of a server room in Mount Pleasant. It is the question the students booing Eric Schmidt were asking. It is the question five hundred people carried across the Granville Street Bridge in the rain. It is the question the Musqueam, Squamish, and Tsleil-Waututh Nations have been asking about this territory since long before anyone in Silicon Valley was born.",
    "We're about to see how that goes.",
  ],
  pullQuote: "It is not enough to invoke ethics in the abstract.",
  supportingImages: [
    {
      src: "/260407-pope-leo-es.webp",
      alt: "Pope Leo XIV",
      caption: "Pope Leo XIV, whose papal name references Leo XIII's 1891 Rerum Novarum.",
    },
    {
      src: "/magnifica-humanitas-pope-ai-cover.png",
      alt: "Magnifica Humanitas — cover of Pope Leo XIV's encyclical on artificial intelligence",
      caption: "Magnifica Humanitas, signed May 15, 2026 — exactly 135 years after Rerum Novarum.",
      wide: true,
    },
  ],
  relatedObservations: [
    { id: "042", title: "Canada's AI Strategy: Frame after frame", href: "/field-notes/frame-within-a-frame" },
    { id: "040", title: "A New Cultural Embassy", href: "/field-notes/a-new-cultural-embassy" },
    { id: "039", title: "Time for Vancouver to Come Clean About AI", href: "/field-notes/time-for-vancouver-to-come-clean-about-ai" },
    { id: "038", title: "Introducing Controlled Intelligence", href: "/field-notes/introducing-controlled-intelligence" },
  ],
  previousObservation: { title: "A New Cultural Embassy", href: "/field-notes/a-new-cultural-embassy" },
  nextObservation: { title: "Canada's AI Strategy: Frame after frame", href: "/field-notes/frame-within-a-frame" },
  /* ── access ── */
  access: "paid",
  allowPreviewParagraphs: 1,
  stripeProductId: "prod_STUB_pope_article", // TODO: real Stripe product ID
  stripePriceId: "price_STUB_pope_single",   // TODO: real Stripe price ID
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
/* Shows a ruled box when the image file doesn't exist yet */
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
      {/* Placeholder shown if image fails to load */}
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

/* ── REUSABLE ARTICLE TEMPLATE ── */

function FieldNoteArticleTemplate({ article }: { article: ArticleData }) {
  return (
    <main style={{ backgroundColor: PAPER, color: INK, margin: 0, minHeight: "100vh" }}>

      {/* ── SITE NAV ── */}
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

      {/* ── ARTICLE OUTER GRID: rail | main ── */}
      <div className="fn-article-outer">

        {/* ── LEFT RAIL — metadata + related ── */}
        <aside className="fn-article-rail">

          {/* Observation number */}
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

          {/* Related observations */}
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

          {/* ── HERO: title column / image column ── */}
          {/* Title starts on paper, lines long enough to cross into the photograph */}
          <div className="fn-article-hero">

            {/* Title zone: paper background, z-index 2, overflow visible */}
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

            {/* Image zone: z-index 1, overflow hidden */}
            {/* Title from adjacent column renders on top of this */}
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
          {(() => {
            const accessType = article.access ?? "public";
            // TODO: pass real hasAccess from server-side checkAccess() once auth is wired
            const hasAccess = false;
            const previewCount = article.allowPreviewParagraphs ?? 0;
            const previewParas = article.body.slice(0, previewCount);
            const protectedParas = article.body.slice(previewCount);

            /* Full body paragraphs renderer */
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

            /* Pull quote */
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

            /* Right image column — only shown with full access */
            function SupportingImages() {
              return (
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
              );
            }

            if (accessType === "public" || hasAccess) {
              /* ── FULL ACCESS ── */
              return (
                <div className="fn-article-body">
                  <div className="fn-article-body-text">
                    <BodyParas paras={article.body} />
                    <PullQuote />
                  </div>
                  <SupportingImages />
                </div>
              );
            }

            /* ── PAID + NO ACCESS ── */
            const previewNode = previewParas.length > 0
              ? <BodyParas paras={previewParas} />
              : undefined;

            return (
              <div className="fn-article-body">
                <div className="fn-article-body-text">
                  <AccessGate
                    postSlug="the-pope-has-entered-the-chat"
                    postTitle={article.title}
                    accessType={accessType}
                    hasAccess={hasAccess}
                    previewContent={previewNode}
                  >
                    {/* Protected content — not rendered unless hasAccess is true */}
                    {/* TODO: in RSC migration, this node won't be in the bundle */}
                    <BodyParas paras={protectedParas} />
                    <PullQuote />
                  </AccessGate>
                </div>
                {/* Supporting images hidden behind gate */}
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
export default function PapalArticlePage() {
  return <FieldNoteArticleTemplate article={article} />;
}
