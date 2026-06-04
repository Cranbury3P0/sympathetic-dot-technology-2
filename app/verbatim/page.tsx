"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

const CATEGORIES = [
  "SPECULATIVE DESIGN",
  "BRAND SYSTEMS",
  "PUBLISHING",
  "PRODUCTS",
  "INSTITUTIONS",
];

const PROJECTS = [
  {
    id: "001",
    title: "SATELLITE EDITIONS 2026 FALL CATALOG",
    category: "Publishing",
    categoryDetail: "",
    description:
      "A speculative publishing program exploring ideas, systems, institutions, and futures. Catalog of forthcoming titles and imprint editions.",
    metric: "TITLES",
    metricValue: "12",
    status: "Active",
    image: "/SATELLITE.png",
    imageBg: "#E2DDD4",
  },
  {
    id: "002",
    title: "VEGAN ARCHIVE PROJECT",
    category: "Speculative Design",
    categoryDetail: "/ Advanced Segment Adaptation",
    description:
      "A decommissioned consumer brand exploring the aesthetic language of ethical production. Packaging, identity, and product design as cultural commentary.",
    metric: "PRODUCTS",
    metricValue: "8",
    status: "Operational",
    image: "/SYMPATHETIC_SPARKLING_WATER.png",
    imageBg: "#E2DDD4",
  },
  {
    id: "003",
    title: "MONOLITHIC CERAMIC DINNERWARE",
    category: "Products",
    categoryDetail: "",
    description:
      "A monolithic ceramic dinnerware set. Unglazed, matte, and finished by hand. Each piece carries the fingerprint of its maker.",
    metric: "PROGRAMS",
    metricValue: "3",
    status: "In Development",
    image: "/EARTH.png",
    imageBg: "#E2DDD4",
  },
];

/* ── STYLE TOKENS ── */

const RULE = "1px solid #0A0A0A";
const BARLOW = "var(--font-barlow), sans-serif";
const CONDENSED = "var(--font-barlow-condensed), sans-serif";

const NAV_STYLE: React.CSSProperties = {
  fontFamily: BARLOW,
  fontSize: "0.7rem",
  fontWeight: 500,
  letterSpacing: "0.12em",
  color: "#0A0A0A",
  textDecoration: "none",
};

/* ── PROJECT CARD ── */

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* Image */}
      <div
        style={{
          position: "relative",
          background: project.imageBg,
          aspectRatio: "3/4",
          overflow: "hidden",
        }}
      >
        {/* Number */}
        <div
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            fontFamily: BARLOW,
            fontSize: "0.65rem",
            fontWeight: 500,
            letterSpacing: "0.1em",
            color: "#0A0A0A",
            zIndex: 2,
          }}
        >
          {project.id}
        </div>
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: "contain", objectPosition: "center center", padding: "1.5rem", mixBlendMode: "multiply" }}
        />
      </div>

      {/* Text */}
      <div style={{ padding: "1.25rem 1.25rem 1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <p
          style={{
            fontFamily: BARLOW,
            fontSize: "0.65rem",
            fontWeight: 400,
            letterSpacing: "0.08em",
            color: "#555",
            textTransform: "uppercase",
            margin: "0 0 0.4rem",
          }}
        >
          <em style={{ fontStyle: "italic", textTransform: "none", letterSpacing: 0 }}>
            {project.category}{project.categoryDetail ? ` ${project.categoryDetail}` : ""}
          </em>
        </p>
        <h3
          style={{
            fontFamily: CONDENSED,
            fontWeight: 900,
            fontSize: "1.4rem",
            lineHeight: 1,
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
            color: "#0A0A0A",
            margin: "0 0 0.75rem",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontFamily: BARLOW,
            fontSize: "0.8rem",
            fontWeight: 300,
            lineHeight: 1.6,
            color: "#0A0A0A",
            margin: "0 0 1.25rem",
            flex: 1,
          }}
        >
          {project.description}
        </p>
        <div style={{ borderTop: RULE, paddingTop: "0.75rem", display: "flex", justifyContent: "flex-end" }}>
          <span style={{ fontFamily: BARLOW, fontSize: "1rem", fontWeight: 400, color: "#0A0A0A" }}>→</span>
        </div>
      </div>
    </div>
  );
}

/* ── PAGE ── */

export default function VerbatimPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div style={{ background: "#F0EDE6", minHeight: "100vh", fontFamily: BARLOW }}>

      {/* ── NAV ── */}
      <nav
        style={{
          borderBottom: RULE,
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "44px",
        }}
      >
        <Link href="/" style={{ ...NAV_STYLE, fontWeight: 700, letterSpacing: "0.06em" }}>
          SYMPATHETIC TECHNOLOGY
        </Link>
        <div className="nav-links">
          {NAV_ITEMS.map((item) => {
            const href =
              item === "SYSTEMS" ? "/systems" :
              item === "FIELD NOTES" ? "/field-notes" :
              item === "VERBATIM" ? "/verbatim" :
              item === "CLIENT LOGIN" ? "/client" : "#";
            return (
              <Link
                key={item}
                href={href}
                style={{
                  ...NAV_STYLE,
                  fontWeight: item === "VERBATIM" ? 700 : 500,
                  borderBottom: item === "VERBATIM" ? "1px solid #0A0A0A" : "none",
                  paddingBottom: item === "VERBATIM" ? "2px" : "0",
                }}
              >
                {item}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* ── VERBATIM TITLE ── */}
      <div style={{ borderBottom: RULE, padding: "0.5rem 1.5rem 0.4rem" }}>
        <FitText
          text="VERBATIM"
          style={{
            fontFamily: CONDENSED,
            fontWeight: 900,
            lineHeight: 0.88,
            letterSpacing: "-0.02em",
            color: "#0A0A0A",
            textTransform: "uppercase",
          }}
        />
      </div>

      {/* ── DESCRIPTOR ROW ── */}
      <div className="verbatim-descriptor">
        {/* Left: deck */}
        <div className="verbatim-descriptor-left">
          <p
            style={{
              fontFamily: BARLOW,
              fontSize: "0.82rem",
              fontWeight: 300,
              lineHeight: 1.65,
              color: "#0A0A0A",
              margin: 0,
            }}
          >
            A registry of work made, making, and imagined.<br />
            Products, systems, brand identities,<br />
            publishing projects, and institutional frameworks.<br />
            Some shipped. Some speculative. All deliberate.
          </p>
        </div>

        {/* Right: category nav, right-aligned */}
        <div className="verbatim-descriptor-right">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                fontFamily: CONDENSED,
                fontWeight: 900,
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                color: activeCategory === cat ? "#0A0A0A" : "#888",
                textTransform: "uppercase",
              }}
            >
              <span>{cat}</span>
              <span style={{ fontSize: "1.1rem", fontWeight: 300, color: activeCategory === cat ? "#0A0A0A" : "#aaa", lineHeight: 1 }}>+</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── 3-COLUMN PROJECT GRID ── */}
      <div className="verbatim-grid">
        {PROJECTS.map((project, i) => (
          <div
            key={project.id}
            style={{
              borderRight: i < PROJECTS.length - 1 ? RULE : "none",
            }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* ── VERBATIM REGISTRY FOOTER ── */}
      <div style={{ background: "#0A0A0A" }}>
        <div
          style={{
            padding: "0.6rem 1.5rem",
            borderBottom: "1px solid #333",
          }}
        >
          <span
            style={{
              fontFamily: BARLOW,
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: "#F0EDE6",
              textTransform: "uppercase",
            }}
          >
            VERBATIM REGISTRY
          </span>
        </div>
        <div className="verbatim-registry">
          {[
            { label: "COLLECTIONS", value: "05" },
            { label: "PROJECTS", value: "50" },
            { label: "ARTIFACTS", value: "128" },
            { label: "STATUS", value: "ACTIVE" },
            { label: "ORIGIN", value: "NSD" },
            { label: "ESTABLISHED", value: "1978" },
            { label: "LAST UPDATE", value: "MAY 30, 2026" },
          ].map((item, i) => (
            <div
              key={item.label}
              style={{
                padding: "0.9rem 1.25rem",
                borderRight: i < 6 ? "1px solid #333" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: BARLOW,
                  fontSize: "0.55rem",
                  fontWeight: 500,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#888",
                  marginBottom: "0.3rem",
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontFamily: CONDENSED,
                  fontWeight: 900,
                  fontSize: "1.1rem",
                  letterSpacing: "0.04em",
                  color: "#F0EDE6",
                  textTransform: "uppercase",
                }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
