"use client";

import { Nav, LegalBar, FitText } from "sympathetic-ds";

/* ── STYLE TOKENS ── */

const RULE = "1px solid #0A0A0A";
const BARLOW = "var(--font-barlow), sans-serif";
const CONDENSED = "var(--font-barlow-condensed), sans-serif";
const ACCENT = "#C4491F";
const PAPER = "#F0EDE6";

/* ── ICONS ── */
/* Inline, single-stroke line icons — deliberately plain so the type carries the page. */

function IconNetwork() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.8">
      <circle cx="6" cy="6" r="2.4" /><circle cx="18" cy="6" r="2.4" /><circle cx="12" cy="18" r="2.4" />
      <path d="M8 7.4L10 16M16 7.4L14 16M8.4 6H15.6" />
    </svg>
  );
}
function IconPerson() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.8">
      <circle cx="12" cy="7" r="3.4" /><path d="M4.5 20c0-4 3.4-6.5 7.5-6.5s7.5 2.5 7.5 6.5" />
    </svg>
  );
}
function IconBars() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.8">
      <rect x="3.5" y="13" width="6.5" height="7" /><rect x="10.5" y="8" width="6.5" height="12" /><rect x="17.5" y="4" width="3" height="16" />
    </svg>
  );
}
function IconCross() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" />
    </svg>
  );
}
function IconBooks() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.8">
      <path d="M4 5.5c2.5-1 5-1 7 0v14c-2-1-4.5-1-7 0zM19 5.5c-2.5-1-5-1-7 0v14c2-1 4.5-1 7 0z" />
    </svg>
  );
}
function IconPencil() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.8">
      <path d="M4 20l1-4.5L15.5 5 19 8.5 8.5 19z" /><path d="M13 7l3.5 3.5" />
    </svg>
  );
}
function IconStar() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" /><path d="M12 5l2.4 5.4L20 12l-5.6 1.6L12 19l-2.4-5.4L4 12l5.6-1.6z" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.8">
      <path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6z" /><path d="M9 12l2 2 4-4.5" />
    </svg>
  );
}
function IconPage() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.8">
      <rect x="3.5" y="4.5" width="17" height="15" rx="0.5" /><path d="M7 9h10M7 13h10M7 16.5h6" />
    </svg>
  );
}
function IconVenn() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.8">
      <circle cx="9" cy="12" r="5" /><circle cx="15" cy="12" r="5" />
    </svg>
  );
}
function IconBoard() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.8">
      <rect x="3.5" y="8" width="17" height="11" rx="0.5" /><path d="M9 8V6a3 3 0 013-3h0a3 3 0 013 3v2" /><path d="M3.5 13h17" />
    </svg>
  );
}
function IconTeam() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.8">
      <circle cx="8" cy="7" r="2.6" /><circle cx="16" cy="7" r="2.6" />
      <path d="M3 19c0-3.2 2.3-5.3 5-5.3s5 2.1 5 5.3M11 19c0-3.2 2.3-5.3 5-5.3s5 2.1 5 5.3" />
    </svg>
  );
}
function IconPeaks() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.8">
      <path d="M3 19L9 8l3.5 6L15 10l6 9" />
    </svg>
  );
}
function IconTarget() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" />
    </svg>
  );
}
function IconPodium() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.8">
      <rect x="3.5" y="5" width="17" height="11" rx="0.5" /><path d="M9 20h6M12 16v4" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3.5 2" />
    </svg>
  );
}
function IconCalendar() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.8">
      <rect x="3.5" y="5" width="17" height="15" rx="0.5" /><path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </svg>
  );
}
function IconRipple() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="7" r="1.4" /><circle cx="16.5" cy="14.5" r="1.4" /><circle cx="7.5" cy="14.5" r="1.4" />
    </svg>
  );
}
function IconHouse() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.8">
      <path d="M4 12l8-7 8 7" /><path d="M6 11v8h12v-8" />
    </svg>
  );
}
function IconSpark() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="1.8">
      <circle cx="12" cy="12" r="3" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.5 5.5l2 2M16.5 16.5l2 2M5.5 18.5l2-2M16.5 7.5l2-2" />
    </svg>
  );
}

/* ── DATA ── */

const READOUTS = [
  { label: "Format", value: "Talks & workshops" },
  { label: "Audience", value: "Boards, teams, cohorts" },
  { label: "Approach", value: "Built for the room" },
];

const UPCOMING_EVENTS = [
  { date: "TBD", title: "[Add upcoming talk or workshop]", location: "[City / virtual]" },
  { date: "TBD", title: "[Add upcoming talk or workshop]", location: "[City / virtual]" },
  { date: "TBD", title: "[Add upcoming talk or workshop]", location: "[City / virtual]" },
];

const SPEAKING_THEMES = [
  { icon: IconNetwork, title: "Organizational development in the age of agentic AI", description: "What structure, roles, and decision-making look like once AI agents are doing real work inside the organization." },
  { icon: IconPerson, title: "Human-centred AI", description: "Keeping people, not the tool, at the center of every decision about how AI gets used." },
  { icon: IconBars, title: "Building Sympathetic Technology", description: "What it actually takes to build AI that respects the people and organizations it touches." },
  { icon: IconCross, title: "AI for healthcare organizations", description: "What AI means for care, privacy, and trust in healthcare settings." },
  { icon: IconBooks, title: "The future of knowledge work", description: "How AI is changing what it means to think, research, and know something for a living." },
  { icon: IconPencil, title: "AI for writers and publishers", description: "Where AI helps the craft of writing and publishing, and where it doesn't." },
  { icon: IconStar, title: "Leading through technological change", description: "How leaders steady an organization while the ground under it keeps shifting." },
  { icon: IconShield, title: "Responsible AI adoption", description: "Adopting AI with judgment, not just speed." },
  { icon: IconPage, title: "The future of reading and writing", description: "What happens to how we read and write as more of both is mediated by AI." },
  { icon: IconVenn, title: "Designing better relationships with technology", description: "Building a healthier, clearer relationship between people and the tools they use." },
];

const SESSION_FORMATS = [
  { icon: IconClock, title: "Single hourly session", description: "One hour, one problem. Bring a specific question, tool, or workflow and leave with an answer instead of homework." },
  { icon: IconCalendar, title: "Set of three sessions", description: "Three sessions spread across a few weeks, for the kind of skill that needs more than an hour to actually stick." },
];

const GROUP_SIZES = [
  { icon: IconPerson, title: "Individual", description: "One person, one hour, whatever you're actually stuck on." },
  { icon: IconTeam, title: "Small group", description: "A handful of colleagues working through the same material, at the same table, at the same time." },
  { icon: IconNetwork, title: "Organizations", description: "Built around a whole team or department, calibrated to the tools and workflows they're already using." },
];

const WORKSHOP_FORMATS = [
  { icon: IconBoard, title: "Executive briefings", description: "Focused sessions that get leadership oriented fast, before bigger decisions get made." },
  { icon: IconTeam, title: "Team workshops", description: "Working sessions built around what a specific team is trying to figure out." },
  { icon: IconPeaks, title: "Leadership retreats", description: "Time away from the day-to-day to think clearly about direction as a leadership group." },
  { icon: IconTarget, title: "Strategy sessions", description: "Structured conversations that turn a vague direction into a decision." },
  { icon: IconPodium, title: "Conference presentations", description: "Talks built for a conference stage, sized to the room and the time." },
  { icon: IconClock, title: "Half-day and full-day intensives", description: "Concentrated sessions for when a team needs real progress in one sitting." },
  { icon: IconCalendar, title: "Multi-session cohorts", description: "A series of sessions that build on each other over weeks, not one and done." },
  { icon: IconRipple, title: "Community workshops", description: "Sessions built for members, volunteers, and the people closest to the mission." },
  { icon: IconHouse, title: "Writing residencies", description: "Extended time with a group of writers, working through craft and practice together." },
  { icon: IconSpark, title: "Custom programs, built to spec", description: "Anything that doesn't fit a category above, shaped to what the organization actually needs." },
];

/* ── SUBCOMPONENTS ── */

function IconCard({ icon: Icon, title, description }: { icon: () => React.JSX.Element; title: string; description: string }) {
  return (
    <div style={{ aspectRatio: "1", border: "2px solid #0A0A0A", padding: "26px", display: "flex", flexDirection: "column", gap: "14px" }}>
      <Icon />
      <div style={{ fontFamily: CONDENSED, fontWeight: 900, textTransform: "uppercase", fontSize: "20px", lineHeight: 1.15, color: "#0A0A0A" }}>
        {title}
      </div>
      <div style={{ fontFamily: BARLOW, fontSize: "13.5px", lineHeight: 1.5, color: "#4a4a46", marginTop: "auto" }}>
        {description}
      </div>
    </div>
  );
}

function OfferingSection({
  accent,
  heading,
  intro,
  label,
  items,
  closing,
}: {
  accent: string;
  heading: string;
  intro: string;
  label: string;
  items: typeof SPEAKING_THEMES;
  closing: string;
}) {
  return (
    <section className="vb-section">
      <div style={{ background: accent, minHeight: "100%" }} />
      <div className="vb-section-body" style={{ borderTop: RULE, borderBottom: RULE }}>
        <h2 style={{ fontFamily: CONDENSED, fontWeight: 900, textTransform: "uppercase", fontSize: "clamp(30px, 3.4vw, 40px)", lineHeight: 1.1, margin: "0 0 24px", color: "#0A0A0A" }}>
          {heading}
        </h2>

        <p style={{ fontFamily: BARLOW, fontSize: "20px", lineHeight: 1.7, color: "#0A0A0A", margin: "0 0 40px", maxWidth: "700px" }}>
          {intro}
        </p>

        <div style={{ fontFamily: BARLOW, fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: accent, marginBottom: "20px" }}>
          {label}
        </div>

        <div className="vb-card-grid">
          {items.map((item) => (
            <IconCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </div>

        <p style={{ fontFamily: BARLOW, fontSize: "15px", lineHeight: 1.7, color: "#4a4a46", margin: 0, maxWidth: "640px" }}>
          {closing}
        </p>
      </div>
    </section>
  );
}

function LearningSection({
  accent,
  heading,
  intro,
  groups,
  closing,
}: {
  accent: string;
  heading: string;
  intro: React.ReactNode[];
  groups: { label: string; items: typeof SPEAKING_THEMES }[];
  closing?: string;
}) {
  return (
    <section className="vb-section">
      <div style={{ background: accent, minHeight: "100%" }} />
      <div className="vb-section-body" style={{ borderTop: RULE, borderBottom: RULE }}>
        <h2 style={{ fontFamily: CONDENSED, fontWeight: 900, textTransform: "uppercase", fontSize: "clamp(30px, 3.4vw, 40px)", lineHeight: 1.1, margin: "0 0 24px", color: "#0A0A0A" }}>
          {heading}
        </h2>

        {intro.map((paragraph, i) => (
          <p key={i} style={{ fontFamily: BARLOW, fontSize: "20px", lineHeight: 1.7, color: "#0A0A0A", margin: i === intro.length - 1 ? "0 0 40px" : "0 0 24px", maxWidth: "700px" }}>
            {paragraph}
          </p>
        ))}

        {groups.map((group) => (
          <div key={group.label} style={{ marginBottom: "40px" }}>
            <div style={{ fontFamily: BARLOW, fontSize: "12px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: accent, marginBottom: "20px" }}>
              {group.label}
            </div>
            <div className="vb-card-grid">
              {group.items.map((item) => (
                <IconCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
              ))}
            </div>
          </div>
        ))}

        {closing && (
          <p style={{ fontFamily: BARLOW, fontSize: "15px", lineHeight: 1.7, color: "#4a4a46", margin: 0, maxWidth: "640px" }}>
            {closing}
          </p>
        )}
      </div>
    </section>
  );
}

/* ── PAGE ── */

export default function VerbatimPage() {
  return (
    <div style={{ background: PAPER, minHeight: "100vh", fontFamily: BARLOW }}>

      {/* ── NAV ── */}
      <Nav variant="verbatim" activeItem="VERBATIM LEARNING" logoHref="/" />

      {/* ── VERBATIM TITLE ── */}
      <div style={{ borderBottom: RULE, padding: "0.5rem 1.5rem 0.4rem" }}>
        <FitText
          text="VERBATIM LEARNING"
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

      {/* ── INSTRUMENT READOUT STRIP ── */}
      <div style={{ borderBottom: RULE, overflowX: "auto" }}>
        <div className="vb-readouts">
          {READOUTS.map((r) => (
            <div key={r.label} style={{ minWidth: "140px" }}>
              <div style={{ fontFamily: BARLOW, fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8a8680", marginBottom: "3px" }}>
                {r.label}
              </div>
              <div style={{ fontFamily: BARLOW, fontSize: "13px", fontWeight: 600, letterSpacing: "0.02em", color: "#0A0A0A" }}>
                {r.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PAGE HEADER ── */}
      <section className="vb-header">
        <div>
          <div style={{ fontFamily: BARLOW, letterSpacing: "0.1em", color: "#7a7772", marginBottom: "14px", fontSize: "11px", fontWeight: 600, textTransform: "uppercase" }}>
            Consulting
          </div>
          <h1 style={{ fontFamily: CONDENSED, fontWeight: 900, textTransform: "uppercase", margin: 0, lineHeight: 0.98 }}>
            <span style={{ display: "block", fontSize: "clamp(48px, 8vw, 108px)", color: "#0A0A0A" }}>Learning,</span>
            <span style={{ display: "block", fontSize: "clamp(48px, 8vw, 108px)", color: "#0A0A0A" }}>workshops,</span>
            <span style={{ display: "block", fontSize: "clamp(48px, 8vw, 108px)", color: ACCENT }}>&amp; events</span>
          </h1>
        </div>

        <div style={{ border: RULE, padding: "20px 22px", marginTop: "4px" }}>
          <div style={{ fontFamily: BARLOW, fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: ACCENT, marginBottom: "14px" }}>
            Upcoming
          </div>
          {UPCOMING_EVENTS.map((ev, i) => (
            <div key={i} style={{ padding: "10px 0", borderTop: "1px solid #d8d4cc" }}>
              <div style={{ fontFamily: BARLOW, fontSize: "11px", fontWeight: 600, letterSpacing: "0.04em", color: "#8a8680", marginBottom: "3px" }}>
                {ev.date}
              </div>
              <div style={{ fontFamily: BARLOW, fontSize: "14px", fontWeight: 600, color: "#0A0A0A", lineHeight: 1.35 }}>
                {ev.title}
              </div>
              <div style={{ fontFamily: BARLOW, fontSize: "12.5px", color: "#4a4a46", marginTop: "2px" }}>
                {ev.location}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LEARNING ── */}
      <LearningSection
        accent="#0A0A0A"
        heading="Learning"
        intro={[
          "I offer workshops and tutorials for individuals, small groups, and organizations.",
          "Every learning opportunity is shaped around the people I’m teaching—their needs, intentions, craft, and industry. These specifics help determine how we work together, what we focus on, and what you can expect from the tool or suite of tools you’re learning.",
          <>My general philosophy for learning to use AI tools with confidence and intention is explored in a recent post I wrote about{" "}
            <a href="#" style={{ color: "#0A0A0A", textDecoration: "underline", textUnderlineOffset: "2px" }}>
              <strong>Orientation</strong>
            </a>.
          </>,
          "The short version is this: AI tools are context machines. They consume context and produce more context—in the form of text, images, audio, code, and more.",
          "The quickest way to understand these tools is to begin with a thorough orientation: What do you want? What do you expect? What is the tool capable of producing? It sounds simple, but in practice it can be surprisingly difficult—and learning how to answer those questions is a large part of learning how to use AI well.",
          "Please explore the packages below, and reach out if you have any questions. I’m always happy to work with you to shape a learning opportunity around your particular needs.",
        ]}
        groups={[
          { label: "Session format", items: SESSION_FORMATS },
          { label: "Group size", items: GROUP_SIZES },
        ]}
      />

      {/* ── SPEAKING ── */}
      <OfferingSection
        accent={ACCENT}
        heading="Speaking"
        intro="I speak to audiences who are trying to think clearly about AI, not be sold on it. Boards, conference rooms, cohorts of writers and editors, healthcare and association leaders working out what any of this means for the people they serve. The talk changes with the room. The starting point doesn't: most AI decisions are actually decisions about direction, and that's worth saying out loud before anyone reaches for a tool."
        label="Recent themes"
        items={SPEAKING_THEMES}
        closing="None of these are fixed talks. Each one gets built for the specific room, the specific questions, the specific stakes in play that day."
      />

      {/* ── WORKSHOPS ── */}
      <OfferingSection
        accent="#0A0A0A"
        heading="Workshops"
        intro="Workshops here aren't a curriculum delivered at people. They're built around the questions an organization is actually sitting with, which means the content changes but the approach doesn't: start with what's true about this team, this board, this moment, and work from there."
        label="Formats"
        items={WORKSHOP_FORMATS}
        closing="Some of these run in an afternoon. Some run across months. The right length depends on what the organization needs to walk away knowing how to do on its own."
      />

      {/* ── SHARED CTA ── */}
      <section style={{ background: "#0A0A0A", padding: "88px 32px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: CONDENSED, fontWeight: 900, textTransform: "uppercase", fontSize: "clamp(28px, 3.6vw, 44px)", lineHeight: 1.2, color: PAPER, margin: "0 0 36px" }}>
            Have an event or workshop in mind?
          </p>
          <p style={{ fontFamily: BARLOW, fontSize: "18px", lineHeight: 1.7, color: "#cfccc4", margin: "0 auto 40px", maxWidth: "600px" }}>
            Tell me about the room and the problem you're trying to solve in it, and I'll tell you what shape makes sense.
          </p>
          <a
            href="mailto:sean@sympathetic.technology"
            style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: ACCENT, color: PAPER, fontFamily: BARLOW, fontSize: "15px", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", padding: "18px 40px", textDecoration: "none" }}
          >
            Let&apos;s talk <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      {/* ── CLOSING LINE ── */}
      <section style={{ maxWidth: "760px", margin: "0 auto", padding: "56px 32px 96px", textAlign: "center" }}>
        <p style={{ fontFamily: BARLOW, fontSize: "15px", lineHeight: 1.7, color: "#6a6762", margin: 0 }}>
          These are the kinds of conversations I have most often, with organizations, writers, publishers, healthcare leaders, and creative communities. Every engagement gets developed around the questions you're actually trying to answer, not a fixed package.
        </p>
      </section>

      {/* ── LEGAL BAR ── */}
      <LegalBar siteByText="Verbatim" />

    </div>
  );
}
