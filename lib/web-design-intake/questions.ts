export const INTAKE_QUESTIONS = [
  {
    id: "q1",
    prompt:
      "Show me three sites that stop you. Any category, not just author sites: a restaurant, a record label, a museum, a bird sanctuary. What's the site doing that you want yours to do?",
  },
  {
    id: "q2",
    prompt:
      "If someone lands on your homepage with zero context, what's the one thing you want them to know about you in five seconds?",
  },
  {
    id: "q3",
    prompt:
      "What's the single action you want a visitor to take? Buy the book, book you for an event, read a sample chapter, sign up for a mailing list. If you had to pick one, what wins?",
  },
  {
    id: "q4",
    prompt:
      "Picture the site a year from now, not the day it launches. What's been added since? New releases, blog posts, event dates, behind-the-scenes writing, something else entirely?",
  },
  {
    id: "q5",
    prompt:
      "Is there a book, an album, a film, or even a room you've been in that captures the tone you want here? Doesn't have to make literal sense, just the feeling.",
  },
  {
    id: "q6",
    prompt:
      "Who's actually finding this site? Readers who already know your work, readers discovering you cold, editors and agents, event organizers, your own students. The answer changes what the homepage should be doing.",
  },
  {
    id: "q7",
    prompt:
      "What is a common mistake that writer or writer-adjacent websites make that you want to avoid? What would you never want your site to do?",
  },
  {
    id: "q8",
    prompt:
      "What's something about your writing that a bio and a book cover never manage to capture? That's often the thing worth designing around.",
  },
  {
    id: "q9",
    prompt:
      "Since this is going to keep changing after launch, how hands-on do you want to be? Comfortable poking at it yourself at midnight, or would you rather flag changes to me and stay out of the code entirely?",
  },
  {
    id: "q10",
    prompt:
      "If the site were a room a reader could walk into, what's in it?",
  },
] as const;

export type IntakeQuestionId = (typeof INTAKE_QUESTIONS)[number]["id"];

export type IntakeAnswers = Record<IntakeQuestionId, string>;

export const INTAKE_TO_EMAIL = "hello@sympathetic.technology";

export const INTAKE_FROM_EMAIL =
  "Sympathetic Technology <hello@sympathetic.technology>";
