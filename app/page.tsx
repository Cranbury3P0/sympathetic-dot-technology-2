"use client";

import { useEffect, useRef, useState } from "react";
import { Nav, LegalBar } from "sympathetic-ds";

/* ── GEOLOCATION + CLOCK ── */

type GeoState = {
  lat: number;
  lng: number;
  timezone: string;
  ready: boolean;
};

type LocationState = {
  city: string;
  country: string;
} | null;

const DEFAULT_LAT = 49.2827;
const DEFAULT_LNG = -123.1207;

function formatCoord(deg: number, pos: string, neg: string): string {
  const dir = deg >= 0 ? pos : neg;
  return `${Math.abs(deg).toFixed(4)}° ${dir}`;
}

function useGeoAndTime() {
  const [geo, setGeo] = useState<GeoState>({
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
    timezone: "America/Vancouver",
    ready: false,
  });
  const [location, setLocation] = useState<LocationState>(null);
  const [time, setTime] = useState("");

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

    function resolveLocation(lat: number, lng: number) {
      fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`)
        .then((res) => res.json())
        .then((data) => {
          const admin: Array<{ name: string; adminLevel?: number }> | undefined = data.localityInfo?.administrative;
          const cityLevel = admin?.find((a) => a.adminLevel === 8)?.name;
          const city = cityLevel || data.city || data.locality;
          const country = data.countryName;
          if (city && country) setLocation({ city, country });
        })
        .catch(() => {});
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setGeo({ lat: latitude, lng: longitude, timezone: tz, ready: true });
          resolveLocation(latitude, longitude);
        },
        () => {
          setGeo((g) => ({ ...g, timezone: tz, ready: true }));
          resolveLocation(DEFAULT_LAT, DEFAULT_LNG);
        }
      );
    } else {
      setGeo((g) => ({ ...g, timezone: tz, ready: true }));
      resolveLocation(DEFAULT_LAT, DEFAULT_LNG);
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

  return { geo, time, location };
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

const NAV_ITEMS = ["SYSTEMS", "FIELD NOTES", "WORK", "VERBATIM", "ABOUT", "CONTACT"];

const SECTIONS = [
  { label: "A", title: "WORK", descriptor: "Selected projects in research, strategy, infrastructure, and design." },
  { label: "B", title: "FIELD NOTES", descriptor: "Essays and observations on technology, governance, publishing, and cultural change." },
  { label: "C", title: "CONTROLLED INTELLIGENCE", descriptor: "Governed AI infrastructure under organizational control." },
  { label: "D", title: "MERIDIAN FRAMEWORK", descriptor: "Architecture for Organizational Intelligence" },
  { label: "E", title: "RESONANCE ENGINE", descriptor: "Process architecture for continuity in creative work." },
  { label: "F", title: "HARVARD CAPSTONE", descriptor: "Capstone project from Harvard Medical School's Executive Education program." },
  { label: "G", title: "VERBATIM LEARNING", descriptor: "Speaking and workshops on AI, organizations, and creative work." },
  { label: "H", title: "ABOUT", descriptor: "Background, philosophy, and the studio behind the work." },
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
  const { geo, time, location } = useGeoAndTime();

  const tzLabel = geo.ready
    ? new Intl.DateTimeFormat("en", { timeZoneName: "short", timeZone: geo.timezone })
        .formatToParts(new Date())
        .find((p) => p.type === "timeZoneName")?.value ?? geo.timezone
    : "/";

  return (
    <main style={{ backgroundColor: "#F0EDE6", color: "#0A0A0A", fontFamily: BARLOW, minHeight: "100vh", margin: 0 }}>

      {/* ── NAV ── */}
      <Nav />

      {/* ── PRE-HERO METADATA ── */}
      <div className="pre-hero" style={{ padding: "1.5rem 1.5rem 0" }}>
        <div style={{ fontFamily: BARLOW, fontWeight: 500, fontSize: "15px", letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 1.55 }}>
          Sean Cranbury, Principal
          <br />
          Vancouver, Canada
          <br />
          ORGANIZATIONAL DEVELOPMENT / KNOWLEDGE ARCHITECTURE / COMMUNICATIONS / BOOKS & PUBLISHING
          <br />
          EST. 2009
          <br />
          <span style={{ display: "block", marginTop: "0.4rem" }}>/</span>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="home-brand-lockup">
        <FitText
          text="SYMPATHETIC"
          style={{
            fontFamily: CONDENSED,
            fontWeight: 900,
            lineHeight: 0.88,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
          }}
        />
        <div className="home-studio-statement">
          <p>
            An integrated West Coast studio for technology, organizational development, and project strategy. We help nonprofit organizations, businesses, and individuals understand where they are, clarify where they want to be, and chart a confident course toward a sustainable and prosperous future.
          </p>
        </div>
      </section>

      {/* ── FOOTER METADATA STRIP ── */}
      <footer className="footer-grid" style={{ marginTop: "1rem" }}>
        <div>
          <div style={META_LABEL}>AVAILABILITY</div>
          <div style={META_VALUE}>OPEN</div>
        </div>

        <div>
          <div style={META_LABEL}>VIBES</div>
          <div style={META_VALUE}>GOOD</div>
        </div>

        <div>
          <div style={META_LABEL}>BEARING</div>
          <div style={META_VALUE}>312°</div>
        </div>

        <div>
          <div style={META_LABEL}>DESTINATION</div>
          <div style={META_VALUE}>CLEAR</div>
        </div>

        <div>
          <div style={META_LABEL}>LOCATION</div>
          <div style={{ ...META_VALUE, lineHeight: 1.4 }}>
            {location ? <>{location.city.toUpperCase()},<br />{location.country.toUpperCase()}</> : "/"}
          </div>
          <div style={{ fontWeight: 300, fontSize: "0.75rem", marginTop: "0.25rem" }}>/</div>
        </div>

        <div>
          <div style={META_LABEL}>COORDINATES</div>
          <div style={{ ...META_VALUE, lineHeight: 1.4, fontVariantNumeric: "tabular-nums" }}>
            {geo.ready ? (
              <>{formatCoord(geo.lat, "N", "S")}<br />{formatCoord(geo.lng, "E", "W")}</>
            ) : "/"}
          </div>
          <div style={{ fontWeight: 300, fontSize: "0.75rem", marginTop: "0.25rem" }}>/</div>
        </div>

        <div>
          <div style={META_LABEL}>TIME</div>
          <div style={{ ...META_VALUE, fontVariantNumeric: "tabular-nums", lineHeight: 1.4 }}>
            {time || "/"}
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
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#FFFFFF", opacity: 0.4, mixBlendMode: "screen", zIndex: 1 }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          {SECTIONS.map((sec) => (
            <a key={sec.label} className="section-row" href={
              sec.title === "FIELD NOTES" ? "/field-notes" :
              sec.title === "CONTROLLED INTELLIGENCE" ? "/controlled-intelligence" :
              sec.title === "MERIDIAN FRAMEWORK" ? "/meridian" :
              sec.title === "RESONANCE ENGINE" ? "/resonance" :
              sec.title === "HARVARD CAPSTONE" ? "/harvard-capstone" :
              sec.title === "VERBATIM LEARNING" ? "/verbatim" : "#"
            } style={{ textDecoration: "none", color: "inherit", display: "grid" }}>
              <div>
                <div style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "0.75rem", letterSpacing: "0.06em", paddingTop: "0.75rem" }}>
                  ({sec.label})
                </div>
                <h2 style={{ fontFamily: CONDENSED, fontWeight: 900, fontSize: "clamp(2rem, 7vw, 8.5rem)", lineHeight: 0.9, letterSpacing: "-0.02em", textTransform: "uppercase", whiteSpace: "nowrap", margin: "0 0 0.5rem" }}>
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

      {/* ── PROCESS TICKER ── */}
      <section className="ticker-row" style={{ borderTop: RULE, borderBottom: RULE }}>
        <div className="ticker-track">
          <span className="ticker-item" style={{ fontFamily: CONDENSED }}>RESEARCH. CREATIVITY. STRATEGY. COLLABORATION. ITERATION. REPEAT.&nbsp;</span>
          <span className="ticker-item" style={{ fontFamily: CONDENSED }} aria-hidden="true">RESEARCH. CREATIVITY. STRATEGY. COLLABORATION. ITERATION. REPEAT.&nbsp;</span>
        </div>
      </section>

      {/* ── THREE-COLUMN STATEMENT ROW ── */}
      <section className="three-col" style={{ borderBottom: RULE }}>
        {[
          { title: "Orientation Before Adaptation", body: "We build systems, platforms, and strategies for individuals and organizations that embrace the complexity of today.\n\nWe work in a noisy and chaotic world, where technologies emerge and change at lightning speed. For groups that know they must adapt, this can create confusion and paralysis.\n\nBefore recommending any act of adaptation, we orient the organization, its staff, and especially its leadership to the present moment and possible futures. Using a human-centred approach and current tools we bring its history, systems, values, and institutional knowledge forward so it can understand and inform the changes happening around it, recognize the opportunities available, and chart a path forward.\n\nGrounded in trust, transparency, and equity, our work prioritizes client support and self-sufficiency over lock-in.\n\nWe establish a shared language that grounds us in the present as we look to the future." },
          { title: "Connecting the Historical Present", body: "Organizational orientation requires more than understanding current conditions. It also requires understanding how the organization arrived here.\n\nDecades of institutional knowledge can become scattered across past projects, strategic directives, manuals, board minutes, correspondence, research, and abandoned document systems. Valuable ideas and hard-earned lessons remain buried in old Dropbox folders and unnavigable Microsoft 365 document trees, disconnected from the people who could use them today.\n\nGenerative and agentic tools can help retrieve, organize, connect, and interpret these materials at a scale that was previously too costly or exhausting to contemplate. When this knowledge is integrated into current systems, staff can understand not only what was done, but why it was done, what was learned, and what remains useful.\n\nThis is not an exercise in nostalgia. It restores continuity, reduces repeated work, and returns the knowledge and wisdom of earlier leaders to the active life of the organization.\n\nBy bringing its past forward, an organization can better understand its present and make more informed choices about its future." },
          { title: "The Language of Intention", body: "Orientation begins with language. An organization cannot understand where it is, bring its historical knowledge forward, or decide where it wants to go without a clear and shared way of describing itself and the world around it.\n\nLanguage is not a product we delegate to technology. It is a human and intentional act shaped by attention, judgment, experience, and care. AI can retrieve, organize, compare, and generate words, but it cannot determine what an organization means, believes, or intends to say.\n\nWe listen carefully, ask precise questions, and help staff and leadership find language that reflects their knowledge, values, and ambitions. This creates the common ground required for trust, collaboration, and informed action.\n\nWhen historical materials are returned to active use, clear language connects past insight to present conditions. It helps an organization preserve what remains valuable, recognize what has changed, and articulate what must come next.\n\nThe world changes quickly, but the foundations of meaningful work remain human: clarity, trust, intention, and collaboration.", footer: "/" },
        ].map((col) => (
          <div key={col.title} className="three-col-cell">
            <h3 style={{
              fontFamily: CONDENSED,
              fontWeight: 900,
              fontSize: "clamp(1.5rem, 3vw, 3rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              margin: "0 0 1.5rem",
            }}>
              {col.title}
            </h3>
            <p style={{
              fontFamily: BARLOW,
              fontWeight: 300,
              fontSize: "clamp(17px, 2.1vw, 27px)",
              lineHeight: 1.4,
              margin: 0,
              whiteSpace: "pre-line",
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

      {/* ── RESONANCE FOOTER TEASER ── */}
      <div className="resonance-teaser-grid">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="resonance-teaser-img" src="/RESONANCE_QUARTZ_LENS.jpg" alt="" aria-hidden style={{ width: "100%", height: "100%", minHeight: "18rem", objectFit: "cover", objectPosition: "center center", display: "block" }} />
        <div className="resonance-teaser-copy" style={{ padding: "2.5rem" }}>
          <div style={{ fontFamily: BARLOW, fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            RESONANCE
          </div>
          <h2 style={{ fontFamily: CONDENSED, fontWeight: 900, fontSize: "clamp(2.25rem, 5vw, 4rem)", lineHeight: 1.02, letterSpacing: "-0.01em", textTransform: "uppercase", margin: "0 0 1rem" }}>
            Experience Resonance
          </h2>
          <p style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "clamp(15px, 1.4vw, 19px)", lineHeight: 1.55, margin: "0 0 1.5rem", maxWidth: "40ch" }}>
            The customizable platform for distraction-free creative process.
          </p>
          <a href="/resonance" style={{ ...NAV_STYLE, display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
            ENTER RESONANCE →
          </a>
        </div>
      </div>

      {/* ── LEGAL BAR ── */}
      <LegalBar />
    </main>
  );
}
