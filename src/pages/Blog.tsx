import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchFromWP } from '../services/wpService'
import { mockPosts } from '../data/mockData'

type Post = typeof mockPosts[number]

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const load = async () => {
      const wpPosts = await fetchFromWP('posts', { per_page: 12 })
      if (wpPosts && wpPosts.length > 0) {
        setPosts(wpPosts)
      } else {
        setPosts(mockPosts)
      }
      setLoading(false)
    }
    load()
  }, [])

  const filtered = posts.filter((p) =>
    p.title.rendered.toLowerCase().includes(search.toLowerCase()) ||
    p.excerpt.rendered.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <p className="text-green-400 font-mono text-sm mb-4">— Insights & Updates —</p>
        <h1 className="text-5xl font-display font-black text-white mb-6">
          The <span className="holographic">Blog</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
          Thoughts on 3D design, game development, emerging technologies, and the creative process.
        </p>

        {/* Search */}
        <div className="max-w-md mx-auto">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles..."
            className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 text-sm"
          />
        </div>
      </section>

      {/* Posts */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="glass rounded-2xl overflow-hidden border border-white/10 animate-pulse">
                <div className="aspect-video bg-white/5" />
                <div className="p-5 space-y-2">
                  <div className="h-3 bg-white/5 rounded w-1/4" />
                  <div className="h-5 bg-white/10 rounded w-3/4" />
                  <div className="h-4 bg-white/5 rounded" />
                  <div className="h-4 bg-white/5 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 text-slate-500">
            No articles found matching your search.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-green-400/30 transition-all group block"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post._embedded?.['wp:featuredmedia']?.[0]?.source_url}
                    alt={post.title.rendered}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <p className="text-slate-500 text-xs">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                    <span className="text-slate-600">·</span>
                    <p className="text-slate-500 text-xs">
                      {post._embedded?.author?.[0]?.name ?? 'Lizzdo Studio'}
                    </p>
                  </div>
                  <h3 className="text-white font-display font-semibold text-lg mb-2 group-hover:text-green-400 transition-colors">
                    {post.title.rendered}
                  </h3>
                  <p
                    className="text-slate-400 text-sm line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
