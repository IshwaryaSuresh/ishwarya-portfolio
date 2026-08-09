const BELIEFS: { before: string; teal: string; after: string; speed: string }[] = [
  { before: 'Tech is for ', teal: 'all', after: ', not just tech-savvy folks.', speed: '0.04' },
  { before: 'Equality, inclusivity and WCAG are ', teal: 'the floor', after: ', not features.', speed: '0.06' },
  { before: 'Design is not hard if you ', teal: 'enjoy the process', after: '. But it is never-ending.', speed: '0.03' },
  { before: '', teal: 'Setbacks', after: ' are important.', speed: '0.05' },
]

export default function Story() {
  return (
    <section className="section story story--manifesto" id="story">
      {/* Manifesto: full-bleed dark plate, statements at display scale */}
      <ul className="manifesto">
        {BELIEFS.map((b, i) => (
          <li key={b.teal} data-reveal="up" data-delay={i * 90}>
            <span className="manifesto__line" data-parallax={b.speed}>
              {b.before}<span className="manifesto__teal">{b.teal}</span>{b.after}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
