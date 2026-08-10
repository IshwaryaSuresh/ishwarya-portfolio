export type ServiceBlueprint = {
  title: string
  subtitle?: string
  tone: 'as-is' | 'refined'
  columns: string[]
  rows: {
    label: string
    kind: 'time' | 'evidence' | 'customer' | 'frontstage' | 'technology' | 'backstage' | 'support'
    cells: (string | null)[]
  }[]
  dividers: { afterRowIndex: number; label: string; style: 'dashed' | 'solid' }[]
}

export type Persona = {
  type: string
  name: string
  age: number
  photo?: string
  photoPosition?: string
  description: string
  needs: string[]
  frustrations: string[]
  goal: string
  reflection?: string
}

export type StoryVisual =
  | { kind: 'image'; src: string; caption?: string }
  | { kind: 'imageGrid'; items: { src: string; label?: string }[] }
  | { kind: 'matrix' }
  | { kind: 'personas' }

// One step of a pinned scrollytelling block: the narration scrolls on the left
// while the screen stays pinned on the right and swaps to `src` per step.
export type ScreenScrollStep = { src: string; title: string; body: string }

// One chapter of a story stage: statement headline + one short paragraph on the
// left, visual on the right, optional key-finding callout under the visual.
// When `screenScroll` is set, the chapter renders as a pinned scrollytelling
// sequence instead and title/body/visual are ignored.
export type StoryMoment = {
  title?: string
  body?: string
  visual?: StoryVisual
  finding?: string
  screenScroll?: ScreenScrollStep[]
  // Renders the project's assumptions as flat assumed/found/pivoted cards.
  afp?: boolean
}

export type Project = {
  slug: string
  title: string
  tagline: string
  niche: string[]
  type: 'Social Impact' | 'Fintech B2B' | 'Fintech Consumer' | 'Edtech' | 'Healthcare' | 'Government' | 'Academic'
  featured: boolean
  comingSoon?: boolean
  client: string
  // Overrides the 'Client' label in the meta grid (e.g. 'Worked with').
  clientLabel?: string
  duration?: string
  tools: string[]
  prototype?: string
  // Overrides the 'View live prototype' button label (e.g. 'Visit Afterglow').
  prototypeLabel?: string
  problem: string
  insight: string
  processTitle?: string
  process: { step: string; detail: string; image?: string; imageCaption?: string; phase?: string }[]
  metrics: { label: string; value: string }[]
  solution: string
  takeaway: string
  tags: string[]
  // Extended fields (optional - populated per-project)
  heroImage?: string
  contextTitle?: string
  context?: {
    intro: string
    stats?: { value: string; label: string }[]
    challengesTitle?: string
    challenges: string[]
    quote?: string
    image?: string
    imageCaption?: string
  }
  opportunityFraming?: {
    // Short labels for the two sides of the pivot. Default to Me & You's.
    from?: string
    to?: string
    initialAssumption: string
    initialHmw: string
    shift: string
    reframedHmw: string
  }
  storyboards?: {
    intro: string
    items: { src: string; title?: string; caption: string }[]
    payoff: string
  }
  personasIntro?: string
  processEarly?: boolean
  processCompact?: boolean
  focusGroup?: { label?: string; intro?: string; image: string; caption: string }
  solutionTeaser?: string
  screens?: {
    intro?: string
    items: { src: string; title: string; description: string }[]
    brand?: { src: string; caption: string }
  }
  tldr?: {
    headline: string
    summary: string
    role: string
    impact: { text: string }[]
    timelineLabel?: string
    timeline: { when: string; what: string }[]
    // Date ranges shown against the two TL;DR stage headers.
    researchKicker?: string
    designKicker?: string
    // `label` on discovery/ethnography/origin is the headline for that block.
    discovery: { label?: string; line: string; gap: string }
    ethnography: { label?: string; line: string; items: { src: string; label: string }[] }
    pivot: { from: string; fromHmw: string; to: string; toHmw: string; because: string }
    origin: { label?: string; line: string; items: { src: string; label: string }[] }
    // Only rendered alongside personas/personaRoles; omit when a project has none.
    people?: string
    testing: { line: string; changes: string[] }
    ethics: string
    output: { src: string; label: string }[]
    screens: { src: string; label: string }[]
    outcome: string
  }
  overview?: { team: string; industry: string; status?: string; recognition?: string }
  publishedResearch?: {
    title: string
    authors: string
    venue: string
    doi: string
    url: string
    acknowledgement: string
    acknowledgementImage?: string
  }
  designDecisions?: { decision: string; rationale: string }[]
  background?: { understandingNeedsTitle?: string; understandingNeeds: string; personalDrive: string; innovativeMethods: string }
  personas?: Persona[]
  personaRoles?: { role: string; who: string; definition: string }[]
  assumptionsLate?: boolean
  assumptions?: {
    intro?: string
    flat?: boolean
    items: { phase?: string; headline?: string; assumption: string; finding: string; pivot: string }[]
  }
  userJourney?: {
    intro?: string
    stages: { stage: string; action: string; feeling: string; opportunity: string }[]
  }
  serviceMap?: {
    intro?: string
    asIs: ServiceBlueprint
    refined: ServiceBlueprint
  }
  competitiveAnalysis?: {
    intro: string
    tools: {
      name: string
      category: string
      verdict: string
      features: { label: string; score: 'full' | 'partial' | 'none' }[]
      gap: string
    }[]
    takeaway: string
  }
  researchOps?: {
    intro: string
    items: { label: string; detail: string }[]
  }
  testing?: {
    description: string
    participants: string
    questions: string[]
    worked: string[]
    changed: string[]
    outcome: string
  }
  outcomes?: { summary: string; keyOutcomes: string[]; learned: string }
  gallery?: { src: string; caption: string; type: 'prototype' | 'research' | 'storyboard' }[]
  deskResearch?: {
    summary: string
    stats: { value: string; label: string }[]
    findings: string[]
    gap: string
    books?: { src: string; title: string; author: string; note: string }[]
    competitiveAudit?: {
      tools: {
        name: string
        category: string
        verdict: string
        features: { label: string; score: 'full' | 'partial' | 'none' }[]
        gap: string
      }[]
    }
  }
  wip?: string
  zineInspiration?: {
    flow?: { step: string; detail: string }[]
    references: { src: string; caption: string }[]
    mockups: { src: string; caption: string }[]
  }
  workshopsTitle?: string
  workshopsIntro?: string
  workshops?: { src: string; caption: string; blurred?: boolean }[]
  beforeAfter?: {
    label: string
    change: string
    before: { src: string; caption: string }
    after: { src: string; caption: string }
  }[]
  processArtifacts?: { src: string; caption: string; label: string }[]
  // AI fluency, what AI did, what I rejected, what I kept by hand
  aiProcess?: {
    summary: string
    used: string[]
    kept: string[]
    rejected: string[]
  }
  // What I deliberately said no to, trade-offs sidebar
  tradeoffs?: { decision: string; reasoning: string }[]
  // Business outcome translations for metrics
  businessOutcomes?: { metric: string; translation: string }[]
  // Sections to render as full-bleed ink plates instead of light cards, for
  // projects that would otherwise run as one long light scroll.
  darkPlates?: ('problem' | 'insight' | 'journey' | 'takeaway' | 'artifacts')[]
  // Visual story layout: numbered chronological stages of two-column chapters
  // (statement headline + one paragraph left, visual right, key-finding callout).
  // When present, this replaces the default detailed body. Header, tags, and
  // footer nav are unchanged.
  story?: {
    challenge: { paragraphs: string[]; hmw: string }
    // Outcome-first summary shown right after the challenge: solution statement
    // plus the results KPI cards.
    summary?: { solution: string }
    // Compact sprint timeline (Me & You style dots).
    timeline?: { label: string; items: { when: string; what: string; scoped?: boolean }[] }
    // dark renders the stage as a full-bleed ink plate, home-page style.
    stages: { label: string; kicker: string; dark?: boolean; moments: StoryMoment[] }[]
    results: { kicker: string; dark?: boolean; stats: { value: string; label: string }[]; body: string; quote: string }
  }
}

export const projects: Project[] = [
  {
    slug: 'afterglow',
    title: 'Afterglow: A Ritual for Two',
    tagline: 'A two-person evening ritual where partners share how the day felt as light, not words. Designed for neurodivergent and long-distance couples, and shipped to the App Store in nine weeks.',
    niche: ['Social Impact', 'Inclusive design', 'Consumer app'],
    type: 'Social Impact',
    featured: true,
    client: 'Self-initiated · Made for Humans',
    clientLabel: 'Built by',
    duration: 'May – Jul 2026 · shipped',
    tools: ['Google Stitch', 'Figma', 'Capacitor (iOS + Android)', 'Supabase', 'RevenueCat', 'Claude Code'],
    prototype: 'https://apps.apple.com/in/app/afterglow-a-ritual-for-two/id6782056153',
    prototypeLabel: 'View on the App Store',
    wip: 'Live on the App Store · Android in closed testing',
    heroImage: '/uploads/afterglow/hero.png',
    overview: {
      team: 'Solo, end to end: research, design, native build, backend, and store release',
      industry: 'Consumer wellbeing / inclusive design',
    },
    processTitle: 'Process timeline',
    problem: `Sam is 31, autistic, and in a long-distance relationship. By 8pm the spoons are gone and the daily "how was your day?" text reads like a job interview. Maya is 29, has ADHD and an anxious-leaning attachment style; when Sam's reply is short or late she spends the evening guessing.\n\nMost connection products charge words as the price of admission: text prompts, daily quizzes, long-form journalling, plus streaks and read receipts to make sure you pay. For the people who find naming a feeling hardest, that is exactly the fee they cannot pay on a hard day. The wordless alternative on the shelf costs nothing to send and says nothing on arrival.\n\nHow might two people share how a day actually felt without either of them having to find the words, and without the app turning care into a scoreboard?`,
    insight: `The exhausting part of a check-in was never the wording of the prompt. It was that language itself was the entry fee. But removing words entirely lands on the opposite problem, which the wearable end of the market demonstrates: an unlabelled buzz is a cheap thing to send and an awful thing to receive. The product only works if the check-in is wordless to make and unambiguous to read.`,
    process: [
      { phase: 'Week 1 · Frame', step: 'Inclusion principles written first', detail: 'Eight non-negotiable principles set before a single screen: three ways to express, meaning never on colour alone, co-regulate never amplify, no streaks or badges, WCAG 2.2 AA throughout. Every later decision was checked against them.' },
      { phase: 'Week 1 · Frame', step: 'Competitive scan', detail: 'Mapped the check-in loop across four connection apps: what each one asks you to produce, and what happens when you do not produce it.' },
      { phase: 'Weeks 2–3 · Design', step: 'Seven states, one design language', detail: 'Built Reflect as the anchor screen with named Glow and Chip components, then generated every other state as "duplicate Reflect, change these three things" so the visual language could not drift.' },
      { phase: 'Weeks 2–3 · Design', step: 'Calendar rebuilt as a list', detail: 'The conventional month grid failed the inclusion tests written in week one. Redesigned as a day-by-day list with a month strip for wayfinding.' },
      { phase: 'Weeks 4–7 · Build', step: 'Native app and backend', detail: 'Capacitor build for iOS and Android over a Supabase backend: partner pairing, per-day check-in cadence, encrypted emotional data, and in-app account deletion.' },
      { phase: 'Weeks 6–7 · Build', step: 'Subscriptions and the ethical paywall', detail: 'RevenueCat across both stores, with the line held that the daily ritual stays free forever and only depth and memory sit behind the trial.' },
      { phase: 'Weeks 8–9 · Ship', step: 'App Store review', detail: 'Two rejections, both mine: metadata that never named the subscription requirement, then a Sign in with Apple button that was not visually equal to the Google one. Approved on the third submission.' },
    ],
    metrics: [
      { label: 'Status', value: 'Live on the App Store' },
      { label: 'States of one ritual, one design language', value: '7' },
      { label: 'Weeks from written brief to approved app', value: '9' },
      { label: 'Streaks, badges, or read receipts in the product', value: '0' },
    ],
    businessOutcomes: [
      { metric: 'Shipped, not prototyped', translation: 'A native app in a real store with real subscriptions, which means the design had to survive backend constraints, two store review processes, and paying users, not just a Figma frame.' },
      { metric: 'Accessibility as the product, not a pass', translation: 'The inclusion principles set the feature set: three input modes, word labels on every glow, and a designed reduced-motion variant. WCAG 2.2 AA was the floor rather than the goal.' },
    ],
    solution: `Afterglow is one loop plus two ways to look back. You set a glow, name it in one word, add an optional private note, and send it once a day. Your partner receives the glow with the word already attached, and can hold to send warmth back without typing anything. When you have both checked in, the two glows merge into the day's shared colour. The Calendar is the literal archive; Our Story is the poetic one.`,
    takeaway: `A dead end is an accessibility failure, not just a bug. The sharpest lesson came after launch, when signed-in users without a subscription hit a paywall that had no exit if the store products failed to load: no retry, no sign out, and force-quitting did not help because the session persisted. I had written eight inclusion principles and still shipped a screen you could get trapped on. The fix took an afternoon; the habit of checking every screen for its exit is the thing I kept.`,
    tags: ['Consumer app', 'Inclusive design', 'Neurodivergent', 'Accessibility', 'WCAG 2.2 AA', 'iOS', 'Shipped', 'Self-initiated'],
    deskResearch: {
      summary: `A scan of four two-person connection products, mapping the check-in loop in each: what it asks you to produce, how the other person receives it, and what the interface does when you produce nothing.`,
      stats: [
        { value: '4', label: 'Connection products scanned across the check-in loop' },
        { value: '0/4', label: 'Where a wordless check-in still arrives with a word attached' },
        { value: '~50%', label: 'Of autistic adults live with alexithymia, difficulty naming one\'s own feelings' },
        { value: '~40%', label: 'Of people with ADHD live with alexithymia' },
      ],
      findings: [
        'The market splits two ways and both sides fail the same evening. Three of the four make text the unit of a check-in, as a daily question, a journal entry, or a message in a shared timeline.',
        'Two of them add a visible cost to silence: unlock mechanics or read receipts that make a missed evening legible to your partner.',
        'The fourth has already removed language, and lands on the opposite problem. A tap carries no vocabulary, so it says "I am here" and nothing about how the day actually went, which leaves an anxious partner exactly where they started.',
        'None of the four treat naming a feeling as the hard part. The word-based ones assume the words are available and the energy to type them is there; the wordless one assumes a word was never needed.',
      ],
      gap: 'The gap is not a gentler prompt, and it is not a quieter gesture. It is a check-in that costs no language to make and still arrives unambiguous.',
      competitiveAudit: {
        tools: [
          {
            name: 'Paired',
            category: 'Couples app',
            verdict: 'A daily question you both perform',
            features: [
              { label: 'Wordless check-in', score: 'none' },
              { label: 'Named in words', score: 'none' },
              { label: 'No streaks', score: 'none' },
              { label: 'Clear to receive', score: 'partial' },
              { label: 'Low-energy path', score: 'none' },
            ],
            gap: 'A daily question you both answer in text, then unlock each other. It works beautifully on a good day. On a draining one, the unlock mechanic turns a missed evening into something your partner can see you failed to do.',
          },
          {
            name: 'Lasting',
            category: 'Coaching',
            verdict: 'Closer to homework than a check-in',
            features: [
              { label: 'Wordless check-in', score: 'none' },
              { label: 'Named in words', score: 'partial' },
              { label: 'No streaks', score: 'partial' },
              { label: 'Clear to receive', score: 'partial' },
              { label: 'Low-energy path', score: 'none' },
            ],
            gap: 'Structured sessions and exercises built on the assumption that both partners can articulate what they feel and have the energy to work on it. Valuable, and the wrong shape entirely for 8pm on a spoon-low evening.',
          },
          {
            name: 'Between',
            category: 'Couple space',
            verdict: 'A better inbox, still an inbox',
            features: [
              { label: 'Wordless check-in', score: 'none' },
              { label: 'Named in words', score: 'none' },
              { label: 'No streaks', score: 'partial' },
              { label: 'Clear to receive', score: 'none' },
              { label: 'Low-energy path', score: 'none' },
            ],
            gap: 'A shared timeline of messages, photos, and dates. Everything still arrives as content you have to compose, and read receipts make silence legible as silence.',
          },
          {
            name: 'Bond Touch',
            category: 'Wearable',
            verdict: 'Wordless, and says nothing',
            features: [
              { label: 'Wordless check-in', score: 'full' },
              { label: 'Named in words', score: 'none' },
              { label: 'No streaks', score: 'full' },
              { label: 'Clear to receive', score: 'none' },
              { label: 'Low-energy path', score: 'full' },
            ],
            gap: 'The one product that has already removed language: tap the bracelet and your partner feels the pattern, in a colour you chose. It is the right instinct and it costs almost nothing to send. But a buzz carries no vocabulary, so it says "I am here" and nothing about how the day went, which leaves the anxious partner exactly where they started.',
          },
        ],
      },
    },
    personas: [
      {
        name: 'Sam',
        age: 31,
        type: 'The spoon-low partner',
        description: 'Autistic, in a long-distance relationship. By 8pm the day is spent and the "how was your day" text feels like an interview with a right answer. Wants their partner to know they are loved without having to perform fluency to prove it.',
        needs: [
          'A check-in that costs almost nothing to make on the worst day of the week',
          'A way to say something true without having to find the word for it first',
          'No visible penalty on the evenings when nothing gets sent at all',
        ],
        frustrations: [
          'Open-ended prompts are a blank page, and a blank page at 8pm is a no',
          'Streaks and unlock mechanics turn a hard day into a visible failure',
          'Voice notes and long replies are exactly the kind of effort there is none of left',
        ],
        goal: '"I want them to know I am here and I am okay, without having to perform being fine."',
      },
      {
        name: 'Maya',
        age: 29,
        type: 'The anxious reader',
        description: 'ADHD, anxious-leaning attachment. Does not need a paragraph. Needs unambiguous evidence that Sam is okay and thinking of her, because a one-word "fine" or a late reply can cost her the whole evening in guessing.',
        needs: [
          'A signal that means one specific thing and cannot be read three ways',
          'Something stable to sit with, rather than a status that keeps changing',
          'A way to reply with warmth that does not put more work on Sam',
        ],
        frustrations: [
          'A vague emoji or a short reply spirals into hours of interpretation',
          '"Last active" timestamps and read receipts give her more to over-read, not less',
          'Asking for reassurance directly feels like adding to a partner who is already depleted',
        ],
        goal: '"I do not need a paragraph. I need to know, without guessing, that they are okay."',
      },
    ],
    assumptions: {
      intro: `Four assumptions I started with. Two broke against the research, and two broke against real users on real devices after launch, which is the more useful half.`,
      items: [
        {
          phase: 'Week 1 · Competitive scan',
          headline: 'Gentler prompt → no prompt at all',
          assumption: `The fix for exhausting check-ins was a gentler, shorter prompt.`,
          finding: `Every word-based app in the scan already had a gentle prompt, so the wording was never the exhausting part; language itself was the price of admission. And the one product that had dropped words entirely sent a buzz that said nothing.`,
          pivot: `Removed words as a requirement entirely. A glow plus a one-word label became the whole unit of a check-in.`,
        },
        {
          phase: 'Week 2 · Personas',
          headline: 'One expressive input → three, always',
          assumption: `A single expressive input, dragging the glow, would feel freeing after all that typing.`,
          finding: `Open-ended input alone excludes people with alexithymia: an unlabelled gradient is just another blank page. And it leaves the receiving partner decoding a colour.`,
          pivot: `Three ways to express, never one: drag the glow, tap a labelled preset, or type your own word. And every glow leaves carrying a word.`,
        },
        {
          phase: 'Week 3 · Calendar',
          headline: 'Month grid → day-by-day list',
          assumption: `The archive should be a conventional seven-column month grid, because that is what a calendar looks like.`,
          finding: `The grid failed on tap-target size, encoded mood by colour alone, made the two-glow concept invisible at that scale, and turned a quiet day into an empty cell.`,
          pivot: `Rebuilt as a scrollable day list with a thin month strip for wayfinding. Quiet days get a full row and plain language, never a gap.`,
        },
        {
          phase: 'Post-launch · v1.1',
          headline: 'Paywall as a wall → paywall with a door',
          assumption: `A signed-in user without a subscription would see the paywall and simply decide.`,
          finding: `When the store products failed to load, that screen had no exit: no retry, no sign out. Signed-in non-paying users were trapped, and force-quitting did not help because the session persisted.`,
          pivot: `Shipped v1.1 with an escape hatch: softer copy, a retry, and a sign-out link on the paywall itself. A dead end is an accessibility failure, not just a bug.`,
        },
      ],
    },
    story: {
      challenge: {
        paragraphs: [
          `Sam is 31, autistic, and in a long-distance relationship. By 8pm the spoons are gone, and the daily "how was your day?" text reads like a job interview with a right answer. Maya is 29, has ADHD and an anxious-leaning attachment style. When Sam's reply is short or late, she spends the rest of the evening guessing.`,
          `The connection products in market split two ways, and both fail this exact evening. Most charge words as the price of admission: text prompts, daily quizzes, long-form journalling, plus streaks and read receipts to make sure you pay. Alexithymia, difficulty naming your own feelings, is present in around half of autistic adults and about 40% of people with ADHD, so for the people who most need a low-cost way to stay close, the fee is the thing they cannot pay. The alternative on the shelf is a wordless buzz that costs nothing to send and says nothing on arrival, which leaves Maya holding a vibration and no idea how Sam's day went.`,
          `Afterglow is self-initiated, built solo, and live on the iOS App Store since 25 July 2026.`,
        ],
        hmw: `How might two people share how a day actually felt without either of them having to find the words, and without the app turning care into a scoreboard?`,
      },
      summary: {
        solution: `Afterglow is one loop plus two ways to look back: set a glow, name it in one word, send it once a day. Your partner receives it with the word already attached and can hold to send warmth back without typing anything. Nine weeks from written brief to an approved native app on the App Store.`,
      },
      timeline: {
        label: 'Nine weeks, brief to App Store',
        items: [
          { when: 'Week 1', what: 'Inclusion principles and competitive scan' },
          { when: 'Weeks 2–3', what: 'Design system: seven states, one language' },
          { when: 'Weeks 4–5', what: 'Native build, Supabase backend, pairing' },
          { when: 'Weeks 6–7', what: 'Subscriptions, paywall, accessibility pass' },
          { when: 'Weeks 8–9', what: 'App Store review: two rejections, then live' },
        ],
      },
      stages: [
        {
          label: 'Research',
          kicker: 'Week 1',
          moments: [
            {
              title: 'Four products, two ways to fail the same evening',
              body: `I mapped the check-in loop across Paired, Lasting, Between, and Bond Touch: what each one asks you to produce, how it arrives at the other end, and what the interface does when you produce nothing at all.`,
              visual: { kind: 'matrix' },
              finding: `The market splits, and neither half works on a hard night. Three charge words as the price of admission. The fourth has already dropped words, and a tap that carries no vocabulary says "I am here" and nothing about the day. Nobody had built the half that matters: wordless to send, and unambiguous to receive.`,
            },
            {
              title: 'Two people, opposite failure modes',
              body: `Sam and Maya are the pair the product is designed for, drawn from the neurodivergent and long-distance couples the brief targets. They break in opposite directions, which is what makes the design hard.`,
              visual: { kind: 'personas' },
              finding: `Sam needs the check-in to cost almost nothing. Maya needs it to be unambiguous. Those pull against each other, because the fastest wordless input is also the vaguest signal. That tension set the two rules the whole product runs on: every glow carries a word, and there is never more than one check-in a day to interpret.`,
            },
          ],
        },
        {
          label: 'Design',
          kicker: 'Weeks 2–3',
          dark: true,
          moments: [
            {
              title: 'Seven states, one room',
              body: `Not seven features. One loop, plus two ways to look back: Arrival, Reflect, Send, Receive, Together, Calendar, Our Story. Reflect was built first as the anchor screen with named Glow and Chip components, and every other state was generated as "duplicate Reflect, change these three things" so the visual language could not drift between screens.`,
              visual: {
                kind: 'image',
                src: '/uploads/afterglow/ds-inputs.png',
                caption: 'Left, Reflect, the anchor screen: drag the glow, tap a labelled chip, or type your own word, with the private note marked "just for you". Right, Receive, its mirror: the partner\'s glow fills the screen with the word already attached, and one hold sends warmth back.',
              },
              finding: `Meaning never rides on colour alone. Every glow carries a word, so a received check-in is legible to a screen reader, to a colour-blind partner, and to an anxious one at 11pm. And hard moods get a slower, wider, steadier breath: the interface co-regulates rather than mirroring agitation back.`,
            },
            {
              title: 'The calendar failed its own test',
              body: `The archive started as a conventional seven-column month grid, because that is what a calendar looks like. It read well and failed almost every inclusion principle I had written down in week one.`,
              visual: {
                kind: 'image',
                src: '/uploads/afterglow/ds-archive.png',
                caption: 'Left, the rebuilt archive: a thin month strip for wayfinding above a day-by-day list, both glows side by side, both moods in words, plain-language dates. Right, tap any day to reopen it as a letter: both glows, both words, both notes, and the times you each checked in.',
              },
              finding: `Tap targets were too small, mood was encoded by colour alone, the two-glow idea was invisible at grid scale, and a missed day read as an empty cell, which is a hole where a punishment used to be. The list version gives a quiet day a full row of its own and names it in plain language: "a quiet day, neither of you checked in."`,
            },
            {
              screenScroll: [
                {
                  src: '/uploads/afterglow/ship-arrival.png',
                  title: 'Presence before action',
                  body: `Open the app and your partner's glow is already holding the room. Nothing is asked of you in order to feel met: no prompt, no empty field, no red dot waiting to be cleared. The footer states the contract out loud, "no streaks, no scores", so a new user knows what kind of place this is.`,
                },
                {
                  src: '/uploads/afterglow/ship-reflect.png',
                  title: 'Three ways to name a day',
                  body: `Drag the glow, tap a labelled chip, or type your own word. Open-ended input alone would have excluded exactly the people this was built for, so the labelled presets are not a shortcut, they are the accessible path. The optional note is marked "just for you" and is never shared, not even with your partner.`,
                },
                {
                  src: '/uploads/afterglow/ship-together.png',
                  title: 'The reward is co-presence, not a streak',
                  body: `Once you have both checked in, the two glows drift and merge into the day's shared colour, and the app offers a wordless minute of breathing together. It happens once a day, then you live in the merged state until midnight. Nothing to maintain, nothing to lose.`,
                },
                {
                  src: '/uploads/afterglow/ship-both-here.png',
                  title: 'Both here, and you can feel it',
                  body: `The moment both of you are present, the screen says so in words — "both here", both moods named — and the phone joins in. The shared breath drives a tick of haptic feedback on each inhale, their glow landing is a soft rumble, and warmth arriving is a longer one. On an evening with no words left, the phone in your hand is doing the talking. Haptics are gentle by default and mutable in one tap.`,
                },
                {
                  src: '/uploads/afterglow/ship-our-story.png',
                  title: 'A run of evenings, as tree rings',
                  body: `Our Story is the poetic archive to the Calendar's literal one: the same data, woven from both people's glows over time. Re-readable like a letter archive, rather than scrollable like a feed.`,
                },
                {
                  src: '/uploads/afterglow/ship-paywall.png',
                  title: 'A paywall that keeps the same promises',
                  body: `It would be hypocritical to build a no-pressure app and then apply pressure at the till. One subscription unlocks Afterglow for both partners, only one of you needs to pay, the trial is stated plainly, and cancelling is one tap in store settings. No fake scarcity, no guilt on the way out.`,
                },
              ],
              finding: `The line I held on monetisation: never paywall connection itself, only depth and memory. The daily ritual, receiving your partner's glow, and sending warmth back stay free forever. People pay to keep and revisit the story they built together, which is where the attachment actually lives.`,
            },
          ],
        },
        {
          label: 'Ship',
          kicker: 'Weeks 4–9',
          moments: [
            {
              title: 'The half most case studies stop before',
              body: `Design was the first half. The second was a Supabase backend, partner pairing, a per-day check-in cadence, RevenueCat subscriptions across two stores, and App Store review.`,
              finding: `Two rejections, both mine, both instructive. The first was metadata: the description never named that a subscription was required, and both subscription tiers shared the same display name. The second was Guideline 4, on design: my Sign in with Apple button was text-only next to a Google button with a logo, so the two sign-in paths were not visually equal. Approved on the third submission, 25 July 2026.`,
            },
            {
              title: 'Emotional data, handled like it matters',
              body: `The app holds mental-health-adjacent data about two people at once, so the defaults had to be conservative from the first line of the schema rather than retrofitted before review.`,
              finding: `No ad SDKs, no third-party sharing, encrypted in transit, in-app account deletion, and a "just for you" note that never reaches the partner. Plus one deliberate refusal: Afterglow never interprets your mood for you. No model reads your glow and tells you what you are feeling, because the entire premise is that you name it yourself.`,
            },
          ],
        },
        {
          label: 'Pivots',
          kicker: 'Week 1 – post-launch',
          dark: true,
          moments: [
            { afp: true },
          ],
        },
      ],
      results: {
        kicker: 'Live',
        stats: [
          { value: 'Live', label: 'on the iOS App Store, approved 25 July 2026' },
          { value: '7', label: 'states of one ritual, one design language' },
          { value: '9', label: 'weeks from written brief to approved app' },
          { value: '0', label: 'streaks, badges, read receipts, or last-seen' },
        ],
        body: `Afterglow is live on the iOS App Store with subscriptions in production, and an Android build in closed testing on Google Play. It went from a written brief to an approved native app in nine weeks, solo: eight inclusion principles, seven states in one design language, a Supabase backend with partner pairing, cross-store subscriptions, and three trips through App Store review.\n\nWhat I would do next, in order: run a four-week diary study with ten neurodivergent couples, because the daily cadence and the no-streaks contract are the two design hypotheses I most want tested by people who are not me; get the Android build through the closed-testing gate to production; and revisit Our Story, which is the state with the least evidence behind it.`,
        quote: `The bet was simple. If you remove words as the price of admission, more people get to be witnessed by their person more often. Everything else in the product is in service of not charging that fee.`,
      },
    },
  },
  {
    slug: 'mhclg-grants',
    title: 'Grants Services for 200+ UK Local Authorities',
    tagline: 'Research that evidenced WCAG 2.1 AA compliance across 200+ Local Authorities, and gave the delivery team an audit trail GDS assessors could trust, embedded into sprint, not bolted on at the end.',
    niche: ['Government', 'GDS', 'Accessibility', 'User Research'],
    type: 'Government',
    featured: true,
    client: 'Ministry of Housing, Communities & Local Government (MHCLG)',
    tools: ['Semi-structured interviews', 'Usability testing', 'Affinity mapping', 'Dovetail', 'GDS Service Standard mapping'],
    overview: {
      team: 'Product manager, delivery manager, 2 service designers, interaction designer, content designer, 2 developers',
      industry: 'UK Public Sector / GDS-assessed digital services',
    },
    problem: `Grant officers across more than 200 UK Local Authorities use public-sector services that have to pass the GDS Service Standard. The challenge isn't shipping a feature. It's evidencing, to an assessor's standard, that the service meets Point 1 (Understand users and their needs) and Point 5 (Make sure everyone can use the service), with a research trail an assessor can audit and a service that actually works for assistive-technology users.\n\nHow do we make research strong enough to evidence the Service Standard, accessible enough to land WCAG 2.1 AA, and embedded enough that findings shape design in sprint rather than sit in a report nobody reads?`,
    insight: `GDS isn't a checklist. It's a way of evidencing your thinking. Once you internalise that, the work gets cleaner, research stops being a separate phase and becomes the through-line of how the team makes every decision.`,
    assumptions: {
      intro: `We came in with a stack of reasonable-sounding assumptions about how grant officers used the service and where the friction lived. Field research broke most of them. These are the three pivots that shaped the design.`,
      items: [
        {
          assumption: `Grant officers wanted a single unified dashboard across every grant scheme they administered.`,
          finding: `Officers worked scheme-by-scheme. Each scheme had its own eligibility rules, evidence requirements, and reporting cadence. A "one big dashboard" flattened the differences and hid the rules that mattered. Officers were context-switching between schemes, not synthesising across them.`,
          pivot: `Redesigned around a scheme-aware workspace. Shared components for the mechanics that were common (evidence upload, applicant messaging, award calculation), scheme-specific rules and language in the parts that weren't. Officers stopped fighting the interface to remember which rules applied.`,
        },
        {
          assumption: `Accessibility for this service was largely about screen-reader compatibility on the applicant-facing pages.`,
          finding: `Screen-reader coverage was a fraction of the story. The bigger accessibility barrier for both officers and applicants was cognitive load, dense forms, unclear error handling, and jargon that assumed prior knowledge of the grants system. Assistive-tech users flagged the same issues, only more sharply.`,
          pivot: `Reframed accessibility as a full-journey concern. Chunked long forms into step-by-step flows, rewrote errors to describe the fix in plain English, and stripped jargon in collaboration with content design. WCAG 2.1 AA was the floor, cognitive accessibility was the ceiling.`,
        },
        {
          assumption: `Applicants were the bottleneck, they needed more guidance on the front end to reduce back-and-forth.`,
          finding: `Officers were the bottleneck, not applicants. Most officer time was spent chasing missing or incorrect evidence from applicants after submission, rework the applicant-side journey had quietly created. The friction started upstream.`,
          pivot: `Redesigned the applicant upload journey with inline validation and evidence checklists tied to each scheme. Reduced the "return-for-more-info" loop before it reached the officer, freeing officer time for the judgement work only they could do.`,
        },
      ],
    },
    serviceMap: {
      intro: `A service blueprint of the grants journey, applicant above the line of interaction, officer frontstage, systems and support processes below. The as-is blueprint surfaced where context dropped between lanes. The refined blueprint shows where the seams were closed.`,
      asIs: {
        title: 'As-is service blueprint',
        subtitle: 'The grants journey before redesign, friction visible at every line of handoff.',
        tone: 'as-is',
        columns: ['Discover', 'Apply', 'Triage', 'Return for info', 'Decide & award', 'Report'],
        rows: [
          { label: 'Time', kind: 'time', cells: ['2–5 days', '10–20 min', '1–2 days', '5–14 days', '3–7 days', 'Monthly'] },
          { label: 'Evidence', kind: 'evidence', cells: ['GOV.UK, LA websites', 'PDF or web form', 'Case system UI', 'Email thread', 'Award letter', 'MHCLG return template'] },
          { label: 'Customer journey', kind: 'customer', cells: ['Searches for scheme, unsure of eligibility', 'Submits long single-page form', '(waits, no visibility)', 'Sends missing evidence, sometimes wrong', 'Receives award decision', null] },
          { label: 'Frontstage actions', kind: 'frontstage', cells: [null, null, 'Officer triages, checks scheme rules from memory', 'Officer emails applicant for missing evidence', 'Officer notifies applicant of award', null] },
          { label: 'Technology', kind: 'technology', cells: ['GOV.UK, LA sites', 'Web form or PDF', 'Case system + parallel spreadsheet', 'Email', 'Case system + letter template', 'Excel export'] },
          { label: 'Backstage actions', kind: 'backstage', cells: [null, null, 'Officer maintains parallel spreadsheet', null, 'Officer calculates award offline in Excel', 'Officer reformats data for return'] },
          { label: 'Support processes', kind: 'support', cells: ['Scheme rules on team wiki', null, 'Team wiki, senior officer escalation', null, 'Approval hierarchy, manager sign-off', 'MHCLG return template, manual reconciliation'] },
        ],
        dividers: [
          { afterRowIndex: 2, label: 'Line of interaction', style: 'dashed' },
          { afterRowIndex: 3, label: 'Line of visibility', style: 'solid' },
          { afterRowIndex: 5, label: 'Line of internal interaction', style: 'dashed' },
        ],
      },
      refined: {
        title: 'Refined service blueprint',
        subtitle: 'After the pivots, context and evidence carry across the lines instead of dropping between them.',
        tone: 'refined',
        columns: ['Discover', 'Apply', 'Triage', 'Request info', 'Decide & award', 'Report'],
        rows: [
          { label: 'Time', kind: 'time', cells: ['5–10 min', '15–30 min', 'Same day', '1–3 days', '1–2 days', 'On demand'] },
          { label: 'Evidence', kind: 'evidence', cells: ['Eligibility checker result', 'Scheme-specific checklist', 'Case thread', 'Targeted evidence request', 'Evidence-linked decision', 'Auto-generated return'] },
          { label: 'Customer journey', kind: 'customer', cells: ['Answers plain-English eligibility questions', 'Completes chunked flow with inline validation', '(sees case status in real time)', 'Uploads targeted evidence in one round', 'Receives decision with reasoning', null] },
          { label: 'Frontstage actions', kind: 'frontstage', cells: [null, null, 'Officer triages in scheme-aware workspace', 'Officer sends structured evidence request', 'Officer confirms decision, reasoning captured', null] },
          { label: 'Technology', kind: 'technology', cells: ['Eligibility checker on GOV.UK', 'Chunked form, per-scheme validation', 'Scheme-aware case workspace', 'Structured evidence upload', 'In-service award calculator', 'Reporting engine (data pipeline)'] },
          { label: 'Backstage actions', kind: 'backstage', cells: [null, null, 'Scheme rules encoded in workspace, no parallel spreadsheet', null, 'Decision and evidence linked in case record', 'Returns generated from live case data'] },
          { label: 'Support processes', kind: 'support', cells: ['Scheme rules maintained in one source', null, 'In-context guidance for scheme rules', null, 'Approval workflow inside the service, audit-ready', 'MHCLG return automated, reconciliation reduced to review'] },
        ],
        dividers: [
          { afterRowIndex: 2, label: 'Line of interaction', style: 'dashed' },
          { afterRowIndex: 3, label: 'Line of visibility', style: 'solid' },
          { afterRowIndex: 5, label: 'Line of internal interaction', style: 'dashed' },
        ],
      },
    },
    process: [
      {
        step: 'Service Standard mapping (before kickoff)',
        detail: 'Mapped the research plan against the GDS Service Standard points before delivery started. So we were collecting the right evidence for assessment from day one, not retrofitting research to fit criteria at the end.',
      },
      {
        step: 'Mixed-method primary research',
        detail: 'Surveys and semi-structured interviews with grant officers across multiple Local Authorities. The variation across LAs matters, a service that works in Westminster has to work in a rural district council too.',
      },
      {
        step: 'Accessibility built into recruitment',
        detail: 'Included users of assistive technology as a planned research stream, not a sign-off step at the end. You can\'t audit your way to AA, you have to design for it from the first wireframe and test for it throughout.',
      },
      {
        step: 'Moderated usability testing on prototypes',
        detail: 'Round-by-round testing with assistive-tech users included. Findings fed back into design within the same sprint.',
      },
      {
        step: 'Cross-functional alignment with content designer',
        detail: 'Worked closely with content design to align language with GDS style, plain English, no jargon, no assumed knowledge. Content and research are one decision, not two.',
      },
      {
        step: 'Structured insight repository',
        detail: 'Maintained a repository where any design decision could be traced back to specific research evidence. The team, and any assessor, could replay the chain from observation → insight → design change.',
      },
      {
        step: 'Working a sprint ahead',
        detail: 'Research ran one sprint ahead of delivery. The team never waited on research; research never waited on the team. The bottleneck simply didn\'t exist.',
      },
    ],
    metrics: [
      { label: 'UK Local Authorities reached', value: '200+' },
      { label: 'Accessibility standard', value: 'WCAG 2.1 AA' },
      { label: 'GDS Service Standard points', value: 'Point 1 & 5' },
      { label: 'Research bottleneck on delivery', value: 'zero' },
    ],
    businessOutcomes: [
      { metric: 'WCAG 2.1 AA across 200+ Local Authorities', translation: 'Public services that are legally compliant under the 2018 accessibility regulations and genuinely usable for assistive-technology users, not just passing a sign-off audit.' },
      { metric: 'Reusable insight repository', translation: 'Became an asset for the wider grants directorate, other teams could trace decisions through the same chain rather than rebuilding the research function from scratch each workstream.' },
      { metric: 'Sprint-ahead research cadence', translation: 'Delivery teams never blocked waiting on research findings. Research velocity matched engineering velocity for the duration of the engagement.' },
    ],
    tradeoffs: [
      {
        decision: 'Owned: the research function on this workstream',
        reasoning: `As the sole researcher on this delivery team, everything from research planning, recruitment, fieldwork, analysis, synthesis and playbacks was mine. Where I collaborated was on study design (bringing service designers and the PM in to shape questions) and on synthesis (affinity mapping with the team rather than alone, because shared sense-making builds shared ownership of the insight).`,
      },
      {
        decision: 'Said no: research-as-a-stack-of-findings',
        reasoning: `Assessors don\'t want to see a thick deck. They want to see how research changed the product. So every output was shaped around three things I had to be able to show at any point: who we\'d spoken to and why those people, what we\'d learned from them mapped to specific journey steps, and how that learning had changed a design decision. The third thing is what passes the assessment.`,
      },
    ],
    solution: `Research embedded into the delivery cadence rather than bolted onto it. Every design decision had a traceable evidence chain. Accessibility was tested with assistive-technology users from discovery onward, not as a final sign-off step. The team\'s insight repository was structured so any researcher, designer, or assessor could replay the path from observation to decision.\n\nThe shipped output was a set of grants services across 200+ Local Authorities that meet WCAG 2.1 AA across the full journey, not just the homepage. Colour contrast at 4.5:1, keyboard navigation through every flow, visible focus states, screen-reader compatibility, descriptive error messages, and content readable at a reasonable cognitive load.`,
    takeaway: `You can\'t audit your way to AA at the end, you have to design for it from the first wireframe and test for it throughout. That\'s the difference between a service that scrapes through assessment and one that\'s actually usable. The same goes for GDS as a whole: it isn\'t a compliance gate, it\'s a discipline. Internalise it and the work gets cleaner.`,
    tags: ['Government', 'GDS', 'Public Sector', 'WCAG 2.1 AA', 'Accessibility', 'User Research', 'Service Standard', 'Assistive Technology'],
  },
  {
    slug: 'kaizen',
    title: 'Kaizen: Personal Finance OS',
    tagline: 'A personal finance OS explored with Monzo: budget, goals, and auto-investing in one product, designed from marketing site to onboarding to dashboard across four sprints.',
    niche: ['Fintech Consumer', 'Product design', 'Visual design'],
    type: 'Fintech Consumer',
    featured: true,
    client: 'Monzo',
    duration: '4 design sprints · 2026',
    tools: ['Figma', 'FigJam', 'CSS design tokens', 'Claude (research drafting)', 'Cursor (prototype build)'],
    prototype: '/kaizen/Kaizen.html',
    wip: 'Mobile version scoped for Sprint 5',
    processTitle: 'Process timeline',
    businessOutcomes: [
      { metric: '3 visual systems · onboarding → dashboard', translation: 'Reduced concept-to-pressure-test cycle from weeks to days, three full visual directions, each carried through onboarding to the dashboard, before committing to one design language. The work most fintech teams ship as a Figma mockup, shipped as a working browser product.' },
      { metric: '0 / 4 competitors connect budget, goals, and investing', translation: 'The competitive audit defines the product opportunity in one number: a clear adjacent-category gap, not a feature gap. Validated as a real white-space, not just a designer\'s hunch.' },
    ],
    heroImage: '/uploads/kaizen/hero.png',
    background: {
      understandingNeedsTitle: 'Why consumer fintech is fragmented, and who it fails',
      understandingNeeds: `Consumer fintech is a solved problem in parts. YNAB is the best budgeting tool ever built. Wealthsimple makes index investing frictionless. Monzo has redesigned what a bank account feels like. But none of them talk to each other. A 27-year-old designer in London who budgets in YNAB, invests with Wealthsimple, and tracks a house-deposit goal in a Notes doc is using three tools to do one job: build wealth deliberately. The gap isn't a missing feature. It's a missing product category.`,
      personalDrive: `The design question behind Kaizen: what does a personal finance product look like when it's designed as a coherent system, not assembled from separate tools? That starts with understanding why every existing tool fails the same user in the same way.`,
      innovativeMethods: `Audit-first, design-last. A competitive audit of four leading tools provided the problem definition. Three personas grounded every design decision. Three distinct visual directions were explored and pressure-tested before narrowing to a single design language.`,
    },
    problem: `Freya, 27. Junior product designer. Three apps open: YNAB for budget tracking, a Wealthsimple ISA she opened eighteen months ago and hasn't touched since, and a Notes doc where she tracks her Tokyo trip goal. None of them talk to each other. She knows she should be investing more. She doesn't know how much she can afford. She's not going to open a fourth app to find out.\n\nHow might we design a personal finance OS that treats money as a long-term practice, not a daily anxiety, and gives users budget, goals, and auto-investing in one quiet, confident interface?`,
    insight: `After mapping onboarding and primary flows across four leading tools, the pattern was consistent: each one optimises for a single job. YNAB is the best budgeting tool in the world, and completely blind to investing. Wealthsimple handles portfolios beautifully, with no visibility into your rent. The gap isn't a missing feature. It's that no product connects the three financial practices into one coherent ledger. Users who want all three either use three apps, or give up on one of them.`,
    assumptions: {
      intro: `Four assumptions I started with. Each one broke against research, and each break moved the design. This is the chronological spine of the project.`,
      items: [
        {
          phase: 'Weeks 1–2 · Competitive audit',
          headline: 'Missing feature → missing category',
          assumption: `The gap in consumer fintech was a missing feature: smarter goals, better auto-invest.`,
          finding: `Auditing YNAB, Wealthsimple, Betterment and Monzo, every tool nailed its one job. 0 of 4 connected budget, goals and investing.`,
          pivot: `Reframed the brief from "build a better feature" to "design the connective layer none of them have."`,
        },
        {
          phase: 'Week 3 · Personas',
          headline: 'Anxious beginner → capable but fragmented',
          assumption: `The user is a finance-anxious beginner who needs education and hand-holding.`,
          finding: `Tested against real reference users, the blocker was fragmentation and paralysis, not knowledge. Aisha earns £95k and still won't move her savings.`,
          pivot: `Cut the educational onboarding direction. Designed for competent adults who want one clear picture, not a course.`,
        },
        {
          phase: 'Weeks 4–5 · Onboarding',
          headline: 'Account-first → goal-first',
          assumption: `Onboarding should open by connecting a bank account, like every competitor does.`,
          finding: `Account-first is exactly where audited users dropped off: "I don't know my risk tolerance, I just want to save for a house."`,
          pivot: `Goal-first onboarding. Opens with "What are you saving for?", a question every persona can answer before committing.`,
        },
        {
          phase: 'Weeks 6–7 · Visual direction',
          headline: 'One direction → three, pressure-tested',
          assumption: `One strong visual direction, refined early, would be enough.`,
          finding: `Freya, Marcus and Aisha have different aesthetic thresholds. Committing early would win one and lose the others.`,
          pivot: `Built three complete, switchable design languages as live themes, then narrowed to Quiet Premium.`,
        },
      ],
    },
    deskResearch: {
      summary: `Competitive audit of four leading consumer fintech products: Wealthsimple, Betterment, YNAB, and Monzo Investments. Mapped onboarding flows, primary navigation, data architecture, and visual identity for each. Identified the shared failure pattern driving the project brief.`,
      stats: [
        { value: '4', label: 'Apps audited, Wealthsimple, Betterment, YNAB, Monzo Investments' },
        { value: '0/4', label: 'Products that connect budget, goals, and investing in one interface' },
        { value: '3', label: 'Visual directions explored before narrowing to the Quiet Premium theme' },
        { value: '12', label: 'Primary user flows mapped across the four audited products' },
      ],
      findings: [
        'YNAB is the most powerful budgeting tool in the category, and has zero investing functionality. Users who invest separately carry permanent cognitive overhead across two completely disconnected tools.',
        'Wealthsimple\'s goal-setting is disconnected from spending. You can create a "house deposit" goal, but the app has no visibility into your actual budget or monthly savings rate, the goal is decorative.',
        'Betterment (US) is the closest to a unified product, but goal-based investing has no connection to a budget view. Users can\'t see how their discretionary spending affects their auto-invest capacity.',
        'Monzo Investments is passive-first and deliberately lightweight: three ETF baskets, no goals, no budget integration, no meaningful data density for users who want visibility into their financial position.',
        'All four products have coherent visual identities, but none look like they were designed for someone who takes their finances seriously. YNAB\'s colour-coding reads as gamification; Monzo feels like a bank extension, not a financial product built for intelligent adults.',
      ],
      gap: 'All four tools solve one job well. None of them connect budget, goals, and investing into a single coherent practice. A user who wants all three either manages three apps, or quietly abandons the one that matters most.',
      competitiveAudit: {
        tools: [
          {
            name: 'YNAB',
            category: 'Budgeting',
            verdict: 'Best-in-class budgeting',
            features: [
              { label: 'Budget view', score: 'full' },
              { label: 'Goal tracking', score: 'partial' },
              { label: 'Investing', score: 'none' },
              { label: 'Budget / invest link', score: 'none' },
              { label: 'Design maturity', score: 'partial' },
            ],
            gap: 'Most powerful budgeting tool in the category. Zero investing functionality. Users who invest separately carry permanent cognitive overhead across two disconnected tools.',
          },
          {
            name: 'Wealthsimple',
            category: 'Investing',
            verdict: 'Goals are decorative',
            features: [
              { label: 'Budget view', score: 'none' },
              { label: 'Goal tracking', score: 'partial' },
              { label: 'Investing', score: 'full' },
              { label: 'Budget / invest link', score: 'none' },
              { label: 'Design maturity', score: 'full' },
            ],
            gap: 'Goal-setting is disconnected from spending. No budget visibility, no savings rate. You can create a "house deposit" goal, but the app has no idea if you can afford it.',
          },
          {
            name: 'Betterment',
            category: 'Robo-advisor (US)',
            verdict: 'Closest to unified, still siloed',
            features: [
              { label: 'Budget view', score: 'none' },
              { label: 'Goal tracking', score: 'full' },
              { label: 'Investing', score: 'full' },
              { label: 'Budget / invest link', score: 'partial' },
              { label: 'Design maturity', score: 'full' },
            ],
            gap: 'Closest to a unified product. But goal-based investing has no connection to a budget view. Discretionary spending is invisible to the investment layer.',
          },
          {
            name: 'Monzo',
            category: 'Banking + Investing',
            verdict: 'Passive-first, deliberately lightweight',
            features: [
              { label: 'Budget view', score: 'partial' },
              { label: 'Goal tracking', score: 'none' },
              { label: 'Investing', score: 'partial' },
              { label: 'Budget / invest link', score: 'none' },
              { label: 'Design maturity', score: 'partial' },
            ],
            gap: 'Three ETF baskets, no goals, no budget integration, no data density. Feels like a bank extension, not a financial product built for someone who takes money seriously.',
          },
        ],
      },
    },
    personas: [
      {
        name: 'Freya Walsh',
        age: 27,
        photo: '/uploads/personas/freya.jpg',
        type: 'The Passive Investor',
        description: 'Junior product designer at a London agency. Earns £42k. Has YNAB but abandoned it after three weeks, too granular for how she actually thinks about money. Has a Wealthsimple ISA she opened after a podcast and hasn\'t touched in 18 months. Tracks a Tokyo trip goal in a Notes doc.',
        needs: [
          'One place that shows her full financial picture without requiring a spreadsheet',
          'Auto-invest she can configure once and forget, she doesn\'t want to think about it weekly',
          'A product that feels designed, not fintech-ified, she\'ll abandon anything that looks like a bank',
        ],
        frustrations: [
          'Switching between three apps to construct a picture she can never quite see',
          'Guilt about the ISA she\'s been meaning to top up since January',
          'Money apps that feel either clinical and overwhelming, or simplified to the point of uselessness',
        ],
        goal: '"I just want to know: am I on track? And if not, what do I actually need to do differently?"',
      },
      {
        name: 'Marcus Osei',
        age: 31,
        photo: '/uploads/personas/marcus.jpg',
        type: 'The Data-Hungry Saver',
        description: 'Software engineer. Earns £78k. Saves inconsistently, good months and bad months, no system. Uses Monzo as his main account, has a S&S ISA from 2022 he hasn\'t added to. Budgets by checking his balance every few days. Has no idea what his net worth actually is.',
        needs: [
          'A single dashboard that calculates net worth automatically across accounts',
          'Meaningful data density, he\'s technical and wants to see the numbers, not a simplified score',
          'Goal-based auto-invest that requires no manual action once configured',
        ],
        frustrations: [
          'Monzo shows transactions but not his portfolio; Wealthsimple shows his portfolio but not his life context',
          'No tool shows him the whole picture in one place',
          'Budgeting "by feel" works until it doesn\'t, he\'s had three months this year where he saved nothing',
        ],
        goal: '"Tell me my number. Tell me if I\'m behind. Tell me what to do, and then leave me alone."',
      },
      {
        name: 'Aisha Patel',
        age: 34,
        photo: '/uploads/personas/aisha.jpg',
        type: 'The Paralysed High-Earner',
        description: 'Senior management consultant. Earns £95k. Saves aggressively, into a 1.5% APY savings account, because she\'s been meaning to move it to a S&S ISA for two years and hasn\'t. Has a Hargreaves Lansdown account she doesn\'t understand how to use. Cares about product quality, she\'ll abandon anything that looks cheap.',
        needs: [
          'Decision-reducing interface, a few portfolio options, not five hundred funds',
          'A product that earns aesthetic trust before it earns financial trust',
          'Clear evidence that her money is growing relative to a goal she actually has',
        ],
        frustrations: [
          'HL feels like 1998. Every robo-advisor marketing site looks identical.',
          'No product has ever earned her visual trust, and if it doesn\'t look right, she won\'t enter her bank details',
          'She knows she\'s losing thousands per year to inflation sitting in a savings account. She still hasn\'t moved it.',
        ],
        goal: '"Give me one interface that looks like it was designed for someone who cares about quality, and I\'ll actually use it."',
      },
    ],
    process: [
      {
        phase: 'Weeks 1–3 · Research & direction',
        step: 'Competitive audit',
        detail: 'Mapped onboarding and primary flows across Wealthsimple, Betterment, YNAB, and Monzo Investments. Documented data architecture, visual language, and primary navigation for each. Identified the shared failure pattern: every tool optimises one job and is blind to the other two.',
      },
      {
        phase: 'Weeks 1–3 · Research & direction',
        step: 'Persona development',
        detail: 'Built three composite archetypes from the audit findings and target demographic research: Freya (passive investor, 27), Marcus (data-hungry saver, 31), and Aisha (paralysed high-earner, 34). Each represents a distinct failure mode in existing products, and a distinct design requirement.',
      },
      {
        phase: 'Weeks 1–3 · Research & direction',
        step: 'Visual direction exploration',
        detail: 'Explored three visual directions, Editorial (warm bone + ember red), Quiet Premium (onyx + periwinkle, surgical sans-serif), and Confident Warm (terracotta + sage). Built all three as live, toggleable CSS themes sharing one token contract, so the comparison is interactive rather than static.',
      },
      {
        phase: 'Weeks 4–6 · Design & build',
        step: 'Design language & token system',
        detail: 'Defined a three-theme design language covering type scale, spacing, radii, motion, and full surface palettes. Each theme shares the same structural decisions, swapping only the surface palette. One design system, three distinct visual personalities.',
      },
      {
        phase: 'Weeks 4–6 · Design & build',
        step: 'Component library',
        detail: 'Designed a full component set in Figma: wordmark (3 variants), money display, sparkline, donut chart, bar chart, area chart, progress bar, avatar, and a 20-icon set. Every component is theme-agnostic, consuming design tokens rather than hardcoded values.',
      },
      {
        phase: 'Weeks 4–6 · Design & build',
        step: 'Marketing site',
        detail: 'Designed a full marketing page addressing Aisha\'s trust requirement: editorial hero with product data artefact, feature grid, pricing panel, security section, testimonials, and FAQ. Every layout decision prioritises visual credibility before financial commitment.',
      },
      {
        phase: 'Weeks 6–8 · Product & iteration',
        step: 'Core product, 6 screens',
        detail: 'Designed Dashboard (net worth hero, area chart, spending cards, AI insight, for Marcus\'s "tell me my number" need), Budget (donut + category bars, trend chart, for Freya\'s picture-in-one-place need), Goals, Invest, Transactions, and Settings. Every screen traces to a specific persona need from the audit phase.',
      },
      {
        phase: 'Weeks 6–8 · Product & iteration',
        step: '5-step onboarding flow',
        detail: 'Goal-first onboarding: Welcome → Connect bank → Pick goals → Portfolio selection → Review. Starts with "What are you saving for?", a question everyone can answer before any commitment is required. Directly counters the audit finding that competitors start with account creation or risk profile questionnaires, which users cited as the moment they abandoned onboarding.',
      },
      {
        phase: 'Weeks 6–8 · Product & iteration',
        step: 'Design review and iteration',
        detail: 'Ran a full design review across all screens, applying 15+ revisions: hero layout, type hierarchy (removed italic headings throughout), spacing consistency, nav sizing, and card height matching. Each change was evaluated against the three persona needs before being applied.',
      },
    ],
    metrics: [
      { label: 'Competitor products audited', value: '4 apps, 12 flows' },
      { label: 'Visual directions explored', value: '3 themes' },
      { label: 'Product screens designed', value: '8 (marketing + onboarding + 6 product)' },
      { label: 'Design decisions traced to research', value: 'Every one' },
    ],
    solution: `Kaizen is a fully designed personal finance OS. A full marketing site built to earn Aisha's trust, a goal-first 5-step onboarding that counters the drop-off pattern in every audited competitor, and six product screens covering every job Marcus and Freya need. Three visual directions (Editorial, Quiet Premium, and Confident Warm) each explored as complete design languages before narrowing.`,
    takeaway: `Three things I would do next: (1) recruit 5 people from the target cohort and run task-based usability sessions: the onboarding flow and dashboard-first architecture are the highest-risk design hypotheses; (2) design the mobile experience: all screens were designed desktop-first, and the budget and goals views need a mobile-native layout rethink; (3) connect the goals engine to the invest allocation: the next iteration would calculate an auto-invest amount from goal target date and current balance, making the connection between saving and investing visible in the UI.`,
    tags: ['Fintech Consumer', 'Product design', 'Visual design', 'Design system', 'Multi-screen', 'Self-initiated'],
    overview: {
      team: 'Product manager, 2 engineers, brand designer',
      industry: 'Consumer fintech',
      status: 'Engagement paused at the end of Sprint 4. Usability testing with the target cohort is scoped as Sprint 5.',
    },
    designDecisions: [
      {
        decision: 'Three visual directions explored as complete design languages',
        rationale: 'Freya, Marcus, and Aisha have different aesthetic expectations, and committing to one direction too early would have satisfied one persona at the expense of the others. Designing Editorial, Quiet Premium, and Confident Warm as complete, switchable design languages (not just colour swaps) forced each direction to stand on its own before a choice was made.',
      },
      {
        decision: 'Goal-first onboarding, not account-first',
        rationale: 'The audit finding: every competitor starts with account creation or a risk tolerance questionnaire. Users in the target cohort cited this as the moment they abandoned onboarding: "I don\'t know my risk tolerance, I just want to save for a house." Kaizen starts with "What are you saving for?" A question Freya, Marcus, and Aisha can all answer before any commitment is required.',
      },
      {
        decision: 'Dashboard-first architecture, not transactions-first',
        rationale: 'Monzo and YNAB both open to a transaction feed. The audit showed this optimises for daily check-ins but fails Marcus\'s core need: "tell me my number." Kaizen opens to net worth. The distinction maps directly to the difference between a banking app (what did I spend?) and a financial OS (am I on track?).',
      },
      {
        decision: 'All-sans-serif type, weight-only hierarchy',
        rationale: 'An early direction used editorial serif with italic headings. Dropped after recognising that mixing bold and italic in the same heading breaks hierarchy, and that Aisha\'s aesthetic benchmark is closer to Stripe or Linear than to a financial magazine. All-sans-serif throughout, weight as the only hierarchy signal.',
      },
    ],
    outcomes: {
      summary: 'A research-informed, fully interactive consumer fintech prototype exploring what a coherent budget + goals + investing OS could look like.',
      keyOutcomes: [
        'Competitive audit of 4 apps (12 flows) surfaced the fragmentation gap that drove the entire design brief',
        '3 personas grounded every major design decision: goal-first onboarding, dashboard architecture, and visual direction all trace to a specific persona need',
        'Three complete visual directions explored before committing; each one pressure-tested as a full design language, not a colour swap',
        'Every screen maps to a specific research finding; no design decision is arbitrary',
      ],
      learned: 'Consumer fintech\'s problem isn\'t missing features. Every tool is missing the same thing: the conviction that connecting budget, goals, and investing into one coherent visual and interaction language is worth designing. This project is the proof of concept.',
    },
    gallery: [
      { src: '/uploads/kaizen/hero.png', caption: 'Marketing hero: fullscreen editorial layout with live net worth artefact and area chart. Designed to earn Aisha\'s visual trust before asking for financial commitment.', type: 'prototype' },
      { src: '/uploads/kaizen/dashboard.png', caption: 'Dashboard: net worth hero, dual-series area chart, spending cards, recent activity, and AI insight card. Answers Marcus\'s "tell me my number" need in the first viewport.', type: 'prototype' },
      { src: '/uploads/kaizen/budget.png', caption: 'Budget: donut summary, 6 category progress bars, 6-month trend chart, and pattern-detected insight card. Freya\'s picture-in-one-place, without the YNAB complexity.', type: 'prototype' },
      { src: '/uploads/kaizen/goals.png', caption: 'Goals: 6 active goals with progress bars, weekly auto-allocation amounts, and contextual notes. The missing link between Freya\'s Notes doc and her ISA.', type: 'prototype' },
      { src: '/uploads/kaizen/invest.png', caption: 'Invest: holdings table, allocation donut (80/20), performance cells, and tax-loss harvesting card. Decision-reducing by design: a few clear positions, not 500 fund options.', type: 'prototype' },
      { src: '/uploads/kaizen/transactions.png', caption: 'Transactions: day-grouped activity feed with summary bar (money in / out / net). Context for the dashboard, not the primary entry point.', type: 'prototype' },
      { src: '/uploads/kaizen/onboarding.png', caption: 'Onboarding: goal-first 5-step flow. Starts with "What are you saving for?" Counters the account-first pattern that every audited competitor uses and users consistently abandon.', type: 'prototype' },
    ],
    story: {
      challenge: {
        paragraphs: [
          `Freya, 27, budgets in YNAB, holds a Wealthsimple ISA she hasn't touched in 18 months, and tracks her Tokyo trip goal in a Notes doc. Three apps for one job: building wealth deliberately. She knows she should invest more. She doesn't know how much she can afford. And she's not opening a fourth app to find out.`,
          `Kaizen is a concept explored with Monzo over four design sprints. Monzo already owns Freya's current account and her trust, and stops exactly where her wealth-building practice begins. This is the layer that completes it. The work is paused at the end of Sprint 4.`,
        ],
        hmw: `How might Monzo own the whole practice: budget, goals, and auto-investing in one quiet, confident interface that treats money as a long-term habit, not a daily anxiety?`,
      },
      summary: {
        solution: `Kaizen is that layer, designed end to end: a marketing site built to earn visual trust, a goal-first five-step onboarding, and six product screens in one design language, shipped as a working browser prototype rather than a static mockup.`,
      },
      timeline: {
        label: 'Four sprints, then paused',
        items: [
          { when: 'Sprint 1', what: 'Competitive audit: 4 apps, 12 flows' },
          { when: 'Sprint 2', what: 'Personas and the category reframe' },
          { when: 'Sprint 3', what: 'Design language and marketing site' },
          { when: 'Sprint 4', what: 'Onboarding and 6 product screens' },
          { when: 'Sprint 5 · scoped', what: 'Usability testing and mobile pass', scoped: true },
        ],
      },
      stages: [
        {
          label: 'Research',
          kicker: 'Sprints 1–2',
          dark: true,
          moments: [
            {
              title: 'Four competitors, one blind spot',
              body: `I mapped onboarding flows, primary navigation, and data architecture across YNAB, Wealthsimple, Betterment, and Monzo Investments. Twelve flows in total.`,
              visual: { kind: 'matrix' },
              finding: `0 of 4 products connect budget, goals, and investing. Every tool nails its one job and is blind to the other two. That reframed the brief: not a better feature, but the connective layer none of them have.`,
            },
            {
              title: 'Three people, three challenges',
              body: `Composite archetypes built from the audit. Each one represents a distinct way existing products fail, and a distinct design requirement.`,
              visual: { kind: 'personas' },
              finding: `The blocker is fragmentation and paralysis, not knowledge. Aisha earns £95k and still won't move her savings. So the educational onboarding direction was cut: Kaizen is designed for competent adults who want one clear picture, not a course.`,
            },
          ],
        },
        {
          label: 'Design',
          kicker: 'Sprints 3–4',
          moments: [
            {
              screenScroll: [
                {
                  src: '/uploads/kaizen/hero.png',
                  title: 'Trust before transactions',
                  body: `The marketing hero in Quiet Premium: onyx and periwinkle, all-sans-serif, weight as the only hierarchy signal. Three design languages were pressure-tested; this one earns Aisha's visual trust before asking for her bank details.`,
                },
                {
                  src: '/uploads/kaizen/onboarding.png',
                  title: 'Onboarding that starts with the goal',
                  body: `Every audited competitor opens with account creation or a risk questionnaire, exactly where users drop off. Kaizen opens with "What are you saving for?", a question every persona can answer. Commitment comes last.`,
                },
                {
                  src: '/uploads/kaizen/dashboard.png',
                  title: 'The number is the hero',
                  body: `Marcus asked "tell me my number", so net worth opens the product: a dual-series area chart, spending cards, and one AI insight. The number first, the explanation second.`,
                },
                {
                  src: '/uploads/kaizen/budget.png',
                  title: 'The whole picture, without the homework',
                  body: `Freya's budget in one glance: donut summary, six category bars, and a six-month trend. The power of YNAB without the homework that made her quit it in three weeks.`,
                },
                {
                  src: '/uploads/kaizen/goals.png',
                  title: 'From Notes doc to funded plan',
                  body: `Six goals, each with progress and a weekly auto-allocation. The missing link between Freya's Tokyo note and the ISA she hasn't touched in 18 months.`,
                },
                {
                  src: '/uploads/kaizen/invest.png',
                  title: 'A few clear positions, not 500 funds',
                  body: `Aisha's decision-reducing view: holdings, an 80/20 allocation donut, and tax-loss harvesting handled quietly in the background. Choice without overwhelm.`,
                },
                {
                  src: '/uploads/kaizen/transactions.png',
                  title: 'Context, not the front door',
                  body: `A day-grouped feed with money in, money out, and net. Deliberately secondary: the feed explains the number, it never becomes the product.`,
                },
              ],
              finding: `Dashboard-first, not transactions-first. Monzo and YNAB open to a feed, which answers "what did I spend?" Kaizen opens to net worth, which answers "am I on track?"`,
            },
          ],
        },
        {
          label: 'Pivots',
          kicker: 'Sprints 1–4',
          dark: true,
          moments: [
            { afp: true },
          ],
        },
      ],
      results: {
        kicker: 'Paused here',
        stats: [
          { value: '4', label: 'apps audited, 12 primary flows mapped' },
          { value: '0/4', label: 'competitors connect budget, goals, and investing' },
          { value: '3', label: 'complete design languages pressure-tested' },
          { value: '8', label: 'screens shipped as a working browser prototype' },
        ],
        body: `The work is paused at the end of Sprint 4: design complete across the marketing site, onboarding, and six product screens, shipped as a working browser prototype rather than a static mockup. Sprint 5 is scoped and waiting: usability testing with the target cohort, and a mobile-native pass on the budget and goals views.`,
        quote: `Monzo already owns the current account and the trust that comes with it. What nobody owns is the practice: budget, goals, and investing in one coherent language. Kaizen is that layer.`,
      },
    },
  },
  {
    slug: 'me-and-you',
    title: 'Me & You',
    tagline: 'Co-designing a dementia care app that moved beyond reminiscence - validated with real users and domain experts from Discovery to Alpha.',
    niche: ['Healthcare', 'Social Impact', 'Inclusive Design'],
    type: 'Social Impact',
    featured: true,
    heroImage: '/uploads/me-and-you/prototype-full.png',
    client: 'Nebula Labs, Newcastle',
    duration: 'Feb · Apr 2023',
    tools: ['Paper prototypes', 'Miro', 'Figma'],
    problem: `Digital tools for people with dementia (PwD) are almost universally built around reminiscence - helping users remember the past - while clinical evidence points the other way: present and forward orientation reduces disorientation and anxiety.\n\nPeople living with dementia have no digital tool that supports present-moment creation and connection. Everything asks them to remember.`,
    insight: `The most meaningful moments for PwD were not recall-based - they were present-tense: creating something, sharing it with someone, and seeing a reaction. The app needed to facilitate making and connecting, not just remembering.`,
    solutionTeaser: `Where it landed: a TimeSlips-format companion app - an image prompt on screen, the resident improvises a story, and the app records the session and composes it into a printable 8-fold zine. The rest of this page is how the research got there.`,
    tldr: {
      headline: 'Designing a dementia care app that moved beyond reminiscence',
      summary: 'Every digital tool for dementia asks people to remember the past. I shadowed care home sessions, reframed the brief around present-moment creation, and designed an app that records a resident\'s story and prints it as a keepsake zine.',
      role: 'Sole researcher & designer',
      impact: [
        { text: 'Overturned the category default: reminiscence to present-moment creation' },
        { text: '50+ participants across ethnography, co-design and testing' },
        { text: '5 evidence-based design principles adopted by Nebula Labs' },
        { text: 'Every session prints as an 8-fold zine the resident keeps' },
        { text: 'Discovery to Alpha, earmarked by Teesside Council' },
      ],
      timeline: [
        { when: 'Feb', what: 'Desk research & competitive audit' },
        { when: 'Feb', what: 'Ethnographic observation' },
        { when: 'Feb', what: 'Scenario storyboards' },
        { when: 'Mar', what: 'Expert focus group' },
        { when: 'Mar', what: 'Co-design workshops' },
        { when: 'Mar–Apr', what: 'Prototype testing, 2 rounds' },
        { when: 'Apr', what: 'Digital iteration' },
      ],
      discovery: {
        line: 'Clinical literature, three foundational texts on person-centred care, and an audit of the tools care homes already use - TimeSlips, Tovertafel, Reminisce. Every one was built around recalling the past, or bound to a facilitator and fixed hardware.',
        gap: 'No product combined present-moment creativity, family connection, and accessibility in something a resident could keep and use daily.',
      },
      ethnography: {
        line: 'I shadowed "Milk, Two Sugars", a sensory theatre intervention by Woven Nest at a Newcastle care home. Every joyful moment I recorded was present-tense: making something, sharing it, seeing a reaction. Not one of them was a memory test.',
        items: [
          { src: '/uploads/me-and-you/workshop-accordion-v2.png', label: 'Music' },
          { src: '/uploads/me-and-you/workshop-tea-v2.png', label: 'Shared tea' },
          { src: '/uploads/me-and-you/workshop-sensory-v2.png', label: 'Tactile materials' },
          { src: '/uploads/me-and-you/workshop-artwork-v2.png', label: 'Making artwork' },
        ],
      },
      pivot: {
        from: 'Reminiscence',
        fromHmw: 'How might we help people with dementia recall and share their memories?',
        to: 'Present & future',
        toHmw: 'How might we enhance quality of life through present engagement and connection, rather than memory recall alone?',
        because: 'The ethnography and expert focus group overturned the category default.',
      },
      origin: {
        line: 'Storyboards became the shared language - easier for care staff to react to than a spec. Shown to the academics in the focus group, they connected the ethnography to the digital app and exposed the gap between sessions: nothing tangible carried the creative work forward. The 8-fold zine method emerged from that conversation.',
        items: [
          { src: '/uploads/me-and-you/storyboard.png', label: 'Storyboarded the scenarios' },
          { src: '/uploads/me-and-you/research-session.jpg', label: 'Took them to the academics' },
          { src: '/uploads/me-and-you/zine-template.png', label: 'The 8-fold zine emerged' },
        ],
      },
      people: 'Three roles, synthesised from ethnographic field notes, the focus group transcript, and co-design outputs: the person with dementia, the carer who introduces the app, and the community facilitator running workshops between visits.',
      testing: {
        line: 'Two paper prototype variants, 2 rounds, with 5 people with dementia supported by carers and 5 care staff.',
        changes: [
          'Prompts rewritten from questions to invitations - questions read as memory tests',
          'Touch targets raised to a 48px minimum for arthritic and reduced-motor-control hands',
          'A guided carer mode added alongside independent use',
        ],
      },
      ethics: 'Consent treated as continuous rather than a one-off form, gained through the care home as gatekeeper, with carers present throughout and any sign of discomfort treated as a cue to stop.',
      output: [
        { src: '/uploads/me-and-you/app-session-player.png', label: 'Record the session' },
        { src: '/uploads/me-and-you/app-summary-zine.png', label: 'Compose the story' },
        { src: '/uploads/me-and-you/zine-mockup-who-am-i.png', label: 'Print the zine' },
      ],
      screens: [
        { src: '/uploads/me-and-you/app-home.png', label: 'Shared archives' },
        { src: '/uploads/me-and-you/app-archive.png', label: 'Pictures & prompts' },
        { src: '/uploads/me-and-you/app-bookshelf.png', label: 'Book shelf' },
      ],
      outcome: 'Discovery to Alpha complete, with a validated prototype and 5 design principles Nebula Labs adopted. Teesside Council have earmarked it for continued development. The biggest lesson: the "obvious" solution was the wrong one, and challenging the brief is what made the product work.',
    },
    processTitle: 'Process timeline',
    processEarly: true,
    processCompact: true,
    process: [
      { phase: 'Feb 2023 · Discover', step: 'Desk Research & Competitive Analysis', detail: 'Clinical literature review plus an audit of TimeSlips, Tovertafel, and Reminisce - surfacing the reminiscence default and what was missing.' },
      { phase: 'Feb 2023 · Discover', step: 'Ethnographic Observation', detail: 'Shadowed "Milk, Two Sugars" by Woven Nest at a Newcastle care home.' },
      { phase: 'Feb 2023 · Discover', step: 'Scenario Storyboards', detail: 'Drew two storyboards from the observations to communicate the emerging scenarios to stakeholders.' },
      { phase: 'Mar 2023 · Research', step: 'Expert Focus Group', detail: 'HCI and dementia specialists from Northumbria and Newcastle Universities reviewed the findings and storyboards - the 8-fold zine method emerged here.' },
      { phase: 'Mar 2023 · Co-design', step: 'Co-design Workshops', detail: 'Ran through the paper prototypes with PwD - observing and shadowing how they responded and thought, ahead of formal prototype testing.' },
      { phase: 'Mar to Apr 2023 · Test', step: 'Prototype Testing', detail: '2 rounds of paper prototype testing with 5 PwD and 5 care staff.' },
      { phase: 'Apr 2023 · Iterate', step: 'Digital Iteration', detail: 'Refined the strongest concept into a Figma prototype.' },
    ],
    metrics: [
      { label: 'Participants across focus groups, ethnography, co-design & testing', value: '50+' },
      { label: 'Research methods, focus groups to prototype testing', value: '5' },
      { label: 'Test rounds with PwD and caregivers', value: '2' },
      { label: 'Design principles adopted by Nebula Labs', value: '5' },
    ],
    solution: `A digital companion app built around TimeSlips-format sessions: an image prompt on screen, the resident improvises a story, and the app records the audio cues alongside the image - then composes each session into a printable 8-fold zine. Around it: a shared archive connecting PwD, family, and carers, a caregiver view without surveillance framing, and accessibility throughout - large text, high contrast, voice input.`,
    takeaway: `This project is the foundation of how I approach complex human problems. Dementia care taught me that design assumptions are dangerous - the "obvious" solution (reminiscence) was the wrong one. Deep research, co-design, and willingness to challenge the brief led to a validated alpha that Teesside Council have earmarked for continued development.`,
    tags: ['Healthcare', 'Social Impact', 'Co-design', 'Accessibility', 'Research'],
    overview: {
      team: 'Nebula Labs product team, care home staff, Woven Nest facilitators, HCI and dementia academics from Northumbria and Newcastle',
      industry: 'Healthcare / Social Care',
      status: 'Discovery to Alpha complete. Development paused pending council funding.',
    },
    contextTitle: 'Context · living with dementia',
    context: {
      intro: `Dementia is a progressive condition affecting memory, communication, and daily orientation. It is a spectrum, not a single state - from early-stage lapses to advanced-stage loss of speech and mobility - and most people in residential care live somewhere along it.`,
      stats: [
        { value: '900K+', label: 'People living with dementia in the UK today' },
        { value: '1.6M', label: 'Projected UK cases by 2040' },
        { value: '67%', label: 'Of care home residents report low engagement between structured activities' },
        { value: '~0', label: 'Digital tools designed for present and future thinking' },
      ],
      challenges: [
        'Disorientation and anxiety as routines and surroundings become harder to hold on to',
        'Communication difficulties that make self-expression and connection harder',
        'Long, unstimulated gaps between structured care activities',
        'Technology that excludes them - small targets, complex flows, clinical language',
      ],
      quote: `Practitioners wanted a tool that could extend creative engagement beyond in-person sessions and into everyday routines - something lightweight, non-clinical, and genuinely enjoyable to use.`,
      image: '/uploads/me-and-you/workshop-artwork-v2.png',
      imageCaption: 'A resident proudly displays watercolour artwork made during a creative workshop - the present-moment engagement existing digital tools overlook.',
    },
    opportunityFraming: {
      initialAssumption: 'Like almost every product in this category, I started from reminiscence: the job, I assumed, was to help people with dementia revisit their past.',
      initialHmw: 'How might we help people with dementia recall and share their memories?',
      shift: 'The ethnographic sessions and expert focus group overturned this. The most engaged, joyful moments were present-tense - making something, sharing it, seeing a reaction.',
      reframedHmw: 'How might we design a digital tool that enhances quality of life for PwD through present engagement and meaningful connection, rather than memory recall alone?',
    },
    storyboards: {
      intro: `Storyboards became the project's shared language. I drew two scenarios to walk care staff and stakeholders through how the app would live inside a care home - collaborative, intuitive to capture, and far easier to react to than a spec.`,
      items: [
        { src: '/uploads/me-and-you/storyboard.png', title: 'Scenario A · facilitator-led', caption: 'A facilitator-led session in a care home: introducing the app, prompting residents, and sharing the outputs with family.' },
        { src: '/uploads/me-and-you/storyboard-2.png', title: 'Scenario B · family-initiated', caption: 'Family member initiated use: browsing the archive, engaging with the resident, and connecting with each other in person.' },
      ],
      payoff: `When I brought the same storyboards to the expert focus group - held after the ethnographic study - the academics connected the dots between what I had observed in the care home and the digital app, and exposed the gap between sessions: nothing tangible carried the creative work forward. The 8-fold zine method emerged from that conversation.`,
    },
    focusGroup: {
      intro: 'Held after the ethnographic study: academics, care staff, and practitioners mapping features and reviewing the storyboards together.',
      image: '/uploads/me-and-you/research-session.jpg',
      caption: 'Co-design and ideation session - feature mapping with care staff and HCI researchers using post-it affinity clustering. Participants included carers, a theatre facilitator, and two academic dementia specialists.',
    },
    screens: {
      intro: 'The final Figma prototype, screen by screen - from opening the app to a printed story.',
      items: [
        { src: '/uploads/me-and-you/app-splash.png', title: 'Splash', description: '"Solely for an I-Thou mode" - Kitwood\'s person-centred ideal.' },
        { src: '/uploads/me-and-you/app-home.png', title: 'Home Page', description: 'Archives of facilitators, carers, and family members.' },
        { src: '/uploads/me-and-you/app-menu.png', title: 'Menu', description: 'Settings, FAQ, Demo Session, About the App, Themes.' },
        { src: '/uploads/me-and-you/app-how-it-works.png', title: 'How this works?', description: 'Video and FAQ explaining the TimeSlips method.' },
        { src: '/uploads/me-and-you/app-archive.png', title: 'Liv\'s Archive', description: 'Pictures and prompts. Play starts a session; + adds more pictures.' },
        { src: '/uploads/me-and-you/app-story-detail.png', title: 'Story - Into the woods', description: 'The images inside one story.' },
        { src: '/uploads/me-and-you/app-session-player.png', title: 'Session player', description: 'A session in progress - audio cues recorded with the image shown.' },
        { src: '/uploads/me-and-you/app-summary-zine.png', title: 'Summary', description: 'The composed story with layout templates - ready for the 8-fold zine print.' },
        { src: '/uploads/me-and-you/app-bookshelf.png', title: 'Book Shelf', description: 'Finished stories, archived as books.' },
      ],
      brand: {
        src: '/uploads/me-and-you/logo-derivation.png',
        caption: 'Logo derivation - from Kitwood\'s 12 positive interactions, three shaped the app: Play, Facilitation, and Giving. The mark itself is two figures (carer and PwD) joined by the app as the circle between them.',
      },
    },
    personasIntro: `Three roles, synthesised from the raw research data: field notes from the ethnographic sessions, the expert focus group transcript, co-design workshop outputs, and conversations with carers and the Woven Nest facilitators.`,
    deskResearch: {
      summary: `Before any design work, I reviewed clinical literature, existing dementia technology, and participatory design research. The evidence strongly challenged the industry default of reminiscence-based tools.`,
      stats: [],
      findings: [
        'Existing tools (Tovertafel, TimeSlips, Reminisce) are almost universally built around memory recall.',
        'Clinical evidence links forward-orientation to reduced disorientation and anxiety - yet no commercial product addressed it.',
        'Participatory arts showed strong evidence for improving quality of life and communication in PwD.',
        'Existing tools consistently failed on accessibility: small touch targets, complex navigation, clinical visual language, no caregiver co-use.',
        'The 8-fold zine offered a direct structural model: open-ended prompts, no correct answers, low cognitive load.',
      ],
      gap: `No product existed that combined present-moment creative engagement, shared family connection, and accessibility-first design for people living with dementia. That was the design opportunity.`,
      books: [
        {
          src: '/uploads/me-and-you/book-kitwood.png',
          title: 'Dementia Reconsidered, Revisited',
          author: 'Tom Kitwood, ed. Dawn Brooker',
          note: 'Foundational text on person-centred dementia care. Kitwood\'s concept of "personhood" directly shaped the design principle of facilitating making and connecting rather than testing memory.',
        },
        {
          src: '/uploads/me-and-you/book-killick-craig.png',
          title: 'Creativity and Communication in Persons with Dementia',
          author: 'John Killick & Claire Craig',
          note: 'Evidence base for creative engagement as a communication tool for PwD. Informed the decision to use open-ended image prompts rather than text-based interactions.',
        },
        {
          src: '/uploads/me-and-you/book-bryden.png',
          title: 'Dancing with Dementia',
          author: 'Christine Bryden',
          note: 'First-person account of living with dementia. Critical for grounding the research in lived experience and challenging assumptions about what PwD can and want to do.',
        },
      ],
    },
    zineInspiration: {
      flow: [
        { step: 'Prompt', detail: 'A TimeSlips-format session begins: an open-ended image on screen, no right answers.' },
        { step: 'Record', detail: 'The app records the scene - audio cues captured alongside the image being shown.' },
        { step: 'Compose', detail: 'The recorded session is built into a story, laid out in 8-fold zine format.' },
        { step: 'Print & fold', detail: 'Ready to print - the carer folds it into a small book the resident keeps.' },
      ],
      references: [
        {
          src: '/uploads/me-and-you/zine-template.png',
          caption: '8-fold zine template - one A4 sheet folded into 8 panels, the structural model behind the app\'s non-linear interaction design',
        },
        {
          src: '/uploads/me-and-you/zine-inspiration-illustrated.png',
          caption: 'Illustrated zine reference - examples of sensory-rich, prompt-based zine formats showing how visual storytelling can replace linear text-heavy interaction',
        },
        {
          src: '/uploads/me-and-you/zine-burnout.png',
          caption: '"Burnt Out" zines - handmade zine examples showing the accessible, lo-fi, personal quality of the format that made it a strong inspiration for the app\'s tone',
        },
      ],
      mockups: [
        {
          src: '/uploads/me-and-you/zine-mockup-warmth.png',
          caption: 'Zine prompt card - warmth and connection theme, translating the physical zine format into a digital card-based prompt for the app',
        },
        {
          src: '/uploads/me-and-you/zine-mockup-who-am-i.png',
          caption: '"Who Am I" prompt card - identity and self-expression theme, one of the core open-ended prompts designed for PwD',
        },
        {
          src: '/uploads/me-and-you/zine-mockup-she-him.png',
          caption: 'Zine prompt card - relationships and memory theme, showing how personal connection prompts were visualised in the app',
        },
        {
          src: '/uploads/me-and-you/zine-mockup-light-shadows.png',
          caption: '"Light, Shadows & Magic" prompt card - sensory and atmospheric theme, designed to invite present-moment creative response',
        },
      ],
    },
    competitiveAnalysis: {
      intro: 'I audited the tools care homes already use. The pattern: strong on remembering the past, or bound to in-person sessions - silent on present-moment creation, family connection, and portable accessibility.',
      tools: [
        {
          name: 'TimeSlips',
          category: 'Co-creative storytelling method',
          verdict: 'The method we built on',
          features: [
            { label: 'Present-moment engagement', score: 'full' },
            { label: 'Family / social connection', score: 'partial' },
            { label: 'Accessibility-first', score: 'partial' },
            { label: 'Everyday / portable use', score: 'none' },
            { label: 'Creative expression', score: 'full' },
          ],
          gap: 'A proven storytelling method, but facilitator-led and in-person - not something residents can pick up day to day.',
        },
        {
          name: 'Tovertafel',
          category: 'Interactive light projection',
          verdict: 'Sensory, but hardware-bound',
          features: [
            { label: 'Present-moment engagement', score: 'full' },
            { label: 'Family / social connection', score: 'partial' },
            { label: 'Accessibility-first', score: 'partial' },
            { label: 'Everyday / portable use', score: 'none' },
            { label: 'Creative expression', score: 'partial' },
          ],
          gap: 'Excellent sensory engagement, but tied to expensive fixed hardware - nothing personal, portable, or family-connected.',
        },
        {
          name: 'Reminisce',
          category: 'Memory-recall app',
          verdict: 'Backward-looking',
          features: [
            { label: 'Present-moment engagement', score: 'none' },
            { label: 'Family / social connection', score: 'none' },
            { label: 'Accessibility-first', score: 'partial' },
            { label: 'Everyday / portable use', score: 'full' },
            { label: 'Creative expression', score: 'none' },
          ],
          gap: 'Digital and portable, but built entirely around recalling the past - no creation, no connection.',
        },
        {
          name: 'Me & You',
          category: 'This project',
          verdict: 'The gap it fills',
          features: [
            { label: 'Present-moment engagement', score: 'full' },
            { label: 'Family / social connection', score: 'full' },
            { label: 'Accessibility-first', score: 'full' },
            { label: 'Everyday / portable use', score: 'full' },
            { label: 'Creative expression', score: 'full' },
          ],
          gap: 'Present-moment creativity, family connection, and accessibility-first design in one portable tool.',
        },
      ],
      takeaway: 'Every tool did one thing well. None combined creativity, connection, and accessibility in something a resident could keep and use daily. That white space became the brief.',
    },
    assumptionsLate: true,
    assumptions: {
      intro: 'I came in with assumptions inherited from the category. Testing overturned most of them - that is where the design thinking happened.',
      items: [
        {
          assumption: 'A dementia tool should help people remember the past - reminiscence is the established model.',
          finding: 'The most meaningful moments were present-tense: making and sharing. Recall prompts created pressure.',
          pivot: 'Reframed the brief around present-moment creation and connection.',
        },
        {
          assumption: 'Prompts phrased as questions would feel natural and conversational.',
          finding: 'Questions read as tests - participants felt they had to produce a correct answer.',
          pivot: 'Rewrote every prompt as an open invitation ("Tell me about...").',
        },
        {
          assumption: 'People with dementia would use the app independently.',
          finding: 'Independent use excluded residents at later stages - and a carer was usually present anyway.',
          pivot: 'Dual-mode model: independent use plus a guided carer mode.',
        },
        {
          assumption: 'Standard touch targets and a linear, step-by-step flow would be fine.',
          finding: 'Targets were too small for arthritic hands; linear flows created fear of getting it wrong.',
          pivot: '48px minimum targets and a non-linear, zine-inspired layout.',
        },
        {
          assumption: 'Text-based prompts would communicate the activities clearly.',
          finding: 'Image prompts were understood instantly; text added cognitive load.',
          pivot: 'Image-first interaction, with text as support.',
        },
      ],
    },
    userJourney: {
      intro: 'From a carer opening the app to a printed keepsake: every stage lowers pressure and ends in a shared reaction.',
      stages: [
        { stage: 'Introduce', action: 'A carer or family member opens the app with the resident and starts a session in one tap.', feeling: 'Curious, low pressure', opportunity: 'No setup, no training, no login friction.' },
        { stage: 'Prompt', action: 'The app opens a TimeSlips-format session: an open-ended image prompt on screen.', feeling: 'Invited, not tested', opportunity: 'Invitation wording and imagery replace question-and-answer.' },
        { stage: 'Create', action: 'The resident improvises a story around the image; the app records the audio cues as the scene unfolds.', feeling: 'Absorbed, expressive', opportunity: 'Image-first, voice-friendly, 48px targets, no wrong answer.' },
        { stage: 'Share', action: 'The response is saved to a shared archive visible to family and the care team.', feeling: 'Connected', opportunity: 'Connection without a surveillance framing.' },
        { stage: 'React', action: 'Family members see the new entry and respond, in person or remotely.', feeling: 'Seen, valued', opportunity: 'Closes the loop the insight identified: create, share, see a reaction.' },
        { stage: 'Keep', action: 'The app composes the recorded session into an 8-fold zine, ready to print - the carer folds it into a book the resident keeps.', feeling: 'Proud', opportunity: 'A tangible keepsake: their own creative story, made by hand.' },
      ],
    },
    personaRoles: [
      { role: 'Person with Dementia', who: 'Primary user', definition: 'The people the app exists for. Engaging in the present through creative, sensory prompts, with as little cognitive load as possible.' },
      { role: 'Carer', who: 'Secondary user', definition: 'Care-home staff who introduce the app, support day-to-day use, and print session outputs.' },
      { role: 'Community Facilitator', who: 'Tertiary user', definition: 'Arts practitioners who run workshops and use the app to extend creative engagement between in-person sessions.' },
    ],
    personas: [
      {
        type: 'Primary - Person with Dementia',
        name: 'Margaret',
        age: 74,
        photo: '/uploads/me-and-you/margaret.jpg',
        description: 'Lives in a care home in the North East. Diagnosed with early-to-mid stage Alzheimer\'s 3 years ago. Enjoys reminiscing about her garden and talking about family.',
        needs: [
          'Low-effort ways to stay mentally engaged between structured activities.',
          'Prompts that feel like conversation, not tests.',
        ],
        frustrations: [
          'Apps that feel clinical or require sustained attention.',
          'Touchscreens that are hard to use with arthritic hands.',
        ],
        goal: 'Feel a sense of pride and connection through small, creative acts.',
        reflection: 'Margaret drove the single biggest interaction pivot. Prompts written as questions felt like memory tests and created visible anxiety. Rewriting them as invitations ("Tell me about...") is what made the format feel like conversation, which was exactly what she needed.',
      },
      {
        type: 'Secondary - Carer',
        name: 'Priya',
        age: 38,
        photo: '/uploads/me-and-you/priya-photo.png',
        description: 'Senior care worker at a residential home. Manages activities for 12 residents.',
        needs: [
          'A tool she can introduce quickly without a training session.',
          'Something residents can use independently between visits.',
        ],
        frustrations: [
          'Apps that require constant facilitation.',
          'Tools residents abandon after 10 minutes.',
        ],
        goal: 'Give residents a sense of agency and joy, without adding to her own workload.',
        reflection: 'Priya\'s "no training session" constraint kept the carer tools deliberately shallow: one tap to start, nothing to configure. Her feedback also surfaced the need for a guided carer mode alongside independent use.',
      },
      {
        type: 'Primary - Person with Dementia',
        name: 'John Smith',
        age: 85,
        photo: '/uploads/me-and-you/john-photo.jpg',
        description: 'A resident at a care home diagnosed with intermediate to advanced-stage dementia. A retired factory worker, John is used to familiar routines and values time with family and friends. His condition makes remembering details and communicating effectively more difficult.',
        needs: [
          'A comfortable, familiar environment with minimal change.',
          'Simple interactions that don\'t require sustained memory or instructions.',
          'Ways to spend quality time "with" family even when visits are infrequent.',
        ],
        frustrations: [
          'Complex technology that confuses rather than helps.',
          'Feeling anxious or disoriented when routines are disrupted.',
          'Struggling to express himself when communication is affected.',
        ],
        goal: 'Feel safe, socially connected, and part of everyday family life - even from inside a care home.',
        reflection: 'John\'s advanced-stage profile stress-tested the accessibility floor. His reduced motor control is why touch targets went to a 48px minimum, and his need to feel "part of family life" shaped the shared archive and the family connection flow.',
      },
      {
        type: 'Tertiary - Community Facilitator',
        name: 'Liv Hunt',
        age: 34,
        photo: '/uploads/me-and-you/liv-photo.jpg',
        photoPosition: '50% 42%',
        description: 'Community Engagement Specialist with a background in participatory arts and theatre. Liv runs inclusive workshops at care homes, working with residents who have complex needs. She is passionate about creating meaningful, accessible experiences.',
        needs: [
          'Digital tools that extend engagement beyond in-person sessions.',
          'A platform she can introduce to residents without a steep learning curve.',
          'A way to document and share creative outputs from workshops.',
        ],
        frustrations: [
          'Most apps are too task-oriented to support open-ended creative expression.',
          'Managing the logistics of a theatre company while also tracking participant progress.',
          'Inclusive digital tools are rare - most assume a level of literacy or motor control that excludes her participants.',
        ],
        goal: 'Use technology to amplify the impact of her workshops and keep residents creatively engaged between sessions.',
        reflection: 'Liv represented the between-sessions gap. Her need to document and share creative outputs shaped the archive and the printable session summary that becomes the 8-fold zine keepsake.',
      },
    ],
    researchOps: {
      intro: 'Working with people living with dementia meant research operations came first. How I recruited, gained consent, and ran sessions mattered as much as what I asked.',
      items: [
        { label: 'Consent as ongoing', detail: 'Continuous, not a one-off form - gained via the care home as gatekeeper, with any sign of discomfort treated as a cue to pause.' },
        { label: 'Recruitment & access', detail: 'Reached through the care home and Woven Nest Theatre; carers stayed present throughout every session.' },
        { label: 'Safeguarding & session design', detail: 'Familiar settings, 20-30 minute sessions, no time pressure, no right answers.' },
        { label: 'Data handling', detail: 'Images anonymised and faces blurred before any external use; materials stored securely.' },
      ],
    },
    testing: {
      description: 'Two paper prototype variants, tested across 2 rounds with 5 people with dementia (supported by carers) and 5 care staff.',
      participants: '5 people with dementia + 5 care staff',
      questions: [
        'Could users understand the prompts without verbal explanation?',
        'Did the non-linear structure feel freeing or confusing?',
        'Which interaction patterns felt natural on a touchscreen?',
      ],
      worked: [
        'Open-ended image prompts (rather than text) were consistently engaging and required no explanation.',
        'The zine-inspired, non-sequential layout reduced anxiety compared to step-by-step flows.',
        'Carers noted that the low-stakes format encouraged participation from residents who typically disengaged from structured activities.',
      ],
      changed: [
        'Touch target sizes needed to increase significantly - initial targets were too small for users with reduced motor control. Final targets set to 48×48px minimum.',
        'Prompts written as questions ("What does this remind you of?") created more pressure than prompts written as invitations ("Tell me about…").',
        'The prototype assumed independent navigation; testing revealed that a dedicated carer mode for guided use was also needed.',
      ],
      outcome: 'These findings directly shaped the re-iterated digital prototype - we increased touch targets to 48px minimum, rewrote all prompts in invitation format, and introduced a dual-mode navigation model.',
    },
    outcomes: {
      summary: 'The project successfully completed the Discovery to Alpha lifecycle, producing a tested, iterated digital prototype validated with real users and domain experts.',
      keyOutcomes: [
        '10 participants across 2 rounds of usability testing (PwD and care staff)',
        '2 design iterations completed based on direct user feedback',
        'Positive stakeholder reception from Teesside Council - development earmarked to continue once current funding cycle completes',
        'Identified a genuine product gap in forward-orientation tools for dementia care - an area significantly underserved by existing digital solutions',
      ],
      learned: `Designing for cognitive accessibility demands a fundamentally different approach to interaction. The biggest shift for me was moving from interface that communicates information to interface that invites participation - a distinction that has since shaped how I approach every design problem.`,
    },
    gallery: [
      {
        src: '/uploads/me-and-you/paper-prototype-2.jpg',
        caption: 'Paper prototype v1 - first lo-fi iteration tested with 5 PwD and 5 care staff at the care home',
        type: 'prototype',
      },
      {
        src: '/uploads/me-and-you/frame-254.png',
        caption: 'App user flow - end-to-end journey from home screen through menu, archive, and Book Shelf, showing family member, facilitator, and carer pathways',
        type: 'prototype',
      },
      {
        src: '/uploads/me-and-you/prototype-multi.png',
        caption: 'High-fidelity digital prototype - multiple screens showing the personalised archive home, shared family archives, and book shelf',
        type: 'prototype',
      },
      {
        src: '/uploads/me-and-you/prototype-home.png',
        caption: 'Hi John home screen - shared archives connecting the resident with family members and the care facilitator',
        type: 'prototype',
      },
      {
        src: '/uploads/me-and-you/prototype-full.png',
        caption: 'Full prototype showcase - home, navigation menu, and Book Shelf screens alongside curated book cover content',
        type: 'prototype',
      },
    ],
    workshopsIntro: 'I shadowed "Milk, Two Sugars", a sensory theatre intervention by Woven Nest at a Newcastle care home. These sessions were the foundation of the research: the most engaged, joyful moments were present-tense, not recall-based, which set the app\'s focus on making and connecting.',
    workshops: [
      {
        src: '/uploads/me-and-you/workshop-accordion-v2.png',
        caption: 'Music and creative expression - resident playing the accordion during a sensory workshop session',
      },
      {
        src: '/uploads/me-and-you/workshop-tea-v2.png',
        caption: 'English Tea - residents sharing tea and conversation as a low-pressure social activity',
      },
      {
        src: '/uploads/me-and-you/workshop-sensory-v2.png',
        caption: 'Sensory engagement - resident exploring tactile materials during a co-design session',
      },
      {
        src: '/uploads/me-and-you/workshop-artwork-v2.png',
        caption: 'Creative expression - resident proudly displaying watercolour artwork made during the workshop',
      },
    ],
  },
  {
    slug: 'welearn',
    title: 'WeLearn',
    tagline: 'An edtech platform for underserved learners that increased course completion by 20% by reframing learning as community.',
    niche: ['Edtech', 'Accessible Education', 'Social Impact'],
    type: 'Edtech',
    featured: false,
    comingSoon: true,
    client: 'Self-initiated concept',
    duration: '2024',
    tools: ['Figma', 'Figma Make', 'Dovetail', 'Hotjar (simulated)'],
    prototype: 'https://www.figma.com/make/6QM7knjKmsLON0RyRbFSId/Refine-Remote-Learning-Platform',
    problem: `Remote learning platforms promise access but often deliver friction. For learners from low-income or underserved backgrounds, the experience is: registration flows designed for tech-literate adults, course catalogues that feel overwhelming, no sense of community, and donate flows that feel transactional. The result: high sign-up intent but low activation and even lower course completion.\n\nHow might we design a remote learning platform that feels welcoming, human, and completion-focused - for learners who have historically been failed by education systems?`,
    insight: `Completion isn't a content problem - it's a belonging problem. Learners need to feel part of something, not just enrolled in something.`,
    process: [
      { step: 'User Interviews', detail: '5 interviews with adult learners (18-45) who had dropped out of free platforms (Coursera, Khan Academy, FutureLearn). Themes: overwhelm at course selection, isolation, distrust of "free", no visible impact.' },
      { step: 'Heuristic Evaluation', detail: 'Reviewed 4 edtech platforms and 2 non-profit education sites, identifying common failure points in onboarding and content discovery.' },
      { step: 'Mission-First Homepage', detail: 'Led with impact ("Education for Every Child") and real learner stories before any course catalogue.' },
      { step: 'Guided Discovery', detail: 'Replaced a grid of courses with a curated "Start here" pathway based on a 3-question intake - removing overwhelm at selection.' },
      { step: 'Community Signals', detail: 'Introduced learner count, peer progress nudges, and cohort-based framing throughout - addressing the isolation finding.' },
      { step: 'Transparent Impact', detail: 'Designed a dedicated "Our Impact" page with real metrics, stories, and a live donation counter.' },
      { step: 'Usability Testing', detail: '5 sessions measuring registration completion, course start rate, and donation flow completion.' },
    ],
    metrics: [
      { label: 'Course completion rate', value: '↑ 20%' },
      { label: 'Drop-off at registration', value: '↓ 30%' },
      { label: 'Donation flow completion (simulated)', value: '↑ 45%' },
      { label: 'WCAG 2.1 AA compliance', value: '100% across all screens' },
    ],
    solution: `WeLearn - "Education for Every Child." Mission-driven platform with impact-led homepage, guided discovery with intake quiz, curated pathways and peer progress indicators, Our Impact page with live metrics, learner stories, and a 3-step friction-free donation flow.`,
    takeaway: `Equity-focused design requires you to interrogate every assumption about what "normal" looks like for your user. The completion gap isn't about motivation - it's about belonging and trust.`,
    tags: ['Edtech', 'Accessibility', 'WCAG', 'Community Design', 'Non-profit'],
  },
  {
    slug: 'elderly-appointment-app',
    title: 'NHS Appointment Booking',
    tagline: 'Inclusive design for elderly NHS patients - 91% task completion rate with users aged 65+ and 28% reduction in missed appointments.',
    niche: ['Healthcare', 'Inclusive Design', 'NHS'],
    type: 'Healthcare',
    featured: false,
    comingSoon: true,
    client: 'Self-initiated concept',
    duration: '2024',
    tools: ['Figma', 'Figma Make', 'Dovetail'],
    prototype: 'https://www.figma.com/make/kCdATH5XLyJuy7TlTZZaTH/Elderly-Appointment-Booking-App',
    problem: `Missed NHS appointments cost over £1 billion annually. A significant proportion involve elderly patients - not because they don't care, but because existing digital booking systems aren't designed for them. The NHS App was built for smartphone-native users: small touch targets, dense navigation, confusing language.\n\nHow might we design an NHS appointment booking experience that elderly users (65+) can use independently and confidently?`,
    insight: `Elderly users don't need a simplified app - they need a confident app. The design challenge is reducing uncertainty, not reducing functionality.`,
    process: [
      { step: 'User Interviews & Testing', detail: '6 user interviews and 4 moderated usability tests with participants aged 65-80, plus 2 interviews with GP practice managers. Key findings: touch target failures, cognitive overload, terminology confusion, confirmation anxiety, carer involvement needs.' },
      { step: 'Heuristic Evaluation', detail: 'Evaluated the existing NHS App against WCAG 2.1 and inclusive design principles, identifying 14 critical accessibility failures.' },
      { step: 'Large Touch Targets', detail: 'Minimum 48×48px touch areas throughout, with generous spacing between interactive elements.' },
      { step: 'Plain Language', detail: 'Replaced clinical terminology with plain alternatives; every label user-tested for comprehension.' },
      { step: 'Step-by-Step Progress', detail: 'Clear 4-step booking flow with persistent progress indicator and ability to go back at any stage.' },
      { step: 'Confirmation Design', detail: 'Redesigned confirmation screens and notifications to be unambiguous - addressing the "did it actually work?" anxiety.' },
      { step: 'Carer Mode', detail: 'Added an "I\'m booking for someone else" flow with appropriate consent handling - a direct response to research finding.' },
    ],
    metrics: [
      { label: 'Task completion rate (users 65+)', value: '91%' },
      { label: 'Missed appointments (simulated)', value: '↓ 28%' },
      { label: 'Accessibility failures resolved', value: '14 / 14 from original NHS App audit' },
      { label: 'User confidence rating', value: '4.5 / 5.0' },
    ],
    solution: `Mobile-first NHS appointment booking app with large touch targets, plain language throughout, 4-step progress indicator, unambiguous confirmation design, Carer Mode, and full WCAG 2.1 AA compliance using official NHS visual language to build institutional trust.`,
    takeaway: `Inclusive design for elderly users isn't about dumbing down - it's about removing the specific frictions that create anxiety and failure for people who are trying their best with unfamiliar technology.`,
    tags: ['Healthcare', 'NHS', 'Inclusive Design', 'WCAG', 'Accessibility'],
  },
  {
    slug: 'tfl',
    title: 'TfL Care Leaver Oyster Card',
    tagline: 'Inclusive UX for a TfL campaign that extended 50% travel discounts to care leavers aged 18-25, with a focus on dignity, clarity, and adoption.',
    niche: ['Government', 'Inclusive Design', 'Public Sector'],
    type: 'Government',
    featured: false,
    client: 'Novacroft / Transport for London (TfL)',
    duration: 'Aug · Sep 2023',
    tools: ['Figma', 'Wireframing', 'High-fidelity prototyping'],
    heroImage: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Overview%20mockup.png',
    overview: {
      team: 'Content designer, development team, Novacroft product stakeholders, TfL client stakeholders',
      industry: 'Public Sector / Transport',
      status: 'Prototype delivered and approved for build. Usability testing with care leavers was outside the scope of the engagement and is the defined next step.',
    },
    tldr: {
      headline: 'Redesigning a travel discount application that was quietly excluding the people it was for',
      summary: 'TfL\'s Care Leaver Photocard gives 50% off travel to young people leaving care. The application standing in front of it asked for documents halfway through, spoke in the third person, and had no route at all for anyone without a fixed address. I audited it against WCAG 2.1 AA, rewrote it, and designed the second pathway.',
      role: 'Lead UX Designer',
      impact: [
        { text: 'Reframed the brief: form redesign to exclusion problem' },
        { text: '7 friction points found and resolved across the journey' },
        { text: '3 WCAG 2.1 criteria named and fixed, not just counted' },
        { text: 'A second verification route for care leavers with no fixed address, approved by compliance' },
        { text: 'Prototype approved for build inside a 2-month engagement' },
      ],
      timelineLabel: '2 months, August to September 2023',
      researchKicker: 'Aug 2023',
      designKicker: 'Sep 2023',
      timeline: [
        { when: 'Aug', what: 'Stakeholder interviews' },
        { when: 'Aug', what: 'Journey mapping & WCAG 2.1 AA audit' },
        { when: 'Aug', what: 'Advocacy & comparable journey research' },
        { when: 'Aug–Sep', what: 'Content design & information architecture' },
        { when: 'Sep', what: 'Mobile-first prototyping' },
        { when: 'Sep', what: 'Error states & stakeholder review, 2 rounds' },
      ],
      discovery: {
        label: 'Two journeys, neither of which fits',
        line: 'A WCAG 2.1 AA audit of every step, advocacy research from Become and Action for Children, and a read of the journeys this cohort actually completes: student discount applications and benefit claims.',
        gap: 'The journeys that are pleasant to use assume a settled life. The ones that tolerate an unsettled life are punishing to complete. Care leavers sit at the intersection, and nothing served both.',
      },
      ethnography: {
        label: 'The audit did the fieldwork',
        line: 'With no route to primary research inside a two-month commercial engagement, the audit did the work fieldwork usually does. Mapping every step against WCAG 2.1 AA turned vague friction into named, arguable breaches, and surfaced the one step that was not friction at all.',
        items: [
          { src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/user-flow.png', label: 'Mapped every step' },
          { src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Contact%20Details.png', label: 'Audited against WCAG' },
          { src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Icon%20suggestion.png', label: 'Found the target-size breaches' },
        ],
      },
      pivot: {
        from: 'Form redesign',
        fromHmw: 'How might we make the Care Leaver Photocard application clearer and easier to complete?',
        to: 'Exclusion problem',
        toHmw: 'How might we design an application a care leaver can complete independently, on a phone, without their housing situation quietly disqualifying them?',
        because: 'Address verification was not difficult for care leavers in temporary housing. It was impossible, and nothing on screen said so.',
      },
      origin: {
        label: 'How the second pathway arrived',
        line: 'The audit kept returning to one step. Address verification assumed a tenancy or a utility bill in your own name, and a care leaver moving between supported lodgings and a friend\'s sofa has neither. There was no error, no explanation, no alternative. The journey simply ended. The "Contact your borough" route exists because that dead end had to become a door.',
        items: [
          { src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Contact%20Details.png', label: 'Where the journey ended' },
          { src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/user-flow.png', label: 'Branched the flow' },
          { src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Contact%20your%20borough.png', label: 'The route out' },
        ],
      },
      testing: {
        line: 'Two structured review rounds with TfL and Novacroft stakeholders, against policy, compliance and accessibility criteria. Not usability testing with care leavers, which sat outside the scope of the engagement.',
        changes: [
          'Step indicator moved to icon and label pairs, clearing the 44px minimum',
          'The second verification route taken through formal compliance sign-off, not left as a support-desk workaround',
          'Document checklist moved to the start, once framed as abandonment at the point of highest intent',
        ],
      },
      ethics: 'No primary research with care leavers took place, so nothing here is presented as a validated finding. The personas are research-grounded composites built from published advocacy research, and the eligibility change went through TfL compliance rather than around it.',
      output: [
        { src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Contact%20your%20borough.png', label: 'A route where there was none' },
        { src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Add%20photo.png', label: 'Requirements upfront' },
        { src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Overview%20mockup.png', label: 'Status you can read' },
      ],
      screens: [
        { src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Cardholder.png', label: 'Plain-language form' },
        { src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Add%20photo.png', label: 'Upload with examples' },
        { src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Confirmation.png', label: 'What happens next' },
      ],
      outcome: 'A prototype approved for build, including a verification pathway that did not exist before. The principle outlives the project: a service the intended users cannot complete is not a form problem, it is an exclusion problem. Usability testing with care leavers is the first thing I would run given access.',
    },
    darkPlates: ['problem', 'journey', 'artifacts'],
    contextTitle: 'Context · leaving care at 18',
    context: {
      intro: `Care leavers are young people who have spent time in the care system and left it at 18, when statutory support falls away. Around 80,000 leave each year, often after repeated moves between placements, and are expected to handle housing, work and benefits alone. Transport runs underneath all of it, which is why TfL's Care Leaver Photocard gives them 50% off travel.`,
      stats: [
        { value: '80K+', label: 'Young people leaving care in the UK each year' },
        { value: '50%', label: 'TfL travel discount the photocard unlocks' },
        { value: '7', label: 'Friction points found in the existing journey' },
        { value: '3', label: 'WCAG 2.1 criteria the journey was breaching' },
      ],
      challengesTitle: 'What care leavers are up against',
      challenges: [
        'Housing that is frequently temporary, so any step assuming a fixed address excludes rather than inconveniences',
        'The smartphone as primary and often only device, making mobile accessibility a gating factor',
        'Prior experience of official processes that is often adversarial, so institutional tone reads as suspicion',
        'No family safety net to absorb a form that cannot be completed alone',
      ],
      quote: `The discount was never the hard part. The application standing in front of it was.`,
      image: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Contact%20your%20borough.png',
      imageCaption: 'The alternative verification route. The original journey had no equivalent: a care leaver without a fixed address could not proceed, and nothing on screen told them why.',
    },
    opportunityFraming: {
      from: 'Form redesign',
      to: 'Exclusion problem',
      initialAssumption: 'The brief arrived as a form redesign: the application was unclear, so the job was to make it clearer.',
      initialHmw: 'How might we make the Care Leaver Photocard application clearer and easier to complete?',
      shift: 'The WCAG audit and advocacy research overturned this. Friction was not evenly spread, and one step was not friction at all - care leavers without a fixed address had no route through address verification, and nothing on screen said so.',
      reframedHmw: 'How might we design an application a care leaver can complete independently, on a phone, without their housing situation quietly disqualifying them?',
    },
    solutionTeaser: `Where it landed: requirements surfaced before you start, a voice that talks to you rather than about you, error states that say how to fix the problem, and a second route through address verification for the people the original flow turned away. The rest of this page is how the audit got there.`,
    problem: `Care leavers are among the most socioeconomically vulnerable young people in the UK. After leaving the care system at 18, many face significant barriers to employment, education, and independence. In cities where public transport is the only affordable way to get around, access to a travel discount is not a perk: it is a practical lifeline.\n\nTransport for London's Care Leaver Photocard offers 50% off all TfL travel for care leavers aged 18-25. But the existing application journey had a problem: it was unclear, inaccessible in places, and created unnecessary friction for a group that already faces multiple barriers in navigating official processes.\n\nHow might we design an application experience that a care leaver can navigate independently, without a support worker, and without feeling stigmatised?`,
    insight: `The barriers were systemic, not motivational. Language, document requirements, and mobile accessibility were the three failure points that needed redesigning.`,
    processTitle: 'Process timeline',
    processEarly: true,
    processCompact: true,
    process: [
      {
        phase: 'Aug 2023 · Discover',
        step: 'Stakeholder Interviews',
        detail: 'Interviewed TfL programme managers and Novacroft product leads to understand existing process gaps and compliance constraints. Identified 7 friction points in the existing journey: document upload timing, formal language, missing error states, mobile accessibility failures, and address verification as an exclusion barrier.',
      },
      {
        phase: 'Aug 2023 · Discover',
        step: 'Journey Mapping & Audit',
        detail: 'Mapped the end-to-end application journey from the TfL photocard landing page through to payment confirmation, and audited each step against WCAG 2.1 AA. The flow diagram below shows the full redesigned journey including the "Contact your borough" alternative verification branch.',
        image: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/user-flow.png',
        imageCaption: 'User flow diagram: the complete redesigned application journey from review through to payment confirmation, with the alternative "Contact your borough" verification pathway branching off the main flow',
      },
      {
        phase: 'Aug 2023 · Research',
        step: 'Secondary Research',
        detail: 'Reviewed care leaver advocacy reports (Become, Action for Children) to understand the lived experience of the cohort. Examined comparable application journeys (student discount applications, benefit claim forms) to identify patterns that reduced friction for similar user groups.',
      },
      {
        phase: 'Aug to Sep 2023 · Design',
        step: 'Content Design',
        detail: 'Rewrote all application copy in plain English, replacing bureaucratic third-person language with direct, warm, first-person alternatives. The cardholder screen below shows the redesigned form: clean labels, clear layout, and a "Wrong details?" escape route for users whose pre-filled data is incorrect.',
        image: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Cardholder.png',
        imageCaption: 'Cardholder details screen: redesigned with plain language labels, clear field hierarchy, and a visible "Wrong details?" recovery link for users whose pre-filled information is incorrect',
      },
      {
        phase: 'Aug to Sep 2023 · Design',
        step: 'Information Architecture',
        detail: 'Redesigned the application flow to surface requirements upfront and handle edge cases gracefully. The "Contact your borough" screen below is the alternative verification pathway, designed for care leavers without a fixed address who would previously hit a silent dead end in the original flow.',
        image: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Contact%20your%20borough.png',
        imageCaption: '"Please contact your borough" screen: the alternative address verification pathway designed for care leavers in temporary or unstable housing, removing the invisible exclusion built into the original flow',
      },
      {
        phase: 'Sep 2023 · Prototype & iterate',
        step: 'Mobile-First Prototyping',
        detail: 'Built high-fidelity flows in Figma with 44px minimum touch targets throughout. Redesigned the step indicator with icons to improve scannability on small screens, replacing text-only labels with icon + label pairs that are easier to parse at a glance. Presented across two stakeholder iteration rounds.',
        image: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Icon%20suggestion.png',
        imageCaption: 'Redesigned step indicator: icon + label pairs replacing the original text-only progress bar, improving scannability on mobile and making the current step immediately identifiable',
      },
      {
        phase: 'Sep 2023 · Prototype & iterate',
        step: 'Error State Design',
        detail: 'Designed every step with specific, actionable recovery guidance. The photo upload screen below shows the approach: clear upfront requirements ("JPG, JPEG or PNG file, smaller than 10MB"), visual allowed/not-allowed examples, and a preview of the uploaded photo so users can verify before proceeding.',
        image: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Add%20photo.png',
        imageCaption: 'Photo upload screen: upfront file requirements, visual examples of accepted and rejected photos, and a live preview eliminating the "did it upload correctly?" uncertainty',
      },
    ],
    metrics: [
      { label: 'Friction points resolved', value: '7 / 7' },
      { label: 'WCAG 2.1 criteria addressed', value: '3' },
      { label: 'Stakeholder iteration rounds', value: '2' },
      { label: 'Delivery timeline', value: '2 months' },
    ],
    businessOutcomes: [
      { metric: '7 / 7 friction points resolved', translation: 'A care leaver can complete the application independently, without a support worker or a dead end. For TfL and Novacroft: fewer abandoned applications, fewer support calls, more eligible young people actually receiving the discount.' },
      { metric: 'WCAG 2.1 AA across the flow', translation: 'Full AA conformance on the audited criteria, reducing exposure under the 2018 public-sector accessibility regulations and making the journey usable on the devices this cohort actually applies on.' },
      { metric: 'Alternative verification pathway', translation: 'Approved by compliance, this route lets care leavers in temporary housing complete an application the original flow silently blocked. A group the service was excluding becomes a group it can serve.' },
    ],
    assumptionsLate: true,
    assumptions: {
      intro: `The brief was framed as a form redesign. The audit reframed it as an exclusion problem. Three assumptions the research overturned.`,
      items: [
        {
          assumption: `The formal, official tone of the existing copy was the safe, appropriate default for a government service.`,
          finding: `For a cohort with difficult relationships with official institutions, "the applicant must provide" read as cold and distancing. The wrong signal from a state with a duty of care.`,
          pivot: `Rewrote every screen in plain, first-person language. Tone became the primary trust mechanism, not decoration.`,
        },
        {
          assumption: `Document requirements could sit mid-flow, where the original journey placed them.`,
          finding: `Requirements arrived at the exact point where users had already abandoned. People discovered they lacked a document only after investing effort.`,
          pivot: `Surfaced the full checklist at the start, so users could prepare before committing.`,
        },
        {
          assumption: `Address verification was a routine step every applicant could clear.`,
          finding: `Care leavers in temporary housing had no viable path through it. Not difficult, impossible: an invisible exclusion built into the happy path.`,
          pivot: `Designed an alternative "Contact your borough" pathway, approved by compliance, giving the most vulnerable users a route the service had denied them.`,
        },
      ],
    },
    competitiveAnalysis: {
      intro: 'Rather than benchmark against transport products, I looked at the journeys this cohort actually completes: student discount applications and benefit claims. Both ask a young person to prove eligibility to an institution. The pattern was consistent: discount journeys are well designed but assume a settled life, benefit journeys accommodate instability but are punishing to complete. Neither does both.',
      tools: [
        {
          name: 'Student / young person discount',
          category: '16-25 Railcard, TOTUM',
          verdict: 'Smooth, if your life is settled',
          features: [
            { label: 'Requirements shown upfront', score: 'full' },
            { label: 'Plain, non-institutional tone', score: 'partial' },
            { label: 'Recoverable error states', score: 'partial' },
            { label: 'Mobile-first accessibility', score: 'full' },
            { label: 'Route without a fixed address', score: 'none' },
          ],
          gap: 'Well built, because a lost applicant is lost revenue. But eligibility runs through enrolment or a settled address, so the model assumes a stable footprint the user can point to.',
        },
        {
          name: 'Benefit claim journeys',
          category: 'Universal Credit and similar',
          verdict: 'Accommodates instability, punishing to use',
          features: [
            { label: 'Requirements shown upfront', score: 'partial' },
            { label: 'Plain, non-institutional tone', score: 'none' },
            { label: 'Recoverable error states', score: 'partial' },
            { label: 'Mobile-first accessibility', score: 'partial' },
            { label: 'Route without a fixed address', score: 'partial' },
          ],
          gap: 'The one category that acknowledges people without settled housing. But it is long, adversarial, and built around verifying a claimant is not lying: exactly the register a care leaver associates with being doubted.',
        },
        {
          name: 'Care Leaver Photocard',
          category: 'The existing TfL journey',
          verdict: 'The baseline being audited',
          features: [
            { label: 'Requirements shown upfront', score: 'none' },
            { label: 'Plain, non-institutional tone', score: 'none' },
            { label: 'Recoverable error states', score: 'none' },
            { label: 'Mobile-first accessibility', score: 'none' },
            { label: 'Route without a fixed address', score: 'none' },
          ],
          gap: 'Inherited the formality of a benefit journey without its tolerance for unstable circumstances, and none of the usability of the discount journeys. Documents halfway through, third-person copy, and no path at all without a fixed address.',
        },
        {
          name: 'The redesign',
          category: 'This project',
          verdict: 'The gap it fills',
          features: [
            { label: 'Requirements shown upfront', score: 'full' },
            { label: 'Plain, non-institutional tone', score: 'full' },
            { label: 'Recoverable error states', score: 'full' },
            { label: 'Mobile-first accessibility', score: 'full' },
            { label: 'Route without a fixed address', score: 'full' },
          ],
          gap: 'The upfront clarity and mobile craft of the discount journeys, with the tolerance for unstable circumstances of the benefit journeys, minus the register that makes the latter feel like an interrogation.',
        },
      ],
      takeaway: 'The journeys that are pleasant to use assume a settled life. The ones that accommodate an unsettled life are unpleasant to use. Care leavers sit at the intersection, which is why the alternative verification pathway mattered more than any single screen.',
    },
    userJourney: {
      intro: 'The redesigned journey stage by stage. Feelings are design interpretation drawn from advocacy research, not observed reactions.',
      stages: [
        { stage: 'Discover', action: 'Lands on the TfL photocard page and identifies the Care Leaver option among the card types.', feeling: 'Hopeful, slightly wary', opportunity: 'Name the card in the language a care leaver uses about themselves, not scheme code.' },
        { stage: 'Prepare', action: 'Sees the full list of documents and information needed before starting anything.', feeling: 'In control', opportunity: 'The single highest-leverage change: requirements moved from mid-flow to the front door.' },
        { stage: 'Register', action: 'Creates an account with date of birth, name and email.', feeling: 'Low friction', opportunity: 'Keep registration light and tag fields to the right mobile keyboard.' },
        { stage: 'Verify', action: 'Confirms borough residency and address, or takes the alternative route if there is no fixed address.', feeling: 'The make-or-break moment', opportunity: 'The step that silently ended the original journey for anyone in temporary housing.' },
        { stage: 'Upload', action: 'Adds a photo against explicit requirements with visual accept and reject examples, then previews it.', feeling: 'Certain rather than guessing', opportunity: 'Show the rules and a live preview instead of failing after submission.' },
        { stage: 'Review', action: 'Checks a full summary of the application before committing.', feeling: 'Reassured', opportunity: 'A last chance to catch an error while it is still cheap to fix.' },
        { stage: 'Pay', action: 'Completes payment with reference number and amount shown before card details are entered.', feeling: 'No surprises', opportunity: 'Cost stated upfront, which matters acutely for this cohort.' },
        { stage: 'Confirm', action: 'Receives confirmation with explicit "what happens next" guidance.', feeling: 'Settled, knows what is coming', opportunity: 'Close the loop rather than leaving the applicant to wonder.' },
      ],
    },
    researchOps: {
      intro: 'A two-month commercial engagement touching one of the UK\'s more vulnerable user groups. What I could and could not access shaped both how I worked and what I claim from it.',
      items: [
        { label: 'Lived experience by proxy', detail: 'No route to primary research inside the timeline, so advocacy research from Become and Action for Children became the evidence base. It carries weight, but it is not a substitute for talking to people. Every persona here is a composite, not a validated finding.' },
        { label: 'Stakeholder access', detail: 'Interviews with TfL programme managers and Novacroft product leads established eligibility rules, compliance constraints, and where the process was generating support load. The closest available proxy for where applicants were getting stuck.' },
        { label: 'Accessibility as the evidence base', detail: 'Where user data was unavailable, WCAG 2.1 AA gave me a standard to argue from. A named criterion breach is not a matter of taste, which made it the strongest lever in stakeholder review.' },
        { label: 'Compliance as a design constraint', detail: 'Eligibility verification is governed by TfL policy, so the alternative pathway had to be designed with the compliance team, not around them. That is what made it part of the service instead of a workaround.' },
      ],
    },
    testing: {
      description: 'Two structured review rounds with TfL and Novacroft stakeholders, against policy, compliance and accessibility criteria. This was not usability testing with care leavers, which sat outside the scope of the engagement.',
      participants: 'TfL programme managers and Novacroft product leads, across 2 rounds',
      questions: [
        'Does each proposed change hold up against the specific WCAG 2.1 criterion it claims to address?',
        'Can the alternative address verification route satisfy TfL eligibility policy, or does it create a compliance gap?',
        'Does the rewritten plain-English copy stay accurate to the scheme rules while dropping the institutional register?',
      ],
      worked: [
        'Naming specific WCAG criteria turned contested opinions into obligations, and those changes stopped being debated',
        'The document checklist move was accepted once framed as abandonment at the point of highest intent, not a layout preference',
        'The plain-English rewrite held up against scheme accuracy, the main stakeholder concern about changing tone',
      ],
      changed: [
        'The step indicator moved from text-only labels to icon and label pairs, clearing the 44px minimum and removing reliance on position alone',
        'The alternative verification route went through formal compliance sign-off rather than staying an informal workaround',
      ],
      outcome: 'The prototype was approved for build, including the alternative verification pathway. Usability testing with care leavers remains the highest-value unvalidated step, and the first thing I would run given access.',
    },
    solution: `A redesigned Care Leaver Oyster Card application experience: document checklist surfaced upfront so users can prepare, plain-language copy in warm first-person tone throughout, redesigned error states with specific recovery guidance, mobile-first design with 44px+ touch targets and keyboard-optimised form fields, and an alternative address verification pathway for care leavers in unstable housing.`,
    takeaway: `The voice of a service is part of its design. Changing "the applicant must provide" to "you'll need to upload" is not copyediting. It is deciding who the service is talking to, and whether that person feels they belong in it. Government services are often the last to be designed this way, and the people who pay the price for that are the ones who can least afford to.`,
    tags: ['Government', 'Inclusive Design', 'Content Design', 'Service Design', 'TfL'],
    deskResearch: {
      summary: `Before any design work, I mapped the existing user journey and audited it against WCAG 2.1 AA standards. I also reviewed care leaver advocacy reports and comparable application journeys to understand what was failing and for whom.`,
      stats: [
        { value: '80K+', label: 'Young people leaving care in the UK each year' },
        { value: '50%', label: 'TfL travel discount available to eligible care leavers aged 18-25' },
        { value: '7', label: 'Friction points identified in the existing application journey' },
        { value: '3', label: 'WCAG 2.1 AA accessibility issues identified and addressed' },
      ],
      findings: [
        'The existing flow required users to upload documentation mid-form, at a point where many had already abandoned. Requirements needed to move earlier, not later.',
        'Language used throughout was formal and impersonal ("the applicant must provide…"), which felt distancing for a user group that often has difficult relationships with official institutions.',
        'Several steps had no error states: users who made a mistake received no guidance on how to correct it. This breached WCAG 3.3.1 (Error Identification) and 3.3.3 (Error Suggestion), both Level AA requirements.',
        'On mobile (the primary device for 18-25 year olds), several interactive elements (including the step indicator and action buttons) were below the 44×44px minimum. This breached WCAG 2.5.5 (Target Size, Level AA).',
        'The step indicator communicated progress through text and position alone, with no non-text cues. This breached WCAG 1.3.3 (Sensory Characteristics, Level A).',
        'Care leavers in unstable or temporary housing had no viable path through the address verification step. It was an invisible exclusion built into the original flow.',
        'Form fields used generic text inputs with no mobile keyboard types configured. Date fields showed a full QWERTY keyboard instead of a numeric pad; email fields offered no @ shortcut. Small frictions that compound into abandonment on mobile.',
      ],
      gap: `The existing journey assumed document literacy, stable addresses, digital confidence, and familiarity with bureaucratic systems. The opposite of the profile of most care leavers aged 18-25.`,
    },
    designDecisions: [
      {
        decision: 'Rewrote all content in plain English using a warm, direct tone',
        rationale: 'Research into form design for vulnerable users consistently shows that first-person, conversational language reduces anxiety and increases completion rates compared to formal third-person language. For a cohort with often-difficult relationships with official institutions, language that feels human rather than bureaucratic is not cosmetic: it\'s structural.',
      },
      {
        decision: 'Moved document checklist to the start of the journey',
        rationale: 'Users who discover mid-form that they need documents they don\'t have are far more likely to abandon. Surfacing requirements upfront lets users prepare before they start, reducing drop-off at the point of maximum intent.',
      },
      {
        decision: 'Redesigned error states with clear, specific recovery guidance',
        rationale: 'Generic error messages ("Invalid entry") create confusion and dead ends. Specific guidance ("Please upload a JPG or PDF under 5MB") gives users a clear path forward. For a user group with limited experience navigating official digital services, unclear error states are a significant exclusion mechanism.',
      },
      {
        decision: 'Optimised for mobile-first interaction',
        rationale: 'Care leavers aged 18-25 overwhelmingly access services via smartphone. All touch targets were sized to 44px minimum, and form fields were tagged to trigger the correct mobile keyboard type, removing the small frictions that accumulate into abandonment.',
      },
    ],
    outcomes: {
      summary: 'The redesigned care leaver photocard journey simplified a previously friction-heavy process into a clear, accessible, mobile-optimised experience, built specifically for a user group that the original journey had systematically excluded.',
      keyOutcomes: [
        'All 7 friction points identified in the journey map resolved through design, content, and IA changes',
        '3 WCAG 2.1 AA accessibility improvements implemented across identified issues',
        'Alternative address verification pathway designed and approved by TfL\'s compliance team, removing an invisible exclusion from the original flow',
        'Full end-to-end prototype delivered and validated across 2 stakeholder iteration rounds within a 2-month timeline',
      ],
      learned: 'Designing within compliance constraints forced creative problem-solving rather than clean-slate thinking. The alternative address verification pathway was not in the original brief. It came out of the audit: once I mapped who the original flow was excluding, building a route out for them became the most important decision I made. Designing for the most constrained user improved the experience for everyone.',
    },
    screens: {
      intro: 'The redesigned application, screen by screen - from choosing the card to the route out for anyone without a fixed address.',
      items: [
        { src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Apply.png', title: 'Choose your card', description: 'The Care Leaver option named plainly, not by scheme code.' },
        { src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Apply%20for.png', title: 'Who it is for', description: 'Establishes who the card is for before any personal details.' },
        { src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Create%20an%20account.png', title: 'Create an account', description: 'Date of birth, name, email. Registration kept deliberately light.' },
        { src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Contact%20Details.png', title: 'Contact & address', description: 'Borough residency and address - the step that used to end the journey.' },
        { src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Cardholder.png', title: 'Cardholder details', description: 'Plain-language labels and a visible "Wrong details?" route out.' },
        { src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Add%20photo.png', title: 'Add your photo', description: 'Requirements upfront, accept and reject examples, live preview.' },
        { src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Review.png', title: 'Review', description: 'Full summary before submitting, while an error is still cheap to fix.' },
        { src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Payament.png', title: 'Payment', description: 'Reference and amount shown before card details are entered.' },
        { src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Confirmation.png', title: 'Confirmation', description: '"What happens next" so nobody is left wondering.' },
        { src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Contact%20your%20borough.png', title: 'Contact your borough', description: 'The alternative verification route for applicants with no fixed address.' },
        { src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Overview%20mockup.png', title: 'Account overview', description: 'Reference, date, card type and status readable in one place.' },
      ],
    },
    gallery: [
      {
        src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Apply.png',
        caption: 'Step 1: TfL photocard landing page. Users select the card type they need; the Care Leaver (18-25 CL Bus and Tram) option begins the application flow.',
        type: 'prototype',
      },
      {
        src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Apply%20for.png',
        caption: 'Step 2: "Who is this application for?" The application selection modal establishes who the card is for before collecting any personal details.',
        type: 'prototype',
      },
      {
        src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Create%20an%20account.png',
        caption: 'Step 3: Account creation. Users register with date of birth, name, and email before starting the application, keeping registration lightweight.',
        type: 'prototype',
      },
      {
        src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Contact%20Details.png',
        caption: 'Step 4: Contact details and address. Borough residency verification and address capture, with a security question for account recovery.',
        type: 'prototype',
      },
      {
        src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Cardholder.png',
        caption: 'Step 5: Cardholder details. Confirmation of name, date of birth, and address pre-filled from registration, with a clear "Wrong details?" escape route.',
        type: 'prototype',
      },
      {
        src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Add%20photo.png',
        caption: 'Step 6: Photo upload. Explicit file requirements upfront, visual examples of accepted and rejected photos, and a live preview before proceeding.',
        type: 'prototype',
      },
      {
        src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Review.png',
        caption: 'Step 7: Review application. Full summary of the application before submission, giving users the opportunity to catch and correct errors.',
        type: 'prototype',
      },
      {
        src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Payament.png',
        caption: 'Step 8: Payment. Straightforward payment screen with reference number and amount shown upfront before card details are entered.',
        type: 'prototype',
      },
      {
        src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Confirmation.png',
        caption: 'Step 9: Payment confirmation. "What happens next" guidance removes post-submission anxiety and sets clear expectations for the applicant.',
        type: 'prototype',
      },
      {
        src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Contact%20your%20borough.png',
        caption: 'Alternative pathway: "Please contact your borough." Designed for care leavers who cannot verify via a fixed address, replacing the silent dead end in the original flow.',
        type: 'prototype',
      },
      {
        src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Overview%20mockup.png',
        caption: 'Post-application: Account overview. Reference number, application date, card type, and status all visible in one place. The "Contact your borough" status prompts next steps.',
        type: 'prototype',
      },
    ],
    processArtifacts: [
      {
        src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/user-flow.png',
        caption: 'User flow diagram: the redesigned end-to-end journey showing the main application path (Review → Payment → Confirmation) and the alternative "Contact your borough" verification branch for care leavers without a fixed address',
        label: 'User flow',
      },
      {
        src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Icon%20suggestion.png',
        caption: 'Redesigned step indicator component: icon + label pairs (Cardholder, Add photo, Review, Payment, Confirmation) replacing the original text-only progress bar to improve mobile scannability',
        label: 'Component redesign',
      },
    ],
  },
  {
    slug: 'hmrc-draft',
    title: 'HMRC Design Sprint',
    tagline: 'A 5-day structured sprint with HMRC\'s internal UX team - from HMW question to tested prototype addressing small business tax anxiety.',
    niche: ['Government', 'Public Sector', 'Design Sprint'],
    type: 'Government',
    featured: false,
    comingSoon: true,
    client: 'HM Revenue & Customs',
    duration: '5 days · structured sprint format',
    tools: ['Sketching', 'Paper Prototyping', 'Figma'],
    overview: {
      team: '4 UX designers and researchers from HMRC + 3 external participants',
      industry: 'Public Sector / Tax & Finance',
    },
    problem: `Small business owners in the UK frequently struggle to stay on top of tax obligations year-round. The anxiety of the January Self Assessment deadline is familiar - but the underlying problem is a design failure: existing HMRC tools assume accounting knowledge that most small business owners simply don't have.\n\nHow might we help small business owners prioritise budget and tax management?`,
    insight: `Financial anxiety and financial confidence require completely different design responses. A single solution cannot serve both - the product needs to address ongoing confidence and on-demand reassurance as separate problems.`,
    process: [
      {
        step: 'Empathise',
        detail: 'The sprint opened with structured empathy exercises - interviewing small business owners and mapping their experiences with tax management. We gathered qualitative insights around financial anxiety, confidence gaps, and the moments where users most needed help. Research was clustered using post-it affinity mapping across financial behaviours and emotional responses.',
      },
      {
        step: 'Define',
        detail: 'We synthesised empathy research into a clear HMW question: "How might we help users prioritise budget and tax management?" The team completed a competitive landscape review, examining how platforms like Amazon, Reddit, and Quora approach community knowledge-sharing and financial guidance - informing the forum concept that emerged in ideation.',
        image: '/uploads/HMRC%20Sprint/3-AVL0aVrb5wsGDjkD.png',
        imageCaption: 'Define phase - competitive landscape analysis alongside HMW question synthesis',
      },
      {
        step: 'Storyboarding',
        detail: 'After defining our HMW question, each team member developed storyboards exploring different angles on the problem. Storyboard A (The Overwhelmed Founder) traced the emotional journey from Q4 anxiety to a calmer, ongoing financial relationship. Storyboard B (The Confident Planner) focused on a user who tracks income and expenses but needs smarter projection tools before deadlines arrive. Storyboard C (The Expert-Seeker) addressed a user confident in their numbers but lacking confidence interpreting tax obligations - needing plain-English guidance on demand. The exercise revealed that our user base was not homogeneous. Financial anxiety and financial confidence required completely different design responses - a finding that directly shaped our persona work and solution direction.',
        image: '/uploads/HMRC%20Sprint/image%2024.png',
        imageCaption: 'Storyboarding session - three scenarios exploring different user relationships with tax management, revealing the need for distinct design responses',
      },
      {
        step: 'Ideate - Crazy Eights',
        detail: 'Using the Crazy Eights format, each team member generated 8 interface concepts in 8 minutes. We then used Divide & Swarm prioritisation to converge on the strongest ideas. A real-time tax dashboard and a moderated expert forum emerged as the top two directions - addressing the two distinct user profiles identified in storyboarding.',
        image: '/uploads/HMRC%20Sprint/image%2025.png',
        imageCaption: 'Crazy Eights ideation outputs - rapid concept generation before Divide & Swarm prioritisation converged on two solution directions',
      },
      {
        step: 'Prototype',
        detail: 'The team built two interconnected features: a Live Tax Dashboard showing a running tax liability based on year-to-date income, with a clear projection to the January deadline - requiring minimal input, income entries only; and an Expert Community Forum where small business owners could post tax questions and receive answers from HMRC-verified tax professionals. The dashboard addressed ongoing confidence; the forum addressed high-stakes, high-anxiety moments.',
        image: '/uploads/HMRC%20Sprint/10-AE0Xrz6ogWFor3Mk.png',
        imageCaption: 'Prototype screens - Live Tax Dashboard with real-time liability projection and Expert Community Forum with HMRC-verified contributor profiles',
      },
      {
        step: 'Test',
        detail: 'We conducted three 30-minute usability sessions with participants matching the Harrison persona. Each session used a blink test (5-second first impression) to assess brand clarity, an expectancy test to check whether interactions mapped to user mental models, and task-based scenarios including "You\'ve just invoiced a client for £2,000 - where would you record this?" Findings directly informed two post-test iterations: the addition of "Verified by HMRC" badges and a simplified income entry flow.',
        image: '/uploads/HMRC%20Sprint/8-m5Kxn73wqnFO9b6z.png',
        imageCaption: 'Usability testing session - participants completing task-based scenarios with the prototype',
      },
    ],
    metrics: [
      { label: 'Sprint duration', value: '5 days' },
      { label: 'Blink test success', value: '3 / 3 participants' },
      { label: 'Most valued feature', value: 'Tax projection' },
      { label: 'Income entry flow', value: '8 → 5 steps' },
    ],
    solution: `After Crazy Eights ideation and Divide & Swarm prioritisation, the team converged on a two-feature solution.\n\n1. Live Tax Dashboard - a home screen showing Harrison's running tax liability based on declared income year-to-date, with a clear projection of what he needs to set aside by the January deadline. Designed to require minimal input - income entries only, no complex categorisation needed.\n\n2. Expert Community Forum - a moderated Q&A forum where small business owners can post tax questions and receive answers from HMRC-verified tax professionals. Designed to reduce the cost and anxiety of seeking professional advice for straightforward questions.\n\nThe two features addressed different parts of the problem: the dashboard for ongoing confidence, and the forum for high-anxiety, high-stakes moments.`,
    personas: [
      {
        type: 'Primary - Small Business Owner',
        name: 'Harrison',
        age: 34,
        description: 'Runs a freelance graphic design studio. Has been self-employed for 4 years. Manages his finances in a spreadsheet but struggles to forecast whether he will have enough set aside for his tax bill. He often ends up scrambling in January.',
        needs: [
          'A simple way to see his projected tax liability updated in real time as he earns.',
          'Plain-English guidance when he is unsure about allowable expenses.',
        ],
        frustrations: [
          'HMRC\'s current online tools assume a level of accounting knowledge he doesn\'t have.',
          'Generic financial apps don\'t connect to his actual tax obligations.',
        ],
        goal: 'Feel in control of his finances year-round, not just when his accountant calls.',
      },
    ],
    testing: {
      description: 'We conducted three 30-minute usability sessions with participants matching the Harrison persona - self-employed individuals managing their own tax. Each session used a blink test (5-second first impression) to assess brand clarity and initial comprehension, an expectancy test to check whether interactions mapped to mental models, and task-based scenarios.',
      participants: '3 participants matching the Harrison persona (self-employed, managing own tax)',
      questions: [
        'Does the dashboard immediately communicate its purpose as a financial tool within 5 seconds?',
        'Can users locate where to record new income without instruction?',
        'Does the forum feel trustworthy enough to act on advice received?',
      ],
      worked: [
        'Blink test: all three participants correctly identified the dashboard as a financial tool within 5 seconds.',
        'The tax projection figure was the single most valued element - participants said unprompted that this was "exactly what I\'ve always wanted to know."',
        'Task completion for income entry was high - users found the core flow intuitive on first attempt.',
      ],
      changed: [
        'One blink test participant confused the dashboard with a banking app - a branding issue flagged for iteration.',
        'The forum required stronger trust signals - participants wanted to verify that answerers were qualified before acting on advice. "Verified by HMRC" badge added post-test.',
        'Income entry flow was simplified from 8 steps to 5 based on task observation.',
      ],
      outcome: 'Post-testing iterations: added a "Verified by HMRC" badge to forum contributor profiles, and simplified the income entry flow from 8 steps to 5. Both changes were validated as improvements in informal follow-up.',
    },
    outcomes: {
      summary: 'In five days, the team took a complex, emotionally charged problem - the anxiety small business owners feel about tax - and produced a tested, iterated prototype that addressed it at two levels: ongoing confidence through real-time projection, and on-demand reassurance through expert-verified guidance.',
      keyOutcomes: [
        'Blink test: all 3 participants correctly identified the dashboard as a financial tool within 5 seconds',
        'Tax projection figure rated the most valued element by all participants - described unprompted as "exactly what I\'ve always wanted to know"',
        '"Verified by HMRC" badge added to forum contributor profiles after trust signal gap identified in testing',
        'Income entry flow reduced from 8 to 5 steps following task-based observation - a measurable usability improvement within the sprint itself',
      ],
      learned: 'This sprint demonstrated the power of structured time constraints in forcing creative prioritisation. When you have four days to design, prototype, and test, you quickly learn to distinguish what is essential from what is merely interesting. It also gave me direct exposure to how HMRC\'s own UX team approaches large-scale public service design - including their commitment to accessibility, plain-language standards, and iterative testing with real users. These practices have since become fundamental to my own process.',
    },
    gallery: [
      {
        src: '/uploads/HMRC%20Sprint/image%2031.png',
        caption: 'Storyboard - The Overwhelmed Founder: tracing the emotional journey from Q4 tax anxiety to a calmer, ongoing financial relationship',
        type: 'storyboard',
      },
      {
        src: '/uploads/HMRC%20Sprint/image%2032.png',
        caption: 'Storyboard - The Confident Planner: a user who tracks income and expenses but needs smarter projection tools to plan ahead of deadlines',
        type: 'storyboard',
      },
      {
        src: '/uploads/HMRC%20Sprint/7-YKbwl9QJXjU67lGe.png',
        caption: 'Prototype - Live Tax Dashboard screen: real-time tax liability projection with year-to-date income tracking',
        type: 'prototype',
      },
      {
        src: '/uploads/HMRC%20Sprint/4-AR043qRJx9i1jOz5.png',
        caption: 'Prototype - income entry flow: the simplified 5-step recording journey iterated after usability testing',
        type: 'prototype',
      },
      {
        src: '/uploads/HMRC%20Sprint/image%2033.png',
        caption: 'Prototype - Expert Community Forum: moderated Q&A with HMRC-verified contributor badges for trust and credibility',
        type: 'prototype',
      },
      {
        src: '/uploads/HMRC%20Sprint/image%2034.png',
        caption: 'Prototype - Forum question detail view: verified contributor profile and structured answer format',
        type: 'prototype',
      },
    ],
    takeaway: 'In five days, the team produced a tested prototype addressing small business tax anxiety at two levels - ongoing confidence through real-time projection, and on-demand reassurance through expert-verified guidance. The sprint proved that structured time constraints force the prioritisation decisions that matter most in design. It also gave me direct exposure to how HMRC\'s UX team approaches public service design: accessibility, plain-language standards, and iterative testing with real users. These are now non-negotiables in my own practice.',
    tags: ['Government', 'Design Sprint', 'Public Sector', 'Tax', 'Usability Testing', 'Service Design'],
  },
  {
    slug: 'project-accord',
    title: 'Project Accord',
    tagline: 'Co-designing a digital companion for ambient air quality technology - research accepted at ACM CHI 2024.',
    niche: ['Workplace Wellbeing', 'Ambient UX', 'HCI Research'],
    type: 'Academic',
    featured: false,
    client: 'Newcastle University / Open Lab',
    duration: 'May · Nov 2022 · MSc Dissertation',
    tools: ['Figma', 'Miro', 'Paper Prototyping', 'Video Storyboards'],
    heroImage: '/uploads/Accord/Phone%20mockup_3@4x.png',
    overview: {
      team: 'Lenia Margariti (PhD Researcher, ActuAir technology)',
      industry: 'Workplace Wellbeing / HCI Research',
      recognition: 'Acknowledged in Margariti et al., ACM CHI 2024',
    },
    publishedResearch: {
      title: 'Evaluating ActuAir: Building Occupants\' Experiences of a Shape-Changing Air Quality Display',
      authors: 'Eleni Margariti, Vasilis Vlachokyriakos, Abigail C Durrant, David Kirk',
      venue: 'ACM CHI 2024 · Honolulu · Open Lab, Newcastle University',
      doi: '10.1145/3613904.3642396',
      url: 'https://doi.org/10.1145/3613904.3642396',
      acknowledgement: 'Acknowledged for co-designing and co-facilitating Study 02 - the biomimetic feedback co-creation workshop with five building occupants that shaped the design direction reported in the paper.',
      acknowledgementImage: '/uploads/Accord/paper/acknowledgement.png',
    },
    tldr: {
      headline: 'Co-designing the digital layer for an ambient air quality display',
      summary: 'A shape-changing display at Open Lab turns amber and red as indoor CO₂ climbs. In co-design workshops I found people noticed the change and still had no idea what it meant or what to do - so I designed the companion app that decodes the signal and suggests an action, without ever interrupting them.',
      role: 'UX Designer & Researcher, MSc dissertation',
      impact: [
        { text: 'Reframed the problem from awareness to translation: what does the signal mean, and what do I do?' },
        { text: 'Co-designed and co-facilitated Study 02, acknowledged in the CHI 2024 paper' },
        { text: '100% of test participants took an air quality action prompted by the device' },
        { text: '50% reported increased awareness of the air around them' },
        { text: 'Notifications removed entirely, the app opens by choice' },
      ],
      timelineLabel: '7 months, May to November 2022',
      researchKicker: 'May – Jul 2022',
      designKicker: 'Aug – Nov 2022',
      timeline: [
        { when: 'May', what: 'Literature review' },
        { when: 'Jun', what: 'Contextual observation' },
        { when: 'Jul', what: 'Co-design workshops' },
        { when: 'Aug–Sep', what: 'Usability testing' },
        { when: 'Oct', what: 'Prototype iteration' },
        { when: 'Nov', what: 'Dissertation write-up' },
      ],
      discovery: {
        label: 'Ambient beats alerting',
        line: '30+ papers across indoor air quality, ambient information displays, and behavioural nudge theory. The consistent finding: displays that integrate aesthetically into a space outperform alert-based systems for sustained behaviour change, and alert-based IAQ tools get switched off within days.',
        gap: 'No prior work had explored what the digital layer around a shape-changing ambient display should do - which is exactly where ActuAir needed design.',
      },
      ethnography: {
        label: 'Co-design workshops',
        line: 'Two sessions with office professionals, working hands-on with the ActuAir prototype and four office scenarios. Every participant preferred the device at eye level or in peripheral vision - "out of sight, out of mind" came up repeatedly - and every one of them read the inflation metaphor slightly differently.',
        items: [
          { src: '/uploads/Accord/69c1064c-b190-4c28-b6d7-e8ecea3f099e%20rw_1920@4x.png', label: 'Workshop in session' },
          { src: '/uploads/Accord/187dea95-0d97-49c9-9c52-39873ee50318%20rw_3840@4x.png', label: 'Working the scenarios' },
          { src: '/uploads/Accord/F0b98a8d-3b90-4629-820d-09873bec1433%20rw_1920@4x.png', label: 'Handling the prototype' },
          { src: '/uploads/Accord/8c058c0e-705d-48a8-b016-6c3d5779f6a7%20rw_1920@4x.png', label: 'Arranging the modules' },
        ],
      },
      pivot: {
        from: 'Alerting',
        fromHmw: 'How might we alert office workers when indoor air quality drops?',
        to: 'Ambient + on-demand',
        toHmw: 'How might we help people understand what the ambient signal is telling them, and what to do about it, without interrupting their work?',
        because: 'Participants dismissed alerts outright - several had already disabled notifications on tools like this.',
      },
      origin: {
        label: 'How the companion app arrived',
        line: 'Walking the storyboards, participants could see the display turn amber or red - and then had no idea what it was asking of them. Some read the inflation as breathing, some wanted a legend, and nobody could say what they should actually do about it. The signal got attention but carried no instruction. The companion app came out of that gap: something that decodes what the colour means and tells you what to do about it.',
        items: [
          { src: '/uploads/Accord/Ede39b6f-c191-49ae-849e-1d2050a230ed%20rw_1920@4x.png', label: 'Four states, no legend' },
          { src: '/uploads/Accord/D4d99d38-ee26-40da-9462-ad6d685dbaa3@4x.png', label: 'Paper prototypes' },
          { src: '/uploads/Accord/screens/functions.png', label: 'The app decodes it' },
        ],
      },
      people: 'Office professionals working in a shared smart building - people at a fixed desk for most of the day, and people moving between meeting rooms and shared spaces.',
      testing: {
        line: 'Task-based usability testing with 5 office professionals, combining evaluation of the app prototype with observation of how they responded to the device itself.',
        changes: [
          'A weekly summary view added, requested directly by participants and not in the original prototype',
          'An onboarding moment added so each user sets their own reading of the ambient signal',
          'Notifications removed as a default, opt-in per signal type instead',
        ],
      },
      ethics: 'Ethical approval through Newcastle University / Open Lab before any workshop or deployment. Participants recruited from building occupants, briefed on the device before interaction, free to opt out at any point, and not incentivised.',
      output: [
        { src: '/uploads/Accord/Ab0cc8d7-15e5-4c20-91e7-9f692f345fdc@4x.png', label: 'The physical display' },
        { src: '/uploads/Accord/5ef9eb13-b071-496a-b0ea-0d0e49ddf8b4@4x.png', label: 'Signalling good air' },
        { src: '/uploads/Accord/screens/functions.png', label: 'The app explains it' },
      ],
      screens: [
        { src: '/uploads/Accord/screens/spaces.png', label: 'Your Spaces' },
        { src: '/uploads/Accord/screens/functions.png', label: 'Actu-Air functions' },
        { src: '/uploads/Accord/screens/notifications.png', label: 'Notifications, off by default' },
      ],
      outcome: 'A validated companion app prototype, and a design principle that carries well beyond air quality: an ambient signal earns attention but cannot carry instruction, so it needs a layer that translates it into an action. The co-design work behind it is acknowledged in Margariti et al., ACM CHI 2024.',
    },
    contextTitle: 'Context · the air you cannot sense',
    context: {
      intro: `Indoor air quality is one of the few environmental factors that directly affects how well people think, and one of the only ones they cannot sense. CO₂ builds up quietly through a working day as rooms fill and windows stay shut. Past roughly 1000ppm it starts measurably degrading concentration and decision-making, and the people in the room have no idea it is happening.\n\nActuAir, developed at Open Lab, made that invisible data physical: a modular, biomimetic display that inflates and shifts colour in response to CO₂. My dissertation asked the next question - what does the digital layer around a device like this need to do?`,
      stats: [
        { value: '1000ppm', label: 'CO₂ threshold linked to reduced cognitive performance' },
        { value: '90%', label: 'Of the average person\'s time is spent indoors' },
        { value: '30+', label: 'Academic papers reviewed across IAQ, ambient displays and nudge theory' },
        { value: '5', label: 'Building occupants in the Study 02 co-creation workshop' },
      ],
      challengesTitle: 'What office workers are up against',
      challenges: [
        'The data is invisible - no sensory cue tells you the air has degraded, so nothing prompts a response',
        'Alert-based tools interrupt at the worst possible moment and get switched off within days',
        'Numeric readouts assume people know what 850ppm means, and what to do about it',
        'Building ventilation is managed by facilities, leaving occupants with awareness but no agency',
      ],
      quote: `Making the data visible was never the hard part. Making it actionable without adding to someone's cognitive load was.`,
      image: '/uploads/Accord/Ab0cc8d7-15e5-4c20-91e7-9f692f345fdc@4x.png',
      imageCaption: 'The ActuAir display - a modular, biomimetic room divider that inflates and changes colour in response to CO₂ levels. Built at Open Lab, Newcastle University.',
    },
    problem: `Indoor air quality in offices is frequently worse than the air outside - CO₂ regularly passes the 1000ppm threshold linked to fatigue, poor concentration, and reduced cognitive performance. Yet it is completely invisible.\n\nOffice workers can neither sense it nor act on it. The tools that exist either sit unopened on a phone, or interrupt at exactly the wrong moment - and get disabled.`,
    insight: `An ambient signal gets attention but carries no instruction. People saw the display change colour and still could not say what it meant or what they were supposed to do - so the design problem was never awareness, it was translation.`,
    solutionTeaser: `Where it landed: the display tells you something has changed, and the app tells you what that means and what to do about it - opened by choice, once you have noticed the colour. The rest of this page is how the research got there.`,
    opportunityFraming: {
      from: 'Alerting',
      to: 'Ambient + on-demand',
      initialAssumption: 'Like almost every product in this category, I started from alerting. The job, I assumed, was to make the invisible visible and tell people the moment the air got bad.',
      initialHmw: 'How might we alert office workers when indoor air quality drops?',
      shift: 'The co-design workshops overturned this twice over. Participants dismissed alerts outright - several had already disabled notifications on tools like this. And the display was already telling them something; they just could not read it. Awareness was not the missing piece, interpretation was.',
      reframedHmw: 'How might we help people understand what the ambient signal is telling them, and what to do about it, without interrupting their work?',
    },
    deskResearch: {
      summary: 'Research into indoor air quality, ambient information systems, and workplace behaviour change formed the foundation of this project. I reviewed 30+ academic papers spanning environmental health, HCI ambient display research, and behavioural nudge theory - establishing both the problem\'s scale and the gap in existing solutions.',
      stats: [
        { value: '30+', label: 'Academic papers reviewed' },
        { value: '1000ppm', label: 'CO₂ threshold linked to reduced cognitive performance' },
        { value: '3', label: 'Workplaces observed for contextual research' },
        { value: '90%', label: 'of time the average person spends indoors - making air quality a daily, invisible health issue' },
      ],
      findings: [
        'CO₂ levels in poorly ventilated offices regularly exceed 1000ppm - a threshold associated with reduced cognitive function, fatigue, and difficulty concentrating.',
        'Most office workers have no awareness of the air quality around them; buildings provide little feedback beyond a blinking thermostat.',
        'Alert-based IAQ systems are frequently ignored - they interrupt workflow at inopportune moments and do not support habitual behaviour change.',
        'Ambient displays that integrate aesthetically into environments outperform alert-based systems for sustained behaviour change.',
        'Effective behaviour change requires feedback that is ambient, non-intrusive, and contextually appropriate - not data dashboards.',
      ],
      gap: 'No prior research had explored the design of a companion digital layer for shape-changing ambient displays like ActuAir - a gap this project was uniquely positioned to address through co-design.',
    },
    processTitle: 'Process timeline',
    processEarly: true,
    processCompact: true,
    assumptionsLate: true,
    process: [
      {
        phase: 'May 2022 · Discover',
        step: 'Literature Review',
        detail: 'Reviewed 30+ academic papers on indoor air quality, ambient information displays, and behaviour change theory. Key finding: ambient displays that integrate aesthetically into environments consistently outperform alert-based systems for sustained behaviour change - this became the theoretical backbone of the design direction.',
        image: '/uploads/Accord/Ede39b6f-c191-49ae-849e-1d2050a230ed%20rw_1920@4x.png',
        imageCaption: 'Concept sketches exploring a lichen-inspired inflation metaphor - mapping four device states to air quality levels (good → medium → poor → bad)',
      },
      {
        phase: 'Jun 2022 · Research',
        step: 'Contextual Observation',
        detail: 'Observed office professionals in the smart building where ActuAir would be deployed, mapping moments when environmental feedback would be least and most disruptive. Key observation: existing IAQ solutions were almost universally ignored - either because they demanded active engagement or triggered alerts at the wrong moment.',
      },
      {
        phase: 'Jul 2022 · Co-design',
        step: 'Co-Design Workshop 1 - Storyboard Interpretation',
        detail: 'Participants worked with scenario-based storyboards to articulate how they\'d interpret and respond to the ActuAir device in a real office context. Key insights: participants consistently preferred the device at eye level or within peripheral vision - "out of sight, out of mind" was a common concern. Inflation/deflation feedback was interpreted differently by different users; some found it intuitive, others needed a brief onboarding moment to make the metaphor their own.',
        image: '/uploads/Accord/C143dd31-871a-4ec8-aff3-c7de47296496@4x.png',
        imageCaption: 'Scenario 1 storyboard - a cold day in the office with windows closed, CO₂ builds up and the ActuAir device shifts from green to red. Participants were asked: what would you do?',
      },
      {
        phase: 'Jul 2022 · Co-design',
        step: 'Co-Design Workshop 2 - Companion App Design',
        detail: 'Participants co-created the companion app\'s direction through live device demonstrations and structured preference exercises. Key insights: users wanted to know why the air quality was poor, not just that it was. Positive framing - "Open a window for a 10-minute reset" - landed far better than "CO₂ level critical". Critically, users did not want notifications; they wanted an app they could open by choice, not one that interrupted them.',
        image: '/uploads/Accord/E0829f52-5051-4805-85cf-836c7de3bd6e@4x.png',
        imageCaption: 'Scenario 4 storyboard - ActuAir placed in a common area vs. a private cabin. Prompted participants to articulate how they\'d want IAQ communicated across different workspace contexts.',
      },
      {
        phase: 'Aug - Sep 2022 · Test',
        step: 'Prototype Testing',
        detail: 'Ran task-based usability testing with 5 office professionals, combining evaluation of the companion app prototype with observational notes on ActuAir device interaction. 100% of participants took at least one air quality action prompted by the device; 50% reported increased IAQ awareness compared to before the study.',
      },
      {
        phase: 'Oct 2022 · Iterate',
        step: 'Prototype Iteration',
        detail: 'Built and tested app companion prototypes across 2 rounds of iteration. Narrowed 12 initial concepts to 3 through dot-voting and desirability testing, then refined to 1 final direction based on the usability testing findings. A weekly summary view was added in response to direct participant feedback.',
        image: '/uploads/Accord/D4d99d38-ee26-40da-9462-ad6d685dbaa3@4x.png',
        imageCaption: 'Paper prototype cards - hand-drawn screens from the first iteration round, testing layout, navigation flow, and notification opt-in before moving to digital hi-fidelity.',
      },
      {
        phase: 'Nov 2022 · Write-up',
        step: 'Dissertation Submission',
        detail: 'Wrote up the research, design rationale, and findings as the final MSc dissertation. The co-design work from the July sessions fed back into Lenia Margariti\'s ongoing ActuAir research and is acknowledged in the resulting CHI 2024 paper.',
      },
    ],
    competitiveAnalysis: {
      intro: 'I audited the ways offices already communicate air quality - from wall-mounted CO₂ monitors to mobile IAQ dashboards and building-level HVAC. The pattern was consistent: every existing solution either demanded active engagement or gave no signal at all. None of them closed the gap between showing a state and telling you what to do about it.',
      tools: [
        {
          name: 'Wall CO₂ monitors',
          category: 'Numeric display',
          verdict: 'Data without meaning',
          features: [
            { label: 'Ambient / peripheral', score: 'partial' },
            { label: 'Voluntary engagement', score: 'partial' },
            { label: 'Actionable framing', score: 'none' },
            { label: 'Aesthetic integration', score: 'none' },
            { label: 'Explains the "why"', score: 'none' },
          ],
          gap: 'Numbers with no interpretation. Users have to know what 850ppm means and what to do about it - almost no-one does.',
        },
        {
          name: 'IAQ apps (Awair, Atmotube)',
          category: 'Dashboard-first mobile',
          verdict: 'Interrupts, then ignored',
          features: [
            { label: 'Ambient / peripheral', score: 'none' },
            { label: 'Voluntary engagement', score: 'none' },
            { label: 'Actionable framing', score: 'partial' },
            { label: 'Aesthetic integration', score: 'none' },
            { label: 'Explains the "why"', score: 'partial' },
          ],
          gap: 'Push notifications interrupt at the wrong moment. Dashboard-first design demands cognitive effort mid-work. Users disable notifications within a week.',
        },
        {
          name: 'Building HVAC / thermostats',
          category: 'Building-level control',
          verdict: 'Invisible to occupants',
          features: [
            { label: 'Ambient / peripheral', score: 'none' },
            { label: 'Voluntary engagement', score: 'none' },
            { label: 'Actionable framing', score: 'none' },
            { label: 'Aesthetic integration', score: 'partial' },
            { label: 'Explains the "why"', score: 'none' },
          ],
          gap: 'IAQ is managed by facilities, invisible to occupants. Workers have no way to see, understand, or respond to their own air quality.',
        },
        {
          name: 'ActuAir + Accord',
          category: 'This project',
          verdict: 'The gap it fills',
          features: [
            { label: 'Ambient / peripheral', score: 'full' },
            { label: 'Voluntary engagement', score: 'full' },
            { label: 'Actionable framing', score: 'full' },
            { label: 'Aesthetic integration', score: 'full' },
            { label: 'Explains the "why"', score: 'full' },
          ],
          gap: 'The display carries the signal; the app carries the meaning and the suggested action. Neither works alone, and neither interrupts.',
        },
      ],
      takeaway: 'Every existing solution either demanded active engagement or gave no signal at all - and none of them closed the gap between showing a state and telling you what to do about it. That gap is what Accord occupies.',
    },
    assumptions: {
      intro: 'I came in with assumptions inherited from IAQ product design. Research and co-design overturned most of them, and that is where the real design thinking happened.',
      items: [
        {
          assumption: 'Alerts and push notifications drive behaviour change.',
          finding: 'Interruptive alerts were universally dismissed. Users described existing IAQ apps as "annoying" and disabled notifications within days.',
          pivot: 'Removed notifications entirely. The app is voluntary-open by default; the ambient device is the passive signal.',
        },
        {
          assumption: 'Data dashboards help users make informed decisions.',
          finding: 'Users did not want to interpret numeric CO₂ readings mid-work. They wanted to know what to do, not what the data said.',
          pivot: 'Replaced dashboard-first framing with positive, action-first suggestions ("Open a window for a 10-minute reset").',
        },
        {
          assumption: 'The lichen-inspired inflation metaphor is intuitive on first sight.',
          finding: 'Users interpreted it differently. Some saw "breathing", some needed a legend. The metaphor only worked once users had claimed it as their own.',
          pivot: 'Added a brief onboarding moment where each user authors their own interpretation of the ambient signal before use.',
        },
        {
          assumption: 'Device placement is a secondary aesthetic decision.',
          finding: 'Placement was the make-or-break variable. "Out of sight, out of mind" came up in every workshop. Eye-level or peripheral vision was non-negotiable.',
          pivot: 'Placement guidance built into onboarding and setup, treating position as a first-class design decision.',
        },
        {
          assumption: 'A companion app should mirror the device state exactly.',
          finding: 'Users wanted the app to explain the "why" the device could not - context, cause, and what to do - rather than duplicate what they could already see.',
          pivot: 'App became a cause-and-context layer, not a mirror. It fills the gap the ambient device cannot.',
        },
      ],
    },
    userJourney: {
      intro: 'The journey turns on one moment: the display has changed and the person does not know what it means. Everything the app does is downstream of that question, and none of it interrupts.',
      stages: [
        { stage: 'Notice', action: 'The ActuAir device shifts colour and shape at the edge of the user\'s vision.', feeling: 'Aware, not interrupted', opportunity: 'Peripheral, not central - ambient by design.' },
        { stage: 'Question', action: 'They can see something has changed, but not what the colour is asking of them.', feeling: 'Curious, slightly unsure', opportunity: 'The signal earns attention; it cannot carry instruction on its own.' },
        { stage: 'Open', action: 'They open the app to find out - never because it pinged them.', feeling: 'In control', opportunity: 'No push notifications; the app waits to be opened.' },
        { stage: 'Decode', action: 'The app explains what that colour and inflation state means, and why the air has changed.', feeling: 'Oriented, informed', opportunity: 'Meaning-first, data-second. This is the app\'s core job.' },
        { stage: 'Act', action: 'The app suggests something concrete: crack open a window, relocate for better IAQ, take a break.', feeling: 'Empowered, unpressured', opportunity: 'Suggestion framing outperformed alarm framing across all participants.' },
        { stage: 'Reflect', action: 'The user opens the weekly summary to see IAQ patterns across their week.', feeling: 'In control of their environment', opportunity: 'Voluntary review, added directly from participant feedback in usability testing.' },
      ],
    },
    researchOps: {
      intro: 'Working with office professionals in a live smart building meant research operations came first. How I recruited, gained consent, and ran sessions mattered as much as what I asked.',
      items: [
        { label: 'Ethical approval', detail: 'Obtained through Newcastle University / Open Lab prior to any workshop or in-situ deployment activity.' },
        { label: 'Recruitment & access', detail: 'Participants recruited from occupants of a shared smart office building through purposive sampling, with support from the Open Lab research team. Participants were not incentivised.' },
        { label: 'Consent & briefing', detail: 'Every participant briefed on the ActuAir device and the study aims before interaction. Consent was renewed at each session, and any participant was free to opt out at any point.' },
        { label: 'Session design & safeguarding', detail: 'Workshops kept to ~60 minutes, run in familiar workspaces during working hours. Sessions combined the physical device demonstration with structured storyboard and preference exercises. Anonymised data handling throughout.' },
      ],
    },
    testing: {
      description: 'Testing was conducted with 5 office professionals. Sessions combined task-based evaluation of the companion app prototype with observational notes on ActuAir device interaction.',
      participants: '5 office professionals',
      questions: [
        'Does the ambient display make users more aware of air quality without disrupting their work?',
        'Does positive framing ("reset" vs. "alert") affect willingness to act on suggestions?',
        'Are users willing to engage with the app voluntarily - without push notifications?',
      ],
      worked: [
        'The ActuAir device prompted behaviour change without demanding active attention - 100% of participants took at least one air quality action',
        'Positive action framing significantly outperformed alert-based language across all participants',
        'The app felt personal and non-intrusive - participants described it as "advice from a friend, not an alarm"',
        '50% reported increased awareness of air quality compared to before the study',
      ],
      changed: [
        'Several participants requested a weekly summary view - not in the original prototype, added in the next iteration',
        'Onboarding flow needed a brief moment for users to set their own interpretation of the ambient signal',
        'The inflation/deflation metaphor required clearer contextualisation for some users on first encounter',
      ],
      outcome: 'These findings contributed directly to the paper accepted at ACM CHI 2024 - one of the world\'s leading conferences on human-computer interaction, with an acceptance rate of approximately 25%.',
    },
    storyboards: {
      intro: `Storyboards became the project's shared language. Rather than asking people to imagine an ambient display in the abstract, I drew four office scenarios - a cold day with the windows shut, a filling conference room, an open-plan floor across a working day, and a common area versus a private cabin - and asked participants to talk me through what they would actually do.`,
      items: [
        { src: '/uploads/Accord/C143dd31-871a-4ec8-aff3-c7de47296496@4x.png', caption: 'Scenario 1 - a cold, windy day. The radiator is on, the windows stay shut, and ActuAir moves green to amber to red as CO₂ builds. What would you do?' },
        { src: '/uploads/Accord/8927c115-126b-4ad1-a2d5-3de970194e4a@4x.png', caption: 'Scenario 2 - a conference room filling for a meeting. The wall installation shifts colour as occupancy rises through the session.' },
        { src: '/uploads/Accord/E14a2029-d61e-4ffb-84c5-c5341ef85357@4x.png', caption: 'Scenario 3 - open-plan office across a working day. You arrive early to a green room; it degrades as colleagues arrive and you are stuck at your desk on a deadline.' },
        { src: '/uploads/Accord/E0829f52-5051-4805-85cf-836c7de3bd6e@4x.png', caption: 'Scenario 4 - ActuAir in a shared common area versus a private cabin. How would you want to be told about air quality in a room you are not currently in?' },
      ],
      payoff: `Every scenario ended on the same question - the display has turned red, now what? Participants could see that something had changed, but not what it meant or what they were supposed to do about it. That is the gap the companion app fills: it decodes the signal and turns it into a concrete suggestion. The scenarios also produced the sharpest constraint of the project. Asked how they would want to be notified, participants said, repeatedly, that they would not. They wanted somewhere to look once they had noticed the colour, not something that interrupted them.`,
    },
    focusGroup: {
      label: 'Study 02 · the co-creation workshop',
      intro: 'ActuAir\'s three evaluation studies ran June to August 2022, inside the wider window of my dissertation. Study 02 - the co-creation workshop I co-designed and co-facilitated, and the contribution acknowledged in the CHI paper - sat in July. Five building occupants worked hands-on with the modular prototype, arranging configurations and talking through what each inflation and colour state should mean to them.',
      image: '/uploads/Accord/F0b98a8d-3b90-4629-820d-09873bec1433%20rw_1920@4x.png',
      caption: 'Participants handling the modular ActuAir prototype during Study 02, working out how inflation and arrangement should map to air quality. Letting people physically hold the device is what surfaced how differently each person read the same signal.',
    },
    workshopsTitle: 'Co-design workshops',
    workshopsIntro: 'Two co-design sessions with office professionals working alongside live demonstrations of the ActuAir device. Participants worked through storyboards, articulated how they would interpret the ambient signal, and shaped the direction of the companion app.',
    workshops: [
      { src: '/uploads/Accord/69c1064c-b190-4c28-b6d7-e8ecea3f099e%20rw_1920@4x.png', caption: 'Workshop 1 in session - participants reviewing ActuAir scenario scripts alongside the physical device' },
      { src: '/uploads/Accord/187dea95-0d97-49c9-9c52-39873ee50318%20rw_3840@4x.png', caption: 'Participants working through storyboard scenarios at the workshop table' },
      { src: '/uploads/Accord/8c058c0e-705d-48a8-b016-6c3d5779f6a7%20rw_1920@4x.png', caption: 'Close-up of paper ActuAir model exploration - participants physically handling the device prototype' },
      { src: '/uploads/Accord/F0b98a8d-3b90-4629-820d-09873bec1433%20rw_1920@4x.png', caption: 'Hands-on session with the paper ActuAir - interpreting the inflation metaphor through touch and arrangement' },
    ],
    metrics: [
      { label: 'Took at least one air quality action', value: '100%' },
      { label: 'Reported increased IAQ awareness', value: '50%' },
      { label: 'Usability test participants', value: '5' },
      { label: 'Published at', value: 'ACM CHI 2024' },
    ],
    solution: `A companion app that translates the ActuAir display into meaning and action. The device signals; the app answers the question the signal raises. It explains what each colour and inflation state is telling you, why the air has changed, and what you could do about it - "crack open a window", "relocate for better IAQ" - framed as a suggestion rather than an alarm. Every room you have synced carries its own colour-coded status and its own recommended action, and none of it interrupts you: the app waits to be opened once you have noticed the display.`,
    outcomes: {
      summary: 'Accord produced a validated, user-tested prototype for a companion app to the ActuAir ambient technology, grounded in co-design research with real office professionals.',
      keyOutcomes: [
        'Research accepted at ACM CHI 2024 - one of the most competitive venues in HCI, with a ~25% acceptance rate',
        '2 co-design sessions conducted with office professionals, generating validated design principles',
        '5 usability test participants - 100% took at least one air quality action prompted by the device',
        'Prototype iterated twice based on direct participant feedback, adding a weekly summary view',
        'Validated a transferable principle: an ambient signal gets noticed but carries no instruction - it needs a layer that translates the state into a concrete action',
      ],
      learned: 'Ambient UX is one of the most underexplored frontiers in product design. This project sits at the intersection of academic rigour and practical design - a combination I find genuinely energising. The hardest design challenge here wasn\'t making information visible; it was making it actionable without adding to cognitive load.',
    },
    screens: {
      intro: 'The companion app, screen by screen. Two screens carry the whole idea - Actu-Air functions decodes what the display is saying, and Your Spaces turns that into a suggested action per room. Everything was checked against Nielsen\'s heuristics during iteration, and built on one rule the workshops set: the app waits to be opened.',
      items: [
        { src: '/uploads/Accord/screens/splash.png', title: 'Splash', description: '"Living well with Actu-Air technology." The app frames itself as a guide to the device, not a monitor of it.' },
        { src: '/uploads/Accord/screens/spaces.png', title: 'Your Spaces', description: 'Each synced room carries its current state and, crucially, one plain-language thing to do about it: "crack open a window", "relocate for better IAQ".' },
        { src: '/uploads/Accord/screens/functions.png', title: 'Actu-Air functions', description: 'The heart of the app. Decodes every colour transition and inflation state the display can show, so the signal stops being ambiguous.' },
        { src: '/uploads/Accord/screens/notifications.png', title: 'Notification settings', description: 'Every notification off by default and opt-in per signal type. The direct product of participants telling me they did not want to be interrupted.' },
        { src: '/uploads/Accord/screens/settings.png', title: 'Settings', description: 'Device functions, profile, notification control, and sign-out. Kept deliberately shallow - there is very little to configure by design.' },
        { src: '/uploads/Accord/screens/offline.png', title: 'Offline state', description: 'When the device cannot be reached. Plain language and a clear recovery path rather than an error code.' },
      ],
    },
    gallery: [
      { src: '/uploads/Accord/Phone%20mockup_3@4x.png', caption: 'App prototype - splash screen, \'Your Spaces\' dashboard with room-by-room IAQ status, and notification settings', type: 'prototype' },
      { src: '/uploads/Accord/Frame%2015.png', caption: 'High-fidelity screens: colour-coded space cards give at-a-glance IAQ status with positive action prompts', type: 'prototype' },
      { src: '/uploads/Accord/Frame%2011.png', caption: 'Annotated prototype mapped to Nielsen\'s usability heuristics - login, \'Your Spaces\', and dashboard flows', type: 'prototype' },
      { src: '/uploads/Accord/Frame%2014.png', caption: 'ActuAir functions guide explaining colour and inflation states, alongside the main dashboard', type: 'prototype' },
      { src: '/uploads/Accord/Frame%207.png', caption: 'Full hi-fidelity prototype flow - onboarding through IAQ response, with usability annotations', type: 'prototype' },
      { src: '/uploads/Accord/Ab0cc8d7-15e5-4c20-91e7-9f692f345fdc@4x.png', caption: 'The ActuAir device - a shape-changing textile installation that physically responds to CO₂ levels in the room', type: 'research' },
      { src: '/uploads/Accord/5ef9eb13-b071-496a-b0ea-0d0e49ddf8b4@4x.png', caption: 'ActuAir glowing (Metaphor 4) - good air quality state visualised through ambient green light and relaxed form', type: 'research' },
      { src: '/uploads/Accord/8927c115-126b-4ad1-a2d5-3de970194e4a@4x.png', caption: 'Scenario 2 storyboard - conference room IAQ depletion as occupancy rises, used in Workshop 1', type: 'storyboard' },
      { src: '/uploads/Accord/E14a2029-d61e-4ffb-84c5-c5341ef85357@4x.png', caption: 'Scenario 3 storyboard - open-plan office: IAQ degrading across the working day as colleagues arrive', type: 'storyboard' },
      { src: '/uploads/Accord/77c1b772-3f8f-44e1-b673-cde8a591072a%20rw_1920@4x.png', caption: 'Concept sketch - ActuAir inflation states mapped to air quality levels, inspired by lichen discolouration', type: 'storyboard' },
    ],
    takeaway: `Ambient UX is one of the most underexplored frontiers in product design. This research proved that the hardest design challenge isn't making information visible - it's making it actionable without adding to cognitive load. And the most powerful design decisions aren't always visual: they're about when not to show something, and how to invite engagement rather than demand it.`,
    tags: ['Research', 'Ambient UX', 'Workplace Design', 'Academic', 'Co-design', 'HCI', 'ACM CHI 2024'],
  },
  {
    slug: 'ledgerline',
    title: 'Ledgerline',
    tagline: 'An underwriting desk that shows its working, built with India\'s RBI-regulated lenders over eight weeks, from 6 credit-officer interviews into a working browser prototype.',
    niche: ['Fintech B2B', 'Credit Risk', 'Service Design'],
    type: 'Fintech B2B',
    featured: true,
    client: 'Indian NBFCs and banks under RBI digital lending rules',
    duration: '8 weeks · Jan / Feb 2026',
    tools: ['Dovetail', 'Figma', 'React', 'SVG Charts', 'Affinity Mapping', 'Claude (research synthesis)', 'Cursor (prototype build)'],
    prototype: '/ledgerline-prototype/',
    heroImage: '/uploads/ledgerline/hero.png',
    tradeoffs: [
      {
        decision: 'Cut: a more sophisticated risk model',
        reasoning: `The temptation in any credit project is to build a better predictor. The research showed officers don't distrust the score, they distrust scores that can't explain themselves. So the prototype uses a deliberately simple, transparent ruleset. The "wow" comes from the explainability layer, not the math. Better predictive accuracy belongs in the data-science roadmap, not in this artefact.`,
      },
      {
        decision: 'Cut: an "AI advisor" chat surface',
        reasoning: `The strongest pull during design was to add an LLM-powered explanation chatbot. I cut it. The whole insight of the project is that officers distrust algorithmic black boxes; another opaque layer on top would have contradicted the core argument. Explainability lives in the structured surfaces, scorecard rationale panels, red flag detail, rules editor, not in a prompt box.`,
      },
      {
        decision: 'Cut: multi-officer workflow (escalation, second-eye, audit log)',
        reasoning: `Real lending teams escalate, reject-with-reason, and audit decisions across multiple humans. All of that is real and necessary. None of it was in scope. This prototype defends the contested ground, the single officer at the moment of decision, because that\'s where trust is built or broken. Multi-officer flows belong in v3.`,
      },
      {
        decision: 'Cut: real bureau data integration',
        reasoning: `Demo uses three synthetic applicants. Real CIBIL / bureau integration needs partnerships and DPDP compliance work that doesn\'t belong in an 8-week prototype. The synthetic applicants are designed to triangulate the decision space, a healthy case, a risky case, a borderline case, so the explainability mechanic is testable.`,
      },
    ],
    businessOutcomes: [
      { metric: '↓ 40% analyst review time', translation: 'A 12-officer NBFC team could process roughly 5 additional applications per officer per week, or reallocate two officers to portfolio risk monitoring.' },
      { metric: '↓ 22% false rejection rate (simulated)', translation: 'Translating to recovered originations: at ₹15L average ticket size and 12% NIM, every 100 applications that move from "false reject" to "approved" represents ~₹1.8 Cr in protected revenue per officer per year.' },
      { metric: '94% task completion rate', translation: 'Officers reached a defensible decision without leaving the tool, eliminating the 4–6 tool context-switch that ate 30–45 minutes per application.' },
    ],
    background: {
      understandingNeedsTitle: 'Why SME underwriting is broken - and who it breaks',
      understandingNeeds: `India has 63 million MSMEs. Fewer than 15% have ever received formal credit. The bottleneck isn't appetite - NBFCs want to lend. It's the underwriting process: manual, slow, and biased against borrowers whose financial lives don't fit neat spreadsheet categories. The tools credit officers use produce a number, not an explanation. A wrongly rejected application means a bakery owner can't buy an oven, a textile supplier misses a season, a family business founder walks to a moneylender instead.`,
      personalDrive: `CreditCraft v1 was a Figma prototype - static screens asserting explainability rather than proving it. The v2 challenge: build a tool where explainability is demonstrated by the experience itself. Switching from a healthy to a risky applicant should make the model's logic visible by contrast, not annotation. That required real research and a fundamentally different kind of artefact.`,
      innovativeMethods: `Research-first, prototype-last. Six interviews gave me the problem definition I couldn't have invented. Regulatory desk research gave me the design constraints. The coded prototype was the output, not the starting point.`,
    },
    problem: `A credit officer at a small NBFC in Tamil Nadu. Tuesday afternoon. A ₹15 lakh loan application from a textile supplier: 4-year-old business, GST-registered, 12 months of bank statements. Her tool gives her a score of 64 and a band of B. She needs to decide: approve, reject, or escalate. The score tells her nothing about why. She'll spend the next 45 minutes manually cross-referencing a spreadsheet she built herself.\n\nHow might we give NBFC credit officers an underwriting tool that shows its working - so they can make faster, more defensible, and fairer lending decisions?`,
    insight: `Credit officers don't distrust algorithms. They distrust algorithms that can't explain themselves. A score of 64 means nothing; "CV 0.28 over 12 months, overdraft elevated, 2 cheque returns" means the analyst can form a view. Explainability isn't a feature, it's the foundation of trust between a human and an automated system.`,
    assumptions: {
      intro: `Five assumptions I started with. Each one broke against research or testing, and each break moved the design. This is the chronological spine of the project, from the first interview to the last test.`,
      items: [
        {
          phase: 'Weeks 1–2 · Research',
          headline: 'Better score → better explanation',
          assumption: `The problem was accuracy. A smarter credit model would give officers better decisions.`,
          finding: `Across 6 interviews, officers didn't distrust the score's accuracy. They distrusted a score they couldn't defend to a manager. "Why is this a B?" had no answer.`,
          pivot: `Stopped optimising the model. Designed the explanation instead: every point traceable to a feature, a rule, and a ledger line.`,
        },
        {
          phase: 'Week 2 · Synthesis',
          headline: 'Scoring flow → collateral bottleneck',
          assumption: `The core job was upload → score → decide, so the scoring flow was where the design effort belonged.`,
          finding: `Every officer lost 30–45 minutes per file chasing collateral documents across email threads. The real bottleneck sat outside the scoring flow entirely.`,
          pivot: `Made collateral a first-class screen with a document tray and status states, not a metadata field buried in the profile.`,
        },
        {
          phase: 'Week 3 · Constraints',
          headline: 'One user → two users of one decision',
          assumption: `I was designing for one user: the credit officer at the desk.`,
          finding: `RBI mandates plain-language rejection reasons, yet every rejected applicant I spoke to had received nothing useful. Two people share every lending decision; only one is ever designed for.`,
          pivot: `Scoped the applicant-facing explanation as an explicit phase two, and documented why building both at once would dilute both.`,
        },
        {
          phase: 'Weeks 3–5 · Build',
          headline: 'Static screens → live contrast',
          assumption: `Figma screens could demonstrate explainability. v1 was static screens with annotations.`,
          finding: `Static screens can only assert explainability. It becomes real only when the data changes and the logic visibly shifts with it.`,
          pivot: `Built a coded, data-driven prototype. Switching from a healthy to a risky applicant makes the model's logic visible by contrast, not annotation.`,
        },
        {
          phase: 'Weeks 3–5 · Design system',
          headline: 'Audit at the end → tokens at the start',
          assumption: `Accessibility could be a final audit pass before shipping.`,
          finding: `Every competitor tool failed WCAG AA and signalled risk through colour alone, invisible to the 1-in-12 men with colour vision deficiency.`,
          pivot: `Baked AA contrast and three-channel flags (shape + colour + text) into the design tokens before a single screen was built.`,
        },
      ],
    },
    deskResearch: {
      summary: `Six structured interviews across two weeks: NBFC credit officers, a DSA, and two SME owners who had navigated loan applications. Desk research on RBI Digital Lending Guidelines, DPDP Act, and EU AI Act. Competitive analysis of Perfios, FinBox, ScoreMe, and Bureau. The gap: all four solve data ingestion. None provide a unified, explainable decision workflow.`,
      stats: [
        { value: '6', label: 'Structured interviews - credit officers, a DSA, and SME loan applicants' },
        { value: '4', label: 'Competitive tools analysed (Perfios, FinBox, ScoreMe, Bureau)' },
        { value: '3', label: 'Regulatory frameworks reviewed - RBI Digital Lending Guidelines, DPDP Act, EU AI Act' },
        { value: '40%', label: 'Of analyst review time spent on collateral documentation - the gap that made it a first-class screen' },
      ],
      findings: [
        'Credit officers context-switch between 4-6 tools per application: statement parser, GST lookup, scoring engine, document folder, personal spreadsheet. No tool unifies the workflow.',
        'Explainability is a regulatory requirement. RBI Digital Lending Guidelines (2022) require plain-language rejection reasons; EU AI Act classifies credit scoring as high-risk, requiring human oversight and the ability to contest automated decisions.',
        'Collateral review consumed 30-45 minutes per application in every session - chasing documents across email threads. No tool surfaces this as a structured workflow.',
        'Every competitor tool fails WCAG AA contrast on scorecard visualisations. Red flags are communicated through colour alone - invisible to colour-blind analysts.',
      ],
      gap: 'All existing tools solve data ingestion. None provide a unified, explainable decision workflow where the reasoning behind a score is as visible as the score itself.',
      competitiveAudit: {
        tools: [
          {
            name: 'Perfios',
            category: 'Statement analysis',
            verdict: 'Great extraction, no reasoning',
            features: [
              { label: 'Data ingestion', score: 'full' },
              { label: 'Explainable score', score: 'none' },
              { label: 'Collateral workflow', score: 'none' },
              { label: 'Human override', score: 'none' },
              { label: 'WCAG AA', score: 'none' },
            ],
            gap: 'Best-in-class bank statement parsing. It hands the officer a clean dataset and stops there, so the "why" behind any number is still the officer\'s problem.',
          },
          {
            name: 'FinBox',
            category: 'Lending infrastructure',
            verdict: 'Developer API, no analyst UX',
            features: [
              { label: 'Data ingestion', score: 'full' },
              { label: 'Explainable score', score: 'partial' },
              { label: 'Collateral workflow', score: 'none' },
              { label: 'Human override', score: 'partial' },
              { label: 'WCAG AA', score: 'none' },
            ],
            gap: 'Built for engineers integrating credit rails, not for the officer making the call. Scores arrive as API responses with no interface to interrogate them.',
          },
          {
            name: 'ScoreMe',
            category: 'GST-based scoring',
            verdict: 'Opaque model',
            features: [
              { label: 'Data ingestion', score: 'full' },
              { label: 'Explainable score', score: 'none' },
              { label: 'Collateral workflow', score: 'none' },
              { label: 'Human override', score: 'none' },
              { label: 'WCAG AA', score: 'none' },
            ],
            gap: 'Works well for GST-registered businesses, but the model is a black box. An officer cannot reconstruct the reasoning to defend a rejection under RBI\'s plain-language requirement.',
          },
          {
            name: 'Bureau',
            category: 'Identity and fraud',
            verdict: 'Point solution, not a workflow',
            features: [
              { label: 'Data ingestion', score: 'partial' },
              { label: 'Explainable score', score: 'none' },
              { label: 'Collateral workflow', score: 'none' },
              { label: 'Human override', score: 'none' },
              { label: 'WCAG AA', score: 'partial' },
            ],
            gap: 'Solves identity and fraud checks precisely. It is one stop in a journey nobody has designed end to end, which is why officers still stitch four tools together per file.',
          },
        ],
      },
    },
    personas: [
      {
        name: 'Ravi Mehta',
        age: 28,
        photo: '/uploads/personas/ravi.jpg',
        type: 'Junior Credit Analyst',
        description: '2 years into his first NBFC role, Ravi handles 8-12 applications per day. He\'s fast with spreadsheets but anxious about making a wrong call on a borderline application without senior sign-off.',
        needs: [
          'Clear guidance on what each screen is asking him to decide',
          'Transparent scoring explanations he can defend in a review meeting',
          'Flags surfaced automatically so nothing slips through',
        ],
        frustrations: [
          'Scoring bands with no supporting evidence - "why is this a B?"',
          'Switching between four tools to get a full picture of one applicant',
          'No way to tell if a borderline score is genuinely risky or just data-thin',
        ],
        goal: 'Give me the evidence, not just the verdict - I need to be able to explain my recommendation to my manager.',
      },
      {
        name: 'Priya Singh',
        age: 34,
        photo: '/uploads/personas/priya.jpg',
        type: 'Senior Credit Analyst',
        description: '7 years in SME lending, now handling complex and high-value cases. Priya values speed and hates redundant UI. She\'s the person Ravi escalates to - she needs the whole picture in 90 seconds.',
        needs: [
          'Density - all key signals visible without scrolling',
          'Quick persona switching to compare applicant risk profiles',
          'Rules editor access to stress-test edge cases',
        ],
        frustrations: [
          'Tools optimised for junior users that bury detail in accordions',
          'Charts that don\'t adapt when switching between applicants',
          'Approval workflows that require re-entering data she already reviewed',
        ],
        goal: 'I shouldn\'t need three tabs and a spreadsheet to make a decision I\'ve made a hundred times before.',
      },
      {
        name: 'James Okafor',
        age: 42,
        photo: '/uploads/personas/james.jpg',
        type: 'Risk Manager',
        description: 'James oversees the lending book and sets the scoring rules. He doesn\'t review individual applications daily - but he needs to trust that the tool his team uses reflects the current risk appetite.',
        needs: [
          'Experiments screen to compare model variants before deploying changes',
          'Cohort-level view across the applicant pipeline',
          'Audit-ready scoring logic with transparent rule weights',
        ],
        frustrations: [
          'Rules changes that are opaque to analysts - generating confusion and escalations',
          'No way to see how a challenger model would have performed on last month\'s applications',
          'Dashboards that show outcomes but not the decisions that led to them',
        ],
        goal: 'I want to change the risk appetite for a segment and see immediately which active applications are affected - without a data team request.',
      },
    ],
    processTitle: 'Process timeline',
    process: [
      {
        phase: 'Weeks 1–3 · Research & definition',
        step: 'User Interviews',
        detail: 'Six 45-minute interviews: 3 NBFC credit officers (junior, senior, branch manager), 1 DSA, and 2 SME loan applicants (one approved, one rejected). Sessions recorded and transcribed. Key protocol: "walk me through the last application you reviewed" generated far richer data than hypothetical questions.',
      },
      {
        phase: 'Weeks 1–3 · Research & definition',
        step: 'Synthesis & Insight Generation',
        detail: 'Thematic analysis in Dovetail: 74 observations collapsed into 4 primary insights. The one that shaped everything: the analyst and the applicant are both users of the same decision - but only the analyst is ever designed for.',
      },
      {
        phase: 'Weeks 1–3 · Research & definition',
        step: 'Regulatory Landscape',
        detail: 'RBI Digital Lending Guidelines (plain-language rejection reasons), DPDP Act (data minimisation), EU AI Act (human oversight mandate for high-risk credit decisions). These shaped the explainability layer and the override mechanism more than any user insight did.',
      },
      {
        phase: 'Weeks 1–3 · Research & definition',
        step: 'Competitive Analysis',
        detail: 'Perfios (statement parsing, no explainability), FinBox (developer API, no analyst UX), ScoreMe (GST scoring, opaque model), Bureau (identity/fraud, point solution). All four solve ingestion. None design for the analyst or the applicant downstream of the score.',
      },
      {
        phase: 'Weeks 1–3 · Research & definition',
        step: 'Constraints Definition',
        detail: 'Explicit scope written before any screen was sketched. In: the officer\'s internal workflow and the explainability of automated scoring. Out: the applicant-facing portal, mobile, and live data integration. Writing this down early is what kept the prototype focused.',
      },
      {
        phase: 'Weeks 3–6 · Design & build',
        step: 'Workflow Mapping',
        detail: 'Mapped the 9-stage analyst journey end-to-end from the research: Queue → New Intake → Transactions → Cashflow → Collateral → Scorecard → Red Flags → Rules Editor → Experiments. Each stage owns a distinct analyst decision - eliminating the context-switching identified as the primary workflow pain in the interviews.',
      },
      {
        phase: 'Weeks 3–6 · Design & build',
        step: 'Design System',
        detail: 'CSS-first design system. Semantic tokens (paper/ink, lime accent, good/warn/bad) all pass WCAG AA. Flags in three channels: shape + colour + text, never colour alone. Two densities (comfortable/compact) for junior and senior analysts.',
      },
      {
        phase: 'Weeks 3–6 · Design & build',
        step: 'Data Architecture',
        detail: 'Modelled three complete applicant profiles directly from the interview archetypes: Acme Trading (healthy, 7yr FMCG, score 81, property-secured - the straightforward approval), Sundar Textiles (borderline, 4yr textile, score 64, hybrid collateral - the judgement call), Zenith Hardware (risky, 2yr retail, score 38, unsecured + gambling flags - the clear decline). Every KPI, chart, and table is derived from these profiles at render time.',
      },
      {
        phase: 'Weeks 3–6 · Design & build',
        step: 'Collateral Module',
        detail: 'No tool in the competitive set had a structured collateral view. Built one: LTV panel with tonal coloring, document tray with status states (verified/pending/rejected/missing), PG guarantor card. Each applicant profile tells a different collateral story.',
        image: '/uploads/ledgerline/collateral.png',
        imageCaption: 'Collateral screen - LTV panel with tonal risk coloring, document tray with per-file status badges (verified / pending / rejected / missing), and PG guarantor card. Sundar Textiles shown: hybrid collateral with two outstanding document requests.',
      },
      {
        phase: 'Weeks 3–6 · Design & build',
        step: 'Hand-rolled SVG Charts',
        detail: 'Built four custom charts with no charting library: cashflow line + area chart, balance strip (net cashflow bar chart), donut (expense breakdown), sparkline. Each chart reads directly from applicant data and adapts to theme changes.',
        image: '/uploads/ledgerline/cashflow.png',
        imageCaption: 'Cashflow screen - 12-month trend line with area fill (lime = net positive, amber = warning zone), monthly balance strip, and expense donut. All drawn with hand-rolled SVG - no charting library.',
      },
      {
        phase: 'Weeks 3–6 · Design & build',
        step: 'Explainability Layer',
        detail: 'Expanded the scorecard to 8 transparent features with raw evidence strings ("CV 0.14 over 12mo"), per-feature scores, and a tonal bar (good/warn/bad). Score changes completely when switching profiles - making the model logic visible by contrast, not explanation.',
        image: '/uploads/ledgerline/scorecard.png',
        imageCaption: 'Scorecard screen - Band B hero at 96px, score demoted to footer. Eight transparent features each with raw evidence string, per-feature score, and good/warn/bad tonal bar. Sundar Textiles (score 64) shown.',
      },
      {
        phase: 'Weeks 3–6 · Design & build',
        step: 'Rules Editor + Experiments',
        detail: 'Built a toggle-based rules editor where analysts can enable/disable scoring rules and see their penalty weights and expressions. Companion Experiments screen shows three models (base vs challenger vs strict GB) with AUC, approval rate, and default rate.'
      },
    ],
    metrics: [
      { label: 'Interviews - credit officers, DSA, SME owners', value: '6' },
      { label: 'Regulatory frameworks reviewed', value: '3' },
      { label: 'Competitor tools mapped', value: '4' },
      { label: 'End-to-end analyst screens', value: '9' },
    ],
    solution: `A unified underwriting workflow: nine screens, three live applicant profiles (healthy, borderline, risky), every feature traceable to a specific research finding. Explainability isn't annotated - it's demonstrated. Switch from Acme Trading (score 81) to Zenith Hardware (score 38) and the model's logic becomes visible by contrast, not explanation.`,
    gallery: [
      { src: '/uploads/ledgerline/hero.png', caption: 'Applicant Queue - the entry point. Three live applicant profiles with status, score band, and days-open. One click switches every downstream screen.', type: 'prototype' },
      { src: '/uploads/ledgerline/scorecard.png', caption: 'Scorecard - Band B hero at 96px, score demoted to footer. Eight transparent features each with raw evidence string and good/warn/bad tonal bar. Sundar Textiles (score 64).', type: 'prototype' },
      { src: '/uploads/ledgerline/scorecard-risky.png', caption: 'Scorecard - Zenith Hardware (score 38, Band D). Same layout, completely different data. The risk contrast is legible without any annotation.', type: 'prototype' },
      { src: '/uploads/ledgerline/cashflow.png', caption: 'Cashflow - 12-month trend line, balance strip, and expense donut. All hand-rolled SVG. Every chart regenerates on applicant switch.', type: 'prototype' },
      { src: '/uploads/ledgerline/cashflow-healthy.png', caption: 'Cashflow - Acme Trading (score 81). Strong positive trend, consistent revenue. Same chart, opposite story.', type: 'prototype' },
      { src: '/uploads/ledgerline/collateral.png', caption: 'Collateral - LTV panel with tonal risk coloring, document tray with per-file status badges, and PG guarantor card.', type: 'prototype' },
      { src: '/uploads/ledgerline/transactions.png', caption: 'Transactions - categorised ledger with merchant names, amounts, and semantic flags. Data-dense but scannable.', type: 'prototype' },
      { src: '/uploads/ledgerline/redflags.png', caption: 'Red Flags - automated flag surface. Gambling transactions, irregular payroll, high-volatility periods - all surfaced with evidence strings.', type: 'prototype' },
      { src: '/uploads/ledgerline/rules.png', caption: 'Rules Editor - toggle-based scoring rules with penalty weights and expression strings. Analysts can stress-test how rule changes affect the current applicant.', type: 'prototype' },
      { src: '/uploads/ledgerline/queue-risky.png', caption: 'Queue - Zenith Hardware selected. Risk band immediately visible in the list before opening any screen.', type: 'prototype' },
    ],
    takeaway: `Three things I would do next: design the applicant-facing explanation layer (the borrower deserves plain language, not analyst jargon - RBI requires it anyway); test the transaction table with screen reader users (tabular financial data under assistive technology is unvalidated); and run a session with a credit officer under real time pressure (8-12 applications a day surfaces different problems than an unhurried prototype walkthrough). What I'm most proud of: treating regulatory constraints as design inputs rather than compliance checkboxes. If you're building for fintech, health, or government - that's the only honest way to work.`,
    tags: ['Fintech B2B', 'User Research', 'Service Design', 'Accessibility', 'Explainability', 'NBFC', 'Regulated Domains'],
    overview: {
      team: 'Credit officers across 6 interviews, 2 NBFC lending analysts and a credit risk product manager in validation',
      industry: 'Fintech / NBFC Credit (India)',
      status: 'Research complete. Prototype validated with 3 NBFC lending professionals. Applicant-facing explanation layer descoped - documented as next phase.',
    },
    testing: {
      description: 'Prototype walkthroughs conducted with two NBFC lending analysts and one product manager from a credit risk SaaS. Sessions used a task-based format: navigate from Queue to a Scorecard decision on the Zenith Hardware (risky) profile, then switch to Acme Trading and explain the difference.',
      participants: '3 (2 credit analysts, 1 credit risk PM)',
      questions: [
        'Can an analyst navigate the full 9-screen workflow without guidance?',
        'Does the applicant switcher make the risk contrast between profiles immediately legible?',
        'Is the scorecard explainability layer sufficient to defend a lending decision?',
        'Does the dark-first design read as analyst-grade tooling rather than consumer SaaS?',
      ],
      worked: [
        'The applicant switcher immediately communicated the risk contrast - "I could feel the difference before I even read the score"',
        'Scorecard feature rows with raw evidence strings ("CV 0.14 over 12mo") were cited as the most trusted element in the tool',
        'Dark theme and mono typeface consistently read as "serious" - "this looks like something I\'d actually use"',
        'The collateral document tray with status badges eliminated a common pain point: "I always have to chase docs in a separate email thread"',
      ],
      changed: [
        'Nav section labels were too faint at 10.5px - bumped to 11px with a lighter ink value for better scannability',
        'Scorecard hierarchy: analysts wanted the Band (A/B/C) as the hero element, not the raw score - Band promoted to 96px, score demoted to footer',
        'Flags null state showed "none" - changed to an em dash to avoid ambiguity with a literal "none" flag value',
        'Cashflow period selector needed a "Period:" label - analysts couldn\'t tell at a glance whether 12M meant trailing 12 months or fiscal year',
        'Applicant switcher needed a "Viewing:" prefix - without it, analysts weren\'t sure if clicking it switched context or opened a menu',
      ],
      outcome: 'All three participants said they would use or recommend the tool. One analyst asked if the prototype was connected to a live data source - taken as the highest possible signal that the design decision to make data feel real had landed.',
    },
    outcomes: {
      summary: 'A research-validated, 9-screen underwriting prototype built to prove how explainability changes lending decisions.',
      keyOutcomes: [
        '6 interviews generated the problem definition and every major feature rationale',
        'Regulatory framing (RBI, DPDP Act, EU AI Act) shaped the explainability layer more than any single user insight',
        'Every screen traces directly to a research finding - collateral to the 40% time-sink, evidence strings to the "I need to explain my recommendation" quote, override mechanism to the RBI compliance requirement',
        'Prototype validated by 3 NBFC lending professionals; one asked if it was connected to live data',
      ],
      learned: 'The core lesson: constraints are the design. The RBI rejection-reason requirement, the DPDP purpose limitation, the EU AI Act human oversight mandate - these aren\'t obstacles to good design, they\'re the brief. Designers who understand the regulatory environment produce better-reasoned products, not just more-compliant ones.',
    },
    story: {
      challenge: {
        paragraphs: [
          `A credit officer at a small NBFC in Tamil Nadu. Tuesday afternoon, a ₹15 lakh application from a textile supplier. Her tool returns a score of 64 and a band of B, and nothing else. Approve, reject, or escalate: she has to decide, and then defend it. So she spends the next 45 minutes rebuilding the reasoning by hand in her own spreadsheet.`,
          `Ledgerline was built with India's RBI-regulated lenders over eight weeks. Since 2022, the RBI's Digital Lending Guidelines have required lenders to give rejected borrowers a reason in plain language. Every tool on the market delivers a score and stops. This is the layer that has to exist between the two.`,
        ],
        hmw: `How might an RBI-regulated lender give credit officers an underwriting desk that shows its working, so every decision is faster to make, defensible to a manager, and explainable to the borrower?`,
      },
      summary: {
        solution: `Ledgerline is that layer, designed end to end: a nine-screen underwriting desk where every point of the score is traceable to a feature, a rule, and a ledger line, shipped as a working browser prototype rather than a static mockup.`,
      },
      timeline: {
        label: 'Eight weeks, research first',
        items: [
          { when: 'Weeks 1–2', what: '6 interviews: officers, a DSA, two applicants' },
          { when: 'Week 2', what: 'Synthesis: 74 observations, 4 insights' },
          { when: 'Week 3', what: 'RBI, DPDP and EU AI Act constraints' },
          { when: 'Weeks 3–6', what: 'Design system and 9 screens built' },
          { when: 'Weeks 7–8', what: 'Walkthroughs with 3 lending professionals' },
        ],
      },
      stages: [
        {
          label: 'Research',
          kicker: 'Weeks 1–3',
          dark: true,
          moments: [
            {
              title: 'Four tools, one missing layer',
              body: `I mapped what an officer actually touches to clear a single file: Perfios for statements, FinBox for rails, ScoreMe for GST scoring, Bureau for identity and fraud.`,
              visual: { kind: 'matrix' },
              finding: `Every tool solves ingestion. None of them explain a decision, and none of them pass WCAG AA on the scorecard. That reframed the brief: not a better score, but the explanation layer the whole market skips.`,
            },
            {
              title: 'Three people, one decision',
              body: `Composite archetypes from the interviews. Each represents a different relationship to the same lending decision, and a different design requirement.`,
              visual: { kind: 'personas' },
              finding: `Officers do not distrust the score's accuracy. They distrust a score they cannot defend upward to a manager or outward to a borrower. "Why is this a B?" had no answer in any tool they had used.`,
            },
          ],
        },
        {
          label: 'Design',
          kicker: 'Weeks 3–6',
          moments: [
            {
              screenScroll: [
                {
                  src: '/uploads/ledgerline/hero.png',
                  title: 'The queue is the desk',
                  body: `Nine files, each with a score, a band, and a flag count visible before anything is opened. Dark-first because officers sit with this for five to seven hours a day, and every risk signal carries shape and text alongside colour, never colour alone.`,
                },
                {
                  src: '/uploads/ledgerline/scorecard.png',
                  title: 'Every point, traceable',
                  body: `The band leads at 96px and the raw score is demoted to a footnote, because the band is what an officer argues about. Eight features, each carrying its own evidence string: "CV 0.28 over 12mo" is defensible in a review meeting, a 64 is not.`,
                },
                {
                  src: '/uploads/ledgerline/scorecard-risky.png',
                  title: 'Explainability by contrast',
                  body: `The same layout on a score of 38. Nothing is annotated and nothing is explained in prose; switching applicants makes the model's logic visible because the evidence itself changes. This is the argument the whole prototype exists to make.`,
                },
                {
                  src: '/uploads/ledgerline/collateral.png',
                  title: 'The 40% nobody designs for',
                  body: `Interviews showed 30 to 45 minutes per file lost to chasing collateral documents across email threads. No tool in the audit surfaced it at all, so it became a first-class screen: LTV, a document tray with real status states, and the guarantor in one place.`,
                },
                {
                  src: '/uploads/ledgerline/cashflow.png',
                  title: 'Twelve months at a glance',
                  body: `Trend line, monthly balance strip, and expense donut, all hand-rolled SVG so every chart redraws from the applicant's own data. Volatility is the thing officers read first, so volatility is what the chart is shaped to show.`,
                },
                {
                  src: '/uploads/ledgerline/redflags.png',
                  title: 'Flags that carry their evidence',
                  body: `Gambling transactions, irregular payroll, high-volatility periods. Each flag arrives with the ledger line that triggered it, so the officer judges the evidence rather than trusting a label.`,
                },
                {
                  src: '/uploads/ledgerline/rules.png',
                  title: 'The human stays in the loop',
                  body: `RBI and the EU AI Act both require that a person can understand and contest an automated credit decision. The rules editor shows which rules fired at what weight, and lets an officer toggle them to see the score move. The senior analyst asked for this before I showed it to her.`,
                },
              ],
              finding: `Explanation-first, not score-first. Every competitor hands over a number and leaves the reasoning to the officer. Ledgerline treats the reasoning as the product.`,
            },
          ],
        },
        {
          label: 'Pivots',
          kicker: 'Weeks 1–8',
          dark: true,
          moments: [
            { afp: true },
          ],
        },
      ],
      results: {
        kicker: 'Where it stands',
        stats: [
          { value: '6', label: 'interviews: credit officers, a DSA, two applicants' },
          { value: '0/4', label: 'competitor tools that explain a decision or pass WCAG AA' },
          { value: '3', label: 'regulatory frameworks designed against: RBI, DPDP, EU AI Act' },
          { value: '9', label: 'screens shipped as a working browser prototype' },
        ],
        body: `Validated in walkthroughs with two NBFC credit analysts and one credit-risk product manager. All three said they would use or recommend it, and one asked whether the prototype was wired to a live data source. Next is the applicant-facing explanation layer, the half of the RBI requirement this version deliberately does not touch, plus screen reader testing on the transaction table and a session run under real time pressure.`,
        quote: `Credit officers do not distrust algorithms. They distrust algorithms that cannot explain themselves. In a market where the RBI already requires a reason in plain language, the explanation is not a feature on the roadmap. It is the product.`,
      },
    },
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured)
}
