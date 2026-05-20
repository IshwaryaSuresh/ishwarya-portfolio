import { useState } from 'react'

const FAQ = [
  { q: 'What services do you offer?', a: 'Product and interaction design, service design, strategy and discovery, and WCAG 2.2 accessibility. Most engagements combine discovery with delivery. I also take on focused accessibility audits and GDS-standard service design independently.' },
  { q: 'What sectors do you work in?', a: 'Public sector (government, GDS standards), healthcare, edtech, fintech, architecture, and startups. I have direct experience at MHCLG delivering WCAG 2.1 AA compliance for 200+ Local Authorities, and have led design for healthcare, remote learning, and dementia care products.' },
  { q: 'How does your process work?', a: 'Four phases: Listen (stakeholder and user interviews), Frame (synthesis, opportunity maps, success metrics), Shape (concepts, flows, usability-tested prototypes), and Ship (production UI, handover, QA with engineering). Each phase ends with a written update.' },
  { q: 'How long does a project take?', a: 'Most end-to-end briefs run 6 to 10 weeks. A focused discovery or accessibility audit runs 1 to 2 weeks. Retainers are month-to-month.' },
  { q: 'What do I need to provide before we start?', a: 'A one-page brief, access to 3 to 5 internal stakeholders, and, if you have them, existing research, analytics, and design files. No brief is too rough to start from.' },
  { q: 'Do you work with in-house teams or alongside agencies?', a: 'Both. I slot into product squads as an embedded senior UX consultant, or partner with agencies as a specialist on research, interaction design, service design, or accessibility. I can also join mid-project.' },
  { q: 'How do we get started?', a: 'Send a short brief using the form below or email ishwaryasuresh97@gmail.com. I reply within two working days with a short intake and a time to talk.' },
]

export default function Essentials() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section">
      <div className="container">
        <div className="faq">
          <div className="faq__label">
            <div className="eyebrow">The essentials</div>
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
