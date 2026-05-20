const HELP = [
  {
    idx: 'Service 01',
    title: 'Product & Interaction Design',
    desc: 'End-to-end product design, from kickoff to shipped flows. Embedded with your team, learning your domain, delivering production-ready work in Figma.',
    list: ['Discovery & user flows', 'Wireframes & prototypes', 'High-fidelity UI', 'Dev handover & QA'],
  },
  {
    idx: 'Service 02',
    title: 'Strategy & Discovery',
    desc: 'Finding the real problem before we draw the pixels. Stakeholder and user interviews, synthesis in Dovetail, opportunity maps, and north-star metrics.',
    list: ['Stakeholder interviews', 'Usability testing', 'Opportunity mapping', 'North-star metrics'],
  },
  {
    idx: 'Service 03',
    title: 'Service Design',
    desc: 'Designing across the whole journey, not just the screen. Service blueprints, cross-channel experience mapping, and GDS-standard delivery for government and regulated services.',
    list: ['Service blueprints', 'Journey mapping', 'GDS standards', 'Workshop facilitation'],
  },
  {
    idx: 'Service 04',
    title: 'Accessibility as Craft',
    desc: 'WCAG 2.2 is built in from the first wireframe, not bolted on at QA. Proven at scale, WCAG 2.1 AA compliance delivered for 200+ Local Authorities at MHCLG.',
    list: ['Colour & contrast', 'Keyboard & focus states', 'Screen-reader testing', 'Cognitive load'],
  },
  {
    idx: 'Service 05',
    title: 'Full-Stack Design Partnership',
    desc: 'All four disciplines in one engagement. Strategy and discovery to surface the right problem, service design to map the whole journey, interaction design to ship it, and accessibility baked in from day one. This is how complex products get built well: no handoff gaps, no siloed thinking.',
    list: ['End-to-end discovery & strategy', 'Service blueprints & journey mapping', 'High-fidelity UI & dev handover', 'WCAG 2.2 accessibility throughout'],
  },
]

export default function HowIHelp() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="eyebrow" data-reveal="up">How I can help</div>
            <h2 className="h2" data-reveal="up" data-delay="80">Five ways <span className="accent">to work together.</span></h2>
          </div>
          <div className="sec-head__right" data-reveal="up" data-delay="160">Pick one lane or combine them. Every engagement starts with a focused discovery to make sure we solve the right problem.</div>
        </div>

        <div className="help-grid">
          {HELP.map((h, i) => (
            <div key={h.idx} className="help-card" data-reveal="up" data-delay={i * 80}>
              <div className="help-card__idx">{h.idx}</div>
              <div className="help-card__title">{h.title}</div>
              <div className="help-card__desc">{h.desc}</div>
              <ul className="help-card__list">
                {h.list.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
