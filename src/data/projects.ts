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

export type Project = {
  slug: string
  title: string
  tagline: string
  niche: string[]
  type: 'Social Impact' | 'Fintech B2B' | 'Fintech Consumer' | 'Edtech' | 'Healthcare' | 'Government' | 'Academic'
  featured: boolean
  comingSoon?: boolean
  client: string
  role: string
  duration?: string
  tools: string[]
  prototype?: string
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
  overview?: { team: string; industry: string; status?: string; recognition?: string }
  designDecisions?: { decision: string; rationale: string }[]
  background?: { understandingNeedsTitle?: string; understandingNeeds: string; personalDrive: string; innovativeMethods: string }
  personas?: Persona[]
  personaRoles?: { role: string; who: string; definition: string }[]
  assumptions?: {
    intro?: string
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
}

export const projects: Project[] = [
  {
    slug: 'mhclg-grants',
    title: 'Grants Services for 200+ UK Local Authorities',
    tagline: 'Research that evidenced WCAG 2.1 AA compliance across 200+ Local Authorities, and gave the delivery team an audit trail GDS assessors could trust, embedded into sprint, not bolted on at the end.',
    niche: ['Government', 'GDS', 'Accessibility', 'User Research'],
    type: 'Government',
    featured: true,
    client: 'Ministry of Housing, Communities & Local Government (MHCLG)',
    role: 'Sole User Researcher on workstream',
    tools: ['Semi-structured interviews', 'Usability testing', 'Affinity mapping', 'Dovetail', 'GDS Service Standard mapping'],
    overview: {
      team: 'Product manager, delivery manager, 2 service designers, interaction designer, content designer, 2 developers, I was the sole researcher on the workstream',
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
    tagline: 'A research-informed personal finance OS connecting budget, goals, and auto-investing. Three visual directions, fully designed from marketing site to onboarding to dashboard.',
    niche: ['Fintech Consumer', 'Product design', 'Visual design'],
    type: 'Fintech Consumer',
    featured: true,
    client: 'Self-initiated concept',
    role: 'UX Researcher, Product Designer & Prototype Engineer',
    duration: '8 weeks · 2026',
    tools: ['Figma', 'FigJam', 'CSS design tokens', 'Claude (research drafting)', 'Cursor (prototype build)'],
    prototype: '/kaizen/Kaizen.html',
    wip: 'Mobile app version in progress',
    businessOutcomes: [
      { metric: '3 visual systems · onboarding → dashboard', translation: 'Reduced concept-to-pressure-test cycle from weeks to days, three full visual directions, each carried through onboarding to the dashboard, before committing to one design language. The work most fintech teams ship as a Figma mockup, shipped as a working browser product.' },
      { metric: '0 / 4 competitors connect budget, goals, and investing', translation: 'The competitive audit defines the product opportunity in one number: a clear adjacent-category gap, not a feature gap. Validated as a real white-space, not just a designer\'s hunch.' },
    ],
    aiProcess: {
      summary: `I treated AI as a research multiplier, not a designer. It accelerated the parts of the work where speed beats craft (synthesis, scaffolding, first drafts) so I could spend more hours on the parts where craft beats speed (visual system, interaction states, the actual product decisions).`,
      used: [
        'Drafting the competitive audit matrix, Claude generated the initial feature comparison structure across YNAB, Wealthsimple, Betterment and Monzo; I rewrote the verdicts after auditing each tool myself.',
        'Persona scaffolding, three persona drafts in 20 minutes, then validated against four reference users I already knew. Two personas survived intact; one was rewritten end-to-end.',
        'Transaction categorisation labels, generated 200 candidate labels for the auto-categorisation feature, kept 47.',
        'First-draft microcopy for the marketing site, then rewritten in my voice.',
      ],
      kept: [
        'Every visual decision, the Quiet Premium colour system, type pairing, three visual directions tested.',
        'All actual user flows, screen layouts, and interaction states.',
        'The product hypothesis, that consumer fintech is fragmented and a unified ledger is the gap.',
      ],
      rejected: [
        'AI\'s first attempt at the goal-tracking copy read like a motivational poster. Rewrote everything.',
        'A suggested "AI advisor chat" surface, would have undermined the "quiet, confident" product principle. Cut.',
      ],
    },
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
        phase: 'Research & Direction',
        step: 'Competitive audit',
        detail: 'Mapped onboarding and primary flows across Wealthsimple, Betterment, YNAB, and Monzo Investments. Documented data architecture, visual language, and primary navigation for each. Identified the shared failure pattern: every tool optimises one job and is blind to the other two.',
      },
      {
        phase: 'Research & Direction',
        step: 'Persona development',
        detail: 'Built three composite archetypes from the audit findings and target demographic research: Freya (passive investor, 27), Marcus (data-hungry saver, 31), and Aisha (paralysed high-earner, 34). Each represents a distinct failure mode in existing products, and a distinct design requirement.',
      },
      {
        phase: 'Research & Direction',
        step: 'Visual direction exploration',
        detail: 'Explored three visual directions, Editorial (warm bone + ember red), Quiet Premium (onyx + periwinkle, surgical sans-serif), and Confident Warm (terracotta + sage). Built all three as live, toggleable CSS themes sharing one token contract, so the comparison is interactive rather than static.',
      },
      {
        phase: 'Design system',
        step: 'Design language & token system',
        detail: 'Defined a three-theme design language covering type scale, spacing, radii, motion, and full surface palettes. Each theme shares the same structural decisions, swapping only the surface palette. One design system, three distinct visual personalities.',
      },
      {
        phase: 'Design system',
        step: 'Component library',
        detail: 'Designed a full component set in Figma: wordmark (3 variants), money display, sparkline, donut chart, bar chart, area chart, progress bar, avatar, and a 20-icon set. Every component is theme-agnostic, consuming design tokens rather than hardcoded values.',
      },
      {
        phase: 'Product screens',
        step: 'Marketing site',
        detail: 'Designed a full marketing page addressing Aisha\'s trust requirement: editorial hero with product data artefact, feature grid, pricing panel, security section, testimonials, and FAQ. Every layout decision prioritises visual credibility before financial commitment.',
      },
      {
        phase: 'Product screens',
        step: 'Core product, 6 screens',
        detail: 'Designed Dashboard (net worth hero, area chart, spending cards, AI insight, for Marcus\'s "tell me my number" need), Budget (donut + category bars, trend chart, for Freya\'s picture-in-one-place need), Goals, Invest, Transactions, and Settings. Every screen traces to a specific persona need from the audit phase.',
      },
      {
        phase: 'Product screens',
        step: '5-step onboarding flow',
        detail: 'Goal-first onboarding: Welcome → Connect bank → Pick goals → Portfolio selection → Review. Starts with "What are you saving for?", a question everyone can answer before any commitment is required. Directly counters the audit finding that competitors start with account creation or risk profile questionnaires, which users cited as the moment they abandoned onboarding.',
      },
      {
        phase: 'Iteration',
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
      team: 'Solo designer',
      industry: 'Consumer fintech',
      status: 'Design complete across all screens. Usability testing with target cohort is the defined next step.',
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
    role: 'Product Design Intern',
    duration: 'Feb · Apr 2023',
    tools: ['Paper prototypes', 'Miro', 'Figma'],
    problem: `Digital tools for people with dementia (PwD) are almost universally built around reminiscence - helping users remember the past. This neglects a critical insight: PwD retain more agency and quality of life when supported to engage with the present and future.\n\nHow might we design a digital tool that enhances quality of life for people with dementia - by focusing on present engagement and meaningful connection, rather than memory recall alone?`,
    insight: `The most meaningful moments for PwD were not recall-based - they were present-tense: creating something, sharing it with someone, and seeing a reaction. The app needed to facilitate making and connecting, not just remembering.`,
    processTitle: 'Process timeline',
    process: [
      { phase: 'Feb 2023 · Discover', step: 'Expert Focus Group', detail: 'Convened HCI and dementia care specialists from Northumbria and Newcastle Universities to establish the evidence base and identify gaps in existing digital tools.' },
      { phase: 'Feb 2023 · Discover', step: 'Ethnographic Observation', detail: 'Shadowed "Milk, Two Sugars" - a sensory theatre intervention by Woven Nest at a Newcastle care home - observing how PwD responded to sensory, creative, and social stimuli.' },
      { phase: 'Feb to Mar 2023 · Research', step: 'Competitive Analysis', detail: 'Reviewed TimeSlips and similar co-creative tools alongside existing dementia apps to understand which engagement mechanisms transferred well to digital formats, and which gaps none of them filled.' },
      { phase: 'Mar 2023 · Co-design', step: 'Co-design Workshops', detail: 'Ran participatory design sessions with PwD, caregivers, and care home staff using artefacts, storytelling prompts, and storyboard-based scenarios.' },
      { phase: 'Mar to Apr 2023 · Test', step: 'Prototype Testing', detail: 'Developed and tested paper prototypes with PwD and caregivers, measuring engagement duration, emotional response, and caregiver usability across 2 rounds.' },
      { phase: 'Apr 2023 · Iterate', step: 'Digital Iteration', detail: 'Refined the strongest concept into a digital prototype in Figma, incorporating feedback on navigation simplicity and visual hierarchy.' },
    ],
    metrics: [
      { label: 'Participants across focus groups, ethnography, co-design & testing', value: '50+' },
      { label: 'Research methods used', value: '5 (focus groups, ethnography, co-design, prototype testing)' },
      { label: 'Prototype test rounds', value: '2 with PwD and caregivers' },
      { label: 'Design principles established', value: '5 evidence-based principles adopted by Nebula Labs' },
    ],
    solution: `A digital companion app with daily creative prompts (sensory-rich activities designed for present-moment engagement), a shared memory space between PwD and a designated caregiver, a caregiver dashboard showing recent activity without surveillance framing, and full accessibility throughout (large text, high contrast, voice input).`,
    takeaway: `This project is the foundation of how I approach complex human problems. Dementia care taught me that design assumptions are dangerous - the "obvious" solution (reminiscence) was the wrong one. Deep research, co-design, and willingness to challenge the brief led to a validated alpha that Teesside Council have earmarked for continued development.`,
    tags: ['Healthcare', 'Social Impact', 'Co-design', 'Accessibility', 'Research'],
    overview: {
      team: 'Solo researcher & designer',
      industry: 'Healthcare / Social Care',
      status: 'Discovery to Alpha complete. Development paused pending council funding.',
    },
    background: {
      understandingNeeds: `Dementia affects over 900,000 people in the UK, with numbers expected to reach 1.6 million by 2040. People living with dementia (PwD) experience progressive cognitive decline that affects memory, communication, and daily orientation. Existing digital tools in this space overwhelmingly focus on reminiscence - prompting memory of the past - but research suggests that forward-orientation (thinking about what comes next) can meaningfully reduce disorientation and anxiety. There was a clear gap: almost no tools were designed to support future thinking for PwD.`,
      personalDrive: `My interest in this space grew from exploring how creative and sensory interventions - such as immersive theatre and group storytelling - were already being used in care homes to positive effect. I shadowed workshops by Woven Nest Theatre at a local care home and conducted a focus group with HCI and dementia specialists at Northumbria and Newcastle Universities. A recurring theme emerged: practitioners wanted a tool that could extend creative engagement beyond in-person sessions and into everyday routines - something lightweight, non-clinical, and genuinely enjoyable to use.`,
      innovativeMethods: `Rather than defaulting to screen-heavy interfaces, I looked at how tactile and creative formats could translate digitally. The 8-fold zine - a physical storytelling format - became a central inspiration. Its non-linear, low-pressure structure aligned well with the cognitive patterns of PwD: open-ended prompts rather than correctness, sensory engagement rather than instruction-following. I used this format to inform the app's interaction model.`,
    },
    deskResearch: {
      summary: `Before any design work, I reviewed clinical literature, existing dementia technology, and participatory design research to understand what was known - and critically, what was missing. The evidence strongly challenged the industry default of reminiscence-based tools.`,
      stats: [
        { value: '900K+', label: 'People living with dementia in the UK today' },
        { value: '1.6M', label: 'Projected UK cases by 2040' },
        { value: '~0', label: 'Existing tools designed for forward-orientation (present/future thinking)' },
        { value: '67%', label: 'Of care home residents report low engagement between structured activities' },
      ],
      findings: [
        'Existing digital tools (Tovertafel, TimeSlips, Reminisce) are almost universally built around memory recall - prompting users to remember the past.',
        'Clinical evidence suggests forward-orientation (engaging with the present and near future) can reduce disorientation and anxiety in PwD - but no commercial product addressed this.',
        'Creative and sensory engagement - particularly through participatory arts - showed strong evidence for improving quality of life and communication in PwD.',
        'Accessibility research flagged consistent failures in existing tools: small touch targets, complex navigation, clinical visual language, and absence of caregiver co-use modes.',
        'The 8-fold zine - a physical, non-linear storytelling format used in art therapy - offered a structural model directly applicable to digital interaction design: open-ended prompts, no correct answers, low cognitive load, and a format PwD could engage with at their own pace.',
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
      intro: 'I audited the tools care homes already use, alongside the co-creative methods the sector trusts. The pattern was consistent: strong on remembering the past or bound to in-person sessions, but silent on present-moment creation, family connection, and portable accessibility all at once.',
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
          gap: 'A proven group storytelling method that inspired the approach, but it is facilitator-led and in-person, not a standalone tool residents can pick up day to day.',
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
          gap: 'Excellent present-moment sensory engagement, but tied to expensive fixed hardware in one room. Nothing personal, portable, or connected to family.',
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
          gap: 'Digital and accessible, but built entirely around recalling the past, the exact model the research challenged. No creation, no connection.',
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
          gap: 'Combines present-moment creative engagement, family connection, and accessibility-first design in one portable tool, the space no existing product occupied.',
        },
      ],
      takeaway: 'Every tool did one thing well. None combined present-moment creativity, family connection, and accessibility in something a resident could actually keep and use day to day. That white space became the brief.',
    },
    assumptions: {
      intro: 'I came in with assumptions inherited from the category. Research and testing overturned most of them, and that is where the real design thinking happened.',
      items: [
        {
          assumption: 'A dementia tool should help people remember the past. Reminiscence is the established, "safe" model.',
          finding: 'The most meaningful moments in the care home were present-tense: making something and sharing it. Recall-based prompts often created pressure and disengagement.',
          pivot: 'Reframed the entire brief around present-moment creation and connection, not memory recall.',
        },
        {
          assumption: 'Prompts phrased as questions ("What does this remind you of?") would feel natural and conversational.',
          finding: 'Questions read as tests. Participants felt they had to produce a correct answer, which raised anxiety.',
          pivot: 'Rewrote every prompt as an open invitation ("Tell me about...") with no right answer.',
        },
        {
          assumption: 'People with dementia would use the app independently, one screen at a time.',
          finding: 'Independent navigation worked for some but excluded others, especially at more advanced stages, and a carer was usually present anyway.',
          pivot: 'Introduced a dual-mode model: independent use and a guided carer mode.',
        },
        {
          assumption: 'Standard mobile touch targets and a linear, step-by-step flow would be fine.',
          finding: 'Targets were too small for arthritic and reduced-motor-control hands, and step-by-step flows created a fear of getting it wrong.',
          pivot: 'Set a 48px minimum target and adopted the non-linear, zine-inspired layout so there is no wrong order.',
        },
        {
          assumption: 'Text-based prompts would communicate the activities clearly.',
          finding: 'Open-ended image prompts were understood instantly and needed no explanation; text added cognitive load.',
          pivot: 'Made the interaction image-first, with text as support rather than the primary instruction.',
        },
      ],
    },
    userJourney: {
      intro: 'The target experience runs from a carer introducing the app to a printed keepsake the resident keeps. Every stage was designed to lower pressure and end in a shared reaction.',
      stages: [
        { stage: 'Introduce', action: 'A carer or family member opens the app with the resident and starts a session in one tap.', feeling: 'Curious, low pressure', opportunity: 'No setup, no training, no login friction.' },
        { stage: 'Prompt', action: 'The app offers an open-ended, sensory image prompt from the zine-inspired set.', feeling: 'Invited, not tested', opportunity: 'Invitation wording and imagery replace question-and-answer.' },
        { stage: 'Create', action: 'The resident responds in their own way, by talking, choosing an image, or recording a short story.', feeling: 'Absorbed, expressive', opportunity: 'Image-first, voice-friendly, 48px targets, no wrong answer.' },
        { stage: 'Share', action: 'The response is saved to a shared archive visible to family and the care team.', feeling: 'Connected', opportunity: 'Connection without a surveillance framing.' },
        { stage: 'React', action: 'Family members see the new entry and respond, in person or remotely.', feeling: 'Seen, valued', opportunity: 'Closes the loop the insight identified: create, share, see a reaction.' },
        { stage: 'Keep', action: 'The carer prints the session summary and folds it into an 8-fold zine the resident keeps.', feeling: 'Proud', opportunity: 'A tangible keepsake: their own creative story, made by hand.' },
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
        { label: 'Consent as ongoing', detail: 'Consent was treated as continuous, not a one-off form. Gained through the care home as gatekeeper and supported by carers, with participants free to stop at any point and any non-verbal sign of discomfort treated as a cue to pause.' },
        { label: 'Recruitment & access', detail: 'Participants were reached through the care home and Woven Nest Theatre using purposive sampling. Carers acted as trusted facilitators and stayed present throughout each session.' },
        { label: 'Safeguarding & session design', detail: 'Sessions ran in familiar settings, kept to 20 to 30 minutes, with no time pressure and no right answers, to protect against fatigue and anxiety.' },
        { label: 'Data handling', detail: 'Participant images were anonymised and faces blurred before any external use, and all materials were stored securely.' },
      ],
    },
    testing: {
      description: 'We tested two paper prototype variants with 10 participants, including 5 people with dementia (supported by carers) and 5 care staff. Sessions lasted approximately 20-30 minutes each.',
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
        src: '/uploads/me-and-you/research-session.jpg',
        caption: 'Co-design and ideation session - feature mapping with care staff and HCI researchers using post-it affinity clustering. Participants included carers, a theatre facilitator, and two academic dementia specialists.',
        type: 'research',
      },
      {
        src: '/uploads/me-and-you/storyboard.png',
        caption: 'Scenario storyboard A - facilitator-led session in a care home: introducing the app, prompting residents, and sharing outputs with family',
        type: 'storyboard',
      },
      {
        src: '/uploads/me-and-you/storyboard-2.png',
        caption: 'Scenario storyboard B - family member initiated use: family member browsing the archive, engaging with PwD and connecting with each other in person',
        type: 'storyboard',
      },
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
    role: 'UX Designer & Researcher (end-to-end)',
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
    role: 'UX Designer & Researcher (end-to-end)',
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
    role: 'Lead UX Designer',
    duration: 'Aug · Sep 2023',
    tools: ['Figma', 'Wireframing', 'High-fidelity prototyping'],
    heroImage: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Overview%20mockup.png',
    overview: {
      team: '1 UX Designer (lead), cross-functional collaboration with content, dev, and TfL stakeholders',
      industry: 'Public Sector / Transport',
    },
    problem: `Care leavers are among the most socioeconomically vulnerable young people in the UK. After leaving the care system at 18, many face significant barriers to employment, education, and independence. In cities where public transport is the only affordable way to get around, access to a travel discount is not a perk: it is a practical lifeline.\n\nTransport for London's Care Leaver Photocard offers 50% off all TfL travel for care leavers aged 18-25. But the existing application journey had a problem: it was unclear, inaccessible in places, and created unnecessary friction for a group that already faces multiple barriers in navigating official processes.\n\nHow might we design an application experience that a care leaver can navigate independently, without a support worker, and without feeling stigmatised?`,
    insight: `The barriers were systemic, not motivational. Language, document requirements, and mobile accessibility were the three failure points that needed redesigning.`,
    process: [
      {
        step: 'Stakeholder Interviews',
        detail: 'Interviewed TfL programme managers and Novacroft product leads to understand existing process gaps and compliance constraints. Identified 7 friction points in the existing journey: document upload timing, formal language, missing error states, mobile accessibility failures, and address verification as an exclusion barrier.',
      },
      {
        step: 'Journey Mapping & Audit',
        detail: 'Mapped the end-to-end application journey from the TfL photocard landing page through to payment confirmation, and audited each step against WCAG 2.1 AA. The flow diagram below shows the full redesigned journey including the "Contact your borough" alternative verification branch.',
        image: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/user-flow.png',
        imageCaption: 'User flow diagram: the complete redesigned application journey from review through to payment confirmation, with the alternative "Contact your borough" verification pathway branching off the main flow',
      },
      {
        step: 'Secondary Research',
        detail: 'Reviewed care leaver advocacy reports (Become, Action for Children) to understand the lived experience of the cohort. Examined comparable application journeys (student discount applications, benefit claim forms) to identify patterns that reduced friction for similar user groups.',
      },
      {
        step: 'Content Design',
        detail: 'Rewrote all application copy in plain English, replacing bureaucratic third-person language with direct, warm, first-person alternatives. The cardholder screen below shows the redesigned form: clean labels, clear layout, and a "Wrong details?" escape route for users whose pre-filled data is incorrect.',
        image: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Cardholder.png',
        imageCaption: 'Cardholder details screen: redesigned with plain language labels, clear field hierarchy, and a visible "Wrong details?" recovery link for users whose pre-filled information is incorrect',
      },
      {
        step: 'Information Architecture',
        detail: 'Redesigned the application flow to surface requirements upfront and handle edge cases gracefully. The "Contact your borough" screen below is the alternative verification pathway, designed for care leavers without a fixed address who would previously hit a silent dead end in the original flow.',
        image: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Contact%20your%20borough.png',
        imageCaption: '"Please contact your borough" screen: the alternative address verification pathway designed for care leavers in temporary or unstable housing, removing the invisible exclusion built into the original flow',
      },
      {
        step: 'Mobile-First Prototyping',
        detail: 'Built high-fidelity flows in Figma with 44px minimum touch targets throughout. Redesigned the step indicator with icons to improve scannability on small screens, replacing text-only labels with icon + label pairs that are easier to parse at a glance. Presented across two stakeholder iteration rounds.',
        image: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Icon%20suggestion.png',
        imageCaption: 'Redesigned step indicator: icon + label pairs replacing the original text-only progress bar, improving scannability on mobile and making the current step immediately identifiable',
      },
      {
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
        'The step indicator used text and position alone to communicate progress, with no icons or non-text cues. This breached WCAG 1.3.3 (Sensory Characteristics, Level A), which requires that instructions not rely solely on shape or position.',
        'Care leavers in unstable or temporary housing had no viable path through the address verification step. It was an invisible exclusion built into the original flow.',
        'Form input fields used generic text inputs throughout, with no fields configured to trigger the appropriate mobile keyboard type. On a smartphone, date fields displayed a full QWERTY keyboard instead of a numeric pad, and email fields offered no shortcut to the @ symbol. These small frictions compound into abandonment for users completing the form on mobile.',
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
    role: 'UX Designer (team participant)',
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
    role: 'UX Designer & Researcher (Master\'s Dissertation)',
    duration: '4 months · MSc Dissertation',
    tools: ['Figma', 'Miro', 'Paper Prototyping', 'Video Storyboards'],
    heroImage: '/uploads/Accord/Phone%20mockup_3@4x.png',
    overview: {
      team: 'Lenia Margariti (PhD Researcher, ActuAir technology)',
      industry: 'Workplace Wellbeing / HCI Research',
      recognition: 'Findings accepted at ACM CHI 2024 - one of the world\'s leading HCI conferences',
    },
    background: {
      understandingNeedsTitle: 'Understanding Indoor Air Quality Challenges',
      understandingNeeds: `Indoor air quality (IAQ) is a largely invisible problem. Research shows that CO₂ levels in poorly ventilated offices regularly exceed 1000ppm - a threshold associated with reduced cognitive performance, fatigue, and difficulty concentrating. Despite this, most office workers have no awareness of the air quality around them, and buildings rarely provide any feedback beyond a blinking thermostat.\n\nThe challenge is not just technical - it is behavioural. Even when people are given access to air quality data, they tend not to act on it. Meaningful behaviour change requires feedback that is ambient, non-intrusive, and contextually appropriate.`,
      personalDrive: `This project began with a question from my dissertation research: if ambient interactive technologies can communicate data without demanding attention, can they also change behaviour? I was particularly drawn to the work of Lenia Margariti and the ActuAir device - a shape-changing display that physically responds to CO₂ levels. The device offered a rare opportunity: a real-world ambient technology to design for and test with, rather than a hypothetical system. Prior research into digital nudging and ambient displays gave me confidence that subtle, contextual interventions could be more effective than dashboard-style alerts. The challenge was to design a companion digital layer that extended ActuAir's ambient feedback into actionable, personalised suggestions.`,
      innovativeMethods: `I used co-design workshops as the primary method - not just to validate ideas, but to involve office professionals as genuine co-creators of the solution. Participants worked with storyboards and live device demonstrations to articulate their preferences, concerns, and interpretations of the technology. This participatory approach was essential: ambient technology is deeply personal in how it is perceived, and assumptions about what feels 'unobtrusive' vary significantly between individuals.`,
    },
    problem: `Indoor air quality in office environments is frequently worse than outdoor air - contributing to fatigue, poor concentration, and long-term health risks. Yet it's invisible. Existing IAQ monitoring solutions either require users to actively check an app (ignored) or trigger disruptive alerts (also ignored).\n\nHow might we communicate indoor air quality data to office professionals in a way that prompts healthy behaviour without interrupting workflow?`,
    insight: `Workers didn't want more data - they wanted just-in-time cues that triggered a simple action (open a window, take a break) without requiring them to interpret numbers or context-switch from their work.`,
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
    process: [
      {
        phase: 'May 2022 · Discover',
        step: 'Literature Review',
        detail: 'Reviewed 30+ academic papers on indoor air quality, ambient information displays, and behaviour change theory. Key finding: ambient displays that integrate aesthetically into environments consistently outperform alert-based systems for sustained behaviour change - this became the theoretical backbone of the design direction.',
        image: '/uploads/Accord/Ede39b6f-c191-49ae-849e-1d2050a230ed%20rw_1920@4x.png',
        imageCaption: 'Concept sketches exploring a lichen-inspired inflation metaphor - mapping four device states to air quality levels (good → medium → poor → bad)',
      },
      {
        phase: 'May 2022 · Discover',
        step: 'Expert Focus Group',
        detail: 'Convened HCI and environmental health academics from Newcastle and Northumbria Universities to validate the research direction and identify gaps in existing ambient technology design research.',
      },
      {
        phase: 'Jun 2022 · Research',
        step: 'Contextual Observation',
        detail: 'Observed office professionals across 3 workplaces, mapping moments when environmental feedback would be least and most disruptive. Key observation: existing IAQ solutions were almost universally ignored - either because they demanded active engagement or triggered alerts at the wrong moment.',
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
    ],
    competitiveAnalysis: {
      intro: 'I audited the ways offices already communicate air quality - from wall-mounted CO₂ monitors to mobile IAQ dashboards and building-level HVAC. The pattern was consistent: every existing solution either demanded active engagement or gave no signal at all. There was no product that combined a passive ambient signal with on-demand context.',
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
          gap: 'Passive peripheral signal via the physical display, plus on-demand context via the companion app. Visible when noticed, quiet when not.',
        },
      ],
      takeaway: 'Every existing solution either demanded active engagement or gave no signal at all. The gap was a passive ambient signal paired with on-demand context - the two-layer model Accord occupies.',
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
      intro: 'The target experience runs from a passive peripheral cue to a voluntary action, ending in a weekly reflective view. Every stage was designed to lower cognitive load and keep engagement optional.',
      stages: [
        { stage: 'Notice', action: 'The ActuAir device shifts colour and shape at the edge of the user\'s vision.', feeling: 'Aware, not interrupted', opportunity: 'Peripheral, not central - ambient by design.' },
        { stage: 'Interpret', action: 'The user reads the shift against their own onboarded interpretation of the metaphor.', feeling: 'Confident, informed', opportunity: 'User-authored meaning replaces one-size-fits-all iconography.' },
        { stage: 'Open (optional)', action: 'The user chooses to open the companion app for more context.', feeling: 'Curious, in control', opportunity: 'No push notifications - engagement is always voluntary.' },
        { stage: 'Understand', action: 'The app explains why IAQ shifted (occupancy, ventilation, time of day).', feeling: 'Informed, oriented', opportunity: 'Cause-first, data-second framing.' },
        { stage: 'Act', action: 'A positive, action-first suggestion prompts the user to open a window or take a break.', feeling: 'Empowered, unpressured', opportunity: '"Reset" framing outperformed "alert" framing across all participants.' },
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
    workshopsTitle: 'Co-design workshops',
    workshopsIntro: 'Two co-design sessions with office professionals, run alongside live demonstrations of the ActuAir device. Participants worked through storyboards, articulated how they\'d interpret the ambient signal, and shaped the direction of the companion app.',
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
    solution: `A companion app designed to extend the ActuAir ambient display's feedback into personalised, actionable suggestions - built on the principle of voluntary engagement. The app explains why air quality is poor, frames responses positively, and surfaces information only when users choose to look, not through interruptions. Paired with the shape-changing device, it forms a two-layer ambient system: passive peripheral awareness via the physical display, and on-demand context via the digital companion.`,
    outcomes: {
      summary: 'Accord produced a validated, user-tested prototype for a companion app to the ActuAir ambient technology, grounded in co-design research with real office professionals.',
      keyOutcomes: [
        'Research accepted at ACM CHI 2024 - one of the most competitive venues in HCI, with a ~25% acceptance rate',
        '2 co-design sessions conducted with office professionals, generating validated design principles',
        '5 usability test participants - 100% took at least one air quality action prompted by the device',
        'Prototype iterated twice based on direct participant feedback, adding a weekly summary view',
        'Validated a transferable principle: ambient technology is most effective when users author their own interpretation of feedback signals',
      ],
      learned: 'Ambient UX is one of the most underexplored frontiers in product design. This project sits at the intersection of academic rigour and practical design - a combination I find genuinely energising. The hardest design challenge here wasn\'t making information visible; it was making it actionable without adding to cognitive load.',
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
    tagline: 'An 8-week research-to-prototype study in explainable credit infrastructure - grounded in 6 interviews with NBFC credit officers and SME owners, desk research on RBI digital lending guidelines, and a fully interactive tool built to prove how transparency changes lending decisions.',
    niche: ['Fintech B2B', 'Credit Risk', 'Service Design'],
    type: 'Fintech B2B',
    featured: true,
    client: 'Self-initiated (CreditCraft v2)',
    role: 'UX Researcher, Product Designer & Prototype Engineer',
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
      team: 'Solo - UX researcher, product designer, prototype engineer',
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
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured)
}
