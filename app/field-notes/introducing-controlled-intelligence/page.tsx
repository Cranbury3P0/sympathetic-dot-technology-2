"use client";

import { useState } from "react";
import { AccessGate } from "@/components/AccessGate";
import { FitTitleLines } from "@/components/FitTitleLines";
import type { AccessType } from "@/lib/access";

/* ── TYPES ── */

type RelatedObservation = { id: string; title: string; href: string };

type SupportingImage = {
  src: string;
  alt?: string;
  caption?: string;
  wide?: boolean;
};

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
  definition?: string;          // dictionary-entry block shown between deck and body
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
  title: "Introducing Controlled Intelligence",
  titleLines: ["INTRODUCING", "CONTROLLED", "INTELLIGENCE"],
  observationNumber: "038",
  date: "May 10, 2026",
  category: "Controlled Intelligence",
  author: "Sean Cranbury",
  readingTime: "10 min",
  tags: ["Controlled Intelligence", "Governance", "Healthcare Associations"],
  featuredImage: "/VH.png",
  featuredImagePosition: "center 40%",
  deck: "Most healthcare associations and professional bodies have at least one staff member using consumer AI tools for their work. Leadership doesn't know which staff member it is, which documents have gone through the interface, or what commercial infrastructure is now holding information the organization considers internal.",
  definition: "con·trolled in·tel·li·gence /kənˌtroʊld ɪnˈtɛlɪdʒəns/ n. A governance framework in which artificial intelligence systems operate within an organization's own infrastructure, under policies the organization sets and enforces, with data that does not leave its custody. Distinguished from general AI deployment by the presence of defined boundaries, auditable usage, and institutional accountability at every layer. The attributive form, controlled-intelligence, modifies related compounds: controlled-intelligence architecture, controlled-intelligence framework.\n\nEtymology: controlled, from Fr. contrôler, orig. contre-rôle, a counter-register kept to verify an official record; + intelligence, from L. intelligentia, the capacity to discern, understand, and choose. The compound preserves both senses: a system that understands, kept accountable by a record it cannot alter.\n\ncf. data sovereignty, governance framework.",
  body: [
    "Most healthcare associations and professional bodies have at least one staff member using ChatGPT or another popular consumer AI tool regularly for their work.",
    "They're likely using it for communications drafts, policy summaries, member correspondence, email, newsletter content. In most cases, leadership doesn't know which staff member it is, which documents have gone through the interface, or what commercial infrastructure is now holding information the organization considers internal.",
    "This is something to clearly consider for healthcare associations and professional bodies more so than in some commercial sectors. The information traveling through browser-based AI tools (ChatGPT, Claude, Gemini, and company) is often the same information members trust the organization to protect: regulatory submissions, internal advocacy positions, member correspondence, clinical guidance. PIPEDA and PIPA set the legal floor. The reputational exposure sits above that, and it doesn't require a breach to land poorly.",
    "We developed a strategy and framework to address these gaps. It's called Controlled Intelligence and its core layer, which we're focusing on in this post, is described below.",
    "Controlled Intelligence is a governance-first AI framework built specifically for this operating context. Here's how it works.",
    "The core layer is a locally deployed open-weight model, based on tools like Ollama, LM Studio, or others like them, running inside the organization's own secure infrastructure. No commercial API or opaque third-party licensing agreement. No data routed through an external server. The model runs on the secure network the organization already controls, under policies the organization sets.",
    "Staff access it through a branded interface that carries the organization's identity. It looks like an organizational tool because it is one. Staff aren't moving between the association's systems and a commercial platform. The boundary between tool and institution is closed by design.",
    "The governance layer is built before the tool goes live. That means an AI adoption policy written for the organization's actual operating context, a board briefing package, staff guidelines, and a privacy impact assessment framework, all in place before the first prompt is submitted.",
    "Staff onboarding is calibrated to actual capacity, not to the tool's feature list.",
    "Many organizations that have struggled with AI adoption trained staff to use a tool that wasn't fitted for the specifics of their organization and the context of its use escaped accountability and tracking.",
    "Controlled Intelligence addresses the calibration problem alongside the access problem.",
    "Quarterly governance reviews are built into the ongoing engagement. The model gets evaluated. Usage patterns get reviewed. The governance documentation gets updated as the tool evolves, staff knowledge improves, and as the regulatory environment shifts. This is the structure that makes the framework durable.",
    "Commercial AI tools don't have organizational memory or organizational loyalty. They have terms of service and training pipelines. When a staff member feeds a sensitive document into ChatGPT to produce a summary, the document has left the building. Whether it remains there is governed by OpenAI's data policies, not by the association's. Most organizations have a policy document that addresses this. The policy document and the tool's actual behaviour are not the same thing.",
    "Most member-based organizations are a few steps away from a board conversation that often gets pushed further and further down the road. A member complaint about data handling, a staff disclosure that surfaces informal AI use, a privacy inquiry from a regulator. Controlled Intelligence changes what an organization can say in that conversation, not because it produces better talking points, but because the architecture provides the answer.",
    "The local engine is the core layer and everything else fans out from it: the staff-facing interface, the governance documents, the onboarding, the quarterly reviews. The reason to start there is that it changes what's possible in the rest of the framework. An organization running a local model can make real commitments about data custody because those commitments are true, repeatable, and provable. An organization relying on commercial tools with a policy document is relying on the document to do things that it simply can't support.",
    "Discovery is the entry point for most engagements and can be done at any time. It produces a written organizational assessment and a board-ready implementation pathway that has value regardless of whether the organization proceeds. It's a current-state picture of AI use inside the organization, a gap analysis against existing privacy obligations, and a realistic timeline for what responsible adoption looks like given actual budget and staff capacity.",
    "The organizations that have a clear answer to \"where does our AI-assisted work actually go?\" are a small minority. For most, the answer is somewhere inside a commercial platform's infrastructure, governed by a terms of service agreement the organization has never read but are bound by regardless. Controlled Intelligence changes that answer before the question gets asked in a less comfortable context.",
  ],
  supportingImages: [
    {
      src: "/Ci-02-two-paths-ai-assisted-work.png",
      alt: "Two Paths for AI-Assisted Work: consumer browser AI versus Controlled Intelligence",
      caption: "Two Paths for AI-Assisted Work: consumer browser AI routes data outside the organization; Controlled Intelligence keeps it inside.",
      wide: true,
    },
    {
      src: "/CI-03-controlled-intelligence-architecture.png",
      alt: "Controlled Intelligence Architecture: People, Interface, Core Layer, Governance Layer, Continuous Governance",
      caption: "Controlled Intelligence Architecture: five layers linked by a continuous governance feedback loop.",
      wide: true,
    },
  ],
  relatedObservations: [
    { id: "041", title: "The Pope Has Entered the Chat", href: "/field-notes/the-pope-has-entered-the-chat" },
    { id: "040", title: "A New Cultural Embassy", href: "/field-notes/a-new-cultural-embassy" },
    { id: "039", title: "Time for Vancouver to Come Clean About AI", href: "/field-notes/time-for-vancouver-to-come-clean-about-ai" },
  ],
  previousObservation: { title: "Time for Vancouver to Come Clean About AI", href: "/field-notes/time-for-vancouver-to-come-clean-about-ai" },
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
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(10,10,10,0.92)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        cursor: "zoom-out",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "100%",
          maxHeight: "90vh",
          width: "auto",
          height: "auto",
          display: "block",
          boxShadow: "0 0 0 1px #0A0A0A",
          cursor: "default",
        }}
      />
      <button
        onClick={onClose}
        aria-label="Close"
        style={{
          position: "absolute",
          top: "1.25rem",
          right: "1.5rem",
          fontFamily: BARLOW,
          fontWeight: 600,
          fontSize: "11px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          background: "transparent",
          color: PAPER,
          border: `1px solid ${PAPER}`,
          padding: "0.4rem 0.75rem",
          cursor: "pointer",
        }}
      >
        CLOSE ✕
      </button>
    </div>
  );
}

/* ── CLICKABLE IMAGE WITH LIGHTBOX ── */

function LightboxImage({ img }: { img: SupportingImage }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <figure style={{ margin: 0 }}>
        <div
          role="button"
          tabIndex={0}
          onClick={() => setOpen(true)}
          onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
          style={{ cursor: "zoom-in", position: "relative" }}
          title="Click to enlarge"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.src}
            alt={img.alt ?? ""}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              transition: "opacity 0.15s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.88"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
            onError={(e) => {
              const el = e.currentTarget;
              el.style.display = "none";
              const ph = el.nextElementSibling as HTMLElement | null;
              if (ph) ph.style.display = "flex";
            }}
          />
          <div style={{
            display: "none", width: "100%", aspectRatio: "16/9", border: RULE,
            alignItems: "center", justifyContent: "center", background: "#E8E4DC",
          }}>
            <span style={{ ...LABEL, fontSize: "9px", opacity: 0.5 }}>{img.src}</span>
          </div>
        </div>
        {/* Click to enlarge prompt + caption */}
        <div style={{
          borderTop: RULE,
          marginTop: 0,
          padding: "0.5rem 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          gap: "1rem",
        }}>
          {img.caption ? (
            <figcaption style={{
              fontFamily: BARLOW, fontWeight: 300, fontSize: "11px",
              letterSpacing: "0.04em", color: INK, opacity: 0.6, lineHeight: 1.4,
            }}>
              {img.caption}
            </figcaption>
          ) : <span />}
          <span style={{
            fontFamily: BARLOW,
            fontWeight: 600,
            fontSize: "10px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: INK,
            opacity: 0.45,
            whiteSpace: "nowrap",
            flexShrink: 0,
            cursor: "zoom-in",
          }}
            onClick={() => setOpen(true)}
          >
            ⊕ Click to enlarge
          </span>
        </div>
      </figure>

      {open && (
        <Lightbox
          src={img.src}
          alt={img.alt ?? ""}
          onClose={() => setOpen(false)}
        />
      )}
    </>
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

          {/* ── DICTIONARY DEFINITION — between deck and body ── */}
          {article.definition && (
            <div style={{ borderTop: RULE, borderBottom: RULE, padding: "2.5rem 1.5rem" }}>
              <div style={{ ...LABEL, marginBottom: "1.25rem", opacity: 0.5 }}>DEFINITION</div>
              {article.definition.split("\n\n").map((block, i) => (
                <p key={i} style={{
                  fontFamily: CONDENSED,
                  fontWeight: 700,
                  fontSize: "clamp(1.25rem, 2.4vw, 2.1rem)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.25,
                  margin: i < article.definition!.split("\n\n").length - 1 ? "0 0 1.5rem" : "0",
                  color: INK,
                  maxWidth: "52ch",
                }}>
                  {block}
                </p>
              ))}
            </div>
          )}

          {/* ── BODY + RIGHT IMAGE COLUMN ── */}
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

            return (
              <div className="fn-article-body">
                <div className="fn-article-body-text">
                  <AccessGate
                    postSlug="introducing-controlled-intelligence"
                    postTitle={article.title}
                    accessType={accessType}
                    hasAccess={hasAccess}
                  >
                    <BodyParas paras={article.body} />
                  </AccessGate>
                </div>

                {/* Right column — infographic images with lightbox */}
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
export default function ControlledIntelligencePage() {
  return <FieldNoteArticleTemplate article={article} />;
}
