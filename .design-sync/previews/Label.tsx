import { Label } from "sympathetic-ds";

/** Eyebrow label as a span (the default). */
export function Default() {
  return <Label>ARCHIVE STATUS</Label>;
}

/** Rendered as a block-level element via the `as` prop. */
export function AsDiv() {
  return <Label as="div">VIBES</Label>;
}
