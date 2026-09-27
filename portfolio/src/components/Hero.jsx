import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import Button from './Button'

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/nehal-elnoamany-151715422' },
  { label: 'GitHub', href: 'https://github.com/nehalsallam76-cmyk' },
  { label: 'Figma', href: 'https://www.figma.com/make/uMhhTniVsD0f6z73eYAcos/Editorial-Portfolio-Website-Design' },
]

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-stone" />
            <p className="font-mono text-xs font-semibold tracking-widest text-stone">
              AVAILABLE FOR OPPORTUNITIES
            </p>
          </div>

          <h1 className="mt-6 font-serif text-7xl font-bold leading-[1.02] text-ink">
            Nehal
            <br />
            <span className="italic font-medium">Sallam</span>
          </h1>

          <p className="mt-6 text-lg font-medium text-rust">Software Engineer &amp; UX Designer</p>

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/60">
            Computer Science &amp; AI student at Zewail City, specializing in Software Engineering
            and Human-Computer Interaction. Passionate about designing intuitive digital
            experiences and building responsive web applications.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#projects" className="gap-2">
              View Projects
              <ArrowRight size={16} />
            </Button>
            <Button href="/resume.pdf" variant="secondary" className="gap-2">
              Download Resume
              <Download size={16} />
            </Button>
          </div>

          <div className="mt-9 flex items-center gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[15px] font-medium text-ink/70 hover:text-ink"
              >
                {link.label}
                <span aria-hidden>↗</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-hairline">
            {/* Replace src with the real photo at public/images/hero.jpg */}
            <img
              src="/images/hero.jpg"
              alt="Nehal Sallam"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
