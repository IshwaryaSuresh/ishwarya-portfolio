import { useRef, useEffect } from 'react'

const MARQUEE_ITEMS = [
  'Fintech', 'Edtech', 'Healthcare', 'Public sector', 'Architecture',
  'Service design', 'Product design', 'Strategy & discovery', 'Accessibility', 'GDS standards',
]
const track = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

export default function Hero() {
  const cursorRef = useRef<HTMLDivElement>(null)

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
    <section className="hero">
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
        <div className="cell">
          <div className="lbl">[ Studio ]</div>
          <div className="val">An independent UX consultancy delivering product design, service design, and accessibility for public sector, healthcare, edtech, and startups. Remote worldwide.</div>
        </div>
        <div className="cell">
          <div className="lbl">[ Now ]</div>
          <div className="val">Taking briefs in product design, strategy &amp; discovery, service design, and WCAG 2.2 accessibility. Previously at MHCLG.</div>
        </div>
        <div className="cell" style={{ alignSelf: 'end' }}>
          <div className="hero__actions">
            <a href="#work" className="btn-primary">See selected work →</a>
            <a href="#brief" className="btn-ghost">Send a brief</a>
          </div>
        </div>
      </div>

      <div className="marquee">
        <div className="marquee__track">
          {track.map((t, i) => (
            <span key={i} className="marquee__item">{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
