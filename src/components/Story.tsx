const ARTWORK = [
  {
    src: '/uploads/behance/the-hub.png',
    caption: 'The Hub · architecture school, Chennai',
    speed: '0.06',
  },
  {
    src: '/uploads/behance/micro-g.png',
    caption: 'Micro-G Chamber · speculative design',
    speed: '0.1',
  },
  {
    src: '/uploads/behance/peanut-butter.png',
    caption: 'Créme ou Croquer · illustration',
    speed: '0.05',
  },
  {
    src: '/uploads/behance/redesign.png',
    caption: 'Re-design · the first UX case study',
    speed: '0.09',
  },
]

const BELIEFS = [
  'Tech is for all, not just tech-savvy folks.',
  'Equality, inclusivity and WCAG are the floor, not features.',
  'Design is not hard if you enjoy the process. But it is never-ending.',
  'Setbacks are important.',
]

export default function Story() {
  return (
    <section className="section story" id="story">
      <div className="container">
        <div className="sec-head">
          <div>
            <h2 className="h2" data-reveal="up">From buildings <span className="accent">to screens.</span></h2>
          </div>
          <div className="sec-head__right" data-reveal="up" data-delay="120">
            The architecture years, the jump to HCI, and why I keep my options open. Told in my own words, drawn from the statement that got me into Newcastle.
          </div>
        </div>

        <div className="story__grid">
          <div className="story__text">
            <p data-reveal="up">
              I grew up in Chennai, set on keeping my options open despite the
              restrictions around me. Architecture was my way of doing that. The
              transition from an 18-year-old schoolgirl to a confident 22-year-old
              architect was tremendous.
            </p>
            <p data-reveal="up" data-delay="100">
              Five years of architecture taught me that design is a problem-solving
              tool, and the same tool works on any problem: a building, a service, a
              screen. I started seeing user experience everywhere. The signboards that
              navigate you through a city. Parking-lot signs. The circulation of a
              building. All of it is designed experience. Screens are just where I
              chose to practise it.
            </p>
            <p data-reveal="up" data-delay="200">
              The jump from architect to UX designer was a roller coaster: scary, but
              super exciting. I took my cue from Brunelleschi, a goldsmith who followed
              what he loved into architecture and became the father of the Renaissance.
              Stepping out of your comfort zone is the whole job. So: a design course,
              a first internship in Chennai, an MSc in HCI at Newcastle, research for
              the UK government, and now MadeForHumans.
            </p>
          </div>

          <div className="story__strip" aria-label="Early work, from architecture school to first UX projects">
            {ARTWORK.map((a, i) => (
              <figure key={a.src} className="story__piece" data-reveal="up" data-delay={i * 90}>
                <div className="story__piece-mask">
                  <img src={a.src} alt={a.caption} data-parallax={a.speed} loading="lazy" />
                </div>
              </figure>
            ))}
          </div>
        </div>

        <ul className="story__beliefs">
          {BELIEFS.map((b, i) => (
            <li key={b} data-reveal="up" data-delay={i * 80}>{b}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
