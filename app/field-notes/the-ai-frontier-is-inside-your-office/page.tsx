"use client";

import { useState } from "react";
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
  deck: string;
  body: string[];
  pullQuote?: string;
  supportingImages?: SupportingImage[];
  relatedObservations?: RelatedObservation[];
  previousObservation?: { title: string; href: string };
  nextObservation?: { title: string; href: string };
  sources?: { label: string; detail: string }[];
  access?: AccessType;
  allowPreviewParagraphs?: number;
};

/* ── ARTICLE DATA ── */

const article: ArticleData = {
  title: "The AI Frontier Is Inside Your Office",
  titleLines: ["THE AI FRONTIER", "IS INSIDE", "YOUR OFFICE"],
  observationNumber: "037",
  date: "May 5, 2026",
  category: "Governance",
  author: "Sean Cranbury",
  readingTime: "9 min",
  tags: ["Governance", "AI Adoption", "Healthcare Associations", "Nonprofits", "Workplace"],
  featuredImage: "/omer-haktan-bulut-xXUDcznITWA-unsplash.jpg",
  featuredImagePosition: "center 40%",
  deck: "The adoption is already over. It just didn't go through governance.",
  body: [
    "Every person and every organization is working through some form of the AI adoption conversation. It's complex and these decisions can take time. For some folks there's a tendency to kick the can down the road, for others, maybe rushing in too soon.",
    "Most organizations working through it right now haven't clearly named or identified the process they're already inside.",
    "There's no declaration, no initiative, no strategy document. What there is: someone in communications who started using ChatGPT a year ago just to get through the week, a part-time policy analyst who runs legislation through Claude Projects before summarizing it for the board, a program manager who uses Gemini to translate Excel documents and hasn't mentioned any of this to anyone.",
    "That's the operational picture at a lot of healthcare associations and nonprofits in 2025. The adoption is already over. It just didn't go through governance.",
    "This tends to get framed as a training problem or a readiness problem, but that framing misses the more important part. The AI Equity Project's 2025 survey, reported by Meena Das and Michelle Flores Vryn of NamasteData, found 76% of nonprofits already using AI tools, with only 15% having any policy framework in place. Separately, TechSoup's State of AI in Nonprofits 2025 Benchmark Report, drawing on a different dataset, finds that 76% of nonprofits have no formal AI strategy — another framing of the same governance gap. The 65% who say they're interested in responsible adoption but don't feel ready aren't stuck because they lack technical skill. They're stuck because no one has sorted out who is accountable for the transition. And in the meantime, the work is still going out the door.",
    "The economic reality for workers is pretty specific.",
    "When staff are expected to produce the same or more for the same or less money, a $35/month personal Claude subscription that saves 30 hours of work per month is a perfectly sane survival strategy. You'd do it, too.",
    "Staff can see what is happening. They are reading the same feeds, watching the same headlines about layoffs and restructuring and what AI is doing to the job market across every sector.",
    "They are making rational choices under real pressure, saving themselves time and learning the tools that they might need when they seek new opportunities down the road.",
    "The AI tools that they're using don't know they're working inside a regulated environment, or within a trust-based membership organization, or an arts community with specific commitments around sourcing and ethics for their communications.",
    "Most workers are using these tools in silence because there's no clear direction from leadership and because nobody ever asked.",
    "For organizations with regulatory obligations, the stakes of that gap are concrete. In a healthcare context, those tools are handling information that carries obligations under PIPEDA.",
    "In arts and cultural organizations, they may be touching artist relationships, community knowledge, or materials that belong to someone else in ways the organization would want to account for.",
    "A policy that staff helped build and actually follow is what determines whether any of that is being managed. A policy that lives in a shared drive and wasn't built with the people doing the work doesn't change what happens on a Tuesday afternoon.",
    "That's the actual test of whether it's working.",
    "The governance question boards are sitting with is less dramatic than it probably sounds. It comes down to who is accountable for how AI operates inside the organization: where data is going, which tools are permitted, how staff are supported in using them well.",
    "That's a normal governance question with a shape boards already know how to work with. What's unusual about this moment is that the decision is being made passively at a lot of organizations, by individual staff members doing their jobs under real economic pressure, without the framework they'd need to do it any other way.",
    "Adoption is already happening. The open question is whether leadership is shaping it, or just finding out about it later.",
  ],
  pullQuote: "The adoption is already over. It just didn't go through governance.",
  supportingImages: [
    {
      src: "/MEENA_DAS_Founder_AI_Equity.avif",
      alt: "Meena Das, Founder, AI Equity Project / NamasteData",
      caption: "Meena Das, Founder, AI Equity Project / NamasteData. Lead researcher on the 2025 nonprofit AI survey.",
    },
    {
      src: "/State_AI-NONPROFITS.png",
      alt: "TechSoup State of AI in Nonprofits 2025 Benchmark Report",
      caption: "TechSoup, State of AI in Nonprofits 2025 Benchmark Report. 76% of nonprofits have no formal AI strategy.",
      wide: true,
    },
  ],
  sources: [
    {
      label: "AI Equity Project (NamasteData, 2025)",
      detail: "Survey report by Meena Das and Michelle Flores Vryn. Primary source for the 76% already using AI tools, 15% with any policy framework, and 65% interested in responsible adoption but not feeling ready.",
    },
    {
      label: "TechSoup — State of AI in Nonprofits 2025",
      detail: "Secondary source; 76% of nonprofits with no formal AI strategy — a complementary measure of the governance gap from a different dataset.",
    },
  ],
  relatedObservations: [
    { id: "038", title: "Introducing Controlled Intelligence", href: "/field-notes/introducing-controlled-intelligence" },
    { id: "039", title: "Time for Vancouver to Come Clean About AI", href: "/field-notes/time-for-vancouver-to-come-clean-about-ai" },
    { id: "040", title: "A New Cultural Embassy", href: "/field-notes/a-new-cultural-embassy" },
  ],
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

/* ── LIGHTBOX ── */

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(10,10,10,0.92)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "2rem", cursor: "zoom-out",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src} alt={alt}
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: "100%", maxHeight: "90vh", width: "auto", height: "auto", display: "block", boxShadow: "0 0 0 1px #0A0A0A", cursor: "default" }}
      />
      <button
        onClick={onClose}
        aria-label="Close"
        style={{
          position: "absolute", top: "1.25rem", right: "1.5rem",
          fontFamily: BARLOW, fontWeight: 600, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase",
          background: "transparent", color: PAPER, border: `1px solid ${PAPER}`, padding: "0.4rem 0.75rem", cursor: "pointer",
        }}
      >
        CLOSE ✕
      </button>
    </div>
  );
}

/* ── LIGHTBOX IMAGE ── */

function LightboxImage({ img }: { img: SupportingImage }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <figure style={{ margin: 0 }}>
        <div
          role="button" tabIndex={0}
          onClick={() => setOpen(true)}
          onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
          style={{ cursor: "zoom-in", position: "relative" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.src} alt={img.alt ?? ""}
            style={{ width: "100%", height: "auto", display: "block", transition: "opacity 0.15s ease" }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
            onError={(e) => {
              const el = e.currentTarget;
              el.style.display = "none";
              const ph = el.nextElementSibling as HTMLElement | null;
              if (ph) ph.style.display = "flex";
            }}
          />
          <div style={{ display: "none", width: "100%", aspectRatio: "16/9", border: RULE, alignItems: "center", justifyContent: "center", background: "#E8E4DC" }}>
            <span style={{ ...LABEL, fontSize: "9px", opacity: 0.5 }}>{img.src}</span>
          </div>
        </div>
        <div style={{ borderTop: RULE, padding: "0.5rem 0", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "1rem" }}>
          {img.caption ? (
            <figcaption style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "11px", letterSpacing: "0.04em", color: INK, opacity: 0.6, lineHeight: 1.4 }}>
              {img.caption}
            </figcaption>
          ) : <span />}
          <span
            onClick={() => setOpen(true)}
            style={{ fontFamily: BARLOW, fontWeight: 600, fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: INK, opacity: 0.45, whiteSpace: "nowrap", flexShrink: 0, cursor: "zoom-in" }}
          >
            ⊕ Click to enlarge
          </span>
        </div>
      </figure>
      {open && <Lightbox src={img.src} alt={img.alt ?? ""} onClose={() => setOpen(false)} />}
    </>
  );
}

/* ── ARTICLE TEMPLATE ── */

function FieldNoteArticleTemplate({ article }: { article: ArticleData }) {
  return (
    <main style={{ backgroundColor: PAPER, color: INK, margin: 0, minHeight: "100vh" }}>

      {/* ── NAV ── */}
      <Nav activeItem="FIELD NOTES" logoHref="/" />

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
                  <div style={{ fontFamily: CONDENSED, fontWeight: 900, fontSize: "1.1rem", letterSpacing: "-0.01em", lineHeight: 0.9, color: INK }}>{obs.id}</div>
                  <div style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "12px", lineHeight: 1.4, color: INK, marginTop: "0.2rem" }}>{obs.title}</div>
                </a>
              ))}
            </div>
          )}

          {/* Sources */}
          {article.sources && (
            <div style={{ borderTop: RULE, paddingTop: "1rem", marginTop: "0.5rem" }}>
              <div style={{ ...LABEL, marginBottom: "0.75rem" }}>SOURCES</div>
              {article.sources.map(({ label, detail }) => (
                <div key={label} style={{ marginBottom: "1rem" }}>
                  <div style={{ fontFamily: BARLOW, fontWeight: 600, fontSize: "11px", lineHeight: 1.4, color: INK, marginBottom: "0.2rem" }}>{label}</div>
                  <div style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "11px", lineHeight: 1.5, color: INK, opacity: 0.6 }}>{detail}</div>
                </div>
              ))}
            </div>
          )}
        </aside>

        {/* ── MAIN CONTENT ── */}
        <div className="fn-article-main">

          {/* Breadcrumb */}
          <Breadcrumb observationNumber={article.observationNumber} />

          {/* ── HERO ── */}
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

          {/* ── DECK ── */}
          <div className="fn-article-deck">
            <p style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(1.4rem, 2.2vw, 2.2rem)", lineHeight: 1.45, margin: 0, maxWidth: "52ch" }}>
              {article.deck}
            </p>
          </div>

          {/* ── BODY + RIGHT IMAGE COLUMN ── */}
          {(() => {
            const accessType = article.access ?? "public";
            const hasAccess = accessType === "public" ? true : false;

            function BodyParas({ paras }: { paras: string[] }) {
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
                    postSlug="the-ai-frontier-is-inside-your-office"
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
                      <LightboxImage key={i} img={img} />
                    ))}
                  </div>
                )}
              </div>
            );
          })()}

          {/* ── PREVIOUS / NEXT ── */}
          <PrevNext previous={article.previousObservation} next={article.nextObservation} />

        </div>{/* end .fn-article-main */}
      </div>{/* end .fn-article-outer */}
    </main>
  );
}

/* ── PAGE ── */
export default function AIFrontierPage() {
  return <FieldNoteArticleTemplate article={article} />;
}
