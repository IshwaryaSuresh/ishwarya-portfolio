import { useState } from 'react'

const FAQ = [
  { q: 'What services do I offer?', a: 'UX research, product design, design systems, prototyping and usability testing, tailored to the shape of your brief. Most engagements combine discovery with delivery.' },
  { q: 'How does the design process work?', a: 'Four phases: Listen, Frame, Shape, Ship. Each phase ends with a short written update so you\'re never surprised.' },
  { q: 'How long does a project take?', a: 'Most end-to-end briefs run 6 to 10 weeks. A focused design sprint runs 1 to 2 weeks. Retainers are month-to-month.' },
  { q: 'What do I need to provide before we start?', a: 'A one-page brief, access to 3 to 5 internal stakeholders, and (if you have them) existing research, analytics and design files.' },
  { q: 'Do you work with in-house teams or alongside an agency?', a: 'Both. I slot into product squads as an embedded senior, or partner with agencies as a specialist pair of hands on research, UX or design-system work. I can also join mid-project.' },
  { q: 'How do we get started?', a: 'Send a short brief through the form below or email studio@madeforhumans.design. I reply within two working days.' },
]

export default function Essentials() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section">
      <div className="container">
        <div className="faq">
          <div className="faq__label">
            <div className="eyebrow">[ FAQ ]</div>
            <h2>The <span className="accent">essentials.</span></h2>
            <p>A clear breakdown of how I work and what to expect when we partner on a brief.</p>
            <a href="#brief" className="btn-primary">Any specific questions? →</a>
          </div>
          <div className="faq__list">
            {FAQ.map((item, i) => (
              <div key={i} className={'faq__item ' + (open === i ? 'is-open' : '')}>
                <button className="faq__q" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span>{item.q}</span>
                  <span className="icon">+</span>
                </button>
                <div className="faq__a">
                  <div className="faq__a-inner">{item.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
