import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { mockPortfolio, mockPosts } from '../data/mockData'

const ThreeHero = lazy(() => import('../components/ThreeHero'))

const services = [
  { icon: '⬡', label: '3D Modeling', desc: 'High-fidelity assets for games, film, and visualization' },
  { icon: '▶', label: 'Animation', desc: 'Fluid, believable motion for characters and environments' },
  { icon: '🎮', label: 'Game Dev', desc: 'Full-cycle game development from concept to launch' },
  { icon: '🔮', label: 'VR/AR', desc: 'Immersive experiences that blur the line with reality' },
  { icon: '🌐', label: 'Web & Digital', desc: 'Cutting-edge web experiences with 3D interactivity' },
  { icon: '✦', label: 'Branding', desc: 'Futuristic brand identities that stand out in any market' },
]

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center grid-overlay">
        {/* 3D Canvas */}
        <div className="absolute inset-0 z-0">
          <Suspense fallback={<div className="w-full h-full bg-dark-bg" />}>
            <ThreeHero />
          </Suspense>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-dark-bg via-dark-bg/80 to-transparent" />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-400 text-xs font-mono mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Premium 3D Studio
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black text-white leading-[0.9] mb-6">
              Crafting{' '}
              <span className="holographic">Digital</span>
              <br />
              Reality
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
              We design immersive 3D worlds, captivating animations, and cutting-edge interactive experiences that push the boundaries of digital artistry.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/portfolio"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                View Portfolio
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
              >
                Start a Project
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-8">
              {[
                { value: '200+', label: 'Projects' },
                { value: '50+', label: 'Clients' },
                { value: '8+', label: 'Years' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-display font-bold text-white">{stat.value}</p>
                  <p className="text-slate-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-mono text-sm mb-3">— What We Do —</p>
          <h2 className="text-4xl font-display font-bold text-white">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div
              key={s.label}
              className="glass rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all group"
            >
              <div className="text-2xl mb-4">{s.icon}</div>
              <h3 className="text-white font-display font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                {s.label}
              </h3>
              <p className="text-slate-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/services"
            className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
          >
            View all services →
          </Link>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-400 font-mono text-sm mb-3">— Recent Work —</p>
          <h2 className="text-4xl font-display font-bold text-white">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockPortfolio.slice(0, 3).map((item) => (
            <div key={item.id} className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/30 transition-all group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={item._embedded?.['wp:featuredmedia']?.[0]?.source_url}
                  alt={item.title.rendered}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p className="text-cyan-400 text-xs font-mono mb-2">{item.meta.category}</p>
                <h3 className="text-white font-display font-semibold text-lg mb-1">
                  {item.title.rendered}
                </h3>
                <p
                  className="text-slate-400 text-sm"
                  dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/portfolio"
            className="px-6 py-3 rounded-xl border border-purple-400/30 text-purple-400 hover:bg-purple-400/10 text-sm font-semibold transition-colors inline-block"
          >
            View Full Portfolio
          </Link>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-neon-green font-mono text-sm mb-3">— Latest Insights —</p>
          <h2 className="text-4xl font-display font-bold text-white">From the Blog</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockPosts.slice(0, 3).map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all group block">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url}
                  alt={post.title.rendered}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p className="text-slate-500 text-xs mb-2">
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </p>
                <h3 className="text-white font-display font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {post.title.rendered}
                </h3>
                <p
                  className="text-slate-400 text-sm line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/blog"
            className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
          >
            Read all articles →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center glass rounded-3xl border border-white/10 p-12">
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Ready to Build Something
            <span className="holographic"> Extraordinary?</span>
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Let's collaborate to create digital experiences that captivate your audience and elevate your brand.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start a Project
            </Link>
            <Link
              to="/services"
              className="px-8 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
