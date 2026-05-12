import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useNavigate } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { techGroups } from '../data/technologiesData'

gsap.registerPlugin(ScrollTrigger)

const totalTechs = [...new Set(techGroups.flatMap(g => g.techs.map(t => t.name)))].length

function TechCard({ tech, accent, index, groupId }) {
  const navigate = useNavigate()
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, type: 'spring', stiffness: 280, damping: 22 }}
      whileHover={{ y: -8, boxShadow: `0 16px 40px ${accent}30`, borderColor: `${accent}55` }}
      className="flex flex-col items-center gap-3 p-4 rounded-2xl cursor-pointer transition-all duration-300"
      style={{ background: 'var(--card-bg)', border: `1px solid ${accent}18` }}
      onClick={() => {
        navigate(`/technologies/${groupId}/${tech.slug}`)
        window.scrollTo({ top: 0 })
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          navigate(`/technologies/${groupId}/${tech.slug}`)
          window.scrollTo({ top: 0 })
        }
      }}
    >
      <motion.div
        whileHover={{ scale: 1.18, rotate: 6 }}
        transition={{ type: 'spring', stiffness: 400 }}
        className="w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ background: `${accent}14` }}
      >
        <img src={tech.icon} alt={tech.name} className="w-7 h-7 object-contain"
          style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.18))' }} />
      </motion.div>
      <span className="text-[11px] font-semibold text-center leading-tight" style={{ color: 'var(--muted-card)' }}>
        {tech.name}
      </span>
    </motion.div>
  )
}

function GroupSection({ group, index }) {
  const navigate = useNavigate()
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.05 }}
      className="rounded-3xl overflow-hidden relative"
      style={{ background: 'var(--card-bg)', border: `1px solid ${group.accent}22`, boxShadow: `0 0 60px ${group.accent}06` }}
    >
      {/* Ambient glow */}
      <div className="absolute pointer-events-none rounded-full blur-3xl"
        style={{
          width: 300, height: 300,
          top: isEven ? -80 : 'auto', bottom: isEven ? 'auto' : -80,
          right: isEven ? -80 : 'auto', left: isEven ? 'auto' : -80,
          background: `${group.accent}0c`,
        }} />

      <div className="p-8 relative z-10">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 8 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
              style={{ background: `${group.accent}18`, color: group.accent }}>
              {group.icon}
            </motion.div>
            <div>
              <h3 className="text-xl font-black" style={{ color: 'var(--text-card)' }}>{group.label}</h3>
              <p className="text-xs mt-0.5" style={{ color: 'var(--muted-card)' }}>{group.techs.length} technologies</p>
            </div>
          </div>
          <span className="self-start sm:self-auto text-xs px-4 py-1.5 rounded-full font-semibold"
            style={{ background: `${group.accent}14`, color: group.accent, border: `1px solid ${group.accent}28` }}>
            {group.label}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--muted-card)' }}>{group.desc}</p>

        {/* Accent line */}
        <div className="w-full h-px rounded-full mb-6"
          style={{ background: `linear-gradient(90deg, ${group.accent}60, transparent)` }} />

        {/* Tech grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 mb-6">
          {group.techs.map((tech, i) => (
            <TechCard key={`${group.id}-${tech.slug}`} tech={tech} accent={group.accent} index={i} groupId={group.id} />
          ))}
        </div>

        {/* More Details button */}
        <div className="flex justify-end">
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: `0 0 24px ${group.accent}45` }}
            whileTap={{ scale: 0.97 }}
            onClick={() => { navigate(`/technologies/${group.id}`); window.scrollTo({ top: 0 }) }}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold cursor-pointer transition-all duration-300"
            style={{ background: group.accent, color: '#fff' }}>
            More Details <FiArrowRight size={13} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default function TechnologiesPage() {
  const sectionRef = useRef()
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all' ? techGroups : techGroups.filter(g => g.id === activeFilter)

  useEffect(() => {
    window.scrollTo({ top: 0 })
    const ctx = gsap.context(() => {
      gsap.fromTo('.tech-hero-el',
        { opacity: 0, y: 55 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out', delay: 0.15 }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="min-h-screen pt-16" style={{ background: 'var(--bg)' }}>

      {/* Hero */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-overlay pointer-events-none" />
        <motion.div animate={{ scale: [1, 1.25, 1], opacity: [0.07, 0.14, 0.07] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
          style={{ background: 'var(--accent)' }} />
        <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.04, 0.09, 0.04] }}
          transition={{ duration: 10, repeat: Infinity, delay: 3 }}
          className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'var(--accent2)' }} />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="tech-hero-el inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-6"
            style={{ background: 'rgba(134,90,255,0.1)', border: '1px solid rgba(134,90,255,0.28)' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--accent2)' }} />
            <span className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>Our Tech Stack</span>
          </div>
          <h1 className="tech-hero-el text-5xl md:text-7xl font-black mb-6 leading-tight" style={{ color: 'var(--text)' }}>
            Technologies We <span className="gradient-text">Master</span>
          </h1>
          <p className="tech-hero-el text-lg max-w-2xl mx-auto leading-relaxed mb-10" style={{ color: 'var(--muted)' }}>
            From frontend frameworks to cloud infrastructure — a complete look at the tools and technologies we use to build world-class digital products.
          </p>

          {/* Stats */}
          <div className="tech-hero-el flex flex-wrap justify-center gap-4">
            {[
              { v: `${totalTechs}+`, l: 'Technologies', accent: 'var(--accent)' },
              { v: `${techGroups.length}`, l: 'Categories', accent: 'var(--accent2)' },
              { v: '2+', l: 'Years Using', accent: '#F7B731' },
              { v: '50+', l: 'Projects Built', accent: '#32CD32' },
            ].map((s, i) => (
              <motion.div key={s.l}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1, type: 'spring', stiffness: 300 }}
                className="px-6 py-3 rounded-2xl text-center"
                style={{ background: 'var(--card-bg)', border: `1px solid ${s.accent}25` }}>
                <div className="text-2xl font-black" style={{ color: s.accent }}>{s.v}</div>
                <div className="text-xs" style={{ color: 'var(--muted-card)' }}>{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-2 justify-center">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFilter('all')}
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer"
            style={activeFilter === 'all'
              ? { background: 'var(--accent)', color: '#fff', boxShadow: '0 0 20px rgba(134,90,255,0.4)' }
              : { background: 'var(--card-bg)', color: 'var(--muted-card)', border: '1px solid rgba(134,90,255,0.18)' }}>
            All ({techGroups.length})
          </motion.button>
          {techGroups.map(g => (
            <motion.button key={g.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(g.id)}
              className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer"
              style={activeFilter === g.id
                ? { background: g.accent, color: '#fff', boxShadow: `0 0 20px ${g.accent}50` }
                : { background: 'var(--card-bg)', color: 'var(--muted-card)', border: `1px solid ${g.accent}20` }}>
              <span style={{ color: activeFilter === g.id ? '#fff' : g.accent }}>{g.icon}</span>
              {g.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Groups */}
      <div className="max-w-7xl mx-auto px-6 pb-20 space-y-8">
        {filtered.map((group, i) => (
          <GroupSection key={group.id} group={group} index={i} />
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center rounded-3xl p-16 relative overflow-hidden"
          style={{ background: 'var(--surface2)', border: '1px solid rgba(134,90,255,0.2)' }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 50% 0%, rgba(134,90,255,0.1), transparent 60%)' }} />
          <h2 className="text-3xl md:text-5xl font-black mb-4 relative z-10" style={{ color: 'var(--text)' }}>
            Want to Build with the <span className="gradient-text">Best Stack?</span>
          </h2>
          <p className="mb-8 max-w-xl mx-auto text-sm relative z-10" style={{ color: 'var(--muted)' }}>
            We pick the right technology for your project — not the trendiest one. Let's talk about what fits your goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center relative z-10">
            <motion.button whileHover={{ scale: 1.06, boxShadow: '0 0 36px rgba(134,90,255,0.5)' }} whileTap={{ scale: 0.95 }}
              onClick={() => { navigate('/contact'); window.scrollTo({ top: 0 }) }}
              className="flex items-center gap-2 px-10 py-4 rounded-full font-bold text-base cursor-pointer"
              style={{ background: 'var(--accent)', color: '#fff' }}>
              Start a Project <FiArrowRight size={16} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}
              onClick={() => { navigate('/services'); window.scrollTo({ top: 0 }) }}
              className="px-10 py-4 rounded-full font-bold text-base cursor-pointer"
              style={{ background: 'transparent', border: '1.5px solid rgba(134,90,255,0.35)', color: 'var(--text)' }}>
              View Services
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
