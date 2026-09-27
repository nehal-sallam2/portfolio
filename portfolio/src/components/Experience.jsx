import { motion } from 'framer-motion'
import { experience } from '../data/experience'

const tagStyles = {
  WORK: 'bg-rust-light text-rust',
  CURRENT: 'bg-sage-light text-sage',
}

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-sm font-semibold tracking-widest text-rust"
      >
        EXPERIENCE
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="mt-2 font-serif text-6xl leading-[1.05] text-ink sm:text-7xl"
      >
        Journey &amp;
        <br />
        <span className="italic font-medium">Education</span>
      </motion.h2>

      <div className="mt-10 border-t border-hairline" />

      <div className="mt-14 space-y-14">
        {experience.map((item, idx) => (
          <motion.div
            key={item.company + idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="grid grid-cols-1 gap-4 md:grid-cols-[180px_24px_1fr]"
          >
            <span className="text-[15px] text-stone">{item.date}</span>

            <span className="hidden md:flex justify-center">
              <span className="mt-1.5 h-2.5 w-2.5 rounded-full border-2 border-rust bg-cream" />
            </span>

            <div>
              <div className="mb-3 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${tagStyles[tag]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-sans text-xl font-bold tracking-wide text-ink">
                {item.company}
              </h3>
              <p className="mt-1 text-[15px] text-stone">{item.role}</p>

              <ul className="mt-5 space-y-3">
                {item.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-ink/80">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rotate-45 bg-stone/60" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
