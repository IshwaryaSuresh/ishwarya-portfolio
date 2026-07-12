const STEPS = [
  { num: 'Step 01', title: 'Listen', desc: 'Kick-off, stakeholder mapping, and user interviews. I leave this phase with the real problem in my hands.', tag: 'Week 1 to 2' },
  { num: 'Step 02', title: 'Frame', desc: 'Synthesis, opportunity maps, principles and success metrics. We agree on what "good" looks like.', tag: 'Week 2 to 3' },
  { num: 'Step 03', title: 'Shape', desc: 'Concepts, flows, and testable prototypes. Two rounds of usability testing before we commit.', tag: 'Week 3 to 6' },
  { num: 'Step 04', title: 'Ship', desc: 'Production UI, handover and in-sprint QA with engineering. Plus a measurement plan for what ships.', tag: 'Week 6 to 10' },
]

export default function HowIWork() {
  return (
    <section className="section work">
      <div className="container">
        <div className="sec-head">
          <div>
            <h2 className="h2" style={{ color: 'var(--white)' }}>A clear process, <span style={{ color: 'var(--teal-300)' }}>no mystery meat.</span></h2>
          </div>
          <div className="sec-head__right">A predictable cadence from listening to launch, usually 6 to 10 weeks end-to-end.</div>
        </div>

        <div className="process">
          {STEPS.map(s => (
            <div key={s.num} className="step">
              <div className="step__num">{s.num}</div>
              <div className="step__title">{s.title}</div>
              <div className="step__desc">{s.desc}</div>
              <div className="step__tag">{s.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
