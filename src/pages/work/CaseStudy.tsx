import { useParams, Link, Navigate } from 'react-router-dom'
import { getProject, type Persona } from '../../data/projects'

const typeColors: Record<string, string> = {
  'Fintech B2B': 'bg-blue-50 text-blue-700 border-blue-200',
  'Fintech Consumer': 'bg-indigo-50 text-indigo-700 border-indigo-200',
  'Social Impact': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Edtech': 'bg-purple-50 text-purple-700 border-purple-200',
  'Healthcare': 'bg-rose-50 text-rose-700 border-rose-200',
  'Government': 'bg-amber-50 text-amber-700 border-amber-200',
  'Academic': 'bg-gray-50 text-gray-600 border-gray-200',
}

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const project = getProject(slug ?? '')

  if (!project) return <Navigate to="/work" replace />

  const colorClass = typeColors[project.type] ?? 'bg-gray-50 text-gray-600 border-gray-200'

  return (
    <article className="pt-28 pb-20">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <Link to="/work" className="text-sm text-muted hover:text-accent transition-colors flex items-center gap-1 mb-8">
          ← Back to work
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${colorClass}`}>
            {project.type}
          </span>
          {project.niche.map(n => (
            <span key={n} className="text-xs text-muted">{n}</span>
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-4">{project.title}</h1>
        <p className="text-lg text-muted max-w-2xl leading-relaxed mb-8">{project.tagline}</p>

        {/* Meta grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-t border-b border-border">
          {[
            { label: 'Client', value: project.client },
            { label: 'Role', value: project.role },
            { label: 'Timeline', value: project.duration },
            { label: 'Tools', value: project.tools.join(', ') },
            ...(project.overview ? [
              { label: 'Team', value: project.overview.team },
              { label: 'Industry', value: project.overview.industry },
            ] : []),
          ].map(m => (
            <div key={m.label}>
              <p className="text-xs font-medium uppercase tracking-widest text-muted mb-1">{m.label}</p>
              <p className="text-sm text-ink">{m.value}</p>
            </div>
          ))}
        </div>

        {/* Status banner */}
        {project.overview?.status && (
          <div className="mt-4 inline-flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-800">
            <span className="mt-0.5">⏸</span>
            <span>{project.overview.status}</span>
          </div>
        )}

        {project.prototype && (
          <div className="mt-6">
            <a
              href={project.prototype}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-paper px-5 py-2.5 rounded-full text-sm font-medium hover:bg-ink transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View live prototype
            </a>
          </div>
        )}
      </div>

      {/* Metrics bar */}
      <div className="bg-ink py-10 mb-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-widest text-paper/40 mb-6">Impact & outcomes</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.metrics.map(m => (
              <div key={m.label}>
                <p className="text-xl md:text-2xl font-bold text-paper mb-1">{m.value}</p>
                <p className="text-xs text-paper/50 leading-snug">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 space-y-16">

        {/* Background — only if extended data present */}
        {project.background && (
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-8">Background &amp; inspiration</p>
            <div className="space-y-10">
              {[
                { heading: 'Understanding Dementia Care Needs', body: project.background.understandingNeeds },
                { heading: 'Personal Drive and Research Insights', body: project.background.personalDrive },
                { heading: 'Embracing Innovative Methods', body: project.background.innovativeMethods },
              ].map(({ heading, body }) => (
                <div key={heading}>
                  <h3 className="font-semibold text-ink text-base mb-3">{heading}</h3>
                  <p className="text-muted leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Problem */}
        <section>
          <p className="text-xs font-medium uppercase tracking-widest text-muted mb-4">The problem</p>
          <div className="space-y-4">
            {project.problem.split('\n\n').map((para, i) => (
              <p key={i} className={`leading-relaxed ${i === project.problem.split('\n\n').length - 1 ? 'text-accent font-medium italic' : 'text-muted'}`}>
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Key insight */}
        <section className="bg-accent-light border border-blue-200 rounded-2xl p-8">
          <p className="text-xs font-medium uppercase tracking-widest text-accent mb-3">Key insight</p>
          <p className="text-ink text-lg font-medium leading-relaxed">"{project.insight}"</p>
        </section>

        {/* Personas — only if present */}
        {project.personas && (
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-6">User personas</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.personas.map((persona: Persona) => (
                <div key={persona.name} className="border border-border rounded-2xl overflow-hidden">
                  {persona.photo && (
                    <div className="h-44 overflow-hidden bg-paper">
                      <img
                        src={persona.photo}
                        alt={persona.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  )}
                  <div className="p-6 space-y-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-muted mb-1">{persona.type}</p>
                    <h3 className="font-bold text-ink text-lg">{persona.name}, {persona.age}</h3>
                    <p className="text-muted text-sm mt-1 leading-relaxed">{persona.description}</p>
                  </div>
                  <div className="space-y-4 pt-4 border-t border-border">
                    <div>
                      <p className="text-xs font-semibold text-ink mb-2">Needs</p>
                      <ul className="space-y-1">
                        {persona.needs.map(n => (
                          <li key={n} className="text-sm text-muted flex items-start gap-2">
                            <span className="text-accent mt-0.5 flex-shrink-0">✓</span>{n}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-ink mb-2">Frustrations</p>
                      <ul className="space-y-1">
                        {persona.frustrations.map(f => (
                          <li key={f} className="text-sm text-muted flex items-start gap-2">
                            <span className="text-rose-400 mt-0.5 flex-shrink-0">✕</span>{f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-paper rounded-xl p-3">
                      <p className="text-xs font-semibold text-ink mb-1">Goal</p>
                      <p className="text-sm text-muted italic">"{persona.goal}"</p>
                    </div>
                  </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Process */}
        <section>
          <p className="text-xs font-medium uppercase tracking-widest text-muted mb-6">Design process</p>
          <div className="space-y-6">
            {project.process.map((step, i) => (
              <div key={step.step} className="flex gap-5">
                <div className="flex-shrink-0 w-8 h-8 bg-paper border border-border rounded-full flex items-center justify-center text-xs font-semibold text-muted">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-ink mb-1">{step.step}</h3>
                  <p className="text-muted text-sm leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Prototype testing — only if present */}
        {project.testing && (
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-6">Prototype testing</p>
            <div className="space-y-6">
              <div className="border border-border rounded-2xl p-6">
                <h3 className="font-semibold text-ink mb-2">What we tested</h3>
                <p className="text-muted text-sm mb-4">{project.testing.description}</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium uppercase tracking-widest text-muted">Participants</span>
                  <span className="text-xs bg-paper border border-border rounded-full px-3 py-1 text-ink">{project.testing.participants}</span>
                </div>
                <p className="text-xs font-semibold text-ink mb-2">Key questions</p>
                <ul className="space-y-1.5">
                  {project.testing.questions.map(q => (
                    <li key={q} className="text-sm text-muted flex items-start gap-2">
                      <span className="text-muted mt-0.5 flex-shrink-0">→</span>{q}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                  <p className="text-xs font-semibold text-emerald-800 uppercase tracking-widest mb-3">What worked well</p>
                  <ul className="space-y-2">
                    {project.testing.worked.map(w => (
                      <li key={w} className="text-sm text-emerald-900 flex items-start gap-2">
                        <span className="mt-0.5 flex-shrink-0">✓</span>{w}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6">
                  <p className="text-xs font-semibold text-rose-800 uppercase tracking-widest mb-3">What needed to change</p>
                  <ul className="space-y-2">
                    {project.testing.changed.map(c => (
                      <li key={c} className="text-sm text-rose-900 flex items-start gap-2">
                        <span className="mt-0.5 flex-shrink-0">→</span>{c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-muted text-sm italic">{project.testing.outcome}</p>
            </div>
          </section>
        )}

        {/* Solution */}
        <section>
          <p className="text-xs font-medium uppercase tracking-widest text-muted mb-4">The solution</p>
          <p className="text-ink leading-relaxed">{project.solution}</p>
        </section>

        {/* Outcomes — only if present */}
        {project.outcomes && (
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-6">Outcomes &amp; impact</p>
            <p className="text-muted leading-relaxed mb-6">{project.outcomes.summary}</p>
            <ul className="space-y-3 mb-8">
              {project.outcomes.keyOutcomes.map(o => (
                <li key={o} className="flex items-start gap-3 text-sm text-ink">
                  <span className="w-5 h-5 rounded-full bg-accent-light border border-blue-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-accent text-xs">✓</span>
                  </span>
                  {o}
                </li>
              ))}
            </ul>
            <div className="bg-ink rounded-2xl p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-paper/40 mb-3">What I learned</p>
              <p className="text-paper/80 leading-relaxed">{project.outcomes.learned}</p>
            </div>
          </section>
        )}

        {/* Gallery — prototype & research images */}
        {project.gallery && (
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-6">Prototype &amp; process</p>
            <div className="space-y-4">
              {project.gallery.map((item, i) => (
                <figure key={i} className="rounded-2xl overflow-hidden border border-border">
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full object-cover"
                    style={{ maxHeight: item.type === 'prototype' ? '480px' : '360px', objectPosition: 'top' }}
                  />
                  <figcaption className="px-4 py-3 bg-paper text-xs text-muted leading-relaxed">
                    <span className={`inline-block mr-2 px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wide ${
                      item.type === 'prototype' ? 'bg-blue-50 text-blue-600' :
                      item.type === 'storyboard' ? 'bg-emerald-50 text-emerald-700' :
                      'bg-amber-50 text-amber-700'
                    }`}>{item.type}</span>
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Takeaway */}
        <section className="border-l-4 border-accent pl-6">
          <p className="text-xs font-medium uppercase tracking-widest text-muted mb-3">Key takeaway</p>
          <blockquote className="text-ink text-lg leading-relaxed font-medium">
            "{project.takeaway}"
          </blockquote>
        </section>

        {/* Tags */}
        <section className="flex flex-wrap gap-2 pt-4 border-t border-border">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs bg-white border border-border rounded-md px-3 py-1.5 text-muted">
              {tag}
            </span>
          ))}
        </section>

        {/* Nav between case studies */}
        <div className="flex justify-between pt-8 border-t border-border">
          <Link to="/work" className="text-sm font-medium text-accent hover:underline">
            ← All projects
          </Link>
          <a
            href="mailto:ishwaryasuresh97@gmail.com"
            className="text-sm font-medium bg-ink text-paper px-5 py-2 rounded-full hover:bg-accent transition-colors"
          >
            Work together →
          </a>
        </div>
      </div>
    </article>
  )
}
