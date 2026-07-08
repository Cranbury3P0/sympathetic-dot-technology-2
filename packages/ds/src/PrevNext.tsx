import React from "react";
import { SANS, INK } from "./tokens";
import { articleLabelStyle } from "./Breadcrumb";

export interface AdjacentObservation {
  title: string;
  href: string;
}

export interface PrevNextProps {
  previous?: AdjacentObservation;
  next?: AdjacentObservation;
  allHref?: string;
  allLabel?: string;
}

/** Field-notes article prev/next nav, with a center "all articles" link. */
export function PrevNext({
  previous,
  next,
  allHref = "/field-notes",
  allLabel = "ALL FIELD NOTES",
}: PrevNextProps) {
  return (
    <nav className="fn-article-prevnext">
      <div>
        {previous && (
          <a href={previous.href} style={{ textDecoration: "none", color: INK }}>
            <div style={{ ...articleLabelStyle, marginBottom: "0.4rem", opacity: 0.5 }}>← PREVIOUS</div>
            <div style={{ fontFamily: SANS, fontWeight: 400, fontSize: "14px", lineHeight: 1.3 }}>
              {previous.title}
            </div>
          </a>
        )}
      </div>
      <div style={{ textAlign: "center" }}>
        <a href={allHref} style={{ ...articleLabelStyle, fontSize: "11px", textDecoration: "none", color: INK, opacity: 0.5 }}>
          {allLabel}
        </a>
      </div>
      <div style={{ textAlign: "right" }}>
        {next && (
          <a href={next.href} style={{ textDecoration: "none", color: INK }}>
            <div style={{ ...articleLabelStyle, marginBottom: "0.4rem", opacity: 0.5 }}>NEXT →</div>
            <div style={{ fontFamily: SANS, fontWeight: 400, fontSize: "14px", lineHeight: 1.3 }}>
              {next.title}
            </div>
          </a>
        )}
      </div>
    </nav>
  );
}
