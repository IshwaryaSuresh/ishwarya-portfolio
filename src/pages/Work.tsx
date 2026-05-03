import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import type { Project } from '../data/projects'

const filters = ['All', 'Fintech B2B', 'Fintech Consumer', 'Social Impact', 'Edtech', 'Healthcare', 'Government', 'Academic']

export default function Work() {
  const [active, setActive] = useState('All')

  const filtered: Project[] = active === 'All' ? projects : projects.filter(p => p.type === active)

  return (
    <div className="pt-28 pb-20 px-6 max-w-6xl mx-auto">
      <div className="mb-10">
        <p className="text-xs font-medium uppercase tracking-widest text-muted mb-2">Portfolio</p>
        <h1 className="text-4xl font-bold text-ink mb-3">All work</h1>
        <p className="text-muted max-w-xl">
          {projects.length} case studies across fintech, healthcare, government, and edtech. Each one shows the full arc — research, design decisions, and measurable outcomes.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`text-sm px-4 py-2 rounded-full border transition-colors font-medium ${
              active === f
                ? 'bg-ink text-paper border-ink'
                : 'bg-white text-muted border-border hover:border-ink hover:text-ink'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map(project => (
          <ProjectCard key={project.slug} project={project} variant="grid" />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-muted">No projects found for this filter.</div>
      )}
    </div>
  )
}
