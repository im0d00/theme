import { useState } from 'react'

const locations = [
  { city: 'San Francisco', country: 'USA', emoji: '🌉', timezone: 'GMT-8' },
  { city: 'London', country: 'UK', emoji: '🇬🇧', timezone: 'GMT+0' },
  { city: 'Tokyo', country: 'Japan', emoji: '🗼', timezone: 'GMT+9' },
]

const contactInfo = [
  { icon: '📧', label: 'Email', value: 'hello@lizzdo.com', href: 'mailto:hello@lizzdo.com' },
  { icon: '💬', label: 'Discord', value: 'discord.gg/lizzdo', href: '#' },
  { icon: '🐦', label: 'Twitter', value: '@lizzdostudio', href: '#' },
]

interface FormData {
  name: string
  email: string
  company: string
  service: string
  budget: string
  message: string
}

const initialForm: FormData = {
  name: '',
  email: '',
  company: '',
  service: '',
  budget: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate submission (replace with real endpoint or WP REST API call)
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('sent')
    setForm(initialForm)
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <p className="text-cyan-400 font-mono text-sm mb-4">— Get in Touch —</p>
        <h1 className="text-5xl font-display font-black text-white mb-6">
          Start a <span className="holographic">Conversation</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Have a project in mind? Let's talk. We respond to all inquiries within 24 hours.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact details */}
            <div className="glass rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-display font-bold text-lg mb-4">Contact</h3>
              <div className="space-y-3">
                {contactInfo.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <span className="text-xl">{c.icon}</span>
                    <div>
                      <p className="text-xs text-slate-500">{c.label}</p>
                      <p className="text-sm">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Locations */}
            <div className="glass rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-display font-bold text-lg mb-4">Locations</h3>
              <div className="space-y-3">
                {locations.map((loc) => (
                  <div key={loc.city} className="flex items-center gap-3">
                    <span className="text-xl">{loc.emoji}</span>
                    <div>
                      <p className="text-white text-sm font-medium">{loc.city}</p>
                      <p className="text-slate-500 text-xs">{loc.country} · {loc.timezone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="glass rounded-2xl p-6 border border-green-400/20 bg-green-400/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-green-400 text-sm font-semibold">Available for projects</p>
              </div>
              <p className="text-slate-400 text-xs">
                Average response time: <span className="text-white font-medium">Under 24 hours</span>
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="glass rounded-2xl p-8 border border-white/10">
              {status === 'sent' ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-white font-display font-bold text-2xl mb-2">Message Sent!</h3>
                  <p className="text-slate-400">We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-cyan-400 hover:text-cyan-300 text-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-slate-400 text-sm mb-1.5 block">Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 text-sm mb-1.5 block">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-400 text-sm mb-1.5 block">Company</label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company (optional)"
                      className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 text-sm"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-slate-400 text-sm mb-1.5 block">Service</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-white focus:outline-none focus:border-cyan-400/50 text-sm bg-transparent"
                      >
                        <option value="" className="bg-gray-900">Select a service</option>
                        <option value="3d" className="bg-gray-900">3D Modeling</option>
                        <option value="animation" className="bg-gray-900">Animation</option>
                        <option value="game" className="bg-gray-900">Game Development</option>
                        <option value="vr" className="bg-gray-900">VR/AR</option>
                        <option value="web" className="bg-gray-900">Web & Digital</option>
                        <option value="branding" className="bg-gray-900">Branding</option>
                        <option value="other" className="bg-gray-900">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-slate-400 text-sm mb-1.5 block">Budget</label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-white focus:outline-none focus:border-cyan-400/50 text-sm bg-transparent"
                      >
                        <option value="" className="bg-gray-900">Select budget range</option>
                        <option value="<5k" className="bg-gray-900">Under $5,000</option>
                        <option value="5-10k" className="bg-gray-900">$5,000 – $10,000</option>
                        <option value="10-25k" className="bg-gray-900">$10,000 – $25,000</option>
                        <option value="25-50k" className="bg-gray-900">$25,000 – $50,000</option>
                        <option value=">50k" className="bg-gray-900">$50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-400 text-sm mb-1.5 block">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 rounded-xl glass border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
