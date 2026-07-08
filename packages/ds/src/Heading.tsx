"use client";

import React, { useEffect, useRef } from "react";
import { CONDENSED } from "./tokens";

export const headingStyle: React.CSSProperties = {
  fontFamily: CONDENSED,
  fontWeight: 900,
  letterSpacing: "-0.02em",
  textTransform: "uppercase",
  lineHeight: 0.9,
  margin: 0,
};

export interface HeadingProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
  /** Merged on top of the canonical condensed-display style. */
  style?: React.CSSProperties;
}

/** Condensed display headline (Barlow Condensed, 900 weight, uppercase). */
export function Heading({ children, as: As = "h1", className, style }: HeadingProps) {
  return (
    <As className={className} style={{ ...headingStyle, ...style }}>
      {children}
    </As>
  );
}

export interface FitTextProps {
  text: string;
  style: React.CSSProperties;
}

/**
 * Hero headline that scales its font-size so `text` fills the width of its
 * container exactly (used for the homepage "SYMPATHETIC" wordmark). Requires
 * a browser — measures text width via getBoundingClientRect and a
 * ResizeObserver.
 */
export function FitText({ text, style }: FitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const fit = () => {
      const container = containerRef.current;
      const el = textRef.current;
      if (!container || !el) return;
      // Temporarily go absolute so the element shrinks to intrinsic text width
      el.style.fontSize = "100px";
      el.style.position = "absolute";
      const textWidth = el.getBoundingClientRect().width;
      el.style.position = "";
      const ratio = container.offsetWidth / textWidth;
      el.style.fontSize = `${100 * ratio}px`;
    };
    // Wait for fonts before first measurement
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
