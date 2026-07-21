import { useParams, Link, Navigate } from 'react-router-dom'
import { getProject, type Persona, type Project } from '../../data/projects'

type CompetitiveTool = NonNullable<NonNullable<Project['deskResearch']>['competitiveAudit']>['tools'][number]

function CompetitiveMatrix({ tools }: { tools: CompetitiveTool[] }) {
  const features = tools[0]?.features.map(f => f.label) ?? []

  const scoreConfig = {
    full:    { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', icon: '✓', label: 'Yes' },
    partial: { bg: 'bg-amber-50',   text: 'text-amber-700',   border: 'border-amber-200',   icon: '◐', label: 'Partial' },
    none:    { bg: 'bg-rose-50',    text: 'text-rose-600',    border: 'border-rose-200',    icon: '✕', label: 'No' },
  }

  return (
    <div className="mb-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-5">Competitive audit</p>

      {/* Matrix table */}
      <div className="overflow-x-auto rounded-2xl border border-border mb-5">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-paper border-b border-border">
              <th className="text-left px-5 py-4 text-xs font-semibold text-muted uppercase tracking-wide w-40">Capability</th>
              {tools.map(t => (
                <th key={t.name} className="px-4 py-4 text-center min-w-[130px]">
                  <div className="font-bold text-ink text-sm leading-tight">{t.name}</div>
                  <div className="text-xs text-muted font-normal mt-0.5">{t.category}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feat, fi) => (
              <tr key={feat} className="border-b border-border last:border-0 even:bg-paper/40">
                <td className="px-5 py-3.5 text-xs font-medium text-muted whitespace-nowrap">{feat}</td>
                {tools.map(t => {
                  const score = t.features[fi]?.score ?? 'none'
                  const c = scoreConfig[score]
                  return (
                    <td key={t.name} className="px-4 py-3.5 text-center">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border ${c.bg} ${c.text} ${c.border}`}>
                        <span>{c.icon}</span>
                        <span>{c.label}</span>
                      </span>
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tool verdict cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {tools.map(t => (
          <div key={t.name} className="bg-paper border border-border rounded-xl p-4">
            <div className="flex items-baseline gap-2 mb-1.5">
              <span className="font-bold text-ink text-sm">{t.name}</span>
              <span className="text-xs text-accent font-medium">{t.verdict}</span>
            </div>
            <p className="text-xs text-muted leading-relaxed">{t.gap}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProcessStep({ step, index }: { step: { step: string; detail: string; image?: string; imageCaption?: string; phase?: string }; index: number }) {
  return (
    <div className="flex gap-5">
      <div className="flex-shrink-0 w-8 h-8 bg-paper border border-border rounded-full flex items-center justify-center text-xs font-semibold text-muted">
        {index + 1}
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
  )
}

function PersonaCard({ persona }: { persona: Persona }) {
  return (
    <div className="border border-border rounded-2xl overflow-hidden">
      {persona.photo && (
        <div className="h-52 overflow-hidden bg-paper">
          <img
            src={persona.photo}
            alt={persona.name}
            className="w-full h-full object-cover"
            style={{ objectPosition: persona.photoPosition ?? '50% 20%' }}
          />
        </div>
      )}
      <div className="p-5 space-y-4">
        <div>
          <h4 className="font-bold text-ink text-base">{persona.name}, {persona.age}</h4>
          <p className="text-xs font-medium uppercase tracking-widest text-accent mt-1">{persona.type}</p>
          <p className="text-muted text-sm mt-2 leading-relaxed">{persona.description}</p>
        </div>
        <div className="pt-4 border-t border-border space-y-4">
          <div>
            <p className="text-xs font-semibold text-ink mb-2">Needs</p>
            <ul className="space-y-1.5">
              {persona.needs.map(n => (
                <li key={n} className="flex items-start gap-2 text-sm text-muted">
                  <span className="text-accent mt-0.5 flex-shrink-0">✓</span>{n}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-ink mb-2">Frustrations</p>
            <ul className="space-y-1.5">
              {persona.frustrations.map(f => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted">
                  <span className="text-rose-400 mt-0.5 flex-shrink-0">✕</span>{f}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-paper rounded-xl p-3">
            <p className="text-sm text-muted italic">"{persona.goal}"</p>
          </div>
        </div>
        {persona.reflection && (
          <div className="pt-4 border-t border-border">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1.5">Design reflection</p>
            <p className="text-sm text-muted leading-relaxed">{persona.reflection}</p>
          </div>
        )}
      </div>
    </div>
  )
}

function FragmentRow({
  row,
  columns,
  cellBg,
  laneLabel,
  divider,
}: {
  row: { label: string; kind: 'time' | 'evidence' | 'customer' | 'frontstage' | 'technology' | 'backstage' | 'support'; cells: (string | null)[] }
  columns: number
  cellBg: string
  laneLabel: string
  divider?: { label: string; style: 'dashed' | 'solid' }
}) {
  const isMeta = row.kind === 'time' || row.kind === 'evidence'
  return (
    <>
      <div className={`px-2 py-2 text-[10px] font-semibold uppercase tracking-widest self-center ${laneLabel}`}>
        {row.label}
      </div>
      {row.cells.map((cell, ci) => (
        <div key={ci} className="px-1 py-1">
          {cell ? (
            isMeta ? (
              <div className="text-[11px] text-muted text-center leading-snug px-2 py-1.5">{cell}</div>
            ) : (
              <div className={`text-[11px] text-center leading-snug rounded-md border px-2 py-2 ${cellBg}`}>
                {cell}
              </div>
            )
          ) : null}
        </div>
      ))}
      {divider && (
        <>
          <div className="col-span-1 pr-2 py-2 text-[9px] font-semibold uppercase tracking-widest text-ink/60 text-right self-center">
            {divider.label}
          </div>
          <div
            className={`col-span-${columns} self-center border-t ${divider.style === 'dashed' ? 'border-dashed border-ink/40' : 'border-solid border-ink/70'}`}
            style={{ gridColumn: `span ${columns} / span ${columns}` }}
          />
        </>
      )}
    </>
  )
}

const typeColors: Record<string, string> = {
  'Fintech B2B': 'bg-paper text-ink border-border',
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
  if (project.comingSoon) return <Navigate to="/work" replace />

  const colorClass = typeColors[project.type] ?? 'bg-gray-50 text-gray-600 border-gray-200'

  return (
    <article className="case-study pt-28 pb-20">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <a href="/#work" className="font-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors inline-flex items-center gap-2 mb-10">
          <span>←</span> Back to work
        </a>

        <div className="flex items-center gap-3 mb-5 font-mono text-[11px] tracking-widest uppercase text-muted">
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            {project.type}
          </span>
          {project.niche.filter(n => n !== project.type).map(n => (
            <span key={n} className="text-muted">· {n}</span>
          ))}
        </div>

        <h1 className="font-display font-normal text-ink mb-5 leading-[0.95] tracking-tight"
            style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}>
          {project.title}
        </h1>
        <p className="text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-3xl">{project.tagline}</p>

        {/* Hero image */}
        {project.heroImage && (
          <div className="mb-8 rounded-2xl overflow-hidden border border-border bg-ink">
            <img
              src={project.heroImage}
              alt={`${project.title}, prototype overview`}
              className="w-full object-cover"
              style={{ maxHeight: '520px' }}
            />
          </div>
        )}

        {/* Meta grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-t border-b border-border">
          {[
            { label: 'Client', value: project.client },
            { label: 'Role', value: project.role },
            ...(project.duration ? [{ label: 'Timeline', value: project.duration }] : []),
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

        {(project.prototype || project.wip) && (
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.prototype && (
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
            )}
            {project.wip && (
              <span className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 text-violet-700 px-4 py-2.5 rounded-full text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                {project.wip}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 space-y-16">

        {/* Background, only if extended data present */}
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


        {/* Desk Research, only if present */}
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

            {/* Competitive audit matrix (if present) or plain findings list */}
            {project.deskResearch.competitiveAudit
              ? <CompetitiveMatrix tools={project.deskResearch.competitiveAudit.tools} />
              : (
                <ul className="space-y-3 mb-6">
                  {project.deskResearch.findings.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted">
                      <span className="w-5 h-5 rounded-full bg-paper border border-border flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-semibold text-ink">{i + 1}</span>
                      {f}
                    </li>
                  ))}
                </ul>
              )
            }

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

        {/* Competitive analysis, only if present */}
        {project.competitiveAnalysis && (
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-3">Competitive analysis</p>
            <p className="text-muted leading-relaxed mb-8">{project.competitiveAnalysis.intro}</p>
            <CompetitiveMatrix tools={project.competitiveAnalysis.tools} />
            <div className="bg-accent-light border border-blue-200 rounded-2xl p-6 mt-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">The opportunity</p>
              <p className="text-ink text-sm leading-relaxed">{project.competitiveAnalysis.takeaway}</p>
            </div>
          </section>
        )}

        {/* Ethnographic study, only if present */}
        {project.workshops && (
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-2">{project.workshopsTitle ?? 'Ethnographic study'}</p>
            {project.workshopsIntro && (
              <p className="text-muted leading-relaxed mb-6">{project.workshopsIntro}</p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.workshops.map((item, i) => (
                <figure key={i} className="rounded-xl overflow-hidden border border-border group">
                  <div className="h-72 overflow-hidden bg-paper">
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="px-4 py-3 bg-paper text-xs text-muted leading-snug border-t border-border">
                    {item.caption}
                  </figcaption>
                </figure>
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

        {/* Metrics bar, placed after problem so the numbers have context */}
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

        {/* Business outcome translation, only if present */}
        {project.businessOutcomes && (
          <section className="border border-accent/30 rounded-2xl p-8 bg-accent-light/50">
            <p className="text-xs font-medium uppercase tracking-widest text-accent mb-5">What those numbers mean for the business</p>
            <div className="space-y-5">
              {project.businessOutcomes.map(o => (
                <div key={o.metric} className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-6">
                  <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold pt-1">{o.metric}</p>
                  <p className="text-ink leading-relaxed">{o.translation}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Key insight */}
        <section className="bg-accent-light border border-accent/30 rounded-2xl p-8">
          <p className="text-xs font-medium uppercase tracking-widest text-accent mb-3">Key insight</p>
          <p className="text-ink text-lg font-medium leading-relaxed">"{project.insight}"</p>
        </section>

        {/* Assumptions → findings → pivots. Numbered timeline by default; flat cards when assumptions.flat is set. */}
        {project.assumptions && (
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-2">
              {project.assumptions.flat ? 'Assumptions → findings → pivots' : 'Design process · assumption → finding → pivot'}
            </p>
            {project.assumptions.intro && <p className="text-muted leading-relaxed mb-8 max-w-3xl">{project.assumptions.intro}</p>}
            {project.assumptions.flat ? (
              <div className="space-y-4">
                {project.assumptions.items.map((it, i) => (
                  <div key={i} className="border border-border rounded-2xl overflow-hidden">
                    <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
                      <div className="p-5 bg-paper">
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-rose-600 mb-2 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-400" /> Assumed
                        </p>
                        <p className="text-sm text-ink leading-relaxed">{it.assumption}</p>
                      </div>
                      <div className="p-5">
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-amber-600 mb-2 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Found
                        </p>
                        <p className="text-sm text-muted leading-relaxed">{it.finding}</p>
                      </div>
                      <div className="p-5 bg-accent-light/40">
                        <p className="text-[11px] font-semibold uppercase tracking-widest text-accent mb-2 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Pivoted
                        </p>
                        <p className="text-sm text-ink leading-relaxed font-medium">{it.pivot}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <ol className="relative">
                {project.assumptions.items.map((it, i) => {
                  const isLast = i === project.assumptions!.items.length - 1
                  return (
                    <li key={i} className={`relative pl-12 ${isLast ? '' : 'pb-8'}`}>
                      {!isLast && (
                        <span aria-hidden className="absolute left-4 top-9 h-full w-px -translate-x-1/2 bg-border" />
                      )}
                      <span className="absolute left-0 top-0 w-8 h-8 rounded-full bg-accent text-paper grid place-items-center text-sm font-semibold shadow-sm">
                        {i + 1}
                      </span>
                      <div className="border border-border rounded-2xl overflow-hidden">
                        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
                          <div className="p-4 bg-paper">
                            <p className="text-[11px] font-semibold uppercase tracking-widest text-rose-600 mb-1.5 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" /> Assumed
                            </p>
                            <p className="text-sm text-ink leading-relaxed">{it.assumption}</p>
                          </div>
                          <div className="p-4">
                            <p className="text-[11px] font-semibold uppercase tracking-widest text-amber-600 mb-1.5 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Found
                            </p>
                            <p className="text-sm text-muted leading-relaxed">{it.finding}</p>
                          </div>
                          <div className="p-4 bg-accent-light/40">
                            <p className="text-[11px] font-semibold uppercase tracking-widest text-accent mb-1.5 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Pivoted
                            </p>
                            <p className="text-sm text-ink leading-relaxed font-medium">{it.pivot}</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ol>
            )}
          </section>
        )}

        {/* Service blueprint, as-is vs refined. Only if present. */}
        {project.serviceMap && (
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-2">Service blueprint</p>
            {project.serviceMap.intro && (
              <p className="text-muted leading-relaxed mb-8 max-w-3xl">{project.serviceMap.intro}</p>
            )}
            <div className="space-y-10">
              {[project.serviceMap.asIs, project.serviceMap.refined].map((bp) => {
                const isAsIs = bp.tone === 'as-is'
                const accentBorder = isAsIs ? 'border-rose-300' : 'border-accent/40'
                const accentBg = isAsIs ? 'bg-rose-50/30' : 'bg-accent-light/30'
                const cellBg = isAsIs ? 'bg-rose-50 border-rose-200 text-rose-900' : 'bg-accent-light border-blue-200 text-ink'
                const laneLabel = isAsIs ? 'text-rose-600' : 'text-accent'
                return (
                  <div key={bp.tone} className={`border rounded-2xl p-5 md:p-6 ${accentBorder} ${accentBg}`}>
                    <div className="mb-5">
                      <p className={`text-[11px] font-semibold uppercase tracking-widest mb-1 ${laneLabel}`}>
                        {isAsIs ? 'Before' : 'After'}
                      </p>
                      <p className="font-display text-xl text-ink leading-tight">{bp.title}</p>
                      {bp.subtitle && <p className="text-sm text-muted mt-1 leading-relaxed max-w-3xl">{bp.subtitle}</p>}
                    </div>

                    <div className="overflow-x-auto -mx-5 md:-mx-6 px-5 md:px-6">
                      <div
                        className="min-w-[860px] grid gap-y-2"
                        style={{ gridTemplateColumns: `140px repeat(${bp.columns.length}, minmax(120px, 1fr))` }}
                      >
                        {/* Column headers */}
                        <div />
                        {bp.columns.map((col, ci) => (
                          <div key={ci} className="px-2 pb-2 text-[10px] font-semibold uppercase tracking-widest text-ink text-center">
                            {col}
                          </div>
                        ))}

                        {/* Rows with dividers */}
                        {bp.rows.map((row, ri) => {
                          const divider = bp.dividers.find(d => d.afterRowIndex === ri)
                          return (
                            <FragmentRow key={ri} row={row} columns={bp.columns.length} cellBg={cellBg} laneLabel={laneLabel} divider={divider} />
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* Roles & personas, only if present */}
        {project.personas && (
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-2">{project.personaRoles ? 'Roles & personas' : 'User personas'}</p>
            {project.personaRoles && (
              <p className="text-muted leading-relaxed mb-8">Three distinct roles shaped the design, each represented by a persona grounded in the co-design and ethnographic work.</p>
            )}
            {project.personaRoles ? (
              (() => {
                const roleOrder: string[] = []
                const byRole: Record<string, Persona[]> = {}
                project.personas.forEach(p => {
                  const role = p.type.includes(' - ') ? p.type.split(' - ')[1] : p.type
                  if (!byRole[role]) { byRole[role] = []; roleOrder.push(role) }
                  byRole[role].push(p)
                })
                return (
                  <div className="space-y-10">
                    {roleOrder.map(role => {
                      const meta = project.personaRoles?.find(r => r.role === role)
                      return (
                        <div key={role}>
                          <div className="mb-4 pb-3 border-b border-border">
                            <div className="flex items-baseline gap-3 flex-wrap">
                              <h3 className="font-bold text-ink text-lg">{role}</h3>
                              {meta && <span className="text-xs font-medium uppercase tracking-widest text-accent">{meta.who}</span>}
                            </div>
                            {meta && <p className="text-sm text-muted mt-1 leading-relaxed">{meta.definition}</p>}
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {byRole[role].map(persona => (
                              <PersonaCard key={persona.name} persona={persona} />
                            ))}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )
              })()
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {project.personas.map(persona => (
                  <PersonaCard key={persona.name} persona={persona} />
                ))}
              </div>
            )}
          </section>
        )}

        {/* User journey, only if present */}
        {project.userJourney && (
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-2">User journey</p>
            {project.userJourney.intro && <p className="text-muted leading-relaxed mb-8">{project.userJourney.intro}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.userJourney.stages.map((s, i) => (
                <div key={s.stage} className="border border-border rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-full bg-ink text-paper text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                    <h3 className="font-bold text-ink text-sm">{s.stage}</h3>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-3">{s.action}</p>
                  <div className="space-y-1.5 pt-3 border-t border-border">
                    <p className="text-xs text-muted"><span className="font-semibold text-ink">Feeling:</span> {s.feeling}</p>
                    <p className="text-xs text-muted"><span className="font-semibold text-ink">Design response:</span> {s.opportunity}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Process */}
        <section>
          <p className="text-xs font-medium uppercase tracking-widest text-muted mb-6">{project.processTitle ?? 'Design process'}</p>
          {(() => {
            const hasPhases = project.process.some(s => s.phase)
            if (!hasPhases) {
              return (
                <div className="space-y-6">
                  {project.process.map((step, i) => (
                    <ProcessStep key={step.step} step={step} index={i} />
                  ))}
                </div>
              )
            }
            // Group by phase, preserving order of first appearance
            const phases: string[] = []
            const grouped: Record<string, typeof project.process> = {}
            project.process.forEach(step => {
              const p = step.phase ?? 'Other'
              if (!grouped[p]) { grouped[p] = []; phases.push(p) }
              grouped[p].push(step)
            })
            let globalIndex = 0
            return (
              <div className="space-y-10">
                {phases.map(phase => (
                  <div key={phase}>
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-5 pb-2 border-b border-border">{phase}</p>
                    <div className="space-y-6">
                      {grouped[phase].map(step => {
                        const idx = globalIndex++
                        return <ProcessStep key={step.step} step={step} index={idx} />
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )
          })()}
        </section>

        {/* Process artifacts, user flows, audits, component studies */}
        {project.processArtifacts && (
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-2">Discovery, process artifacts</p>
            <p className="text-sm text-muted mb-6">Visual outputs from the audit and mapping work, user flows, component studies, and redesign proposals.</p>
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

        {/* Design decisions, only if present */}
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

        {/* Research ops, only if present */}
        {project.researchOps && (
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-2">Research ops</p>
            <p className="text-muted leading-relaxed mb-6">{project.researchOps.intro}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.researchOps.items.map(item => (
                <div key={item.label} className="border border-border rounded-2xl p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">{item.label}</p>
                  <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Prototype testing, only if present */}
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
              <div className={project.assumptions ? '' : 'grid grid-cols-1 md:grid-cols-2 gap-4'}>
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
                {!project.assumptions && (
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
                )}
              </div>
              {project.assumptions && (
                <p className="text-sm text-muted">The changes testing surfaced are unpacked in the <span className="text-ink font-medium">assumption → finding → pivot</span> section above.</p>
              )}
              <p className="text-muted text-sm italic">{project.testing.outcome}</p>
            </div>
          </section>
        )}

        {/* Solution */}
        <section>
          <p className="text-xs font-medium uppercase tracking-widest text-muted mb-4">The solution</p>
          <p className="text-ink leading-relaxed">{project.solution}</p>
        </section>

        {/* Trade-offs, what I cut and why. Only if present. */}
        {project.tradeoffs && (
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-2">Trade-offs &amp; what I cut</p>
            <p className="text-muted text-sm mb-6 leading-relaxed max-w-2xl">
              Every design decision in scope implies one outside of it. These are the things I deliberately chose not to build, and the reasoning behind each cut.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {project.tradeoffs.map(t => (
                <div key={t.decision} className="border border-border rounded-xl p-6 bg-paper">
                  <p className="font-display text-lg text-ink mb-2 leading-tight">{t.decision}</p>
                  <p className="text-sm text-muted leading-relaxed">{t.reasoning}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* AI in the process, only if present */}
        {project.aiProcess && (
          <section className="bg-ink rounded-2xl p-8 text-paper">
            <p className="text-xs font-medium uppercase tracking-widest text-accent-soft mb-5">AI in the design process</p>
            <p className="text-paper/85 leading-relaxed mb-8 max-w-3xl">{project.aiProcess.summary}</p>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-accent-soft mb-3">Used AI for</p>
                <ul className="space-y-2.5">
                  {project.aiProcess.used.map(u => (
                    <li key={u} className="text-sm text-paper/80 leading-relaxed flex gap-2">
                      <span className="text-accent-soft mt-1">+</span>
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-accent-soft mb-3">Kept by hand</p>
                <ul className="space-y-2.5">
                  {project.aiProcess.kept.map(k => (
                    <li key={k} className="text-sm text-paper/80 leading-relaxed flex gap-2">
                      <span className="text-accent-soft mt-1">·</span>
                      <span>{k}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-accent-soft mb-3">Rejected</p>
                <ul className="space-y-2.5">
                  {project.aiProcess.rejected.map(r => (
                    <li key={r} className="text-sm text-paper/80 leading-relaxed flex gap-2">
                      <span className="text-accent-soft mt-1">−</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* 8-fold zine - output artifact, only if present */}
        {project.zineInspiration && (
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-2">Physical output - the 8-fold zine</p>
            <p className="text-muted leading-relaxed mb-8">
              Once a session is complete, the app generates a printed template summarising the PwD's recorded story.
              The carer prints this and turns it into an activity in itself - folding a single A4 sheet into 8 panels
              to create a small, personal zine. The result is a tangible keepsake the PwD can take with them:
              their own creative story, made by their own hands, to be cherished.
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

            <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">Session output templates</p>
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

        {/* Gallery, prototype & research images */}
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
                    <span className="inline-block mr-2 text-[10px] font-semibold uppercase tracking-wide text-muted">{item.type}</span>
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Outcomes, only if present */}
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
