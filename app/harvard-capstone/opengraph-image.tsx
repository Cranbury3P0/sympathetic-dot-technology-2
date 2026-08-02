import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Transforming Advocacy and Access — Harvard Capstone";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const flowerData = await readFile(
    join(process.cwd(), "public/harvard-capstone-flower-transparent.png"),
    "base64",
  );
  const flowerSrc = `data:image/png;base64,${flowerData}`;

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          overflow: "hidden",
          background: "linear-gradient(135deg, #082f36 0%, #0a3941 60%, #104b54 100%)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: 0.13,
            backgroundImage: "radial-gradient(circle at 18% 82%, transparent 0 70px, #ffffff 72px 73px, transparent 75px 145px, #ffffff 147px 148px, transparent 150px)",
          }}
        />

        <div
          style={{
            display: "flex",
            width: "690px",
            height: "100%",
            boxSizing: "border-box",
            flexDirection: "column",
            justifyContent: "center",
            padding: "58px 0 58px 68px",
          }}
        >
          <div
            style={{
              display: "flex",
              marginBottom: "34px",
              color: "#f2d8dc",
              fontSize: "20px",
              fontWeight: 600,
              letterSpacing: "0.16em",
            }}
          >
            HARVARD CAPSTONE
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: "650px",
              fontSize: "82px",
              fontWeight: 600,
              letterSpacing: "-0.045em",
              lineHeight: 0.94,
            }}
          >
            Transforming Advocacy and Access
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "38px",
              color: "#dfe8e8",
              fontSize: "20px",
              fontWeight: 400,
              letterSpacing: "0.02em",
            }}
          >
            Harvard Medical School Executive Education · 2025
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "510px",
            height: "100%",
            boxSizing: "border-box",
            alignItems: "center",
            justifyContent: "center",
            paddingRight: "38px",
          }}
        >
          <img
            src={flowerSrc}
            width={470}
            height={470}
            alt=""
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    ),
    size,
  );
}
