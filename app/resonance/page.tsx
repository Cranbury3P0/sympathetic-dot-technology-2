import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import Image from "next/image";
import { Nav } from "sympathetic-ds";

/**
 * Resonance is a page within the Sympathetic Technology site, so it uses
 * the shared site Nav. Below the nav, it keeps its own
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

/* Palette: warm neutrals only, per the Resonance color doctrine. Kept
   local to this page rather than the shared PAPER/INK tokens, since the
   doctrine specifies a distinct, desaturated architectural palette. */
const WARM_WHITE = "#F5F2EC";
const CHARCOAL = "#2A2823";
const LIMESTONE = "#726C5F";
const CONCRETE = "#D9D2C3";
const BRONZE = "#96754A";

const title = "Resonance: Process Architecture for Creative Work";
const description =
  "Resonance is a process architecture for editorial work that preserves context, decisions, and revision history over time.";

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

/* DATA */

const PRINCIPLES = [
  { n: "01", statement: "Continuity carries the work forward.", gloss: "People remain responsible for every editorial decision." },
  { n: "02", statement: "Clarity supports creative judgment.", gloss: "Writers and editors can see how the work and its reasoning have developed over time." },
  { n: "03", statement: "One architecture supports many applications.", gloss: "Perkins is the first implementation of the Resonance pattern." },
  { n: "04", statement: "Context remains available between sessions.", gloss: "People can return to the work without reconstructing the last conversation." },
];

const METADATA_TERMS = ["CONTINUITY", "MEMORY", "WORKFLOW", "REVISION HISTORY"];

const PROCESS_STAGES = [
  { n: "01", name: "Observe", description: "Capture what is actually present." },
  { n: "02", name: "Clarify", description: "Turn observations into shared understanding." },
  { n: "03", name: "Refine", description: "Apply judgment through deliberate revision." },
  { n: "04", name: "Preserve", description: "Retain the reasoning, conversations, and editorial memory." },
  { n: "05", name: "Continue", description: "Re-enter the work later without reconstructing context." },
];

const AUDIENCES = [
  {
    name: "Independent publishers",
    description: "Keep manuscripts, editorial decisions, and contributor conversations coherent across a small team.",
  },
  {
    name: "Professional literary editors",
    description: "Manage several client relationships without losing the reasoning behind each edit.",
  },
  {
    name: "Writers and writing groups",
    description: "Return to drafts, feedback, and revision choices with the original context intact.",
  },
  {
    name: "Editors building a freelance practice",
    description: "Create a consistent editorial process for clients working in different places and on different schedules.",
  },
];

const WORKFLOWS = [
  {
    name: "Editorial work across genres",
    description: "A shared record of analysis, decisions, and revision history for fiction, nonfiction, poetry, and other forms.",
  },
  {
    name: "Agent-led client management",
    description: "A clear account of timelines, editorial commitments, and manuscript changes for high-touch client relationships.",
  },
  {
    name: "Distributed editorial practices",
    description: "Continuity for independent editors and clients who rarely work in the same room or at the same time.",
  },
];

/* COMPONENT */

export default function ResonancePage() {
  return (
    <main
      className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}
      style={{ backgroundColor: WARM_WHITE, color: CHARCOAL, margin: 0 }}
    >
      <Nav activeItem="RESONANCE" logoHref="/" />
      {/* HERO */}
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
            Resonance preserves the context of editorial work across conversations, revisions, and long pauses.
            Writers and editors can return knowing what changed, why it changed, and what remains unresolved.
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

      <section aria-label="Current status" style={{ borderTop: `1px solid ${CONCRETE}`, borderBottom: `1px solid ${CONCRETE}` }}>
        <div className="resonance-status-grid">
          <article className="resonance-status-item">
            <span style={{ fontFamily: MONO, fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: BRONZE }}>
              Perkins
            </span>
            <h2 style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "clamp(24px, 2.4vw, 34px)", lineHeight: 1.15, margin: "1rem 0" }}>
              Ready for private beta
            </h2>
            <p style={{ fontFamily: SANS, fontSize: "16px", lineHeight: 1.65, color: LIMESTONE, margin: 0, maxWidth: "34rem" }}>
              Professional writers are using Perkins and report that it is working well.
            </p>
          </article>
          <article className="resonance-status-item">
            <span style={{ fontFamily: MONO, fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: BRONZE }}>
              Resonance
            </span>
            <h2 style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "clamp(24px, 2.4vw, 34px)", lineHeight: 1.15, margin: "1rem 0" }}>
              Generic showcase in development
            </h2>
            <p style={{ fontFamily: SANS, fontSize: "16px", lineHeight: 1.65, color: LIMESTONE, margin: 0, maxWidth: "34rem" }}>
              The core pattern is defined. The next build will show how it serves editorial relationships beyond the current Perkins implementation.
            </p>
          </article>
        </div>
      </section>

      {/* CENTRAL PHILOSOPHY */}
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

      {/* ARCHITECTURE */}
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
              Resonance is the architecture beneath the work.
            </h2>
          </div>
          <div>
            <p style={{ fontFamily: SANS, fontSize: "clamp(17px, 1.4vw, 22px)", lineHeight: 1.6, color: CHARCOAL, margin: "0 0 1.5rem", maxWidth: "38rem" }}>
              Resonance gives editorial relationships a durable structure. Perkins is its first working implementation.
            </p>
            <p style={{ fontFamily: SANS, fontSize: "clamp(17px, 1.4vw, 22px)", lineHeight: 1.6, color: LIMESTONE, margin: "0 0 1.5rem", maxWidth: "38rem" }}>
              Writers and editors keep control of the work and continue using the tools that already serve them.
            </p>
            <p style={{ fontFamily: SANS, fontSize: "clamp(17px, 1.4vw, 22px)", lineHeight: 1.6, color: CHARCOAL, margin: "0 0 1.5rem", maxWidth: "38rem" }}>
              Resonance preserves analysis, decisions, and revision history so people can resume the work with its context intact.
            </p>
            <p style={{ fontFamily: SANS, fontSize: "clamp(17px, 1.4vw, 22px)", lineHeight: 1.6, color: LIMESTONE, margin: "0 0 1.5rem", maxWidth: "38rem" }}>
              It is designed for relationships where understanding accumulates over months and much of the thinking happens between sessions.
            </p>
            <p style={{ fontFamily: SANS, fontSize: "clamp(17px, 1.4vw, 22px)", lineHeight: 1.6, color: CHARCOAL, margin: "0 0 2.5rem", maxWidth: "38rem" }}>
              Each application can use the same structure while adapting the workflow to a particular editorial relationship.
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

      {/* APPLICATIONS */}
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
              A writer submits a manuscript and chooses what to focus on. Perkins examines the language on the page
              and returns an editorial letter grounded in the writer&apos;s own terms. The writer takes that analysis
              back to the draft and writes the next scene themselves.
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

      {/* AUDIENCE */}
      <section id="for-whom" style={{ borderBottom: `1px solid ${CONCRETE}` }}>
        <div className="resonance-section">
          <div>
            <span style={{ fontFamily: MONO, fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: BRONZE, display: "block", marginBottom: "1.25rem" }}>
              Who it serves
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
              Built for editorial relationships that develop over time.
            </h2>
          </div>
          <div className="resonance-detail-list">
            {AUDIENCES.map((audience, index) => (
              <article key={audience.name} className="resonance-detail-item">
                <span style={{ fontFamily: MONO, fontSize: "11px", color: BRONZE, letterSpacing: "0.12em" }}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 style={{ fontFamily: SANS, fontWeight: 600, fontSize: "18px", lineHeight: 1.35, margin: "0 0 0.5rem" }}>
                    {audience.name}
                  </h3>
                  <p style={{ fontFamily: SANS, fontSize: "15px", lineHeight: 1.65, color: LIMESTONE, margin: 0 }}>
                    {audience.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOWS */}
      <section id="workflows" style={{ borderBottom: `1px solid ${CONCRETE}` }}>
        <div className="resonance-section">
          <div>
            <span style={{ fontFamily: MONO, fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: BRONZE, display: "block", marginBottom: "1.25rem" }}>
              Beyond Perkins
            </span>
            <h2 style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "clamp(28px, 3vw, 40px)", lineHeight: 1.15, margin: 0, maxWidth: "16ch" }}>
              Three practical editorial settings
            </h2>
          </div>
          <div className="resonance-detail-list">
            {WORKFLOWS.map((workflow, index) => (
              <article key={workflow.name} className="resonance-detail-item">
                <span style={{ fontFamily: MONO, fontSize: "11px", color: BRONZE, letterSpacing: "0.12em" }}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 style={{ fontFamily: SANS, fontWeight: 600, fontSize: "18px", lineHeight: 1.35, margin: "0 0 0.5rem" }}>
                    {workflow.name}
                  </h3>
                  <p style={{ fontFamily: SANS, fontSize: "15px", lineHeight: 1.65, color: LIMESTONE, margin: 0 }}>
                    {workflow.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INFORMATION BOUNDARIES */}
      <section id="information-boundaries" style={{ borderBottom: `1px solid ${CONCRETE}` }}>
        <div className="resonance-section">
          <div>
            <span style={{ fontFamily: MONO, fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: BRONZE, display: "block", marginBottom: "1.25rem" }}>
              Information boundaries
            </span>
            <h2 style={{ fontFamily: DISPLAY, fontWeight: 400, fontSize: "clamp(28px, 3vw, 40px)", lineHeight: 1.15, margin: 0, maxWidth: "16ch" }}>
              What Resonance keeps
            </h2>
          </div>
          <div>
            <p style={{ fontFamily: SANS, fontSize: "clamp(17px, 1.4vw, 22px)", lineHeight: 1.6, color: CHARCOAL, margin: "0 0 1.5rem", maxWidth: "38rem" }}>
              Resonance retains its own editorial analysis and the notes or passages an author deliberately commits to a working area.
            </p>
            <p style={{ fontFamily: SANS, fontSize: "clamp(17px, 1.4vw, 22px)", lineHeight: 1.6, color: LIMESTONE, margin: "0 0 1.5rem", maxWidth: "38rem" }}>
              Uploaded manuscripts are analyzed for the requested session and are not retained as stored documents. Resonance does not generate prose.
            </p>
            <p style={{ fontFamily: SANS, fontSize: "clamp(17px, 1.4vw, 22px)", lineHeight: 1.6, color: CHARCOAL, margin: 0, maxWidth: "38rem" }}>
              An author may choose to preserve writing inside a Resonance workspace. That choice must be explicit. The default is restraint.
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
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

      {/* ABOUT */}
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

      {/* CONTACT */}
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
              Book a conversation
            </h2>
          </div>
          <div>
            <p style={{ fontFamily: SANS, fontSize: "clamp(17px, 1.4vw, 22px)", lineHeight: 1.6, color: CHARCOAL, margin: "0 0 2rem", maxWidth: "38rem" }}>
              If you publish, edit, represent, or organize writers, let&apos;s discuss where continuity breaks down in your current process and whether Resonance is a useful fit.
            </p>
            <a
              href="mailto:sean@sympathetic.technology?subject=Resonance%20conversation"
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
              Book a conversation <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${CONCRETE}` }}>
        <div className="resonance-footer">
          {["REVISION 04", "EST. 2026", "PROCESS ARCHITECTURE", "CONTINUITY IS THE CONDITION OF EXCELLENCE"].map((item, i) => (
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
