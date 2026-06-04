/* ─────────────────────────────────────────────────────────────
   lib/access.ts
   Access control types and entitlement checks for Field Notes.

   CURRENT STATE: fully stubbed. hasAccess is hardcoded false.

   TO CONNECT REAL AUTH + PAYMENTS:
   ─────────────────────────────────
   1. AUTH (Supabase Auth or Clerk)
      - Replace `getUserId()` stub with your auth provider's
        session helper, e.g.:
          import { auth } from "@clerk/nextjs/server"
          const { userId } = auth()
        or:
          import { createClient } from "@/lib/supabase/server"
          const { data: { session } } = await supabase.auth.getSession()

   2. ENTITLEMENT LOOKUP
      - Query your database for the user's access records.
      - Tables needed:
          purchases(user_id, post_slug, created_at)   ← single-post access
          passes(user_id, pass_type, posts_used, created_at)  ← five-post pass
          subscriptions(user_id, status, period_end)  ← annual access
      - On annual: check status = "active" and period_end > now()
      - On five-post pass: check posts_used < 5
      - On single: check row exists for (user_id, post_slug)

   3. STRIPE CHECKOUT
      - Replace STRIPE_PRICES stubs with real price IDs from your
        Stripe dashboard (live or test mode).
      - Create a server action or API route at /api/checkout that
        calls stripe.checkout.sessions.create() with:
          price: selectedPriceId
          metadata: { postSlug, userId, passType }
          success_url / cancel_url
      - On webhook (checkout.session.completed):
          insert into purchases / passes / subscriptions

   4. WEBHOOK HANDLER
      - Create /api/webhooks/stripe
      - Verify signature with stripe.webhooks.constructEvent()
      - On success: write entitlement to DB
───────────────────────────────────────────────────────────── */

export type AccessType = "public" | "paid";

export type PassType = "single" | "five-post" | "annual";

export type AccessCheckResult = {
  hasAccess: boolean;
  /** Why access was granted, useful for analytics / debugging */
  reason?: "public" | "annual-subscription" | "five-post-pass" | "single-purchase" | "stub";
};

export type StripePrice = {
  priceId: string;   // TODO: replace with real Stripe price ID
  amount: number;    // cents
  label: string;
  description: string;
};

/* ── STRIPE PRICE STUBS ──────────────────────────────────────
   Replace priceId values with real IDs from the Stripe dashboard.
   Test mode: price_test_...   Live mode: price_...
─────────────────────────────────────────────────────────────  */
export const STRIPE_PRICES: Record<PassType, StripePrice> = {
  single: {
    priceId: "price_STUB_single_post",
    amount: 2000,
    label: "Single observation",
    description: "Permanent access to this Field Note",
  },
  "five-post": {
    priceId: "price_STUB_five_post_pass",
    amount: 10000,
    label: "Five-observation pass",
    description: "Access to any five Field Notes",
  },
  annual: {
    priceId: "price_STUB_annual_access",
    amount: 25000,
    label: "Annual access",
    description: "Unlimited access for 12 months",
  },
};

/* ── ACCESS CHECK ────────────────────────────────────────────
   Server-side entitlement check.
   Currently returns hasAccess: false for all paid content.

   In production this function should:
   1. Get the current user ID from your auth provider
   2. Check the entitlements database
   3. Return the access result

   Call this in a Server Component or server action — never on
   the client — so protected body content is never sent to the
   browser for unauthorized users.
─────────────────────────────────────────────────────────────  */
export async function checkAccess(
  postSlug: string,
  accessType: AccessType,
  // TODO: accept userId from your auth provider once connected
  // userId?: string,
): Promise<AccessCheckResult> {
  // Public posts: always accessible
  if (accessType === "public") {
    return { hasAccess: true, reason: "public" };
  }

  // TODO: real entitlement check goes here
  // Example (Supabase):
  //
  // const supabase = createClient()
  // const { data: subscription } = await supabase
  //   .from("subscriptions")
  //   .select("status, period_end")
  //   .eq("user_id", userId)
  //   .single()
  //
  // if (subscription?.status === "active" && new Date(subscription.period_end) > new Date()) {
  //   return { hasAccess: true, reason: "annual-subscription" }
  // }
  //
  // const { data: purchase } = await supabase
  //   .from("purchases")
  //   .select("id")
  //   .eq("user_id", userId)
  //   .eq("post_slug", postSlug)
  //   .single()
  //
  // if (purchase) return { hasAccess: true, reason: "single-purchase" }
  //
  // const { data: pass } = await supabase
  //   .from("passes")
  //   .select("posts_used")
  //   .eq("user_id", userId)
  //   .lt("posts_used", 5)
  //   .single()
  //
  // if (pass) return { hasAccess: true, reason: "five-post-pass" }

  return { hasAccess: false, reason: "stub" };
}

/* ── CHECKOUT SESSION STUB ───────────────────────────────────
   TODO: implement server action or API route that creates a
   Stripe Checkout session and redirects the user.

   import Stripe from "stripe"
   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

   export async function createCheckoutSession(
     passType: PassType,
     postSlug: string,
     userId: string,
   ) {
     const price = STRIPE_PRICES[passType]
     const session = await stripe.checkout.sessions.create({
       mode: passType === "annual" ? "subscription" : "payment",
       line_items: [{ price: price.priceId, quantity: 1 }],
       metadata: { postSlug, userId, passType },
       success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/field-notes/${postSlug}?access=granted`,
       cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/field-notes/${postSlug}`,
     })
     return session.url
   }
─────────────────────────────────────────────────────────────  */
