// cspell:disable
// BookSpread — reusable open-book spread component
// Background photograph is a visual layer only; all text is live HTML.
// Spelling, punctuation, and line breaks in leftContent / rightContent
// are the responsibility of the caller. This component does not correct
// or normalise any text it receives.
//
// Purely presentational (no hooks/state) on its own — the package as a
// whole ships "use client" via tsup.config.ts's banner (see that file for
// why: per-module directives don't survive this single-file bundle).

import React from "react";

/* ── Typography tokens ─────────────────────────────────── */
// Default typeface is plain "EB Garamond" — loaded via ./fonts.css
// (a remote @import). Host apps that use next/font/google should pass
// an explicit `fontFamily` prop with their own self-hosted instance
// instead of relying on this default (see app/verbatim/amanuensis).

const GARAMOND = `"EB Garamond", "Hoefler Text", "Iowan Old Style", "Palatino Linotype", Palatino, "Book Antiqua", Georgia, serif`;

/* ── Paper palette ─────────────────────────────────────── */

const PAPER     = "#f2ecdc";   // base page cream
const INK       = "#2b261c";   // body text
const INK_SOFT  = "#3a3327";   // folios, footers

/* ── Grain SVG — tiled paper texture as data URI ───────── */
// feTurbulence at 0.65 / 4-octave fractal noise, desaturated
// Rendered as a 400×400 tile, opacity 0.04 over the page.
const GRAIN_URI = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.68' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23g)' opacity='0.042'/%3E%3C/svg%3E")`;

/* ── Component props ───────────────────────────────────── */

export interface BookSpreadProps {
  /** Folio numeral printed at the outer top corner of the left page. */
  leftPageNumber?: React.ReactNode;
  /** Folio numeral printed at the outer top corner of the right page. */
  rightPageNumber?: React.ReactNode;
  /** Main body content for the left page. */
  leftContent: React.ReactNode;
  /** Main body content for the right page. */
  rightContent: React.ReactNode;
  /** Running footer placed at the bottom-left of the left page. Optional. */
  leftFooter?: React.ReactNode;
  /** Running footer placed at the bottom-right of the right page. Optional. */
  rightFooter?: React.ReactNode;
  /**
   * Path to a photographed blank open-book spread image (e.g. "/spreads/blank-book.jpg").
   * When provided, the image is composited at low opacity via multiply blend mode,
   * contributing paper texture and photographic depth without obscuring live text.
   * Omit for a pure-CSS paper rendering.
   */
  backgroundImage?: string;
  /** Additional class name applied to the outermost wrapper. */
  className?: string;
  /**
   * Optional typography override. Defaults to EB Garamond.
   * Pass a CSS font-family string to substitute a different typeface.
   */
  fontFamily?: string;
}

/* ── BookSpread component ──────────────────────────────── */

export function BookSpread({
  leftPageNumber,
  rightPageNumber,
  leftContent,
  rightContent,
  leftFooter,
  rightFooter,
  backgroundImage,
  className = "",
  fontFamily,
}: BookSpreadProps) {

  const FONT = fontFamily ?? GARAMOND;

  /* Outer wrapper: book block with outer edge shadows */
  const outerStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    background: PAPER,
    // Left and right book-edge shadows — simulate the thickness of the paper block
    boxShadow: [
      "-6px 0 18px rgba(30,20,10,0.13)",   // left outer edge
      " 6px 0 18px rgba(30,20,10,0.13)",   // right outer edge
      " 0  8px 32px rgba(30,20,10,0.18)",  // bottom drop shadow
      " 0 -2px  8px rgba(30,20,10,0.06)",  // top edge lift
    ].join(", "),
    overflow: "hidden",
  };

  /* Shared page section styles */
  const pageStyle: React.CSSProperties = {
    position: "relative",
    padding: "72px 64px 96px 68px",
    minHeight: "840px",
    fontFamily: FONT,
    color: INK,
    // Subtle left-page inner edge shadow (curvature lift toward gutter)
    background: PAPER,
    zIndex: 1,
  };

  /* Folio (page number) */
  const folioStyle: React.CSSProperties = {
    position: "absolute",
    top: "30px",
    fontFamily: FONT,
    fontSize: "15px",
    lineHeight: 1,
    color: INK_SOFT,
    letterSpacing: "0.02em",
    userSelect: "none",
  };

  /* Footer strip */
  const footerStyle: React.CSSProperties = {
    position: "absolute",
    bottom: "36px",
    fontFamily: FONT,
    fontSize: "11.5px",
    letterSpacing: "0.24em",
    color: INK_SOFT,
    textTransform: "uppercase",
  };

  return (
    <div
      className={`book-spread-outer ${className}`}
      style={outerStyle}
      spellCheck={false}
    >

      {/* ── Photographed background layer ──────────────────
          The image is multiply-blended at reduced opacity.
          Paper colour shows through; text remains fully legible.
          If no backgroundImage is supplied this layer is omitted
          and the CSS-rendered paper stands alone.
      ─────────────────────────────────────────────────────── */}
      {backgroundImage && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            opacity: 0.48,
            mixBlendMode: "multiply",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      )}

      {/* ── Paper grain texture ─────────────────────────────
          Tiled SVG fractal-noise at 4% opacity.
          Sits above the photo but below all type.
      ─────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: GRAIN_URI,
          backgroundRepeat: "repeat",
          backgroundSize: "400px 400px",
          opacity: 1,
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* ── Outer vignette — corners and edges darkened ─────
          Simulates the natural shadow of a photographed book
          whose outer edges and corners fall away from the light.
      ─────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 90% 85% at 50% 50%, transparent 55%, rgba(28,18,8,0.09) 100%)",
          pointerEvents: "none",
          zIndex: 3,
        }}
      />

      {/* ── Top page-edge curvature shadow ────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "28px",
          background: "linear-gradient(to bottom, rgba(28,18,8,0.07), transparent)",
          pointerEvents: "none",
          zIndex: 3,
        }}
      />

      {/* ── Bottom page-edge curvature shadow ─────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          height: "28px",
          background: "linear-gradient(to top, rgba(28,18,8,0.07), transparent)",
          pointerEvents: "none",
          zIndex: 3,
        }}
      />

      {/* ── Gutter shadow ───────────────────────────────────
          Centred on the spine. Width is deliberately generous
          so the darkest point reads as depth at the binding,
          not as a hard rule.
      ─────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0, bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "88px",
          background: [
            "linear-gradient(to right,",
            "  rgba(28,18,8,0.00)  0%,",
            "  rgba(28,18,8,0.08) 30%,",
            "  rgba(28,18,8,0.17) 50%,",
            "  rgba(28,18,8,0.08) 70%,",
            "  rgba(28,18,8,0.00) 100%",
            ")",
          ].join(" "),
          pointerEvents: "none",
          zIndex: 5,
        }}
      />

      {/* ── Left inner-edge shadow (page lifts toward gutter) */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0, bottom: 0, left: 0,
          width: "40px",
          background: "linear-gradient(to right, rgba(28,18,8,0.06), transparent)",
          pointerEvents: "none",
          zIndex: 3,
        }}
      />

      {/* ── Right inner-edge shadow ────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0, bottom: 0, right: 0,
          width: "40px",
          background: "linear-gradient(to left, rgba(28,18,8,0.06), transparent)",
          pointerEvents: "none",
          zIndex: 3,
        }}
      />

      {/* ── Spread content grid ─────────────────────────────
          Two equal columns, left and right page.
          zIndex: 4 puts live text above all decorative layers
          but below the gutter shadow (zIndex: 5) so the shadow
          reads in front of the text near the binding.
      ─────────────────────────────────────────────────────── */}
      <div
        className="book-spread-pages"
        style={{
          position: "relative",
          zIndex: 4,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >

        {/* ── LEFT PAGE ──────────────────────────────────── */}
        <section
          className="book-spread-left"
          aria-label={leftPageNumber ? `Page ${leftPageNumber}` : "Left page"}
          style={{
            ...pageStyle,
            padding: "72px 60px 96px 68px",
            // Right-side curvature — pages curl slightly away from the gutter
            backgroundImage: "linear-gradient(to right, transparent 92%, rgba(28,18,8,0.025) 100%)",
          }}
        >
          {/* Folio */}
          {leftPageNumber !== undefined && (
            <div style={{ ...folioStyle, left: "68px" }}>
              {leftPageNumber}
            </div>
          )}

          {/* Body */}
          <div className="book-spread-body">
            {leftContent}
          </div>

          {/* Footer */}
          {leftFooter && (
            <footer style={{ ...footerStyle, left: "68px", right: "60px" }}>
              {leftFooter}
            </footer>
          )}
        </section>

        {/* ── RIGHT PAGE ─────────────────────────────────── */}
        <section
          className="book-spread-right"
          aria-label={rightPageNumber ? `Page ${rightPageNumber}` : "Right page"}
          style={{
            ...pageStyle,
            padding: "72px 68px 96px 60px",
            // Left-side curvature — mirror of the left page
            backgroundImage: "linear-gradient(to left, transparent 92%, rgba(28,18,8,0.025) 100%)",
          }}
        >
          {/* Folio */}
          {rightPageNumber !== undefined && (
            <div style={{ ...folioStyle, right: "68px" }}>
              {rightPageNumber}
            </div>
          )}

          {/* Body */}
          <div className="book-spread-body">
            {rightContent}
          </div>

          {/* Footer */}
          {rightFooter && (
            <footer
              style={{
                ...footerStyle,
                left: "60px",
                right: "68px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              {rightFooter}
            </footer>
          )}
        </section>

      </div>
    </div>
  );
}

/* ── Companion text-style helpers ──────────────────────────
   These are plain objects the caller can spread into inline
   style props. They match the Amanuensis aesthetic and spare
   the caller from re-specifying the same values each time.
   Nothing forces their use — they are opt-in conveniences.
─────────────────────────────────────────────────────────── */

/** Standard body paragraph for book prose. */
export function bookBodyStyle(fontFamily?: string): React.CSSProperties {
  return {
    fontFamily: fontFamily ?? GARAMOND,
    fontSize: "17px",
    lineHeight: 1.63,
    margin: "0 0 0.92em 0",
    textAlign: "justify",
    hyphens: "auto",
    WebkitHyphens: "auto",
    color: INK,
  };
}

/** Section heading / chapter title within a page. */
export function bookHeadingStyle(fontFamily?: string): React.CSSProperties {
  return {
    fontFamily: fontFamily ?? GARAMOND,
    fontSize: "19px",
    fontWeight: 400,
    lineHeight: 1.35,
    margin: "0 0 1.2em 0",
    letterSpacing: "0.01em",
    color: INK,
  };
}

/** Indented block extract / quoted verse. */
export function bookExtractStyle(fontFamily?: string): React.CSSProperties {
  return {
    fontFamily: fontFamily ?? GARAMOND,
    fontSize: "17px",
    lineHeight: 1.63,
    fontStyle: "italic",
    paddingLeft: "2em",
    paddingRight: "0.4em",
    textAlign: "left",
    hyphens: "none",
    WebkitHyphens: "none",
    margin: "1.1em 0 1.2em 0",
    color: INK,
  };
}

/** Signature block (author name, title, date, location). */
export function bookSignatureStyle(
  align: "left" | "right" = "left",
  fontFamily?: string,
): React.CSSProperties {
  return {
    marginTop: "2.4em",
    lineHeight: 1.55,
    textAlign: align,
    fontFamily: fontFamily ?? GARAMOND,
    color: INK,
  };
}
