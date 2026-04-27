import { useState } from 'react'
import { Link } from 'react-router-dom'

type Project = {
  num: string
  title: string
  client: string
  year: string
  role: string
  desc: string
  tags: string[]
  image?: string
  placeholder: string
  slug?: string
}

const PROJECTS: Project[] = [
  {
    num: '01',
    title: 'Ledgerline, Consumer Fintech',
    client: 'Ledgerline',
    year: '2025',
    role: 'Lead Product Designer',
    desc: 'A monthly spend-forecasting app that helps first-time earners plan for tax, rent and saving goals with a single dashboard.',
    tags: ['Fintech', '0→1', 'iOS + Android'],
    placeholder: 'Fintech, spend forecasting app',
  },
  {
    num: '02',
    title: 'Polaris Learning Plus, Edtech',
    client: 'Polaris',
    year: '2024',
    role: 'Senior UX Designer',
    desc: 'Adaptive K-12 learning paths for 140k+ students. Redesigned the teacher dashboard to cut lesson-planning from 45 to 9 minutes.',
    tags: ['Edtech', 'B2B2C', 'Design system'],
    placeholder: 'Edtech, adaptive learning',
  },
  {
    num: '03',
    title: 'Me & You, Dementia care',
    client: 'NHS x King\'s College',
    year: '2024',
    role: 'Research + UX',
    desc: 'Companion interactions for people living with dementia and their carers. A year of co-design, 28 participants, 3 piloted prototypes.',
    tags: ['Healthcare', 'Research', 'Co-design'],
    image: '/uploads/Me&You.png',
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
    tags: ['Enterprise', 'SaaS'],
    image: '/uploads/Accord.png',
    placeholder: 'Enterprise, Accord SaaS',
  },
  {
    num: '05',
    title: 'TFL, Payments campaign',
    client: 'Transport for London',
    year: '2023',
    role: 'UX + Content',
    desc: 'A high-fidelity prototype guiding 8.4m daily riders through a simplified contactless sign-up journey.',
    tags: ['Public sector', 'Conversion'],
    image: '/uploads/TFL.png',
    placeholder: 'Transit, TFL campaign',
  },
  {
    num: '06',
    title: 'HMRC, Design sprint',
    client: 'HM Revenue & Customs',
    year: '2022',
    role: 'Design lead',
    desc: 'A 5-day sprint to unblock a stuck citizen-facing form. Shipped wireframes, storyboards, and a validated direction.',
    tags: ['Public sector', 'Sprint'],
    image: '/uploads/HMRC.png',
    placeholder: 'Public sector, HMRC sprint',
  },
]

type View = 'list' | 'grid'

function ProjectRow({ p, onHover, onLeave }: { p: Project; onHover: (p: Project, e: React.MouseEvent) => void; onLeave: () => void }) {
  const inner = (
    <div
      className="proj-row"
      onMouseEnter={(e) => onHover(p, e)}
      onMouseMove={(e) => onHover(p, e)}
      onMouseLeave={onLeave}
    >
      <div className="proj-row__num">{p.num}</div>
      <div className="proj-row__title">{p.title}</div>
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

function ProjectCard({ p }: { p: Project }) {
  const inner = (
    <div className="proj-card">
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
            <div className="eyebrow">[ Selected work ]</div>
            <h2 className="h2">Selected <span className="accent">work.</span></h2>
          </div>
          <div className="sec-head__right">
            <div style={{ marginBottom: 12 }}>Six briefs across fintech, edtech, healthcare and public sector. Full case studies on request.</div>
            <div className="projects__view-toggle">
              <button className={view === 'list' ? 'is-active' : ''} onClick={() => setView('list')}>List</button>
              <button className={view === 'grid' ? 'is-active' : ''} onClick={() => setView('grid')}>Grid</button>
            </div>
          </div>
        </div>

        {view === 'list' ? (
          <div className="proj-list">
            {PROJECTS.map(p => (
              <ProjectRow key={p.num} p={p} onHover={onHover} onLeave={onLeave} />
            ))}
          </div>
        ) : (
          <div className="proj-grid">
            {PROJECTS.map(p => <ProjectCard key={p.num} p={p} />)}
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
