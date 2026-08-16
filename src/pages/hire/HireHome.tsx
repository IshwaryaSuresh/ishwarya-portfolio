import { Link } from 'react-router-dom'
import HireHero from './HireHero'
import HireTldr from './HireTldr'
import HireProjects from './HireProjects'
import HireAbout from './HireAbout'
import Journal from '../../components/Journal'

/* Minimal chrome: no studio brand, no "start a project" CTA. */
function HireNav() {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <span className="nav__brand">Ishwarya Suresh</span>
        <div className="nav__links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#journal">Writing</a>
        </div>
        <a
          href="/uploads/Ishwarya_Suresh_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav__cta"
        >
          CV <span>↓</span>
        </a>
      </div>
    </nav>
  )
}

function HireContact() {
  return (
    <section className="section hire-contact" id="contact">
      <div className="container">
        <h2 className="h2" data-reveal="up">Let's <span className="accent-teal">talk.</span></h2>
        <p className="hire-contact__lede" data-reveal="up" data-delay="100">
          Open to product design and UX research roles. Happy to walk through any of
          this work in detail, including the research behind it.
        </p>
        <div className="hire-contact__links" data-reveal="up" data-delay="200">
          <a href="mailto:ishwaryasuresh@madeforhumans.tech" className="btn-primary">
            ishwaryasuresh@madeforhumans.tech
          </a>
          <a
            href="https://www.linkedin.com/in/ishwarya-suresh-9123aa135/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            LinkedIn
          </a>
          <a
            href="/uploads/Ishwarya_Suresh_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link"
          >
            Download CV ↓
          </a>
        </div>
      </div>
    </section>
  )
}

function HireFooter() {
  return (
    <footer className="hire-footer">
      <div className="container">
        <span>Ishwarya Suresh · Product Designer &amp; UX Researcher</span>
        <Link to="/">Studio site →</Link>
      </div>
    </footer>
  )
}

export default function HireHome() {
  return (
    <>
      <HireNav />
      <HireHero />
      <HireTldr />
      <HireProjects />
      <HireAbout />
      <Journal />
      <HireContact />
      <HireFooter />
    </>
  )
}
