## sympathetic-ds conventions

**No provider or wrapper needed.** Every component is a plain function component with no context/hooks dependency — `import { Nav, Heading, ... } from 'sympathetic-ds'` and render directly.

**Styling is inline, not class-based.** Components carry their own look via `React.CSSProperties` objects built from a small set of exported constants — there is no utility-class system and no theme provider. Use these directly for new layout/composition work instead of inventing classes or hex values:

- `PAPER` — `"#F0EDE6"` (page background)
- `INK` — `"#0A0A0A"` (text / foreground)
- `RULE` — `"1px solid #0A0A0A"` (the hairline divider used everywhere — pass to `border`/`borderTop`/etc.)
- `CONDENSED` — `"var(--font-barlow-condensed), sans-serif"` (display/headline typeface)
- `SANS` — `"var(--font-barlow), sans-serif"` (body/UI typeface)

All five are runtime exports (`window.SympatheticDs.PAPER`, etc.), not CSS custom properties you can reference from arbitrary markup — pull them into inline `style` objects the same way the components themselves do.

**A handful of components use plain CSS classNames for their internal row/column layout** (`Nav`'s `.nav-links`, `LegalBar`'s `.legal-bar`/`.legal-links`, `Breadcrumb`'s `.fn-article-breadcrumb`, `PrevNext`'s `.fn-article-prevnext`, and `BookSpread`'s responsive `.book-spread-*` classes). These ship in `styles.css` (via `tokens/layout.css`) so the components render correctly out of the box — they are implementation detail of those specific components, not a public class vocabulary. Don't reuse these class names on other elements; compose new layouts with inline styles using the constants above instead.

**Fonts load from Google Fonts' CDN at runtime** (`tokens/fonts.css`'s `@import`) — Barlow, Barlow Condensed (weights 300/400/900), and EB Garamond (for `BookSpread`, which defaults to it via its own `fontFamily` prop). No local font files ship; nothing else to wire up.

**Where the truth lives:** `styles.css` is the entry point — it `@import`s `tokens/fonts.css` (fonts), `tokens/layout.css` (the structural rules above), and `tokens/tokens.css` (a Tailwind v4 `@theme` block consumed only by the live site's own Tailwind build — inert as plain CSS here, safely ignored). Each component's `.prompt.md` documents its own props.

**Example — composing a small article header from primitives:**

```tsx
import { Heading, Label, Rule, INK, SANS } from 'sympathetic-ds';

function ArticleHeader() {
  return (
    <div>
      <Label>FIELD NOTES / 042</Label>
      <Heading as="h1" style={{ marginTop: '0.5rem' }}>
        Frame After Frame
      </Heading>
      <p style={{ fontFamily: SANS, color: INK, fontSize: '14px', marginTop: '0.75rem' }}>
        A short deck line in the body typeface.
      </p>
      <Rule style={{ marginTop: '1.5rem' }} />
    </div>
  );
}
```
