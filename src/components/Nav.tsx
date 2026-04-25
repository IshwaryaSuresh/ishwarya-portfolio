export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <div className="nav__brand">MadeForHumans</div>
        <div className="nav__links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#journal">Journal</a>
        </div>
        <a href="#brief" className="nav__cta">
          Start a project <span>→</span>
        </a>
      </div>
    </nav>
  )
}
