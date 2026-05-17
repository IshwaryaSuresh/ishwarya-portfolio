import { useRef, useEffect } from 'react'

// Typographic mural — words that ACTUALLY describe the practice, drifting
// at very low opacity behind the headline. Replaces the generic aurora.
// Hand-placed positions feel intentional, not generative.
const MURAL: { word: string; top: string; left: string; rot: number; size: number; delay: number }[] = [
  { word: 'research',         top: '6%',   left: '4%',  rot: -4, size: 120, delay: 0   },
  { word: 'accessibility',    top: '14%',  left: '58%', rot: 3,  size: 96,  delay: 1.4 },
  { word: 'service blueprints', top: '28%', left: '70%', rot: -2, size: 72, delay: 2.8 },
  { word: 'discovery',        top: '46%',  left: '2%',  rot: 5,  size: 110, delay: 4.2 },
  { word: 'WCAG 2.2',         top: '62%',  left: '74%', rot: -3, size: 100, delay: 5.6 },
  { word: 'in-sprint',        top: '78%',  left: '8%',  rot: 2,  size: 84,  delay: 7.0 },
  { word: 'embedded',         top: '82%',  left: '52%', rot: -4, size: 96,  delay: 8.4 },
  { word: 'co-design',        top: '36%',  left: '36%', rot: 1,  size: 70,  delay: 9.8 },
  { word: 'usability',        top: '8%',   left: '32%', rot: -2, size: 80,  delay: 11.2 },
  { word: 'dovetail',         top: '54%',  left: '50%', rot: 4,  size: 86,  delay: 12.6 },
  { word: 'opportunity maps', top: '70%',  left: '32%', rot: -1, size: 78,  delay: 14.0 },
  { word: 'GDS',              top: '20%',  left: '85%', rot: 6,  size: 130, delay: 15.4 },
  { word: 'fintech',          top: '90%',  left: '74%', rot: -5, size: 92,  delay: 16.8 },
]

export default function Hero() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement>(null)

  // Scroll progress - drives headline fade/lift and scroll hint opacity
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    let raf: number | null = null

    const tick = () => {
      const h = hero.offsetHeight
      const p = Math.min(window.scrollY / (h * 0.55), 1)
      hero.style.setProperty('--p', p.toFixed(4))
      raf = null
    }
    tick()
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  // Cursor follow
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!cursorRef.current) return
      cursorRef.current.style.left = e.clientX + 'px'
      cursorRef.current.style.top = e.clientY + 'px'
    }
    const heroEl = document.querySelector('.hero')
    const onEnter = () => cursorRef.current && (cursorRef.current.style.opacity = '1')
    const onLeave = () => cursorRef.current && (cursorRef.current.style.opacity = '0')

    window.addEventListener('mousemove', onMove)
    heroEl?.addEventListener('mouseenter', onEnter)
    heroEl?.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      heroEl?.removeEventListener('mouseenter', onEnter)
      heroEl?.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      {/* Typographic mural — replaces the generic aurora */}
      <div className="hero__mural" aria-hidden="true">
        {MURAL.map((m, i) => (
          <span
            key={i}
            className="hero__mural-word"
            style={{
              top: m.top,
              left: m.left,
              fontSize: `${m.size}px`,
              transform: `rotate(${m.rot}deg)`,
              animationDelay: `${-m.delay}s`,
            }}
          >
            {m.word}
          </span>
        ))}
      </div>
      <div className="hero__grid" data-parallax="-0.08" />
      <div className="hero__cursor" ref={cursorRef} style={{ opacity: 0 }} />

      <div className="hero__top">
        <span>MadeForHumans · Est. 2025</span>
        <span>Ishwarya Suresh · Founder &amp; UX Consultant</span>
      </div>

      <div className="hero__main">
        <h1 className="hero__display">
          <span className="hero__line"><span>I design products</span></span>
          <span className="hero__line"><span>for fintech, edtech,</span></span>
          <span className="hero__line"><span>healthcare &amp; <em className="hero__teal">beyond,</em></span></span>
          <span className="hero__line"><span><em className="hero__teal">made for humans.</em></span></span>
        </h1>
      </div>

      <div className="hero__meta">
        <div className="cell" data-reveal="up" data-delay="800">
          <div className="lbl">Studio</div>
          <div className="val">An independent UX consultancy delivering product design, service design, and accessibility for public sector, healthcare, edtech, and startups. Remote worldwide.</div>
        </div>
        <div className="cell" data-reveal="up" data-delay="950">
          <div className="lbl">Now</div>
          <div className="val">Taking briefs in product design, strategy &amp; discovery, service design, and WCAG 2.2 accessibility. Previously at MHCLG.</div>
        </div>
        <div className="cell" style={{ alignSelf: 'end' }} data-reveal="up" data-delay="1100">
          <div className="hero__actions">
            <a href="#work" className="btn-primary">See selected work →</a>
            <a href="#brief" className="btn-ghost">Send a brief</a>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
