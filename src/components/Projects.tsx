import { Link } from 'react-router-dom'

type Project = {
  num: string
  title: string
  client: string
  year: string
  role: string
  desc: string
  metric: string
  tags: string[]
  image?: string
  placeholder: string
  slug?: string
}

const PROJECTS: Project[] = [
  {
    num: '01',
    title: 'Me & You, Dementia care',
    client: 'NHS x King\'s College',
    year: '2024',
    role: 'Research + UX',
    desc: 'Companion interactions for people living with dementia and their carers. A year of co-design, 28 participants, 3 piloted prototypes.',
    metric: '28 participants · 3 piloted prototypes',
    tags: ['Healthcare', 'Research', 'Co-design'],
    image: '/uploads/me-and-you/prototype-multi.png',
    placeholder: 'Healthcare, dementia companion',
    slug: 'me-and-you',
  },
  {
    num: '02',
    title: 'Project Accord, Ambient air quality',
    client: 'Newcastle University · Open Lab',
    year: '2023',
    role: 'UX Designer & Researcher (MSc dissertation)',
    desc: 'A companion app for a shape-changing ambient air-quality device. Two co-design workshops, five usability tests, two prototype iterations. Findings accepted at ACM CHI 2024.',
    metric: 'CHI 2024 · 100% took an air-quality action',
    tags: ['HCI Research', 'Ambient UX', 'Workplace wellbeing'],
    image: '/uploads/Accord/Phone%20mockup_3@4x.png',
    placeholder: 'Academic, Accord ambient UX',
    slug: 'project-accord',
  },
  {
    num: '03',
    title: 'MHCLG Grants Services',
    client: 'Ministry of Housing, Communities & Local Government',
    year: '2023–25',
    role: 'Sole User Researcher on workstream',
    desc: 'Research that evidenced WCAG 2.1 AA compliance across 200+ UK Local Authorities, and gave the delivery team an audit trail GDS assessors could trust, embedded into sprint, not bolted on at the end.',
    metric: '200+ Local Authorities · WCAG 2.1 AA · GDS-assessed',
    tags: ['Government', 'GDS', 'Accessibility', 'WCAG 2.1 AA'],
    image: '/uploads/mhclg-hero.png',
    placeholder: 'Government, MHCLG grants',
    slug: 'mhclg-grants',
  },
  {
    num: '04',
    title: 'Ledgerline, B2B Fintech',
    client: 'Self-initiated',
    year: '2026',
    role: 'UX Designer & Prototype Engineer',
    desc: 'SME underwriting sandbox for credit analysts. 9 screens, 3 live applicant personas, explainable scoring, and a fully interactive browser prototype.',
    metric: '9 screens · 3 personas · live prototype',
    tags: ['Fintech B2B', 'Credit Risk', 'B2B SaaS'],
    image: '/uploads/ledgerline/hero.png',
    placeholder: 'Fintech B2B, SME underwriting',
    slug: 'ledgerline',
  },
  {
    num: '05',
    title: 'Kaizen: Personal Finance OS',
    client: 'Self-initiated concept',
    year: '2026',
    role: 'UX Designer & Prototype Engineer',
    desc: 'An AI-assisted budget, index portfolio, and goal tracker in one quiet interface. Three visual directions, fully interactive, from marketing site to onboarding to dashboard.',
    metric: '3 visual systems · onboarding → dashboard',
    tags: ['Fintech Consumer', 'Product design', 'Prototype'],
    image: '/uploads/kaizen/hero.png',
    placeholder: 'Fintech Consumer, personal finance OS',
    slug: 'kaizen',
  },
  {
    num: '06',
    title: 'TFL, Payments campaign',
    client: 'Transport for London',
    year: '2023',
    role: 'UX + Content',
    desc: 'A high-fidelity prototype guiding 8.4m daily riders through a simplified contactless sign-up journey.',
    metric: '8.4M daily riders · conversion-focused',
    tags: ['Public sector', 'Conversion'],
    image: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/mockup.png',
    placeholder: 'Transit, TFL campaign',
    slug: 'tfl',
  },
]

const PARALLAX_SPEEDS = ['0.09', '0.06', '0.11']

function FeatureSpread({ p, index }: { p: Project; index: number }) {
  const flip = index % 2 === 1
  return (
    <Link to={`/work/${p.slug}`} className={`spread${flip ? ' spread--flip' : ''}`}>
      <figure className="spread__media">
        <div className="spread__img-mask">
          {p.image
            ? <img src={p.image} alt={p.title} data-parallax={PARALLAX_SPEEDS[index % 3]} loading="lazy" />
            : <div className="placeholder">{p.placeholder}</div>}
        </div>
        <figcaption className="spread__caption">{p.client} · {p.year}</figcaption>
      </figure>

      <div className="spread__body" data-reveal={flip ? 'left' : 'right'}>
        <div className="spread__kicker">Feature № {p.num} · {p.tags[0]}</div>
        <h3 className="spread__title">{p.title}</h3>
        <p className="spread__standfirst">{p.desc}</p>
        <div className="spread__metric">{p.metric}</div>
        <span className="spread__cta">Read the story <em>p.{p.num}</em></span>
      </div>
    </Link>
  )
}

export default function Projects() {
  return (
    <section className="section projects" id="work">
      <div className="container">
        <div className="sec-head">
          <div>
            <h2 className="h2" data-reveal="up" data-delay="80">Selected <span className="accent">work.</span></h2>
          </div>
          <div className="sec-head__right" data-reveal="up" data-delay="160">Six briefs across fintech, edtech, healthcare and public sector. Full case studies on request.</div>
        </div>

        <div className="spreads">
          {PROJECTS.map((p, i) => <FeatureSpread key={p.num} p={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}
