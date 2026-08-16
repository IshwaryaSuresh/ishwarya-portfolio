import { useState } from 'react'

const LINKS = [
  { href: '/#work',     label: 'Work' },
  { href: '/#about',    label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#journal',  label: 'Journal' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <>
      <nav className="nav">
        <div className="nav__inner">
          <a href="/" className="nav__brand" style={{ textDecoration: 'none', color: 'inherit' }}>MadeForHumans</a>

          {/* Desktop links */}
          <div className="nav__links">
            {LINKS.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
          </div>

          {/* Desktop CTA */}
          <a href="/#brief" className="nav__cta nav__cta--desktop">
            Start a project <span>→</span>
          </a>

          {/* Mobile hamburger */}
          <button
            className={`nav__burger${open ? ' is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(v => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav__drawer${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <div className="nav__drawer-inner">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} className="nav__drawer-link" onClick={close}>{l.label}</a>
          ))}
          <a href="/#brief" className="btn-primary nav__drawer-cta" onClick={close}>
            Start a project →
          </a>
        </div>
      </div>
    </>
  )
}
