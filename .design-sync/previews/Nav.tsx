import { Nav } from "sympathetic-ds";

/** Homepage usage — plain wordmark, no active item, no logo link. */
export function Default() {
  return <Nav />;
}

/** Site variant with an active section and a linked wordmark. */
export function SiteWithActiveItem() {
  return <Nav activeItem="SYSTEMS" logoHref="/" />;
}

/** The shorter 44px "verbatim" variant. */
export function VerbatimVariant() {
  return <Nav variant="verbatim" activeItem="VERBATIM" logoHref="/" />;
}
