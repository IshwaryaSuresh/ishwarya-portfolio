import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import type { Project } from '../data/projects'

const filters = ['All', 'Fintech B2B', 'Fintech Consumer', 'Social Impact', 'Edtech', 'Healthcare', 'Government', 'Academic']

export default function Work() {
  const [active, setActive] = useState('All')

  const filtered: Project[] = active === 'All' ? projects : projects.filter(p => p.type === active)

  return (
    <section className="section" style={{ paddingTop: 160 }}>
      <div className="container">
        {/* Header */}
        <div className="sec-head" style={{ marginBottom: 40 }}>
          <div>
            <div className="eyebrow" data-reveal="up">[ Portfolio ]</div>
            <h1 className="h2" data-reveal="up" data-delay="80">
              All <span className="accent">work.</span>
            </h1>
          </div>
          <div className="sec-head__right" data-reveal="up" data-delay="160">
            {projects.length} case studies across fintech, healthcare, government, and edtech. Each one shows the full arc — research, decisions, and measurable outcomes.
          </div>
        </div>

        {/* Filter pills */}
        <div className="work-filters" data-reveal="up" data-delay="200">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`work-filter${active === f ? ' is-active' : ''}`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="work-grid">
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} variant="grid" />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="work-empty">No projects in this category yet.</div>
        )}
      </div>
    </section>
  )
}
