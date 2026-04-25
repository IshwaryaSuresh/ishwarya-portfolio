import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'

const PILLARS = [
  { n: '01', t: 'The Practice', d: 'A one-designer studio working remotely with product teams from founding to scale. Embedded, senior, in-sprint.' },
  { n: '02', t: 'The Posture', d: 'Product-minded, people-obsessed. I start with the job to be done, then ship work that moves product metrics, not just design ones.' },
  { n: '03', t: 'The Craft', d: 'Accessibility is assumed, not sold. Every flow is tested against real constraints: colour, keyboard, screen-reader, cognitive load.' },
  { n: '04', t: 'The Range', d: 'Fintech, edtech, B2C, healthcare and public sector. I move across domains and pattern-match fast.' },
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
        <div className="about__portrait">
          <img src="/uploads/pasted-1776596105683-0.png" alt="Ishwarya Suresh" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
        </div>
        <div className="about__body">
          <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>[ About the studio ]</div>
          <h2>A product designer <span className="accent-teal">made for humans.</span></h2>
          <p>MadeForHumans is an independent studio led by Ishwarya Suresh. We partner with early-stage teams and established orgs to ship calm, accessible products, from the first round of interviews to the final design system handover.</p>

          <div className="stats">
            <Stat target={5} suffix="+" label="Years practising" start={inView} />
            <Stat target={12} suffix="+" label="Shipped briefs" start={inView} />
            <Stat target={5} suffix="" label="Active sectors" start={inView} />
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
      </div>
    </section>
  )
}
