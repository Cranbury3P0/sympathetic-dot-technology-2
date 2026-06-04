"use client";

import { useEffect, useRef, useState } from "react";

/* ── GEOLOCATION + CLOCK ── */

type GeoState = {
  lat: number;
  lng: number;
  timezone: string;
  ready: boolean;
};

function formatCoord(deg: number, pos: string, neg: string): string {
  const dir = deg >= 0 ? pos : neg;
  return `${Math.abs(deg).toFixed(4)}° ${dir}`;
}

function useGeoAndTime() {
  const [geo, setGeo] = useState<GeoState>({
    lat: 49.2827,
    lng: -123.1207,
    timezone: "America/Vancouver",
    ready: false,
  });
  const [time, setTime] = useState("");

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setGeo({ lat: pos.coords.latitude, lng: pos.coords.longitude, timezone: tz, ready: true });
        },
        () => {
          setGeo((g) => ({ ...g, timezone: tz, ready: true }));
        }
      );
    } else {
      setGeo((g) => ({ ...g, timezone: tz, ready: true }));
    }
  }, []);

  useEffect(() => {
    if (!geo.ready) return;
    function tick() {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-CA", {
          timeZone: geo.timezone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [geo.ready, geo.timezone]);

  return { geo, time };
}

/* ── FIT TEXT ── */

function FitText({ text, style }: { text: string; style: React.CSSProperties }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const fit = () => {
      const container = containerRef.current;
      const el = textRef.current;
      if (!container || !el) return;
      // Temporarily go absolute so the element shrinks to intrinsic text width
      el.style.fontSize = "100px";
      el.style.position = "absolute";
      const textWidth = el.getBoundingClientRect().width;
      el.style.position = "";
      const ratio = container.offsetWidth / textWidth;
      el.style.fontSize = `${100 * ratio}px`;
    };
    // Wait for fonts before first measurement
    document.fonts.ready.then(fit);
    const ro = new ResizeObserver(fit);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", overflow: "hidden" }}>
      <h1 ref={textRef} style={{ ...style, whiteSpace: "nowrap", margin: 0 }}>
        {text}
      </h1>
    </div>
  );
}

/* ── DATA ── */

const NAV_ITEMS = ["SYSTEMS", "FIELD NOTES", "WORK", "VERBATIM", "ABOUT", "CONTACT", "CLIENT LOGIN"];

const SECTIONS = [
  { label: "A", title: "SYSTEMS", descriptor: "Public-interest systems and infrastructure for a complex world." },
  { label: "B", title: "FIELD NOTES", descriptor: "Essays and observations on technology, governance, publishing, and cultural change." },
  { label: "C", title: "WORK", descriptor: "Selected projects in research, strategy, infrastructure, and design." },
  { label: "D", title: "VERBATIM", descriptor: "A speculative archive of product systems, institutions, and fictions." },
];

/* ── SHARED STYLE TOKENS ── */

const RULE = "1px solid #0A0A0A";
const BARLOW = "var(--font-barlow), sans-serif";
const CONDENSED = "var(--font-barlow-condensed), sans-serif";

const NAV_STYLE: React.CSSProperties = {
  fontFamily: BARLOW,
  fontWeight: 500,
  fontSize: "14px",
  letterSpacing: "0.08em",
  lineHeight: 1,
  textTransform: "uppercase",
  textDecoration: "none",
  color: "#0A0A0A",
  whiteSpace: "nowrap",
};

const META_LABEL: React.CSSProperties = {
  fontFamily: BARLOW,
  fontWeight: 600,
  fontSize: "11px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  marginBottom: "0.5rem",
};

const META_VALUE: React.CSSProperties = {
  fontFamily: BARLOW,
  fontWeight: 500,
  fontSize: "20px",
};

/* ── COMPONENT ── */

export default function Home() {
  const { geo, time } = useGeoAndTime();

  const tzLabel = geo.ready
    ? new Intl.DateTimeFormat("en", { timeZoneName: "short", timeZone: geo.timezone })
        .formatToParts(new Date())
        .find((p) => p.type === "timeZoneName")?.value ?? geo.timezone
    : "—";

  return (
    <main style={{ backgroundColor: "#F0EDE6", color: "#0A0A0A", fontFamily: BARLOW, minHeight: "100vh", margin: 0 }}>

      {/* ── NAV ── */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.125rem 1.5rem", borderBottom: RULE }}>
        <span style={NAV_STYLE}>SYMPATHETIC.TECHNOLOGY</span>
        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <a key={item} href={
              item === "SYSTEMS" ? "/systems" :
              item === "FIELD NOTES" ? "/field-notes" :
              item === "VERBATIM" ? "/verbatim" :
              item === "CLIENT LOGIN" ? "/client" : "#"
            } style={NAV_STYLE}>{item}</a>
          ))}
          <span style={{ border: RULE, width: "1.5rem", height: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "0.6rem" }}>◉</span>
        </div>
        <span className="nav-mobile-icon" style={{ border: RULE, width: "1.5rem", height: "1.5rem", display: "none", alignItems: "center", justifyContent: "center", fontSize: "0.6rem" }}>◉</span>
      </nav>

      {/* ── PRE-HERO METADATA ── */}
      <div className="pre-hero" style={{ padding: "1.5rem 1.5rem 0" }}>
        <div style={{ fontFamily: BARLOW, fontWeight: 500, fontSize: "15px", letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 1.55 }}>
          Sean Cranbury, Principal
          <br />
          Vancouver, Canada
          <br />
          RESEARCH / ORGANIZATIONAL DEVELOPMENT / SYSTEMS DESIGN / PUBLISHING
          <br />
          EST. 2009
          <br />
          <span style={{ display: "block", marginTop: "0.4rem" }}>—</span>
        </div>
      </div>

      {/* ── HERO ── */}
      <section>
        <FitText
          text="SYMPATHETIC"
          style={{
            fontFamily: CONDENSED,
            fontWeight: 900,
            lineHeight: 0.88,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            padding: "0 0.2rem",
          }}
        />
      </section>

      {/* ── FOOTER METADATA STRIP ── */}
      <footer className="footer-grid" style={{ marginTop: "2rem" }}>
        <div>
          <div style={META_LABEL}>ARCHIVE STATUS</div>
          <div style={META_VALUE}>PUBLIC</div>
        </div>

        <div>
          <div style={META_LABEL}>VIBES</div>
          <div style={META_VALUE}>GOOD</div>
        </div>

        <div>
          <div style={META_LABEL}>DESTINATION</div>
          <div style={META_VALUE}>CLEAR</div>
        </div>

        <div>
          <div style={META_LABEL}>LAST UPDATED</div>
          <div style={META_VALUE}>MAY 29, 2026</div>
          <div style={{ fontWeight: 300, fontSize: "0.75rem", marginTop: "0.25rem" }}>—</div>
        </div>

        <div>
          <div style={META_LABEL}>COORDINATES</div>
          <div style={{ ...META_VALUE, lineHeight: 1.4, fontVariantNumeric: "tabular-nums" }}>
            {geo.ready ? (
              <>{formatCoord(geo.lat, "N", "S")}<br />{formatCoord(geo.lng, "E", "W")}</>
            ) : "—"}
          </div>
          <div style={{ fontWeight: 300, fontSize: "0.75rem", marginTop: "0.25rem" }}>—</div>
        </div>

        <div>
          <div style={META_LABEL}>TIME</div>
          <div style={{ ...META_VALUE, fontVariantNumeric: "tabular-nums", lineHeight: 1.4 }}>
            {time || "—"}
          </div>
          {geo.ready && (
            <div style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "11px", letterSpacing: "0.08em", marginTop: "0.35rem", textTransform: "uppercase" }}>
              {tzLabel}
            </div>
          )}
        </div>
      </footer>

      {/* ── SECTION INDEX ── */}
      <section style={{ position: "relative" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/VH.png" alt="" aria-hidden style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%", zIndex: 0 }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          {SECTIONS.map((sec) => (
            <a key={sec.label} className="section-row" href={
              sec.title === "SYSTEMS" ? "/systems" :
              sec.title === "FIELD NOTES" ? "/field-notes" :
              sec.title === "VERBATIM" ? "/verbatim" : "#"
            } style={{ textDecoration: "none", color: "inherit", display: "grid" }}>
              <div>
                <div style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "0.75rem", letterSpacing: "0.06em", paddingTop: "0.75rem" }}>
                  ({sec.label})
                </div>
                <h2 style={{ fontFamily: CONDENSED, fontWeight: 900, fontSize: "clamp(3.5rem, 10vw, 11rem)", lineHeight: 0.9, letterSpacing: "-0.02em", textTransform: "uppercase", margin: "0 0 0.5rem" }}>
                  {sec.title}
                </h2>
              </div>
              <div className="section-descriptor" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "flex-start", paddingTop: "0.75rem", gap: "0.5rem", maxWidth: "22ch", textAlign: "right" }}>
                <p style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "18px", lineHeight: 1.5, margin: 0 }}>
                  {sec.descriptor}
                </p>
                <span style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "1.25rem" }}>+</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── FOUR-COLUMN STATEMENT ROW ── */}
      <section className="four-col" style={{ borderTop: RULE, borderBottom: RULE }}>
        {[
          { body: "Technology changes.\nInstitutions change.\nPeople change.\n\nThe path through is sometimes hard to find.\n\nBut it's there.", isProcess: false },
          { body: "We can control the process of adaptation without losing institutional memory, purpose, or direction.", isProcess: false },
          { body: "RESEARCH.\nCREATIVITY.\nSTRATEGY.\nCOLLABORATION.\nITERATION.\nREPEAT.", isProcess: true },
          { body: "Embracing and shaping change comes from maintaining a strong vision, allowing for ambiguity, and a clear persistence toward the goal.", footer: "—", isProcess: false },
        ].map((col, i) => (
          <div key={i} className="four-col-cell">
            <p style={{
              fontFamily: BARLOW,
              fontWeight: col.isProcess ? 500 : 300,
              fontSize: col.isProcess ? "20px" : "clamp(16px, 2vw, 26px)",
              lineHeight: col.isProcess ? 1.7 : 1.25,
              margin: 0,
              whiteSpace: "pre-line",
              textTransform: col.isProcess ? "uppercase" : "none",
            }}>
              {col.body}
            </p>
            {col.footer && (
              <p style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "clamp(18px, 2vw, 28px)", margin: "0.75rem 0 0" }}>
                {col.footer}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* ── BOTTOM TEASER STRIP ── */}
      <div className="teaser-grid">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="teaser-img-left" src="/CHUNX_BOTTOM.png" alt="" aria-hidden style={{ width: "100%", height: "100%", minHeight: "14rem", objectFit: "cover", objectPosition: "center top", display: "block" }} />
        <div className="teaser-copy" style={{ padding: "1.5rem 2rem", borderLeft: RULE, borderRight: RULE }}>
          <div style={{ fontFamily: BARLOW, fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.25rem" }}>
            VERBATIM COLLECTION
          </div>
          <div style={{ fontFamily: CONDENSED, fontWeight: 900, fontSize: "1.25rem", marginBottom: "0.5rem" }}>04</div>
          <div style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>✦</div>
          <p style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "0.875rem", lineHeight: 1.55, margin: "0 0 1rem" }}>
            Exploring cultural analysis through product systems, institutional aesthetics, and designed fictions.
          </p>
          <a href="/verbatim" style={{ ...NAV_STYLE, display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            ENTER THE ARCHIVE →
          </a>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="teaser-img-right" src="/Sympathetic_Oat_Milk.png" alt="" aria-hidden style={{ width: "100%", height: "100%", minHeight: "14rem", objectFit: "cover", objectPosition: "center center", display: "block" }} />
      </div>

      {/* ── LEGAL BAR ── */}
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
