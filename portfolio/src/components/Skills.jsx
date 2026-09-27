import { motion } from 'framer-motion'

const SKILL_GROUPS = [
  {
    title: 'UX / DESIGN',
    skills: [
      'Figma',
      'UI Design',
      'UX Research',
      'Wireframing',
      'Prototyping',
      'Design Systems',
      'Human-Centered Design',
      'Usability Testing',
    ],
  },
  {
    title: 'FRONT-END',
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'REST API', 'Responsive Design', 'Reusable Components'],
  },
  {
    title: 'LANGUAGES & TOOLS',
    skills: ['Python', 'Java', 'C++', 'Git', 'GitHub', 'Agile', 'Debugging'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-mono text-sm font-semibold tracking-widest text-rust"
      >
        SKILLS
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="mt-2 font-serif text-6xl font-bold leading-[1.05] text-ink"
      >
        Tools &amp;
        <br />
        <span className="italic font-medium">Capabilities</span>
      </motion.h2>

      <div className="mt-10 border-t border-hairline" />

      <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
          >
            <p className="font-mono text-xs font-semibold tracking-widest text-rust">
              {group.title}
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-hairline bg-white px-4 py-2 text-sm font-medium text-ink/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
