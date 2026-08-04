"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Nav, LegalBar } from "sympathetic-ds";

/* ── GEOLOCATION + CLOCK ── */

type GeoState = {
  lat: number;
  lng: number;
  timezone: string;
  ready: boolean;
};

type LocationState = {
  city: string;
  country: string;
} | null;

type ConditionsState = {
  temperature: number;
  weatherCode: number;
  windSpeed: number;
  windDirection: number;
  sunset: string;
} | null;

type OpenMeteoResponse = {
  current?: {
    temperature_2m?: number;
    weather_code?: number;
    wind_speed_10m?: number;
    wind_direction_10m?: number;
  };
  daily?: {
    sunset?: string[];
  };
};

const DEFAULT_LAT = 49.2827;
const DEFAULT_LNG = -123.1207;

function formatCoord(deg: number, pos: string, neg: string): string {
  const dir = deg >= 0 ? pos : neg;
  return `${Math.abs(deg).toFixed(4)}° ${dir}`;
}

function compassPoint(degrees: number): string {
  const points = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  return points[Math.round(degrees / 22.5) % points.length];
}

function weatherLabel(code: number): string {
  if (code === 0) return "CLEAR";
  if (code === 1) return "MAINLY CLEAR";
  if (code === 2) return "PARTLY CLOUDY";
  if (code === 3) return "OVERCAST";
  if (code === 45 || code === 48) return "FOG";
  if (code >= 51 && code <= 57) return "DRIZZLE";
  if (code >= 61 && code <= 67) return "RAIN";
  if (code >= 71 && code <= 77) return "SNOW";
  if (code >= 80 && code <= 82) return "SHOWERS";
  if (code === 85 || code === 86) return "SNOW SHOWERS";
  if (code >= 95) return "THUNDERSTORM";
  return "VARIABLE";
}

function formatLocalTime(isoLocalTime: string): string {
  const time = isoLocalTime.split("T")[1];
  if (!time) return "/";
  const [hours, minutes] = time.split(":").map(Number);
  if (!Number.isFinite(hours) || !Number.isFinite(minutes)) return "/";
  return new Date(2000, 0, 1, hours, minutes).toLocaleTimeString("en-CA", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function orientationFrom(lat: number, lng: number) {
  const toRadians = (value: number) => (value * Math.PI) / 180;
  const studioLat = toRadians(DEFAULT_LAT);
  const studioLng = toRadians(DEFAULT_LNG);
  const visitorLat = toRadians(lat);
  const visitorLng = toRadians(lng);
  const deltaLat = studioLat - visitorLat;
  const deltaLng = studioLng - visitorLng;

  const haversine =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(visitorLat) * Math.cos(studioLat) * Math.sin(deltaLng / 2) ** 2;
  const distance = 6371 * 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));

  const y = Math.sin(deltaLng) * Math.cos(studioLat);
  const x =
    Math.cos(visitorLat) * Math.sin(studioLat) -
    Math.sin(visitorLat) * Math.cos(studioLat) * Math.cos(deltaLng);
  const bearing = (Math.atan2(y, x) * 180) / Math.PI;
  const normalizedBearing = (bearing + 360) % 360;

  return {
    bearing: Math.round(normalizedBearing),
    compass: compassPoint(normalizedBearing),
    distance: Math.round(distance),
  };
}

function useGeoAndTime() {
  const [geo, setGeo] = useState<GeoState>({
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
    timezone: "America/Vancouver",
    ready: false,
  });
  const [location, setLocation] = useState<LocationState>(null);
  const [conditions, setConditions] = useState<ConditionsState>(null);
  const [time, setTime] = useState("");

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

    function resolveLocation(lat: number, lng: number) {
      fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`)
        .then((res) => res.json())
        .then((data) => {
          const admin: Array<{ name: string; adminLevel?: number }> | undefined = data.localityInfo?.administrative;
          const cityLevel = admin?.find((a) => a.adminLevel === 8)?.name;
          const city = cityLevel || data.city || data.locality;
          const country = data.countryName;
          if (city && country) setLocation({ city, country });
        })
        .catch(() => {});
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setGeo({ lat: latitude, lng: longitude, timezone: tz, ready: true });
          resolveLocation(latitude, longitude);
        },
        () => {
          setGeo((g) => ({ ...g, timezone: tz, ready: true }));
          resolveLocation(DEFAULT_LAT, DEFAULT_LNG);
        }
      );
    } else {
      setGeo((g) => ({ ...g, timezone: tz, ready: true }));
      resolveLocation(DEFAULT_LAT, DEFAULT_LNG);
    }
  }, []);

  useEffect(() => {
    if (!geo.ready) return;
    function tick() {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-CA", {
          timeZone: geo.timezone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [geo.ready, geo.timezone]);

  useEffect(() => {
    if (!geo.ready) return;
    const controller = new AbortController();
    const params = new URLSearchParams({
      latitude: String(geo.lat),
      longitude: String(geo.lng),
      current: "temperature_2m,weather_code,wind_speed_10m,wind_direction_10m",
      daily: "sunset",
      timezone: "auto",
      forecast_days: "1",
    });

    fetch(`https://api.open-meteo.com/v1/forecast?${params}`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("Weather request failed");
        return res.json() as Promise<OpenMeteoResponse>;
      })
      .then((data) => {
        const current = data.current;
        const sunset = data.daily?.sunset?.[0];
        if (
          typeof current?.temperature_2m === "number" &&
          typeof current.weather_code === "number" &&
          typeof current.wind_speed_10m === "number" &&
          typeof current.wind_direction_10m === "number" &&
          sunset
        ) {
          setConditions({
            temperature: current.temperature_2m,
            weatherCode: current.weather_code,
            windSpeed: current.wind_speed_10m,
            windDirection: current.wind_direction_10m,
            sunset,
          });
        }
      })
      .catch((error: unknown) => {
        if (!(error instanceof DOMException && error.name === "AbortError")) setConditions(null);
      });

    return () => controller.abort();
  }, [geo.lat, geo.lng, geo.ready]);

  return { geo, time, location, conditions };
}

/* ── FIT TEXT ── */

function FitText({ text, style }: { text: string; style: React.CSSProperties }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const fit = () => {
      const container = containerRef.current;
      const el = textRef.current;
      if (!container || !el) return;
      // Temporarily go absolute so the element shrinks to intrinsic text width
      el.style.fontSize = "100px";
      el.style.position = "absolute";
      const textWidth = el.getBoundingClientRect().width;
      el.style.position = "";
      const ratio = container.offsetWidth / textWidth;
      el.style.fontSize = `${100 * ratio}px`;
    };
    // Wait for fonts before first measurement
    document.fonts.ready.then(fit);
    const ro = new ResizeObserver(fit);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", overflow: "hidden" }}>
      <h1 ref={textRef} style={{ ...style, whiteSpace: "nowrap", margin: 0 }}>
        {text}
      </h1>
    </div>
  );
}

/* ── DATA ── */

const NAV_ITEMS = ["SYSTEMS", "FIELD NOTES", "WORK", "VERBATIM", "ABOUT", "CONTACT"];

const SECTIONS = [
  { label: "A", title: "WORK", descriptor: "Selected projects in research, strategy, infrastructure, and design." },
  { label: "B", title: "FIELD NOTES", descriptor: "Essays and observations on technology, governance, publishing, and cultural change." },
  { label: "C", title: "CONTROLLED INTELLIGENCE", descriptor: "Governed AI infrastructure under organizational control." },
  { label: "D", title: "MERIDIAN FRAMEWORK", descriptor: "Architecture for Organizational Intelligence" },
  { label: "E", title: "RESONANCE ENGINE", descriptor: "Process architecture for continuity in creative work." },
  { label: "F", title: "HARVARD CAPSTONE", descriptor: "Capstone project from Harvard Medical School's Executive Education program." },
  { label: "G", title: "VERBATIM LEARNING", descriptor: "Speaking and workshops on AI, organizations, and creative work." },
  { label: "H", title: "ABOUT", descriptor: "Background, philosophy, and the studio behind the work." },
];

const FEATURE_CARDS = [
  {
    title: "CONTROLLED INTELLIGENCE",
    href: "/controlled-intelligence",
    image: "/controlled-intelligence-architecture.png",
    alt: "Architectural diagram of a governed intelligence environment.",
    description:
      "Controlled Intelligence gives organizations a governed environment for working with AI on their own terms. Institutional knowledge remains inside infrastructure they control, guided by policies they write and boundaries they can audit. Staff can investigate, draft, compare, and learn safely without surrendering sensitive information or organizational accountability to consumer platforms.",
  },
  {
    title: "MERIDIAN FRAMEWORK",
    href: "/meridian",
    image: "/meridian-architecture.png",
    alt: "Architectural diagram of organizational knowledge, judgment, and voice in alignment.",
    description:
      "Meridian aligns an organization’s knowledge, experienced judgment, and public voice into one coherent conversational resource. It connects authoritative documents with the reasoning people use in practice, preserving provenance and context. The result helps teams answer questions consistently, explain decisions clearly, and learn from recurring needs across the entire organization today.",
  },
  {
    title: "RESONANCE ENGINE",
    href: "/resonance",
    image: "/resonance-architecture.png",
    alt: "Architectural diagram of a continuous creative process supported by memory and revision.",
    description:
      "Resonance preserves continuity across the full lifecycle of creative work. Observations, conversations, revisions, decisions, and memory remain connected between meetings and across time. Teams can return to a project without reconstructing its context, supporting deliberate refinement, stronger collaboration, and a process that naturally retains its shape as the work evolves.",
  },
];

/* ── SHARED STYLE TOKENS ── */

const RULE = "1px solid #0A0A0A";
const BARLOW = "var(--font-barlow), sans-serif";
const CONDENSED = "var(--font-barlow-condensed), sans-serif";

const NAV_STYLE: React.CSSProperties = {
  fontFamily: BARLOW,
  fontWeight: 500,
  fontSize: "14px",
  letterSpacing: "0.08em",
  lineHeight: 1,
  textTransform: "uppercase",
  textDecoration: "none",
  color: "#0A0A0A",
  whiteSpace: "nowrap",
};

const META_LABEL: React.CSSProperties = {
  fontFamily: BARLOW,
  fontWeight: 600,
  fontSize: "11px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  marginBottom: "0.5rem",
};

const META_VALUE: React.CSSProperties = {
  fontFamily: BARLOW,
  fontWeight: 500,
  fontSize: "20px",
};

/* ── COMPONENT ── */

export default function Home() {
  const { geo, time, location, conditions } = useGeoAndTime();

  const orientation = geo.ready ? orientationFrom(geo.lat, geo.lng) : null;

  const tzLabel = geo.ready
    ? new Intl.DateTimeFormat("en", { timeZoneName: "short", timeZone: geo.timezone })
        .formatToParts(new Date())
        .find((p) => p.type === "timeZoneName")?.value ?? geo.timezone
    : "/";

  return (
    <main style={{ backgroundColor: "#F0EDE6", color: "#0A0A0A", fontFamily: BARLOW, minHeight: "100vh", margin: 0 }}>

      {/* ── NAV ── */}
      <Nav />

      {/* ── PRE-HERO METADATA ── */}
      <div className="pre-hero" style={{ padding: "1.5rem 1.5rem 0" }}>
        <div style={{ fontFamily: BARLOW, fontWeight: 500, fontSize: "15px", letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 1.55 }}>
          Sean Cranbury, Principal
          <br />
          Vancouver, Canada
          <br />
          ORGANIZATIONAL DEVELOPMENT / KNOWLEDGE ARCHITECTURE / COMMUNICATIONS / BOOKS & PUBLISHING
          <br />
          EST. 2009
          <br />
          <span style={{ display: "block", marginTop: "0.4rem" }}>/</span>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="home-brand-lockup">
        <FitText
          text="SYMPATHETIC"
          style={{
            fontFamily: CONDENSED,
            fontWeight: 900,
            lineHeight: 0.88,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
          }}
        />
        <div className="home-studio-statement">
          <p>
            An integrated West Coast studio for technology, organizational development, and project strategy. We help nonprofit organizations, businesses, and individuals understand where they are, clarify where they want to be, and chart a confident course toward a sustainable and prosperous future.
          </p>
        </div>
      </section>

      {/* ── FOOTER METADATA STRIP ── */}
      <footer className="footer-grid" style={{ marginTop: "1rem" }}>
        <div>
          <div style={META_LABEL}>AVAILABILITY</div>
          <div style={META_VALUE}>OPEN</div>
        </div>

        <div>
          <div style={META_LABEL}>VIBES</div>
          <div style={META_VALUE}>GOOD</div>
        </div>

        <div>
          <div style={META_LABEL}>DESTINATION</div>
          <div style={META_VALUE}>CLEAR</div>
        </div>

        <div>
          <div style={META_LABEL}>LOCATION</div>
          <div style={{ ...META_VALUE, lineHeight: 1.4 }}>
            {location ? <>{location.city.toUpperCase()},<br />{location.country.toUpperCase()}</> : "/"}
          </div>
          {geo.ready && (
            <div style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "11px", lineHeight: 1.45, letterSpacing: "0.04em", marginTop: "0.35rem", textTransform: "uppercase", fontVariantNumeric: "tabular-nums" }}>
              {formatCoord(geo.lat, "N", "S")}<br />{formatCoord(geo.lng, "E", "W")}
            </div>
          )}
        </div>

        <div>
          <div style={META_LABEL}>CONDITIONS</div>
          <div style={{ ...META_VALUE, lineHeight: 1.4 }}>
            {conditions ? <>{Math.round(conditions.temperature)}°C<br />{weatherLabel(conditions.weatherCode)}</> : "/"}
          </div>
          {conditions && (
            <div style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "11px", letterSpacing: "0.06em", marginTop: "0.35rem", textTransform: "uppercase" }}>
              WIND {compassPoint(conditions.windDirection)} {Math.round(conditions.windSpeed)} KM/H
            </div>
          )}
        </div>

        <div>
          <div style={META_LABEL}>BEARING</div>
          <div style={{ ...META_VALUE, lineHeight: 1.4, fontVariantNumeric: "tabular-nums" }}>
            {orientation ? <>{orientation.bearing}°<br />{orientation.compass}</> : "/"}
          </div>
          {orientation && (
            <div style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "11px", letterSpacing: "0.04em", marginTop: "0.35rem", textTransform: "uppercase", fontVariantNumeric: "tabular-nums" }}>
              {orientation.distance.toLocaleString("en-CA")} KM TO VANCOUVER
            </div>
          )}
        </div>

        <div>
          <div style={META_LABEL}>TIME</div>
          <div style={{ ...META_VALUE, fontVariantNumeric: "tabular-nums", lineHeight: 1.4 }}>
            {time || "/"}
          </div>
          {geo.ready && (
            <div style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "11px", lineHeight: 1.45, letterSpacing: "0.06em", marginTop: "0.35rem", textTransform: "uppercase" }}>
              {tzLabel}
              {conditions && <><br />SUNSET {formatLocalTime(conditions.sunset)}</>}
            </div>
          )}
        </div>
      </footer>

      {/* ── SECTION INDEX ── */}
      <section style={{ position: "relative" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/VH.png" alt="" aria-hidden style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "#FFFFFF", opacity: 0.4, mixBlendMode: "screen", zIndex: 1 }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          {SECTIONS.map((sec) => (
            <a key={sec.label} className="section-row" href={
              sec.title === "FIELD NOTES" ? "/field-notes" :
              sec.title === "CONTROLLED INTELLIGENCE" ? "/controlled-intelligence" :
              sec.title === "MERIDIAN FRAMEWORK" ? "/meridian" :
              sec.title === "RESONANCE ENGINE" ? "/resonance" :
              sec.title === "HARVARD CAPSTONE" ? "/harvard-capstone" :
              sec.title === "VERBATIM LEARNING" ? "/verbatim" : "#"
            } style={{ textDecoration: "none", color: "inherit", display: "grid" }}>
              <div>
                <div style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "0.75rem", letterSpacing: "0.06em", paddingTop: "0.75rem" }}>
                  ({sec.label})
                </div>
                <h2 style={{ fontFamily: CONDENSED, fontWeight: 900, fontSize: "clamp(2rem, 7vw, 8.5rem)", lineHeight: 0.9, letterSpacing: "-0.02em", textTransform: "uppercase", whiteSpace: "nowrap", margin: "0 0 0.5rem" }}>
                  {sec.title}
                </h2>
              </div>
              <div className="section-descriptor" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "flex-start", paddingTop: "0.75rem", gap: "0.5rem", maxWidth: "22ch", textAlign: "right" }}>
                <p style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "18px", lineHeight: 1.5, margin: 0 }}>
                  {sec.descriptor}
                </p>
                <span style={{ fontFamily: BARLOW, fontWeight: 300, fontSize: "1.25rem" }}>+</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── APPROACH HEADING ── */}
      <section style={{
        borderTop: RULE,
        borderBottom: RULE,
        padding: "0.875rem 1.5rem",
        backgroundColor: "#0A0A0A",
        color: "#F0EDE6",
      }}>
        <h2 style={{
          fontFamily: CONDENSED,
          fontWeight: 900,
          fontSize: "clamp(3rem, 7vw, 8.5rem)",
          lineHeight: 0.9,
          letterSpacing: "-0.02em",
          textTransform: "uppercase",
          margin: 0,
          transform: "translateY(-0.07em)",
        }}>
          Our Approach
        </h2>
      </section>

      {/* ── THREE-COLUMN STATEMENT ROW ── */}
      <section className="three-col" style={{ borderBottom: RULE }}>
        {[
          { title: "Orientation Before Adaptation", image: "/orientation-before-adaptation.png", alt: "Architectural diagram showing an organization orienting its history, systems, values, and people before adapting", body: "We build systems, platforms, and strategies for individuals and organizations that embrace the complexity of today.\n\nWe work in a noisy and chaotic world, where technologies emerge and change at lightning speed. For groups that know they must adapt, this can create confusion and paralysis.\n\nBefore recommending any act of adaptation, we orient the organization, its staff, and especially its leadership to the present moment and possible futures. Using a human-centred approach and current tools we bring its history, systems, values, and institutional knowledge forward so it can understand and inform the changes happening around it, recognize the opportunities available, and chart a path forward.\n\nGrounded in trust, transparency, and equity, our work prioritizes client support and self-sufficiency over lock-in.\n\nWe establish a shared language that grounds us in the present as we look to the future." },
          { title: "Connect to the Historical Present", image: "/connecting-the-historical-present.png", alt: "Architectural diagram connecting historical organizational records to an active present and informed future", body: "Organizational orientation requires more than understanding current conditions. It also requires understanding how the organization arrived here.\n\nDecades of institutional knowledge can become scattered across past projects, strategic directives, manuals, board minutes, correspondence, research, and abandoned document systems. Valuable ideas and hard-earned lessons remain buried in old Dropbox folders and unnavigable Microsoft 365 document trees, disconnected from the people who could use them today.\n\nGenerative and agentic tools can help retrieve, organize, connect, and interpret these materials at a scale that was previously too costly or exhausting to contemplate. When this knowledge is integrated into current systems, staff can understand not only what was done, but why it was done, what was learned, and what remains useful.\n\nThis is not an exercise in nostalgia. It restores continuity, reduces repeated work, and returns the knowledge and wisdom of earlier leaders to the active life of the organization.\n\nBy bringing its past forward, an organization can better understand its present and make more informed choices about its future." },
          { title: "Use the Language of Intention", image: "/the-language-of-intention.png", alt: "Architectural diagram showing human attention, judgment, experience, and care forming shared language and intention", body: "Orientation begins with language. An organization cannot understand where it is, bring its historical knowledge forward, or decide where it wants to go without a clear and shared way of describing itself and the world around it.\n\nLanguage is not a product we delegate to technology. It is a human and intentional act shaped by attention, judgment, experience, and care. AI can retrieve, organize, compare, and generate words, but it cannot determine what an organization means, believes, or intends to say.\n\nWe listen carefully, ask precise questions, and help staff and leadership find language that reflects their knowledge, values, and ambitions. This creates the common ground required for trust, collaboration, and informed action.\n\nWhen historical materials are returned to active use, clear language connects past insight to present conditions. It helps an organization preserve what remains valuable, recognize what has changed, and articulate what must come next.\n\nThe world changes quickly, but the foundations of meaningful work remain human: clarity, trust, intention, and collaboration." },
        ].map((col) => (
          <div key={col.title} className="three-col-cell">
            <h3 className="three-col-title" style={{
              fontFamily: CONDENSED,
              fontWeight: 900,
              fontSize: "clamp(1.5rem, 3vw, 3rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              margin: 0,
            }}>
              {col.title}
            </h3>
            <Image
              className="three-col-image"
              src={col.image}
              alt={col.alt}
              width={1254}
              height={1254}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <p style={{
              fontFamily: BARLOW,
              fontWeight: 300,
              fontSize: "clamp(17px, 2.1vw, 27px)",
              lineHeight: 1.4,
              margin: 0,
              whiteSpace: "pre-line",
            }}>
              {col.body}
            </p>
          </div>
        ))}
      </section>

      {/* ── SIGNATURE PLATFORMS HEADING ── */}
      <section style={{
        borderTop: RULE,
        borderBottom: RULE,
        padding: "0.875rem 1.5rem",
        backgroundColor: "#0A0A0A",
        color: "#F0EDE6",
      }}>
        <h2 style={{
          fontFamily: CONDENSED,
          fontWeight: 900,
          fontSize: "clamp(3rem, 7vw, 8.5rem)",
          lineHeight: 0.9,
          letterSpacing: "-0.02em",
          textTransform: "uppercase",
          margin: 0,
          transform: "translateY(-0.07em)",
        }}>
          Our Signature Platforms
        </h2>
      </section>

      {/* ── FEATURED ARCHITECTURES ── */}
      <section className="framework-card-grid" aria-label="Featured architectures">
        {FEATURE_CARDS.map((card) => (
          <a key={card.title} href={card.href} className="framework-card">
            <h2 className="framework-card-title" aria-label={card.title}>
              {card.title.split(" ").map((word) => <span key={word}>{word} </span>)}
            </h2>
            <Image
              src={card.image}
              alt={card.alt}
              width={1254}
              height={1254}
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="framework-card-image"
            />
            <p className="framework-card-copy">{card.description}</p>
          </a>
        ))}
      </section>

      {/* ── PROCESS TICKER ── */}
      <section className="ticker-row" style={{ borderTop: RULE, borderBottom: RULE }}>
        <div className="ticker-track">
          <span className="ticker-item" style={{ fontFamily: CONDENSED }}>RESEARCH. CREATIVITY. STRATEGY. COLLABORATION. ITERATION. REPEAT.&nbsp;</span>
          <span className="ticker-item" style={{ fontFamily: CONDENSED }} aria-hidden="true">RESEARCH. CREATIVITY. STRATEGY. COLLABORATION. ITERATION. REPEAT.&nbsp;</span>
        </div>
      </section>

      {/* ── LEGAL BAR ── */}
      <LegalBar />
    </main>
  );
}
