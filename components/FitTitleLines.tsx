"use client";

import { useRef, useEffect } from "react";

type FitTitleLinesProps = {
  lines: string[];
  className?: string;
  style?: React.CSSProperties;
  lineStyle?: React.CSSProperties;
};

function FitLine({
  text,
  style,
}: {
  text: string;
  style?: React.CSSProperties;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const fit = () => {
      const c = containerRef.current;
      const el = textRef.current;
      if (!c || !el) return;
      el.style.fontSize = "100px";
      el.style.position = "absolute";
      el.style.visibility = "hidden";
      const w = el.getBoundingClientRect().width;
      el.style.position = "";
      el.style.visibility = "";
      if (w <= 0) return;
      el.style.fontSize = `${Math.min((c.offsetWidth / w) * 100, 100)}px`;
    };

    document.fonts.ready.then(fit);
    const ro = new ResizeObserver(fit);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [text]);

  return (
    <div ref={containerRef} className="fit-title-line">
      <span ref={textRef} style={{ ...style, whiteSpace: "nowrap", display: "inline-block" }}>
        {text}
      </span>
    </div>
  );
}

export function FitTitleLines({
  lines,
  className,
  style,
  lineStyle,
}: FitTitleLinesProps) {
  const baseLineStyle: React.CSSProperties = {
    fontFamily: "var(--font-barlow-condensed), sans-serif",
    fontWeight: 900,
    letterSpacing: "-0.02em",
    textTransform: "uppercase",
    lineHeight: 0.88,
    ...lineStyle,
  };

  return (
    <div className={className} style={style}>
      {lines.map((line, i) => (
        <FitLine key={i} text={line} style={baseLineStyle} />
      ))}
    </div>
  );
}
