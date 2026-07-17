import React, { useState } from "react";
import { RULE, SANS, INK, PAPER } from "./tokens";

export const DEFAULT_NAV_ITEMS = [
  "SYSTEMS",
  "FIELD NOTES",
  "WORK",
  "MERIDIAN",
  "RESONANCE",
  "VERBATIM",
  "ABOUT",
  "CONTACT",
  "CLIENT LOGIN",
];

/** Canonical route mapping used across the site's nav instances. */
export function defaultHrefFor(item: string): string {
  switch (item) {
    case "SYSTEMS":
      return "/systems";
    case "FIELD NOTES":
      return "/field-notes";
    case "MERIDIAN":
      return "/meridian";
    case "RESONANCE":
      return "/resonance";
    case "VERBATIM":
      return "/verbatim";
    case "CLIENT LOGIN":
      return "/client";
    default:
      return "#";
  }
}

const siteNavStyle: React.CSSProperties = {
  fontFamily: SANS,
  fontWeight: 500,
  fontSize: "14px",
  letterSpacing: "0.08em",
  lineHeight: 1,
  textTransform: "uppercase",
  textDecoration: "none",
  color: INK,
  whiteSpace: "nowrap",
};

const verbatimNavStyle: React.CSSProperties = {
  fontFamily: SANS,
  fontSize: "0.7rem",
  fontWeight: 500,
  letterSpacing: "0.12em",
  color: INK,
  textDecoration: "none",
};

const indicatorStyle: React.CSSProperties = {
  border: RULE,
  width: "1.5rem",
  height: "1.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  fontSize: "0.6rem",
  background: "none",
  cursor: "pointer",
  padding: 0,
};

export interface NavProps {
  /** "site" is the full nav (with the ◉ indicator); "verbatim" is the shorter 44px variant. */
  variant?: "site" | "verbatim";
  items?: string[];
  /** Which item shows the active-state underline. Omit for none (e.g. the homepage). */
  activeItem?: string;
  /**
   * Href for the wordmark. Omit to render it as plain (non-link) text —
   * matches the homepage, which doesn't link its own logo to itself.
   */
  logoHref?: string;
  hrefFor?: (item: string) => string;
}

/** Site navigation bar, in its two shipped variants. Below the 1024px
 *  breakpoint the link row collapses into a toggleable dropdown panel,
 *  opened by the mobile icon (real button, not decorative). */
export function Nav({
  variant = "site",
  items = DEFAULT_NAV_ITEMS,
  activeItem,
  logoHref,
  hrefFor = defaultHrefFor,
}: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  if (variant === "verbatim") {
    return (
      <nav style={{ borderBottom: RULE }}>
        <div
          style={{
            padding: "0 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "44px",
          }}
        >
          <a href={logoHref ?? "/"} style={{ ...verbatimNavStyle, fontWeight: 700, letterSpacing: "0.06em" }}>
            SYMPATHETIC TECHNOLOGY
          </a>
          <div className="nav-links">
            {items.map((item) => (
              <a
                key={item}
                href={hrefFor(item)}
                style={{
                  ...verbatimNavStyle,
                  fontWeight: item === activeItem ? 700 : 500,
                  borderBottom: item === activeItem ? RULE : "none",
                  paddingBottom: item === activeItem ? "2px" : "0",
                }}
              >
                {item}
              </a>
            ))}
          </div>
          <button
            type="button"
            className="nav-mobile-icon"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            style={{ ...indicatorStyle, display: "none" }}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
        {mobileOpen && (
          <div className="nav-mobile-panel" style={{ borderTop: RULE, padding: "1rem 1.5rem", flexDirection: "column", gap: "1rem", background: PAPER }}>
            {items.map((item) => (
              <a
                key={item}
                href={hrefFor(item)}
                onClick={() => setMobileOpen(false)}
                style={{ ...verbatimNavStyle, fontSize: "0.85rem", fontWeight: item === activeItem ? 700 : 500 }}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    );
  }

  return (
    <nav style={{ borderBottom: RULE }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.125rem 1.5rem",
        }}
      >
        {logoHref ? (
          <a href={logoHref} style={{ ...siteNavStyle, textDecoration: "none" }}>
            SYMPATHETIC.TECHNOLOGY
          </a>
        ) : (
          <span style={siteNavStyle}>SYMPATHETIC.TECHNOLOGY</span>
        )}
        <div className="nav-links">
          {items.map((item) => (
            <a
              key={item}
              href={hrefFor(item)}
              style={{
                ...siteNavStyle,
                ...(item === activeItem ? { textDecoration: "underline", textUnderlineOffset: "4px" } : {}),
              }}
            >
              {item}
            </a>
          ))}
          <span style={indicatorStyle}>◉</span>
        </div>
        <button
          type="button"
          className="nav-mobile-icon"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          style={{ ...indicatorStyle, display: "none" }}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>
      {mobileOpen && (
        <div className="nav-mobile-panel" style={{ borderTop: RULE, padding: "1rem 1.5rem", flexDirection: "column", gap: "1rem", background: PAPER }}>
          {items.map((item) => (
            <a
              key={item}
              href={hrefFor(item)}
              onClick={() => setMobileOpen(false)}
              style={{ ...siteNavStyle, ...(item === activeItem ? { textDecoration: "underline", textUnderlineOffset: "4px" } : {}) }}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
