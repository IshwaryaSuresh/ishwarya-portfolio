import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)'

// Scroll-triggered appear animation: rise + fade + blur-to-sharp with a spring-like
// ease, in the style of Framer's appear effects. Runs once per element. Respects
// prefers-reduced-motion. `delay` (ms) staggers siblings; `disabled` renders static.
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  blur = true,
  className = '',
  disabled = false,
}: {
  children: ReactNode
  delay?: number
  y?: number
  blur?: boolean
  className?: string
  disabled?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(disabled)

  useEffect(() => {
    if (disabled) { setShown(true); return }
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [disabled])

  const style: CSSProperties | undefined = disabled
    ? undefined
    : {
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : `translateY(${y}px)`,
        filter: shown ? 'none' : blur ? 'blur(8px)' : 'none',
        transition: [
          `opacity 0.9s ${EASE} ${delay}ms`,
          `transform 0.9s ${EASE} ${delay}ms`,
          `filter 0.9s ${EASE} ${delay}ms`,
        ].join(', '),
        willChange: shown ? undefined : 'opacity, transform, filter',
      }

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}
