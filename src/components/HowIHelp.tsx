const HELP = [
  {
    idx: 'Service 01',
    title: 'Product & Interaction Design',
    desc: 'End-to-end product design, from kickoff to shipped flows. Embedded with your team, learning your domain, delivering production-ready work.',
    list: ['Discovery', 'Flows & wireframes', 'High-fidelity UI', 'Handover & QA'],
  },
  {
    idx: 'Service 02',
    title: 'Strategy & Discovery',
    desc: 'Finding the real problem before we draw the pixels. Interviews, synthesis, opportunity maps, and the metrics that tell us we\'ve hit.',
    list: ['Interviews', 'Usability tests', 'Opportunity maps', 'North-star metrics'],
  },
  {
    idx: 'Service 03',
    title: 'Accessibility as Craft',
    desc: 'WCAG 2.2 isn\'t a checklist, it\'s a constraint that makes everything clearer. I build it into the first wireframe, not the last round of QA.',
    list: ['Colour & contrast', 'Keyboard & focus', 'Screen-reader pass', 'Cognitive load'],
  },
]

export default function HowIHelp() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="eyebrow">[ How I can help ]</div>
            <h2 className="h2">Three ways <span className="accent">to work together.</span></h2>
          </div>
          <div className="sec-head__right">Pick one lane or combine all three. Every engagement starts with a paid 2-week discovery.</div>
        </div>

        <div className="help-grid">
          {HELP.map(h => (
            <div key={h.idx} className="help-card">
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
