import { motion } from 'framer-motion'

const CARDS = [
  {
    number: '01',
    eyebrow: 'EDUCATION',
    title: 'B.Sc. Computer Science & AI',
    subtitle: 'Zewail City · Expected 2028',
    description:
      'Major: Software Engineering · Concentration: Human-Computer Interaction',
  },
  {
    number: '02',
    eyebrow: 'LOCATION',
    title: 'Giza, Egypt',
    subtitle: 'Open to remote globally',
    description: 'GMT +3 · Available for async collaboration across time zones.',
  },
  {
    number: '03',
    eyebrow: 'LANGUAGES',
    title: 'Arabic & English',
    subtitle: 'Native · Professional Working',
    description:
      'Comfortable communicating with international teams and stakeholders.',
  },
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm font-semibold tracking-widest text-rust"
          >
            ABOUT
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-2 font-serif text-6xl font-bold leading-[1.05] text-ink"
          >
            Bridging design
            <br />
            <span className="italic font-medium">and engineering</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-xs text-right text-[15px] leading-relaxed text-ink/60 lg:text-right"
        >
          Passionate about Human-Computer Interaction (HCI) and designing technology around
          people’s needs. Interested in understanding how users interact with technology and
          turning those insights into usable, accessible, and meaningful digital experiences.
        </motion.p>
      </div>

      <div className="mt-10 border-t border-hairline" />

      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((card, idx) => (
          <motion.div
            key={card.eyebrow}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="bg-white p-7"
          >
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs font-semibold tracking-widest text-rust">
                {card.eyebrow}
              </p>
              <span className="font-mono text-xs text-ink/20">{card.number}</span>
            </div>

            <h3 className="mt-4 font-sans text-lg font-bold text-ink">{card.title}</h3>
            <p className="mt-1 text-sm text-rust/80">{card.subtitle}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/60">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
