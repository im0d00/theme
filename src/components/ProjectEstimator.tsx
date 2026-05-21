import { useState } from 'react'

const services = [
  { id: 'modeling', label: '3D Modeling', basePrice: 500 },
  { id: 'animation', label: 'Animation', basePrice: 800 },
  { id: 'game', label: 'Game Development', basePrice: 2000 },
  { id: 'vr', label: 'VR/AR Experience', basePrice: 3000 },
  { id: 'web', label: 'Web Development', basePrice: 1500 },
  { id: 'branding', label: 'Branding', basePrice: 600 },
]

const complexities = [
  { id: 'basic', label: 'Basic', multiplier: 1 },
  { id: 'standard', label: 'Standard', multiplier: 1.5 },
  { id: 'premium', label: 'Premium', multiplier: 2.5 },
]

export default function ProjectEstimator() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [complexity, setComplexity] = useState('standard')
  const [timeline, setTimeline] = useState(4)

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  const baseTotal = selectedServices.reduce((sum, id) => {
    const s = services.find((s) => s.id === id)
    return sum + (s?.basePrice ?? 0)
  }, 0)

  const complexityMult = complexities.find((c) => c.id === complexity)?.multiplier ?? 1
  const timelineMult = timeline < 2 ? 1.5 : timeline < 4 ? 1.2 : 1
  const total = Math.round(baseTotal * complexityMult * timelineMult)

  return (
    <div className="glass rounded-2xl p-6 border border-white/10">
      <h3 className="text-xl font-display font-bold text-white mb-6">Project Estimator</h3>

      {/* Services */}
      <div className="mb-6">
        <p className="text-slate-400 text-sm mb-3">Select services:</p>
        <div className="grid grid-cols-2 gap-2">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => toggleService(s.id)}
              className={`px-3 py-2 rounded-lg text-sm text-left transition-all border ${
                selectedServices.includes(s.id)
                  ? 'border-cyan-400/50 bg-cyan-400/10 text-cyan-400'
                  : 'border-white/10 text-slate-400 hover:border-white/20 hover:text-white'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Complexity */}
      <div className="mb-6">
        <p className="text-slate-400 text-sm mb-3">Complexity:</p>
        <div className="flex gap-2">
          {complexities.map((c) => (
            <button
              key={c.id}
              onClick={() => setComplexity(c.id)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all border ${
                complexity === c.id
                  ? 'border-purple-400/50 bg-purple-400/10 text-purple-400'
                  : 'border-white/10 text-slate-400 hover:border-white/20 hover:text-white'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-6">
        <p className="text-slate-400 text-sm mb-3">
          Timeline: <span className="text-white font-medium">{timeline} weeks</span>
          {timelineMult > 1 && (
            <span className="text-orange-400 text-xs ml-2">Rush fee applied</span>
          )}
        </p>
        <input
          type="range"
          min={1}
          max={12}
          value={timeline}
          onChange={(e) => setTimeline(Number(e.target.value))}
          className="w-full accent-cyan-400"
        />
        <div className="flex justify-between text-xs text-slate-500 mt-1">
          <span>1 week</span>
          <span>12 weeks</span>
        </div>
      </div>

      {/* Estimate */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-4 border border-white/10">
        <p className="text-slate-400 text-sm">Estimated Budget</p>
        {total > 0 ? (
          <p className="text-3xl font-display font-bold text-white mt-1">
            ${total.toLocaleString()}
            <span className="text-slate-400 text-base font-normal ml-1">USD</span>
          </p>
        ) : (
          <p className="text-slate-500 text-sm mt-1">Select services to see estimate</p>
        )}
        <p className="text-slate-500 text-xs mt-2">
          * Final price depends on project scope. Contact us for accurate quote.
        </p>
      </div>
    </div>
  )
}
