import ProjectEstimator from '../components/ProjectEstimator'

const services = [
  {
    icon: '⬡',
    title: '3D Modeling & Sculpting',
    description: 'From hard-surface mechanical assets to organic characters, we create game-ready 3D models optimized for any platform.',
    features: ['PBR Textures', 'LOD Optimization', 'Rigging Ready', 'Multiple Formats'],
    price: 'From $500',
    color: 'cyan',
  },
  {
    icon: '▶',
    title: 'Animation & Motion',
    description: 'Life-like character animations, cinematic sequences, and dynamic VFX that bring your digital world to life.',
    features: ['Character Animation', 'Motion Capture', 'Procedural Animation', 'VFX Systems'],
    price: 'From $800',
    color: 'purple',
  },
  {
    icon: '🎮',
    title: 'Game Development',
    description: 'Full-cycle game development using Unreal Engine 5 and Unity, from prototype to gold master.',
    features: ['UE5 / Unity', 'Multiplayer', 'Mobile & Console', 'Steam Publishing'],
    price: 'From $5,000',
    color: 'pink',
  },
  {
    icon: '🔮',
    title: 'VR/AR Experiences',
    description: 'Immersive virtual and augmented reality applications for enterprise training, entertainment, and retail.',
    features: ['Meta Quest', 'HoloLens', 'WebXR', 'ARKit/ARCore'],
    price: 'From $8,000',
    color: 'green',
  },
  {
    icon: '🌐',
    title: 'Interactive Web & Digital',
    description: 'React-powered websites with Three.js 3D scenes, WebGL shaders, and blazing-fast performance.',
    features: ['Three.js', 'WebGL', 'React 19', 'Vite'],
    price: 'From $3,000',
    color: 'orange',
  },
  {
    icon: '✦',
    title: 'Branding & Identity',
    description: '3D logos, animated brand assets, and complete visual identity systems for forward-thinking companies.',
    features: ['Logo Design', '3D Animation', 'Brand Guidelines', 'Motion Identity'],
    price: 'From $2,000',
    color: 'blue',
  },
  {
    icon: '📐',
    title: 'Architectural Visualization',
    description: 'Photorealistic renders and interactive walkthroughs of architectural spaces before construction begins.',
    features: ['Unreal Engine', 'Real-Time Tours', 'VR Walkthroughs', 'Print Quality'],
    price: 'From $2,500',
    color: 'cyan',
  },
  {
    icon: '🎬',
    title: 'Cinematic Production',
    description: 'Pre-rendered cinematic sequences for games, films, advertising, and explainer videos.',
    features: ['4K Rendering', 'Storyboarding', 'Post-Production', 'Color Grading'],
    price: 'From $4,000',
    color: 'purple',
  },
  {
    icon: '🤖',
    title: 'AI-Assisted Creation',
    description: 'Leveraging generative AI for faster concept art, texture generation, and asset iteration.',
    features: ['Concept AI', 'AI Texturing', 'Rapid Prototyping', 'Style Transfer'],
    price: 'From $1,000',
    color: 'pink',
  },
  {
    icon: '🧩',
    title: 'Technical Art',
    description: 'Shader development, procedural tools, and pipeline automation to supercharge your team.',
    features: ['HLSL Shaders', 'Houdini', 'Pipeline Tools', 'Rigging Systems'],
    price: 'From $1,500',
    color: 'green',
  },
]

const colorMap: Record<string, string> = {
  cyan: 'border-cyan-400/30 hover:border-cyan-400/50',
  purple: 'border-purple-400/30 hover:border-purple-400/50',
  pink: 'border-pink-400/30 hover:border-pink-400/50',
  green: 'border-green-400/30 hover:border-green-400/50',
  orange: 'border-orange-400/30 hover:border-orange-400/50',
  blue: 'border-blue-400/30 hover:border-blue-400/50',
}

const tagColorMap: Record<string, string> = {
  cyan: 'text-cyan-400 bg-cyan-400/10',
  purple: 'text-purple-400 bg-purple-400/10',
  pink: 'text-pink-400 bg-pink-400/10',
  green: 'text-green-400 bg-green-400/10',
  orange: 'text-orange-400 bg-orange-400/10',
  blue: 'text-blue-400 bg-blue-400/10',
}

const workflow = [
  { step: '01', title: 'Discovery', desc: 'Deep dive into your vision, goals, and technical requirements.' },
  { step: '02', title: 'Concept', desc: 'Concept art, mood boards, and technical scope definition.' },
  { step: '03', title: 'Production', desc: 'Agile development with regular milestone check-ins.' },
  { step: '04', title: 'Polish', desc: 'Refinement, optimization, and quality assurance.' },
  { step: '05', title: 'Delivery', desc: 'Final handoff with documentation and ongoing support.' },
]

export default function Services() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <p className="text-cyan-400 font-mono text-sm mb-4">— Our Expertise —</p>
        <h1 className="text-5xl font-display font-black text-white mb-6">
          Services &<span className="holographic"> Capabilities</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          From a single 3D model to a full game production, we offer end-to-end digital creation services.
        </p>
      </section>

      {/* Services Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`glass rounded-2xl p-6 border transition-all group ${colorMap[s.color]}`}
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-white font-display font-bold text-xl mb-3">{s.title}</h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">{s.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {s.features.map((f) => (
                  <span
                    key={f}
                    className={`px-2 py-0.5 rounded-md text-xs font-mono ${tagColorMap[s.color]}`}
                  >
                    {f}
                  </span>
                ))}
              </div>

              <p className="text-white font-semibold text-sm">{s.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-400 font-mono text-sm mb-3">— How We Work —</p>
          <h2 className="text-4xl font-display font-bold text-white">Our Process</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {workflow.map((w, i) => (
            <div key={w.step} className="relative">
              {i < workflow.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-cyan-400/30 to-transparent z-0" />
              )}
              <div className="glass rounded-2xl p-5 border border-white/10 text-center relative z-10">
                <div className="text-3xl font-display font-black text-cyan-400/30 mb-3">{w.step}</div>
                <h3 className="text-white font-semibold mb-2">{w.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Estimator */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-green-400 font-mono text-sm mb-3">— Budget Planning —</p>
          <h2 className="text-4xl font-display font-bold text-white">Project Estimator</h2>
          <p className="text-slate-400 mt-3">Get a rough estimate for your project budget</p>
        </div>
        <ProjectEstimator />
      </section>
    </div>
  )
}
