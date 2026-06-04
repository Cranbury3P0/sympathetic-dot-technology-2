"use client";

/* ─────────────────────────────────────────────────────────────
   components/AccessCard.tsx
   Payment / registration panel shown when a Field Note is
   behind the access gate. Uses the Sympathetic visual system:
   paper background, thin rules, condensed display type.
   No rounded corners. No gradients. No SaaS subscription UI.
───────────────────────────────────────────────────────────── */

import { STRIPE_PRICES, type PassType } from "@/lib/access";

const PAPER = "#F0EDE6";
const INK = "#0A0A0A";
const RULE = `1px solid ${INK}`;
const BARLOW = "var(--font-barlow), sans-serif";
const CONDENSED = "var(--font-barlow-condensed), sans-serif";

const LABEL: React.CSSProperties = {
  fontFamily: BARLOW,
  fontWeight: 600,
  fontSize: "10px",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: INK,
};

type AccessCardProps = {
  postSlug: string;
  /** Optional: used once Stripe is connected to scope the single-post price */
  postTitle?: string;
};

/* ── PRICE ROW ── */
function PriceRow({
  passType,
  postSlug,
}: {
  passType: PassType;
  postSlug: string;
}) {
  const price = STRIPE_PRICES[passType];
  const dollars = (price.amount / 100).toLocaleString("en-CA", {
    style: "currency",
    currency: "CAD",
    minimumFractionDigits: 0,
  });

  function handlePurchase() {
    // TODO: call server action or API route to create Stripe Checkout session
    // Example:
    //   const url = await createCheckoutSession(passType, postSlug, userId)
    //   window.location.href = url
    alert(`Stripe not yet connected. Would initiate checkout for: ${price.label} — ${dollars}`);
  }

  return (
    <div
      style={{
        borderTop: RULE,
        padding: "1rem 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: "1rem",
      }}
    >
      <div>
        <div
          style={{
            fontFamily: CONDENSED,
            fontWeight: 900,
            fontSize: "1.25rem",
            letterSpacing: "-0.01em",
            lineHeight: 1,
            marginBottom: "0.2rem",
          }}
        >
          {price.label}
        </div>
        <div
          style={{
            fontFamily: BARLOW,
            fontWeight: 300,
            fontSize: "12px",
            color: INK,
            opacity: 0.65,
          }}
        >
          {price.description}
        </div>
      </div>
      <button
        onClick={handlePurchase}
        style={{
          fontFamily: BARLOW,
          fontWeight: 600,
          fontSize: "11px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          background: INK,
          color: PAPER,
          border: RULE,
          padding: "0.5rem 1rem",
          cursor: "pointer",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
      >
        {dollars}
      </button>
    </div>
  );
}

/* ── MAIN COMPONENT ── */
export function AccessCard({ postSlug, postTitle }: AccessCardProps) {
  function handleSignIn() {
    // TODO: redirect to your auth provider's sign-in page
    // Clerk:   window.location.href = "/sign-in"
    // Supabase: supabase.auth.signInWithOAuth({ provider: "google" })
    alert("Auth not yet connected. Would redirect to sign-in.");
  }

  function handleRegister() {
    // TODO: redirect to registration / onboarding
    alert("Auth not yet connected. Would redirect to registration.");
  }

  return (
    <div
      style={{
        background: PAPER,
        border: RULE,
        maxWidth: "520px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div
        style={{
          borderBottom: RULE,
          padding: "1.25rem 1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <div style={{ ...LABEL }}>ACCESS REQUIRED</div>
        {postTitle && (
          <div
            style={{
              fontFamily: BARLOW,
              fontWeight: 300,
              fontSize: "11px",
              opacity: 0.55,
              maxWidth: "24ch",
              textAlign: "right",
              lineHeight: 1.3,
            }}
          >
            {postTitle}
          </div>
        )}
      </div>

      {/* Description */}
      <div style={{ padding: "1.25rem 1.5rem", borderBottom: RULE }}>
        <p
          style={{
            fontFamily: BARLOW,
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: 1.65,
            margin: 0,
            color: INK,
          }}
        >
          This Field Note is part of the Sympathetic editorial archive.
          Purchase access to this observation, a five-observation pass, or
          annual access to the full archive.
        </p>
      </div>

      {/* Pricing rows */}
      <div style={{ padding: "0 1.5rem" }}>
        <PriceRow passType="single" postSlug={postSlug} />
        <PriceRow passType="five-post" postSlug={postSlug} />
        <PriceRow passType="annual" postSlug={postSlug} />
      </div>

      {/* Auth row */}
      <div
        style={{
          borderTop: RULE,
          padding: "1rem 1.5rem",
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontFamily: BARLOW,
            fontWeight: 300,
            fontSize: "12px",
            color: INK,
            opacity: 0.6,
            marginRight: "auto",
          }}
        >
          Already have access?
        </div>
        <button
          onClick={handleSignIn}
          style={{
            fontFamily: BARLOW,
            fontWeight: 600,
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            background: "transparent",
            color: INK,
            border: RULE,
            padding: "0.4rem 0.875rem",
            cursor: "pointer",
          }}
        >
          Sign in
        </button>
        <button
          onClick={handleRegister}
          style={{
            fontFamily: BARLOW,
            fontWeight: 600,
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            background: "transparent",
            color: INK,
            border: RULE,
            padding: "0.4rem 0.875rem",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}
