export default function Contact() {
  return (
    <div className="pt-28 pb-20 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted mb-4">Contact</p>
          <h1 className="text-4xl font-bold text-ink mb-6">
            Let's build<br />
            <span className="text-accent">something together.</span>
          </h1>
          <p className="text-muted leading-relaxed mb-8">
            I'm available for freelance projects, consulting engagements, and full-time roles across the Netherlands, UK, Australia, and New Zealand. If you're working on something interesting in fintech, healthcare, or edtech, I'd love to hear about it.
          </p>

          <div className="space-y-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted mb-2">Email</p>
              <a href="mailto:ishwaryasuresh97@gmail.com" className="text-ink font-medium hover:text-accent transition-colors">
                ishwaryasuresh97@gmail.com
              </a>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted mb-2">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/ishwarya-suresh-9123aa135/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink font-medium hover:text-accent transition-colors"
              >
                linkedin.com/in/ishwarya-suresh
              </a>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted mb-2">Writing</p>
              <a
                href="https://medium.com/@ishwaryasuresh97"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink font-medium hover:text-accent transition-colors"
              >
                medium.com/@ishwaryasuresh97
              </a>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted mb-2">Open to</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {[
                  'Freelance projects',
                  'Full-time roles',
                  'UX Research',
                  'Product Design',
                  'Fintech',
                  'Healthcare',
                  'Edtech',
                  'Netherlands',
                  'UK',
                  'Australia',
                  'New Zealand',
                ].map(tag => (
                  <span key={tag} className="text-xs border border-border bg-white rounded-md px-2.5 py-1 text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-border rounded-2xl p-8">
          <h2 className="text-lg font-semibold text-ink mb-6">Send a message</h2>
          <form
            action="mailto:ishwaryasuresh97@gmail.com"
            method="GET"
            encType="text/plain"
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-muted mb-1.5 uppercase tracking-widest">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full border border-border rounded-lg px-4 py-3 text-sm text-ink placeholder-muted focus:outline-none focus:border-accent transition-colors bg-paper"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-muted mb-1.5 uppercase tracking-widest">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="w-full border border-border rounded-lg px-4 py-3 text-sm text-ink placeholder-muted focus:outline-none focus:border-accent transition-colors bg-paper"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-xs font-medium text-muted mb-1.5 uppercase tracking-widest">
                What's this about?
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full border border-border rounded-lg px-4 py-3 text-sm text-ink focus:outline-none focus:border-accent transition-colors bg-paper"
              >
                <option>Freelance project</option>
                <option>Full-time opportunity</option>
                <option>Collaboration</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-medium text-muted mb-1.5 uppercase tracking-widest">
                Message
              </label>
              <textarea
                id="message"
                name="body"
                rows={5}
                required
                placeholder="Tell me about your project or opportunity..."
                className="w-full border border-border rounded-lg px-4 py-3 text-sm text-ink placeholder-muted focus:outline-none focus:border-accent transition-colors bg-paper resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-ink text-paper py-3 rounded-full font-medium text-sm hover:bg-accent transition-colors"
            >
              Send message
            </button>
          </form>
          <p className="text-xs text-muted text-center mt-4">
            Or email directly at{' '}
            <a href="mailto:ishwaryasuresh97@gmail.com" className="text-accent hover:underline">
              ishwaryasuresh97@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
