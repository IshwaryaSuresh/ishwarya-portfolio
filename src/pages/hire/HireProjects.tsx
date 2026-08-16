import { Link } from 'react-router-dom'

type Project = {
  title: string
  context: string
  year: string
  collaborators: string
  desc: string
  metric: string
  image?: string
  slug: string
}

/* Collaborators replace "role" throughout, drawn from the real team
   composition recorded in each case study. */
const PROJECTS: Project[] = [
  {
    title: 'Afterglow, a ritual for two',
    context: 'Self-initiated · Made for Humans · live on the iOS App Store',
    year: '2026',
    collaborators: 'Solo end to end: inclusion principles, design system, Capacitor build, Supabase backend, RevenueCat subscriptions, and both store submissions',
    desc: 'A two-person evening ritual where partners share how the day felt as light rather than words, designed for neurodivergent and long-distance couples. Seven states in one design language, three ways to name a feeling, and a word on every glow so nothing rides on colour alone.',
    metric: 'Live on the App Store · 9 weeks brief to approval · 0 streaks',
    image: '/uploads/afterglow/spread.png',
    slug: 'afterglow',
  },
  {
    title: 'Me & You, Dementia care',
    context: 'Nebula Labs · NHS and King\'s College research context',
    year: '2023',
    collaborators: 'Nebula Labs product team; academics at Newcastle and Northumbria Universities; 28 co-design participants (people living with dementia and their carers)',
    desc: 'Companion interactions for people living with dementia and their carers, designed to support the present rather than only reminiscence. A year of co-design and three piloted prototypes.',
    metric: '28 participants · 3 piloted prototypes · Discovery to Alpha',
    image: '/uploads/me-and-you/prototype-multi.png',
    slug: 'me-and-you',
  },
  {
    title: 'Project Accord, Ambient air quality',
    context: 'Newcastle University · Open Lab',
    year: '2023',
    collaborators: 'Lenia Margariti (PhD researcher, ActuAir shape-changing device); HCI and environmental-health academics at Newcastle and Northumbria; 5 usability-test participants',
    desc: 'A companion app for a shape-changing ambient air-quality device. Two co-design workshops, five usability tests, two prototype iterations. Findings accepted at ACM CHI 2024.',
    metric: 'ACM CHI 2024 · 100% of participants took an air-quality action',
    image: '/uploads/Accord/Phone%20mockup_3@4x.png',
    slug: 'project-accord',
  },
  {
    title: 'MHCLG Grants Services',
    context: 'Ministry of Housing, Communities & Local Government',
    year: '2024–25',
    collaborators: 'Agile delivery team: product manager, delivery manager, 2 service designers, interaction designer, content designer, 2 developers. Grant officers across 200+ Local Authorities, including assistive-technology users',
    desc: 'Research that evidenced WCAG 2.1 AA compliance across 200+ UK Local Authorities and gave the team an audit trail GDS assessors could trust, embedded into sprint rather than bolted on at the end.',
    metric: '200+ Local Authorities · WCAG 2.1 AA · GDS Service Standard',
    image: '/uploads/mhclg-hero.png',
    slug: 'mhclg-grants',
  },
  {
    title: 'Ledgerline, explainable credit',
    context: 'Self-directed, researched with credit practitioners',
    year: '2026',
    collaborators: '6 research participants: NBFC credit officers, a DSA, and SME loan applicants. Validated through task-based testing with 3 domain professionals',
    desc: 'An SME underwriting sandbox where the scoring explains itself. Research-to-prototype in 8 weeks: interviews, RBI digital-lending desk research, and a working coded prototype with hand-rolled SVG charts.',
    metric: '9 screens · 74 observations into 4 insights · live prototype',
    image: '/uploads/ledgerline/hero.png',
    slug: 'ledgerline',
  },
  {
    title: 'Kaizen, personal finance OS',
    context: 'Self-directed, audit-led product study',
    year: '2026',
    collaborators: 'Competitive audit across 4 consumer fintech products (YNAB, Wealthsimple, Betterment, Monzo); personas validated against reference users',
    desc: 'Budget, goals, and auto-investing in one quiet interface. Three switchable visual systems off a single token contract, carried from marketing site through onboarding to dashboard as a working coded prototype.',
    metric: '8 screens · 3 visual systems · one token contract',
    image: '/uploads/kaizen/hero.png',
    slug: 'kaizen',
  },
  {
    title: 'TfL Care Leaver Oyster Card',
    context: 'Novacroft for Transport for London',
    year: '2023',
    collaborators: 'Content design, development, and TfL stakeholders; care-leaver users in inclusive-design testing',
    desc: 'Inclusive UX for a campaign extending 50% travel discounts to care leavers. Persona development, journey mapping, and prototyping for a journey used by 8.4m daily riders.',
    metric: '8.4M daily riders · inclusive design for vulnerable users',
    image: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/mockup.png',
    slug: 'tfl',
  },
]

const PARALLAX = ['0.09', '0.06', '0.11']

function Spread({ p, index }: { p: Project; index: number }) {
  const flip = index % 2 === 1
  return (
    <Link to={`/work/${p.slug}`} className={`spread${flip ? ' spread--flip' : ''}`}>
      <figure className="spread__media">
        <div className="spread__img-mask">
          <img src={p.image} alt={p.title} data-parallax={PARALLAX[index % 3]} loading="lazy" />
        </div>
      </figure>

      <div className="spread__body" data-reveal={flip ? 'left' : 'right'}>
        <h3 className="spread__title">{p.title}</h3>
        <p className="hire-spread__context">{p.context} · {p.year}</p>
        <p className="spread__standfirst">{p.desc}</p>
        <p className="hire-spread__metric">{p.metric}</p>
        <p className="hire-spread__collab">
          <span>Worked with</span>
          {p.collaborators}
        </p>
      </div>
    </Link>
  )
}

export default function HireProjects() {
  return (
    <section className="section projects" id="work">
      <div className="container">
        <div className="sec-head">
          <div>
            <h2 className="h2" data-reveal="up" data-delay="80">Selected <span className="accent">work.</span></h2>
          </div>
          <div className="sec-head__right" data-reveal="up" data-delay="160">
            Seven projects across healthcare, government, research and fintech. Each one links to the full case study.
          </div>
        </div>

        <div className="spreads">
          {PROJECTS.map((p, i) => <Spread key={p.slug} p={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}
