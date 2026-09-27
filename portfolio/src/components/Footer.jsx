const SOCIAL_LINKS = [
  { label: 'Linkedin', href: 'https://linkedin.com/in/nehal-elnoamany-151715422' },
  { label: 'GitHub', href: 'https://github.com/nehalsallam76-cmyk' },
  { label: 'Figma', href: 'https://www.figma.com/make/uMhhTniVsD0f6z73eYAcos/Editorial-Portfolio-Website-Design' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 sm:px-10 lg:px-16">
        <span className="font-serif text-xl font-bold text-cream">NS</span>

        <span className="text-sm text-cream/50">Nehal Sallam · 2026</span>

        <ul className="flex items-center gap-6">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-cream/70 transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
