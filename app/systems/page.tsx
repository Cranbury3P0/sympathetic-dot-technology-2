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
        (pos) => setGeo({ lat: pos.coords.latitude, lng: pos.coords.longitude, timezone: tz, ready: true }),
        () => setGeo((g) => ({ ...g, timezone: tz, ready: true }))
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
      el.style.fontSize = "100px";
      el.style.position = "absolute";
      const textWidth = el.getBoundingClientRect().width;
      el.style.position = "";
      const ratio = container.offsetWidth / textWidth;
      el.style.fontSize = `${100 * ratio}px`;
    };
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

const SYSTEMS_DATA = [
  {
    id: "01",
    name: "RINGO",
    description: "Community knowledge system for Hamilton, preserving, organizing, and surfacing local memory.",
    type: ["COMMUNITY", "KNOWLEDGE", "SYSTEM"],
    status: "PUBLIC",
    deployed: "2026",
    location: ["HAMILTON, ON"],
    owner: "HANGS CREATIVE",
    image: "/BW_CRANES.png",
    imagePosition: "center 40%",
  },
  {
    id: "02",
    name: "CHUNX",
    description: "Creative analysis system for evaluating, understanding, and advancing ideas, narratives, and cultural projects.",
    type: ["CREATIVE", "ANALYSIS", "SYSTEM"],
    status: "PUBLIC",
    deployed: "2026",
    location: ["VANCOUVER, BC"],
    owner: "SYMPATHETIC",
    image: "/CHUNX_BOTTOM.png",
    imagePosition: "center top",
  },
  {
    id: "03",
    name: "CANADIAN HEALTHCARE AI",
    description: "AI infrastructure for improving access to trustworthy, relevant, and understandable health information.",
    type: ["HEALTH INFORMATION", "INFRASTRUCTURE"],
    status: "PUBLIC",
    deployed: "2026",
    location: ["CANADA"],
    owner: "SYMPATHETIC",
    image: "/VH.png",
    imagePosition: "center center",
  },
  {
    id: "04",
    name: "HPOA",
    description: "Organizational development and digital transformation for the Health Professionals and Occupational Association.",
    type: ["PROFESSIONAL", "ASSOCIATION", "SYSTEM"],
    status: "PUBLIC",
    deployed: "2018–2026",
    location: ["BC"],
    owner: "PABC",
    image: "/golden_hour.png",
    imagePosition: "center center",
  },
  {
    id: "05",
    name: "PERKINS",
    description: "Manuscript analysis system for evaluating and developing craft in long-form fiction and narrative writing.",
    type: ["MANUSCRIPT", "ANALYSIS", "SYSTEM"],
    status: "PRIVATE",
    deployed: "2024",
    location: ["CANADA"],
    owner: "SYMPATHETIC",
    image: "/BW_CRANES.png",
    imagePosition: "center 30%",
  },
  {
    id: "06",
    name: "CONTROLLED INTELLIGENCE",
    description: "Framework for safe, aligned, and auditable AI systems in sensitive and regulated environments.",
    type: ["AI GOVERNANCE", "FRAMEWORK"],
    status: "PRIVATE",
    deployed: "2024",
    location: ["CANADA"],
    owner: "SYMPATHETIC",
    image: "/VH.png",
    imagePosition: "center 60%",
  },
  {
    id: "07",
    name: "AFFINITY BRIDGE",
    description: "Strategic advisory and capital intelligence for early-stage technology ventures.",
    type: ["VENTURE", "ADVISORY", "SYSTEM"],
    status: "PRIVATE",
    deployed: "2019–PRESENT",
    location: ["NORTH AMERICA"],
    owner: "SYMPATHETIC",
    image: "/golden_hour.png",
    imagePosition: "center bottom",
  },
];

const RELATED_OBSERVATIONS = [
  { number: "042", title: "The Problem With Municipal Memory" },
  { number: "048", title: "Infrastructure Is Culture" },
  { number: "053", title: "Why Every Organization Needs Memory" },
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
  marginBottom: "0.4rem",
};

const META_VALUE: React.CSSProperties = {
  fontFamily: BARLOW,
  fontWeight: 500,
  fontSize: "20px",
};

const COL_LABEL: React.CSSProperties = {
  fontFamily: BARLOW,
  fontWeight: 600,
  fontSize: "11px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#0A0A0A",
};

/* ── SYSTEM CARD ── */

function SystemCard({ system }: { system: (typeof SYSTEMS_DATA)[0] }) {
  const [hovered, setHovered] = useState(false);
  const isPrivate = system.status === "PRIVATE";

  return (
    <div
      className="systems-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? "#E8E4DC" : "transparent",
        opacity: isPrivate ? 0.75 : 1,
      }}
    >
      {/* Image */}
      <div style={{ width: "100%", aspectRatio: "1 / 1", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={system.image}
          alt=""
          aria-hidden
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: system.imagePosition,
            display: "block",
            filter: isPrivate ? "grayscale(40%)" : "none",
            transform: hovered ? "scale(1.02)" : "scale(1)",
            transition: "transform 0.4s ease",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "1.25rem 1.5rem" }}>
        {/* Top meta row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
          <span style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "12px", letterSpacing: "0.06em" }}>
            {system.id}
          </span>
          <span style={{ fontFamily: BARLOW, fontWeight: 500, fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "0.35rem" }}>
            <span style={{ fontSize: "0.6rem" }}>{isPrivate ? "○" : "◉"}</span>
            {system.status}
          </span>
        </div>

        {/* Title */}
        <h2 style={{
          fontFamily: CONDENSED,
          fontWeight: 900,
          fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
          letterSpacing: "-0.02em",
          textTransform: "uppercase",
          margin: "0 0 0.5rem",
          lineHeight: 0.9,
        }}>
          {system.name}
        </h2>

        {/* Type */}
        <div style={{ fontFamily: BARLOW, fontWeight: 500, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
          {system.type.join(" ")}
        </div>

        {/* Rule */}
        <div style={{ borderTop: "1px solid #0A0A0A", marginBottom: "0.75rem" }} />

        {/* Description */}
        <p style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "14px", lineHeight: 1.6, margin: "0 0 1.25rem" }}>
          {system.description}
        </p>

        {/* Bottom meta row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "11px", letterSpacing: "0.06em", textTransform: "uppercase", lineHeight: 1.7 }}>
            <div>{system.location.join(", ")}</div>
            <div>{system.deployed}</div>
            <div>{system.owner}</div>
          </div>
          <div style={{
            fontFamily: BARLOW,
            fontWeight: 300,
            fontSize: "1.2rem",
            transform: hovered ? "translateX(4px)" : "translateX(0)",
            transition: "transform 0.15s ease",
          }}>
            →
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── PAGE ── */

export default function SystemsPage() {
  const { geo, time } = useGeoAndTime();

  const tzLabel = geo.ready
    ? new Intl.DateTimeFormat("en", { timeZoneName: "short", timeZone: geo.timezone })
        .formatToParts(new Date())
        .find((p) => p.type === "timeZoneName")?.value ?? geo.timezone
    : "—";

  const publicCount = SYSTEMS_DATA.filter((s) => s.status === "PUBLIC").length;
  const privateCount = SYSTEMS_DATA.filter((s) => s.status === "PRIVATE").length;
  const firstDeployed = SYSTEMS_DATA.reduce((min, s) => {
    const year = parseInt(s.deployed.split("–")[0]);
    return year < min ? year : min;
  }, 9999);

  return (
    <main style={{ backgroundColor: "#F0EDE6", color: "#0A0A0A", fontFamily: BARLOW, minHeight: "100vh", margin: 0 }}>

      {/* ── NAV ── */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.125rem 1.5rem", borderBottom: RULE }}>
        <a href="/" style={{ ...NAV_STYLE, textDecoration: "none" }}>SYMPATHETIC.TECHNOLOGY</a>
        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <a key={item} href={item === "SYSTEMS" ? "/systems" : item === "FIELD NOTES" ? "/field-notes" : item === "VERBATIM" ? "/verbatim" : item === "CLIENT LOGIN" ? "/client" : "#"} style={{
              ...NAV_STYLE,
              ...(item === "SYSTEMS" ? { textDecoration: "underline", textUnderlineOffset: "4px" } : {}),
            }}>
              {item}
            </a>
          ))}
          <span style={{ border: RULE, width: "1.5rem", height: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "0.6rem" }}>◉</span>
        </div>
        <span className="nav-mobile-icon" style={{ border: RULE, width: "1.5rem", height: "1.5rem", display: "none", alignItems: "center", justifyContent: "center", fontSize: "0.6rem" }}>◉</span>
      </nav>

      {/* ── HERO ── */}
      <section style={{ padding: "1.5rem 1.5rem 0" }}>
        <div style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
          SECTION A
        </div>
        <FitText
          text="SYSTEMS"
          style={{
            fontFamily: CONDENSED,
            fontWeight: 900,
            lineHeight: 0.88,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            padding: "0 0.2rem",
          }}
        />
        {/* Introductory statement */}
        <div style={{ borderTop: RULE, marginTop: "1.25rem", paddingTop: "1.25rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
          <p style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "18px", lineHeight: 1.55, margin: 0, maxWidth: "52ch" }}>
            Public-interest systems, governance frameworks, and knowledge infrastructures designed to help organizations, communities, and institutions navigate change.
          </p>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "flex-end" }}>
            <span style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "1rem" }}>—</span>
          </div>
        </div>
      </section>

      {/* ── SYSTEMS GRID ── */}
      <section className="systems-card-grid" style={{ marginTop: "1.5rem" }}>
        {SYSTEMS_DATA.map((system) => (
          <SystemCard key={system.id} system={system} />
        ))}
      </section>

      {/* ── FOOTER ── */}
      <footer className="systems-footer">
        {/* Registry identity */}
        <div>
          <div style={META_LABEL}>SYSTEM REGISTRY</div>
          <div style={{ ...META_VALUE, lineHeight: 1.3 }}>Version 1.2</div>
          <div style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: "0.5rem" }}>
            SYMPATHETIC TECHNOLOGY
          </div>
        </div>

        {/* Total */}
        <div>
          <div style={META_LABEL}>TOTAL SYSTEMS</div>
          <div style={{ ...META_VALUE, fontVariantNumeric: "tabular-nums" }}>INFINITE</div>
        </div>

        {/* First deployed */}
        <div>
          <div style={META_LABEL}>FIRST DEPLOYED</div>
          <div style={{ ...META_VALUE, fontVariantNumeric: "tabular-nums" }}>{firstDeployed}</div>
        </div>

        {/* Last updated */}
        <div>
          <div style={META_LABEL}>LAST UPDATED</div>
          <div style={META_VALUE}>MAY 2026</div>
        </div>

        {/* Coordinates */}
        <div>
          <div style={META_LABEL}>COORDINATES</div>
          <div style={{ ...META_VALUE, lineHeight: 1.4, fontVariantNumeric: "tabular-nums", fontSize: "16px" }}>
            {geo.ready ? (
              <>{formatCoord(geo.lat, "N", "S")}<br />{formatCoord(geo.lng, "E", "W")}</>
            ) : "—"}
          </div>
        </div>

        {/* Time */}
        <div>
          <div style={META_LABEL}>TIME</div>
          <div style={{ ...META_VALUE, fontVariantNumeric: "tabular-nums", fontSize: "16px" }}>
            {time || "—"}
          </div>
          {geo.ready && (
            <div style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "11px", letterSpacing: "0.08em", marginTop: "0.35rem", textTransform: "uppercase" }}>
              {tzLabel}
            </div>
          )}
        </div>
      </footer>

      {/* ── RELATED OBSERVATIONS ── */}
      <div className="related-obs">
        <div style={{ fontFamily: BARLOW, fontWeight: 600, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          RELATED OBSERVATIONS
        </div>
        <div className="obs-list">
          {RELATED_OBSERVATIONS.map((obs) => (
            <div key={obs.number} className="obs-item">
              <div style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                Observation {obs.number}
              </div>
              <a href="#" style={{ fontFamily: BARLOW, fontWeight: 500, fontSize: "16px", lineHeight: 1.3, color: "#0A0A0A", textDecoration: "none", display: "block" }}>
                {obs.title}
              </a>
            </div>
          ))}
        </div>
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
