const ARTICLES = [
  {
    cat: 'AI Practice',
    date: 'May 2026',
    title: 'Designing with AI: what I learned rebuilding my portfolio in Claude Code',
    desc: 'A real-time account of using Claude Code to prototype, design, and ship a UX consultant portfolio. What sped up, what slowed down, what I kept by hand, what I rejected. Notes from the build itself.',
    url: 'https://medium.com/@ishwaryasuresh97/designing-with-ai-what-i-learned-rebuilding-my-portfolio-in-claude-code-129fc7660aba',
  },
  {
    cat: 'AI & UX',
    date: 'Jan 2024',
    title: 'The Convergence of UX and AI',
    desc: 'AI\'s role in personalisation, predictive experiences, and what design automation actually means for practitioners.',
    url: 'https://medium.com/design-bootcamp/the-convergence-of-ux-and-ai-d1240c1087f7',
  },
  {
    cat: 'Ethics',
    date: 'Jan 2024',
    title: 'Ethical Considerations in UX Design',
    desc: 'Data privacy, inclusivity, dark patterns, and the real tension between business goals and user welfare.',
    url: 'https://medium.com/design-bootcamp/ethical-considerations-in-ux-design-10ef2d089e85',
  },
  {
    cat: 'Psychology',
    date: 'Jan 2024',
    title: 'How Emotions Affect User Experience',
    desc: 'Emotional design and how feelings, not features, shape whether a digital product actually works.',
    url: 'https://medium.com/design-bootcamp/how-emotions-affect-user-experience-e7d0e656a9e7',
  },
  {
    cat: 'Process',
    date: 'Jan 2024',
    title: 'Overview of Design Thinking',
    desc: 'The five-phase approach: empathise, define, ideate, prototype, test. How to apply it without the buzzword baggage.',
    url: 'https://medium.com/design-bootcamp/overview-of-design-thinking-6fde0baaf8af',
  },
  {
    cat: 'Career',
    date: 'Jan 2024',
    title: 'Building Your Personal Brand as a UX Designer',
    desc: 'Creating a unique identity, making your mark, and standing out in a field where everyone has a portfolio.',
    url: 'https://medium.com/design-bootcamp/building-your-personal-brand-as-a-ux-designer-819219bc274a',
  },
  {
    cat: 'Career',
    date: 'Jan 2024',
    title: 'Charting Your Career Path in UX',
    desc: 'UX roles demystified: goal-setting, continuous learning, and why networking matters more than you think.',
    url: 'https://medium.com/design-bootcamp/charting-your-career-path-in-ux-9abe3177324e',
  },
  {
    cat: 'Trends',
    date: 'Jan 2024',
    title: 'Upcoming Trends in UX',
    desc: 'Voice UI, AR, AI, ethical design, micro-interactions, and minimalism: what\'s actually worth paying attention to.',
    url: 'https://medium.com/@ishwaryasuresh97/upcoming-trends-in-ux-2cb4b7d8fb69',
  },
  {
    cat: 'Craft',
    date: 'Dec 2023',
    title: 'The Importance of Micro-interactions',
    desc: 'Why the smallest interactions carry the most weight, and how to design them without overthinking.',
    url: 'https://medium.com/design-bootcamp/the-importance-of-micro-interactions-c87290abb05b',
  },
  {
    cat: 'Research',
    date: 'Dec 2023',
    title: 'Using Analytics to Inform UX Decisions',
    desc: 'A data-driven approach using web analytics, heatmaps, and session recordings to remove guesswork from design.',
    url: 'https://medium.com/@ishwaryasuresh97/using-analytics-to-inform-ux-decisions-ff541ea7cb63',
  },
  {
    cat: 'Craft',
    date: 'Dec 2023',
    title: 'The Power of Color Psychology in UX Design',
    desc: 'How colour theory shapes emotion, trust, and accessibility, and why contrast is never just a WCAG checkbox.',
    url: 'https://medium.com/@ishwaryasuresh97/the-power-of-color-psychology-in-ux-design-60cb75543b6e',
  },
]

export default function Journal() {
  const [lead, ...rest] = ARTICLES

  return (
    <section className="section" id="journal">
      <div className="container">
        <div className="sec-head">
          <div>
            <h2 className="h2" data-reveal="up" data-delay="80">The Design <span className="accent">Journal.</span></h2>
          </div>
          <div className="sec-head__right" data-reveal="up" data-delay="160">
            Essays on research, craft, and the occasional rant. Published on Medium.
            <div style={{ marginTop: 12 }}>
              <a href="https://medium.com/@ishwaryasuresh97" target="_blank" rel="noopener noreferrer" className="mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)' }}>All articles on Medium →</a>
            </div>
          </div>
        </div>

        <div className="jnl">
          {/* Lead essay, typographic */}
          <a href={lead.url} target="_blank" rel="noopener noreferrer" className="jnl__lead" data-reveal="up">
            <div className="jnl__lead-kicker">{lead.cat} · {lead.date}</div>
            <h3 className="jnl__lead-title">{lead.title}</h3>
            <p className="jnl__lead-standfirst">{lead.desc}</p>
            <span className="jnl__lead-cta">Read on Medium →</span>
          </a>

          {/* Archive index */}
          <div className="jnl__archive" data-reveal="up" data-delay="150">
            <div className="jnl__archive-label">Archive</div>
            <ol className="jnl__rows">
              {rest.map((a, i) => (
                <li key={a.title}>
                  <a href={a.url} target="_blank" rel="noopener noreferrer" className="jnl__row">
                    <span className="jnl__row-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="jnl__row-title">{a.title}</span>
                    <span className="jnl__row-date">{a.date}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
