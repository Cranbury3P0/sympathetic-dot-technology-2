import React from "react";
import { SANS, INK } from "./tokens";

/**
 * Local label style matching the field-notes article template's original
 * `LABEL` const (10px/0.14em) — intentionally distinct from the general
 * `labelStyle` primitive (11px/0.12em), which comes from a different page's
 * eyebrow text. Keeping this local preserves the exact pixels these 7
 * article pages already ship instead of forcing a fake unification.
 */
const articleLabelStyle: React.CSSProperties = {
  fontFamily: SANS,
  fontWeight: 600,
  fontSize: "10px",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: INK,
};

export interface BreadcrumbProps {
  observationNumber: string;
  backHref?: string;
  backLabel?: string;
}

/** Field-notes article breadcrumb: "FIELD NOTES / 041" + a back link. */
export function Breadcrumb({
  observationNumber,
  backHref = "/field-notes",
  backLabel = "← ALL FIELD NOTES",
}: BreadcrumbProps) {
  return (
    <div className="fn-article-breadcrumb">
      <span style={articleLabelStyle}>FIELD NOTES / {observationNumber}</span>
      <a
        href={backHref}
        style={{
          fontFamily: SANS,
          fontWeight: 300,
          fontSize: "11px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          textDecoration: "none",
          color: INK,
          opacity: 0.6,
        }}
      >
        {backLabel}
      </a>
    </div>
  );
}

export { articleLabelStyle };
