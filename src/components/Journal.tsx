const ARTICLES = [
  { cat: 'Process', date: 'Apr 2026', title: 'Building a timeless brand identity that stands out', ph: 'Brand systems', image: '/uploads/Articles.png' },
  { cat: 'UX', date: 'Mar 2026', title: 'How UI/UX design impacts conversions and user engagement', ph: 'Conversion UX', image: '/uploads/Desktop.png' },
  { cat: 'Tools', date: 'Feb 2026', title: 'The design tools I use in 2026 and why', ph: 'Toolkit essay' },
]

export default function Journal() {
  return (
    <section className="section" id="journal">
      <div className="container">
        <div className="sec-head">
          <div>
            <div className="eyebrow">[ Design Journal ]</div>
            <h2 className="h2">The Design <span className="accent">Journal.</span></h2>
          </div>
          <div className="sec-head__right">
            Short essays on research, craft and the odd rant.
            <div style={{ marginTop: 12 }}>
              <a href="#" className="mono" style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)' }}>View all →</a>
            </div>
          </div>
        </div>

        <div className="journal-grid">
          {ARTICLES.map(a => (
            <article key={a.title} className="journal-card">
              <div className="journal-card__media">
                {a.image
                  ? <img src={a.image} alt={a.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
                  : <div className="placeholder">{a.ph}</div>
                }
              </div>
              <div className="journal-card__meta">
                <span>{a.cat}</span><span>·</span><span>{a.date}</span>
              </div>
              <h3 className="journal-card__title">{a.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
