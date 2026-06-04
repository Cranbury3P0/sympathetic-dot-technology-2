/**
 * lib/products.ts
 *
 * Data schema and loader for VERBATIM product pages.
 * Products live in /content/products/*.json.
 * The schema is additive — fields are optional unless noted.
 * Add new fields without breaking existing products.
 */

import fs from "fs";
import path from "path";

/* ── Core types ─────────────────────────────────────────── */

export type ProductStatus =
  | "IN PRODUCTION"
  | "DISCONTINUED"
  | "DEVELOPMENT CANCELLED"
  | "LIMITED AVAILABILITY"
  | "ARCHIVAL RECORD";

export interface LabelValue {
  label: string;
  value: string;
}

export interface ProductComponent {
  name: string;
  /** Optional second line for the component name. */
  nameLine2?: string;
  image?: string;
  /** One or more description paragraphs. */
  description: string | string[];
}

export interface IncidentReport {
  id: string;
  date?: string;
  subject?: { name: string; role: string; image?: string };
  paragraphs: string[];
}

export interface ArchivalNotes {
  paragraphs: string[];
  pullQuote?: { text: string; attribution: string };
  subject?: { name: string; role: string; image?: string };
}

export interface SpecialAccessory {
  name: string;
  description: string[];
  components?: string[];
  fieldReport?: string;
  companyNote?: { year: string; text: string };
  bulletin?: { text: string; note: string };
}

export interface TestingOutcomes {
  narrative: string[];
  results: string[];
  engineeringConclusion?: string;
}

export interface ApprovedMounts {
  approved: string[];
  notApproved?: string[];
  notApprovedLabel?: string;
}

/* ── Root product schema ────────────────────────────────── */

export interface VerbatimProduct {
  /* ── Identity ── */
  slug: string;
  name: string;
  subtitle: string;

  /** e.g. "COLLECTION 07: LITERARY OPERATIONS" */
  collection: string;

  /** e.g. ["LITERARY OPERATIONS DIVISION", "AMERICANA DIVISION"] */
  divisions: string[];

  /** Bottom-of-page serial, e.g. "NSD / 1984 / 411" */
  serialCode: string;

  /* ── Status ── */
  status: ProductStatus;
  /** Shown in accent color when status is alarming. e.g. "NO UNITS WERE EVER PRODUCED FOR SALE" */
  statusDetail?: string;
  /** Renders a NOT FOR SALE stamp at the bottom. */
  notForSale?: boolean;
  /** Renders archival treatment: stamped overlay language, muted palette. */
  isArchival?: boolean;

  /* ── Header block ── */
  /** Short product deck (2–4 sentences). Shown in the header column. */
  deck: string;

  /** Right-side metadata box. e.g. Manufactured, Status, Units Produced. */
  metadata: LabelValue[];

  /* ── Hero image ── */
  heroImage?: string;
  heroImageAlt?: string;

  /* ── Three-column specification grid ── */
  features?: string[];
  technicalSpecs?: LabelValue[];
  includes?: string[];

  /* ── Component/accessory detail grid ── */
  components?: ProductComponent[];

  /* ── Project fields (used by archival/cancelled products) ── */
  projectDates?: string;
  projectCode?: string;
  intendedUse?: string;
  targetMarkets?: string[];

  /* ── Prototype specifications (archival products) ── */
  prototypeSpecs?: string[];
  prototypeImage?: string;
  prototypeImageLabels?: Array<{ label: string; x: string; y: string }>;

  /* ── Testing ── */
  testingOutcomes?: TestingOutcomes;

  /* ── Archival narrative blocks ── */
  archivalNotes?: ArchivalNotes;
  incidentReports?: IncidentReport[];

  /* ── History ── */
  /** Left column(s) of the history section. Each string is one paragraph. */
  historyLeft?: string[];
  /** Right column of the history section. Each string is one paragraph or block. */
  historyRight?: string[];

  /* ── Special accessory section ── */
  specialAccessory?: SpecialAccessory;

  /* ── Bottom three-column section ── */
  approvedMounts?: ApprovedMounts;
  documentation?: string[];
  consumables?: string[];

  /* ── Warranty and service ── */
  warranty?: string[];

  /* ── Warnings and notices ── */
  warnings?: Array<{ level: "WARNING" | "IMPORTANT" | "NOTE"; text: string }>;

  /* ── Footer ── */
  /** Large centred text at the page foot. e.g. "DO NOT GALLOP." */
  footerWarning?: string;
}

/* ── Data loader ────────────────────────────────────────── */

const PRODUCTS_DIR = path.join(process.cwd(), "content", "products");

export function getProduct(slug: string): VerbatimProduct | null {
  const filePath = path.join(PRODUCTS_DIR, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw) as VerbatimProduct;
  } catch {
    return null;
  }
}

export function getAllProducts(): VerbatimProduct[] {
  if (!fs.existsSync(PRODUCTS_DIR)) return [];
  return fs
    .readdirSync(PRODUCTS_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(PRODUCTS_DIR, f), "utf-8");
      return JSON.parse(raw) as VerbatimProduct;
    });
}

export function getAllProductSlugs(): string[] {
  if (!fs.existsSync(PRODUCTS_DIR)) return [];
  return fs
    .readdirSync(PRODUCTS_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(/\.json$/, ""));
}
