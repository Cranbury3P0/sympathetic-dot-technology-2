import { Rule } from "sympathetic-ds";

/** Full-width divider — the default orientation. */
export function Horizontal() {
  return <Rule />;
}

/** Vertical divider, used between adjacent columns. */
export function Vertical() {
  return (
    <div style={{ height: 120, display: "flex" }}>
      <Rule orientation="vertical" />
    </div>
  );
}
