import type { Metadata } from "next";
import { Prata, Manrope, Inter, IBM_Plex_Mono } from "next/font/google";
import Image from "next/image";
import { Nav, LegalBar, Heading, Label, PAPER, INK, RULE } from "sympathetic-ds";

/**
 * Meridian gets its own typographic identity (Prata / Manrope / Inter / IBM
 * Plex Mono) per the Meridian Typography Doctrine — distinct from the rest
 * of the site's Barlow / Barlow Condensed system. Loaded here, scoped to
 * this route only, so no other page pays for it.
 */
const prata = Prata({ variable: "--font-prata", subsets: ["latin"], weight: "400" });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["500", "600"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400", "500"] });
const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "500"] });

const PRATA = "var(--font-prata), Georgia, serif";
const MANROPE = "var(--font-manrope), sans-serif";
const INTER = "var(--font-inter), sans-serif";
const MONO = "var(--font-plex-mono), monospace";

/* Ring accent colors — scoped to this page, per the color doctrine. Gold is
   reserved as an accent (rules, the North Star, the Voice ring); body copy
   stays in the site's ink. */
const GOLD = "#B8924A";
const KNOWLEDGE = "#3B5A78";
const JUDGMENT = "#4F6B4A";
const VOICE = GOLD;
const MUTED = "#5c584f";
const HAIRLINE = "#d8d2c6";

const title = "The Meridian Framework";
const description =
  "Architecture for organizational intelligence. Meridian turns an organization's knowledge, judgment, and voice into a single conversational resource — three rings, kept in alignment.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description: "Architecture for Organizational Intelligence.",
    type: "website",
    images: [
      {
        url: "/MERIDIAN_OBSERVATORY.png",
        width: 944,
        height: 1024,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: "Architecture for Organizational Intelligence.",
    images: ["/MERIDIAN_OBSERVATORY.png"],
  },
};

/* ── DATA ── */

const RINGS = [
  {
    color: KNOWLEDGE,
    name: "Knowledge",
    description:
      "The authoritative corpus — policies, research, records, and institutional memory. What the organization knows.",
  },
  {
    color: JUDGMENT,
    name: "Expertise & Judgment",
    description:
      "The interpretive layer — tradecraft and reasoning experienced staff apply when the documents don't give an obvious answer. What the organization has learned.",
  },
  {
    color: VOICE,
    name: "Voice",
    description:
      "The conversation layer — how decisions are made, explained, and acted on in context. What the organization believes and expresses.",
  },
];

const RING_DIAGRAM = [
  { color: KNOWLEDGE, name: "Knowledge", caption: "Capture and connect authoritative information." },
  { color: JUDGMENT, name: "Expertise & Judgment", caption: "Make experience visible and usable." },
  { color: VOICE, name: "Voice", caption: "Support consistent, confident conversations." },
];

const ENGINE = [
  {
    name: "Conversation",
    description: "Natural language, not folder navigation. People ask questions instead of needing to know which document holds the answer.",
    icon: "conversation",
  },
  {
    name: "Provenance",
    description: "Guidance stays connected to its sources — citations, authority levels, dates. Users can see why an answer was produced.",
    icon: "provenance",
  },
  {
    name: "Workspace",
    description: "People work over time, not through isolated answers — projects, histories, and archives appropriate to the domain.",
    icon: "workspace",
  },
  {
    name: "Governance",
    description: "Identity, access, approval processes, source authority, and escalation paths. What the system may do, and who may use it.",
    icon: "governance",
  },
  {
    name: "Continuous Learning",
    description: "Questions reveal confusion, missing documentation, and recurring needs — improving both the system and the underlying practice.",
    icon: "learning",
  },
  {
    name: "Integrations",
    description: "Connections to approved organizational tools, repositories, and workflows — scoped to the needs of each implementation.",
    icon: "integrations",
  },
];

/* ── ICONS ── */
/* Minimal single-stroke line icons — informational, not decorative. */

function EngineIcon({ name }: { name: string }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: INK, strokeWidth: 1.3, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  switch (name) {
    case "conversation":
      return (
        <svg {...common}>
          <path d="M4 5.5h16v10H9l-4 4v-4H4z" />
        </svg>
      );
    case "provenance":
      return (
        <svg {...common}>
          <path d="M6.5 3.5h8l4 4v13h-12z" />
          <path d="M14.5 3.5v4h4" />
          <path d="M9 13h6M9 16.5h6" />
        </svg>
      );
    case "workspace":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="2.6" />
          <path d="M4 19c0-3 2.2-5 5-5s5 2 5 5" />
          <path d="M15 9.5c1.4-.3 2.6.6 2.6 2s-1.2 2.3-2.6 2" />
          <path d="M15.5 19c.3-2.2 1.8-3.8 4-4.2" />
        </svg>
      );
    case "governance":
      return (
        <svg {...common}>
          <path d="M12 3.5l7 3v5c0 5-3 8.5-7 9.5-4-1-7-4.5-7-9.5v-5z" />
          <path d="M9 12l2 2 4-4.5" />
        </svg>
      );
    case "learning":
      return (
        <svg {...common}>
          <path d="M4.5 12a7.5 7.5 0 0 1 12.6-5.5" />
          <path d="M19.5 12a7.5 7.5 0 0 1-12.6 5.5" />
          <path d="M17.5 4.5v3h-3" />
          <path d="M6.5 19.5v-3h3" />
        </svg>
      );
    case "integrations":
      return (
        <svg {...common}>
          <circle cx="6" cy="6" r="2.2" />
          <circle cx="18" cy="6" r="2.2" />
          <circle cx="12" cy="18" r="2.2" />
          <path d="M8 7l3 9M16 7l-3 9M8.2 6h7.6" />
        </svg>
      );
    default:
      return null;
  }
}

/* ── COMPONENT ── */

export default function MeridianPage() {
  return (
    <main
      className={`${prata.variable} ${manrope.variable} ${inter.variable} ${plexMono.variable}`}
      style={{ backgroundColor: PAPER, color: INK, margin: 0 }}
    >
      <Nav activeItem="MERIDIAN" logoHref="/" />

      {/* ── HERO — image bleeds full-bleed against the right edge, uncropped ── */}
      <div className="meridian-hero">
        <div className="meridian-hero-text">
          <span style={{ fontFamily: MONO, fontWeight: 500, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: GOLD }}>
            Meridian
          </span>
          <Heading
            as="h1"
            style={{
              fontFamily: PRATA,
              fontWeight: 400,
              textTransform: "none",
              letterSpacing: "normal",
              fontSize: "clamp(40px, 5.6vw, 78px)",
              lineHeight: 1.05,
              margin: "1rem 0 1.5rem",
            }}
          >
            Meridian
            <br />
            Framework
          </Heading>
          <div aria-hidden style={{ width: "44px", height: "2px", background: GOLD, marginBottom: "1.5rem" }} />
          <p style={{ fontFamily: MANROPE, fontWeight: 500, fontSize: "19px", color: INK, margin: "0 0 1.25rem" }}>
            Architecture for Organizational Intelligence.
          </p>
          <p style={{ fontFamily: INTER, fontSize: "16px", lineHeight: 1.75, color: MUTED, margin: "0 0 2.5rem", maxWidth: "30rem" }}>
            Meridian brings alignment to the distance between what is written, what is known, and what is
            practised. So organizations can speak with one voice.
          </p>
          <a
            href="#framework"
            className="meridian-cta"
            style={{
              display: "inline-block",
              background: INK,
              color: PAPER,
              fontFamily: MANROPE,
              fontSize: "15px",
              fontWeight: 600,
              letterSpacing: "0.01em",
              padding: "1.125rem 2.25rem",
              alignSelf: "flex-start",
            }}
          >
            Enter the Framework →
          </a>
        </div>

        <div className="meridian-hero-image">
          <Image
            src="/MERIDIAN_OBSERVATORY.png"
            alt="The Observatory: an illustrated structure for the Meridian Framework. Its Armillary — three glass rings for knowledge, judgment, and voice — circles a spiral stair, rooted on an island with its dock and roots visible, rising toward the North Star."
            width={944}
            height={1024}
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
      </div>

      {/* ── SECTION 1 — discovery + ring listing, left-aligned, asymmetric ── */}
      <section id="framework" style={{ borderTop: RULE }}>
        <div className="meridian-section-1">
          <div>
            <Heading
              as="h2"
              style={{
                fontFamily: PRATA,
                fontWeight: 400,
                textTransform: "none",
                letterSpacing: "normal",
                fontSize: "clamp(28px, 3vw, 40px)",
                lineHeight: 1.25,
                marginBottom: "1.75rem",
                maxWidth: "18ch",
              }}
            >
              Most organizations can answer one question three different ways.
            </Heading>
            <p style={{ fontFamily: INTER, fontSize: "16px", lineHeight: 1.75, color: MUTED, margin: "0 0 0.5rem" }}>
              The policy says one thing.
            </p>
            <p style={{ fontFamily: INTER, fontSize: "16px", lineHeight: 1.75, color: MUTED, margin: "0 0 0.5rem" }}>
              The experienced employee says another.
            </p>
            <p style={{ fontFamily: INTER, fontSize: "16px", lineHeight: 1.75, color: MUTED, margin: "0 0 1.5rem" }}>
              The CEO says something else again.
            </p>
            <p style={{ fontFamily: INTER, fontSize: "16px", lineHeight: 1.75, fontWeight: 500, color: INK, margin: 0 }}>
              Which one is the organization?
            </p>
          </div>

          <div>
            {RINGS.map((ring) => (
              <div key={ring.name} style={{ padding: "1.4rem 0", borderTop: `1px solid ${HAIRLINE}` }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "0.6rem" }}>
                  <span aria-hidden style={{ display: "inline-block", width: "28px", height: "4px", background: ring.color }} />
                  <span style={{ fontFamily: MONO, fontWeight: 500, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {ring.name}
                  </span>
                </div>
                <p style={{ fontFamily: INTER, fontSize: "14px", lineHeight: 1.65, color: MUTED, margin: 0 }}>
                  {ring.description}
                </p>
              </div>
            ))}
            <div aria-hidden style={{ borderTop: `1px solid ${HAIRLINE}` }} />
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — the architecture, with a line diagram of the Armillary and Gnomon ── */}
      <section style={{ borderTop: RULE }}>
        <div className="meridian-section-2">
          <div>
            <Heading
              as="h2"
              style={{
                fontFamily: PRATA,
                fontWeight: 400,
                textTransform: "none",
                letterSpacing: "normal",
                fontSize: "clamp(28px, 3vw, 40px)",
                lineHeight: 1.2,
                marginBottom: "1.5rem",
                maxWidth: "16ch",
              }}
            >
              Meridian is the architecture that closes that distance.
            </Heading>
            <p style={{ fontFamily: INTER, fontSize: "16px", lineHeight: 1.75, color: MUTED, margin: "0 0 1.25rem", maxWidth: "34rem" }}>
              It turns what an organization has written down, what its people know but never wrote down, and what
              it actually believes into a single conversational resource — three rings, kept in alignment.
            </p>
            <p style={{ fontFamily: INTER, fontSize: "14px", lineHeight: 1.7, color: "#8a8578", margin: 0, maxWidth: "34rem" }}>
              The three rings are valuable individually. Meridian&apos;s real work is keeping them aligned — and
              surfacing where they&apos;ve come apart before a correction becomes a crisis.
            </p>
          </div>

          <div className="meridian-diagram" aria-hidden="true">
            <div className="meridian-diagram-axis" />
            <div className="meridian-diagram-star">✦</div>
            {RING_DIAGRAM.map((ring) => (
              <div key={ring.name} className="meridian-diagram-row">
                <svg width="132" height="34" viewBox="0 0 132 34" style={{ flexShrink: 0 }}>
                  <ellipse cx="66" cy="17" rx="60" ry="13" fill="none" stroke={ring.color} strokeWidth="3" />
                </svg>
                <div>
                  <div style={{ fontFamily: MONO, fontWeight: 600, fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.3rem" }}>
                    {ring.name}
                  </div>
                  <p style={{ fontFamily: INTER, fontSize: "13px", lineHeight: 1.5, color: MUTED, margin: 0 }}>
                    {ring.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — the engine, as a rule-separated matrix ── */}
      <section style={{ borderTop: RULE, padding: "5rem 1.5rem" }}>
        <div className="meridian-engine-head">
          <Label as="div" style={{ fontFamily: MONO, color: GOLD, marginBottom: "1rem" }}>
            THE MERIDIAN ENGINE
          </Label>
          <Heading
            as="h2"
            style={{
              fontFamily: PRATA,
              fontWeight: 400,
              textTransform: "none",
              letterSpacing: "normal",
              fontSize: "clamp(26px, 2.8vw, 38px)",
              lineHeight: 1.25,
              maxWidth: "22ch",
            }}
          >
            What turns three rings into something people can use.
          </Heading>
        </div>

        <div className="meridian-engine-grid">
          {ENGINE.map((item) => (
            <div key={item.name} className="meridian-engine-cell">
              <EngineIcon name={item.icon} />
              <div style={{ fontFamily: MONO, fontWeight: 600, fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", margin: "0.75rem 0 0.5rem" }}>
                {item.name}
              </div>
              <p style={{ fontFamily: INTER, fontSize: "13.5px", lineHeight: 1.6, color: MUTED, margin: 0 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CLOSING — quiet, two columns, no inversion ── */}
      <section style={{ borderTop: RULE }}>
        <div className="meridian-closing">
          <Heading
            as="h2"
            style={{
              fontFamily: PRATA,
              fontWeight: 400,
              textTransform: "none",
              letterSpacing: "normal",
              fontSize: "clamp(28px, 3vw, 40px)",
              lineHeight: 1.2,
            }}
          >
            One framework.
            <br />
            Every organization&apos;s own voice.
          </Heading>
          <div>
            <p style={{ fontFamily: INTER, fontSize: "16px", lineHeight: 1.75, color: MUTED, margin: "0 0 1rem" }}>
              Meridian adapts to your domain, your language, and your standards.
            </p>
            <p style={{ fontFamily: INTER, fontSize: "16px", lineHeight: 1.75, color: INK, margin: 0 }}>
              Alignment is not a product. It is an architecture.
            </p>
          </div>
        </div>
      </section>

      <LegalBar />
    </main>
  );
}
