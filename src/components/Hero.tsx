import { useRef, useEffect } from 'react'

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
            <a
              href="/uploads/Ishwarya_Suresh_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-link"
            >
              Download CV ↓
            </a>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}
