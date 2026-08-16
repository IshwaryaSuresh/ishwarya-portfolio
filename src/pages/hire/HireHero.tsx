import { useRef, useEffect, useState } from 'react'

const TYPE_WORDS = ['products.', 'services.', 'research.', 'for humans.']

function useTypewriter(words: string[]) {
  const [text, setText] = useState('')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0])
      return
    }
    let w = 0, i = 0, deleting = false
    let timer: ReturnType<typeof setTimeout>

    const tick = () => {
      const word = words[w]
      if (!deleting) {
        i++
        setText(word.slice(0, i))
        if (i === word.length) { deleting = true; timer = setTimeout(tick, 2000) }
        else timer = setTimeout(tick, 70 + Math.random() * 60)
      } else {
        i--
        setText(word.slice(0, i))
        if (i === 0) { deleting = false; w = (w + 1) % words.length; timer = setTimeout(tick, 400) }
        else timer = setTimeout(tick, 40)
      }
    }
    timer = setTimeout(tick, 1100)
    return () => clearTimeout(timer)
  }, [words])

  return text
}

export default function HireHero() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const typed = useTypewriter(TYPE_WORDS)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    let raf: number | null = null
    const tick = () => {
      const p = Math.min(window.scrollY / (hero.offsetHeight * 0.55), 1)
      hero.style.setProperty('--p', p.toFixed(4))
      raf = null
    }
    tick()
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf) }
  }, [])

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
      <div className="hero__glow hero__glow--a" data-parallax="0.16" aria-hidden="true" />
      <div className="hero__glow hero__glow--b" data-parallax="-0.12" aria-hidden="true" />
      <div className="hero__grid" data-parallax="-0.08" />
      <div className="hero__cursor" ref={cursorRef} style={{ opacity: 0 }} />

      <div className="hero__main">
        <h1 className="hero__display">
          <span className="hero__line"><span>Hello, I'm Ishwarya.</span></span>
          <span className="hero__line">
            <span>
              I design <em className="hero__teal hero__typed">{typed}</em>
              <span className="hero__caret" aria-hidden="true" />
            </span>
          </span>
        </h1>
      </div>

      <div className="hero__meta hero__meta--bare">
        <div className="hero__actions" data-reveal="up" data-delay="900">
          <a href="#work" className="btn-primary">See selected work →</a>
          <a
            href="/uploads/Ishwarya_Suresh_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Download CV ↓
          </a>
          <a href="mailto:ishwaryasuresh@madeforhumans.tech" className="btn-link">
            Get in touch
          </a>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true"><span /></div>
    </section>
  )
}
