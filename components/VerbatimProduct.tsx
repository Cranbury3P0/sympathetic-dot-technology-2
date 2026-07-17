"use client";

/**
 * VerbatimProduct — reusable product page template
 *
 * Renders a VERBATIM product or archival record in the
 * 1980s industrial catalog / government procurement aesthetic.
 *
 * All content comes from a VerbatimProduct data object.
 * No copy is hardcoded in this component.
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { VerbatimProduct } from "@/lib/products";

/* ── Design tokens ─────────────────────────────────────── */

const BG       = "#E2DDD4";   // warm off-white — catalog page ground
const INK      = "#0A0A0A";   // near-black
const RULE     = `1px solid ${INK}`;
const RULE_SOFT = "1px solid rgba(10,10,10,0.18)";
const ACCENT   = "#8B1A1A";   // muted red — warnings, cancelled status

const CONDENSED = "var(--font-barlow-condensed), sans-serif";
const SANS      = "var(--font-barlow), sans-serif";

const NAV_ITEMS = [
  { label: "SYSTEMS",      href: "/systems" },
  { label: "FIELD NOTES",  href: "/field-notes" },
  { label: "WORK",         href: "#" },
  { label: "VERBATIM LEARNING", href: "/verbatim" },
  { label: "ABOUT",        href: "#" },
  { label: "CONTACT",      href: "#" },
  { label: "CLIENT LOGIN", href: "/client" },
];

/* ── Small reusable atoms ──────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: SANS,
      fontSize: "0.6rem",
      fontWeight: 700,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: INK,
      marginBottom: "0.75rem",
    }}>
      {children}
    </div>
  );
}

function Rule({ soft }: { soft?: boolean }) {
  return <div style={{ borderTop: soft ? RULE_SOFT : RULE, width: "100%" }} />;
}

function WarrantyIcon({ type }: { type: string }) {
  // Simple SVG icons matching the shield/arrow/wrench/gear motif in the reference
  const icons: Record<string, string> = {
    "2 YEAR LIMITED WARRANTY":      "M12 2L4 6v6c0 5.25 3.5 10.15 8 11.5C16.5 22.15 20 17.25 20 12V6l-8-4z",
    "30 DAY RETURN POLICY":         "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z",
    "REPAIR SERVICES AVAILABLE":    "M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z",
    "REPLACEMENT PARTS AVAILABLE":  "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z",
  };
  const d = Object.entries(icons).find(([k]) => type.includes(k.split(" ").slice(0, 2).join(" ")))?.[1]
    ?? icons["REPLACEMENT PARTS AVAILABLE"];
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={INK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "1px" }}>
      <path d={d} />
    </svg>
  );
}

/* ── Main component ────────────────────────────────────── */

export function VerbatimProduct({ product }: { product: VerbatimProduct }) {
  const isArchival  = product.isArchival ?? false;
  const isCancelled = product.status === "DEVELOPMENT CANCELLED";
  const statusColor = isCancelled ? ACCENT : INK;

  /* Split name on \n for multi-line display (e.g. Gunslinger) */
  const nameLines = product.name.split("\n");

  return (
    <div style={{ background: BG, minHeight: "100vh", fontFamily: SANS, color: INK }}>

      {/* ── SITE NAV ──────────────────────────────────────── */}
      <nav style={{ borderBottom: RULE, padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "44px" }}>
        <Link href="/" style={{ fontFamily: CONDENSED, fontSize: "0.95rem", fontWeight: 900, letterSpacing: "0.06em", color: INK, textDecoration: "none" }}>
          SYMPATHETIC<sup style={{ fontSize: "0.45em", verticalAlign: "super", letterSpacing: 0 }}>®</sup>
          <span style={{ display: "block", fontFamily: SANS, fontSize: "0.55rem", fontWeight: 500, letterSpacing: "0.18em", marginTop: "-2px" }}>
            {product.divisions[0]}
          </span>
        </Link>
        <div className="nav-links" style={{ gap: "1.5rem" }}>
          {NAV_ITEMS.map((item) => (
            <Link key={item.label} href={item.href} style={{ fontFamily: SANS, fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.12em", color: INK, textDecoration: "none" }}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* ── COLLECTION BAR ────────────────────────────────── */}
      <div style={{ borderBottom: RULE, padding: "0.45rem 1.5rem", display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <Link href="/verbatim" style={{ fontFamily: SANS, fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.14em", color: "#666", textDecoration: "none", textTransform: "uppercase" }}>
          VERBATIM
        </Link>
        <span style={{ color: "#999", fontSize: "0.6rem" }}>/</span>
        {product.divisions.map((div, i) => (
          <React.Fragment key={div}>
            <span style={{ fontFamily: SANS, fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.14em", color: "#666", textTransform: "uppercase" }}>{div}</span>
            {i < product.divisions.length - 1 && <span style={{ color: "#999", fontSize: "0.6rem" }}>/</span>}
          </React.Fragment>
        ))}
        <span style={{ color: "#999", fontSize: "0.6rem" }}>/</span>
        <span style={{ fontFamily: SANS, fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.14em", color: INK, textTransform: "uppercase" }}>
          {product.name.replace("\n", " ")}
          {isArchival && " (ARCHIVAL)"}
        </span>
      </div>

      {/* ── COLLECTION IDENTIFIER ─────────────────────────── */}
      <div style={{ padding: "0.5rem 1.5rem", borderBottom: RULE_SOFT }}>
        <span style={{ fontFamily: SANS, fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#555" }}>
          {product.collection}
        </span>
      </div>

      {/* ── HERO PANEL — image left, details right ────────── */}
      <div className="vp-hero-panel">

        {/* LEFT — product photograph */}
        <div className="vp-hero-image" style={{ position: "relative", background: "#CEC9C0", overflow: "hidden" }}>
          {product.heroImage ? (
            <>
              <Image
                src={product.heroImage}
                alt={product.heroImageAlt ?? product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1100px) 55vw, 58vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
              />
              {isArchival && (
                <div style={{
                  position: "absolute",
                  top: "1.5rem",
                  left: "1.5rem",
                  border: `2px solid ${ACCENT}`,
                  padding: "0.5rem 0.75rem",
                  color: ACCENT,
                  fontFamily: CONDENSED,
                  fontWeight: 900,
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  lineHeight: 1.3,
                  background: "rgba(226,221,212,0.82)",
                }}>
                  ARCHIVAL RECORD<br />
                  DEVELOPMENT PROJECT<br />
                  CANCELLED {product.metadata.find(m => m.label === "PROJECT DATES")?.value?.split("–")[1]?.trim() ?? ""}
                </div>
              )}
            </>
          ) : (
            /* Placeholder — camera-ready for future photograph */
            <>
              {isArchival && (
                <div style={{
                  position: "absolute",
                  top: "1.5rem",
                  left: "1.5rem",
                  border: `2px solid ${ACCENT}`,
                  padding: "0.5rem 0.75rem",
                  color: ACCENT,
                  fontFamily: CONDENSED,
                  fontWeight: 900,
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  lineHeight: 1.3,
                }}>
                  ARCHIVAL RECORD<br />
                  DEVELOPMENT PROJECT CANCELLED
                </div>
              )}
              <div style={{
                position: "absolute", inset: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: CONDENSED, fontSize: "0.7rem", letterSpacing: "0.18em",
                fontWeight: 700, color: "rgba(10,10,10,0.25)", textTransform: "uppercase", textAlign: "center",
              }}>
                {product.name.replace("\n", " ")}<br />
                <span style={{ fontWeight: 400 }}>Image pending</span>
              </div>
            </>
          )}
        </div>

        {/* RIGHT — product details, stacked vertically */}
        <div className="vp-hero-details">

          {/* Name + subtitle + divisions */}
          <div style={{ padding: "2rem 2rem 1.5rem", borderBottom: RULE_SOFT }}>
            {nameLines.map((line, i) => (
              <div key={i} style={{
                fontFamily: CONDENSED,
                fontWeight: 900,
                fontSize: "clamp(2.8rem, 5vw, 5rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                color: INK,
              }}>
                {line}
              </div>
            ))}
            <div style={{
              fontFamily: CONDENSED,
              fontWeight: 700,
              fontSize: "clamp(0.85rem, 1.4vw, 1.1rem)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: INK,
              marginTop: "0.6rem",
            }}>
              {product.subtitle}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1rem" }}>
              {product.divisions.map((div) => (
                <span key={div} style={{
                  fontFamily: SANS,
                  fontSize: "0.55rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#555",
                  borderTop: RULE_SOFT,
                  paddingTop: "0.35rem",
                }}>
                  {div}
                </span>
              ))}
            </div>
          </div>

          {/* Status + deck + project dates */}
          <div style={{ padding: "1.5rem 2rem", borderBottom: RULE_SOFT, flex: 1 }}>
            <div style={{ marginBottom: "1rem" }}>
              <div style={{ fontFamily: SANS, fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", color: statusColor, textTransform: "uppercase" }}>
                STATUS: {product.status}
              </div>
              {product.statusDetail && (
                <div style={{ fontFamily: SANS, fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.14em", color: statusColor, textTransform: "uppercase", marginTop: "0.15rem" }}>
                  {product.statusDetail}
                </div>
              )}
            </div>
            <p style={{ fontFamily: SANS, fontSize: "0.82rem", fontWeight: 300, lineHeight: 1.7, color: INK, margin: 0 }}>
              {product.deck}
            </p>
            {(product.projectDates || product.projectCode) && (
              <div style={{ marginTop: "1.25rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {product.projectDates && (
                  <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "0.5rem" }}>
                    <span style={{ fontFamily: SANS, fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>PROJECT DATES</span>
                    <span style={{ fontFamily: SANS, fontSize: "0.6rem", fontWeight: 300, letterSpacing: "0.06em" }}>{product.projectDates}</span>
                  </div>
                )}
                {product.projectCode && (
                  <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "0.5rem" }}>
                    <span style={{ fontFamily: SANS, fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>PROJECT CODE</span>
                    <span style={{ fontFamily: SANS, fontSize: "0.6rem", fontWeight: 300, letterSpacing: "0.06em" }}>{product.projectCode}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Metadata box */}
          <div style={{ padding: "1.5rem 2rem" }}>
            <div style={{ border: RULE, padding: "0.85rem 1rem" }}>
              {product.metadata.map((item) => (
                <div key={item.label} style={{ marginBottom: "0.6rem" }}>
                  <div style={{ fontFamily: SANS, fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: INK }}>
                    {item.label}:
                  </div>
                  <div style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.06em", whiteSpace: "pre-line", marginTop: "0.1rem" }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>{/* /hero details */}
      </div>{/* /hero panel */}

      {/* ── INTENDED USE + TARGET MARKETS (archival) ──────── */}
      {(product.intendedUse || product.targetMarkets) && (
        <div className="vp-archival-intent" style={{ borderBottom: RULE }}>
          {product.intendedUse && (
            <div style={{ padding: "1.25rem 1.5rem", borderRight: RULE }}>
              <SectionLabel>Intended Use</SectionLabel>
              <p style={{ fontFamily: SANS, fontSize: "0.82rem", fontWeight: 300, lineHeight: 1.62, margin: 0 }}>
                {product.intendedUse}
              </p>
            </div>
          )}
          {product.targetMarkets && (
            <div style={{ padding: "1.25rem 1.5rem" }}>
              <SectionLabel>Target Markets</SectionLabel>
              <ul style={{ margin: 0, padding: 0, listStyle: "disc", paddingLeft: "1.1rem" }}>
                {product.targetMarkets.map((m) => (
                  <li key={m} style={{ fontFamily: SANS, fontSize: "0.78rem", fontWeight: 300, lineHeight: 1.7, color: INK }}>{m}</li>
                ))}
              </ul>
              {product.intendedUse && (
                <p style={{ fontFamily: SANS, fontSize: "0.68rem", fontWeight: 400, lineHeight: 1.55, marginTop: "1rem", marginBottom: 0, color: "#444", fontStyle: "italic" }}>
                  NOTE: Intended for operators with advanced physical control and a high tolerance for centrifugal forces.
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* ── THREE-COLUMN SPECS ────────────────────────────── */}
      {(product.features || product.technicalSpecs || product.includes) && (
        <div style={{ borderBottom: RULE }}>
          <div className="vp-specs-grid">

            {product.features && (
              <div style={{ borderRight: RULE, padding: "1.25rem 1.5rem" }}>
                <SectionLabel>
                  {product.divisions[0]?.includes("FRONTIER") ? "Designed for the Production of" : "System Features"}
                </SectionLabel>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {product.features.map((f) => (
                    <li key={f} style={{ fontFamily: SANS, fontSize: "0.75rem", fontWeight: 300, lineHeight: 1.85, color: INK }}>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.technicalSpecs && (
              <div style={{ borderRight: product.includes ? RULE : "none", padding: "1.25rem 1.5rem" }}>
                <SectionLabel>Technical Specifications</SectionLabel>
                {product.technicalSpecs.map((spec) => (
                  <div key={spec.label} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "0 0.5rem", alignItems: "baseline", marginBottom: "0.25rem" }}>
                    <span style={{ fontFamily: SANS, fontSize: "0.68rem", fontWeight: 500, color: INK }}>
                      {spec.label}:
                    </span>
                    <span style={{ fontFamily: SANS, fontSize: "0.68rem", fontWeight: 300, color: INK }}>
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {product.includes && (
              <div style={{ padding: "1.25rem 1.5rem" }}>
                <SectionLabel>System Includes</SectionLabel>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {product.includes.map((item) => (
                    <li key={item} style={{ fontFamily: SANS, fontSize: "0.75rem", fontWeight: 300, lineHeight: 1.85, color: INK }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        </div>
      )}

      {/* ── PROTOTYPE SPECS (archival) ────────────────────── */}
      {product.prototypeSpecs && (
        <div style={{ borderBottom: RULE }}>
          <div className="vp-prototype-grid" style={{ padding: "1.25rem 1.5rem" }}>
            <div>
              <SectionLabel>Prototype Specifications (Unreleased)</SectionLabel>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {product.prototypeSpecs.map((s) => (
                  <li key={s} style={{ fontFamily: SANS, fontSize: "0.75rem", fontWeight: 300, lineHeight: 1.85, color: INK }}>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            {product.prototypeImage && (
              <div style={{ position: "relative", minHeight: "220px", background: "#CEC9C0" }}>
                <Image src={product.prototypeImage} alt="Prototype diagram" fill style={{ objectFit: "contain" }} />
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── COMPONENT GRID ────────────────────────────────── */}
      {product.components && product.components.length > 0 && (
        <div style={{ borderBottom: RULE }}>
          <div className="vp-component-grid">
            {product.components.map((comp, i) => {
              const total = product.components!.length;
              return (
                <div
                  key={comp.name}
                  style={{
                    borderRight: i < total - 1 ? RULE : "none",
                    padding: "0",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Component image */}
                  <div style={{
                    borderBottom: RULE_SOFT,
                    background: "#CEC9C0",
                    aspectRatio: "1",
                    position: "relative",
                    overflow: "hidden",
                  }}>
                    {comp.image ? (
                      <Image src={comp.image} alt={comp.name} fill style={{ objectFit: "cover" }} />
                    ) : (
                      <div style={{
                        position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: CONDENSED, fontWeight: 700, fontSize: "0.55rem", letterSpacing: "0.12em",
                        color: "rgba(10,10,10,0.3)", textTransform: "uppercase", textAlign: "center", padding: "0.5rem",
                      }}>
                        {comp.name}{comp.nameLine2 ? `\n${comp.nameLine2}` : ""}
                      </div>
                    )}
                  </div>
                  {/* Component text */}
                  <div style={{ padding: "0.75rem 0.85rem", flex: 1 }}>
                    <div style={{
                      fontFamily: CONDENSED,
                      fontWeight: 900,
                      fontSize: "0.72rem",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      lineHeight: 1.2,
                      marginBottom: "0.4rem",
                      color: INK,
                    }}>
                      {comp.name}
                      {comp.nameLine2 && <><br />{comp.nameLine2}</>}
                    </div>
                    {(Array.isArray(comp.description) ? comp.description : [comp.description]).map((para, j) => (
                      <p key={j} style={{ fontFamily: SANS, fontSize: "0.65rem", fontWeight: 300, lineHeight: 1.62, margin: "0 0 0.3rem", color: INK }}>
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── TESTING OUTCOMES (archival) ───────────────────── */}
      {product.testingOutcomes && (
        <div className="vp-archival-2col" style={{ borderBottom: RULE }}>
          <div style={{ borderRight: RULE, padding: "1.25rem 1.5rem" }}>
            <SectionLabel>Testing Outcomes</SectionLabel>
            {product.testingOutcomes.narrative.map((p, i) => (
              <p key={i} style={{ fontFamily: SANS, fontSize: "0.78rem", fontWeight: 300, lineHeight: 1.68, margin: "0 0 0.75rem" }}>{p}</p>
            ))}
            <div style={{ marginTop: "0.75rem" }}>
              <div style={{ fontFamily: SANS, fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.14em", marginBottom: "0.5rem" }}>
                Documented Results:
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "disc", paddingLeft: "1.1rem" }}>
                {product.testingOutcomes.results.map((r) => (
                  <li key={r} style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 300, lineHeight: 1.75, color: INK }}>{r}</li>
                ))}
              </ul>
            </div>
            {product.testingOutcomes.engineeringConclusion && (
              <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontStyle: "italic", fontWeight: 300, lineHeight: 1.62, marginTop: "1rem", marginBottom: 0 }}>
                A final engineering report concluded:<br />{product.testingOutcomes.engineeringConclusion}
              </p>
            )}
          </div>
          {/* Right: space for an image or incident report excerpt */}
          <div style={{ padding: "1.25rem 1.5rem" }}>
            {product.incidentReports?.[0] && (
              <>
                <SectionLabel>{product.incidentReports[0].id}</SectionLabel>
                {product.incidentReports[0].date && (
                  <p style={{ fontFamily: SANS, fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.06em", marginBottom: "0.6rem" }}>
                    On {product.incidentReports[0].date},
                  </p>
                )}
                {product.incidentReports[0].paragraphs.map((p, i) => (
                  <p key={i} style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 300, lineHeight: 1.65, margin: "0 0 0.5rem" }}>{p}</p>
                ))}
                {product.incidentReports[0].subject && (
                  <div style={{ marginTop: "0.75rem", borderTop: RULE_SOFT, paddingTop: "0.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    {product.incidentReports[0].subject.image && (
                      <div style={{ width: "48px", height: "48px", background: "#CEC9C0", flexShrink: 0, position: "relative" }}>
                        <Image src={product.incidentReports[0].subject.image} alt={product.incidentReports[0].subject.name} fill style={{ objectFit: "cover" }} />
                      </div>
                    )}
                    <div>
                      <div style={{ fontFamily: SANS, fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                        {product.incidentReports[0].subject.name}
                      </div>
                      <div style={{ fontFamily: SANS, fontSize: "0.58rem", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "#555" }}>
                        {product.incidentReports[0].subject.role}
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* ── ARCHIVAL NOTES ────────────────────────────────── */}
      {product.archivalNotes && (
        <div className="vp-archival-2col" style={{ borderBottom: RULE }}>
          <div style={{ borderRight: RULE, padding: "1.25rem 1.5rem" }}>
            <SectionLabel>Archival Notes</SectionLabel>
            {product.archivalNotes.subject && (
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                {product.archivalNotes.subject.image && (
                  <div style={{ width: "64px", height: "80px", background: "#CEC9C0", flexShrink: 0, position: "relative" }}>
                    <Image src={product.archivalNotes.subject.image} alt={product.archivalNotes.subject.name} fill style={{ objectFit: "cover" }} />
                  </div>
                )}
                <div>
                  {product.archivalNotes.paragraphs.map((p, i) => (
                    <p key={i} style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 300, lineHeight: 1.65, margin: "0 0 0.5rem" }}>{p}</p>
                  ))}
                </div>
              </div>
            )}
            {!product.archivalNotes.subject && product.archivalNotes.paragraphs.map((p, i) => (
              <p key={i} style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 300, lineHeight: 1.65, margin: "0 0 0.5rem" }}>{p}</p>
            ))}
          </div>
          {product.archivalNotes.pullQuote && (
            <div style={{ padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <blockquote style={{ margin: 0 }}>
                <p style={{
                  fontFamily: CONDENSED,
                  fontWeight: 900,
                  fontSize: "clamp(1.1rem, 2.2vw, 1.6rem)",
                  lineHeight: 1.15,
                  textTransform: "uppercase",
                  letterSpacing: "0.01em",
                  color: INK,
                  margin: "0 0 0.75rem",
                }}>
                  {product.archivalNotes.pullQuote.text}
                </p>
                <footer style={{ fontFamily: SANS, fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.16em", color: "#444" }}>
                  {product.archivalNotes.pullQuote.attribution}
                </footer>
              </blockquote>
            </div>
          )}
        </div>
      )}

      {/* ── SPECIAL ACCESSORY (horseback adapter etc.) ─────── */}
      {product.specialAccessory && (
        <div style={{ borderBottom: RULE }}>
          <div className="vp-accessory-grid" style={{ padding: "1.25rem 1.5rem" }}>
            <div>
              <SectionLabel>{product.specialAccessory.name}</SectionLabel>
              {product.specialAccessory.description.map((p, i) => (
                <p key={i} style={{ fontFamily: SANS, fontSize: "0.78rem", fontWeight: 300, lineHeight: 1.65, margin: "0 0 0.5rem" }}>{p}</p>
              ))}
              {product.specialAccessory.components && (
                <ul style={{ margin: "0.5rem 0 0", padding: 0, listStyle: "disc", paddingLeft: "1.1rem" }}>
                  {product.specialAccessory.components.map((c) => (
                    <li key={c} style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 300, lineHeight: 1.75, color: INK }}>{c}</li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              {product.specialAccessory.fieldReport && (
                <p style={{ fontFamily: SANS, fontSize: "0.78rem", fontWeight: 300, lineHeight: 1.65, marginTop: 0, marginBottom: "0.75rem" }}>
                  {product.specialAccessory.fieldReport}
                </p>
              )}
              {product.specialAccessory.bulletin && (
                <>
                  <p style={{ fontFamily: SANS, fontSize: "0.78rem", fontWeight: 300, lineHeight: 1.65, fontStyle: "italic", marginBottom: "0.25rem" }}>
                    A company bulletin notes:
                  </p>
                  <p style={{ fontFamily: SANS, fontSize: "0.78rem", fontWeight: 300, lineHeight: 1.65, fontStyle: "italic", margin: "0 0 0.5rem", paddingLeft: "0.75rem", borderLeft: `2px solid ${INK}` }}>
                    {product.specialAccessory.bulletin.text}
                  </p>
                  <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 300, lineHeight: 1.62, margin: 0 }}>
                    {product.specialAccessory.bulletin.note}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── BOTTOM 3-COLUMN (mounts / documentation / consumables) ─ */}
      {(product.approvedMounts || product.documentation || product.consumables) && (
        <div style={{ borderBottom: RULE }}>
          <div className="vp-bottom-3col">
            {product.approvedMounts && (
              <div style={{ borderRight: RULE, padding: "1.25rem 1.5rem" }}>
                <SectionLabel>Approved Mounts</SectionLabel>
                <ul style={{ margin: 0, padding: 0, listStyle: "disc", paddingLeft: "1.1rem" }}>
                  {product.approvedMounts.approved.map((m) => (
                    <li key={m} style={{ fontFamily: SANS, fontSize: "0.75rem", fontWeight: 300, lineHeight: 1.8 }}>{m}</li>
                  ))}
                </ul>
                {product.approvedMounts.notApproved && (
                  <>
                    <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 400, marginTop: "0.75rem", marginBottom: "0.25rem" }}>
                      {product.approvedMounts.notApprovedLabel ?? "Not approved for:"}
                    </p>
                    <ul style={{ margin: 0, padding: 0, listStyle: "disc", paddingLeft: "1.1rem" }}>
                      {product.approvedMounts.notApproved.map((m) => (
                        <li key={m} style={{ fontFamily: SANS, fontSize: "0.75rem", fontWeight: 300, lineHeight: 1.8 }}>{m}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )}
            {product.documentation && (
              <div style={{ borderRight: product.consumables ? RULE : "none", padding: "1.25rem 1.5rem" }}>
                <SectionLabel>Included Documentation</SectionLabel>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {product.documentation.map((d) => (
                    <li key={d} style={{ fontFamily: SANS, fontSize: "0.75rem", fontWeight: 300, lineHeight: 1.8 }}>{d}</li>
                  ))}
                </ul>
              </div>
            )}
            {product.consumables && (
              <div style={{ padding: "1.25rem 1.5rem" }}>
                <SectionLabel>Consumables</SectionLabel>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {product.consumables.map((c) => (
                    <li key={c} style={{ fontFamily: SANS, fontSize: "0.75rem", fontWeight: 300, lineHeight: 1.8 }}>{c}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── HISTORY ───────────────────────────────────────── */}
      {(product.historyLeft || product.historyRight) && (
        <div style={{ borderBottom: RULE }}>
          <div style={{ padding: "0.6rem 1.5rem", borderBottom: RULE_SOFT }}>
            <SectionLabel>History</SectionLabel>
          </div>
          <div className="vp-history-grid">
            {product.historyLeft && (
              <div style={{ borderRight: RULE, padding: "1.25rem 1.5rem" }}>
                {product.historyLeft.map((p, i) => (
                  <p key={i} style={{ fontFamily: SANS, fontSize: "0.78rem", fontWeight: 300, lineHeight: 1.72, margin: "0 0 0.85rem" }}>{p}</p>
                ))}
              </div>
            )}
            {product.historyRight && (
              <div style={{ borderRight: product.warranty ? RULE : "none", padding: "1.25rem 1.5rem" }}>
                {product.historyRight.map((p, i) => (
                  <p key={i} style={{ fontFamily: SANS, fontSize: "0.78rem", fontWeight: product.historyLeft ? 300 : 400, lineHeight: 1.72, margin: "0 0 0.85rem", whiteSpace: "pre-line" }}>{p}</p>
                ))}
              </div>
            )}
            {product.warranty && (
              <div style={{ padding: "1.25rem 1.5rem" }}>
                {product.warranty.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.6rem" }}>
                    <WarrantyIcon type={item} />
                    <span style={{ fontFamily: SANS, fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", lineHeight: 1.4, paddingTop: "1px" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── WARNINGS ──────────────────────────────────────── */}
      {product.warnings && product.warnings.length > 0 && (
        <div style={{ borderBottom: RULE }}>
          {product.warnings.map((w, i) => (
            <div key={i} style={{ padding: "0.85rem 1.5rem", borderBottom: i < product.warnings!.length - 1 ? RULE_SOFT : "none", display: "flex", gap: "1rem", alignItems: "baseline" }}>
              <span style={{
                fontFamily: SANS,
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: w.level === "WARNING" ? ACCENT : INK,
                flexShrink: 0,
              }}>
                ⚠ {w.level}:
              </span>
              <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 300, lineHeight: 1.62, margin: 0 }}>
                {w.text}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* ── PAGE FOOTER ───────────────────────────────────── */}
      <div className="vp-footer">
        {/* Serial */}
        <div style={{ fontFamily: SANS, fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.12em", color: INK }}>
          {product.serialCode}
        </div>

        {/* Operational warning / motto */}
        <div style={{ fontFamily: CONDENSED, fontWeight: 900, fontSize: "clamp(0.85rem, 1.8vw, 1.1rem)", letterSpacing: "0.12em", textTransform: "uppercase", textAlign: "center" }}>
          {product.footerWarning ?? ""}
          {product.notForSale && (
            <div style={{
              display: "inline-block",
              border: `2px solid ${ACCENT}`,
              color: ACCENT,
              fontFamily: CONDENSED,
              fontWeight: 900,
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              padding: "0.3rem 0.75rem",
              textTransform: "uppercase",
              lineHeight: 1.3,
              marginLeft: "1.5rem",
              verticalAlign: "middle",
            }}>
              NOT FOR SALE<br />
              <span style={{ fontWeight: 400, fontSize: "0.58rem" }}>NO UNITS WERE EVER PRODUCED</span>
            </div>
          )}
        </div>

        {/* Brand */}
        <div style={{ textAlign: "right" }}>
          <div style={{ fontFamily: CONDENSED, fontWeight: 900, fontSize: "0.95rem", letterSpacing: "0.06em" }}>
            SYMPATHETIC<sup style={{ fontSize: "0.45em", verticalAlign: "super", letterSpacing: 0 }}>®</sup>
          </div>
          <div style={{ fontFamily: SANS, fontSize: "0.5rem", fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", marginTop: "1px" }}>
            {product.divisions[0]}
          </div>
          {isArchival && (
            <div style={{ fontFamily: SANS, fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: ACCENT, marginTop: "2px" }}>
              ARCHIVAL RECORD
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
