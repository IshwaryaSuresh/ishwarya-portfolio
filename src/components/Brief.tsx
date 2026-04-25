import { useState } from 'react'

type FormState = { name: string; email: string; brief: string }

export default function Brief() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', brief: '' })
  const [sent, setSent] = useState(false)

  const onChange = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.email || !form.name) return
    setSent(true)
    setTimeout(() => setSent(false), 2600)
    setForm({ name: '', email: '', brief: '' })
  }

  return (
    <section className="section section--tight" id="brief">
      <div className="brief" data-parallax="0.03">
        <div className="brief__deco">&amp;</div>

        <div className="brief__body">
          <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.72)' }}>[ Start a project ]</div>
          <h2>Have a brief? <span style={{ color: 'var(--teal-100)' }}>Let's build something.</span></h2>
          <p>Tell me a little about the work. I reply within two working days with a short intake and a time to talk.</p>
        </div>

        <form className="brief__form brief__form--stacked" onSubmit={onSubmit}>
          <div className="brief__row">
            <input type="text" placeholder="Your name" value={form.name} onChange={onChange('name')} required />
            <input type="email" placeholder="your@email.com" value={form.email} onChange={onChange('email')} required />
          </div>
          <textarea
            placeholder="One line about the project. Sector, stage, what's stuck."
            value={form.brief}
            onChange={onChange('brief')}
            rows={2}
          />
          <button type="submit">{sent ? 'Sent ✓' : 'Send brief →'}</button>
        </form>
      </div>
    </section>
  )
}
