"use client";

import { Nav } from "sympathetic-ds";

/* ─────────────────────────────────────────────────────────────
   CLIENT PORTAL — /client
   Placeholder portal for Sympathetic Technology clients.
   Access to invoices, receipts, project materials, and account
   information. Authentication and payment integrations stubbed.

   TODO INTEGRATION POINTS
   ──────────────────────────────────────────────────────────────
   AUTH
     Supabase Auth:
       import { createClient } from "@/lib/supabase/client"
       const supabase = createClient()
       const { data: { session } } = await supabase.auth.getSession()
     Clerk:
       import { useUser } from "@clerk/nextjs"
       const { user, isLoaded } = useUser()
     Replace the `isAuthenticated = false` stub below with a real
     session check from either provider.

   STRIPE CUSTOMER PORTAL
     When user is authenticated, retrieve their Stripe customer ID
     from your database, then call:
       stripe.billingPortal.sessions.create({
         customer: stripeCustomerId,
         return_url: process.env.NEXT_PUBLIC_BASE_URL + "/client",
       })
     Redirect the user to session.url.
     Surfaced via the "Access billing portal" button below.

   STRIPE INVOICING
     Retrieve invoice list:
       stripe.invoices.list({ customer: stripeCustomerId })
     Render in the INVOICE HISTORY section below.
     Each invoice: number, date, amount, status, PDF link.

   PROJECT MATERIALS
     Client-specific project files gated by user identity.
     Options:
       - Supabase Storage with row-level security (RLS)
       - Notion API pages scoped by client tag
       - Google Drive via service account, shared by email
     Render file list in the PROJECT MATERIALS section below.
     Each item: title, type, date, download link.
───────────────────────────────────────────────────────────── */

/* ── TOKENS ── */
const PAPER = "#F0EDE6";
const INK = "#0A0A0A";
const RULE = "1px solid #0A0A0A";
const BARLOW = "var(--font-barlow), sans-serif";
const CONDENSED = "var(--font-barlow-condensed), sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";

const NAV_ITEMS = ["SYSTEMS", "FIELD NOTES", "WORK", "VERBATIM", "ABOUT", "CONTACT", "CLIENT LOGIN"];

const NAV_STYLE: React.CSSProperties = {
  fontFamily: BARLOW,
  fontWeight: 500,
  fontSize: "14px",
  letterSpacing: "0.08em",
  lineHeight: 1,
  textTransform: "uppercase",
  textDecoration: "none",
  color: INK,
  whiteSpace: "nowrap",
};

const LABEL: React.CSSProperties = {
  fontFamily: BARLOW,
  fontWeight: 600,
  fontSize: "10px",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: INK,
};

/* ── SECTION BLOCK ── */
/* Reusable placeholder section with label, heading, description, and status */
function PortalSection({
  label,
  heading,
  description,
  status,
  children,
}: {
  label: string;
  heading: string;
  description: string;
  status?: string;
  children?: React.ReactNode;
}) {
  return (
    <div style={{ borderBottom: RULE }}>
      {/* Section header */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        alignItems: "baseline",
        padding: "1.25rem 1.5rem 0",
        gap: "1rem",
      }}>
        <div style={{ ...LABEL, marginBottom: "0.5rem" }}>{label}</div>
        {status && (
          <div style={{
            fontFamily: BARLOW,
            fontWeight: 300,
            fontSize: "11px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: INK,
            opacity: 0.45,
          }}>
            {status}
          </div>
        )}
      </div>

      <div style={{ padding: "0 1.5rem 1.5rem" }}>
        <div style={{
          fontFamily: CONDENSED,
          fontWeight: 900,
          fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
          letterSpacing: "-0.02em",
          lineHeight: 0.95,
          textTransform: "uppercase",
          marginBottom: "0.75rem",
        }}>
          {heading}
        </div>
        <p style={{
          fontFamily: BARLOW,
          fontWeight: 300,
          fontSize: "13px",
          lineHeight: 1.65,
          color: INK,
          opacity: 0.7,
          margin: 0,
          maxWidth: "52ch",
        }}>
          {description}
        </p>
        {children && (
          <div style={{ marginTop: "1.25rem" }}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

/* ── STUB ROW ── */
/* Placeholder row for invoice/file lists before data is connected */
function StubRow({ label, detail }: { label: string; detail: string }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr auto",
      alignItems: "baseline",
      borderTop: RULE,
      padding: "0.65rem 0",
      gap: "1rem",
      opacity: 0.35,
    }}>
      <div style={{ fontFamily: BARLOW, fontWeight: 400, fontSize: "13px" }}>{label}</div>
      <div style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "12px", letterSpacing: "0.04em" }}>{detail}</div>
    </div>
  );
}

/* ── PAGE ── */
export default function ClientPortalPage() {
  /* ── AUTH STUB ─────────────────────────────────────────────
     Replace with real session check from Supabase or Clerk.
     Example (Clerk):
       const { user, isLoaded } = useUser()
       const isAuthenticated = isLoaded && !!user
     Example (Supabase):
       const [isAuthenticated, setIsAuthenticated] = useState(false)
       useEffect(() => {
         supabase.auth.getSession().then(({ data }) => {
           setIsAuthenticated(!!data.session)
         })
       }, [])
  ──────────────────────────────────────────────────────────── */
  const isAuthenticated = false; // TODO: replace with real auth check

  return (
    <main style={{ backgroundColor: PAPER, color: INK, minHeight: "100vh", margin: 0 }}>

      {/* ── NAV ── */}
      <Nav activeItem="CLIENT LOGIN" logoHref="/" />

      {/* ── OUTER GRID: rail | main ── */}
      <div style={{ display: "grid", gridTemplateColumns: "176px 1fr", borderTop: RULE, minHeight: "calc(100vh - 3rem)" }} className="client-outer">

        {/* ── LEFT RAIL ── */}
        <aside style={{
          borderRight: RULE,
          padding: "2rem 1.25rem",
          position: "sticky",
          top: 0,
          height: "100vh",
          overflowY: "auto",
          scrollbarWidth: "none",
        }}>
          {/* Portal identifier */}
          <div style={{ marginBottom: "1.5rem" }}>
            <div style={{ ...LABEL, marginBottom: "0.3rem" }}>PORTAL</div>
            <div style={{
              fontFamily: CONDENSED,
              fontWeight: 900,
              fontSize: "2rem",
              letterSpacing: "-0.02em",
              lineHeight: 0.9,
            }}>
              CLIENT
            </div>
          </div>

          {/* Auth status */}
          <div style={{ borderTop: RULE, paddingTop: "1rem", marginBottom: "1rem" }}>
            <div style={{ ...LABEL, marginBottom: "0.25rem" }}>STATUS</div>
            <div style={{
              fontFamily: BARLOW,
              fontWeight: 400,
              fontSize: "13px",
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
            }}>
              <span style={{ fontSize: "0.55rem", opacity: isAuthenticated ? 1 : 0.35 }}>◉</span>
              {isAuthenticated ? "AUTHENTICATED" : "NOT SIGNED IN"}
            </div>
          </div>

          {/* Nav links */}
          {[
            { label: "BILLING", anchor: "#billing" },
            { label: "INVOICES", anchor: "#invoices" },
            { label: "MATERIALS", anchor: "#materials" },
          ].map(({ label, anchor }) => (
            <div key={label} style={{ borderTop: RULE, paddingTop: "1rem", marginBottom: "1rem" }}>
              <a
                href={anchor}
                style={{
                  ...LABEL,
                  textDecoration: "none",
                  color: INK,
                  opacity: 0.5,
                  display: "block",
                }}
              >
                {label}
              </a>
            </div>
          ))}

          {/* Contact */}
          <div style={{ borderTop: RULE, paddingTop: "1rem", marginTop: "auto" }}>
            <div style={{ ...LABEL, marginBottom: "0.4rem" }}>SUPPORT</div>
            <a
              href="mailto:sean@sympathetic.technology"
              style={{
                fontFamily: BARLOW,
                fontWeight: 300,
                fontSize: "12px",
                color: INK,
                opacity: 0.6,
                textDecoration: "none",
                lineHeight: 1.5,
                display: "block",
              }}
            >
              sean@sympathetic.technology
            </a>
          </div>
        </aside>

        {/* ── MAIN CONTENT ── */}
        <div>

          {/* ── HERO ── */}
          <div style={{ padding: "2.5rem 2rem 2rem", borderBottom: RULE }}>
            <div style={{ ...LABEL, marginBottom: "0.75rem", opacity: 0.5 }}>SYMPATHETIC TECHNOLOGY</div>
            <h1 style={{
              fontFamily: CONDENSED,
              fontWeight: 900,
              fontSize: "clamp(4rem, 10vw, 10rem)",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              lineHeight: 0.88,
              margin: "0 0 1.5rem",
            }}>
              CLIENT<br />PORTAL
            </h1>
            <p style={{
              fontFamily: SERIF,
              fontWeight: 400,
              fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
              lineHeight: 1.55,
              margin: "0 0 2rem",
              maxWidth: "48ch",
              color: INK,
            }}>
              Access invoices, receipts, project materials, and account
              information.
            </p>

            {/* Sign in / out button */}
            {isAuthenticated ? (
              <button
                onClick={() => {
                  // TODO: call supabase.auth.signOut() or Clerk signOut()
                  alert("Auth not connected. Would sign out.");
                }}
                style={{
                  fontFamily: BARLOW,
                  fontWeight: 600,
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  background: "transparent",
                  color: INK,
                  border: RULE,
                  padding: "0.6rem 1.25rem",
                  cursor: "pointer",
                }}
              >
                Sign out
              </button>
            ) : (
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <button
                  onClick={() => {
                    // TODO: redirect to auth provider sign-in
                    // Clerk:   window.location.href = "/sign-in"
                    // Supabase: supabase.auth.signInWithOAuth({ provider: "google" })
                    alert("Auth not yet connected. Would redirect to sign-in.");
                  }}
                  style={{
                    fontFamily: BARLOW,
                    fontWeight: 600,
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    background: INK,
                    color: PAPER,
                    border: RULE,
                    padding: "0.6rem 1.25rem",
                    cursor: "pointer",
                  }}
                >
                  Sign in
                </button>
                <button
                  onClick={() => {
                    // TODO: redirect to registration / onboarding
                    alert("Auth not yet connected. Would redirect to registration.");
                  }}
                  style={{
                    fontFamily: BARLOW,
                    fontWeight: 600,
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    background: "transparent",
                    color: INK,
                    border: RULE,
                    padding: "0.6rem 1.25rem",
                    cursor: "pointer",
                  }}
                >
                  Register
                </button>
              </div>
            )}
          </div>

          {/* ── BILLING PORTAL ── */}
          <div id="billing">
            <PortalSection
              label="ACCOUNT"
              heading="Payment Portal"
              description="Manage payment methods, view billing history, update subscription status, and download receipts."
              status="— STRIPE CUSTOMER PORTAL"
            >
              <button
                onClick={() => {
                  // TODO: create Stripe Billing Portal session and redirect
                  // Server action example:
                  //   const session = await stripe.billingPortal.sessions.create({
                  //     customer: stripeCustomerId,
                  //     return_url: process.env.NEXT_PUBLIC_BASE_URL + "/client",
                  //   })
                  //   window.location.href = session.url
                  alert("Stripe not yet connected. Would open Stripe Customer Portal.");
                }}
                style={{
                  fontFamily: BARLOW,
                  fontWeight: 600,
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  background: "transparent",
                  color: INK,
                  border: RULE,
                  padding: "0.55rem 1.1rem",
                  cursor: "pointer",
                  opacity: isAuthenticated ? 1 : 0.4,
                }}
                disabled={!isAuthenticated}
              >
                Access billing portal →
              </button>
            </PortalSection>
          </div>

          {/* ── INVOICE HISTORY ── */}
          <div id="invoices">
            <PortalSection
              label="RECORDS"
              heading="Invoice History"
              description="View and download all invoices issued for consulting engagements, project work, and retainer agreements."
              status="— STRIPE INVOICING"
            >
              {/* TODO: replace with real invoice data from Stripe
                  stripe.invoices.list({ customer: stripeCustomerId })
                  Each row: invoice.number, invoice.created, invoice.amount_due, invoice.status, invoice.invoice_pdf */}
              <div style={{ marginTop: "0.5rem" }}>
                <StubRow label="No invoices on record" detail="Connect Stripe to load" />
                <StubRow label="INV-0001 — Strategic Readiness Assessment" detail="Pending" />
                <StubRow label="INV-0002 — Controlled Intelligence Phase 1" detail="Pending" />
              </div>
            </PortalSection>
          </div>

          {/* ── PROJECT MATERIALS ── */}
          <div id="materials">
            <PortalSection
              label="MATERIALS"
              heading="Project Files"
              description="Proposals, deliverables, governance documents, board briefings, and working files from active and completed engagements."
              status="— CLIENT ACCESS"
            >
              {/* TODO: connect to client-scoped file storage
                  Options:
                  - Supabase Storage with row-level security (RLS) scoped to user_id
                  - Notion API pages filtered by client tag
                  - Google Drive via service account
                  Each row: file title, type (PDF / DOC / SHEET), date, download URL */}
              <div style={{ marginTop: "0.5rem" }}>
                <StubRow label="No materials available" detail="Sign in to access" />
                <StubRow label="Controlled Intelligence — Governance Framework Draft" detail="Pending" />
                <StubRow label="Strategic Readiness Assessment Report" detail="Pending" />
                <StubRow label="Board Briefing Package — AI Adoption" detail="Pending" />
              </div>
            </PortalSection>
          </div>

          {/* ── FOOTER NOTE ── */}
          <div style={{
            padding: "1.5rem 2rem",
            borderTop: RULE,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: "2rem",
            flexWrap: "wrap",
          }}>
            <div style={{
              fontFamily: BARLOW,
              fontWeight: 300,
              fontSize: "12px",
              color: INK,
              opacity: 0.45,
              lineHeight: 1.5,
              maxWidth: "52ch",
            }}>
              This portal is for active and former Sympathetic Technology clients.
              If you&apos;ve been issued an invoice or engaged Sean Cranbury directly,
              your account information will appear here once authentication is enabled.
            </div>
            <a
              href="mailto:sean@sympathetic.technology"
              style={{
                fontFamily: BARLOW,
                fontWeight: 600,
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: INK,
                textDecoration: "none",
                opacity: 0.5,
                whiteSpace: "nowrap",
              }}
            >
              Contact Sean →
            </a>
          </div>

        </div>{/* end main */}
      </div>{/* end outer grid */}

    </main>
  );
}
