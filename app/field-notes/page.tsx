"use client";

import { useRef, useEffect, useState } from "react";

/* ── FIT TEXT ── */
function FitText({ text, style }: { text: string; style: React.CSSProperties }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const fit = () => {
      const c = containerRef.current;
      const el = textRef.current;
      if (!c || !el) return;
      el.style.fontSize = "100px";
      el.style.position = "absolute";
      const w = el.getBoundingClientRect().width;
      el.style.position = "";
      el.style.fontSize = `${(c.offsetWidth / w) * 100}px`;
    };
    document.fonts.ready.then(fit);
    const ro = new ResizeObserver(fit);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [text]);
  return (
    <div ref={containerRef} style={{ width: "100%", overflow: "hidden", lineHeight: 0.88 }}>
      <span ref={textRef} style={{ ...style, whiteSpace: "nowrap", display: "inline-block" }}>
        {text}
      </span>
    </div>
  );
}

/* ── DATA ── */
const NAV_ITEMS = ["SYSTEMS", "FIELD NOTES", "WORK", "VERBATIM", "ABOUT", "CONTACT", "CLIENT LOGIN"];

const ENTRIES = [
  {
    id: "042",
    titleLines: ["CANADA'S AI", "STRATEGY", "IT'S FRAMES", "ALL THE WAY DOWN"],
    title: "Canada's AI Strategy: It's frames all the way down",
    excerpt: "A circle that contains circles. On what Canada's National AI Strategy diagram reveals about adoption, trust, and frames all the way down.",
    category: "AI Strategy & Governance",
    date: "June 4, 2026",
    image: "/frame-within-a-frame-cover.png",
    imagePosition: "center center",
    href: "/field-notes/frame-within-a-frame",
  },
  {
    id: "041",
    titleLines: ["THE POPE", "HAS ENTERED", "THE CHAT"],
    title: "The Pope Has Entered the Chat",
    excerpt: "On what the Vatican's social media presence reveals about institutional authority, authenticity, and AI in the public sphere.",
    category: "Human Dignity",
    date: "May 26, 2026",
    image: "/260407-pope-leo-es.webp",
    imagePosition: "center 20%",
    href: "/field-notes/the-pope-has-entered-the-chat",
  },
  {
    id: "040",
    titleLines: ["A NEW", "CULTURAL", "EMBASSY"],
    title: "A New Cultural Embassy: Rethinking Vancouver's Proposed AI Data Centres",
    excerpt: "Vancouver has both the standing and the structural conditions to demand something better than a server room on unceded territory.",
    category: "Cultural Infrastructure",
    date: "May 25, 2026",
    image: "/cultural-embassy-vancouver-ai-cover.png",
    imagePosition: "center center",
    href: "/field-notes/a-new-cultural-embassy",
  },
  {
    id: "039",
    titleLines: ["TIME FOR", "VANCOUVER TO", "COME CLEAN", "ABOUT AI"],
    title: "Time for Vancouver to Come Clean About AI",
    excerpt: "Five hundred people marched through downtown Vancouver because an 18-year-old organized it with a week's notice. Politicians and industry should ask what the next one looks like.",
    category: "AI Infrastructure",
    date: "May 24, 2026",
    image: "/Come-Clean-vancouver-ai-data-centers-cover.png",
    imagePosition: "center center",
    href: "/field-notes/time-for-vancouver-to-come-clean-about-ai",
  },
  {
    id: "038",
    titleLines: ["INTRODUCING", "CONTROLLED", "INTELLIGENCE"],
    title: "Introducing Controlled Intelligence",
    excerpt: "A governance-first framework for deploying AI inside regulated organizations without surrendering institutional control.",
    category: "Controlled Intelligence",
    date: "May 10, 2026",
    image: "/VH.png",
    imagePosition: "center 60%",
    href: "/field-notes/introducing-controlled-intelligence",
  },
  {
    id: "037",
    titleLines: ["THE AI FRONTIER", "IS INSIDE", "YOUR OFFICE"],
    title: "The AI Frontier Is Inside Your Office",
    excerpt: "The adoption is already over. It just didn't go through governance.",
    category: "Governance",
    date: "May 5, 2026",
    image: "/omer-haktan-bulut-xXUDcznITWA-unsplash.jpg",
    imagePosition: "center 40%",
    href: "/field-notes/the-ai-frontier-is-inside-your-office",
  },
];

/* ── TOKENS ── */
const RULE = "1px solid #0A0A0A";
const BARLOW = "var(--font-barlow), sans-serif";
const CONDENSED = "var(--font-barlow-condensed), sans-serif";

const NAV_STYLE: React.CSSProperties = {
  fontFamily: BARLOW, fontWeight: 500, fontSize: "14px",
  letterSpacing: "0.08em", lineHeight: 1, textTransform: "uppercase",
  textDecoration: "none", color: "#0A0A0A", whiteSpace: "nowrap",
};
const LABEL: React.CSSProperties = {
  fontFamily: BARLOW, fontWeight: 600, fontSize: "10px",
  letterSpacing: "0.14em", textTransform: "uppercase",
};
const META_LABEL: React.CSSProperties = {
  fontFamily: BARLOW, fontWeight: 600, fontSize: "11px",
  letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.3rem",
};
const META_VALUE: React.CSSProperties = { fontFamily: BARLOW, fontWeight: 500, fontSize: "20px" };

/* ─────────────────────────────────────────────────────────────
   SECTION 1 — HERO
   Left column: paper — FIELD / NOTES FitText, intro, metadata.
   Right column: photograph fills entirely.
   All type on the image is position: absolute ON the photograph.
───────────────────────────────────────────────────────────── */
function Hero({ entry }: { entry: (typeof ENTRIES)[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={entry.href}
      className="fn-hero"
      style={{ cursor: "pointer", textDecoration: "none", color: "inherit", display: "grid" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* LEFT: paper column */}
      <div className="fn-hero-left">
        <div>
          <div style={{ ...LABEL, marginBottom: "0.5rem" }}>SECTION B</div>
          <FitText text="FIELD" style={{ fontFamily: CONDENSED, fontWeight: 900, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#0A0A0A" }} />
          <FitText text="NOTES" style={{ fontFamily: CONDENSED, fontWeight: 900, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#0A0A0A" }} />
          <p style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "13px", lineHeight: 1.6, margin: "1.25rem 0 0", maxWidth: "26ch" }}>
            Periodic observations at the intersection of AI, governance, infrastructure, publishing, and cultural change.
          </p>
        </div>
        {/* Metadata pinned to bottom */}
        <div style={{ marginTop: "auto", borderTop: RULE, paddingTop: "1rem", display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          <div>
            <div style={META_LABEL}>CATEGORY</div>
            <div style={{ fontFamily: BARLOW, fontWeight: 500, fontSize: "13px" }}>{entry.category}</div>
          </div>
          <div>
            <div style={META_LABEL}>DATE</div>
            <div style={{ fontFamily: BARLOW, fontWeight: 500, fontSize: "13px" }}>{entry.date}</div>
          </div>
          <div>
            <div style={META_LABEL}>STATUS</div>
            <div style={{ fontFamily: BARLOW, fontWeight: 500, fontSize: "13px", display: "flex", alignItems: "center", gap: "0.35rem" }}>
              <span style={{ fontSize: "0.55rem" }}>◉</span> PUBLIC
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: photograph — all type sits ON the image */}
      <div className="fn-hero-right">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={entry.image} alt="" aria-hidden
          style={{ objectPosition: entry.imagePosition, transition: "transform 0.7s ease", transform: hovered ? "scale(1.02)" : "scale(1)" }}
        />
        {/* Observation number — upper left of image */}
        <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem", zIndex: 2 }}>
          <div style={LABEL}>OBSERVATION</div>
          <div style={{ fontFamily: CONDENSED, fontWeight: 900, fontSize: "clamp(1.75rem, 3vw, 3.5rem)", letterSpacing: "-0.02em", lineHeight: 0.9 }}>
            {entry.id}
          </div>
        </div>
        {/* Title — ON the photograph, bottom anchored */}
        <div style={{ position: "absolute", bottom: "3.5rem", left: "1.5rem", zIndex: 2 }}>
          <h2 style={{ fontFamily: CONDENSED, fontWeight: 900, fontSize: "clamp(3rem, 10vw, 13rem)", letterSpacing: "-0.02em", textTransform: "uppercase", lineHeight: 0.88, margin: 0 }}>
            {entry.titleLines.map((line, i) => (
              <span key={i} style={{ display: "block" }}>{line}</span>
            ))}
          </h2>
        </div>
        {/* Arrow */}
        <div style={{ position: "absolute", bottom: "1.5rem", right: "1.5rem", zIndex: 2, fontFamily: BARLOW, fontWeight: 300, fontSize: "1.1rem", transform: hovered ? "translateX(4px)" : "translateX(0)", transition: "transform 0.15s ease" }}>
          →
        </div>
      </div>
    </a>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 2 — OBSERVATION INDEX
   Swiss-style finding aid. No images. No cards. No excerpts.
   Number / Title / Category / Date.
───────────────────────────────────────────────────────────── */
function ObservationIndex({ entries }: { entries: typeof ENTRIES }) {
  return (
    <section style={{ borderBottom: RULE }}>
      {/* Header */}
      <div style={{ padding: "1.25rem 1.5rem 1rem", borderBottom: RULE, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <div style={{ ...LABEL, fontSize: "11px" }}>OBSERVATION INDEX</div>
        <div style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "11px", letterSpacing: "0.06em" }}>
          {entries.length} OBSERVATIONS
        </div>
      </div>
      {/* Column headers */}
      <div className="fn-index-row" style={{ backgroundColor: "#E8E4DC" }}>
        <div style={{ ...LABEL, fontSize: "9px" }}>ID</div>
        <div style={{ ...LABEL, fontSize: "9px" }}>TITLE</div>
        <div className="fn-index-col-category" style={{ ...LABEL, fontSize: "9px" }}>CATEGORY</div>
        <div className="fn-index-col-date" style={{ ...LABEL, fontSize: "9px" }}>DATE</div>
        <div />
      </div>
      {/* Rows */}
      {entries.map((entry) => (
        <a key={entry.id} href={entry.href} className="fn-index-row" style={{ textDecoration: "none", color: "inherit" }}>
          <div style={{ fontFamily: CONDENSED, fontWeight: 900, fontSize: "1rem", letterSpacing: "-0.01em" }}>{entry.id}</div>
          <div style={{ fontFamily: BARLOW, fontWeight: 400, fontSize: "14px", lineHeight: 1.3 }}>{entry.title}</div>
          <div className="fn-index-col-category" style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "12px" }}>{entry.category}</div>
          <div className="fn-index-col-date" style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "12px" }}>{entry.date}</div>
          <div style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "0.9rem" }}>→</div>
        </a>
      ))}
      {/* Footer */}
      <div style={{ padding: "1rem 1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <span style={{ ...LABEL, fontSize: "11px" }}>VIEW ALL OBSERVATIONS</span>
        <span style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "0.9rem" }}>→</span>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 3 — FEATURED SPREADS
   2-column grid. Each spread: paper text column / photograph.
   Title starts on paper. Lines wide enough to cross into the
   photograph — text and image occupy the same visual field.
   The headline overlaps the photography.
───────────────────────────────────────────────────────────── */
function SpreadCard({ entry }: { entry: (typeof ENTRIES)[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={entry.href}
      className="fn-spread-card"
      style={{ backgroundColor: hovered ? "#E8E4DC" : "transparent", textDecoration: "none", color: "inherit" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* TEXT COLUMN — paper background, z-index 2, overflow visible */}
      {/* Title lines with white-space: nowrap extend beyond this column */}
      {/* into the image column, which sits behind at z-index 1 */}
      <div className="fn-spread-text">
        <div>
          <div style={{ ...LABEL, marginBottom: "0.3rem" }}>FEATURED OBSERVATION</div>
          <div style={{ fontFamily: CONDENSED, fontWeight: 900, fontSize: "clamp(2rem, 3vw, 3.5rem)", letterSpacing: "-0.02em", lineHeight: 0.9, marginBottom: "0.5rem" }}>
            {entry.id}
          </div>
          <div style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "0.875rem", marginBottom: "1rem" }}>—</div>
          {/* Headline: each line is display:block + white-space:nowrap */}
          {/* Lines wider than the text column bleed into the photograph */}
          <h2 style={{ fontFamily: CONDENSED, fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 7.5rem)", letterSpacing: "-0.02em", textTransform: "uppercase", lineHeight: 0.88, margin: "0 0 1.25rem" }}>
            {entry.titleLines.map((line, i) => (
              <span key={i} style={{ display: "block", whiteSpace: "nowrap" }}>{line}</span>
            ))}
          </h2>
          <p style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "13px", lineHeight: 1.6, margin: 0, maxWidth: "28ch" }}>
            {entry.excerpt}
          </p>
        </div>
        <div style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "1rem", marginTop: "1.5rem", transform: hovered ? "translateX(4px)" : "translateX(0)", transition: "transform 0.15s ease" }}>
          →
        </div>
      </div>

      {/* IMAGE COLUMN — z-index 1, overflow hidden */}
      {/* Clips the photograph to its own box */}
      {/* Title text from the adjacent column renders on top */}
      <div className="fn-spread-img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={entry.image} alt="" aria-hidden style={{ objectPosition: entry.imagePosition }} />
      </div>
    </a>
  );
}

/* ── PAGE ── */
export default function FieldNotesPage() {
  return (
    <main style={{ backgroundColor: "#F0EDE6", color: "#0A0A0A", fontFamily: BARLOW, minHeight: "100vh", margin: 0 }}>

      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.125rem 1.5rem", borderBottom: RULE }}>
        <a href="/" style={{ ...NAV_STYLE, textDecoration: "none" }}>SYMPATHETIC.TECHNOLOGY</a>
        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <a key={item} href={item === "SYSTEMS" ? "/systems" : item === "FIELD NOTES" ? "/field-notes" : item === "VERBATIM" ? "/verbatim" : item === "CLIENT LOGIN" ? "/client" : "#"}
              style={{ ...NAV_STYLE, ...(item === "FIELD NOTES" ? { textDecoration: "underline", textUnderlineOffset: "4px" } : {}) }}>
              {item}
            </a>
          ))}
          <span style={{ border: RULE, width: "1.5rem", height: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "0.6rem" }}>◉</span>
        </div>
        <span className="nav-mobile-icon" style={{ border: RULE, width: "1.5rem", height: "1.5rem", display: "none", alignItems: "center", justifyContent: "center", fontSize: "0.6rem" }}>◉</span>
      </nav>

      {/* SECTION 1 — HERO */}
      <Hero entry={ENTRIES[0]} />

      {/* SECTION 2 — OBSERVATION INDEX */}
      <ObservationIndex entries={ENTRIES} />

      {/* SECTION 3 — FEATURED SPREADS */}
      <div className="fn-spread-grid">
        {ENTRIES.slice(1).map((entry) => (
          <SpreadCard key={entry.id} entry={entry} />
        ))}
      </div>

      {/* REGISTRY */}
      <div className="fn-registry">
        <div>
          <div style={META_LABEL}>FIELD NOTES REGISTRY</div>
          <div style={{ ...META_VALUE, lineHeight: 1.3 }}>Version 1.1</div>
          <div style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "0.5rem" }}>
            SYMPATHETIC TECHNOLOGY
          </div>
        </div>
        <div><div style={META_LABEL}>STATUS</div><div style={META_VALUE}>ACTIVE</div></div>
        <div>
          <div style={META_LABEL}>ENTRIES INCLUDED</div>
          <div style={{ ...META_VALUE, fontVariantNumeric: "tabular-nums" }}>{String(ENTRIES.length).padStart(2, "0")}</div>
        </div>
        <div><div style={META_LABEL}>PUBLIC ACCESS</div><div style={META_VALUE}>OPEN</div></div>
        <div>
          <div style={META_LABEL}>CLASSIFICATION</div>
          <div style={{ ...META_VALUE, fontSize: "16px", lineHeight: 1.3 }}>EDITORIAL<br />ARCHIVE</div>
        </div>
        <div><div style={META_LABEL}>LAST REVISION</div><div style={META_VALUE}>JUNE 2026</div></div>
      </div>

      {/* LEGAL */}
      <div className="legal-bar">
        <span style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "0.5625rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          © SYMPATHETIC TECHNOLOGY INC.
        </span>
        <div className="legal-links">
          {["PRIVACY", "TERMS", "ACCESSIBILITY"].map((item) => (
            <a key={item} href="#" style={{ ...NAV_STYLE, fontSize: "0.5625rem" }}>{item}</a>
          ))}
        </div>
        <span style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "0.5625rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          SITE BY SYMPATHETIC
        </span>
      </div>
    </main>
  );
}
