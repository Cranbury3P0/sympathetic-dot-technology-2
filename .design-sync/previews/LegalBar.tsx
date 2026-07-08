import { LegalBar } from "sympathetic-ds";

/** Standard footer strip — used as-is across every page. */
export function Default() {
  return <LegalBar />;
}

/** Custom copyright / links / credit text. */
export function CustomLinks() {
  return (
    <LegalBar
      copyrightText="© SATELLITE EDITIONS"
      links={[
        { label: "PRIVACY", href: "#" },
        { label: "CONTACT", href: "#" },
      ]}
      siteByText="SITE BY SYMPATHETIC"
    />
  );
}
