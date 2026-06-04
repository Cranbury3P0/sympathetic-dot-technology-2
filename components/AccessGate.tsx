"use client";

/* ─────────────────────────────────────────────────────────────
   components/AccessGate.tsx

   Controls whether the full article body is rendered or replaced
   by the AccessCard payment panel.

   CURRENT STATE
   ─────────────
   Access is stubbed: hasAccess is always false for paid content.
   The full body is NOT rendered to the DOM for unauthorized users,
   but because this is currently a client component and article data
   lives in the same client bundle, the body text IS present in the
   JavaScript payload.

   TO ACHIEVE TRUE SERVER-SIDE CONTENT PROTECTION
   ────────────────────────────────────────────────
   1. Remove "use client" from the article page (page.tsx).
   2. Move the article data object to a server-only data source
      (database, CMS, or a server-side module — NOT imported in
      any "use client" file).
   3. Call checkAccess() in the Server Component (page.tsx):
        const { hasAccess } = await checkAccess(slug, accessType)
   4. Only pass `body` to the template if hasAccess is true.
      Pass only `allowPreviewParagraphs` worth of text otherwise.
   5. This AccessGate can remain a client component for the blur
      animation / UI, but it receives only the preview content
      (not the full body) from the server.

   MIGRATION PATH SUMMARY
   ──────────────────────
   page.tsx (Server Component)
     → calls checkAccess()
     → if paid + no access: passes body={previewParagraphs} only
     → if paid + has access: passes body={fullBody}
     → renders <FieldNoteArticleTemplate> with correct body slice

   The template then passes its body array to <AccessGate> which
   renders it — but since the server never sent the full body to
   the client, nothing sensitive is in the bundle.
───────────────────────────────────────────────────────────── */

import { AccessCard } from "./AccessCard";
import type { AccessType } from "@/lib/access";

const INK = "#0A0A0A";
const RULE = `1px solid ${INK}`;
const BARLOW = "var(--font-barlow), sans-serif";

type AccessGateProps = {
  /** The full body content to render when access is granted */
  children: React.ReactNode;
  /** The post slug — used to scope single-post purchases */
  postSlug: string;
  /** The post title — shown in the AccessCard header */
  postTitle?: string;
  /** "public" renders children unconditionally */
  accessType: AccessType;
  /**
   * Whether the current user has access.
   * Pass the result of checkAccess() from your Server Component.
   * Defaults to false (no access) until auth is wired up.
   */
  hasAccess?: boolean;
  /**
   * Preview paragraphs visible to all before the gate.
   * Rendered above the blur/access panel even without access.
   */
  previewContent?: React.ReactNode;
};

export function AccessGate({
  children,
  postSlug,
  postTitle,
  accessType,
  hasAccess = false,
  previewContent,
}: AccessGateProps) {
  // Public posts: render everything
  if (accessType === "public" || hasAccess) {
    return <>{children}</>;
  }

  // Paid post, no access: show preview then access panel
  return (
    <>
      {/* Preview content (first N paragraphs) */}
      {previewContent}

      {/* Gradient fade suggesting content continues */}
      <div
        aria-hidden
        style={{
          position: "relative",
          height: "5rem",
          marginTop: previewContent ? "-1rem" : 0,
          background: `linear-gradient(to bottom, transparent, #F0EDE6)`,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Separator */}
      <div style={{ borderTop: RULE, marginBottom: "2.5rem" }} />

      {/* Access card */}
      <AccessCard postSlug={postSlug} postTitle={postTitle} />

      {/* Archive note */}
      <div
        style={{
          marginTop: "2rem",
          paddingTop: "1rem",
          borderTop: RULE,
          fontFamily: BARLOW,
          fontWeight: 300,
          fontSize: "12px",
          color: INK,
          opacity: 0.5,
          lineHeight: 1.5,
        }}
      >
        Sympathetic Field Notes are original editorial observations published
        periodically by Sean Cranbury. Purchases are non-refundable. Annual
        access renews automatically unless cancelled.
      </div>
    </>
  );
}
