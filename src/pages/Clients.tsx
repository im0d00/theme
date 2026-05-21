import { mockClients } from '../data/mockData'

export default function Clients() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <p className="text-blue-400 font-mono text-sm mb-4">— Case Studies —</p>
        <h1 className="text-5xl font-display font-black text-white mb-6">
          Our <span className="holographic">Clients</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Trusted by innovative companies across gaming, tech, aerospace, and entertainment.
        </p>
      </section>

      {/* Client logos grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {mockClients.map((client) => (
            <div
              key={client.name}
              className="glass rounded-xl p-4 border border-white/10 flex flex-col items-center justify-center text-center hover:border-blue-400/30 transition-all group"
            >
              <div className="text-3xl mb-2">{client.logo}</div>
              <p className="text-white text-xs font-semibold group-hover:text-blue-400 transition-colors">
                {client.name}
              </p>
              <p className="text-slate-500 text-xs">{client.industry}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-white">Case Studies</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {mockClients.map((client) => (
            <div
              key={client.name}
              className="glass rounded-3xl border border-white/10 hover:border-blue-400/20 transition-all p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">{client.logo}</div>
                <div>
                  <h3 className="text-white font-display font-bold text-xl">{client.name}</h3>
                  <p className="text-blue-400 text-sm">{client.industry}</p>
                </div>
                <div className="ml-auto">
                  <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-400/30 text-green-400 text-xs font-mono">
                    {client.result}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-slate-500 text-xs font-mono mb-1">PROJECT</p>
                <p className="text-white font-semibold">{client.project}</p>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {client.description}
              </p>

              <blockquote className="border-l-2 border-blue-400/50 pl-4">
                <p className="text-slate-300 text-sm italic mb-2">"{client.testimonial}"</p>
                <p className="text-slate-500 text-xs">— {client.author}</p>
              </blockquote>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
