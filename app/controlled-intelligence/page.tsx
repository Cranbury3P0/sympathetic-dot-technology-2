import type { Metadata } from "next";
import Image from "next/image";
import { Prata, Manrope, Inter, IBM_Plex_Mono } from "next/font/google";
import { Nav, LegalBar, Heading, Label, PAPER, INK, RULE } from "sympathetic-ds";
import controlledIntelligenceLayers from "../../public/controlled-intelligence-four-layers.png";

const prata = Prata({ variable: "--font-prata", subsets: ["latin"], weight: "400" });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["500", "600"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400", "500"] });
const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "500"] });

const PRATA = "var(--font-prata), Georgia, serif";
const MANROPE = "var(--font-manrope), sans-serif";
const INTER = "var(--font-inter), sans-serif";
const MONO = "var(--font-plex-mono), monospace";
const BLUE = "#3B5A78";
const MUTED = "#5c584f";
const QUIET = "#8a8578";

const title = "Controlled Intelligence";
const description =
  "Controlled Intelligence means your organization runs AI inside infrastructure it governs—under policies it writes, with institutional knowledge that stays inside a boundary your board can audit.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
  twitter: { card: "summary", title, description },
};

const ARCHITECTURE = [
  {
    number: "01",
    title: "Local Inference",
    detail: "The model layer",
    body: "An open-weight language model runs inside infrastructure your organization governs. Prompts and responses stay inside the system boundary. No data is routed through commercial platforms or used to improve a vendor's model.",
  },
  {
    number: "02",
    title: "Retrieval-Augmented Generation",
    detail: "The knowledge layer",
    body: "Your organization's documents, board records, policy archives, and member communications connect to the model through a controlled retrieval system. The AI works from your knowledge base, not from generalized internet training. Responses are grounded in your materials and cite them.",
  },
  {
    number: "03",
    title: "Staff Interface",
    detail: "The access layer",
    body: "Staff interact with the system through a purpose-built interface carrying your organization's identity rather than a vendor's brand. Access controls, role permissions, and audit logging are configured to match your governance structure and existing staff responsibilities.",
  },
  {
    number: "04",
    title: "Governance Framework",
    detail: "The accountability layer",
    body: "Policy documentation, board briefing materials, staff guidelines, and a privacy impact assessment framework travel with the technical build. The system does not go live until the governance documentation is in place. The organization can explain what it built and why.",
  },
];

const COMPARISON = [
  ["Where it runs", "Vendor servers", "Your infrastructure"],
  ["Who sees the prompts", "The platform provider", "Your organization only"],
  ["Data retention", "Governed by vendor's terms", "Governed by your policies"],
  ["Training use", "Varies by plan and terms", "None. Your data does not leave."],
  ["Audit capability", "None or limited", "Full. Every query is logged inside your system."],
  ["Staff access controls", "Account-level", "Role-based, matched to your organization structure"],
  ["Board accountability", "“We use public AI tools”", "“Here is our AI policy and here is what the system does”"],
  ["Regulatory exposure", "High. PIPEDA/PIPA compliance is on the organization to interpret.", "Low. Data custody stays inside the organization's control."],
  ["Cost model", "Per-user subscriptions scaling with headcount", "Fixed infrastructure cost. No per-query or per-seat fees."],
];

const PRINCIPLES = [
  {
    title: "Governance before automation",
    body: "Institutional judgment stays with the people accountable for the work. AI supports staff decisions. It does not replace them.",
  },
  {
    title: "Local control before convenience",
    body: "Sensitive knowledge stays inside boundaries the organization defines. Convenience that compromises custody is not convenience.",
  },
  {
    title: "Translation before transformation",
    body: "The first task is understanding how the organization already works. Technology follows those realities rather than replacing them.",
  },
  {
    title: "Explainability as a governance requirement",
    body: "If your board asked how your AI system works, what it has access to, and what your policies are, the answer should be immediate and complete. An organization that cannot explain its AI environment is not governing it.",
  },
];

const bodyStyle: React.CSSProperties = {
  fontFamily: INTER,
  fontSize: "16px",
  lineHeight: 1.75,
  color: MUTED,
};

const headingStyle: React.CSSProperties = {
  fontFamily: PRATA,
  fontWeight: 400,
  textTransform: "none",
  letterSpacing: "normal",
  fontSize: "clamp(28px, 3vw, 40px)",
  lineHeight: 1.2,
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <Label as="div" style={{ fontFamily: MONO, color: BLUE, marginBottom: "1rem" }}>
      {children}
    </Label>
  );
}

export default function ControlledIntelligencePage() {
  return (
    <main
      className={`${prata.variable} ${manrope.variable} ${inter.variable} ${plexMono.variable}`}
      style={{ backgroundColor: PAPER, color: INK, margin: 0 }}
    >
      <Nav logoHref="/" />

      <div className="ci-hero">
        <div className="ci-hero-text">
          <span style={{ fontFamily: MONO, fontWeight: 500, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: BLUE }}>
            Controlled Intelligence
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
              maxWidth: "12ch",
            }}
          >
            Your organization runs AI. Who governs it?
          </Heading>
          <div aria-hidden style={{ width: "44px", height: "2px", background: BLUE, marginBottom: "1.5rem" }} />
          <div className="ci-hero-intro">
            <p style={{ ...bodyStyle, margin: "0 0 1rem" }}>
              Most organizations using AI today are doing it through tools built by someone else, running on infrastructure owned by someone else, under terms and conditions written to serve that company&apos;s interests rather than yours.
            </p>
            <p style={{ ...bodyStyle, margin: "0 0 1rem", color: INK }}>
              Controlled Intelligence is a different arrangement. It means your organization runs its own AI environment inside infrastructure it controls, under policies it writes, with data that never leaves its custody.
            </p>
            <p style={{ fontFamily: MANROPE, fontWeight: 600, fontSize: "16px", lineHeight: 1.6, margin: 0 }}>
              The technology is the same. What changes is who is accountable for it.
            </p>
          </div>
        </div>

        <div className="ci-hero-visual">
          <Image
            src={controlledIntelligenceLayers}
            alt="Four-layer Controlled Intelligence model: local inference, retrieval, staff interface, and governance."
            className="ci-hero-image"
            sizes="(max-width: 1024px) 100vw, 58vw"
            priority
          />
        </div>
      </div>

      <section className="ci-statement" style={{ borderTop: RULE }}>
        <blockquote style={{ fontFamily: PRATA, fontSize: "clamp(28px, 3.8vw, 52px)", lineHeight: 1.25, margin: 0, maxWidth: "25ch" }}>
          The point is not to make AI feel magical, but to make it integrated, predictable, and understood.
        </blockquote>
      </section>

      <section style={{ borderTop: RULE }}>
        <div className="ci-split">
          <div>
            <SectionLabel>THE PROBLEM</SectionLabel>
            <Heading as="h2" style={headingStyle}>
              When staff use public AI tools, the organization is not in the room.
            </Heading>
          </div>
          <div>
            <p style={{ ...bodyStyle, margin: "0 0 1.25rem" }}>
              Every time a staff member opens ChatGPT, Claude, or Gemini and types in a member&apos;s name, a policy question, a board concern, or a draft advocacy letter, that information travels to a commercial server and becomes part of a transaction the organization did not authorize and cannot audit.
            </p>
            <p style={{ ...bodyStyle, margin: "0 0 1.25rem" }}>
              Most organizations experimenting with AI right now are doing the work before they have the governance. Staff test public tools before policies exist. Sensitive information moves through platforms the organization does not control. Leaders inherit risk without a clear picture of how the tools are being used.
            </p>
            <p style={{ ...bodyStyle, color: INK, fontWeight: 500, margin: 0 }}>
              This is not a hypothetical. It is already happening in your organization. Controlled Intelligence gives it a boundary.
            </p>
          </div>
        </div>
      </section>

      <section style={{ borderTop: RULE }}>
        <div className="ci-split">
          <div>
            <SectionLabel>WHAT IT IS</SectionLabel>
            <Heading as="h2" style={headingStyle}>
              AI that lives inside your organization, not inside a vendor&apos;s platform.
            </Heading>
          </div>
          <div>
            <p style={{ ...bodyStyle, margin: "0 0 1.25rem" }}>
              Open-weight AI models are publicly available, production-quality language models that any organization can download, host, and run on its own servers or private cloud. Models like Llama, Mistral, and Gemma are the same generation of technology as the commercial tools your staff are already using. The difference is where they run and who controls them.
            </p>
            <p style={{ ...bodyStyle, margin: "0 0 1.25rem" }}>
              In a sovereign configuration, your organization installs the model inside its own infrastructure. Staff interact with it through an interface the organization controls. Queries stay inside the system. Records stay inside the system. The model does not phone home to an external platform or train on your organization&apos;s activity.
            </p>
            <p style={{ ...bodyStyle, color: INK, margin: 0 }}>
              The result is an AI environment your organization can audit, explain, and adjust. One that answers to your policies rather than a vendor&apos;s terms of service.
            </p>
          </div>
        </div>
      </section>

      <section style={{ borderTop: RULE, padding: "5rem 1.5rem" }}>
        <div className="ci-wide-head">
          <SectionLabel>THE ARCHITECTURE</SectionLabel>
          <Heading as="h2" style={{ ...headingStyle, maxWidth: "18ch" }}>
            Four layers of governed intelligence.
          </Heading>
        </div>
        <div className="ci-architecture">
          {ARCHITECTURE.map((layer) => (
            <article key={layer.number} className="ci-architecture-row">
              <span style={{ fontFamily: MONO, color: BLUE, fontSize: "13px", fontWeight: 500 }}>{layer.number}</span>
              <div>
                <h3 style={{ fontFamily: MANROPE, fontSize: "17px", lineHeight: 1.3, margin: "0 0 0.35rem", fontWeight: 600 }}>{layer.title}</h3>
                <p style={{ fontFamily: MONO, color: QUIET, fontSize: "11px", lineHeight: 1.5, letterSpacing: "0.05em", textTransform: "uppercase", margin: 0 }}>{layer.detail}</p>
              </div>
              <p style={{ fontFamily: INTER, color: MUTED, fontSize: "14px", lineHeight: 1.7, margin: 0 }}>{layer.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ borderTop: RULE, padding: "5rem 1.5rem" }}>
        <div className="ci-wide-head">
          <SectionLabel>THE COMPARISON</SectionLabel>
          <Heading as="h2" style={{ ...headingStyle, maxWidth: "23ch" }}>
            What changes when your organization governs the environment.
          </Heading>
          <p style={{ ...bodyStyle, margin: "1.5rem 0 0", maxWidth: "46rem" }}>
            Consumer AI tools and Controlled Intelligence environments are built on similar underlying technology. The difference is structural.
          </p>
        </div>
        <div className="ci-comparison" role="table" aria-label="Consumer AI and Controlled Intelligence comparison">
          <div className="ci-comparison-head" role="row">
            <span role="columnheader">Measure</span>
            <span role="columnheader">Consumer AI</span>
            <span role="columnheader">Controlled Intelligence</span>
          </div>
          {COMPARISON.map(([topic, consumer, controlled]) => (
            <div className="ci-comparison-row" role="row" key={topic}>
              <h3 role="rowheader">{topic}</h3>
              <p><span className="ci-mobile-label">Consumer AI</span>{consumer}</p>
              <p className="ci-controlled"><span className="ci-mobile-label">Controlled Intelligence</span>{controlled}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ borderTop: RULE, padding: "5rem 1.5rem" }}>
        <div className="ci-wide-head">
          <SectionLabel>PRINCIPLES</SectionLabel>
          <Heading as="h2" style={headingStyle}>The system follows the organization.</Heading>
        </div>
        <div className="ci-principles">
          {PRINCIPLES.map((principle, index) => (
            <article key={principle.title} className="ci-principle">
              <span style={{ fontFamily: MONO, color: BLUE, fontSize: "12px" }}>0{index + 1}</span>
              <h3 style={{ fontFamily: MANROPE, fontSize: "17px", lineHeight: 1.35, fontWeight: 600, margin: 0 }}>{principle.title}</h3>
              <p style={{ fontFamily: INTER, color: MUTED, fontSize: "14px", lineHeight: 1.7, margin: 0 }}>{principle.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ borderTop: RULE }}>
        <div className="ci-split">
          <div>
            <SectionLabel>THE REASON</SectionLabel>
            <Heading as="h2" style={headingStyle}>
              Adoption without governance creates institutional risk.
            </Heading>
          </div>
          <div>
            <p style={{ ...bodyStyle, margin: "0 0 1.25rem" }}>
              Most organizations experimenting with AI are doing the work before they are ready. Staff test public tools before policies exist. Teams route sensitive information through platforms the organization does not control. Leaders inherit risk without a clear view of how the tools are being used.
            </p>
            <p style={{ ...bodyStyle, margin: "0 0 1.25rem" }}>
              Controlled Intelligence gives the organization a perimeter. People can investigate, draft, compare, monitor, and learn while keeping institutional knowledge inside a system the organization can audit, explain, and improve.
            </p>
            <p style={{ ...bodyStyle, color: INK, fontWeight: 500, margin: 0 }}>
              That perimeter is not a restriction. It is the condition that makes responsible adoption possible.
            </p>
          </div>
        </div>
      </section>

      <section className="ci-closing" style={{ borderTop: RULE }}>
        <Heading as="h2" style={{ ...headingStyle, fontSize: "clamp(30px, 4vw, 52px)", maxWidth: "24ch" }}>
          Mission-driven organizations shouldn&apos;t have to choose between progress and privacy.
        </Heading>
        <a href="mailto:sean@sympathetic.technology" className="ci-cta" style={{ fontFamily: MANROPE }}>
          Let&apos;s Talk →
        </a>
      </section>

      <LegalBar />
    </main>
  );
}
