import { motion } from 'framer-motion'
import { ArrowUpRight, Star } from 'lucide-react'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm font-semibold tracking-widest text-rust"
          >
            WORK
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-2 font-serif text-6xl font-bold leading-[1.05] text-ink"
          >
            Selected
            <br />
            <span className="italic font-medium">Projects</span>
          </motion.h2>
        </div>
        <span className="text-sm text-stone">{projects.length} projects</span>
      </div>

      <div className="mt-10 border-t border-hairline" />

      <div className="mt-14 space-y-24">
        {projects.map((project, idx) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.55, delay: idx * 0.05 }}
          >
            <div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-mono text-xs font-semibold tracking-widest text-rust">
                  {project.label}
                </span>
                <span className="text-ink/30">{project.year}</span>
              </div>

              <h3 className="mt-4 font-serif text-4xl font-bold text-ink">{project.title}</h3>

              {project.featured && (
                <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-rust-light px-3 py-1 text-xs font-semibold text-rust">
                  <Star size={12} fill="currentColor" />
                  Featured Project
                </span>
              )}

              <p className="mt-5 text-[15px] leading-relaxed text-ink/60">
                {project.description}
              </p>

              {project.tags.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-hairline px-4 py-1.5 text-sm font-medium text-ink/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <a
                href={project.linkHref}
                target={project.linkHref.startsWith('http') ? '_blank' : undefined}
                rel={project.linkHref.startsWith('http') ? 'noreferrer' : undefined}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                {project.linkLabel}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
