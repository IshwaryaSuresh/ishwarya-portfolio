import { useRef, useState, useEffect } from 'react'

export function useInView(options: IntersectionObserverInit = {}) {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        io.disconnect()
      }
    }, { threshold: 0.2, ...options })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return [ref, inView] as const
}
