import React from "react";
import { SANS } from "./tokens";

const legalTextStyle: React.CSSProperties = {
  fontFamily: SANS,
  fontWeight: 300,
  fontSize: "0.5625rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
};

const legalLinkStyle: React.CSSProperties = {
  fontFamily: SANS,
  fontWeight: 500,
  fontSize: "0.5625rem",
  letterSpacing: "0.08em",
  lineHeight: 1,
  textTransform: "uppercase",
  textDecoration: "none",
  color: "#0A0A0A",
  whiteSpace: "nowrap",
};

export interface LegalBarLink {
  label: string;
  href: string;
}

export interface LegalBarProps {
  copyrightText?: string;
  links?: LegalBarLink[];
  siteByText?: string;
}

const DEFAULT_LINKS: LegalBarLink[] = [
  { label: "PRIVACY", href: "#" },
  { label: "TERMS", href: "#" },
  { label: "ACCESSIBILITY", href: "#" },
];

/** Bottom legal strip: copyright / privacy-terms-accessibility / "site by" credit. */
export function LegalBar({
  copyrightText = "© SYMPATHETIC TECHNOLOGY INC.",
  links = DEFAULT_LINKS,
  siteByText = "SITE BY SYMPATHETIC",
}: LegalBarProps) {
  return (
    <div className="legal-bar">
      <span style={legalTextStyle}>{copyrightText}</span>
      <div className="legal-links">
        {links.map((link) => (
          <a key={link.label} href={link.href} style={legalLinkStyle}>
            {link.label}
          </a>
        ))}
      </div>
      <span style={legalTextStyle}>{siteByText}</span>
    </div>
  );
}
