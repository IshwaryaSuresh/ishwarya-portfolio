import { useEffect } from 'react'

export function useParallax() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'))
    if (!nodes.length) return
    let raf: number | null = null

    const tick = () => {
      const vh = window.innerHeight
      for (const n of nodes) {
        const rect = n.getBoundingClientRect()
        const center = rect.top + rect.height / 2
        const delta = center - vh / 2
        const speed = parseFloat(n.dataset.parallax ?? '0.2')
        n.style.transform = `translate3d(0, ${(-delta * speed).toFixed(2)}px, 0)`
      }
      raf = null
    }

    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick) }
    tick()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
}
