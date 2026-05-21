import { Link } from 'react-router-dom'

const footerLinks = {
  Services: [
    { label: '3D Modeling', path: '/services' },
    { label: 'Animation', path: '/services' },
    { label: 'Game Development', path: '/services' },
    { label: 'VR/AR Experiences', path: '/services' },
  ],
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Clients', path: '/clients' },
    { label: 'Blog', path: '/blog' },
  ],
  Contact: [
    { label: 'Get a Quote', path: '/contact' },
    { label: 'Store', path: '/store' },
  ],
}

const socials = [
  { label: 'Twitter', href: '#', icon: 'X' },
  { label: 'LinkedIn', href: '#', icon: 'in' },
  { label: 'Instagram', href: '#', icon: '📷' },
  { label: 'GitHub', href: '#', icon: '⌥' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                L
              </div>
              <span className="text-white font-display font-bold text-lg">Lizzdo</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Crafting digital reality through cutting-edge 3D design, animation, and immersive experiences.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-md glass flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-colors text-xs"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-white font-semibold text-sm mb-3">{section}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Lizzdo Studio. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs">
            Built with React + Three.js + WordPress
          </p>
        </div>
      </div>
    </footer>
  )
}
