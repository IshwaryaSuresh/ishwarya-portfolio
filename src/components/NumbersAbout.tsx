import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'

const PILLARS = [
  { n: '01', t: 'The Practice', d: 'An independent UX consultancy working with startups, studios, and government. Embedded, senior, in-sprint - from kickoff to developer handover.' },
  { n: '02', t: 'The Posture', d: 'Research-led, metric-driven. I find the real problem before drawing a pixel - through interviews, usability testing, synthesis in Dovetail, and opportunity mapping.' },
  { n: '03', t: 'The Craft', d: 'WCAG 2.2 is built in from the first wireframe, not bolted on at QA. Colour, keyboard, screen-reader, cognitive load - all tested against real constraints.' },
  { n: '04', t: 'The Range', d: 'Public sector (GDS), healthcare, edtech, fintech, architecture, and startups. MSc HCI, B.Arch - I bring systems thinking and research rigour across every domain.' },
]

function Stat({ target, suffix = '', label, start }: { target: number; suffix?: string; label: string; start: boolean }) {
  const value = useCountUp(target, 1600, start)
  return (
    <div className="stat">
      <div className="stat__num">{value}{suffix}</div>
      <div className="stat__lbl">{label}</div>
    </div>
  )
}

export default function NumbersAbout() {
  const [ref, inView] = useInView()
  return (
    <section className="section section--tight" id="about">
      <div ref={ref as React.RefObject<HTMLDivElement>} className="about" data-parallax="0.04">
        <div className="about__top">
          <div className="about__left">
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>[ About the studio ]</div>
            <h2>A product designer <span className="accent-teal">made for humans.</span></h2>
            <p>I'm a UX Consultant and Founder of MadeForHumans. Previously User Researcher at the Ministry of Housing, Communities and Local Government, I now work with startups, studios, and SMEs on end-to-end product design, service design, and WCAG-compliant accessibility. MSc HCI, Newcastle University.</p>
          </div>
          <div className="about__right">
            <div className="about__portrait">
              <img src="/uploads/portrait-colour.jpg" alt="Ishwarya Suresh" />
            </div>
          </div>
        </div>

        <div className="stats">
          <Stat target={5} suffix="+" label="Years practising" start={inView} />
          <Stat target={50} suffix="+" label="Local Authorities served (WCAG AA)" start={inView} />
          <Stat target={20} suffix="%" label="Course completion lift" start={inView} />
        </div>

        <div className="about__pillars">
          {PILLARS.map(p => (
            <div key={p.n} className="pillar">
              <div className="pillar__n">{p.n}</div>
              <div className="pillar__t">{p.t}</div>
              <div className="pillar__d">{p.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
