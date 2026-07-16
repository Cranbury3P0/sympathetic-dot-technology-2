import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import Image from "next/image";
import { Nav } from "sympathetic-ds";

/**
 * Resonance is a page within the Sympathetic Technology site, so it uses
 * the shared site Nav — not a bespoke one. Below the nav, it keeps its own
 * architectural/institutional palette and type system per the Resonance
 * doctrine, since the content itself (not the chrome) is what carries that
 * distinct identity.
 *
 * Canela (the doctrine's specified display face) is a commercial typeface
 * with no available Google Fonts / licensed file here. Fraunces is
 * substituted as the closest available match for its warm, architectural,
 * never-bold display character.
 */
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], weight: "400", style: "normal" });
const inter = Inter({ variable: "--font-inter-r", subsets: ["latin"], weight: ["400", "500", "600"] });
const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono-r", subsets: ["latin"], weight: ["400", "500"] });

const DISPLAY = "var(--font-fraunces), Georgia, serif";
const SANS = "var(--font-inter-r), sans-serif";
const MONO = "var(--font-plex-mono-r), monospace";

/* Palette — warm neutrals only, per the Resonance color doctrine. Kept
   local to this page rather than the shared PAPER/INK tokens, since the
   doctrine specifies a distinct, desaturated architectural palette. */
const WARM_WHITE = "#F5F2EC";
const CHARCOAL = "#2A2823";
const LIMESTONE = "#726C5F";
const CONCRETE = "#D9D2C3";
const BRONZE = "#96754A";

const title = "Resonance: Process Architecture for Creative Work";
const description =
  "Resonance is the adaptable process architecture upon which applications such as Perkins are built. It preserves continuity across the entire lifecycle of creative work.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description: "Continuity is the condition of excellence.",
    type: "website",
    images: [{ url: "/RESONANCE_QUARTZ_LENS.jpg", width: 1024, height: 1024, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: "Continuity is the condition of excellence.",
    images: ["/RESONANCE_QUARTZ_LENS.jpg"],
  },
};

/* ── DATA ── */

const PRINCIPLES = [
  { n: "01", statement: "Continuity, not automation.", gloss: "The work carries forward. Nothing about it runs itself." },
  { n: "02", statement: "Clarity, not creativity.", gloss: "It gives people a clearer view of their own work over time." },
  { n: "03", statement: "Architecture, not application.", gloss: "Perkins is one implementation. The pattern beneath it is what Resonance names." },
  { n: "04", statement: "Presence, not productivity.", gloss: "Continuity exists so creative work keeps its shape between the moments people are actually in the room." },
];

const METADATA_TERMS = ["CONTINUITY", "MEMORY", "WORKFLOW", "REVISION HISTORY"];

const PROCESS_STAGES = [
  { n: "01", name: "Observe", description: "Capture what is actually present." },
  { n: "02", name: "Clarify", description: "Turn observations into shared understanding." },
  { n: "03", name: "Refine", description: "Apply judgment through deliberate revision." },
  { n: "04", name: "Preserve", description: "Retain the reasoning, conversations, and editorial memory." },
  { n: "05", name: "Continue", description: "Re-enter the work later without reconstructing context." },
];

/* ── COMPONENT ── */

export default function ResonancePage() {
  return (
    <main
      className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}
      style={{ backgroundColor: WARM_WHITE, color: CHARCOAL, margin: 0 }}
    >
      <Nav activeItem="RESONANCE" logoHref="/" />
      {/* ── HERO ── */}
      <div className="resonance-hero">
        <div className="resonance-hero-text">
          <span style={{ fontFamily: MONO, fontWeight: 500, fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: BRONZE }}>
            Process Architecture for Creative Work
          </span>
          <h1
            style={{
              fontFamily: DISPLAY,
              fontWeight: 400,
              fontSize: "clamp(56px, 7vw, 96px)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              margin: "1.25rem 0 1.5rem",
            }}
          >
            Resonance
          </h1>
          <div aria-hidden style={{ width: "48px", height: "1px", background: BRONZE, marginBottom: "1.75rem" }} />
          <p style={{ fontFamily: SANS, fontWeight: 400, fontSize: "clamp(19px, 2vw, 24px)", lineHeight: 1.4, color: CHARCOAL, margin: "0 0 2.5rem", maxWidth: "32rem" }}>
            Resonance preserves continuity across the entire lifecycle of creative work. It aligns people,
            conversations, revisions, and memory into a persistent process that continues between interactions.
          </p>
          <a
            href="#architecture"
            className="resonance-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              border: `1px solid ${BRONZE}`,
              color: CHARCOAL,
              fontFamily: SANS,
              fontSize: "15px",
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "1rem 1.75rem",
            }}
          >
            Explore the Architecture <span aria-hidden>→</span>
          </a>
        </div>

        <div className="resonance-hero-image">
          <Image
            src="/RESONANCE_QUARTZ_LENS.jpg"
            alt="A monumental slab of flawless optical quartz standing on a stone plinth in an alpine valley. The quartz introduces no distortion, so the landscape behind it is visible exactly as it is."
            width={1024}
            height={1024}
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
      </div>

      {/* ── CENTRAL PHILOSOPHY — the statement the page revolves around, paired with the process it describes ── */}
      <section style={{ borderTop: `1px solid ${CONCRETE}`, borderBottom: `1px solid ${CONCRETE}` }}>
        <div className="resonance-philosophy">
          <p
            style={{
              fontFamily: DISPLAY,
              fontWeight: 400,
              fontSize: "clamp(28px, 3.2vw, 44px)",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
              margin: 0,
              maxWidth: "22ch",
            }}
          >
            Creative work
            <br />
            does not happen
            <br />
            in meetings.
            <br />
            It happens
            <br />
            between them.
            <br />
            Resonance preserves
            <br />
            continuity across
            <br />
            that distance.
          </p>

          <div className="resonance-process-diagram">
            <div className="resonance-process-panels" aria-hidden="true">
              {PROCESS_STAGES.map((stage, i) => (
                <div key={stage.n} className="resonance-process-panel" style={{ top: `${i * 62}px`, left: `${i * 24}px`, zIndex: i }} />
              ))}
            </div>
            <div className="resonance-process-labels">
              {PROCESS_STAGES.map((stage) => (
                <div key={stage.n} className="resonance-process-row">
                  <span aria-hidden style={{ display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", background: BRONZE, flexShrink: 0 }} />
                  <div className="resonance-process-line" aria-hidden />
                  <div>
                    <span style={{ fontFamily: MONO, fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", color: BRONZE, marginRight: "0.6rem" }}>
                      {stage.n}
                    </span>
                    <span style={{ fontFamily: SANS, fontWeight: 600, fontSize: "15px", letterSpacing: "0.02em", textTransform: "uppercase", color: CHARCOAL }}>
                      {stage.name}
                    </span>
                    <p style={{ fontFamily: SANS, fontSize: "14px", lineHeight: 1.5, color: LIMESTONE, margin: "0.3rem 0 0", maxWidth: "20rem" }}>
                      {stage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ARCHITECTURE — what Resonance is ── */}
      <section id="architecture" style={{ borderBottom: `1px solid ${CONCRETE}` }}>
        <div className="resonance-section">
          <div>
            <h2
              style={{
                fontFamily: DISPLAY,
                fontWeight: 400,
                fontSize: "clamp(32px, 3.6vw, 56px)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                margin: 0,
                maxWidth: "14ch",
              }}
            >
              Resonance is not an application.
            </h2>
          </div>
          <div>
            <p style={{ fontFamily: SANS, fontSize: "clamp(17px, 1.4vw, 22px)", lineHeight: 1.6, color: CHARCOAL, margin: "0 0 1.5rem", maxWidth: "38rem" }}>
              Resonance is the adaptable process architecture upon which applications such as Perkins are built.
              Perkins is the first implementation of Resonance.
            </p>
            <p style={{ fontFamily: SANS, fontSize: "clamp(17px, 1.4vw, 22px)", lineHeight: 1.6, color: LIMESTONE, margin: "0 0 1.5rem", maxWidth: "38rem" }}>
              It doesn&apos;t replace writers, editors, or the tools already in use.
            </p>
            <p style={{ fontFamily: SANS, fontSize: "clamp(17px, 1.4vw, 22px)", lineHeight: 1.6, color: CHARCOAL, margin: "0 0 1.5rem", maxWidth: "38rem" }}>
              It preserves continuity throughout the lifecycle of creative work, so the work keeps progressing
              even when people leave the room.
            </p>
            <p style={{ fontFamily: SANS, fontSize: "clamp(17px, 1.4vw, 22px)", lineHeight: 1.6, color: LIMESTONE, margin: "0 0 1.5rem", maxWidth: "38rem" }}>
              Resonance holds any relationship that depends on continuity: work where understanding accumulates
              over months, where the gap between sessions is where the real thinking happens, and where losing
              that thread means starting over every time.
            </p>
            <p style={{ fontFamily: SANS, fontSize: "clamp(17px, 1.4vw, 22px)", lineHeight: 1.6, color: CHARCOAL, margin: "0 0 2.5rem", maxWidth: "38rem" }}>
              Perkins is the first thing built on it. Other applications will be built the same way, on the
              same architecture, for people who need a different relationship than the one Perkins holds with
              a novelist and their manuscript.
            </p>
            <div className="resonance-terms" aria-hidden="true">
              {METADATA_TERMS.map((term) => (
                <span key={term} style={{ fontFamily: MONO, fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: LIMESTONE }}>
                  {term}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS — Perkins as first implementation ── */}
      <section id="applications" style={{ borderBottom: `1px solid ${CONCRETE}` }}>
        <div className="resonance-section">
          <div>
            <span style={{ fontFamily: MONO, fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: BRONZE, display: "block", marginBottom: "1.25rem" }}>
              Application 01
            </span>
            <h2
              style={{
                fontFamily: DISPLAY,
                fontWeight: 400,
                fontSize: "clamp(28px, 3vw, 40px)",
                lineHeight: 1.15,
                margin: 0,
                maxWidth: "16ch",
              }}
            >
              Perkins Craft Analysis
            </h2>
          </div>
          <div>
            <p style={{ fontFamily: SANS, fontSize: "clamp(17px, 1.4vw, 22px)", lineHeight: 1.6, color: CHARCOAL, margin: "0 0 1.5rem", maxWidth: "38rem" }}>
              Perkins is an ongoing editorial relationship between a novelist and an editor, built on the
              Resonance pattern.
            </p>
            <p style={{ fontFamily: SANS, fontSize: "clamp(17px, 1.4vw, 22px)", lineHeight: 1.6, color: LIMESTONE, margin: "0 0 1.5rem", maxWidth: "38rem" }}>
              A writer submits a manuscript and chooses what to focus on. Perkins reads what&apos;s actually on
              the page, not the writer&apos;s intentions, and returns an editorial letter: a diagnosis in the
              writer&apos;s own terms. The writer takes that back to the draft and writes the next scene
              themselves.
            </p>
            <p style={{ fontFamily: SANS, fontSize: "clamp(17px, 1.4vw, 22px)", lineHeight: 1.6, color: CHARCOAL, margin: 0, maxWidth: "38rem" }}>
              What happens between sessions is what makes this a Resonance application. The reasoning behind
              each editorial letter persists: the writer can leave for three weeks and come back to a desk that
              remembers the conversation, without the manuscript itself ever being stored. The relationship
              deepens. The manuscript stays the writer&apos;s own.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT COMES NEXT — same architecture, other relationships ── */}
      <section id="whats-next" style={{ borderBottom: `1px solid ${CONCRETE}` }}>
        <div className="resonance-section">
          <div>
            <h2
              style={{
                fontFamily: DISPLAY,
                fontWeight: 400,
                fontSize: "clamp(28px, 3vw, 40px)",
                lineHeight: 1.15,
                margin: 0,
                maxWidth: "16ch",
              }}
            >
              What comes next
            </h2>
          </div>
          <div>
            <p style={{ fontFamily: SANS, fontSize: "clamp(17px, 1.4vw, 22px)", lineHeight: 1.6, color: CHARCOAL, margin: 0, maxWidth: "38rem" }}>
              The same architecture holds other kinds of work: a research collaborator that keeps the state of
              a literature review intact across a year of stop-and-start reading, a policy advisor for an
              association that remembers the reasoning behind a decision after the staff who made it have
              moved on. Perkins proves the pattern works for one relationship. What we build next proves it
              wasn&apos;t a coincidence.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ── */}
      <section id="principles" style={{ borderBottom: `1px solid ${CONCRETE}` }}>
        <div className="resonance-section">
          <div>
            <h2
              style={{
                fontFamily: DISPLAY,
                fontWeight: 400,
                fontSize: "clamp(32px, 3.6vw, 56px)",
                lineHeight: 1.1,
                margin: 0,
                maxWidth: "12ch",
              }}
            >
              Principles
            </h2>
          </div>
          <div>
            {PRINCIPLES.map((p) => (
              <div key={p.n} className="resonance-principle-row">
                <span style={{ fontFamily: MONO, fontSize: "11px", fontWeight: 500, letterSpacing: "0.15em", color: LIMESTONE }}>
                  {p.n}
                </span>
                <div>
                  <p style={{ fontFamily: SANS, fontWeight: 600, fontSize: "clamp(17px, 1.4vw, 20px)", color: CHARCOAL, margin: "0 0 0.4rem" }}>
                    {p.statement}
                  </p>
                  <p style={{ fontFamily: SANS, fontSize: "15px", lineHeight: 1.6, color: LIMESTONE, margin: 0, maxWidth: "36rem" }}>
                    {p.gloss}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ borderBottom: `1px solid ${CONCRETE}` }}>
        <div className="resonance-section">
          <div>
            <h2
              style={{
                fontFamily: DISPLAY,
                fontWeight: 400,
                fontSize: "clamp(28px, 3vw, 40px)",
                lineHeight: 1.15,
                margin: 0,
                maxWidth: "14ch",
              }}
            >
              About
            </h2>
          </div>
          <div>
            <p style={{ fontFamily: SANS, fontSize: "clamp(17px, 1.4vw, 22px)", lineHeight: 1.6, color: CHARCOAL, margin: 0, maxWidth: "38rem" }}>
              Resonance is developed by Sympathetic Technology, a Vancouver-based research, systems, and
              publishing practice.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact">
        <div className="resonance-section">
          <div>
            <h2
              style={{
                fontFamily: DISPLAY,
                fontWeight: 400,
                fontSize: "clamp(28px, 3vw, 40px)",
                lineHeight: 1.15,
                margin: 0,
                maxWidth: "14ch",
              }}
            >
              Contact
            </h2>
          </div>
          <div>
            <a
              href="mailto:sean@sympathetic.technology"
              className="resonance-cta"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                border: `1px solid ${BRONZE}`,
                color: CHARCOAL,
                fontFamily: SANS,
                fontSize: "15px",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "1rem 1.75rem",
              }}
            >
              sean@sympathetic.technology
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER — Plex Mono metadata, left-aligned ── */}
      <footer style={{ borderTop: `1px solid ${CONCRETE}` }}>
        <div className="resonance-footer">
          {["REVISION 03", "EST. 2026", "PROCESS ARCHITECTURE", "CONTINUITY IS THE CONDITION OF EXCELLENCE"].map((item, i) => (
            <span key={item} style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              {i > 0 && <span aria-hidden style={{ color: CONCRETE }}>|</span>}
              <span style={{ fontFamily: MONO, fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: LIMESTONE }}>
                {item}
              </span>
            </span>
          ))}
        </div>
      </footer>
    </main>
  );
}
