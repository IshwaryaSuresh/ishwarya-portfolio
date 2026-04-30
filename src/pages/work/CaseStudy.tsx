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
        <a href="/#work" className="text-sm text-muted hover:text-accent transition-colors flex items-center gap-1 mb-8">
          ← Back to work
        </a>

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

        {/* Hero image */}
        {project.heroImage && (
          <div className="mb-8 rounded-2xl overflow-hidden border border-border">
            <img
              src={project.heroImage}
              alt={`${project.title} — prototype overview`}
              className="w-full object-contain bg-paper"
              style={{ maxHeight: '520px' }}
            />
          </div>
        )}

        {/* Meta grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-t border-b border-border">
          {[
            { label: 'Client', value: project.client },
            { label: 'Role', value: project.role },
            { label: 'Timeline', value: project.duration },
            { label: 'Tools', value: project.tools.join(', ') },
            ...(project.overview ? [
              { label: 'Collaborators', value: project.overview.team },
              { label: 'Industry', value: project.overview.industry },
              ...(project.overview.recognition ? [{ label: 'Recognition', value: project.overview.recognition }] : []),
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

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 space-y-16">

        {/* Background — only if extended data present */}
        {project.background && (
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-8">Background &amp; inspiration</p>
            <div className="space-y-10">
              <div>
                <h3 className="font-semibold text-ink text-base mb-3">{project.background.understandingNeedsTitle ?? 'Understanding the Challenge'}</h3>
                {project.background.understandingNeeds.split('\n\n').map((para, i) => (
                  <p key={i} className="text-muted leading-relaxed mb-3 last:mb-0">{para}</p>
                ))}
              </div>
              <blockquote className="border-l-4 border-accent pl-6 py-2">
                <p className="text-ink text-lg font-medium leading-relaxed italic">"{project.background.personalDrive}"</p>
              </blockquote>
              <div>
                <h3 className="font-semibold text-ink text-base mb-3">Embracing Innovative Methods</h3>
                <p className="text-muted leading-relaxed">{project.background.innovativeMethods}</p>
              </div>
            </div>
          </section>
        )}

        {/* Zine inspiration — only if present */}
        {project.zineInspiration && (
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-2">The 8-fold zine</p>
            <p className="text-muted leading-relaxed mb-8">
              The 8-fold zine, made from a single sheet of A4 folded into 8 panels, became the structural
              inspiration for the app's interaction model. Its non-linear, open-ended, low-pressure format
              aligned closely with how PwD engage: no right answers, no fixed sequence, just prompts
              that invite participation.
            </p>

            <div className="grid grid-cols-3 gap-3 mb-8">
              {project.zineInspiration.references.map((ref, i) => (
                <figure key={i} className="rounded-xl overflow-hidden border border-border">
                  <div className="h-40 overflow-hidden bg-paper">
                    <img src={ref.src} alt={ref.caption} className="w-full h-full object-cover" />
                  </div>
                  <figcaption className="px-3 py-2 bg-paper text-[11px] text-muted leading-snug">{ref.caption}</figcaption>
                </figure>
              ))}
            </div>

            <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">Zine-inspired prompt cards</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {project.zineInspiration.mockups.map((m, i) => (
                <figure key={i} className="rounded-xl overflow-hidden border border-border">
                  <div className="h-36 overflow-hidden bg-paper">
                    <img src={m.src} alt={m.caption} className="w-full h-full object-cover" />
                  </div>
                  <figcaption className="px-3 py-2 bg-paper text-[11px] text-muted leading-snug">{m.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Desk Research — only if present */}
        {project.deskResearch && (
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-6">Discovery</p>
            <p className="text-muted leading-relaxed mb-8">{project.deskResearch.summary}</p>

            {/* Stat callouts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {project.deskResearch.stats.map(s => (
                <div key={s.label} className="bg-paper border border-border rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-ink mb-1">{s.value}</p>
                  <p className="text-xs text-muted leading-snug">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Findings list */}
            <ul className="space-y-3 mb-6">
              {project.deskResearch.findings.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted">
                  <span className="w-5 h-5 rounded-full bg-paper border border-border flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-semibold text-ink">{i + 1}</span>
                  {f}
                </li>
              ))}
            </ul>

            {/* Gap callout */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">Research gap identified</p>
              <p className="text-amber-900 text-sm leading-relaxed">{project.deskResearch.gap}</p>
            </div>

            {/* Key reading */}
            {project.deskResearch.books && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-5">Key reading</p>
                <div className="space-y-4">
                  {project.deskResearch.books.map(book => (
                    <div key={book.title} className="flex gap-4 items-start border border-border rounded-2xl p-4 bg-paper">
                      <img
                        src={book.src}
                        alt={book.title}
                        className="w-14 h-20 object-cover rounded-lg flex-shrink-0 shadow-sm"
                      />
                      <div>
                        <p className="font-semibold text-ink text-sm leading-snug">{book.title}</p>
                        <p className="text-xs text-muted mb-2">{book.author}</p>
                        <p className="text-xs text-muted leading-relaxed">{book.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
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

        {/* Metrics bar — placed after problem so the numbers have context */}
        <div className="bg-ink rounded-2xl py-8 px-8 -mx-0">
          <p className="text-xs font-medium uppercase tracking-widest text-paper/40 mb-6">Impact &amp; outcomes</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.metrics.map(m => (
              <div key={m.label}>
                <p className="text-xl md:text-2xl font-bold text-paper mb-1">{m.value}</p>
                <p className="text-xs text-paper/50 leading-snug">{m.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key insight */}
        <section className="bg-accent-light border border-blue-200 rounded-2xl p-8">
          <p className="text-xs font-medium uppercase tracking-widest text-accent mb-3">Key insight</p>
          <p className="text-ink text-lg font-medium leading-relaxed">"{project.insight}"</p>
        </section>

        {/* Personas — only if present */}
        {project.personas && (
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-6">User personas</p>
            <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory">
              {project.personas.map((persona: Persona) => (
                <div key={persona.name} className="flex-shrink-0 w-72 border border-border rounded-2xl overflow-hidden snap-start">
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
            {project.personas.length > 1 && (
              <p className="text-xs text-muted mt-3 text-center">← scroll to see all personas →</p>
            )}
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
                <div className="flex-1">
                  <h3 className="font-semibold text-ink mb-1">{step.step}</h3>
                  <p className="text-muted text-sm leading-relaxed">{step.detail}</p>
                  {step.image && (
                    <figure className="mt-4 rounded-xl overflow-hidden border border-border">
                      <img
                        src={step.image}
                        alt={step.imageCaption ?? step.step}
                        className="w-full object-contain bg-paper"
                        style={{ maxHeight: '520px' }}
                      />
                      {step.imageCaption && (
                        <figcaption className="px-3 py-2.5 bg-paper text-xs text-muted leading-relaxed border-t border-border">
                          {step.imageCaption}
                        </figcaption>
                      )}
                    </figure>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process artifacts — user flows, audits, component studies */}
        {project.processArtifacts && (
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-2">Discovery — process artifacts</p>
            <p className="text-sm text-muted mb-6">Visual outputs from the audit and mapping work — user flows, component studies, and redesign proposals.</p>
            <div className="space-y-4">
              {project.processArtifacts.map((item, i) => (
                <figure key={i} className="rounded-2xl overflow-hidden border border-border">
                  <div className="px-4 pt-3 pb-1 bg-paper flex items-center gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-widest bg-ink text-paper rounded px-2 py-0.5">{item.label}</span>
                  </div>
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full object-contain bg-paper"
                    style={{ maxHeight: '640px' }}
                  />
                  <figcaption className="px-4 py-3 bg-paper text-xs text-muted leading-relaxed border-t border-border">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Design decisions — only if present */}
        {project.designDecisions && (
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-6">Design decisions</p>
            <div className="space-y-5">
              {project.designDecisions.map((d, i) => (
                <div key={i} className="border border-border rounded-2xl p-6">
                  <p className="font-semibold text-ink mb-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent-light border border-blue-200 text-accent text-xs font-bold mr-3 flex-shrink-0">{i + 1}</span>
                    {d.decision}
                  </p>
                  <div className="ml-9 border-l-2 border-border pl-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-1">Rationale</p>
                    <p className="text-sm text-muted leading-relaxed">{d.rationale}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

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

        {/* Workshop images */}
        {project.workshops && (
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-1">Ethnographic Study</p>
            <p className="text-xs text-muted italic mb-6">Images showing participants have been blurred to protect privacy.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {project.workshops.map((item, i) => (
                <figure key={i} className="rounded-xl overflow-hidden border border-border group">
                  <div className="h-56 overflow-hidden bg-paper">
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="px-3 py-2 bg-paper text-[11px] text-muted leading-snug">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Gallery — prototype & research images */}
        {project.gallery && (
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-6">Prototype &amp; process</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.gallery.map((item, i) => (
                <figure key={i} className="rounded-2xl overflow-hidden border border-border flex flex-col">
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full object-contain bg-paper flex-1"
                    style={{ maxHeight: '400px' }}
                  />
                  <figcaption className="px-4 py-3 bg-paper text-xs text-muted leading-relaxed border-t border-border">
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
