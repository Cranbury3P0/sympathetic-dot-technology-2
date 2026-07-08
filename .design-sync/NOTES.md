# design-sync notes — sympathetic-ds

## Repo-specific gotchas

- **Path resolution differs by config field.** `componentSrcMap` and `docsDir` resolve relative to the package dir (`packages/ds/`) — hence `"../../.design-sync/docs-stubs"` and `"src/Heading.tsx"`. `readmeHeader` resolves relative to the "config home" (the repo root, where `.design-sync/` lives) — hence the bare `".design-sync/conventions.md"`. Getting this backwards fails silently with a `! <field>: <path> not found` line, not an error.
- **`FitText` has no own file.** It's exported alongside `Heading` from `src/Heading.tsx`, so the fuzzy src-finder misses it — pinned via `componentSrcMap: {"FitText": "src/Heading.tsx"}`.
- **Tokens/fonts/layout all ride through `tokensPkg`/`tokensGlob`, not `cssEntry`.** This package has no compiled component CSS (`cssEntry` would need a single self-contained file, and `packages/ds/src/*.css` files can't safely `@import` each other for that purpose — cssEntry content is copied into `_ds_bundle.css` verbatim with no path-rewriting). Instead `tokensPkg: "sympathetic-ds"` (self-referential — the DS is its own tokens package, resolved via npm workspace symlink at `node_modules/sympathetic-ds`) + `tokensGlob: "src/*.css"` sweeps `tokens.css`, `fonts.css`, and the new `layout.css` in as sibling stylesheets, each `@import`ed from `styles.css`.
- **`Nav` and `LegalBar` needed `cardMode: "column"` + a widened `viewport: "1300x220"` override.** The default 900px capture/grid viewport is narrower than their own `max-width: 1024px` mobile breakpoint, so without the wider viewport they graded/previewed in their (correct, but non-representative) stacked mobile layout instead of the desktop row.
- **Two package files were extended/added for this sync** (with the user's explicit sign-off first — see below):
  - `packages/ds/src/fonts.css` — added Barlow + Barlow Condensed to the existing Google Fonts `@import` (previously only EB Garamond) and defined `--font-barlow-condensed`/`--font-barlow` custom properties, since those normally come from `next/font` at the app level (see `app/layout.tsx`) and don't exist standalone. This directly fulfills the file's own doc comment ("brand fonts for components that need them outside the Next.js app").
  - `packages/ds/src/layout.css` (new) — carries the small set of layout classNames (`.nav-links`, `.legal-bar`, `.legal-links`, `.fn-article-breadcrumb`, `.fn-article-prevnext`, `.book-spread-*` responsive rules) that `Nav`/`LegalBar`/`Breadcrumb`/`PrevNext`/`BookSpread` render but don't style inline — those rules previously only existed in `app/globals.css`, so the package couldn't render its own components correctly standalone. Kept in sync manually with `app/globals.css` — not auto-derived.
- **`tokens.css`'s `@theme {...}` block is Tailwind v4 syntax** — it's inert as plain CSS outside a Tailwind build (browsers don't parse `@theme`). It ships anyway (honest — it's what the package really contains) but isn't relied on by any component or by the conventions header; the header points the design agent at the real runtime exports (`PAPER`, `INK`, `RULE`, `CONDENSED`, `SANS`) instead.
- Playwright/Chromium wasn't cached on this machine; installed fresh into `.ds-sync/node_modules` (isolated from the repo's own deps) via `npm i -D playwright && npx playwright install chromium`.

## Known render warns

None — validate exits clean with 0 warnings on the final build.

## Re-sync risks

- If `app/globals.css`'s rules for `.nav-links`/`.legal-bar`/`.legal-links`/`.fn-article-breadcrumb`/`.fn-article-prevnext`/`.book-spread-*` change, `packages/ds/src/layout.css` will silently drift out of sync (it's a manual copy, not shared or generated). Same for `app/layout.tsx`'s Barlow/Barlow Condensed weights vs. `packages/ds/src/fonts.css`'s Google Fonts URL.
- The `readmeHeader` conventions doc names five runtime exports (`PAPER`, `INK`, `RULE`, `CONDENSED`, `SANS`) and five classNames — verified against the built bundle/CSS at authoring time. If any component's tokens or class usage changes, re-validate those specific claims before trusting the header again (the base skill's conventions-header step does this automatically on every re-sync).
- All 9 components were authored and graded solo in one pass (no subagent fan-out — the set was small enough). No `.design-sync/learnings/` files were ever created.
