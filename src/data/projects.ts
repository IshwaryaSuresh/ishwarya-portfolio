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
  process: { step: string; detail: string; image?: string; imageCaption?: string }[]
  metrics: { label: string; value: string }[]
  solution: string
  takeaway: string
  tags: string[]
  // Extended fields (optional - populated per-project)
  heroImage?: string
  overview?: { team: string; industry: string; status?: string }
  designDecisions?: { decision: string; rationale: string }[]
  background?: { understandingNeeds: string; personalDrive: string; innovativeMethods: string }
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
    title: 'KAIZEN',
    tagline: 'A fintech investing platform that makes first-time investing feel approachable - increasing goal-setting completion by 65%.',
    niche: ['Fintech', 'Consumer', 'Personal Finance'],
    type: 'Fintech Consumer',
    featured: true,
    client: 'Self-initiated concept',
    role: 'UX Designer & Researcher (end-to-end)',
    duration: '2024',
    tools: ['Figma', 'Figma Make', 'Hotjar (simulated)', 'Dovetail'],
    prototype: 'https://www.figma.com/make/z5wCA7t7vahcgM0hDiZA21/Investing-Platform-Design-Strategy',
    problem: `Young professionals (22–35) know they should invest but don't. The barrier isn't willingness - it's design. Existing investing platforms are built for people who already understand markets. The onboarding is dense, jargon-heavy, and the first screen is a portfolio dashboard that means nothing to a first-time investor. Platforms haemorrhage users in the first 72 hours.\n\nHow might we design an investing experience where a first-time investor feels confident enough to make their first investment within 10 minutes?`,
    insight: `The first job of the product isn't to show investments - it's to help users articulate a financial goal and feel in control of the journey toward it.`,
    process: [
      { step: 'User Interviews', detail: '6 interviews with 22–32 year olds who had downloaded an investing app but hadn\'t invested. Key themes: anxiety at account creation, no clear "why", distrust of automation, social proof gap.' },
      { step: 'Competitive Analysis', detail: 'Mapped onboarding flows of 5 platforms (Monzo Investments, Nutmeg, Freetrade, eToro, Wealthsimple) against drop-off points.' },
      { step: 'Goal-First Onboarding', detail: 'Redesigned the flow to start with "What are you saving for?" before any account or risk setup - addressing the core anxiety trigger.' },
      { step: 'Plain Language Copy', detail: 'Replaced all financial jargon with conversational alternatives: "diversified portfolio" → "spread across different types of investment".' },
      { step: 'Wealth Timeline', detail: 'Introduced visual projected growth toward the user\'s stated goal, grounded in their actual numbers - making abstract investing concrete.' },
      { step: 'Social Proof Layer', detail: 'Added anonymised "people in your situation are doing X" nudges based on user cohort data, addressing the trust gap without false urgency.' },
      { step: 'Usability Testing', detail: '5 moderated sessions measuring time-to-first-investment and goal-setting completion rate.' },
    ],
    metrics: [
      { label: 'Goal-setting completion (onboarding)', value: '↑ 65% vs. competitor baseline' },
      { label: 'Drop-off at onboarding (simulated A/B)', value: '↓ 35%' },
      { label: 'Time to first investment action', value: '↓ from 8 min to 4.5 min' },
      { label: 'User confidence rating', value: '4.3 / 5.0' },
      { label: '"I would use this"', value: '8 / 10 participants' },
    ],
    solution: `KAIZEN - "See where your money goes. Invest automatically." Goal-first onboarding, spend tracking dashboard, automated investing rules tied to spending behaviour, a wealth timeline with scenario modelling, and transparent no-hidden-fees pricing as a core brand principle.`,
    takeaway: `The UX of investing isn't about making markets simpler - it's about making the user's relationship with their own goals clearer. KAIZEN proves I can design emotional journeys inside financial products.`,
    tags: ['Fintech', 'Consumer', 'Onboarding', 'Behaviour Design', 'Usability Testing'],
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
    slug: 'project-accord',
    title: 'Project Accord',
    tagline: 'Co-designing ambient air quality feedback for the workplace - research acknowledged at ACM CHI 2024.',
    niche: ['Workplace Wellbeing', 'Ambient UX', 'Research'],
    type: 'Academic',
    featured: false,
    client: 'MSc Dissertation, Newcastle University',
    role: 'UX Researcher & Designer',
    duration: '2021 – 2022',
    tools: ['Paper prototypes', 'Figma', 'Miro', 'Video storyboards'],
    problem: `Indoor air quality in office environments is frequently worse than outdoor air - contributing to fatigue, poor concentration, and long-term health risks. Yet it's invisible. Existing IAQ monitoring solutions either require users to actively check an app (ignored) or trigger disruptive alerts (also ignored).\n\nHow might we communicate indoor air quality data to office professionals in a way that prompts healthy behaviour without interrupting workflow?`,
    insight: `Workers didn't want more data - they wanted just-in-time cues that triggered a simple action (open a window, take a break) without requiring them to interpret numbers or context-switch from their work.`,
    process: [
      { step: 'Literature Review', detail: 'Reviewed 30+ academic papers on IAQ, ambient information displays, and behaviour change. Key finding: ambient displays that integrate aesthetically into environments outperform alert-based systems for sustained behaviour change.' },
      { step: 'Expert Focus Group', detail: 'Convened HCI and environmental health academics from Newcastle and Northumbria Universities to validate research direction.' },
      { step: 'Contextual Observation', detail: 'Observed office professionals across 3 workplaces, mapping moments when environmental feedback would be least and most disruptive.' },
      { step: 'Co-design Workshops', detail: 'Ran participatory sessions with office workers to explore preferred feedback modes - visual, tactile, ambient.' },
      { step: 'Storyboard Testing', detail: 'Developed 3 scenario-based storyboards and tested with focus groups, measuring comprehension and stated behaviour change intent.' },
      { step: 'Prototype Iteration', detail: 'Built and tested tactile prototypes for 3 concepts; narrowed through dot-voting and desirability testing.' },
    ],
    metrics: [
      { label: 'Academic papers reviewed', value: '30+' },
      { label: 'Workspace observation sites', value: '3' },
      { label: 'Concepts generated & tested', value: '12 generated → 3 tested → 1 final' },
      { label: 'Academic recognition', value: 'ACM CHI 2024 Conference' },
    ],
    solution: `An ambient sensing display that communicates IAQ through peripheral visual and tactile cues - designed to be aesthetically integrated into office environments and interpretable at a glance without requiring active engagement or interrupting workflow.`,
    takeaway: `Ambient UX is one of the most underexplored frontiers in product design. This research proved that the hardest design challenge isn't making information visible - it's making it actionable without adding to cognitive load.`,
    tags: ['Research', 'Ambient UX', 'Workplace Design', 'Academic', 'Co-design'],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured)
}
