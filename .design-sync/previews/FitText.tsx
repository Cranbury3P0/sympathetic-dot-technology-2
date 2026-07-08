import { FitText, CONDENSED } from "sympathetic-ds";

/**
 * Hero headline that scales to fill its container's width exactly —
 * the systems page uses this for its "SYSTEMS" section title.
 */
export function Default() {
  return (
    <div style={{ width: 480, padding: "0 0.2rem" }}>
      <FitText
        text="SYSTEMS"
        style={{
          fontFamily: CONDENSED,
          fontWeight: 900,
          lineHeight: 0.88,
          letterSpacing: "-0.02em",
          textTransform: "uppercase",
        }}
      />
    </div>
  );
}
