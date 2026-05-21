import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchFromWP } from '../services/wpService'
import { mockPosts } from '../data/mockData'

type Post = typeof mockPosts[number]

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<Post | null>(null)
  const [related, setRelated] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      const wpPosts = await fetchFromWP('posts', { slug: slug ?? '', _embed: true })
      if (wpPosts && wpPosts.length > 0) {
        setPost(wpPosts[0])
        const allPosts = await fetchFromWP('posts', { per_page: 3, exclude: wpPosts[0].id })
        setRelated(allPosts ?? [])
      } else {
        const found = mockPosts.find((p) => p.slug === slug) ?? null
        setPost(found)
        setRelated(mockPosts.filter((p) => p.slug !== slug).slice(0, 3))
      }
      setLoading(false)
    }
    load()
  }, [slug])

  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-slate-500 animate-pulse">Loading article…</div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="pt-20 min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-slate-400 text-lg">Article not found.</p>
        <Link to="/blog" className="text-cyan-400 hover:text-cyan-300 text-sm">← Back to Blog</Link>
      </div>
    )
  }

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url
  const author = post._embedded?.author?.[0]?.name ?? 'Lizzdo Studio'

  return (
    <div className="pt-20">
      {/* Hero */}
      {featuredImage && (
        <div className="relative h-64 sm:h-96 overflow-hidden">
          <img src={featuredImage} alt={post.title.rendered} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent" />
        </div>
      )}

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/blog" className="text-cyan-400 hover:text-cyan-300 text-sm mb-8 inline-block">
          ← Back to Blog
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <p className="text-slate-500 text-sm">
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>
          <span className="text-slate-600">·</span>
          <p className="text-slate-500 text-sm">By {author}</p>
        </div>

        <h1 className="text-4xl font-display font-black text-white mb-8 leading-tight">
          {post.title.rendered}
        </h1>

        <div
          className="prose prose-invert prose-sm max-w-none text-slate-300 leading-relaxed [&>p]:mb-4 [&>h2]:text-white [&>h2]:font-display [&>h2]:text-2xl [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-white [&>h3]:font-semibold [&>h3]:text-xl [&>h3]:mt-6 [&>h3]:mb-3"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </article>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10">
          <h2 className="text-2xl font-display font-bold text-white mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                to={`/blog/${p.slug}`}
                className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all group block"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={p._embedded?.['wp:featuredmedia']?.[0]?.source_url}
                    alt={p.title.rendered}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-sm group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {p.title.rendered}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
