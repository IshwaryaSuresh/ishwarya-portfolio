import { useState, type ReactNode } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { getProject, type Persona, type Project, type StoryMoment } from '../../data/projects'
import Reveal from '../../components/Reveal'
import ScreenScroll from '../../components/ScreenScroll'

type CompetitiveTool = NonNullable<NonNullable<Project['deskResearch']>['competitiveAudit']>['tools'][number]

function CompetitiveMatrix({ tools, compact }: { tools: CompetitiveTool[]; compact?: boolean }) {
  const features = tools[0]?.features.map(f => f.label) ?? []

  const scoreConfig = {
    full:    { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', icon: '✓', label: 'Yes' },
    partial: { bg: 'bg-amber-50',   text: 'text-amber-700',   border: 'border-amber-200',   icon: '◐', label: 'Partial' },
    none:    { bg: 'bg-rose-50',    text: 'text-rose-600',    border: 'border-rose-200',    icon: '✕', label: 'No' },
  }

  return (
    <div className={compact ? '' : 'mb-8'}>
      {!compact && <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-5">Competitive audit</p>}

      {/* Matrix table */}
      <div className={`overflow-x-auto rounded-2xl border border-border bg-white ${compact ? '' : 'mb-5'}`}>
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
      {!compact && (
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
      )}
    </div>
  )
}

function StoryPersonaCard({ persona }: { persona: Persona }) {
  return (
    <div className="border border-border rounded-2xl overflow-hidden bg-paper h-full flex flex-col">
      {persona.photo && (
        <div className="h-36 overflow-hidden flex-shrink-0">
          <img
            src={persona.photo}
            alt={persona.name}
            className="w-full h-full object-cover"
            style={{ objectPosition: persona.photoPosition ?? '50% 20%' }}
          />
        </div>
      )}
      <div className="p-4 flex-1">
        <p className="font-bold text-ink text-sm">{persona.name}, {persona.age}</p>
        <p className="text-[10px] font-medium uppercase tracking-widest text-accent mt-0.5 mb-2">{persona.type}</p>
        <p className="text-xs text-muted leading-relaxed italic">{persona.goal}</p>
      </div>
    </div>
  )
}

function StoryStageHeader({ label, kicker, dark }: { label: string; kicker: string; dark?: boolean }) {
  return (
    <Reveal y={20}>
      <div className={`flex items-baseline gap-4 pb-4 mb-12 border-b ${dark ? 'border-white/15' : 'border-border'}`}>
        <h2 className={`font-display text-3xl md:text-4xl tracking-tight ${dark ? 'text-paper' : 'text-ink'}`}>{label}</h2>
        <span className={`ml-auto font-mono text-[11px] uppercase tracking-widest ${dark ? 'text-white/50' : 'text-muted'}`}>{kicker}</span>
      </div>
    </Reveal>
  )
}

// Inner container for full-width story sections, matching the page grid.
function StoryContainer({ children }: { children: ReactNode }) {
  return <div className="max-w-5xl mx-auto px-6">{children}</div>
}

function StoryAfp({ assumptions, dark }: { assumptions: NonNullable<Project['assumptions']>; dark?: boolean }) {
  return (
    <div>
      {assumptions.intro && (
        <Reveal>
          <p className={`leading-relaxed mb-8 max-w-3xl ${dark ? 'text-white/60' : 'text-muted'}`}>{assumptions.intro}</p>
        </Reveal>
      )}
      <div className="space-y-4">
        {assumptions.items.map((it, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="border border-border rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
                <div className="p-5 bg-paper">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-rose-600 mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" /> Assumed
                  </p>
                  <p className="text-sm text-ink leading-relaxed">{it.assumption}</p>
                </div>
                <div className="p-5 bg-white">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-amber-600 mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Found
                  </p>
                  <p className="text-sm text-muted leading-relaxed">{it.finding}</p>
                </div>
                <div className={`p-5 ${dark ? 'bg-accent-light' : 'bg-accent-light/40'}`}>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-accent mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Pivoted
                  </p>
                  <p className="text-sm text-ink leading-relaxed font-medium">{it.pivot}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

function StoryBody({ project }: { project: Project }) {
  const story = project.story!

  const renderVisual = (visual: NonNullable<StoryMoment['visual']>) => {
    switch (visual.kind) {
      case 'image':
        return (
          <Reveal delay={120}>
            <figure className="rounded-2xl overflow-hidden border border-border">
              <img
                src={visual.src}
                alt={visual.caption ?? ''}
                className="w-full object-contain bg-paper"
                style={{ maxHeight: '560px' }}
              />
              {visual.caption && (
                <figcaption className="px-4 py-3 bg-paper text-xs text-muted leading-relaxed border-t border-border">{visual.caption}</figcaption>
              )}
            </figure>
          </Reveal>
        )
      case 'imageGrid':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {visual.items.map((it, i) => (
              <Reveal key={it.src} delay={120 + i * 90}>
                <figure className="rounded-2xl overflow-hidden border border-border flex flex-col h-full">
                  <img
                    src={it.src}
                    alt={it.label ?? ''}
                    className="w-full object-contain bg-paper flex-1"
                    style={{ maxHeight: '300px' }}
                  />
                  {it.label && (
                    <figcaption className="px-4 py-3 bg-paper text-xs text-muted leading-relaxed border-t border-border">{it.label}</figcaption>
                  )}
                </figure>
              </Reveal>
            ))}
          </div>
        )
      case 'matrix':
        return project.deskResearch?.competitiveAudit
          ? (
            <Reveal delay={120}>
              <CompetitiveMatrix tools={project.deskResearch.competitiveAudit.tools} compact />
            </Reveal>
          )
          : null
      case 'personas':
        return project.personas ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.personas.map((p, i) => (
              <Reveal key={p.name} delay={120 + i * 90} className="h-full">
                <StoryPersonaCard persona={p} />
              </Reveal>
            ))}
          </div>
        ) : null
    }
  }

  return (
    <div>
      <StoryContainer>

      {/* The challenge */}
      <section className="grid md:grid-cols-[280px_1fr] gap-6 md:gap-12 mb-24">
        <Reveal y={16}>
          <p className="text-xs font-medium uppercase tracking-widest text-muted md:pt-1.5">The challenge</p>
        </Reveal>
        <Reveal delay={100}>
          <div>
            {story.challenge.paragraphs.map((p, i) => (
              <p key={i} className="text-muted leading-relaxed mb-4 last:mb-0">{p}</p>
            ))}
            <p className="text-accent font-medium italic leading-relaxed mt-5">{story.challenge.hmw}</p>
          </div>
        </Reveal>
      </section>

      {/* Outcome first: solution + result KPIs */}
      {story.summary && (
        <section className="mb-24">
          <div className="grid md:grid-cols-[280px_1fr] gap-6 md:gap-12 mb-10">
            <Reveal y={16}>
              <p className="text-xs font-medium uppercase tracking-widest text-muted md:pt-2">The solution</p>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-ink text-lg leading-relaxed">{story.summary.solution}</p>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {story.results.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100} className="h-full">
                <div className="bg-ink rounded-2xl p-5 h-full">
                  <p className="font-display text-3xl md:text-4xl text-paper mb-2">{s.value}</p>
                  <p className="text-xs text-white/50 leading-snug">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Sprint timeline */}
      {story.timeline && (
        <section className="mb-24">
          <Reveal y={16}>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-6">{story.timeline.label}</p>
          </Reveal>
          <Reveal delay={80}>
            <div className="relative">
              <div aria-hidden className="hidden md:block absolute left-0 right-0 top-1.5 h-px bg-border" />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-3 gap-y-6">
                {story.timeline.items.map(t => (
                  <div key={t.what} className="relative">
                    <span
                      aria-hidden
                      className={`hidden md:block w-3 h-3 rounded-full mb-3 ${t.scoped ? 'bg-paper border-2 border-amber-400' : 'bg-accent border-2 border-paper'}`}
                    />
                    <p className={`text-[11px] font-semibold uppercase tracking-widest mb-1 ${t.scoped ? 'text-amber-600' : 'text-accent'}`}>{t.when}</p>
                    <p className={`text-xs leading-snug ${t.scoped ? 'text-muted' : 'text-ink'}`}>{t.what}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      )}

      </StoryContainer>

      {/* Stages */}
      <div>
        {story.stages.map(stage => (
          <section key={stage.label} className={stage.dark ? 'bg-ink py-20 md:py-24 mb-24' : 'mb-24'}>
            <StoryContainer>
            <StoryStageHeader label={stage.label} kicker={stage.kicker} dark={stage.dark} />
            <div className="space-y-16">
              {stage.moments.map((m, mi) => m.afp && project.assumptions ? (
                <StoryAfp key={mi} assumptions={project.assumptions} dark={stage.dark} />
              ) : m.screenScroll ? (
                <ScreenScroll key={mi} steps={m.screenScroll} finding={m.finding} dark={stage.dark} />
              ) : (
                <div key={m.title ?? mi} className="grid md:grid-cols-[280px_1fr] gap-6 md:gap-12">
                  <Reveal className="self-start">
                    {m.title && <h3 className={`font-display text-2xl leading-tight mb-3 ${stage.dark ? 'text-paper' : 'text-ink'}`}>{m.title}</h3>}
                    {m.body && <p className={`text-sm leading-relaxed ${stage.dark ? 'text-white/60' : 'text-muted'}`}>{m.body}</p>}
                  </Reveal>
                  <div className="space-y-4 min-w-0">
                    {m.visual && renderVisual(m.visual)}
                    {m.finding && (
                      <Reveal>
                        <div className="bg-accent-light border border-accent/30 rounded-2xl p-5">
                          <p className="text-[11px] font-semibold uppercase tracking-widest text-accent mb-1.5">Key finding</p>
                          <p className="text-ink leading-relaxed text-[15px]">{m.finding}</p>
                        </div>
                      </Reveal>
                    )}
                  </div>
                </div>
              ))}
            </div>
            </StoryContainer>
          </section>
        ))}

        {/* Results */}
        <section className={story.results.dark ? 'bg-ink py-20 md:py-24' : ''}>
          <StoryContainer>
            <StoryStageHeader label="Results" kicker={story.results.kicker} dark={story.results.dark} />
            <Reveal>
              <p className={`leading-relaxed max-w-3xl mb-10 ${story.results.dark ? 'text-white/70' : 'text-muted'}`}>{story.results.body}</p>
            </Reveal>
            <Reveal delay={100}>
              <div className={`rounded-2xl p-8 md:p-10 ${story.results.dark ? 'border border-white/15 bg-white/5' : 'bg-ink'}`}>
                <p className="text-paper text-lg md:text-xl font-medium leading-relaxed">"{story.results.quote}"</p>
              </div>
            </Reveal>
          </StoryContainer>
        </section>
      </div>

      <StoryContainer>
      {/* Tags */}
      <section className="flex flex-wrap gap-2 pt-4 border-t border-border">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs bg-white border border-border rounded-md px-3 py-1.5 text-muted">
            {tag}
          </span>
        ))}
      </section>

      {/* Nav between case studies */}
      <div className="flex justify-between pt-8 mt-8 border-t border-border">
        <Link to="/work" className="text-sm font-medium text-accent hover:underline">
          ← All projects
        </Link>
        <a
          href="mailto:ishwaryasuresh@madeforhumans.tech"
          className="text-sm font-medium bg-ink text-paper px-5 py-2 rounded-full hover:bg-accent transition-colors"
        >
          Work together →
        </a>
      </div>
      </StoryContainer>
    </div>
  )
}

function ProcessStep({ step, index, compact }: { step: { step: string; detail: string; image?: string; imageCaption?: string; phase?: string }; index: number; compact?: boolean }) {
  if (compact) {
    return (
      <div className="flex gap-5 items-center">
        <div className="flex-shrink-0 w-8 h-8 bg-paper border border-border rounded-full flex items-center justify-center text-xs font-semibold text-muted">
          {index + 1}
        </div>
        <h3 className="font-semibold text-ink">{step.step}</h3>
      </div>
    )
  }
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

// Full-bleed ink plate that breaks out of the centred body column, matching the
// alternating dark/light rhythm of the home page and the story stages.
function InkPlate({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative left-1/2 -translate-x-1/2 w-screen bg-ink py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-6">{children}</div>
    </div>
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
  const [view, setView] = useState<'detailed' | 'tldr'>('detailed')

  if (!project) return <Navigate to="/work" replace />
  if (project.comingSoon) return <Navigate to="/work" replace />

  const colorClass = typeColors[project.type] ?? 'bg-gray-50 text-gray-600 border-gray-200'

  const assumptionsSection = project.assumptions ? (
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
  ) : null

  const processSection = (
    <section>
      <p className="text-xs font-medium uppercase tracking-widest text-muted mb-6">{project.processTitle ?? 'Design process'}</p>
      {(() => {
        // Compact mode renders the Kaizen dot timeline: a rule with accent dots,
        // the phase as the mono marker and the step name beneath.
        if (project.processCompact) {
          return (
            <div className="relative">
              <div aria-hidden className="hidden md:block absolute left-0 right-0 top-1.5 h-px bg-border" />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-x-3 gap-y-6">
                {project.process.map(step => (
                  <div key={step.step} className="relative">
                    <span aria-hidden className="hidden md:block w-3 h-3 rounded-full mb-3 bg-accent border-2 border-paper" />
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-accent mb-1">
                      {(step.phase ?? '').split(' · ')[0]}
                    </p>
                    <p className="text-xs text-ink leading-snug">{step.step}</p>
                  </div>
                ))}
              </div>
            </div>
          )
        }
        const hasPhases = project.process.some(s => s.phase)
        if (!hasPhases) {
          return (
            <div className="space-y-6">
              {project.process.map((step, i) => (
                <ProcessStep key={step.step} step={step} index={i} compact={project.processCompact} />
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
                <p className={`text-xs font-semibold uppercase tracking-widest text-accent pb-2 border-b border-border ${project.processCompact ? 'mb-3' : 'mb-5'}`}>{phase}</p>
                <div className={project.processCompact ? 'space-y-3' : 'space-y-6'}>
                  {grouped[phase].map(step => {
                    const idx = globalIndex++
                    return <ProcessStep key={step.step} step={step} index={idx} compact={project.processCompact} />
                  })}
                </div>
              </div>
            ))}
          </div>
        )
      })()}
    </section>
  )

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

        <Reveal disabled={!project.story} y={24}>
          <h1 className="font-display font-normal text-ink mb-5 leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}>
            {project.title}
          </h1>
        </Reveal>
        <Reveal disabled={!project.story} delay={90}>
          <p className="text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-3xl">{project.tagline}</p>
        </Reveal>

        {/* Hero image */}
        {project.heroImage && (
          <Reveal disabled={!project.story} delay={180}>
            <div className="mb-8 rounded-2xl overflow-hidden border border-border bg-ink">
              <img
                src={project.heroImage}
                alt={`${project.title}, prototype overview`}
                className="w-full object-cover"
                style={{ maxHeight: '520px' }}
              />
            </div>
          </Reveal>
        )}

        {/* Meta grid */}
        <Reveal disabled={!project.story} delay={260}>
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
        </Reveal>

        {/* Status banner */}
        {project.overview?.status && (
          <Reveal disabled={!project.story} delay={340}>
            <div className="mt-4 inline-flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-800">
              <span className="mt-0.5">⏸</span>
              <span>{project.overview.status}</span>
            </div>
          </Reveal>
        )}

        {(project.prototype || project.publishedResearch || project.wip) && (
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
            {project.publishedResearch && (
              <a
                href={project.publishedResearch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-2.5 rounded-full text-sm font-medium hover:bg-accent transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Read the paper
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

        {project.publishedResearch && (
          <div className="mt-8 border border-border rounded-2xl overflow-hidden bg-paper">
            <div className="p-6 md:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-accent mb-3">Published research</p>
              <h2 className="text-lg md:text-xl font-semibold text-ink leading-snug mb-2">{project.publishedResearch.title}</h2>
              <p className="text-sm text-muted leading-relaxed mb-1">{project.publishedResearch.authors}</p>
              <p className="text-xs text-muted mb-5">{project.publishedResearch.venue}</p>
              <div className="border-l-2 border-accent pl-4 mb-5">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-muted mb-1.5">My contribution</p>
                <p className="text-sm text-ink leading-relaxed">{project.publishedResearch.acknowledgement}</p>
              </div>
              <a
                href={project.publishedResearch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-muted hover:text-accent transition-colors"
              >
                doi.org/{project.publishedResearch.doi}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            {project.publishedResearch.acknowledgementImage && (
              <figure className="border-t border-border bg-white">
                <img
                  src={project.publishedResearch.acknowledgementImage}
                  alt="Acknowledgement paragraph from the published paper"
                  className="w-full object-contain"
                  style={{ maxHeight: '260px' }}
                />
                <figcaption className="px-6 py-3 text-[11px] text-muted italic border-t border-border">
                  Acknowledgement paragraph from the published paper (page 17).
                </figcaption>
              </figure>
            )}
          </div>
        )}
      </div>

      {/* Detailed / TL;DR toggle */}
      {project.tldr && (
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-paper border border-border rounded-full p-1">
            {([['detailed', 'Detailed'], ['tldr', 'TL;DR']] as const).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setView(key)}
                aria-pressed={view === key}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  view === key ? 'bg-ink text-paper' : 'text-muted hover:text-ink'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* TL;DR view, visual summary */}
      {project.tldr && view === 'tldr' && (
        <div className="max-w-4xl mx-auto px-6 space-y-14">

          {/* Headline + summary */}
          <section>
            <h2 className="text-2xl md:text-3xl font-medium text-ink leading-snug mb-5">{project.tldr.headline}</h2>
            <p className="text-lg text-muted leading-relaxed">{project.tldr.summary}</p>
          </section>

          {/* My role */}
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-2">My role</p>
            <p className="text-ink">{project.tldr.role}</p>
          </section>

          {/* Impact */}
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-5">Impact</p>
            <ul className="space-y-3">
              {project.tldr.impact.map(im => (
                <li key={im.text} className="flex items-start gap-3 text-ink leading-relaxed">
                  <span className="w-5 h-5 rounded-full bg-accent-light border border-accent/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-accent text-xs">✓</span>
                  </span>
                  {im.text}
                </li>
              ))}
            </ul>
          </section>

          {/* The scale, reuses detailed context stats */}
          {project.context?.stats && (
            <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.context.stats.map(s => (
                <div key={s.label} className="bg-paper border border-border rounded-2xl p-5 text-center">
                  <p className="text-2xl font-bold text-ink mb-1">{s.value}</p>
                  <p className="text-xs text-muted leading-snug">{s.label}</p>
                </div>
              ))}
            </section>
          )}

          {/* Timeline */}
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-6">{project.tldr.timelineLabel ?? '3 months, Discovery to Alpha'}</p>
            <div className="relative">
              <div aria-hidden className="hidden md:block absolute left-0 right-0 top-1.5 h-px bg-border" />
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-x-3 gap-y-6">
                {project.tldr.timeline.map(t => (
                  <div key={t.what} className="relative">
                    <span aria-hidden className="hidden md:block w-3 h-3 rounded-full bg-accent border-2 border-paper mb-3" />
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-accent mb-1">{t.when}</p>
                    <p className="text-xs text-ink leading-snug">{t.what}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Discovery */}
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-3">Discovery</p>
            <p className="text-muted leading-relaxed mb-6">{project.tldr.discovery.line}</p>
            {project.deskResearch?.books && (
              <div className="grid grid-cols-3 gap-3 mb-6">
                {project.deskResearch.books.map(b => (
                  <div key={b.title} className="flex gap-3 items-center border border-border rounded-xl p-3 bg-paper">
                    <img src={b.src} alt={b.title} className="w-10 h-14 object-cover rounded shadow-sm flex-shrink-0" />
                    <div>
                      <p className="text-[11px] font-semibold text-ink leading-snug">{b.title}</p>
                      <p className="text-[10px] text-muted mt-0.5">{b.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">The gap</p>
              <p className="text-amber-900 text-sm leading-relaxed">{project.tldr.discovery.gap}</p>
            </div>
          </section>

          {/* Ethnography, the heart of the research */}
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-3">{project.tldr.ethnography.label ?? 'Ethnographic study'}</p>
            <p className="text-muted leading-relaxed mb-6 max-w-2xl">{project.tldr.ethnography.line}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {project.tldr.ethnography.items.map(e => (
                <figure key={e.label} className="rounded-xl overflow-hidden border border-border">
                  <div className="h-40 overflow-hidden bg-paper">
                    <img src={e.src} alt={e.label} className="w-full h-full object-cover" />
                  </div>
                  <figcaption className="px-3 py-2 bg-paper text-[11px] text-ink font-medium border-t border-border">{e.label}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* The reframe */}
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-5">The reframe</p>
            <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-stretch">
              <div className="border border-border rounded-2xl p-6 bg-paper">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-rose-600 mb-3">Category default</p>
                <p className="text-xl font-bold text-ink line-through decoration-rose-400 decoration-2 mb-3">{project.tldr.pivot.from}</p>
                <p className="text-sm text-muted leading-relaxed">"{project.tldr.pivot.fromHmw}"</p>
              </div>
              <div className="text-accent text-2xl flex items-center justify-center md:px-2" aria-hidden>→</div>
              <div className="border border-accent/40 rounded-2xl p-6 bg-accent-light">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-accent mb-3">Where research led</p>
                <p className="text-xl font-bold text-ink mb-3">{project.tldr.pivot.to}</p>
                <p className="text-sm text-ink/80 leading-relaxed">"{project.tldr.pivot.toHmw}"</p>
              </div>
            </div>
            <p className="text-sm text-muted mt-4 text-center">{project.tldr.pivot.because}</p>
          </section>

          {/* Storyboards to the zine */}
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-3">{project.tldr.origin.label ?? 'How the 8-fold zine arrived'}</p>
            <p className="text-muted leading-relaxed mb-6">{project.tldr.origin.line}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.tldr.origin.items.map((o, i) => (
                <figure key={o.label} className="rounded-xl overflow-hidden border border-border">
                  <div className="h-44 overflow-hidden bg-paper">
                    <img src={o.src} alt={o.label} className="w-full h-full object-cover" />
                  </div>
                  <figcaption className="px-3 py-2.5 bg-paper text-[11px] text-ink font-medium border-t border-border">
                    <span className="text-muted mr-1">{i + 1}</span>{o.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* Who it is for, reuses detailed personas */}
          {project.personas && (
            <section>
              <p className="text-xs font-medium uppercase tracking-widest text-muted mb-3">Who it is for</p>
              <p className="text-muted leading-relaxed mb-6">{project.tldr.people}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.personaRoles?.map(r => {
                  const names = project.personas!
                    .filter(p => (p.type.includes(' - ') ? p.type.split(' - ')[1] : p.type) === r.role)
                    .map(p => p.name)
                  return (
                    <div key={r.role} className="border border-border rounded-xl p-4 bg-paper">
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-accent mb-1">{r.who}</p>
                      <p className="text-ink font-medium leading-snug">{r.role}</p>
                      {names.length > 0 && <p className="text-xs text-muted mt-1">{names.join(', ')}</p>}
                    </div>
                  )
                })}
              </div>
            </section>
          )}

          {/* What testing changed, reuses detailed assumptions */}
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-3">What testing changed</p>
            <p className="text-muted leading-relaxed mb-6">{project.tldr.testing.line}</p>
            <div className="space-y-2 mb-6">
              {project.tldr.testing.changes.map(c => (
                <div key={c} className="flex items-start gap-3 border border-border rounded-xl px-4 py-3 bg-paper">
                  <span className="text-accent mt-0.5 flex-shrink-0" aria-hidden>→</span>
                  <p className="text-sm text-ink leading-relaxed">{c}</p>
                </div>
              ))}
            </div>
            {project.assumptions && (
              <p className="text-sm text-muted">
                <span className="text-ink font-medium">{project.assumptions.items.length} assumptions</span> were overturned between the first brief and the final prototype.
              </p>
            )}
          </section>

          {/* Research ops */}
          <section className="border-l-4 border-accent pl-6">
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-2">Research ops</p>
            <p className="text-muted leading-relaxed">{project.tldr.ethics}</p>
          </section>

          {/* How the product works */}
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-5">How it works</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.tldr.output.map((o, i) => (
                <figure key={o.label} className="rounded-2xl overflow-hidden border border-border">
                  <div className="bg-paper p-4 h-72 flex items-center justify-center">
                    <img src={o.src} alt={o.label} className="max-h-full max-w-[180px] object-contain" />
                  </div>
                  <figcaption className="px-4 py-3 bg-paper text-sm text-ink font-medium border-t border-border">
                    <span className="text-muted mr-1.5">{i + 1}</span>{o.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* Final screens */}
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-5">The app</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.tldr.screens.map(s => (
                <figure key={s.label} className="rounded-2xl overflow-hidden border border-border">
                  <div className="bg-paper p-4 h-72 flex items-center justify-center">
                    <img src={s.src} alt={s.label} className="max-h-full max-w-[180px] object-contain" />
                  </div>
                  <figcaption className="px-4 py-3 bg-paper text-sm text-ink font-medium border-t border-border">{s.label}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* Outcome */}
          <section className="bg-ink rounded-2xl p-8">
            <p className="text-xs font-medium uppercase tracking-widest text-accent-soft mb-3">Where it landed</p>
            <p className="text-paper leading-relaxed">{project.tldr.outcome}</p>
          </section>

          <div className="pt-4 border-t border-border text-center">
            <button
              onClick={() => setView('detailed')}
              className="text-sm font-medium text-accent hover:underline"
            >
              Read the full case study →
            </button>
          </div>
        </div>
      )}

      {/* Story body, visual narrative layout */}
      {project.story && <StoryBody project={project} />}

      {/* Body */}
      {!project.story && (
      <div className={`max-w-3xl mx-auto px-6 space-y-16 ${project.tldr && view === 'tldr' ? 'hidden' : ''}`}>

        {/* Context, only if present */}
        {project.context && (
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-4">{project.contextTitle ?? 'Context'}</p>
            <p className="text-muted leading-relaxed mb-8">{project.context.intro}</p>
            {project.context.image && (
              <figure className="rounded-2xl overflow-hidden border border-border mb-8">
                <img
                  src={project.context.image}
                  alt={project.context.imageCaption ?? 'Context'}
                  className="w-full object-cover"
                  style={{ maxHeight: '440px' }}
                />
                {project.context.imageCaption && (
                  <figcaption className="px-4 py-3 bg-paper text-xs text-muted leading-relaxed border-t border-border">{project.context.imageCaption}</figcaption>
                )}
              </figure>
            )}
            {project.context.stats && project.context.stats.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {project.context.stats.map(s => (
                  <div key={s.label} className="bg-paper border border-border rounded-2xl p-4 text-center">
                    <p className="text-2xl font-bold text-ink mb-1">{s.value}</p>
                    <p className="text-xs text-muted leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            )}
            <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">{project.context.challengesTitle ?? 'What PwD are up against'}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {project.context.challenges.map(c => (
                <div key={c} className="border border-border rounded-xl p-4 bg-paper text-sm text-muted leading-relaxed">{c}</div>
              ))}
            </div>
            {project.context.quote && (
              <blockquote className="border-l-4 border-accent pl-6 py-2">
                <p className="text-ink text-lg font-medium leading-relaxed italic">"{project.context.quote}"</p>
              </blockquote>
            )}
          </section>
        )}

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

        {/* Framing the opportunity, only if present */}
        {project.opportunityFraming && (
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-6">Framing the opportunity</p>
            <div className="space-y-4">
              <div className="border border-border rounded-2xl p-6 bg-paper">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-rose-600 mb-2">Where I started</p>
                <p className="text-sm text-muted leading-relaxed mb-3">{project.opportunityFraming.initialAssumption}</p>
                <p className="text-ink font-medium leading-relaxed">"{project.opportunityFraming.initialHmw}"</p>
              </div>
              <div className="flex items-start gap-3 px-2">
                <span className="text-accent text-xl leading-none mt-0.5">↓</span>
                <p className="text-sm text-muted leading-relaxed">{project.opportunityFraming.shift}</p>
              </div>
              <div className="border border-accent/40 rounded-2xl p-6 bg-accent-light">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-accent mb-2">Where the research took me</p>
                <p className="text-ink text-lg font-medium leading-relaxed">"{project.opportunityFraming.reframedHmw}"</p>
              </div>
            </div>
          </section>
        )}

        {/* KPI cards, Kaizen style: separate ink cards with display numerals */}
        <section>
          <p className="text-xs font-medium uppercase tracking-widest text-muted mb-6">Impact &amp; outcomes</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.metrics.map(m => (
              <div key={m.label} className="bg-ink rounded-2xl p-5 h-full">
                <p className="font-display text-3xl md:text-4xl text-paper mb-2">{m.value}</p>
                <p className="text-xs text-white/50 leading-snug">{m.label}</p>
              </div>
            ))}
          </div>
        </section>

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

        {/* Process timeline, early slot */}
        {project.processEarly && processSection}

        {/* Desk Research, only if present */}
        {project.deskResearch && (
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-6">Discovery</p>
            <p className="text-muted leading-relaxed mb-8">{project.deskResearch.summary}</p>

            {/* Stat callouts */}
            {project.deskResearch.stats.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {project.deskResearch.stats.map(s => (
                  <div key={s.label} className="bg-paper border border-border rounded-2xl p-4 text-center">
                    <p className="text-2xl font-bold text-ink mb-1">{s.value}</p>
                    <p className="text-xs text-muted leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
            )}

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

        {/* Ethnographic study, on an ink plate */}
        {project.workshops && (
          <InkPlate>
            <p className="text-xs font-medium uppercase tracking-widest text-white/40 mb-2">{project.workshopsTitle ?? 'Ethnographic study'}</p>
            {project.workshopsIntro && (
              <p className="text-white/60 leading-relaxed mb-6">{project.workshopsIntro}</p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.workshops.map((item, i) => (
                <figure key={i} className="rounded-xl overflow-hidden border border-white/10 group">
                  <div className="h-72 overflow-hidden bg-white/5">
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="px-4 py-3 bg-white/5 text-xs text-white/60 leading-snug border-t border-white/10">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </InkPlate>
        )}

        {/* Storyboards, only if present */}
        {project.storyboards && (
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-2">Storyboards · the shared language</p>
            <p className="text-muted leading-relaxed mb-10">{project.storyboards.intro}</p>
            <ScreenScroll
              steps={project.storyboards.items.map((sb, i) => ({
                src: sb.src,
                title: sb.title ?? `Scenario ${i + 1}`,
                body: sb.caption,
              }))}
            />
            <div className="mt-10 bg-accent-light border border-accent/30 rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">What the storyboards unlocked</p>
              <p className="text-ink text-sm leading-relaxed">{project.storyboards.payoff}</p>
            </div>
          </section>
        )}

        {/* Expert focus group, only if present */}
        {project.focusGroup && (
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-2">{project.focusGroup.label ?? 'Expert focus group'}</p>
            {project.focusGroup.intro && <p className="text-muted leading-relaxed mb-6">{project.focusGroup.intro}</p>}
            <figure className="rounded-2xl overflow-hidden border border-border">
              <img
                src={project.focusGroup.image}
                alt={project.focusGroup.caption}
                className="w-full object-cover"
                style={{ maxHeight: '520px' }}
              />
              <figcaption className="px-4 py-3 bg-paper text-xs text-muted leading-relaxed border-t border-border">{project.focusGroup.caption}</figcaption>
            </figure>
          </section>
        )}

        {/* 8-fold zine - output artifact, only if present */}
        {project.zineInspiration && (
          <section>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-2">Physical output - the 8-fold zine</p>
            <p className="text-muted leading-relaxed mb-8">
              Born from that focus group conversation. The app runs a TimeSlips-format session - an image prompt on
              screen, the resident improvising a story around it - and records the scene: the audio cues alongside the
              image being shown. It then composes the recording into a story laid out in 8-fold zine format, ready to print.
            </p>

            {project.zineInspiration.flow && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
                {project.zineInspiration.flow.map((f, i) => (
                  <div key={f.step} className="border border-border rounded-xl p-4 bg-paper">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-accent mb-1.5">{i + 1} · {f.step}</p>
                    <p className="text-xs text-muted leading-relaxed">{f.detail}</p>
                  </div>
                ))}
              </div>
            )}

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

        {/* Key insight */}
        <section className="bg-accent-light border border-accent/30 rounded-2xl p-8">
          <p className="text-xs font-medium uppercase tracking-widest text-accent mb-3">Key insight</p>
          <p className="text-ink text-lg font-medium leading-relaxed">"{project.insight}"</p>
          {project.solutionTeaser && (
            <p className="text-muted leading-relaxed mt-5 pt-5 border-t border-accent/20">{project.solutionTeaser}</p>
          )}
        </section>

        {/* Assumptions → findings → pivots, early slot (default) */}
        {!project.assumptionsLate && assumptionsSection}

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
            {(project.personasIntro || project.personaRoles) && (
              <p className="text-muted leading-relaxed mb-8">{project.personasIntro ?? 'Three roles shaped the design, each grounded in the co-design and ethnographic work.'}</p>
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

        {/* Process, late slot (default) */}
        {!project.processEarly && processSection}

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

        {/* Final prototype screens, pinned scrollytelling on an ink plate */}
        {project.screens && (
          <InkPlate>
            <p className="text-xs font-medium uppercase tracking-widest text-white/40 mb-2">Final prototype · screen by screen</p>
            {project.screens.intro && <p className="text-white/60 leading-relaxed mb-10">{project.screens.intro}</p>}
            <ScreenScroll
              dark
              steps={project.screens.items.map(s => ({ src: s.src, title: s.title, body: s.description }))}
            />
            {project.screens.brand && (
              <figure className="mt-12 rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={project.screens.brand.src}
                  alt={project.screens.brand.caption}
                  className="w-full object-contain bg-white"
                />
                <figcaption className="px-4 py-3 bg-white/5 text-xs text-white/60 leading-relaxed border-t border-white/10">{project.screens.brand.caption}</figcaption>
              </figure>
            )}
          </InkPlate>
        )}

        {/* Assumptions → findings → pivots, late slot */}
        {project.assumptionsLate && assumptionsSection}

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
            href="mailto:ishwaryasuresh@madeforhumans.tech"
            className="text-sm font-medium bg-ink text-paper px-5 py-2 rounded-full hover:bg-accent transition-colors"
          >
            Work together →
          </a>
        </div>
      </div>
      )}
    </article>
  )
}
