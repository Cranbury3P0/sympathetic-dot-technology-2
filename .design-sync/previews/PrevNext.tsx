import { PrevNext } from "sympathetic-ds";

/** Both neighbors present — the common case at the foot of an article. */
export function Default() {
  return (
    <PrevNext
      previous={{
        title: "The Pope Has Entered the Chat",
        href: "/field-notes/the-pope-has-entered-the-chat",
      }}
      next={{
        title: "Who Trains AI on Your Posts?",
        href: "/field-notes/who-trains-ai-on-your-posts",
      }}
    />
  );
}

/** Only a previous entry — e.g. the most recent observation. */
export function PreviousOnly() {
  return (
    <PrevNext
      previous={{
        title: "The Pope Has Entered the Chat",
        href: "/field-notes/the-pope-has-entered-the-chat",
      }}
    />
  );
}
