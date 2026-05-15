import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const getEls = () =>
      Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
        .filter(el => !el.classList.contains('revealed'))

    const check = () => {
      const vh = window.innerHeight
      getEls().forEach(el => {
        const rect = el.getBoundingClientRect()
        if (rect.top < vh * 0.9 && rect.bottom > 0) {
          const delay = parseInt(el.dataset.delay ?? '0', 10)
          setTimeout(() => el.classList.add('revealed'), delay)
        }
      })
    }

    // Run immediately + on scroll
    check()
    let raf: number | null = null
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => { check(); raf = null })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    // Also run after a short delay in case components mount late
    const t = setTimeout(check, 100)

    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(t)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
}
