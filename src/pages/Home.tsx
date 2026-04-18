import { Link } from 'react-router-dom'
import { getFeaturedProjects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

const services = [
  {
    title: 'UX Research & Strategy',
    description: 'Mixed-methods research — interviews, usability testing, surveys, card sorting, tree testing — synthesised into data-informed roadmaps that reduce risk and align teams.',
    tags: ['Discovery', 'Usability Testing', 'ResearchOps'],
  },
  {
    title: 'Product & Interaction Design',
    description: 'End-to-end product design from wireframes to high-fidelity Figma prototypes. I build design systems, annotate specs for handoff, and collaborate directly with developers.',
    tags: ['Figma', 'Design Systems', 'Prototyping'],
  },
  {
    title: 'Accessibility & Inclusive Design',
    description: 'WCAG 2.1 AA compliance embedded from the start — not bolted on. I\'ve achieved compliance across 50+ government services and build inclusivity into every product layer.',
    tags: ['WCAG 2.1 AA', 'Content Design', 'Inclusive UX'],
  },
  {
    title: 'Service & Systems Design',
    description: 'Journey mapping, service blueprints, and information architecture for complex multi-stakeholder services. I work across the full journey, not just the screen.',
    tags: ['Service Design', 'IA', 'Blueprint'],
  },
]

const stats = [
  { value: '5+', label: 'Years of UX experience' },
  { value: '50+', label: 'Local authorities served (WCAG compliance)' },
  { value: '↑20%', label: 'Course completion rate increase' },
  { value: 'ACM CHI', label: '2024 research acknowledgement' },
]

export default function Home() {
  const featured = getFeaturedProjects()

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent-light border border-blue-200 text-accent text-xs font-medium px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
            Available for freelance & full-time roles
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-ink leading-[1.1] mb-6 text-balance">
            UX that moves<br />
            <span className="text-accent">metrics</span>, not just<br />
            pixels.
          </h1>
          <p className="text-lg text-muted leading-relaxed mb-8 max-w-xl">
            I'm Ishwarya — a UX consultant who blends research depth with product sense to deliver outcomes that matter.
            Fintech, healthcare, government, edtech. Research-led. Accessibility-first. ROI-focused.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/work"
              className="bg-ink text-paper px-6 py-3 rounded-full font-medium text-sm hover:bg-accent transition-colors"
            >
              View my work
            </Link>
            <a
              href="mailto:ishwaryasuresh97@gmail.com"
              className="border border-border text-ink px-6 py-3 rounded-full font-medium text-sm hover:border-accent hover:text-accent transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(stat => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-ink">{stat.value}</p>
              <p className="text-xs text-muted mt-1 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-2">Selected work</p>
            <h2 className="text-3xl font-bold text-ink">Featured projects</h2>
          </div>
          <Link to="/work" className="text-sm font-medium text-accent hover:underline hidden md:block">
            All projects →
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} variant="featured" />
          ))}
        </div>
        <div className="mt-6 md:hidden">
          <Link to="/work" className="text-sm font-medium text-accent hover:underline">
            All projects →
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-2">What I do</p>
            <h2 className="text-3xl font-bold text-ink">Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map(service => (
              <div key={service.title} className="border border-border rounded-2xl p-6 hover:border-accent transition-colors">
                <h3 className="font-semibold text-ink text-lg mb-3">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-xs bg-paper border border-border rounded-md px-2.5 py-1 text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-widest text-muted mb-2">Pricing</p>
          <h2 className="text-3xl font-bold text-ink">Transparent rates</h2>
          <p className="text-muted mt-2 max-w-lg">Straightforward pricing for projects of all sizes. Not sure which fits? Let's talk.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-border rounded-2xl p-8">
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-2">One-time</p>
            <h3 className="text-2xl font-bold text-ink mb-1">Project-based</h3>
            <p className="text-3xl font-bold text-ink mt-4 mb-1">From £2,500</p>
            <p className="text-muted text-sm mb-6">Per project, scoped upfront</p>
            <ul className="space-y-2.5 text-sm text-muted mb-8">
              {[
                'Full discovery & research phase',
                'Wireframes through to high-fidelity UI',
                'Annotated Figma handoff for developers',
                'WCAG 2.1 AA accessibility review',
                'Two rounds of revisions included',
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">✓</span> {item}
                </li>
              ))}
            </ul>
            <a
              href="mailto:ishwaryasuresh97@gmail.com?subject=Project enquiry"
              className="block text-center bg-ink text-paper px-6 py-3 rounded-full font-medium text-sm hover:bg-accent transition-colors"
            >
              Start a project
            </a>
          </div>
          <div className="border-2 border-accent rounded-2xl p-8 relative">
            <div className="absolute -top-3 left-6 bg-accent text-paper text-xs font-medium px-3 py-1 rounded-full">
              Most popular
            </div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted mb-2">Ongoing</p>
            <h3 className="text-2xl font-bold text-ink mb-1">Retainer</h3>
            <p className="text-3xl font-bold text-ink mt-4 mb-1">From £1,800<span className="text-lg font-normal text-muted">/mo</span></p>
            <p className="text-muted text-sm mb-6">Flexible monthly engagement</p>
            <ul className="space-y-2.5 text-sm text-muted mb-8">
              {[
                'Dedicated UX support across sprints',
                'Ongoing research and testing cycles',
                'Design system maintenance',
                'Stakeholder workshop facilitation',
                'Priority turnaround on all requests',
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">✓</span> {item}
                </li>
              ))}
            </ul>
            <a
              href="mailto:ishwaryasuresh97@gmail.com?subject=Retainer enquiry"
              className="block text-center bg-accent text-paper px-6 py-3 rounded-full font-medium text-sm hover:bg-ink transition-colors"
            >
              Book a call
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ink">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-paper mb-4 text-balance">
            Ready to design something that actually works?
          </h2>
          <p className="text-paper/60 mb-8 max-w-md mx-auto">
            I'm available for freelance projects and full-time roles across the Netherlands, UK, Australia, and New Zealand.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:ishwaryasuresh97@gmail.com"
              className="bg-paper text-ink px-6 py-3 rounded-full font-medium text-sm hover:bg-accent hover:text-paper transition-colors"
            >
              ishwaryasuresh97@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/ishwarya-suresh-9123aa135/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-paper/20 text-paper px-6 py-3 rounded-full font-medium text-sm hover:border-paper transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
