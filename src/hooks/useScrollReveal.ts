import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const query = () =>
      Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    const reveal = (el: HTMLElement) => {
      const delay = parseInt(el.dataset.delay ?? '0', 10)
      setTimeout(() => el.classList.add('revealed'), delay)
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
    )

    query().forEach((el) => io.observe(el))

    // Re-scan for dynamically mounted elements
    const mo = new MutationObserver(() => {
      query()
        .filter((el) => !el.classList.contains('revealed'))
        .forEach((el) => io.observe(el))
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}
