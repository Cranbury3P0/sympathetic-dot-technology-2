import {
  BookSpread,
  bookBodyStyle,
  bookExtractStyle,
  bookHeadingStyle,
  bookSignatureStyle,
} from "sympathetic-ds";

/** Front-matter spread: running prose, an indented extract, and a signature block. */
export function Default() {
  const p = bookBodyStyle();
  const pStyle = { ...p, fontSize: "17.2px" };

  return (
    <BookSpread
      leftPageNumber="xiii"
      rightPageNumber="xiv"
      leftContent={
        <>
          <p style={pStyle}>
            Michael, Horace, Anne, and the other poets were drinking in the yard under the big oak tree and the sun was finally setting. It was a warm night in early summer and the evenings had not yet become the oppressive, thick, sleepless haze of August.
          </p>
          <p style={pStyle}>
            Someone brought out a record player and put on some Dylan. A new record, and not one that I remember hearing before.
          </p>
          <p style={{ ...bookExtractStyle(), fontSize: "17.2px", paddingLeft: "1.4em" }}>
            &#8220;&#8230; winter is our truest desire, to be lost under the moon, alone, none of us, even alive.&#8221;
          </p>
          <div style={bookSignatureStyle("left")}>
            <div>Thomas Wingspan</div>
            <div style={{ fontStyle: "italic" }}>February 2026</div>
            <div>Dearborn, Michigan</div>
          </div>
        </>
      }
      rightContent={
        <>
          <p style={{ ...bookHeadingStyle(), fontSize: "20px", marginBottom: "1.4em" }}>
            Note to the Corrected Edition
          </p>
          <p style={pStyle}>
            This edition restores the original spelling of the title poem and corrects an error that has persisted through several previous editions.
          </p>
          <p style={pStyle}>
            The discrepancy subsequently found its way into the first printing of the collection itself, which likewise contained both spellings.
          </p>
          <div style={bookSignatureStyle("right")}>
            <div>Ronald Kirkland</div>
            <div style={{ fontStyle: "italic" }}>Editor-in-Chief</div>
            <div>Satellite Editions</div>
          </div>
        </>
      }
    />
  );
}

/** Poem spread — a different typeface (Georgia) for a distinct editorial voice. */
export function PoemSpread() {
  const POEM_FONT = `Georgia, "Times New Roman", serif`;
  const p = {
    margin: "0 0 26px",
    fontSize: "18px",
    lineHeight: 1.55,
    fontFamily: POEM_FONT,
    color: "#111",
  };

  return (
    <BookSpread
      fontFamily={POEM_FONT}
      leftPageNumber={67}
      rightPageNumber={68}
      leftContent={
        <div style={{ marginTop: "24px" }}>
          <h1 style={{ margin: "0 0 4px", fontSize: "33px", fontWeight: 400, letterSpacing: "0.01em", fontFamily: POEM_FONT, color: "#111" }}>
            Amanuensis
          </h1>
          <p style={{ ...p, fontStyle: "italic", marginTop: 0 }}>for Enid Lockerbie</p>
          <p style={p}>
            The table is three feet wide,<br />
            <span style={{ paddingLeft: "1.2em" }}>or twenty years of winter preserved beneath varnish.</span>
          </p>
          <p style={p}>
            Everything carries an owl.<br />Like a lantern, hooded.<br />Persistent.<br />Impossible to know.
          </p>
        </div>
      }
      rightContent={
        <div style={{ marginTop: "72px" }}>
          <p style={p}>The fern unfolds without it.</p>
          <p style={p}>We name a bird.<br />The bird continues.</p>
          <p style={p}>
            A whale crossing midnight fields<br />asleep, dreaming.
          </p>
        </div>
      }
      rightFooter={
        <span style={{ display: "flex", justifyContent: "space-between", width: "100%", fontFamily: POEM_FONT, color: "#111", fontSize: "12px", letterSpacing: "0.26em" }}>
          <span>OLIVIA RICHARDS</span>
          <span>SATELLITE EDITIONS</span>
        </span>
      }
    />
  );
}
