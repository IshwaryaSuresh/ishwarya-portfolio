import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-paper/95 backdrop-blur border-b border-border shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-ink font-semibold text-lg tracking-tight hover:opacity-70 transition-opacity">
          Ishwarya Suresh
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors ${
                location.pathname.startsWith(link.to)
                  ? 'text-accent'
                  : 'text-muted hover:text-ink'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:ishwaryasuresh97@gmail.com"
            className="text-sm font-medium bg-ink text-paper px-4 py-2 rounded-full hover:bg-accent transition-colors"
          >
            Hire me
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-ink p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-paper border-t border-border px-6 py-4 flex flex-col gap-4">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-base font-medium ${
                location.pathname.startsWith(link.to) ? 'text-accent' : 'text-ink'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:ishwaryasuresh97@gmail.com"
            className="text-base font-medium text-accent"
          >
            Hire me →
          </a>
        </div>
      )}
    </header>
  )
}
