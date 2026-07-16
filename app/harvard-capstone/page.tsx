"use client";

import { Nav, LegalBar, FitText } from "sympathetic-ds";

const BARLOW = "var(--font-barlow), sans-serif";
const CONDENSED = "var(--font-barlow-condensed), sans-serif";
const RULE = "1px solid #0A0A0A";
const PAPER = "#F0EDE6";

export default function HarvardCapstonePage() {
  return (
    <div style={{ background: PAPER, minHeight: "100vh", fontFamily: BARLOW }}>
      <Nav variant="verbatim" logoHref="/" />

      <div style={{ borderBottom: RULE, padding: "0.5rem 1.5rem 0.4rem" }}>
        <FitText
          text="HARVARD CAPSTONE"
          style={{
            fontFamily: CONDENSED,
            fontWeight: 900,
            lineHeight: 0.88,
            letterSpacing: "-0.02em",
            color: "#0A0A0A",
            textTransform: "uppercase",
          }}
        />
      </div>

      <section style={{ maxWidth: "760px", margin: "0 auto", padding: "96px 32px" }}>
        <div style={{ fontFamily: BARLOW, fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#7a7772", marginBottom: "20px" }}>
          Coming soon
        </div>
        <p style={{ fontFamily: BARLOW, fontSize: "20px", lineHeight: 1.7, color: "#0A0A0A", margin: 0 }}>
          This page is under construction.
        </p>
      </section>

      <LegalBar siteByText="Harvard Capstone" />
    </div>
  );
}
