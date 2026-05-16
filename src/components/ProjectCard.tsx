import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

type Props = {
  project: Project
  index?: number
  variant?: 'grid' | 'featured'
}

export default function ProjectCard({ project, index = 0, variant = 'grid' }: Props) {
  const locked = project.comingSoon

  const body = variant === 'featured' ? (
    <>
      <div className="work-card__index">{String(index + 1).padStart(2, '0')}</div>
      <div className="work-card__body">
        <div className="work-card__eyebrow">
          <span className="work-card__dot" />
          {project.type}
          {project.niche.slice(0, 2).filter(n => n !== project.type).map(n => (
            <span key={n} className="work-card__niche">· {n}</span>
          ))}
        </div>
        <h3 className="work-card__title">{project.title}</h3>
        <p className="work-card__tagline">{project.tagline}</p>
        {project.metrics && project.metrics.length > 0 && (
          <div className="work-card__metrics">
            {project.metrics.slice(0, 2).map(m => (
              <div key={m.label} className="work-card__metric">
                <span className="work-card__metric-val">{m.value}</span>
                <span className="work-card__metric-lbl">{m.label}</span>
              </div>
            ))}
          </div>
        )}
        <span className="work-card__cta">
          {locked ? 'Case study coming soon' : 'View case study →'}
        </span>
      </div>
    </>
  ) : (
    <>
      <div className="work-card__top">
        <span className="work-card__eyebrow">
          <span className="work-card__dot" />
          {project.type}
        </span>
        <span className="work-card__year">{project.duration}</span>
      </div>
      <h3 className="work-card__title">{project.title}</h3>
      <p className="work-card__tagline">{project.tagline}</p>
      {project.tags && project.tags.length > 0 && (
        <div className="work-card__tags">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="work-card__tag">{tag}</span>
          ))}
        </div>
      )}
      {locked
        ? <span className="work-card__cta work-card__cta--locked">Case study coming soon</span>
        : <span className="work-card__cta">View case study →</span>}
    </>
  )

  const className = `work-card${variant === 'featured' ? ' work-card--featured' : ''}${locked ? ' work-card--locked' : ''}`
  const reveal = { 'data-reveal': 'up', 'data-delay': index * 60 }

  // If coming soon, render a non-clickable div instead of a Link
  if (locked) {
    return (
      <div className={className} {...reveal} aria-disabled="true">
        {body}
      </div>
    )
  }

  return (
    <Link to={`/work/${project.slug}`} className={className} {...reveal}>
      {body}
    </Link>
  )
}
