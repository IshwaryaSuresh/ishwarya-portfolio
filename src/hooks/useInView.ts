import { useRef, useState, useEffect } from 'react'

export function useInView(options: IntersectionObserverInit = {}) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    // Defaults tuned for tall mobile sections: a low threshold + a
    // generous rootMargin so the observer fires as the section
    // approaches the viewport, even when the element is taller than
    // the viewport itself (in which case 20% of element-area may
    // never be visible at once on a small phone).
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        io.disconnect()
      }
    }, { threshold: 0.05, rootMargin: '0px 0px -10% 0px', ...options })
    io.observe(ref.current)

    // Belt-and-braces: if for any reason the observer never fires
    // (some mobile browsers can drop observers under memory pressure),
    // start the animation anyway after 2s of being mounted.
    const fallback = setTimeout(() => setInView(true), 2000)

    return () => { io.disconnect(); clearTimeout(fallback) }
  }, [])

  return [ref, inView] as const
}
