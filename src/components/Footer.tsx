import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-paper">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <p className="font-semibold text-ink text-lg">Ishwarya Suresh</p>
            <p className="text-muted text-sm mt-1">UX Consultant — Fintech · Healthcare · Edtech</p>
            <p className="text-muted text-sm mt-1">United Kingdom / Remote</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-1">Navigation</p>
            {[
              { to: '/', label: 'Home' },
              { to: '/work', label: 'Work' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' },
            ].map(link => (
              <Link key={link.to} to={link.to} className="text-sm text-ink hover:text-accent transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-1">Connect</p>
            <a
              href="https://www.linkedin.com/in/ishwarya-suresh-9123aa135/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://medium.com/@ishwaryasuresh97"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink hover:text-accent transition-colors"
            >
              Medium
            </a>
            <a href="mailto:ishwaryasuresh97@gmail.com" className="text-sm text-ink hover:text-accent transition-colors">
              ishwaryasuresh97@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-muted">© {new Date().getFullYear()} Ishwarya Suresh. All rights reserved.</p>
          <p className="text-xs text-muted">Available for freelance & full-time — Netherlands · UK · Australia · NZ</p>
        </div>
      </div>
    </footer>
  )
}
