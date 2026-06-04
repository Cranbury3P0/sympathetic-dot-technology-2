// cspell:disable
// Intentional spelling variants in this file — do not autocorrect:
//   Amanuesis   (dropped n — the self-enacting slip, p.xiv first line)
//   Amanuensis  (correct dictionary spelling, p.xiv provenance ¶1)
//   Amaneunsis  (transposed vowels, p.xiv provenance ¶2)
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { EB_Garamond } from "next/font/google";
import {
  BookSpread,
  bookBodyStyle,
  bookExtractStyle,
  bookHeadingStyle,
  bookSignatureStyle,
} from "@/components/BookSpread";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

/* ── TOKENS ── */

const RULE = "1px solid #0A0A0A";
const BARLOW = "var(--font-barlow), sans-serif";
const CONDENSED = "var(--font-barlow-condensed), sans-serif";
const BG = "#F0EDE6";
const GARAMOND = `${ebGaramond.style.fontFamily}, "Hoefler Text", "Iowan Old Style", "Palatino Linotype", Palatino, "Book Antiqua", Georgia, serif`;
const PAPER = "#f2ecdc";
const INK = "#2b261c";
const INK_SOFT = "#3a3327";

const NAV_ITEMS = ["SYSTEMS", "FIELD NOTES", "WORK", "VERBATIM", "ABOUT", "CONTACT", "CLIENT LOGIN"];

const NAV_STYLE: React.CSSProperties = {
  fontFamily: BARLOW,
  fontSize: "0.7rem",
  fontWeight: 500,
  letterSpacing: "0.12em",
  color: "#0A0A0A",
  textDecoration: "none",
};

/* ── POEM SPREAD — pp. 67–68 ── */
// Uses BookSpread with Georgia (poem pages carry a different voice
// from the Garamond front matter — intentional typographic contrast).

function PoemSpread() {
  const POEM_FONT = `Georgia, "Times New Roman", serif`;

  const p: React.CSSProperties = {
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
          <h1 style={{ margin: "0 0 4px", fontSize: "33px", fontWeight: 400, letterSpacing: "0.01em", fontFamily: POEM_FONT, color: "#111" }}>Amanuensis</h1>
          <p style={{ ...p, fontStyle: "italic", marginTop: 0 }}>for Enid Lockerbie</p>

          <p style={p}>The table is three feet wide,<br /><span style={{ paddingLeft: "1.2em" }}>or twenty years of winter preserved beneath varnish.</span></p>

          <p style={p}>We point at a sweater and call it evidence of gravity,<br />as though wool had not already traveled farther than we have<br />and in twice the weather.</p>

          <p style={p}>Everything carries an owl.<br />Like a lantern, hooded.<br />Persistent.<br />Impossible to know.</p>

          <p style={p}>The words refuse to be accounted for.<br />Away without leave.<br />Just gone.</p>

          <p style={p}>Beneath the north side of a pear,<br />the figures continue perfectly well without us.</p>

          <p style={p}>A spiral of lichen releases its pale, colorless signal<br />toward the hole at the center of a star.</p>

          <p style={p}>To say there is no reply<br />is to say nothing at all.<br />An insouciant yawn.</p>

          <p style={{ ...p, marginBottom: 0 }}>The hand reaches outward with<br />fingers like automobiles<br />crashed at the light.</p>
        </div>
      }
      rightContent={
        <div style={{ marginTop: "72px" }}>
          <p style={p}>The fern unfolds without it.</p>

          <p style={p}>Both are convinced of something<br />the way termites are convinced of wood.</p>

          <p style={p}>We name a bird.<br />The bird continues.</p>

          <p style={p}>We name each other,<br />then spend years with this sickly taste of eternity,</p>

          <p style={p}>like honey<br />on our lips.</p>

          <p style={p}>Not failure necessarily.<br />Not exile by definition.</p>

          <p style={p}>Hillsides.<br />Lake bottoms.</p>

          <p style={p}>A whale crossing midnight fields<br />asleep, dreaming.</p>

          <p style={p}>The kitchen floor is no longer visible,<br />to any but the children<br />whose lantern is set ablaze.</p>

          <p style={{ ...p, marginBottom: 0 }}>The galaxy declines comment<br />Shows itself out.</p>
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

/* ── FRONT MATTER SPREAD — pp. xiii–xiv ── */
// Spelling lock: spellCheck={false} — three intentional title variants:
//   Amanuesis   (dropped n — the self-enacting slip, p.xiv first line)
//   Amanuensis  (correct dictionary spelling, p.xiv provenance ¶1)
//   Amaneunsis  (transposed vowels, p.xiv provenance ¶2)

function FrontMatterSpread() {
  const p = bookBodyStyle(GARAMOND);
  // Slightly larger body size for front-matter prose
  const pStyle: React.CSSProperties = { ...p, fontSize: "17.2px" };

  return (
    <BookSpread
      leftPageNumber="xiii"
      rightPageNumber="xiv"
      leftContent={
        <>
          {/* "dance under" preserved verbatim */}
          <p style={pStyle}>though to my knowledge nobody had adequately explained the whereabouts of the goat.</p>

          <p style={pStyle}>Michael, Horace, Anne, and the other poets were drinking in the yard under the big oak tree and the sun was finally setting. It was a warm night in early summer and the evenings had not yet become the oppressive, thick, sleepless haze of August. There was a sweet smell of jasmine in the air and much laughter. Soon we would dance under a string of electric lights gathered from a shed that lurked in a corner of the yard. It had a red door that leaned off its hinges and smelled of motor oil and wood rot.</p>

          <p style={pStyle}>Someone brought out a record player and put on some Dylan. A new record, and not one that I remember hearing before.</p>

          <p style={pStyle}>Horace, I think, said that Dylan was speaking a new language. It was like a secret whistle and only a few people could hear it.</p>

          <p style={pStyle}>The other poets booed Horace and they all laughed again. I heard the names Woody Guthrie and Sister Rosetta Tharpe, and for a moment the poets harmonized an old spiritual I recalled from my own youth, when my mother would take my sister and me to Bible school on the weekends.</p>

          <p style={pStyle}>Olivia sat in a lawn chair beneath the lights and smoked cigarettes. She laughed and sang along and booed Horace with vigor. She looked fragile then, it seems now, though I doubt she would have tolerated the observation.</p>

          <p style={pStyle}>We could not have known what would happen only a few nights hence in that hotel room in Newark, or how Jim would hang for it, by his own hand as the newspapers would report, in an empty barn three states away.</p>

          <p style={pStyle}>That night was the last night that we had together. None of us knew it. How could we? Years later, when Olivia&#8217;s journals surfaced, I found myself returning to a line from her poem <i>Dreams of Alabaster</i> that I could not remember reading before that summer, though perhaps I simply failed to recognize it.</p>

          {/* Indented verse line — italic, left-aligned, hyphens off */}
          <p style={{ ...bookExtractStyle(GARAMOND), fontSize: "17.2px", paddingLeft: "1.4em" }}>
            &#8220;&#8230; winter is our truest desire, to be lost under the moon, alone, none of us, even alive.&#8221;
          </p>

          {/* Wingspan signature — left-aligned */}
          <div style={bookSignatureStyle("left", GARAMOND)}>
            <div>Thomas Wingspan</div>
            <div style={{ fontStyle: "italic" }}>February 2026</div>
            <div>Dearborn, Michigan</div>
          </div>
        </>
      }
      rightContent={
        <>
          {/* Section heading */}
          <p style={{ ...bookHeadingStyle(GARAMOND), fontSize: "20px", marginBottom: "1.4em" }}>
            Note to the Corrected Edition
          </p>

          {/* SPELLING LOCK: "Amanuesis" — dropped n, self-enacting slip, intentional */}
          <p style={pStyle}>This edition of <i>Amanuesis</i> restores the original spelling of the title poem and corrects an error that has persisted through several previous editions.</p>

          {/* "nevertheless" preserved verbatim */}
          {/* SPELLING LOCK: "Amanuensis" = correct; "Amaneunsis" = transposed vowels, both intentional */}
          <p style={pStyle}>The provenance of the mistake appears to trace back to June 1956, when an excerpt of the poem was published in the <i>Cincinnati Enquirer</i> alongside a brief interview with Olivia Richards. In that publication, the title appeared as both <i>Amanuensis</i> and <i>Amaneunsis</i>.</p>

          <p style={pStyle}>The discrepancy subsequently found its way into the first printing of the collection itself, which likewise contained both spellings.</p>

          <p style={pStyle}>Curiously, although the original volume preserved the inconsistency, nearly all later editions resolved the matter in the wrong direction. Editors, printers, and cataloguers aligned the title of the poem to the title of the book, thereby reproducing the error with increasing confidence over successive decades.</p>

          <p style={pStyle}>The present edition follows Richards&#8217; own usage in manuscript and correspondence, as well as the spelling appearing in the majority of surviving typescripts.</p>

          <p style={pStyle}>Richards herself seems to have regarded the matter with characteristic indifference. In a letter to Enid Lockerbie dated 14 October 1957, she wrote:</p>

          {/* Lockerbie extract — indented block */}
          <p style={{ ...bookExtractStyle(GARAMOND), fontSize: "17.2px" }}>
            &#8220;The little book was really more of a pamphlet, soft as the wings of a bird, and it was beautiful and fragile as one, too. The errors of spelling don&#8217;t concern me in the least. Let the flightless ones pluck at those rocks.&#8221;
          </p>

          <p style={pStyle}>Whether the line was intended as a dismissal of textual scholarship, a private joke, or a further invitation to confusion remains unclear.</p>

          {/* "nevertheless" — preserved verbatim */}
          <p style={{ ...pStyle, marginTop: "1.1em" }}>Satellite Editions has nevertheless elected to restore the title poem to its original form.</p>

          <p style={pStyle}>The caretakers of the various aviaries involved report that no birds have flown.</p>

          {/* Kirkland signature — right-aligned */}
          <div style={bookSignatureStyle("right", GARAMOND)}>
            <div>Ronald Kirkland</div>
            <div style={{ fontStyle: "italic" }}>Editor-in-Chief</div>
            <div>Satellite Editions</div>
          </div>
        </>
      }
    />
  );
}

/* ── PAGE ── */

export default function AmanuensisPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div style={{ background: BG, minHeight: "100vh", fontFamily: BARLOW }}>

      {/* ── NAV ── */}
      <nav style={{ borderBottom: RULE, padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "44px" }}>
        <Link href="/" style={{ ...NAV_STYLE, fontWeight: 700, letterSpacing: "0.06em" }}>
          SYMPATHETIC TECHNOLOGY
        </Link>
        <div className="nav-links">
          {NAV_ITEMS.map((item) => {
            const href =
              item === "SYSTEMS" ? "/systems" :
              item === "FIELD NOTES" ? "/field-notes" :
              item === "VERBATIM" ? "/verbatim" :
              item === "CLIENT LOGIN" ? "/client" : "#";
            return (
              <Link key={item} href={href} style={{ ...NAV_STYLE, fontWeight: item === "VERBATIM" ? 700 : 500, borderBottom: item === "VERBATIM" ? RULE : "none", paddingBottom: item === "VERBATIM" ? "2px" : "0" }}>
                {item}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* ── BREADCRUMB ── */}
      <div style={{ borderBottom: RULE, padding: "0.6rem 1.5rem", display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <Link href="/verbatim" style={{ fontFamily: BARLOW, fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.12em", color: "#888", textDecoration: "none", textTransform: "uppercase" }}>
          Verbatim
        </Link>
        <span style={{ fontFamily: BARLOW, fontSize: "0.65rem", color: "#888" }}>→</span>
        <span style={{ fontFamily: BARLOW, fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.12em", color: "#0A0A0A", textTransform: "uppercase" }}>
          Satellite Editions
        </span>
        <span style={{ fontFamily: BARLOW, fontSize: "0.65rem", color: "#888" }}>→</span>
        <span style={{ fontFamily: BARLOW, fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.12em", color: "#0A0A0A", textTransform: "uppercase" }}>
          Amanuensis
        </span>
      </div>

      {/* ── HERO: COVER + DETAILS ── */}
      <div className="am-hero">

        {/* Left: book cover */}
        <div className="am-hero-cover">
          <div style={{ position: "relative", width: "100%", maxWidth: "340px", aspectRatio: "2/3" }}>
            <Image
              src="/AMANEUNSIS_FINAL.png"
              alt="Amanuensis by Olivia Richards — Satellite Editions"
              fill
              style={{ objectFit: "contain", mixBlendMode: "multiply" }}
            />
          </div>
        </div>

        {/* Right: publication details */}
        <div className="am-hero-details">

          <h1 style={{ fontFamily: CONDENSED, fontWeight: 900, fontSize: "clamp(3rem, 6vw, 5.5rem)", lineHeight: 0.92, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#0A0A0A", margin: "0 0 0.75rem" }}>
            AMANUENSIS
          </h1>

          <p style={{ fontFamily: BARLOW, fontSize: "1.25rem", fontWeight: 300, fontStyle: "italic", color: "#0A0A0A", margin: "0 0 2rem" }}>
            Olivia Richards
          </p>

          <div style={{ borderTop: RULE, paddingTop: "1rem", marginBottom: "1.5rem" }}>
            <p style={{ fontFamily: BARLOW, fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#0A0A0A", margin: "0 0 0.2rem" }}>
              Satellite Editions Poetry Series
            </p>
            <p style={{ fontFamily: BARLOW, fontSize: "0.68rem", fontWeight: 400, letterSpacing: "0.12em", color: "#555", margin: "0 0 0.2rem" }}>
              PUB-2026-P01
            </p>
            <p style={{ fontFamily: BARLOW, fontSize: "0.68rem", fontWeight: 400, letterSpacing: "0.1em", color: "#555", margin: 0 }}>
              First Edition
            </p>
          </div>

          <div style={{ borderTop: RULE, paddingTop: "1.25rem", marginBottom: "1.75rem" }}>
            <p style={{ fontFamily: BARLOW, fontSize: "1rem", fontWeight: 300, fontStyle: "italic", color: "#0A0A0A", margin: "0 0 0.5rem", lineHeight: 1.5 }}>
              "A blessing and a riot."
            </p>
            <p style={{ fontFamily: BARLOW, fontSize: "0.75rem", fontWeight: 400, color: "#555", margin: 0, lineHeight: 1.5 }}>
              — Thomas Wingspan,<br />
              <em>author of Trauma is the Passcode.</em>
            </p>
          </div>

          <div style={{ borderTop: RULE, paddingTop: "1.25rem" }}>
            <p style={{ fontFamily: BARLOW, fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: "#0A0A0A", margin: "0 0 1rem" }}>
              <em>Amanuesis</em> is the newly corrected and authoritative reprinting of the debut collection of Olivia Richards, originally issued in a pamphlet edition of 300 copies by the Freedom Collective of Ohio in 1956.
            </p>
            <p style={{ fontFamily: BARLOW, fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: "#0A0A0A", margin: "0 0 1rem" }}>
              The collection survives despite a famously tangled publication history involving variant spellings, incomplete records, and an unusual editorial tradition that continues into the present edition.
            </p>
            <p style={{ fontFamily: BARLOW, fontSize: "1rem", fontWeight: 300, lineHeight: 1.75, color: "#0A0A0A", margin: 0 }}>
              This printing restores the title poem to its original form while preserving the textual history surrounding the work.
            </p>
          </div>

        </div>
      </div>

      {/* ── FROM THE TITLE POEM ── */}
      <div style={{ borderBottom: RULE }}>
        <div style={{ borderBottom: RULE, padding: "0.75rem 1.5rem" }}>
          <span style={{ fontFamily: BARLOW, fontSize: "1.3rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#0A0A0A" }}>
            The Title Poem
          </span>
        </div>
        <PoemSpread />
      </div>

      {/* ── FRONT MATTER SPREAD — pp. xiii–xiv ── */}
      <div style={{ borderBottom: RULE }}>
        <div style={{ borderBottom: RULE, padding: "0.75rem 1.5rem" }}>
          <span style={{ fontFamily: BARLOW, fontSize: "1.3rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#0A0A0A" }}>
            Final Page of Thomas Wingspan&#8217;s Introduction and Ronald Kirkland&#8217;s Editorial Note
          </span>
        </div>
        <FrontMatterSpread />
      </div>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: "rgba(10,10,10,0.92)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "zoom-out", padding: "2rem",
          }}
        >
          <img
            src={lightbox}
            alt="Enlarged view"
            style={{ maxWidth: "90vw", maxHeight: "90vh", width: "auto", height: "auto", display: "block" }}
          />
        </div>
      )}

      {/* ── EDITION DETAILS ── */}
      <div>
        <div style={{ borderBottom: RULE, padding: "0.75rem 1.5rem" }}>
          <span style={{ fontFamily: BARLOW, fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "#0A0A0A" }}>
            Edition Details
          </span>
        </div>
        <div className="am-edition-grid">
          {[
            { label: "Format", lines: ["Perfect Bound", "144 pages", "Cream uncoated stock", "Offset printed"] },
            { label: "Series", lines: ["Satellite Editions", "Poetry Series"] },
            { label: "Publication Code", lines: ["PUB-2026-P01"] },
            { label: "Status", lines: ["Corrected Edition", "In Print"] },
          ].map((col, i) => (
            <div key={col.label} style={{ padding: "1.75rem 1.5rem", borderRight: i < 3 ? RULE : "none" }}>
              <p style={{ fontFamily: BARLOW, fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#888", margin: "0 0 0.6rem" }}>
                {col.label}
              </p>
              {col.lines.map((line, j) => (
                <p key={j} style={{ fontFamily: BARLOW, fontSize: "0.82rem", fontWeight: 300, lineHeight: 1.6, color: "#0A0A0A", margin: 0 }}>
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
