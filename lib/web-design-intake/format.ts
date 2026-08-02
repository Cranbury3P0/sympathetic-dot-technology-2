import { INTAKE_QUESTIONS } from "./questions";

export function formatIntakeSubject(name: string): string {
  const trimmed = name.trim();
  return trimmed
    ? `Web Design Intake: ${trimmed}`
    : "Web Design Intake Form";
}

export function formatIntakeBody({
  name,
  email,
  answers,
}: {
  name: string;
  email: string;
  answers: Record<string, string>;
}): string {
  const lines: string[] = [
    "Web Design Intake Form",
    "Vision, Instinct, and Aesthetics",
    "",
    `Name: ${name.trim() || "(not provided)"}`,
    `Email: ${email.trim() || "(not provided)"}`,
    "",
  ];

  INTAKE_QUESTIONS.forEach((question, index) => {
    lines.push(`${index + 1}. ${question.prompt}`);
    lines.push(answers[question.id]?.trim() || "(no answer)");
    lines.push("");
  });

  return lines.join("\n");
}
