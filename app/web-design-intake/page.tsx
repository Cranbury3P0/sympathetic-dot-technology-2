"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { LegalBar, Nav, PAPER, INK } from "sympathetic-ds";
import {
  INTAKE_QUESTIONS,
  INTAKE_TO_EMAIL,
  type IntakeAnswers,
} from "@/lib/web-design-intake/questions";
import styles from "./page.module.css";

function emptyAnswers(): IntakeAnswers {
  return INTAKE_QUESTIONS.reduce((acc, question) => {
    acc[question.id] = "";
    return acc;
  }, {} as IntakeAnswers);
}

export default function WebDesignIntakePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [answers, setAnswers] = useState<IntakeAnswers>(emptyAnswers);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const staggerVars = useMemo(
    () =>
      INTAKE_QUESTIONS.map((_, i) => ({
        animationDelay: `${0.04 + i * 0.035}s`,
      })),
    []
  );

  useEffect(() => {
    if (!showConfirmation) return;

    closeButtonRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setShowConfirmation(false);
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [showConfirmation]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/web-design-intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, answers }),
      });

      const data = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (!response.ok) {
        setSubmitError(
          data?.error ??
            "Something went wrong sending your intake. Please try again."
        );
        return;
      }

      setShowConfirmation(true);
    } catch {
      setSubmitError(
        "Something went wrong sending your intake. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function closeConfirmation() {
    setShowConfirmation(false);
  }

  return (
    <main className={styles.page} style={{ backgroundColor: PAPER, color: INK }}>
      <Nav logoHref="/" />

      <section className={styles.hero}>
        <div className={styles.eyebrow}>Sympathetic Technology · New Work</div>
        <div className={styles.heroLead}>
          <h1 className={styles.heroTitle}>
            <span>Web Design</span>
            <span>Intake Form</span>
          </h1>
          <h2 className={styles.subtitle}>Vision, Instinct, and Aesthetics</h2>

          <div className={styles.intro}>
            <p>
              This is an important stage of the building process where you let me
              know what visual and interactive aspects of the future design might
              look like.
            </p>
            <p>
              This is an evocative phase, not a prescriptive one. Try to imagine
              what a sense of awe, wonder, and excitement might look like when
              someone visits your site.
            </p>
            <p>
              Your answers to these questions should be open-hearted, optimistic,
              and aspirational.
            </p>
            <p>
              We may not be able to do everything together but this will give us a
              great foundation of ideas and directions to build from.
            </p>
          </div>
        </div>
      </section>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.identity}>
          <div className={styles.identityField}>
            <label className={styles.field}>
              <span className={styles.label}>Your name</span>
              <input
                className={styles.input}
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </label>
          </div>
          <div className={styles.identityField}>
            <label className={styles.field}>
              <span className={styles.label}>Your email</span>
              <input
                className={styles.input}
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </label>
          </div>
        </div>

        <ol className={styles.questions}>
          {INTAKE_QUESTIONS.map((question, index) => (
            <li
              key={question.id}
              className={styles.question}
              style={staggerVars[index]}
            >
              <div className={styles.questionHeader}>
                <span className={styles.number} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <label htmlFor={question.id}>
                  <p className={styles.prompt}>{question.prompt}</p>
                </label>
              </div>
              <textarea
                id={question.id}
                name={question.id}
                className={styles.textarea}
                rows={5}
                placeholder="Write freely…"
                value={answers[question.id]}
                onChange={(e) =>
                  setAnswers((prev) => ({
                    ...prev,
                    [question.id]: e.target.value,
                  }))
                }
                disabled={isSubmitting}
              />
            </li>
          ))}
        </ol>

        <div className={styles.submitRow}>
          <p className={styles.submitHint}>
            Submit sends your answers directly to {INTAKE_TO_EMAIL}.
          </p>
          {submitError && (
            <p className={styles.submitError} role="alert">
              {submitError}
            </p>
          )}
          <button
            className={styles.submit}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending…" : "Submit intake →"}
          </button>
        </div>
      </form>

      <LegalBar />

      {showConfirmation && (
        <div
          className={styles.modalOverlay}
          role="presentation"
          onClick={closeConfirmation}
        >
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="intake-confirmation-title"
            aria-describedby="intake-confirmation-body"
            onClick={(event) => event.stopPropagation()}
          >
            <p className={styles.modalEyebrow}>Sympathetic Technology</p>
            <h2 id="intake-confirmation-title" className={styles.modalTitle}>
              Submission sent
            </h2>
            <p id="intake-confirmation-body" className={styles.modalBody}>
              Thank you. Your web design intake has been sent to{" "}
              {INTAKE_TO_EMAIL}. We&apos;ll be in touch soon.
            </p>
            <button
              ref={closeButtonRef}
              type="button"
              className={styles.modalClose}
              onClick={closeConfirmation}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
