const SHEET = [
  { src: '/uploads/me-and-you/prototype-multi.png', label: 'Me & You · dementia care', span: 'wide', speed: '0.05' },
  { src: '/uploads/mhclg-hero.png', label: 'MHCLG grants · GDS', span: 'tall', speed: '0.08' },
  { src: '/uploads/ledgerline/hero.png', label: 'Ledgerline · explainable credit', span: 'wide', speed: '0.06' },
  { src: '/uploads/kaizen/screens/dashboard.png', label: 'Kaizen · dashboard', span: '', speed: '0.1' },
  { src: '/uploads/Accord/Phone%20mockup_3@4x.png', label: 'Accord · ambient UX', span: '', speed: '0.04' },
  { src: '/uploads/kaizen/screens/onboarding.png', label: 'Kaizen · onboarding', span: '', speed: '0.09' },
  { src: '/uploads/TFL%20Care%20leaver%20oyester%20card%20campaign/mockup.png', label: 'TfL · care leaver campaign', span: 'wide', speed: '0.07' },
  { src: '/uploads/kaizen/screens/invest.png', label: 'Kaizen · investing', span: '', speed: '0.05' },
]

const FACTS = [
  { v: '5+', l: 'Years practising' },
  { v: '200+', l: 'Local Authorities at WCAG 2.1 AA' },
  { v: 'CHI 2024', l: 'Research acknowledged' },
  { v: '6', l: 'End-to-end case studies' },
]

export default function HireTldr() {
  return (
    <section className="section section--tight hire-tldr">
      <div className="container">
        <div className="sec-head">
          <div>
            <h2 className="h2" data-reveal="up">The short <span className="accent">version.</span></h2>
          </div>
          <div className="sec-head__right" data-reveal="up" data-delay="120">
            Product designer and UX researcher. End-to-end across web and mobile: research and discovery through user flows, high-fidelity UI, design systems, and coded prototypes. Accessibility-led to WCAG and GDS standards.
          </div>
        </div>

        <div className="hire-facts" data-reveal="up" data-delay="180">
          {FACTS.map(f => (
            <div key={f.l} className="hire-fact">
              <span className="hire-fact__v">{f.v}</span>
              <span className="hire-fact__l">{f.l}</span>
            </div>
          ))}
        </div>

        <div className="hire-sheet">
          {SHEET.map((s, i) => (
            <figure
              key={s.src}
              className={`hire-sheet__cell${s.span ? ` hire-sheet__cell--${s.span}` : ''}`}
              data-reveal="up"
              data-delay={i * 60}
            >
              <div className="hire-sheet__mask">
                <img src={s.src} alt={s.label} data-parallax={s.speed} loading="lazy" />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
