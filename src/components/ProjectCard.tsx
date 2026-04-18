import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

const typeColors: Record<string, string> = {
  'Fintech B2B': 'bg-blue-50 text-blue-700 border-blue-200',
  'Fintech Consumer': 'bg-indigo-50 text-indigo-700 border-indigo-200',
  'Social Impact': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Edtech': 'bg-purple-50 text-purple-700 border-purple-200',
  'Healthcare': 'bg-rose-50 text-rose-700 border-rose-200',
  'Government': 'bg-amber-50 text-amber-700 border-amber-200',
  'Academic': 'bg-gray-50 text-gray-600 border-gray-200',
}

type Props = {
  project: Project
  index?: number
  variant?: 'grid' | 'featured'
}

export default function ProjectCard({ project, index = 0, variant = 'grid' }: Props) {
  const colorClass = typeColors[project.type] ?? 'bg-gray-50 text-gray-600 border-gray-200'

  if (variant === 'featured') {
    return (
      <Link
        to={`/work/${project.slug}`}
        className="group flex flex-col md:flex-row gap-8 border border-border rounded-2xl p-8 hover:border-accent transition-all duration-300 hover:shadow-lg bg-white"
      >
        <div className="md:w-24 flex-shrink-0">
          <span className="text-4xl font-light text-muted/40">0{index + 1}</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${colorClass}`}>
              {project.type}
            </span>
            {project.niche.slice(0, 2).map(n => (
              <span key={n} className="text-xs text-muted">{n}</span>
            ))}
          </div>
          <h3 className="text-xl font-semibold text-ink mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-muted text-sm leading-relaxed mb-4">{project.tagline}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.metrics.slice(0, 2).map(m => (
              <div key={m.label} className="bg-paper border border-border rounded-lg px-3 py-1.5">
                <span className="text-xs font-semibold text-accent">{m.value}</span>
                <span className="text-xs text-muted ml-1.5">{m.label}</span>
              </div>
            ))}
          </div>
          <span className="text-sm font-medium text-accent group-hover:underline">
            View case study →
          </span>
        </div>
      </Link>
    )
  }

  return (
    <Link
      to={`/work/${project.slug}`}
      className="group flex flex-col border border-border rounded-2xl p-6 hover:border-accent transition-all duration-300 hover:shadow-lg bg-white"
    >
      <div className="flex items-center justify-between mb-4">
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${colorClass}`}>
          {project.type}
        </span>
        <span className="text-xs text-muted">{project.duration}</span>
      </div>
      <h3 className="text-lg font-semibold text-ink mb-2 group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{project.tagline}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.slice(0, 3).map(tag => (
          <span key={tag} className="text-xs bg-paper border border-border px-2 py-0.5 rounded-md text-muted">
            {tag}
          </span>
        ))}
      </div>
      <span className="text-sm font-medium text-accent group-hover:underline mt-auto">
        View case study →
      </span>
    </Link>
  )
}
