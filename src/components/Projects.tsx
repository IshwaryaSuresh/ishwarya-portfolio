import { useState } from 'react'
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
    num: '02',
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
    num: '03',
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
    num: '04',
    title: 'Project Accord, Governance SaaS',
    client: 'Accord',
    year: '2023',
    role: 'Product Designer',
    desc: 'An enterprise approvals tool used by 3 UK regulators. Re-architected the review flow; approval turnaround dropped 62%.',
    metric: '−62% approval turnaround · 3 UK regulators',
    tags: ['Enterprise', 'SaaS'],
    image: '/uploads/Accord/Phone%20mockup_3@4x.png',
    placeholder: 'Enterprise, Accord SaaS',
    slug: 'project-accord',
  },
  {
    num: '05',
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

type View = 'list' | 'grid'

function ProjectRow({ p, onHover, onLeave, index }: { p: Project; onHover: (p: Project, e: React.MouseEvent) => void; onLeave: () => void; index: number }) {
  const inner = (
    <div
      className="proj-row"
      data-reveal="up"
      data-delay={index * 80}
      onMouseEnter={p.slug ? (e) => onHover(p, e) : undefined}
      onMouseMove={p.slug ? (e) => onHover(p, e) : undefined}
      onMouseLeave={p.slug ? onLeave : undefined}
    >
      <div className="proj-row__num">{p.num}</div>
      <div className="proj-row__title">
        {p.title}
        <div className="proj-row__metric">{p.metric}</div>
      </div>
      <div className="proj-row__desc">{p.desc}</div>
      <div className="proj-row__tags">
        {p.tags.map(t => <span key={t} className="proj-row__tag">{t}</span>)}
      </div>
      <div className="proj-row__meta">
        {p.year} <span className="arrow">→</span>
      </div>
    </div>
  )
  return p.slug ? <Link to={`/work/${p.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>{inner}</Link> : inner
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const inner = (
    <div className="proj-card" data-reveal="scale" data-delay={index * 80}>
      <div className="proj-card__media">
        {p.image
          ? <img src={p.image} alt={p.title} />
          : <div className="placeholder">{p.placeholder}</div>
        }
      </div>
      <div className="proj-card__body">
        <div className="proj-card__title">{p.title}</div>
        <div className="proj-card__desc">{p.desc}</div>
        <div className="proj-card__footer">
          <span>{p.role}</span>
          <span>{p.year} →</span>
        </div>
      </div>
    </div>
  )
  return p.slug ? <Link to={`/work/${p.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>{inner}</Link> : inner
}

export default function Projects() {
  const [view, setView] = useState<View>('list')
  const [hover, setHover] = useState<Project | null>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const onHover = (p: Project, e: React.MouseEvent) => {
    setHover(p)
    setPos({ x: e.clientX, y: e.clientY })
  }
  const onLeave = () => setHover(null)

  return (
    <section className="section projects" id="work">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="eyebrow" data-reveal="up">Selected work</div>
            <h2 className="h2" data-reveal="up" data-delay="80">Selected <span className="accent">work.</span></h2>
          </div>
          <div className="sec-head__right" data-reveal="up" data-delay="160">
            <div style={{ marginBottom: 12 }}>Six briefs across fintech, edtech, healthcare and public sector. Full case studies on request.</div>
            <div className="projects__view-toggle">
              <button className={view === 'list' ? 'is-active' : ''} onClick={() => setView('list')}>List</button>
              <button className={view === 'grid' ? 'is-active' : ''} onClick={() => setView('grid')}>Grid</button>
            </div>
          </div>
        </div>

        {view === 'list' ? (
          <div className="proj-list">
            {PROJECTS.map((p, i) => (
              <ProjectRow key={p.num} p={p} index={i} onHover={onHover} onLeave={onLeave} />
            ))}
          </div>
        ) : (
          <div className="proj-grid">
            {PROJECTS.map((p, i) => <ProjectCard key={p.num} p={p} index={i} />)}
          </div>
        )}
      </div>

      {view === 'list' && (
        <div
          className={'proj-preview ' + (hover ? 'is-visible' : '')}
          style={{ left: pos.x + 'px', top: pos.y + 'px' }}
        >
          <div className="proj-preview__inner">
            {hover?.image
              ? <img src={hover.image} alt={hover.title} />
              : <div className="placeholder">{hover?.placeholder ?? ''}</div>
            }
          </div>
        </div>
      )}
    </section>
  )
}
