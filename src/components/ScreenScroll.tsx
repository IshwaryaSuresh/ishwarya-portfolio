import { useEffect, useRef, useState } from 'react'
import type { ScreenScrollStep } from '../data/projects'
import Reveal from './Reveal'

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)'

// Pinned scrollytelling, full-viewport takeover: the stage sticks to the screen
// while scroll drives which step is shown. Narration and screen crossfade in
// place, so earlier steps are never visible alongside the current one. On
// mobile the stage is replaced by a simple stacked list. `dark` restyles the
// block for a full-bleed ink plate.
export default function ScreenScroll({ steps, finding, dark }: { steps: ScreenScrollStep[]; finding?: string; dark?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const el = trackRef.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const scrollable = rect.height - window.innerHeight
        if (scrollable <= 0) return
        const progress = Math.min(Math.max(-rect.top / scrollable, 0), 0.9999)
        setActive(Math.floor(progress * steps.length))
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [steps.length])

  const fade = (i: number): React.CSSProperties => ({
    opacity: active === i ? 1 : 0,
    transform: active === i || reduceMotion ? 'translateY(0)' : 'translateY(16px)',
    transition: reduceMotion ? 'none' : `opacity 0.5s ${EASE}, transform 0.5s ${EASE}`,
    pointerEvents: active === i ? 'auto' : 'none',
  })

  const titleColor = dark ? 'text-paper' : 'text-ink'
  const bodyColor = dark ? 'text-white/60' : 'text-muted'

  return (
    <div>
      {/* Desktop: scroll track with a sticky full-viewport stage */}
      <div
        ref={trackRef}
        className="hidden md:block relative md:-mx-10 lg:-mx-24"
        style={{ height: `${steps.length * 90}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="grid grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-10 lg:gap-14 w-full items-center" style={{ height: 'min(80vh, 800px)' }}>

            {/* Narration, crossfading in place */}
            <div className="relative h-full">
              {steps.map((s, i) => (
                <div key={s.src} className="absolute inset-0 flex flex-col justify-center" style={fade(i)}>
                  <h3 className={`font-display text-2xl lg:text-3xl leading-tight mb-4 ${titleColor}`}>{s.title}</h3>
                  <p className={`text-[15px] leading-relaxed ${bodyColor}`}>{s.body}</p>
                </div>
              ))}
            </div>

            {/* Screens, crossfading in place, no panel chrome */}
            <div className="relative h-full overflow-hidden min-w-0">
              {steps.map((s, i) => (
                <img
                  key={s.src}
                  src={s.src}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-contain"
                  style={fade(i)}
                />
              ))}
              {/* Progress dots */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2" aria-hidden>
                {steps.map((_, i) => (
                  <span
                    key={i}
                    className={`w-1.5 rounded-full transition-all duration-300 ${
                      active === i
                        ? `h-5 ${dark ? 'bg-paper' : 'bg-ink'}`
                        : `h-1.5 ${dark ? 'bg-white/25' : 'bg-ink/25'}`
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: stacked steps, no pinning */}
      <div className="md:hidden space-y-12">
        {steps.map(s => (
          <Reveal key={s.src}>
            <h3 className={`font-display text-2xl leading-tight mb-3 ${titleColor}`}>{s.title}</h3>
            <p className={`text-sm leading-relaxed mb-5 ${bodyColor}`}>{s.body}</p>
            <figure className="rounded-2xl overflow-hidden">
              <img src={s.src} alt={s.title} className="w-full object-contain" />
            </figure>
          </Reveal>
        ))}
      </div>

      {finding && (
        <Reveal>
          <div className="mt-10 md:mt-4 bg-accent-light border border-accent/30 rounded-2xl p-5">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-accent mb-1.5">Key finding</p>
            <p className="text-ink leading-relaxed text-[15px]">{finding}</p>
          </div>
        </Reveal>
      )}
    </div>
  )
}
