import React from "react";
import { RULE } from "./tokens";

export interface RuleProps {
  /** Direction of the divider. Defaults to a full-width horizontal line. */
  orientation?: "horizontal" | "vertical";
  className?: string;
  style?: React.CSSProperties;
}

/** The hairline `1px solid #0A0A0A` divider used throughout the editorial grid. */
export function Rule({ orientation = "horizontal", className, style }: RuleProps) {
  const base: React.CSSProperties =
    orientation === "horizontal"
      ? { border: "none", borderTop: RULE, width: "100%", margin: 0 }
      : { border: "none", borderLeft: RULE, height: "100%", margin: 0 };

  return <hr className={className} style={{ ...base, ...style }} />;
}
