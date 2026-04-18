import { useEffect, useRef, useState } from 'react'

export default function DynamicCursor() {
  const [visible, setVisible] = useState(false)
  const dotRef = useRef<HTMLDivElement>(null)
  const pillRef = useRef<HTMLDivElement>(null)

  // Use refs for position to avoid re-renders on every mouse move
  const mouse = useRef({ x: -100, y: -100 })
  const dot = useRef({ x: -100, y: -100 })
  const pill = useRef({ x: -100, y: -100 })
  const raf = useRef<number>(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      setVisible(true)
    }
    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    // Spring-style animation loop
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const animate = () => {
      dot.current.x = lerp(dot.current.x, mouse.current.x, 0.45)
      dot.current.y = lerp(dot.current.y, mouse.current.y, 0.45)
      pill.current.x = lerp(pill.current.x, mouse.current.x, 0.12)
      pill.current.y = lerp(pill.current.y, mouse.current.y, 0.12)

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dot.current.x - 6}px, ${dot.current.y - 6}px)`
      }
      if (pillRef.current) {
        pillRef.current.style.transform = `translate(${pill.current.x - 36}px, ${pill.current.y - 24}px)`
      }
      raf.current = requestAnimationFrame(animate)
    }

    raf.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      {/* Small precise dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 12,
          height: 12,
          borderRadius: '50%',
          backgroundColor: '#008080',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s ease',
          willChange: 'transform',
        }}
      />
      {/* Lagging teal pill */}
      <div
        ref={pillRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 72,
          height: 48,
          borderRadius: 24,
          backgroundColor: '#008080',
          opacity: visible ? 0.18 : 0,
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'opacity 0.3s ease',
          willChange: 'transform',
        }}
      />
    </>
  )
}
