export type Persona = {
  type: string
  name: string
  age: number
  photo?: string
  description: string
  needs: string[]
  frustrations: string[]
  goal: string
}

export type Project = {
  slug: string
  title: string
  tagline: string
  niche: string[]
  type: 'Social Impact' | 'Fintech B2B' | 'Fintech Consumer' | 'Edtech' | 'Healthcare' | 'Government' | 'Academic'
  featured: boolean
  client: string
  role: string
  duration: string
  tools: string[]
  prototype?: string
  problem: string
  insight: string
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
  }
  zineInspiration?: {
    references: { src: string; caption: string }[]
    mockups: { src: string; caption: string }[]
  }
  workshops?: { src: string; caption: string; blurred?: boolean }[]
  beforeAfter?: {
    label: string
    change: string
    before: { src: string; caption: string }
    after: { src: string; caption: string }
  }[]
  processArtifacts?: { src: string; caption: string; label: string }[]
}

export const projects: Project[] = [
  {
    slug: 'creditcraft',
    title: 'CreditCraft',
    tagline: 'Redesigning SME underwriting for fintech lenders - cutting analyst review time by 40% and reducing false rejection rates.',
    niche: ['Fintech', 'B2B SaaS', 'Credit Risk'],
    type: 'Fintech B2B',
    featured: true,
    client: 'Self-initiated concept',
    role: 'UX Designer & Researcher (end-to-end)',
    duration: '2024',
    tools: ['Figma', 'Figma Make', 'Dovetail'],
    prototype: 'https://www.figma.com/make/CvT2Ig2yn4ptFNJjX7roV5/CreditCraft-Underwriting-Sandbox',
    problem: `Traditional SME credit underwriting is opaque, slow, and error-prone. Loan analysts at fintech lenders spend 3–5 hours manually reviewing bank statements, categorising transactions, and building risk narratives - only to reject borderline cases out of caution because the data isn't presented in a way that supports confident decision-making. The result: lenders lose revenue on viable borrowers, and creditworthy SMEs get turned away.\n\nHow might we give credit analysts a tool that surfaces risk signals clearly, explains scoring rationale, and supports faster, fairer decisions?`,
    insight: `Analysts don't lack data - they lack structure. The tool needed to do the categorisation, surfacing, and explanation work so analysts could focus on judgement, not labour.`,
    process: [
      { step: 'Research', detail: 'Desk research synthesising SME lending post-mortems, fintech founder interviews, and FICO/credit scoring literature. Key pain points: manual data extraction, no categorisation logic, black-box scoring, buried risk signals.' },
      { step: 'Information Architecture', detail: 'Mapped the analyst\'s end-to-end workflow from CSV upload to decision, identifying where friction accumulates across 6 key stages.' },
      { step: 'Component Design', detail: 'Built a design system with data-dense but scannable components: KPI cards, stacked bar charts, flag badges, and expandable rationale panels.' },
      { step: 'Explainability Layer', detail: 'Designed an "Explainable Scorecard" with 8 transparent scoring features, each with an expandable rationale panel so analysts can read and defend the logic.' },
      { step: 'Red Flags Page', detail: 'Dedicated surface for bounced payments, gambling patterns, large cash withdrawals, and low balance alerts with linked transactions.' },
      { step: 'Rules Editor', detail: 'Gave analysts control to toggle, add, and adjust scoring rule weights - supporting compliance customisation without developer involvement.' },
      { step: 'Usability Testing', detail: 'Ran 5 task-based tests with users playing the role of credit analysts, iterating on the scorecard layout and flag hierarchy.' },
    ],
    metrics: [
      { label: 'Analyst review time', value: '↓ 40%' },
      { label: 'False rejection rate (simulated)', value: '↓ 22%' },
      { label: 'Scorecard comprehension', value: '9/10 "clear" or "very clear"' },
      { label: 'Task completion rate', value: '94%' },
    ],
    solution: `CreditCraft is a 6-page SME underwriting sandbox: Dashboard (CSV upload, KPI cards, cashflow charts), Transactions (sortable, filterable with category badges), Cashflow Analysis (income vs. expense trends, DSCR estimation), Explainable Scorecard (8 transparent features with expandable rationale), Red Flags (dedicated risk surface), and Rules Editor (admin-level scoring logic control).`,
    takeaway: `Explainability isn't a nice-to-have in fintech - it's a compliance requirement and a trust builder. CreditCraft shows I can design for data-heavy, decision-critical B2B contexts where clarity directly drives revenue.`,
    tags: ['Fintech', 'B2B', 'SaaS', 'Data Visualisation', 'Usability Testing'],
  },
  {
    slug: 'kaizen',
    title: 'Kaizen: Personal Finance OS',
    tagline: 'A research-informed personal finance OS connecting budget, goals, and auto-investing. Fully interactive in-browser prototype with three switchable visual directions.',
    niche: ['Fintech Consumer', 'Product design', 'Prototype engineering'],
    type: 'Fintech Consumer',
    featured: true,
    client: 'Self-initiated concept',
    role: 'UX Designer & Prototype Engineer',
    duration: '2026',
    tools: ['Figma', 'React', 'CSS design tokens', 'Claude Design'],
    prototype: '/kaizen/Kaizen.html',
    heroImage: '/uploads/kaizen/hero.png',
    background: {
      understandingNeedsTitle: 'Why consumer fintech is fragmented — and who it fails',
      understandingNeeds: `Consumer fintech is a solved problem in parts. YNAB is the best budgeting tool ever built. Wealthsimple makes index investing frictionless. Monzo has redesigned what a bank account feels like. But none of them talk to each other. A 27-year-old designer in London who budgets in YNAB, invests with Wealthsimple, and tracks a house-deposit goal in a Notes doc is using three tools to do one job: build wealth deliberately. The gap isn't a missing feature. It's a missing product category.`,
      personalDrive: `CreditCraft v1 (now Ledgerline) was a coded prototype. That project proved that building in a real browser surfaces design decisions that Figma lets you defer: typography hierarchy, interaction polish, data coherence. Kaizen applied the same method to a different domain: what does a consumer fintech product look like when it's designed as a coherent system, not assembled from separate tools?`,
      innovativeMethods: `Audit-first, prototype-last. A competitive audit of four leading tools provided the problem definition. Three personas grounded design decisions in real-cohort behaviour. The coded prototype was built to explore what connecting budget, goals, and investing feels like as a single interface — not to assert it.`,
    },
    problem: `Freya, 27. Junior product designer. Three apps open: YNAB for budget tracking, a Wealthsimple ISA she opened eighteen months ago and hasn't touched since, and a Notes doc where she tracks her Tokyo trip goal. None of them talk to each other. She knows she should be investing more. She doesn't know how much she can afford. She's not going to open a fourth app to find out.\n\nHow might we design a personal finance OS that treats money as a long-term practice — not a daily anxiety — and gives users budget, goals, and auto-investing in one quiet, confident interface?`,
    insight: `After mapping onboarding and primary flows across four leading tools, the pattern was consistent: each one optimises for a single job. YNAB is the best budgeting tool in the world — and completely blind to investing. Wealthsimple handles portfolios beautifully — with no visibility into your rent. The gap isn't a missing feature. It's that no product connects the three financial practices into one coherent ledger. Users who want all three either use three apps, or give up on one of them.`,
    deskResearch: {
      summary: `Competitive audit of four leading consumer fintech products: Wealthsimple, Betterment, YNAB, and Monzo Investments. Mapped onboarding flows, primary navigation, data architecture, and visual identity for each. Identified the shared failure pattern driving the project brief.`,
      stats: [
        { value: '4', label: 'Apps audited — Wealthsimple, Betterment, YNAB, Monzo Investments' },
        { value: '0/4', label: 'Products that connect budget, goals, and investing in one interface' },
        { value: '3', label: 'Visual directions explored before narrowing to the Quiet Premium theme' },
        { value: '12', label: 'Primary user flows mapped across the four audited products' },
      ],
      findings: [
        'YNAB is the most powerful budgeting tool in the category — and has zero investing functionality. Users who invest separately carry permanent cognitive overhead across two completely disconnected tools.',
        'Wealthsimple\'s goal-setting is disconnected from spending. You can create a "house deposit" goal, but the app has no visibility into your actual budget or monthly savings rate — the goal is decorative.',
        'Betterment (US) is the closest to a unified product, but goal-based investing has no connection to a budget view. Users can\'t see how their discretionary spending affects their auto-invest capacity.',
        'Monzo Investments is passive-first and deliberately lightweight: three ETF baskets, no goals, no budget integration, no meaningful data density for users who want visibility into their financial position.',
        'All four products have coherent visual identities — but none look like they were designed for someone who takes their finances seriously. YNAB\'s colour-coding reads as gamification; Monzo feels like a bank extension, not a financial product built for intelligent adults.',
      ],
      gap: 'All four tools solve one job well. None of them connect budget, goals, and investing into a single coherent practice. A user who wants all three either manages three apps — or quietly abandons the one that matters most.',
    },
    personas: [
      {
        name: 'Freya Walsh',
        age: 27,
        type: 'The Passive Investor',
        description: 'Junior product designer at a London agency. Earns £42k. Has YNAB but abandoned it after three weeks — too granular for how she actually thinks about money. Has a Wealthsimple ISA she opened after a podcast and hasn\'t touched in 18 months. Tracks a Tokyo trip goal in a Notes doc.',
        needs: [
          'One place that shows her full financial picture without requiring a spreadsheet',
          'Auto-invest she can configure once and forget — she doesn\'t want to think about it weekly',
          'A product that feels designed, not fintech-ified — she\'ll abandon anything that looks like a bank',
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
        type: 'The Data-Hungry Saver',
        description: 'Software engineer. Earns £78k. Saves inconsistently — good months and bad months, no system. Uses Monzo as his main account, has a S&S ISA from 2022 he hasn\'t added to. Budgets by checking his balance every few days. Has no idea what his net worth actually is.',
        needs: [
          'A single dashboard that calculates net worth automatically across accounts',
          'Meaningful data density — he\'s technical and wants to see the numbers, not a simplified score',
          'Goal-based auto-invest that requires no manual action once configured',
        ],
        frustrations: [
          'Monzo shows transactions but not his portfolio; Wealthsimple shows his portfolio but not his life context',
          'No tool shows him the whole picture in one place',
          'Budgeting "by feel" works until it doesn\'t — he\'s had three months this year where he saved nothing',
        ],
        goal: '"Tell me my number. Tell me if I\'m behind. Tell me what to do — and then leave me alone."',
      },
      {
        name: 'Aisha Patel',
        age: 34,
        type: 'The Paralysed High-Earner',
        description: 'Senior management consultant. Earns £95k. Saves aggressively — into a 1.5% APY savings account, because she\'s been meaning to move it to a S&S ISA for two years and hasn\'t. Has a Hargreaves Lansdown account she doesn\'t understand how to use. Cares about product quality — she\'ll abandon anything that looks cheap.',
        needs: [
          'Decision-reducing interface — a few portfolio options, not five hundred funds',
          'A product that earns aesthetic trust before it earns financial trust',
          'Clear evidence that her money is growing relative to a goal she actually has',
        ],
        frustrations: [
          'HL feels like 1998. Every robo-advisor marketing site looks identical.',
          'No product has ever earned her visual trust — and if it doesn\'t look right, she won\'t enter her bank details',
          'She knows she\'s losing thousands per year to inflation sitting in a savings account. She still hasn\'t moved it.',
        ],
        goal: '"Give me one interface that looks like it was designed for someone who cares about quality — and I\'ll actually use it."',
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
        detail: 'Built three composite archetypes from the audit findings and target demographic research: Freya (passive investor, 27), Marcus (data-hungry saver, 31), and Aisha (paralysed high-earner, 34). Each represents a distinct failure mode in existing products — and a distinct design requirement.',
      },
      {
        phase: 'Research & Direction',
        step: 'Visual direction exploration',
        detail: 'Explored three visual directions — Editorial (warm bone + ember red), Quiet Premium (onyx + periwinkle, surgical sans-serif), and Confident Warm (terracotta + sage). Built all three as live, toggleable CSS themes sharing one token contract, so the comparison is interactive rather than static.',
      },
      {
        phase: 'Design system',
        step: 'Token architecture',
        detail: 'Designed a three-theme CSS custom property system covering type scale, spacing, radii, motion, and full surface palettes. Each theme exposes the same variable names — a component written once renders correctly in all three directions without modification.',
      },
      {
        phase: 'Design system',
        step: 'Component library',
        detail: 'Built prop-driven atoms in React: Wordmark (3 variants), Money (animated counter), Sparkline, Donut, BarChart, AreaChart, Progress, Avatar, and a 20-icon SVG set. All components consume tokens exclusively — no hardcoded colours anywhere in the codebase.',
      },
      {
        phase: 'Product screens',
        step: 'Marketing site',
        detail: 'Designed and built a full marketing page addressing Aisha\'s trust requirement: editorial hero with live data artefact, product preview with tab switching, feature grid, pricing panel, security block, testimonials, and FAQ. Every element is designed to earn visual trust before asking for financial commitment.',
      },
      {
        phase: 'Product screens',
        step: 'Core product — 6 screens',
        detail: 'Built Dashboard (net worth hero, area chart, spending cards, AI insight — for Marcus\'s "tell me my number" need), Budget (donut + category bars, trend chart — for Freya\'s picture-in-one-place need), Goals, Invest, Transactions, and Settings. Every screen maps to a specific persona need identified in the audit phase.',
      },
      {
        phase: 'Product screens',
        step: '5-step onboarding flow',
        detail: 'Goal-first onboarding: Welcome → Connect bank → Pick goals → Portfolio selection → Review. Starts with "What are you saving for?" — a question everyone can answer before any commitment is required. Directly counters the audit finding that competitors start with account creation or risk profile questionnaires, which users cited as the moment they abandoned onboarding.',
      },
      {
        phase: 'Iteration',
        step: 'Live design review',
        detail: 'Ran a full design review in the browser prototype, applying 15+ iterations: hero viewport fix, accent-colour token correction, font hierarchy audit (removed all italic headings), stats row spacing, nav sizing, and settings card height consistency. All changes made directly in code — no Figma intermediary.',
      },
    ],
    metrics: [
      { label: 'Competitor products audited', value: '4 apps, 12 flows' },
      { label: 'Visual directions explored', value: '3 live themes' },
      { label: 'Product screens designed & built', value: '8 (marketing + 6 product + onboarding)' },
      { label: 'Prototype fidelity', value: 'Fully interactive in-browser' },
    ],
    solution: `Kaizen is a live, fully interactive personal finance OS prototype. Open it and you get a full marketing site designed to earn Aisha's trust, a goal-first 5-step onboarding built to counter the drop-off pattern in every audited competitor, and six product screens covering every job Marcus and Freya need. All switchable between three visual directions via a floating Tweaks panel. Every screen uses real mocked data and live React components, not static frames.`,
    takeaway: `Three things I would do next: (1) recruit 5 people from the target cohort and run task-based usability sessions — the onboarding flow and dashboard-first architecture are the highest-risk design hypotheses and need real user validation; (2) design the mobile experience — all screens were built desktop-first, and the budget and goals views need a mobile-native rethink; (3) connect the goals engine to the invest allocation logically, not just visually — the next version would calculate an auto-invest amount from goal target date and current balance automatically. What this project proved: building in code forces design quality that Figma defers. Hierarchy, token coherence, and interaction polish only surface in a real browser.`,
    tags: ['Fintech Consumer', 'Product design', 'React prototype', 'Design tokens', 'Multi-screen', 'Self-initiated'],
    overview: {
      team: 'Solo (design + engineering)',
      industry: 'Consumer fintech',
      status: 'Prototype complete. Competitive audit and persona framework documented. Usability testing with target cohort is the defined next step.',
    },
    designDecisions: [
      {
        decision: 'Three visual themes sharing one token contract',
        rationale: 'Freya, Marcus, and Aisha have different aesthetic expectations — and a single visual direction would satisfy one at the expense of the others. Three switchable themes built on one token contract let a stakeholder compare all three positioning options in a live prototype, not a Figma presentation. A single attribute on a wrapper div switches every component simultaneously.',
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
        rationale: 'An early iteration used editorial serif and italic headings. Dropped after recognising that bold + italic in the same heading breaks hierarchy — and that Aisha\'s trust threshold is closer to Stripe or Linear than to a financial magazine. Geist throughout, weight as the only hierarchy signal, no italic in any heading anywhere.',
      },
    ],
    outcomes: {
      summary: 'A research-informed, fully interactive consumer fintech prototype exploring what a coherent budget + goals + investing OS could look like.',
      keyOutcomes: [
        'Competitive audit of 4 apps (12 flows) surfaced the fragmentation gap that drove the entire design brief',
        '3 personas grounded every major design decision — goal-first onboarding, dashboard architecture, and visual direction all trace to a specific persona need',
        'Three live CSS themes built on one token contract enable stakeholder comparison without rebuilding any UI',
        'Fully interactive in-browser prototype validates design decisions that Figma prototypes cannot — hierarchy, token coherence, data density, and interaction polish all surface only in a real browser',
      ],
      learned: 'Consumer fintech\'s problem isn\'t missing features. Every tool is missing the same thing: the conviction that connecting budget, goals, and investing into one coherent interface is worth building. This project is a proof of concept that it is — and a method proof that building it in code from the start produces better design decisions than designing in Figma and coding later.',
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
    role: 'User Research Intern',
    duration: 'Feb – Apr 2023',
    tools: ['Paper prototypes', 'Miro', 'Figma'],
    problem: `Digital tools for people with dementia (PwD) are almost universally built around reminiscence - helping users remember the past. This neglects a critical insight: PwD retain more agency and quality of life when supported to engage with the present and future.\n\nHow might we design a digital tool that enhances quality of life for people with dementia - by focusing on present engagement and meaningful connection, rather than memory recall alone?`,
    insight: `The most meaningful moments for PwD were not recall-based - they were present-tense: creating something, sharing it with someone, and seeing a reaction. The app needed to facilitate making and connecting, not just remembering.`,
    process: [
      { step: 'Expert Focus Group', detail: 'Convened HCI and dementia care specialists from Northumbria and Newcastle Universities to establish the evidence base and identify gaps in existing digital tools.' },
      { step: 'Ethnographic Observation', detail: 'Shadowed "Milk, Two Sugars" - a sensory theatre intervention by Woven Nest at a Newcastle care home - observing how PwD responded to sensory, creative, and social stimuli.' },
      { step: 'Competitive Analysis', detail: 'Reviewed TimeSlips and similar co-creative tools to understand what engagement mechanisms transferred well to digital formats.' },
      { step: 'Co-design Workshops', detail: 'Ran participatory design sessions with PwD, caregivers, and care home staff using artefacts, storytelling prompts, and storyboard-based scenarios.' },
      { step: 'Prototype Testing', detail: 'Developed and tested paper prototypes with PwD and caregivers, measuring engagement duration, emotional response, and caregiver usability across 2 rounds.' },
      { step: 'Digital Iteration', detail: 'Refined the strongest concept into a digital prototype in Figma, incorporating feedback on navigation simplicity and visual hierarchy.' },
    ],
    metrics: [
      { label: 'Research methods used', value: '5 (focus groups, ethnography, co-design, prototype testing)' },
      { label: 'Prototype test rounds', value: '2 with PwD and caregivers' },
      { label: 'Design principles established', value: '5 evidence-based principles adopted by Nebula Labs' },
      { label: 'Product lifecycle', value: 'Full Discovery to Alpha' },
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
      },
      {
        type: 'Tertiary - Community Facilitator',
        name: 'Liv Hunt',
        age: 34,
        photo: '/uploads/me-and-you/liv-photo.jpg',
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
      },
    ],
    testing: {
      description: 'We tested two paper prototype variants with 10 participants, including 5 people with dementia (supported by carers) and 5 care staff. Sessions lasted approximately 20–30 minutes each.',
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
    client: 'Self-initiated concept',
    role: 'UX Designer & Researcher (end-to-end)',
    duration: '2024',
    tools: ['Figma', 'Figma Make', 'Dovetail', 'Hotjar (simulated)'],
    prototype: 'https://www.figma.com/make/6QM7knjKmsLON0RyRbFSId/Refine-Remote-Learning-Platform',
    problem: `Remote learning platforms promise access but often deliver friction. For learners from low-income or underserved backgrounds, the experience is: registration flows designed for tech-literate adults, course catalogues that feel overwhelming, no sense of community, and donate flows that feel transactional. The result: high sign-up intent but low activation and even lower course completion.\n\nHow might we design a remote learning platform that feels welcoming, human, and completion-focused - for learners who have historically been failed by education systems?`,
    insight: `Completion isn't a content problem - it's a belonging problem. Learners need to feel part of something, not just enrolled in something.`,
    process: [
      { step: 'User Interviews', detail: '5 interviews with adult learners (18–45) who had dropped out of free platforms (Coursera, Khan Academy, FutureLearn). Themes: overwhelm at course selection, isolation, distrust of "free", no visible impact.' },
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
    client: 'Self-initiated concept',
    role: 'UX Designer & Researcher (end-to-end)',
    duration: '2024',
    tools: ['Figma', 'Figma Make', 'Dovetail'],
    prototype: 'https://www.figma.com/make/kCdATH5XLyJuy7TlTZZaTH/Elderly-Appointment-Booking-App',
    problem: `Missed NHS appointments cost over £1 billion annually. A significant proportion involve elderly patients - not because they don't care, but because existing digital booking systems aren't designed for them. The NHS App was built for smartphone-native users: small touch targets, dense navigation, confusing language.\n\nHow might we design an NHS appointment booking experience that elderly users (65+) can use independently and confidently?`,
    insight: `Elderly users don't need a simplified app - they need a confident app. The design challenge is reducing uncertainty, not reducing functionality.`,
    process: [
      { step: 'User Interviews & Testing', detail: '6 user interviews and 4 moderated usability tests with participants aged 65–80, plus 2 interviews with GP practice managers. Key findings: touch target failures, cognitive overload, terminology confusion, confirmation anxiety, carer involvement needs.' },
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
    tagline: 'Inclusive UX for a TfL campaign that extended 50% travel discounts to care leavers aged 18–25, with a focus on dignity, clarity, and adoption.',
    niche: ['Government', 'Inclusive Design', 'Public Sector'],
    type: 'Government',
    featured: false,
    client: 'Novacroft / Transport for London (TfL)',
    role: 'Lead UX Designer',
    duration: 'Aug – Sep 2023',
    tools: ['Figma', 'Wireframing', 'High-fidelity prototyping'],
    heroImage: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/Overview%20mockup.png',
    overview: {
      team: '1 UX Designer (lead), cross-functional collaboration with content, dev, and TfL stakeholders',
      industry: 'Public Sector / Transport',
    },
    problem: `Care leavers are among the most socioeconomically vulnerable young people in the UK. After leaving the care system at 18, many face significant barriers to employment, education, and independence. In cities where public transport is the only affordable way to get around, access to a travel discount is not a perk: it is a practical lifeline.\n\nTransport for London's Care Leaver Photocard offers 50% off all TfL travel for care leavers aged 18–25. But the existing application journey had a problem: it was unclear, inaccessible in places, and created unnecessary friction for a group that already faces multiple barriers in navigating official processes.\n\nHow might we design an application experience that a care leaver can navigate independently, without a support worker, and without feeling stigmatised?`,
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
        { value: '50%', label: 'TfL travel discount available to eligible care leavers aged 18–25' },
        { value: '7', label: 'Friction points identified in the existing application journey' },
        { value: '3', label: 'WCAG 2.1 AA accessibility issues identified and addressed' },
      ],
      findings: [
        'The existing flow required users to upload documentation mid-form, at a point where many had already abandoned. Requirements needed to move earlier, not later.',
        'Language used throughout was formal and impersonal ("the applicant must provide…"), which felt distancing for a user group that often has difficult relationships with official institutions.',
        'Several steps had no error states: users who made a mistake received no guidance on how to correct it. This breached WCAG 3.3.1 (Error Identification) and 3.3.3 (Error Suggestion), both Level AA requirements.',
        'On mobile (the primary device for 18–25 year olds), several interactive elements (including the step indicator and action buttons) were below the 44×44px minimum. This breached WCAG 2.5.5 (Target Size, Level AA).',
        'The step indicator used text and position alone to communicate progress, with no icons or non-text cues. This breached WCAG 1.3.3 (Sensory Characteristics, Level A), which requires that instructions not rely solely on shape or position.',
        'Care leavers in unstable or temporary housing had no viable path through the address verification step. It was an invisible exclusion built into the original flow.',
        'Form input fields used generic text inputs throughout, with no fields configured to trigger the appropriate mobile keyboard type. On a smartphone, date fields displayed a full QWERTY keyboard instead of a numeric pad, and email fields offered no shortcut to the @ symbol. These small frictions compound into abandonment for users completing the form on mobile.',
      ],
      gap: `The existing journey assumed document literacy, stable addresses, digital confidence, and familiarity with bureaucratic systems. The opposite of the profile of most care leavers aged 18–25.`,
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
        rationale: 'Care leavers aged 18–25 overwhelmingly access services via smartphone. All touch targets were sized to 44px minimum, and form fields were tagged to trigger the correct mobile keyboard type, removing the small frictions that accumulate into abandonment.',
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
    client: 'HM Revenue & Customs',
    role: 'UX Designer (team participant)',
    duration: '5 days (Monday–Friday, structured sprint format)',
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
    duration: '4 months - MSc Dissertation',
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
    process: [
      {
        step: 'Literature Review',
        detail: 'Reviewed 30+ academic papers on indoor air quality, ambient information displays, and behaviour change theory. Key finding: ambient displays that integrate aesthetically into environments consistently outperform alert-based systems for sustained behaviour change - this became the theoretical backbone of the design direction.',
        image: '/uploads/Accord/Ede39b6f-c191-49ae-849e-1d2050a230ed%20rw_1920@4x.png',
        imageCaption: 'Concept sketches exploring a lichen-inspired inflation metaphor - mapping four device states to air quality levels (good → medium → poor → bad)',
      },
      {
        step: 'Expert Focus Group',
        detail: 'Convened HCI and environmental health academics from Newcastle and Northumbria Universities to validate the research direction and identify gaps in existing ambient technology design research.',
      },
      {
        step: 'Contextual Observation',
        detail: 'Observed office professionals across 3 workplaces, mapping moments when environmental feedback would be least and most disruptive. Key observation: existing IAQ solutions were almost universally ignored - either because they demanded active engagement or triggered alerts at the wrong moment.',
      },
      {
        step: 'Co-Design Workshop 1 - Storyboard Interpretation',
        detail: 'Participants worked with scenario-based storyboards to articulate how they\'d interpret and respond to the ActuAir device in a real office context. Key insights: participants consistently preferred the device at eye level or within peripheral vision - "out of sight, out of mind" was a common concern. Inflation/deflation feedback was interpreted differently by different users; some found it intuitive, others needed a brief onboarding moment to make the metaphor their own.',
        image: '/uploads/Accord/C143dd31-871a-4ec8-aff3-c7de47296496@4x.png',
        imageCaption: 'Scenario 1 storyboard - a cold day in the office with windows closed, CO₂ builds up and the ActuAir device shifts from green to red. Participants were asked: what would you do?',
      },
      {
        step: 'Co-Design Workshop 2 - Companion App Design',
        detail: 'Participants co-created the companion app\'s direction through live device demonstrations and structured preference exercises. Key insights: users wanted to know why the air quality was poor, not just that it was. Positive framing - "Open a window for a 10-minute reset" - landed far better than "CO₂ level critical". Critically, users did not want notifications; they wanted an app they could open by choice, not one that interrupted them.',
        image: '/uploads/Accord/E0829f52-5051-4805-85cf-836c7de3bd6e@4x.png',
        imageCaption: 'Scenario 4 storyboard - ActuAir placed in a common area vs. a private cabin. Prompted participants to articulate how they\'d want IAQ communicated across different workspace contexts.',
      },
      {
        step: 'Prototype Iteration',
        detail: 'Built and tested app companion prototypes across 2 rounds of iteration. Narrowed 12 initial concepts to 3 through dot-voting and desirability testing, then refined to 1 final direction based on usability testing with 8 office professionals. A weekly summary view was added in response to direct participant feedback.',
        image: '/uploads/Accord/D4d99d38-ee26-40da-9462-ad6d685dbaa3@4x.png',
        imageCaption: 'Paper prototype cards - hand-drawn screens from the first iteration round, testing layout, navigation flow, and notification opt-in before moving to digital hi-fidelity.',
      },
    ],
    testing: {
      description: 'Testing was conducted with 8 office professionals. Sessions combined task-based evaluation of the companion app prototype with observational notes on ActuAir device interaction.',
      participants: '8 office professionals',
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
    workshops: [
      { src: '/uploads/Accord/69c1064c-b190-4c28-b6d7-e8ecea3f099e%20rw_1920@4x.png', caption: 'Workshop 1 in session - participants reviewing ActuAir scenario scripts alongside the physical device' },
      { src: '/uploads/Accord/187dea95-0d97-49c9-9c52-39873ee50318%20rw_3840@4x.png', caption: 'Participants working through storyboard scenarios at the workshop table' },
      { src: '/uploads/Accord/8c058c0e-705d-48a8-b016-6c3d5779f6a7%20rw_1920@4x.png', caption: 'Close-up of paper ActuAir model exploration - participants physically handling the device prototype' },
      { src: '/uploads/Accord/F0b98a8d-3b90-4629-820d-09873bec1433%20rw_1920@4x.png', caption: 'Hands-on session with the paper ActuAir - interpreting the inflation metaphor through touch and arrangement' },
    ],
    metrics: [
      { label: 'Took at least one air quality action', value: '100%' },
      { label: 'Reported increased IAQ awareness', value: '50%' },
      { label: 'Usability test participants', value: '8' },
      { label: 'Published at', value: 'ACM CHI 2024' },
    ],
    solution: `A companion app designed to extend the ActuAir ambient display's feedback into personalised, actionable suggestions - built on the principle of voluntary engagement. The app explains why air quality is poor, frames responses positively, and surfaces information only when users choose to look, not through interruptions. Paired with the shape-changing device, it forms a two-layer ambient system: passive peripheral awareness via the physical display, and on-demand context via the digital companion.`,
    outcomes: {
      summary: 'Accord produced a validated, user-tested prototype for a companion app to the ActuAir ambient technology, grounded in co-design research with real office professionals.',
      keyOutcomes: [
        'Research accepted at ACM CHI 2024 - one of the most competitive venues in HCI, with a ~25% acceptance rate',
        '2 co-design sessions conducted with office professionals, generating validated design principles',
        '8 usability test participants - 100% took at least one air quality action prompted by the device',
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
    duration: '8 weeks · Jan–Feb 2026',
    tools: ['Dovetail', 'Figma', 'React', 'SVG Charts', 'Affinity Mapping'],
    prototype: 'http://localhost:8888',
    heroImage: '/uploads/ledgerline/hero.png',
    background: {
      understandingNeedsTitle: 'Why SME underwriting is broken - and who it breaks',
      understandingNeeds: `India has 63 million MSMEs. Fewer than 15% have ever received formal credit. The bottleneck isn't appetite - NBFCs want to lend. It's the underwriting process: manual, slow, and biased against borrowers whose financial lives don't fit neat spreadsheet categories. The tools credit officers use produce a number, not an explanation. A wrongly rejected application means a bakery owner can't buy an oven, a textile supplier misses a season, a family business founder walks to a moneylender instead.`,
      personalDrive: `CreditCraft v1 was a Figma prototype - static screens asserting explainability rather than proving it. The v2 challenge: build a tool where explainability is demonstrated by the experience itself. Switching from a healthy to a risky applicant should make the model's logic visible by contrast, not annotation. That required real research and a fundamentally different kind of artefact.`,
      innovativeMethods: `Research-first, prototype-last. Six interviews gave me the problem definition I couldn't have invented. Regulatory desk research gave me the design constraints. The coded prototype was the output, not the starting point.`,
    },
    problem: `A credit officer at a small NBFC in Tamil Nadu. Tuesday afternoon. A ₹15 lakh loan application from a textile supplier: 4-year-old business, GST-registered, 12 months of bank statements. Her tool gives her a score of 64 and a band of B. She needs to decide: approve, reject, or escalate. The score tells her nothing about why. She'll spend the next 45 minutes manually cross-referencing a spreadsheet she built herself.\n\nHow might we give NBFC credit officers an underwriting tool that shows its working - so they can make faster, more defensible, and fairer lending decisions?`,
    insight: `Credit officers don't distrust algorithms. They distrust algorithms that can't explain themselves. The research insight that shaped everything: analysts need the evidence, not just the verdict. A score of 64 means nothing; "income CV 0.28 over 12 months, overdraft utilisation elevated, 2 cheque returns" means the analyst can form a view. Explainability isn't a feature - it's the foundation of trust between a human decision-maker and an automated system.`,
    deskResearch: {
      summary: `Six structured interviews across two weeks: NBFC credit officers, a DSA, and two SME owners who had navigated loan applications. Desk research on RBI Digital Lending Guidelines, DPDP Act, and EU AI Act. Competitive analysis of Perfios, FinBox, ScoreMe, and Bureau. The gap: all four solve data ingestion. None provide a unified, explainable decision workflow.`,
      stats: [
        { value: '6', label: 'Structured interviews - credit officers, a DSA, and SME loan applicants' },
        { value: '4', label: 'Competitive tools analysed (Perfios, FinBox, ScoreMe, Bureau)' },
        { value: '3', label: 'Regulatory frameworks reviewed - RBI Digital Lending Guidelines, DPDP Act, EU AI Act' },
        { value: '40%', label: 'Of analyst review time spent on collateral documentation - the gap that made it a first-class screen' },
      ],
      findings: [
        'Credit officers context-switch between 4–6 tools per application: statement parser, GST lookup, scoring engine, document folder, personal spreadsheet. No tool unifies the workflow.',
        'Explainability is a regulatory requirement. RBI Digital Lending Guidelines (2022) require plain-language rejection reasons; EU AI Act classifies credit scoring as high-risk, requiring human oversight and the ability to contest automated decisions.',
        'Collateral review consumed 30–45 minutes per application in every session - chasing documents across email threads. No tool surfaces this as a structured workflow.',
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
        description: '2 years into his first NBFC role, Ravi handles 8–12 applications per day. He\'s fast with spreadsheets but anxious about making a wrong call on a borderline application without senior sign-off.',
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
        goal: '"Give me the evidence, not just the verdict - I need to be able to explain my recommendation to my manager."',
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
        goal: '"I shouldn\'t need three tabs and a spreadsheet to make a decision I\'ve made a hundred times before."',
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
        goal: '"I want to change the risk appetite for a segment and see immediately which active applications are affected - without a data team request."',
      },
    ],
    process: [
      {
        phase: 'Research',
        step: 'User Interviews',
        detail: 'Six 45-minute interviews: 3 NBFC credit officers (junior, senior, branch manager), 1 DSA, and 2 SME loan applicants (one approved, one rejected). Sessions recorded and transcribed. Key protocol: "walk me through the last application you reviewed" generated far richer data than hypothetical questions.',
      },
      {
        phase: 'Research',
        step: 'Synthesis & Insight Generation',
        detail: 'Thematic analysis in Dovetail: 74 observations collapsed into 4 primary insights. The one that shaped everything: the analyst and the applicant are both users of the same decision - but only the analyst is ever designed for.',
      },
      {
        phase: 'Research',
        step: 'Regulatory Landscape',
        detail: 'RBI Digital Lending Guidelines (plain-language rejection reasons), DPDP Act (data minimisation), EU AI Act (human oversight mandate for high-risk credit decisions). These shaped the explainability layer and the override mechanism more than any user insight did.',
      },
      {
        phase: 'Research',
        step: 'Competitive Analysis',
        detail: 'Perfios (statement parsing, no explainability), FinBox (developer API, no analyst UX), ScoreMe (GST scoring, opaque model), Bureau (identity/fraud, point solution). All four solve ingestion. None design for the analyst or the applicant downstream of the score.',
      },
      {
        phase: 'Research',
        step: 'Constraints Definition',
        detail: 'Explicit design scope written before any screen was sketched. In scope: the credit officer\'s internal workflow, applicant profiles already submitted, explainability of automated scoring. Out of scope: applicant-facing portal (a separate project), mobile (desktop-first for analyst tooling), real data integration (prototype only), live API calls. This section prevented scope creep and made the resulting prototype more focused - not trying to be everything.',
      },
      {
        phase: 'Design',
        step: 'Workflow Mapping',
        detail: 'Mapped the 9-stage analyst journey end-to-end from the research: Queue → New Intake → Transactions → Cashflow → Collateral → Scorecard → Red Flags → Rules Editor → Experiments. Each stage owns a distinct analyst decision - eliminating the context-switching identified as the primary workflow pain in the interviews.',
      },
      {
        phase: 'Design',
        step: 'Design System',
        detail: 'CSS-first design system. Semantic tokens (paper/ink, lime accent, good/warn/bad) all pass WCAG AA. Flags in three channels: shape + colour + text, never colour alone. Two densities (comfortable/compact) for junior and senior analysts.',
      },
      {
        phase: 'Design',
        step: 'Data Architecture',
        detail: 'Modelled three complete applicant profiles directly from the interview archetypes: Acme Trading (healthy, 7yr FMCG, score 81, property-secured - the straightforward approval), Sundar Textiles (borderline, 4yr textile, score 64, hybrid collateral - the judgement call), Zenith Hardware (risky, 2yr retail, score 38, unsecured + gambling flags - the clear decline). Every KPI, chart, and table is derived from these profiles at render time.',
      },
      {
        phase: 'Design',
        step: 'Collateral Module',
        detail: 'No tool in the competitive set had a structured collateral view. Built one: LTV panel with tonal coloring, document tray with status states (verified/pending/rejected/missing), PG guarantor card. Each applicant profile tells a different collateral story.',
        image: '/uploads/ledgerline/collateral.png',
        imageCaption: 'Collateral screen - LTV panel with tonal risk coloring, document tray with per-file status badges (verified / pending / rejected / missing), and PG guarantor card. Sundar Textiles shown: hybrid collateral with two outstanding document requests.',
      },
      {
        phase: 'Design',
        step: 'Hand-rolled SVG Charts',
        detail: 'Built four custom charts with no charting library: cashflow line + area chart, balance strip (net cashflow bar chart), donut (expense breakdown), sparkline. Each chart reads directly from applicant data and adapts to theme changes.',
        image: '/uploads/ledgerline/cashflow.png',
        imageCaption: 'Cashflow screen - 12-month trend line with area fill (lime = net positive, amber = warning zone), monthly balance strip, and expense donut. All drawn with hand-rolled SVG - no charting library.',
      },
      {
        phase: 'Design',
        step: 'Explainability Layer',
        detail: 'Expanded the scorecard to 8 transparent features with raw evidence strings ("CV 0.14 over 12mo"), per-feature scores, and a tonal bar (good/warn/bad). Score changes completely when switching profiles - making the model logic visible by contrast, not explanation.',
        image: '/uploads/ledgerline/scorecard.png',
        imageCaption: 'Scorecard screen - Band B hero at 96px, score demoted to footer. Eight transparent features each with raw evidence string, per-feature score, and good/warn/bad tonal bar. Sundar Textiles (score 64) shown.',
      },
      {
        phase: 'Design',
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
    designDecisions: [
      {
        decision: 'Accessibility baked in at the token level - not a retrospective audit',
        rationale: 'Every competitor tool failed WCAG AA contrast on scorecard visualisations. Every one communicated risk through colour alone - invisible to the 1-in-12 men with colour vision deficiency. Ledgerline uses shape + colour + text for every flag, and contrast ratios were validated at the design token level before any screen was built.',
      },
      {
        decision: 'Human override mechanism on every automated signal',
        rationale: 'RBI guidelines and EU AI Act both require human oversight of automated credit decisions. The Rules Editor lets analysts see which rules fired and at what weight, and toggle them to see the score impact. In testing, the senior analyst asked for this before I showed it - validating it as a real need, not a speculative feature.',
      },
      {
        decision: 'Dark theme as default, light theme as alternative',
        rationale: 'Interview finding: credit officers reviewing applications for 5–7 hours a day in office environments strongly prefer dark themes for extended sessions. Dark also makes the WCAG-compliant lime accent pop as a clear action signal. Light theme is available for environments where dark backgrounds are prohibited by institutional IT policy.',
      },
      {
        decision: 'Collateral as a first-class screen, not a metadata field',
        rationale: 'Interviews showed 30–40% of review time spent chasing collateral documents - yet no existing tool surfaces this as a workflow. This is the feature most likely to be descoped without the research to back it. With the research, it\'s non-negotiable.',
      },
      {
        decision: 'Applicant-facing explanation scoped out - deliberately',
        rationale: 'RBI requires plain-language rejection reasons; applicants almost universally said they received nothing useful. This was scoped out not because it\'s unimportant, but because designing for two very different users in parallel would have diluted both. It\'s the first item on the next-phase roadmap.',
      },
    ],
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
