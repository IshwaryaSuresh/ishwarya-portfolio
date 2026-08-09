const PILLARS = [
  { n: '01', t: 'The Practice', d: 'Embedded in product teams, senior and in-sprint, from kickoff to developer handover. I work end-to-end: discovery, flows, high-fidelity UI, and coded prototypes.' },
  { n: '02', t: 'The Posture', d: 'Research-led, metric-driven. I find the real problem before drawing a pixel - through interviews, usability testing, synthesis in Dovetail, and opportunity mapping.' },
  { n: '03', t: 'The Craft', d: 'WCAG 2.2 is built in from the first wireframe, not bolted on at QA. Colour, keyboard, screen-reader, cognitive load - all tested against real constraints.' },
  { n: '04', t: 'The Range', d: 'Public sector (GDS), healthcare, edtech, and fintech. MSc HCI - I bring systems thinking and research rigour across every domain I work in.' },
]

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="stat">
      <div className="stat__num">{value}</div>
      <div className="stat__lbl">{label}</div>
    </div>
  )
}

export default function NumbersAbout() {
  return (
    <section className="section section--tight" id="about">
      <div className="about" data-parallax="0.04">
        <div className="about__top">
          <div className="about__left">
            <h2 data-reveal="left" data-delay="100">A product designer <span className="accent-teal">made for humans.</span></h2>
            <p data-reveal="left" data-delay="200">I'm a product designer and UX researcher working end-to-end across web and mobile: research and discovery, user flows, wireframes, high-fidelity UI, design systems, and coded prototypes. Most recently User Researcher at the Ministry of Housing, Communities and Local Government, where I delivered WCAG 2.1 AA compliance across 200+ Local Authorities. MSc HCI, Newcastle University.</p>
            <p className="about__outside" data-reveal="left" data-delay="300">Outside work I'm a specialty coffee enthusiast, always chasing a better brew and seeking out local roasters. I'm into skincare and fashion styling, which keep my eye for detail and aesthetics sharp beyond the screen. I spend plenty of time with my dogs.</p>
          </div>
          <div className="about__right">
            <div className="about__portrait" data-reveal="right">
              <img src="/uploads/portrait-colour.jpg" alt="Ishwarya Suresh" />
            </div>
          </div>
        </div>

        <div className="stats">
          <div data-reveal="up" data-delay="0"><Stat value="5+" label="Years practising" /></div>
          <div data-reveal="up" data-delay="100"><Stat value="200+" label="Local Authorities served (WCAG AA)" /></div>
          <div data-reveal="up" data-delay="200"><Stat value="20%" label="Course completion lift" /></div>
        </div>

        <div className="about__pillars">
          {PILLARS.map((p, i) => (
            <div key={p.n} className="pillar" data-reveal="up" data-delay={i * 80}>
              <div className="pillar__t">{p.t}</div>
              <div className="pillar__d">{p.d}</div>
            </div>
          ))}
        </div>

        {/* Where I've worked, full timeline drawn from the live CV */}
        <div className="about__experience">
          <div className="about__experience-head" data-reveal="up">
            <h3 className="about__experience-title">Where I've <span className="accent-teal">worked.</span></h3>
          </div>
          <ol className="about__cv">
            <li className="about__cv-row" data-reveal="up" data-delay="0">
              <span className="about__cv-year">Since May 2025</span>
              <div>
                <p className="about__cv-role">Product Designer &amp; UX Researcher, Independent</p>
                <p className="about__cv-meta">End-to-end product design, discovery &amp; strategy, and WCAG 2.2 accessibility. Selected work: Kaizen (consumer fintech) and Ledgerline (explainable decisioning), both taken from research through to working coded prototypes.</p>
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
              <span className="about__cv-year">Apr 2023 to Apr 2025</span>
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
                <p className="about__cv-role">Product Design Intern, Nebula Labs</p>
                <p className="about__cv-meta">Led research for the Me &amp; You digital app, dementia care. Interviews, field studies, and co-design workshops with patients and carers, validated with Newcastle and Northumbria academics.</p>
              </div>
            </li>
            <li className="about__cv-row" data-reveal="up" data-delay="400">
              <span className="about__cv-year">Apr 2021 to Feb 2023</span>
              <div>
                <p className="about__cv-role">UX Designer, Freelance (Part-Time)</p>
                <p className="about__cv-meta">Delivered UX design and research for clients across multiple sectors alongside postgraduate studies. Wireframes and prototypes in Figma and Sketch. User research, usability testing, and competitive analysis informing user-centred designs.</p>
              </div>
            </li>
            <li className="about__cv-row" data-reveal="up" data-delay="480">
              <span className="about__cv-year">2021 to 2022</span>
              <div>
                <p className="about__cv-role">MSc Human-Computer Interaction, Newcastle University</p>
                <p className="about__cv-meta">Interaction Design, UX Research Methods, Prototyping. Dissertation co-designed and evaluated an ambient air-quality sensing technology for workplace well-being; acknowledged in a paper accepted at ACM CHI 2024.</p>
              </div>
            </li>
            <li className="about__cv-row" data-reveal="up" data-delay="560">
              <span className="about__cv-year">Jan to Mar 2021</span>
              <div>
                <p className="about__cv-role">UX/UI Design Intern, AnywhereWorks / FULL Creative</p>
                <p className="about__cv-meta">Redesigned AnywhereWorks platform UI and built a design system and style guide. Simplified onboarding workflows for the Switchboard app, increasing activation.</p>
              </div>
            </li>
            <li className="about__cv-row" data-reveal="up" data-delay="640">
              <span className="about__cv-year">2015 to 2020</span>
              <div>
                <p className="about__cv-role">Bachelor of Architecture (B.Arch), Anna University</p>
                <p className="about__cv-meta">Five-year professional degree. Design thinking, sustainable design, and systems-level problem-solving.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}
