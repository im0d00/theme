const team = [
  {
    name: 'Alex Chen',
    role: 'Founder & Creative Director',
    bio: 'Former lead artist at a major AAA studio, Alex brings 12 years of high-end 3D production experience to every project.',
    emoji: '🎨',
  },
  {
    name: 'Maya Rodriguez',
    role: 'Technical Art Director',
    bio: 'Shader wizard and pipeline architect with expertise in Unreal Engine 5, Houdini, and real-time rendering.',
    emoji: '⚡',
  },
  {
    name: 'Jordan Kim',
    role: 'Animation Lead',
    bio: 'Motion capture specialist and procedural animation expert who has worked on 20+ shipped game titles.',
    emoji: '🎬',
  },
  {
    name: 'Sam Patel',
    role: 'Game Development Lead',
    bio: 'Full-stack game developer specialized in multiplayer systems, procedural generation, and performance optimization.',
    emoji: '🎮',
  },
  {
    name: 'Riley Thompson',
    role: 'VR/AR Specialist',
    bio: 'Pioneering immersive experience designer with a background in spatial computing and human-computer interaction.',
    emoji: '🔮',
  },
  {
    name: 'Zoe Laurent',
    role: 'Web & Interactive Lead',
    bio: 'Full-stack developer specializing in Three.js, WebGL, and React who blurs the line between web and game.',
    emoji: '🌐',
  },
]

const values = [
  { icon: '🎯', title: 'Excellence', desc: 'We don\'t ship work we\'re not proud of. Quality is non-negotiable.' },
  { icon: '🚀', title: 'Innovation', desc: 'We push boundaries, experiment with emerging tech, and challenge convention.' },
  { icon: '🤝', title: 'Collaboration', desc: 'We treat every client as a creative partner, not just a customer.' },
  { icon: '⚡', title: 'Velocity', desc: 'We move fast without cutting corners, delivering on time and on budget.' },
]

export default function About() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <p className="text-cyan-400 font-mono text-sm mb-4">— Who We Are —</p>
        <h1 className="text-5xl font-display font-black text-white mb-6">
          About <span className="holographic">Lizzdo Studio</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto">
          We are a boutique digital studio obsessed with pushing the limits of what's possible in 3D design, animation, game development, and immersive technology.
        </p>
      </section>

      {/* Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="glass rounded-3xl border border-white/10 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-white mb-4">Our Story</h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Founded in 2016, Lizzdo Studio was born out of a shared passion for creating digital art that doesn't just look good — it feels alive. We started as a small freelance collective and grew into a full-service digital production studio.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                Over 8 years, we've shipped 200+ projects across gaming, film, architecture, and immersive tech, working with indie studios and Fortune 500 companies alike.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Today, we're a team of 15+ specialists who believe that the best digital experiences combine rigorous craftsmanship with genuine creative ambition.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '8+', label: 'Years' },
                { value: '200+', label: 'Projects' },
                { value: '50+', label: 'Clients' },
                { value: '15+', label: 'Team Members' },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-2xl p-6 border border-white/10 text-center">
                  <p className="text-3xl font-display font-black text-white mb-1">{stat.value}</p>
                  <p className="text-slate-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-white">Our Values</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="glass rounded-2xl p-6 border border-white/10 text-center">
              <div className="text-3xl mb-4">{v.icon}</div>
              <h3 className="text-white font-display font-bold text-lg mb-2">{v.title}</h3>
              <p className="text-slate-400 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-purple-400 font-mono text-sm mb-3">— The People —</p>
          <h2 className="text-3xl font-display font-bold text-white">Meet the Team</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <div key={member.name} className="glass rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-2xl mb-4">
                {member.emoji}
              </div>
              <h3 className="text-white font-display font-bold text-lg mb-1">{member.name}</h3>
              <p className="text-cyan-400 text-sm mb-3">{member.role}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
