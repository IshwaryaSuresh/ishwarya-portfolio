import { useRef, useEffect } from 'react'

const MARQUEE_ITEMS = [
  'Fintech', 'Edtech', 'Healthcare', 'Public sector', 'Architecture',
  'Service design', 'Product design', 'Strategy & discovery', 'Accessibility', 'GDS standards',
]
const track = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

// Slowly drifting gradient orbs — aurora effect
const ORBS = [
  { bx: 0.18, by: 0.35, ax: 0.14, ay: 0.12, wx: 0.00038, wy: 0.00032, px: 0.0, py: 1.2, r: 0.62, h: 168, s: 68, l: 46, a: 0.13 },
  { bx: 0.72, by: 0.55, ax: 0.16, ay: 0.15, wx: 0.00029, wy: 0.00041, px: 2.1, py: 0.7, r: 0.70, h: 82,  s: 72, l: 53, a: 0.09 },
  { bx: 0.50, by: 0.18, ax: 0.20, ay: 0.16, wx: 0.00025, wy: 0.00035, px: 1.0, py: 3.1, r: 0.58, h: 172, s: 58, l: 40, a: 0.11 },
  { bx: 0.85, by: 0.78, ax: 0.11, ay: 0.18, wx: 0.00042, wy: 0.00027, px: 4.2, py: 1.5, r: 0.48, h: 155, s: 54, l: 36, a: 0.10 },
]

export default function Hero() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Aurora canvas animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf: number

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const draw = (now: number) => {
      const W = canvas.width, H = canvas.height
      ctx.clearRect(0, 0, W, H)
      const dim = Math.max(W, H)
      for (const o of ORBS) {
        const x = (o.bx + o.ax * Math.sin(o.wx * now + o.px)) * W
        const y = (o.by + o.ay * Math.sin(o.wy * now + o.py)) * H
        const r = o.r * dim
        const g = ctx.createRadialGradient(x, y, 0, x, y, r)
        g.addColorStop(0,   `hsla(${o.h},${o.s}%,${o.l}%,${o.a})`)
        g.addColorStop(0.5, `hsla(${o.h},${o.s}%,${o.l}%,${o.a * 0.4})`)
        g.addColorStop(1,   `hsla(${o.h},${o.s}%,${o.l}%,0)`)
        ctx.fillStyle = g
        ctx.fillRect(0, 0, W, H)
      }
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
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
    <section className="hero">
      <canvas ref={canvasRef} className="hero__aurora" />
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
