import { useState, useEffect } from 'react'
import { fetchFromWP } from '../services/wpService'
import { mockPortfolio } from '../data/mockData'

type PortfolioItem = typeof mockPortfolio[number]

const categories = ['All', '3D Visualization', 'Game Development', 'VR Experience', 'Character Animation', 'Mobile Game', 'Branding']

export default function Portfolio() {
  const [items, setItems] = useState<PortfolioItem[]>([])
  const [filter, setFilter] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      const wpData = await fetchFromWP('portfolio', { per_page: 20 })
      if (wpData && wpData.length > 0) {
        setItems(wpData)
      } else {
        setItems(mockPortfolio)
      }
      setLoading(false)
    }
    load()
  }, [])

  const filtered = filter === 'All'
    ? items
    : items.filter((i) => i.meta?.category === filter)

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <p className="text-purple-400 font-mono text-sm mb-4">— Our Work —</p>
        <h1 className="text-5xl font-display font-black text-white mb-6">
          Project <span className="holographic">Portfolio</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          A selection of projects that showcase our capabilities across 3D, animation, game development, and immersive experiences.
        </p>
      </section>

      {/* Filters */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                filter === cat
                  ? 'border-purple-400/50 bg-purple-400/10 text-purple-400'
                  : 'border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="glass rounded-2xl overflow-hidden border border-white/10 animate-pulse">
                <div className="aspect-video bg-white/5" />
                <div className="p-5 space-y-2">
                  <div className="h-3 bg-white/5 rounded w-1/3" />
                  <div className="h-5 bg-white/10 rounded w-3/4" />
                  <div className="h-4 bg-white/5 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/30 transition-all group"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={item._embedded?.['wp:featuredmedia']?.[0]?.source_url}
                    alt={item.title.rendered}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-purple-400 text-xs font-mono">{item.meta?.category}</p>
                    <p className="text-slate-500 text-xs">{item.meta?.year}</p>
                  </div>
                  <h3 className="text-white font-display font-semibold text-lg mb-1">
                    {item.title.rendered}
                  </h3>
                  <p
                    className="text-slate-400 text-sm line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <div className="text-center py-16 text-slate-500">
            No projects found in this category.
          </div>
        )}
      </section>
    </div>
  )
}
