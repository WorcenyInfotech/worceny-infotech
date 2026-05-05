import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiX, FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const categories = ['All', 'Full Stack', 'Frontend', 'Web Dev', 'Mobile']

const projects = [
  { id: 1, title: 'E-Commerce Platform', category: 'Full Stack', year: '2024',
    desc: 'A modern e-commerce platform with real-time inventory, payment integration, and admin dashboard. Built for a retail client with 10K+ daily users.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'], color: '#00ff88', gradient: 'from-[#00ff88]/20 to-[#00ccff]/10',
    features: ['Real-time inventory', 'Stripe payments', 'Admin dashboard', 'Mobile responsive'] },
  { id: 2, title: 'SaaS Analytics Dashboard', category: 'Frontend', year: '2024',
    desc: 'Analytics dashboard with real-time data visualization, dark theme, and responsive design for a B2B SaaS startup.',
    tech: ['React', 'Tailwind', 'Chart.js', 'WebSocket'], color: '#00ccff', gradient: 'from-[#00ccff]/20 to-[#7c3aed]/10',
    features: ['Real-time charts', 'Dark/light mode', 'CSV export', 'Role-based access'] },
  { id: 3, title: 'Corporate Website', category: 'Web Dev', year: '2023',
    desc: 'Premium corporate website with GSAP animations, Sanity CMS integration, and full SEO optimization.',
    tech: ['Next.js', 'Sanity CMS', 'GSAP', 'Vercel'], color: '#a855f7', gradient: 'from-[#a855f7]/20 to-[#00ff88]/10',
    features: ['CMS integration', 'SEO optimized', 'GSAP animations', 'Blog system'] },
  { id: 4, title: 'Mobile Banking App', category: 'Mobile', year: '2023',
    desc: 'Secure mobile banking UI with biometric auth, transaction history, and real-time push notifications.',
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'Firebase'], color: '#f59e0b', gradient: 'from-[#f59e0b]/20 to-[#00ff88]/10',
    features: ['Biometric auth', 'Push notifications', 'Transaction history', 'QR payments'] },
  { id: 5, title: 'AI Content Platform', category: 'Full Stack', year: '2024',
    desc: 'AI-powered content generation platform with subscription model, team collaboration, and usage analytics.',
    tech: ['Next.js', 'OpenAI API', 'Prisma', 'Stripe'], color: '#00ff88', gradient: 'from-[#00ff88]/20 to-[#f59e0b]/10',
    features: ['AI generation', 'Team workspaces', 'Subscription billing', 'Usage analytics'] },
  { id: 6, title: 'Real Estate Portal', category: 'Web Dev', year: '2023',
    desc: 'Property listing portal with Google Maps integration, advanced filters, virtual tours, and agent dashboard.',
    tech: ['React', 'Google Maps', 'Firebase', 'Node.js'], color: '#00ccff', gradient: 'from-[#00ccff]/20 to-[#a855f7]/10',
    features: ['Map integration', 'Virtual tours', 'Agent dashboard', 'Advanced filters'] },
  { id: 7, title: 'Healthcare Management', category: 'Full Stack', year: '2024',
    desc: 'Hospital management system with appointment booking, patient records, billing, and doctor portal.',
    tech: ['React', 'Node.js', 'MySQL', 'Socket.io'], color: '#a855f7', gradient: 'from-[#a855f7]/20 to-[#00ccff]/10',
    features: ['Appointment booking', 'Patient records', 'Billing system', 'Doctor portal'] },
  { id: 8, title: 'EdTech Learning Platform', category: 'Full Stack', year: '2023',
    desc: 'Online learning platform with video courses, quizzes, certificates, and student progress tracking.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'AWS S3'], color: '#f59e0b', gradient: 'from-[#f59e0b]/20 to-[#a855f7]/10',
    features: ['Video streaming', 'Quiz engine', 'Certificates', 'Progress tracking'] },
  { id: 9, title: 'Restaurant Ordering App', category: 'Mobile', year: '2023',
    desc: 'Food ordering app with real-time order tracking, table booking, loyalty points, and kitchen display.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Razorpay'], color: '#00ff88', gradient: 'from-[#00ff88]/20 to-[#a855f7]/10',
    features: ['Live order tracking', 'Table booking', 'Loyalty points', 'Kitchen display'] },
]

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '99%', label: 'Client Satisfaction' },
]

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.75, opacity: 0, y: 60 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 40 }}
          transition={{ type: 'spring', damping: 22, stiffness: 280 }}
          className="glass-dark rounded-3xl p-8 max-w-xl w-full relative border border-white/10 max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white"
          >
            <FiX />
          </motion.button>

          <motion.div
            className={`w-full h-48 rounded-2xl bg-gradient-to-br ${project.gradient} mb-6 flex items-center justify-center relative overflow-hidden`}
          >
            <motion.span
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-7xl font-black"
              style={{ color: project.color, opacity: 0.3 }}
            >
              {project.title[0]}
            </motion.span>
            <div className="absolute top-3 right-3 px-3 py-1 rounded-full glass text-xs text-gray-300">{project.year}</div>
          </motion.div>

          <span className="text-xs px-3 py-1 rounded-full border mb-4 inline-block"
            style={{ background: `${project.color}15`, color: project.color, borderColor: `${project.color}30` }}>
            {project.category}
          </span>
          <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
          <p className="text-gray-400 leading-relaxed mb-6">{project.desc}</p>

          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h4>
            <div className="grid grid-cols-2 gap-2">
              {project.features.map(f => (
                <div key={f} className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t, i) => (
              <motion.span key={t} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}
                className="text-xs px-3 py-1 rounded-full glass text-gray-300 border border-white/10">{t}</motion.span>
            ))}
          </div>

          <div className="flex gap-3">
            <motion.button whileHover={{ scale: 1.04, boxShadow: '0 0 20px rgba(0,255,136,0.4)' }} whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00ff88] text-black text-sm font-semibold">
              <FiExternalLink size={14} /> Live Demo
            </motion.button>
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/10 text-white text-sm">
              <FiGithub size={14} /> Source Code
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function PortfolioPage() {
  const sectionRef = useRef()
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)
  const navigate = useNavigate()

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  useEffect(() => {
    window.scrollTo({ top: 0 })
    const ctx = gsap.context(() => {
      gsap.fromTo('.portfolio-hero-text',
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.2 }
      )
      gsap.fromTo('.stat-item',
        { opacity: 0, scale: 0.7 },
        { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)',
          scrollTrigger: { trigger: '.stats-row', start: 'top 85%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="min-h-screen bg-black pt-24">
      {/* Hero */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <motion.div animate={{ scale:[1,1.2,1], opacity:[0.04,0.09,0.04] }} transition={{ duration:7, repeat:Infinity }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#00ff88] rounded-full blur-3xl pointer-events-none" />
        <motion.div animate={{ scale:[1,1.3,1], opacity:[0.03,0.07,0.03] }} transition={{ duration:9, repeat:Infinity, delay:2 }}
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#00ccff] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="portfolio-hero-text inline-flex items-center gap-2 px-4 py-2 rounded-full glass neon-border mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
            <span className="text-[#00ff88] text-sm font-medium">Our Work Speaks for Itself</span>
          </div>
          <h1 className="portfolio-hero-text text-5xl md:text-7xl font-black mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="portfolio-hero-text text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A curated showcase of our best work — from startups to enterprise solutions. Every project is built with passion, precision, and performance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Stats */}
        <div className="stats-row grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map(s => (
            <motion.div key={s.label} whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,255,136,0.15)' }}
              className="stat-item glass-dark rounded-2xl p-6 text-center neon-border">
              <div className="text-3xl font-black neon-text mb-1">{s.value}</div>
              <div className="text-gray-500 text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map(cat => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                filter === cat
                  ? 'bg-[#00ff88] text-black border-[#00ff88] neon-glow'
                  : 'glass text-gray-400 border-white/10 hover:border-[#00ff88]/40 hover:text-white'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.85, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 20 }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: 'easeOut' }}
                whileHover={{ y: -8 }}
                onClick={() => setSelected(p)}
                className="glass-dark rounded-2xl overflow-hidden cursor-pointer group border border-white/5 hover:border-[#00ff88]/25 transition-colors duration-300"
              >
                {/* Thumbnail */}
                <div className={`relative h-48 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl font-black opacity-15" style={{ color: p.color }}>{p.title[0]}</span>
                  </motion.div>
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full glass text-xs text-gray-300">{p.year}</div>
                  <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/65 flex items-center justify-center">
                    <span className="flex items-center gap-2 px-5 py-2 rounded-full border text-sm font-semibold"
                      style={{ borderColor: p.color, color: p.color }}>
                      View Details <FiArrowRight size={14} />
                    </span>
                  </motion.div>
                  {/* Shimmer */}
                  <motion.div initial={{ x: '-100%' }} whileHover={{ x: '200%' }} transition={{ duration: 0.7 }}
                    className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs px-3 py-1 rounded-full border"
                      style={{ background: `${p.color}10`, color: p.color, borderColor: `${p.color}25` }}>
                      {p.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00ff88] transition-colors duration-300">{p.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 3).map(t => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-md glass text-gray-400 border border-white/8">{t}</span>
                    ))}
                    {p.tech.length > 3 && <span className="text-xs px-2 py-0.5 rounded-md glass text-gray-500 border border-white/8">+{p.tech.length - 3}</span>}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center glass-dark rounded-3xl p-12 border border-[#00ff88]/10"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Start Your <span className="gradient-text">Project?</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Let's build something amazing together. Contact us today and get a free consultation.
          </p>
          <motion.button
            whileHover={{ scale: 1.06, boxShadow: '0 0 40px rgba(0,255,136,0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { navigate('/contact'); window.scrollTo({ top: 0 }) }}
            className="px-10 py-4 rounded-full bg-[#00ff88] text-black font-bold text-base neon-glow hover:bg-[#00e07a] transition-all duration-300"
          >
            Start a Project →
          </motion.button>
        </motion.div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
