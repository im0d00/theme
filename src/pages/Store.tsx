import { useState, useEffect } from 'react'
import { fetchFromWP } from '../services/wpService'
import { mockProducts } from '../data/mockData'

type Product = typeof mockProducts[number]

const categories = ['All', '3D Assets', 'Animations', 'Environments', 'Characters', 'VFX']

export default function Store() {
  const [products, setProducts] = useState<Product[]>([])
  const [filter, setFilter] = useState('All')
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState<number[]>([])

  useEffect(() => {
    const load = async () => {
      const wpData = await fetchFromWP('product', { per_page: 20 })
      if (wpData && wpData.length > 0) {
        setProducts(wpData)
      } else {
        setProducts(mockProducts)
      }
      setLoading(false)
    }
    load()
  }, [])

  const filtered = filter === 'All'
    ? products
    : products.filter((p) => p.meta?.category === filter)

  const addToCart = (id: number) => {
    setCart((prev) => prev.includes(id) ? prev : [...prev, id])
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <p className="text-orange-400 font-mono text-sm mb-4">— Digital Assets —</p>
        <h1 className="text-5xl font-display font-black text-white mb-6">
          Asset <span className="holographic">Store</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Premium game-ready 3D assets, animation packs, and VFX systems ready to accelerate your project.
        </p>
        {cart.length > 0 && (
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-400/30 text-orange-400 text-sm">
            🛒 {cart.length} item{cart.length > 1 ? 's' : ''} in cart
          </div>
        )}
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
                  ? 'border-orange-400/50 bg-orange-400/10 text-orange-400'
                  : 'border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="glass rounded-2xl overflow-hidden border border-white/10 animate-pulse">
                <div className="aspect-video bg-white/5" />
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-white/10 rounded w-3/4" />
                  <div className="h-3 bg-white/5 rounded" />
                  <div className="h-8 bg-white/5 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => {
              const inCart = cart.includes(product.id)
              return (
                <div
                  key={product.id}
                  className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-orange-400/30 transition-all group flex flex-col"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={product._embedded?.['wp:featuredmedia']?.[0]?.source_url}
                      alt={product.title.rendered}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-orange-400 text-xs font-mono mb-2">{product.meta?.category}</p>
                    <h3 className="text-white font-display font-semibold text-lg mb-2">
                      {product.title.rendered}
                    </h3>
                    <p
                      className="text-slate-400 text-sm mb-4 flex-1"
                      dangerouslySetInnerHTML={{ __html: product.excerpt.rendered }}
                    />
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-white font-bold text-xl">
                        ${product.meta?.price}
                      </span>
                      <button
                        onClick={() => addToCart(product.id)}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                          inCart
                            ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                            : 'bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:opacity-90'
                        }`}
                      >
                        {inCart ? '✓ Added' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </section>
    </div>
  )
}
