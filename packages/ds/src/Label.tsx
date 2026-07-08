import React from "react";
import { SANS, INK } from "./tokens";

/**
 * Plain style object for the uppercase, tracked-out eyebrow/label text
 * (e.g. "ARCHIVE STATUS", "VIBES"). Exported for callers that spread it
 * into an inline style object, matching this codebase's existing
 * convention (e.g. the former per-page `META_LABEL` consts).
 */
export const labelStyle: React.CSSProperties = {
  fontFamily: SANS,
  fontWeight: 600,
  fontSize: "11px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: INK,
};

export interface LabelProps {
  children: React.ReactNode;
  as?: "span" | "div" | "p";
  className?: string;
  /** Merged on top of the canonical labelStyle. */
  style?: React.CSSProperties;
}

/** Eyebrow / label text primitive. */
export function Label({ children, as: As = "span", className, style }: LabelProps) {
  return (
    <As className={className} style={{ ...labelStyle, ...style }}>
      {children}
    </As>
  );
}
