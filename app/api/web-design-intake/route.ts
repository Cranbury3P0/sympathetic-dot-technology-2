import { NextResponse } from "next/server";
import { Resend } from "resend";
import { formatIntakeBody, formatIntakeSubject } from "@/lib/web-design-intake/format";
import {
  INTAKE_FROM_EMAIL,
  INTAKE_QUESTIONS,
  INTAKE_TO_EMAIL,
  type IntakeAnswers,
} from "@/lib/web-design-intake/questions";

type IntakePayload = {
  name?: string;
  email?: string;
  answers?: Partial<IntakeAnswers>;
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function normalizeAnswers(raw: Partial<IntakeAnswers> | undefined): IntakeAnswers {
  return INTAKE_QUESTIONS.reduce((acc, question) => {
    acc[question.id] = raw?.[question.id]?.trim() ?? "";
    return acc;
  }, {} as IntakeAnswers);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json(
      { error: "Email delivery is not configured yet." },
      { status: 503 }
    );
  }

  let payload: IntakePayload;
  try {
    payload = (await request.json()) as IntakePayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const answers = normalizeAnswers(payload.answers);

  if (!name) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "A valid email address is required." },
      { status: 400 }
    );
  }

  const toEmail = process.env.INTAKE_TO_EMAIL ?? INTAKE_TO_EMAIL;
  const fromEmail = process.env.INTAKE_FROM_EMAIL ?? INTAKE_FROM_EMAIL;
  const subject = formatIntakeSubject(name);
  const text = formatIntakeBody({ name, email, answers });

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject,
      text,
    });

    if (error) {
      console.error("Resend send failed:", error);
      return NextResponse.json(
        { error: "Unable to send your intake right now. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Intake email error:", error);
    return NextResponse.json(
      { error: "Unable to send your intake right now. Please try again." },
      { status: 500 }
    );
  }
}
