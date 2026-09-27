import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const CONTACT_ROWS = [
  { label: 'EMAIL', value: 'nehalsallam76@gmail.com', href: 'mailto:nehalsallam76@gmail.com' },
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/nehal-elnoamany-151715422',
    href: 'https://linkedin.com/in/nehal-elnoamany-151715422',
  },
  {
    label: 'GITHUB',
    value: 'github.com/nehalsallam76-cmyk',
    href: 'https://github.com/nehalsallam76-cmyk',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-charcoal py-28 text-cream">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center font-mono text-sm font-semibold tracking-widest text-rust"
        >
          CONTACT
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-3 text-center font-serif text-5xl font-bold leading-[1.1] text-cream sm:text-6xl"
        >
          Let&apos;s build meaningful
          <br />
          <span className="italic font-medium text-cream/60">experiences together</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-8 max-w-2xl text-center"
        >
          <p className="text-lg text-cream/70">
            Open to internships, collaborations, and full-time opportunities.
          </p>
          <p className="text-lg text-cream/70">Let&apos;s connect and create something great.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mx-auto mt-14 max-w-3xl divide-y divide-cream/10 rounded-2xl border border-cream/10"
        >
          {CONTACT_ROWS.map((row) => (
            <a
              key={row.label}
              href={row.href}
              target={row.href.startsWith('http') ? '_blank' : undefined}
              rel={row.href.startsWith('http') ? 'noreferrer' : undefined}
              className="group flex items-center justify-between px-8 py-6 transition-colors hover:bg-cream/[0.04]"
            >
              <span className="font-mono text-xs font-semibold tracking-widest text-cream/50">
                {row.label}
              </span>
              <span className="flex items-center gap-2 text-[15px] text-cream/90">
                {row.value}
                <ArrowUpRight
                  size={16}
                  className="text-cream/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </a>
          ))}
        </motion.div>

        <p className="mt-14 text-center text-sm text-cream/40">Giza, Egypt · GMT +3</p>
      </div>
    </section>
  )
}
