"use client";

import type { ReactNode } from "react";
import { EditorialArticle } from "../_components/editorial-article";

const panelFindings = (
  <ul
    key="panel-findings"
    style={{
      marginTop: "1em",
      marginBottom: "1em",
      paddingLeft: "1.5em",
      listStyleType: "disc",
    }}
  >
    <li>
      <strong>Epistemic erosion.</strong> The slow wearing down of any shared
      ability to tell what&apos;s true from what isn&apos;t, simply from being
      exposed to enough confident, convincing fakes.
    </li>
    <li>
      <strong>The liar&apos;s dividend.</strong> Once deepfakes are a known
      possibility, real footage becomes deniable too. Bad actors get to claim
      anything inconvenient is fabricated.
    </li>
    <li>
      <strong>Synthetic consensus.</strong> Content built at scale to look like
      broad public agreement that was never actually there.
    </li>
  </ul>
) as ReactNode;

const IISPAI_URL =
  "https://www.un.org/independent-international-scientific-panel-ai/en";

const linkStyle = {
  color: "inherit",
  textDecoration: "underline",
  textUnderlineOffset: "3px",
} as const;

const article = {
  title: "The Fight for Truth and Trust",
  observationNumber: "045",
  date: "August 5, 2026",
  category: "Truth & Trust",
  author: "Sean Cranbury",
  readingTime: "14 min",
  tags: [
    "Misinformation",
    "Deepfakes",
    "Democracy",
    "Maria Ressa",
    "Yoshua Bengio",
    "IISPAI",
  ],
  featuredImage: "/jason-mitrione-remington-noiseless-typewriter.jpg",
  featuredImagePosition: "center 40%",
  featuredImageCredit: "Photo: Jason Mitrione / Unsplash",
  deck: "The sheer overwhelming quantity of information is only part of the problem. The increasing danger comes from information that can't be trusted at the point of use. The type of information that is potentially manufactured and shared with confidence by proprietary tools designed to deceive.",
  deckAsLead: true,
  bodyChapters: [
    [
      (
        <>
          This is the first of three essays built around a report released in July
          2026 by the{" "}
          <strong>
            <a href={IISPAI_URL} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Independent International Scientific Panel on Artificial Intelligence
            </a>
          </strong>
          , the first global scientific body set up to assess what AI is actually
          doing to the world. Its co-chairs, AI researcher Yoshua Bengio and
          journalist Maria Ressa, frame the whole document around three fights: the
          fight for truth and trust, the fight for human agency against the machines,
          and the fight for a shared future. This piece takes the first one. The other
          two follow.
        </>
      ) as ReactNode,
      (
        <p
          style={{
            margin: "2.2em 0",
            textAlign: "center",
            fontFamily: "var(--font-barlow), sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            letterSpacing: "0.35em",
          }}
        >
          /
        </p>
      ) as ReactNode,
      "Evidence is abundant and it's everywhere. We see it with our own eyes in our social feeds every single day. We see it in the news, we talk about it with our friends and family.",
      "Anyone can be forgiven for thinking that we all suffer from information overload, that certain politicians and corporations 'flood the zone' with so much data and news, so much of it in conflict with what exists around it, that you're left with a sense of helplessness to even begin to make sense of it all.",
      "The sheer overwhelming quantity of information is only part of the problem. The increasing danger comes from information that can't be trusted at the point of use. The type of information that is potentially manufactured and shared with confidence by proprietary tools designed to deceive.",
    ],
    [
      "In late 2024, Romania's constitutional court annulled a presidential election. It was the first time that had happened anywhere in Europe over concerns about digital interference. Researchers tracking the region had already logged more than eighty deepfakes of public figures across dozens of countries that year. In Romania's case, one candidate's content was reportedly surfaced by the platform's own recommendation system at rates far beyond his rivals, a finding the company disputed. The court didn't wait for the dispute to settle. It voided the vote.",
      "A new UN scientific panel studying AI, co-chaired by Yoshua Bengio and Maria Ressa, names three specific things going wrong at once in cases like this.",
      panelFindings,
      "None of this happens by accident. The panel's researchers found that fine-tuning a model for persuasion alone can raise how convincing it is by roughly half again, and the way you prompt it can add another quarter on top of that. And truth turns out to be beside the point: in testing, false claims generated by these systems proved just as persuasive as true ones. These are engineering choices, made by companies competing in a profit-driven market with the resources to hire the best persuasion talent in the world, then deploy it at a scale no individual copywriter ever could.",
    ],
    [
      "Persuasion is a feature being tuned like any other. And truth, for what it's worth, is getting crowded-out of the convenience aisle at the information supermarket.",
      "The UN Report is authored by two unique individuals who have seen the critical details of AI from unique perspectives.",
      "Their presence in this project helps to ground the whole thing in lived experience of both the technical architecture of the tools and the very real danger that journalists and others experience when speaking truth to power in these confusing times.",
      "It would be difficult to find a more appropriate pair of individuals to task with a project of this scope.",
      "Yoshua Bengio OC OQ OBE FRS FRSC is a Canadian computer scientist, and a pioneer of artificial neural networks and deep learning. Bengio received the 2018 ACM A.M. Turing Award, often referred to as the \"Nobel Prize of Computing\", with Geoffrey Hinton and Yann LeCun for their foundational work on deep learning.",
      "Maria Ressa was born in Manila, the Philippines. At the age of nine, she and her family moved to the United States. After studying at Princeton University, she returned to her native country and took a master's degree at the University of the Philippines Diliman. From 1995, Ms Ressa worked as a local correspondent for CNN, covering in particular the growth of terrorism in South East Asia.",
      "In 2012, she was one of the co-founders of the Rappler online news site. As an investigative journalist, she has distinguished herself as a fearless defender of freedom of expression and has exposed the abuse of power, use of violence and increasing authoritarianism of the regime of President Rodrigo Duterte.",
      "In particular, Ms Ressa has focused critical attention on President Duterte's controversial, murderous anti-drug campaign. She and Rappler have also documented how social media are being used to spread fake news, harass opponents and manipulate public discourse.",
      "Ressa did not need to consult ChatGPT or Claude to explain what was happening to her.",
      "She knew that it was information warfare and called it as much. The stuff used by those in power to consolidate it, and she had developed a simple formula for how it worked: lies spread six times faster than facts on social media.",
      "That was the Philippines under Duterte and she called it out all the way back in 2012. She was arrested in 2019 and convicted for the crime of cyber libel. She was also hit with tax evasion charges that could have put her away for 34 years before she was fully acquitted in 2023.",
      {
        quote: [
          "\"Journalism is the antidote to tyranny,\" she told the BBC after her acquittal",
        ],
      },
      "Not to be lost in the wave of sordid details about Ressa and her case is that Mr Duterte stepped down in June 2022 and faces an investigation by the International Criminal Court in The Hague for \"crimes against humanity\" over thousands of deaths linked to his anti-narcotics campaign.",
      {
        quote: [
          "\"This is a victory not just for Rappler but for everyone who has kept the faith that a free and responsible press empowers communities and strengthens democracy,\" Rappler said in a statement on Ms Ressa's acquittal last Monday.",
        ],
        source: "Rappler",
      },
      "She's since pointed out some operational similarities at Washington.",
      "Her firm's report on the first hundred days of Trump's second term used a harrowing phrase, narrative warfare, and in the interviews that followed, Ressa said what she's watching now is more insidious than anything Duterte managed against her directly.",
      "They are the same tactics being deployed and amplified by individuals and organizations at a scale that Duterte could only have imagined.",
      "It's forgivable to feel helpless reading any of that, up against AI, corporate monopoly, and political alliances that simply do not have the public good in mind.",
      "But there's ample evidence that the fight is far from over and the people who are willing to go to battle for truth and justice are well equipped for battle.",
      "Rebecca Solnit put it to the New York Times without much room for interpretation:",
      {
        quote: [
          "\"You do not get authoritarians to behave better by being meek and gentle and polite. You get it by being strong.\"",
        ],
        source: "Rebecca Solnit, New York Times",
      },
    ],
  ],
  pullQuote:
    "You do not get authoritarians to behave better by being meek and gentle and polite. You get it by being strong.",
  pullQuoteSource: "Rebecca Solnit",
  instagramEmbed: "https://www.instagram.com/reel/DVqrVIHj_BM/",
  supportingImages: [
    {
      src: "/paula-guerreiro-torn-posters-wall.jpg",
      alt: "Layers of torn and peeling posters on a city wall",
      caption: "Photo: Paula Guerreiro / Unsplash",
      cover: true,
      objectPosition: "center center",
    },
  ],
  previousObservation: {
    title: "The Master's Tools Will Never Dismantle the Master's Datacenter",
    href: "/field-notes/the-masters-tools-will-never-destroy-the-masters-datacenter",
  },
};

export default function FightForTruthAndTrustPage() {
  return <EditorialArticle article={article} accent="haida" />;
}
