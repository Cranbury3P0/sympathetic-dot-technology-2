import type { Metadata } from "next";
import { Archivo, DM_Serif_Text } from "next/font/google";
import Image from "next/image";
import { FitText, LegalBar, Nav } from "sympathetic-ds";
import styles from "./page.module.css";

const archivo = Archivo({
  variable: "--font-capstone-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Text({
  variable: "--font-capstone-serif",
  subsets: ["latin"],
  weight: "400",
});

const title = "Transforming Advocacy and Access";
const description =
  "A healthcare transformation capstone that became a broader argument about the structural, cultural, and relational changes organizations must make in response to AI.";
const socialImage = "/harvard-capstone-systems-bloom-og.png";
const socialImageAlt =
  "A pastel organizational systems bloom centred on the principle Orientation Before Adoption.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "article",
    images: [
      {
        url: socialImage,
        width: 2200,
        height: 1640,
        alt: socialImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
};

const PAGE_LINKS = [
  ["Overview", "overview"],
  ["Challenge", "challenge"],
  ["Prototype", "prototype"],
  ["Transformation", "transformation"],
  ["Governance", "governance"],
  ["Implementation", "implementation"],
  ["Reflection", "reflection"],
] as const;

const CONDITIONS = [
  {
    number: "01",
    title: "Access",
    body: "People need practical ways to locate, understand, and navigate care across geography, systems, and differing local realities.",
  },
  {
    number: "02",
    title: "Advocacy",
    body: "Clinicians and communities need support turning local knowledge into credible and timely policy intervention.",
  },
  {
    number: "03",
    title: "Governance",
    body: "Those most affected must have real authority over a system’s design, data, uses, limits, and evaluation.",
  },
  {
    number: "04",
    title: "Organizational capacity",
    body: "Staff and members need time, literacy, support, and permission to shape tools rather than simply receive them.",
  },
  {
    number: "05",
    title: "Clinical relevance",
    body: "Technology must remain connected to frontline care, actual advocacy practices, and differing regional conditions.",
  },
  {
    number: "06",
    title: "Relational implementation",
    body: "Trust is developed through long-term partnership and shared accountability, not extracted through consultation.",
  },
] as const;

const PLATFORM_CAPABILITIES = [
  ["Culturally safe access", "Resources for understanding, locating, and advocating for appropriate health care services."],
  ["Localized advocacy", "AI-assisted letters, briefs, and policy messages grounded in local circumstances."],
  ["Policy-window awareness", "Signals from public discussion and policy developments that could make advocacy more timely."],
  ["Indigenous data governance", "Community authority, data sovereignty, cultural protocols, and defined limits built in from the start."],
  ["Secure Canadian infrastructure", "Privacy-conscious systems suited to Canadian health care and nonprofit contexts."],
] as const;

const METRICS = [
  ["Access", "Navigation to appropriate services, regional reach, reduced difficulty locating care, and continuity between information and treatment."],
  ["Participation", "Clinician and community engagement, repeat participation, diversity of representation, and the quality of feedback."],
  ["Influence", "Responses from public officials, evidence entering policy discussion, service commitments, and new partnerships."],
  ["Trust", "Partner-defined cultural safety, transparent AI use, confidence, meaningful governance, and the ability to correct or opt out."],
] as const;

const FIELD_LABELS = [
  { label: "STRUCTURE", angle: 0 },
  { label: "PURPOSE", angle: 45 },
  { label: "TECHNOLOGY", angle: 90 },
  { label: "PRACTICE", angle: 135 },
  { label: "RELATIONSHIPS", angle: 180 },
  { label: "WORKFORCE", angle: 225 },
  { label: "CULTURE", angle: 270 },
  { label: "GOVERNANCE", angle: 315 },
] as const;

const FIELD_CENTER = 310;
const LABEL_RADIUS = 222;

function FlowerDiagram() {
  return (
    <div className={styles.heroDiagram} aria-hidden="true">
      <Image
        className={styles.heroFlower}
        src="/harvard-capstone-flower-transparent.png"
        alt=""
        width={1254}
        height={1254}
        sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1050px) 80vw, 46vw"
        fetchPriority="high"
      />
      <svg className={styles.heroAnnotations} viewBox="0 0 620 620">
        {FIELD_LABELS.map(({ label, angle }) => {
          const rad = (angle * Math.PI) / 180;
          const x = FIELD_CENTER + LABEL_RADIUS * Math.sin(rad);
          const y = FIELD_CENTER - LABEL_RADIUS * Math.cos(rad);
          const textAnchor = angle === 0 || angle === 180 ? "middle" : angle > 0 && angle < 180 ? "start" : "end";

          return <text key={label} x={x} y={y} textAnchor={textAnchor} className={styles.petalLabel}>{label}</text>;
        })}

        <circle className={styles.fieldCoreHalo} cx={FIELD_CENTER} cy={FIELD_CENTER} r="82" />
        <circle className={styles.fieldCore} cx={FIELD_CENTER} cy={FIELD_CENTER} r="62" />
        <g className={styles.fieldCenterLabel}>
          <text x={FIELD_CENTER} y={FIELD_CENTER + 5} textAnchor="middle">ORIENTATION</text>
        </g>
        <g className={styles.fieldCaption}>
          <text x="20" y="600">ORGANIZATIONAL FIELD / 01</text>
          <text x="600" y="600" textAnchor="end">A SYSTEM, NOT A STACK</text>
        </g>
      </svg>
    </div>
  );
}

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className={styles.sectionLabel}>
      <span>{number}</span>
      <span>{children}</span>
    </div>
  );
}

export default function HarvardCapstonePage() {
  return (
    <main className={`${styles.page} ${archivo.variable} ${dmSerif.variable}`}>
      <Nav variant="verbatim" logoHref="/" />

      <div className={styles.brandMasthead}>
        <FitText
          text="HARVARD CAPSTONE"
          style={{
            fontFamily: "var(--font-barlow-condensed), sans-serif",
            fontWeight: 900,
            lineHeight: 0.88,
            letterSpacing: "-0.02em",
            color: "#0A0A0A",
            textTransform: "uppercase",
          }}
        />
      </div>

      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Harvard Medical School Executive Education · 2025</p>
          <h2 className={styles.heroTitle}>Transforming Advocacy and Access</h2>
          <p className={styles.deck}>
            A proposed, culturally grounded, AI-supported strategy for healthcare access and advocacy in rural and Indigenous communities.
          </p>
          <p className={styles.heroIntro}>
            A healthcare transformation capstone that became a broader argument about the structural, cultural, and relational changes organizations must make in response to AI.
          </p>
        </div>
        <div className={styles.heroVisual}>
          <FlowerDiagram />
        </div>
        <dl className={styles.heroMeta}>
          <div>
            <dt>Context</dt>
            <dd>Physiotherapy Association of British Columbia</dd>
          </div>
          <div>
            <dt>Work</dt>
            <dd>Strategy, organizational development, AI transformation</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>Capstone proposal with a limited early advocacy prototype</dd>
          </div>
        </dl>
      </header>

      <nav className={styles.pageNav} aria-label="On this page">
        <span>On this page</span>
        <div>
          {PAGE_LINKS.map(([label, href]) => (
            <a key={href} href={`#${href}`}>{label}</a>
          ))}
        </div>
      </nav>

      <section className={styles.introSection} id="overview">
        <SectionLabel number="01">Overview</SectionLabel>
        <div className={styles.introGrid}>
          <h2>A tool proposal became a study of organizational readiness.</h2>
          <div className={styles.prose}>
            <p>
              This capstone was developed through my work with the Physiotherapy Association of British Columbia as part of <em>Leading Digital Transformation in Health Care</em>, an executive education program from Harvard Medical School.
            </p>
            <p>
              It began with a practical question: could an AI-supported platform help rural and Indigenous communities navigate health care services while helping practitioners and communities turn local knowledge into more timely public advocacy?
            </p>
            <p>
              The proposed platform mattered. But the further the project developed, the clearer it became that technology was only the visible layer of a much larger transformation.
            </p>
          </div>
        </div>
        <aside className={styles.scopeNote}>
          <div>
            <span className={styles.scopeTitle}>What was developed</span>
            <p>A strategic transformation model and a limited early experiment with Custom GPTs for advocacy drafting.</p>
          </div>
          <div>
            <span className={styles.scopeTitle}>What was proposed</span>
            <p>The broader platform, governance structure, partnerships, infrastructure, pilots, and measures of success.</p>
          </div>
          <div>
            <span className={styles.scopeTitle}>What did not occur</span>
            <p>No Indigenous participants contributed to the capstone, and no proposed partner conversations took place.</p>
          </div>
        </aside>
      </section>

      <section className={styles.challengeSection} id="challenge">
        <SectionLabel number="02">The challenge</SectionLabel>
        <div className={styles.challengeLead}>
          <h2>Access and advocacy were being treated as separate problems.</h2>
          <p>
            The project began in physiotherapy, but the pattern is much broader. Rural and Indigenous communities face overlapping barriers to health care access, continuity of care, digital participation, and influence over the policies that shape services. Practitioners may understand the local need but lack the time, evidence, or organizational support to turn that knowledge into sustained policy influence.
          </p>
        </div>
        <blockquote>
          How could technology support access and public voice without reproducing the exclusions already present in the health care system?
        </blockquote>
        <div className={styles.platformHeader}>
          <h3>A shared platform for access, advocacy, and participation</h3>
          <p>This was a strategic proposal—not a completed public product.</p>
        </div>
        <ol className={styles.capabilities}>
          {PLATFORM_CAPABILITIES.map(([name, body], index) => (
            <li key={name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h4>{name}</h4><p>{body}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.prototypeSection} id="prototype">
        <SectionLabel number="03">The early prototype</SectionLabel>
        <div className={styles.prototypeGrid}>
          <div>
            <p className={styles.kicker}>A small experiment, not a product launch</p>
            <h2>The technology was the easiest part of the problem.</h2>
          </div>
          <div className={styles.prototypeCopy}>
            <p>
              A limited prototype used early Custom GPTs to explore automated advocacy drafting. The tools were primitive by today’s standards, but they made the underlying possibility tangible: AI could reduce some of the labour involved in turning local experience into policy communication.
            </p>
            <p>
              They also exposed the more important constraints. A better model would not determine who had authority, create trust, redesign workflows, establish culturally grounded governance, or make an organization capable of listening and changing course.
            </p>
          </div>
        </div>
        <div className={styles.failureGrid}>
          <p>A technically functional system could still fail if:</p>
          <ul>
            <li>communities were consulted but lacked decision-making power;</li>
            <li>staff did not understand or trust the tools;</li>
            <li>advocacy remained disconnected from clinical realities;</li>
            <li>data governance arrived after the system had been designed;</li>
            <li>success was reduced to adoption or efficiency;</li>
            <li>local differences were flattened into one provincial model.</li>
          </ul>
        </div>
        <p className={styles.prototypeThesis}>
          Responsible AI adoption is not a software rollout. It changes how an organization listens, decides, learns, shares power, and acts.
        </p>
      </section>

      <section className={styles.transformationSection} id="transformation">
        <SectionLabel number="04">Transformation</SectionLabel>
        <div className={styles.sectionHeadingGrid}>
          <h2>Six conditions for meaningful transformation</h2>
          <p>These conditions work as one system. Weakness in any one can undermine the legitimacy and usefulness of the whole.</p>
        </div>
        <div className={styles.conditions}>
          {CONDITIONS.map((condition) => (
            <article key={condition.number}>
              <span className={styles.conditionNumber}>{condition.number}</span>
              <div>
                <h3>{condition.title}</h3>
                <p>{condition.body}</p>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.shifts}>
          <p className={styles.kicker}>Three strategic shifts</p>
          <article>
            <span>From</span><h3>Fragmented advocacy</h3><span>To</span><h3>Shared voice</h3>
          </article>
          <article>
            <span>From</span><h3>Isolated services</h3><span>To</span><h3>Connected access</h3>
          </article>
          <article>
            <span>From</span><h3>Technology administration</h3><span>To</span><h3>Organizational learning</h3>
          </article>
        </div>
      </section>

      <section className={styles.governanceSection} id="governance">
        <SectionLabel number="05">Governance and cultural safety</SectionLabel>
        <div className={styles.sectionHeadingGrid}>
          <h2>Governance before scale</h2>
          <p>The capstone envisioned a lean, cross-functional structure in which cultural safety, clinical value, and technical feasibility would be accountable to one another.</p>
        </div>
        <div className={styles.governanceDiagram} aria-label="Proposed governance model with three interconnected groups">
          <article>
            <span>01</span>
            <h3>Indigenous Partnership Circle</h3>
            <p>Proposed to embed community authority, cultural governance, and Indigenous data sovereignty from design through evaluation.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Clinical Digital Leadership</h3>
            <p>Proposed to connect the platform to clinical practice, PABC member realities, patient needs, and frontline workflows.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Technology Guidance</h3>
            <p>Proposed to oversee infrastructure, privacy, feasibility, implementation, and alignment across the organization.</p>
          </article>
          <div className={styles.sharedAccountability}>
            Shared accountability<br />for public benefit
          </div>
        </div>
        <div className={styles.governanceNote}>
          <h3>A necessary correction</h3>
          <p>
            These groups were proposed, not established. Indigenous people did not participate in the capstone itself, and the project did not receive Indigenous endorsement. Any responsible future implementation would need to begin with Indigenous leadership and community-defined authority—not add consultation to a predetermined design.
          </p>
          <p>
            Where First Nations are involved, OCAP® principles are not a compliance label or automatic guarantee. They point toward a larger obligation: governance must determine what is built, what data may be used, who benefits, what limits apply, and whether the work should proceed at all.
          </p>
        </div>
      </section>

      <section className={styles.implementationSection} id="implementation">
        <SectionLabel number="06">Implementation</SectionLabel>
        <div className={styles.sectionHeadingGrid}>
          <h2>Start small enough to learn</h2>
          <p>The proposed operating rhythm rejected a single large rollout in favour of focused pilots, feedback, and earned expansion.</p>
        </div>
        <ol className={styles.sequence} aria-label="Proposed implementation sequence">
          {[
            ["01", "Listen"], ["02", "Co-design"], ["03", "Pilot"],
            ["04", "Evaluate"], ["05", "Adapt"], ["06", "Scale"],
          ].map(([number, label]) => (
            <li key={number}><span>{number}</span><strong>{label}</strong></li>
          ))}
        </ol>
        <div className={styles.implementationGrid}>
          <div>
            <h3>Make learning operational</h3>
            <p>Four-to-six-week micro-sprints, listening sessions, modular deployment, manual alternatives, open feedback loops, peer mentorship, and lessons-learned documentation would allow the organization to adapt before expanding.</p>
          </div>
          <div>
            <h3>Let partnership be structural</h3>
            <p>Partners would help define purpose, governance, benefits, limits, and measures of success from the beginning. Growth would be earned through trust, evidence, and mutual benefit—not assumed from good intentions.</p>
          </div>
          <div>
            <h3>Build workforce judgment</h3>
            <p>Digital maturity would not be measured by the number of tools adopted, but by the organization’s ability to question, shape, responsibly use, and sometimes refuse them.</p>
          </div>
        </div>
        <div className={styles.metricsHeader}>
          <p className={styles.kicker}>Measures of success</p>
          <h3>Adoption was never enough.</h3>
        </div>
        <div className={styles.metrics}>
          {METRICS.map(([name, body], index) => (
            <article key={name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h4>{name}</h4>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.reflectionSection} id="reflection">
        <SectionLabel number="07">Reflection</SectionLabel>
        <div className={styles.reflectionGrid}>
          <div>
            <p className={styles.kicker}>What the project changed in my practice</p>
            <h2>Organizations do not become ready for AI by purchasing better tools.</h2>
          </div>
          <div className={styles.reflectionCopy}>
            <p>I began with the idea of an AI-enabled advocacy and access platform. I finished with a much larger understanding of transformation.</p>
            <p>The technology was one part of the system. Meaningful implementation also required cultural change, Indigenous governance, relational partnership, clinical leadership, privacy, workforce learning, and the institutional ability to revise or stop what was not working.</p>
            <p>Organizations become ready by strengthening how they make decisions, share responsibility, protect people, learn from experience, and remain aligned with their purpose.</p>
          </div>
        </div>
        <div className={styles.nowGrid}>
          <h3>The question now extends far beyond one association.</h3>
          <div>
            <p>
              Healthcare associations—and, by inference, most nonprofit organizations—cannot respond to AI simply by adopting new tools. They must also examine the structures, attitudes, authority, skills, relationships, and institutional habits that determine how those tools will be used.
            </p>
            <p>This orientation work became part of the foundation for Sympathetic Technology.</p>
          </div>
        </div>
        <div className={styles.questions}>
          <p>Questions I carry into the work now</p>
          <ul>
            <li>What problem are we actually trying to solve?</li>
            <li>Who is affected, and who has authority?</li>
            <li>What knowledge is missing?</li>
            <li>What must remain human?</li>
            <li>What would responsible refusal look like?</li>
            <li>What happens when the technology is wrong?</li>
          </ul>
        </div>
      </section>

      <section className={styles.closing}>
        <p className={styles.kicker}>From capstone to organizational practice</p>
        <h2>AI changes more than the tools.</h2>
        <p>It changes the conditions under which organizations listen, decide, learn, and act.</p>
        <a href="mailto:hello@sympathetic.technology">Work with Sympathetic Technology <span aria-hidden="true">↗</span></a>
      </section>

      <aside className={styles.disclaimer}>
        <p>
          An independent case study based on a capstone completed in Harvard Medical School Executive Education. This is not an official Harvard Medical School publication and does not imply institutional or community endorsement.
        </p>
        <p>
          OCAP® is a registered trademark of the First Nations Information Governance Centre (FNIGC). Learn more about the <a href="https://fnigc.ca/ocap-training/">First Nations Principles of OCAP®</a>.
        </p>
      </aside>

      <LegalBar siteByText="Capstone case study" />
    </main>
  );
}
