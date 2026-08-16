/* Hiring version: no company or founder framing, no architecture history. */

const PILLARS = [
  {
    t: 'The Posture',
    d: 'Research-led and metric-driven. I find the real problem before drawing a pixel, through interviews, usability testing, synthesis in Dovetail, and opportunity mapping.',
  },
  {
    t: 'The Craft',
    d: 'WCAG 2.2 is built in from the first wireframe, not bolted on at QA. Colour, keyboard, screen-reader, cognitive load, all tested against real constraints.',
  },
  {
    t: 'The Range',
    d: 'Public sector to GDS standards, healthcare, edtech, and fintech. MSc HCI, with research acknowledged at ACM CHI 2024.',
  },
  {
    t: 'The Practice',
    d: 'Embedded and in-sprint, from kickoff to developer handover. Comfortable as the only researcher on a workstream or inside a full agile delivery team.',
  },
]

const TIMELINE = [
  {
    year: 'Since 2025',
    role: 'Product Designer & UX Researcher, independent',
    meta: 'End-to-end product design, discovery and strategy, and WCAG 2.2 accessibility. Self-directed product studies: Kaizen (consumer fintech) and Ledgerline (explainable credit decisioning), both taken to working coded prototypes.',
  },
  {
    year: 'Jul 2024 to Apr 2025',
    role: 'User Researcher, Ministry of Housing, Communities & Local Government',
    meta: 'Led UX research for UK government grants services to GDS Service Standard. WCAG 2.1 AA compliance across 200+ Local Authorities. Surveys, semi-structured interviews, moderated usability testing with assistive-technology users; ResearchOps and senior-stakeholder playback.',
  },
  {
    year: 'Apr 2023 to Apr 2025',
    role: 'UX Consultant, freelance',
    meta: 'Embedded with founder and product teams across healthcare, education, and tech. Healthcare mobile app, engagement +15%. Remote-learning platform, course completion +20%. WCAG 2.1 AA embedded from the first wireframe.',
  },
  {
    year: 'Aug to Sep 2023',
    role: 'UX Designer / Researcher, Novacroft',
    meta: 'Led UX for the Transport for London Care Leaver Oyster Card campaign. Persona development, journey mapping, inclusive-design prototyping.',
  },
  {
    year: 'Feb to Apr 2023',
    role: 'Product Design Intern, Nebula Labs',
    meta: 'Led research for the Me & You dementia care app. Interviews, field studies, and co-design workshops with patients and carers, validated with Newcastle and Northumbria academics.',
  },
  {
    year: 'Apr 2021 to Feb 2023',
    role: 'UX Designer, freelance (part-time)',
    meta: 'UX design and research for clients across multiple sectors alongside postgraduate studies. Wireframes and prototypes in Figma and Sketch; user research, usability testing, and competitive analysis.',
  },
  {
    year: '2021 to 2022',
    role: 'MSc Human-Computer Interaction, Newcastle University',
    meta: 'Interaction Design, UX Research Methods, Prototyping. Dissertation co-designed and evaluated an ambient air-quality sensing technology for workplace well-being; acknowledged in a paper accepted at ACM CHI 2024.',
  },
  {
    year: 'Jan to Mar 2021',
    role: 'UX/UI Design Intern, AnywhereWorks / FULL Creative',
    meta: 'Redesigned the platform UI and built a design system and style guide. Simplified onboarding workflows for the Switchboard app, increasing activation.',
  },
]

export default function HireAbout() {
  return (
    <section className="section section--tight" id="about">
      <div className="about" data-parallax="0.04">
        <div className="about__top">
          <div className="about__left">
            <h2 data-reveal="left" data-delay="100">A product designer <span className="accent-teal">made for humans.</span></h2>
            <p data-reveal="left" data-delay="200">
              I'm a product designer and UX researcher working across web and mobile,
              from research and discovery through user flows, high-fidelity UI, design
              systems, and coded prototypes. Previously User Researcher at the Ministry
              of Housing, Communities and Local Government. MSc HCI, Newcastle University.
            </p>
            <p className="about__outside" data-reveal="left" data-delay="300">
              Outside work I'm a specialty coffee enthusiast, always chasing a better brew
              and seeking out local roasters. I'm into skincare and fashion styling, which
              keep my eye for detail and aesthetics sharp beyond the screen. I spend plenty
              of time with my dogs.
            </p>
          </div>
          <div className="about__right">
            <div className="about__portrait" data-reveal="right">
              <img src="/uploads/portrait-colour.jpg" alt="Ishwarya Suresh" />
            </div>
          </div>
        </div>

        <div className="about__pillars">
          {PILLARS.map((p, i) => (
            <div key={p.t} className="pillar" data-reveal="up" data-delay={i * 80}>
              <div className="pillar__t">{p.t}</div>
              <div className="pillar__d">{p.d}</div>
            </div>
          ))}
        </div>

        <div className="about__experience">
          <div className="about__experience-head" data-reveal="up">
            <h3 className="about__experience-title">Where I've <span className="accent-teal">worked.</span></h3>
          </div>
          <ol className="about__cv">
            {TIMELINE.map((t, i) => (
              <li key={t.year + t.role} className="about__cv-row" data-reveal="up" data-delay={i * 70}>
                <span className="about__cv-year">{t.year}</span>
                <div>
                  <p className="about__cv-role">{t.role}</p>
                  <p className="about__cv-meta">{t.meta}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
