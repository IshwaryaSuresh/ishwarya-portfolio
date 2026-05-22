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
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }} data-reveal="left">About the studio</div>
            <h2 data-reveal="left" data-delay="100">A product designer <span className="accent-teal">made for humans.</span></h2>
            <p data-reveal="left" data-delay="200">I'm a UX Consultant and Founder of MadeForHumans. Previously User Researcher at the Ministry of Housing, Communities and Local Government, I now work with startups, studios, and SMEs on end-to-end product design, service design, and WCAG-compliant accessibility. MSc HCI, Newcastle University.</p>
          </div>
          <div className="about__right">
            <div className="about__portrait" data-reveal="right">
              <img src="/uploads/portrait-colour.jpg" alt="Ishwarya Suresh" />
            </div>
          </div>
        </div>

        <div className="stats">
          <div data-reveal="up" data-delay="0"><Stat target={4} suffix="+" label="Years practising" start={inView} /></div>
          <div data-reveal="up" data-delay="100"><Stat target={200} suffix="+" label="Local Authorities served (WCAG AA)" start={inView} /></div>
          <div data-reveal="up" data-delay="200"><Stat target={20} suffix="%" label="Course completion lift" start={inView} /></div>
        </div>

        <div className="about__pillars">
          {PILLARS.map((p, i) => (
            <div key={p.n} className="pillar" data-reveal="up" data-delay={i * 80}>
              <div className="pillar__n">{p.n}</div>
              <div className="pillar__t">{p.t}</div>
              <div className="pillar__d">{p.d}</div>
            </div>
          ))}
        </div>

        {/* Where I've worked, full timeline drawn from the live CV */}
        <div className="about__experience">
          <div className="about__experience-head" data-reveal="up">
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>Where I've worked</div>
            <h3 className="about__experience-title">Public sector at scale, fintech in flight.</h3>
          </div>
          <ol className="about__cv">
            <li className="about__cv-row" data-reveal="up" data-delay="0">
              <span className="about__cv-year">May 2025, Now</span>
              <div>
                <p className="about__cv-role">Founder, Product Designer &amp; UX Researcher, MadeForHumans</p>
                <p className="about__cv-meta">Independent consultancy. End-to-end product design, discovery &amp; strategy, and WCAG 2.2 accessibility for startups, studios, and SMEs. Selected work: Kaizen (consumer fintech), Ledgerline (explainable decisioning).</p>
              </div>
            </li>
            <li className="about__cv-row" data-reveal="up" data-delay="80">
              <span className="about__cv-year">Jul 2024 to Apr 2025</span>
              <div>
                <p className="about__cv-role">User Researcher, Ministry of Housing, Communities &amp; Local Government (MHCLG)</p>
                <p className="about__cv-meta">Led UX strategy for UK government grants services to GDS standards. Achieved WCAG 2.1 AA compliance across 200+ Local Authorities. Surveys, semi-structured interviews, moderated usability testing; ResearchOps and senior-stakeholder playback.</p>
              </div>
            </li>
            <li className="about__cv-row" data-reveal="up" data-delay="160">
              <span className="about__cv-year">Sep 2023 to Apr 2025</span>
              <div>
                <p className="about__cv-role">UX Consultant, Freelance</p>
                <p className="about__cv-meta">Embedded with founder and product teams across healthcare, education, and tech. Healthcare mobile app, engagement +15%. Remote-learning platform, course completion +20%. WCAG 2.1 AA embedded from first wireframe.</p>
              </div>
            </li>
            <li className="about__cv-row" data-reveal="up" data-delay="240">
              <span className="about__cv-year">Aug to Sep 2023</span>
              <div>
                <p className="about__cv-role">UX Designer / Researcher, Novacroft</p>
                <p className="about__cv-meta">Led UX for the Transport for London (TfL) Care Leaver Oyster Card campaign. Persona development, journey mapping, inclusive-design prototyping in InVision.</p>
              </div>
            </li>
            <li className="about__cv-row" data-reveal="up" data-delay="320">
              <span className="about__cv-year">Feb to Apr 2023</span>
              <div>
                <p className="about__cv-role">User Research Intern, Nebula Labs</p>
                <p className="about__cv-meta">Led research for the Me &amp; You digital app, dementia care. Interviews, field studies, and co-design workshops with patients and carers, validated with Newcastle and Northumbria academics.</p>
              </div>
            </li>
            <li className="about__cv-row" data-reveal="up" data-delay="400">
              <span className="about__cv-year">2021 to 2022</span>
              <div>
                <p className="about__cv-role">MSc Human-Computer Interaction, Newcastle University</p>
                <p className="about__cv-meta">Interaction Design, UX Research Methods, Prototyping. Dissertation co-designed and evaluated an ambient air-quality sensing technology for workplace well-being; acknowledged in a paper accepted at ACM CHI 2024.</p>
              </div>
            </li>
            <li className="about__cv-row" data-reveal="up" data-delay="480">
              <span className="about__cv-year">Jan to Mar 2021</span>
              <div>
                <p className="about__cv-role">UX/UI Design Intern, AnywhereWorks / FULL Creative</p>
                <p className="about__cv-meta">Redesigned AnywhereWorks platform UI and built a design system and style guide. Simplified onboarding workflows for the Switchboard app, increasing activation.</p>
              </div>
            </li>
            <li className="about__cv-row" data-reveal="up" data-delay="560">
              <span className="about__cv-year">2015 to 2020</span>
              <div>
                <p className="about__cv-role">Bachelor of Architecture (B.Arch), Anna University</p>
                <p className="about__cv-meta">Design thinking, sustainable design, and systems-level problem-solving. The foundation I still draw on for service design and information architecture.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}
