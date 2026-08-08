import { Link } from 'react-router-dom'

const experience = [
  {
    role: 'UX Consultant',
    company: 'MadeForHumans',
    period: 'May 2025 to Present',
    location: 'Remote',
    points: [
      'Built lightweight design systems (design tokens, component variants) in Figma with annotated specs and Inspect-ready handoff for developers.',
      'Embedded accessibility from the start, content design, colour contrast, focus/keyboard states, to WCAG 2.1 AA.',
      'Ran stakeholder & prospective-client interviews, competitive benchmarking, and produced research-driven IA and user flows in Framer.',
      'Led mixed-methods research (interviews, usability tests, surveys, card sorting, tree testing); synthesised with thematic analysis in Dovetail.',
    ],
  },
  {
    role: 'User Researcher',
    company: 'Ministry of Housing, Communities and Local Government',
    period: 'Jul 2024 to Apr 2025',
    location: 'Newcastle upon Tyne, UK',
    points: [
      'Led UX strategy for government grants services; achieved WCAG 2.1 AA compliance across 200+ Local Authorities.',
      'Planned and ran surveys, semi-structured interviews, and moderated usability testing; analysed with thematic analysis and affinity mapping.',
      'Presented insights and service design recommendations to senior stakeholders; influenced product roadmaps with data-informed decisions.',
      'Collaborated within an agile team of service designers, product managers, and developers.',
    ],
  },
  {
    role: 'Freelance UX Consultant',
    company: 'Self-employed',
    period: 'Apr 2023 to Apr 2025',
    location: 'UK, Remote',
    points: [
      'Led end-to-end product design for a healthcare mobile app; mapped IA and simplified navigation in Figma, resulting in ↑15% engagement.',
      'Redesigned a remote-learning platform, increasing course completion ↑20%.',
      'Conducted in-depth user research and iterative prototyping for clients in healthcare, education, and tech.',
    ],
  },
  {
    role: 'UX Designer & Researcher',
    company: 'Novacroft / Transport for London',
    period: 'Aug to Sep 2023',
    location: 'UK, Remote',
    points: [
      'Led UX for the TfL Care Leaver Oyster Card campaign, focusing on inclusive design for vulnerable groups.',
      'Executed a full research and design cycle including persona development, journey mapping, and InVision prototyping.',
    ],
  },
  {
    role: 'Product Design Intern',
    company: 'Nebula Labs',
    period: 'Feb to Apr 2023',
    location: 'Newcastle, UK',
    points: [
      'Led research for the Me & You dementia care app, synthesising interviews, field studies, and co-design workshops into actionable design strategies.',
      'Research acknowledged in a paper accepted at ACM CHI 2024 Conference.',
    ],
  },
]

const skills = {
  'UX & Service Design': ['Journey Mapping', 'Wireframing', 'Prototyping', 'Information Architecture', 'Service Blueprints', 'Accessibility (WCAG)', 'Inclusive Design'],
  'User Research': ['Interviews', 'Usability Testing', 'Co-design Workshops', 'Ethnographic Studies', 'Card Sorting', 'Tree Testing', 'Surveys', 'A/B Testing'],
  'Tools': ['Figma', 'Dovetail', 'Miro', 'InVision', 'Principle', 'Hotjar', 'Framer', 'Tableau'],
  'Collaboration': ['Agile', 'Stakeholder Management', 'Workshop Facilitation', 'Cross-functional Teams'],
}

export default function About() {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-4">About</p>
            <h1 className="text-4xl font-bold text-ink mb-6">
              Research depth.<br />Product sense.<br />
              <span className="text-accent">Outcomes that matter.</span>
            </h1>
          </div>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              I'm Ishwarya, a UX consultant based between India and the UK with a background in architecture, HCI research, and product design. I blend rigorous research with pragmatic design to move the metrics that actually matter.
            </p>
            <p>
              My path has taken me through government services, healthcare startups, fintech concepts, and edtech platforms. That breadth isn't accidental, I believe the best UX practitioners carry patterns across domains that specialists miss.
            </p>
            <p>
              My MSc dissertation at Newcastle University (co-designed ambient air quality sensing) was acknowledged at the <strong className="text-ink">ACM CHI 2024 Conference</strong>. My architecture background gives me an unusual lens on systems, flows, and the relationship between space and behaviour.
            </p>
            <p>
              I'm currently targeting roles and projects in the <strong className="text-ink">Netherlands, UK, Australia, and New Zealand</strong>, and actively taking on freelance work.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="mailto:ishwaryasuresh@madeforhumans.tech"
                className="text-sm font-medium text-accent hover:underline"
              >
                Get in touch →
              </a>
              <a
                href="https://www.linkedin.com/in/ishwarya-suresh-9123aa135/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted hover:text-ink transition-colors"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-widest text-muted mb-8">Experience</p>
          <div className="space-y-10">
            {experience.map(exp => (
              <div key={exp.company + exp.period} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-1">
                  <p className="text-sm font-semibold text-ink">{exp.role}</p>
                  <p className="text-sm text-accent">{exp.company}</p>
                  <p className="text-xs text-muted mt-1">{exp.period}</p>
                  <p className="text-xs text-muted">{exp.location}</p>
                </div>
                <div className="md:col-span-3">
                  <ul className="space-y-1.5">
                    {exp.points.map(p => (
                      <li key={p} className="text-sm text-muted leading-relaxed flex items-start gap-2">
                        <span className="text-accent mt-1 flex-shrink-0">·</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs font-medium uppercase tracking-widest text-muted mb-8">Education</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border rounded-2xl p-6">
            <p className="text-sm font-semibold text-ink">MSc Human-Computer Interaction</p>
            <p className="text-sm text-accent mb-1">Newcastle University</p>
            <p className="text-xs text-muted mb-3">2021 to 2022 · Newcastle upon Tyne, UK</p>
            <p className="text-sm text-muted leading-relaxed">
              Specialising in Interaction Design, UX Research Methods, and Prototyping. Dissertation on ambient air quality sensing for workplace wellbeing, acknowledged at <strong className="text-ink">ACM CHI 2024</strong>.
            </p>
          </div>
          <div className="border border-border rounded-2xl p-6">
            <p className="text-sm font-semibold text-ink">B.Arch (Bachelor of Architecture)</p>
            <p className="text-sm text-accent mb-1">Anna University / IST Chennai</p>
            <p className="text-xs text-muted mb-3">2015 to 2020 · Chennai, India</p>
            <p className="text-sm text-muted leading-relaxed">
              Five-year professional degree building a foundation in design thinking, sustainable design, and systems-level problem-solving, the lens I apply to every UX challenge.
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium uppercase tracking-widest text-muted mb-8">Skills</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p className="text-sm font-semibold text-ink mb-3">{category}</p>
                <div className="flex flex-col gap-1.5">
                  {items.map(skill => (
                    <span key={skill} className="text-xs text-muted border border-border bg-paper rounded-md px-2.5 py-1 w-fit">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-6 pt-16 text-center">
        <h2 className="text-2xl font-bold text-ink mb-4">Want to see my work in action?</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/work" className="bg-ink text-paper px-6 py-3 rounded-full font-medium text-sm hover:bg-accent transition-colors">
            View case studies
          </Link>
          <Link to="/contact" className="border border-border text-ink px-6 py-3 rounded-full font-medium text-sm hover:border-accent hover:text-accent transition-colors">
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  )
}
