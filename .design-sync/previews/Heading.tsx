import { Heading } from "sympathetic-ds";

/** Section headline (h1) — condensed, 900 weight, uppercase. */
export function H1() {
  return <Heading as="h1">Systems</Heading>;
}

/** Subsection headline (h2). */
export function H2() {
  return <Heading as="h2">Field Notes</Heading>;
}

/** Minor headline (h3). */
export function H3() {
  return <Heading as="h3">Verbatim</Heading>;
}
