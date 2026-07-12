import React from "react";
import { RULE, SANS, INK } from "./tokens";

export const DEFAULT_NAV_ITEMS = [
  "SYSTEMS",
  "FIELD NOTES",
  "WORK",
  "MERIDIAN",
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

/** Site navigation bar, in its two shipped variants. */
export function Nav({
  variant = "site",
  items = DEFAULT_NAV_ITEMS,
  activeItem,
  logoHref,
  hrefFor = defaultHrefFor,
}: NavProps) {
  if (variant === "verbatim") {
    return (
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
      </nav>
    );
  }

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.125rem 1.5rem",
        borderBottom: RULE,
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
      <span className="nav-mobile-icon" style={{ ...indicatorStyle, display: "none" }}>
        ◉
      </span>
    </nav>
  );
}
