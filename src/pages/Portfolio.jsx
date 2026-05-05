import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiX, FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    desc: 'A modern e-commerce platform with real-time inventory, payment integration, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    color: '#00ff88',
    gradient: 'from-[#00ff88]/20 to-[#00ccff]/10',
  },
  {
    id: 2,
    title: 'SaaS Dashboard',
    category: 'Frontend',
    desc: 'Analytics dashboard with real-time data visualization, dark theme, and responsive design.',
    tech: ['React', 'Tailwind', 'Chart.js'],
    color: '#00ccff',
    gradient: 'from-[#00ccff]/20 to-[#7c3aed]/10',
  },
  {
    id: 3,
    title: 'Corporate Website',
    category: 'Web Dev',
    desc: 'Premium corporate website with animations, CMS integration, and SEO optimization.',
    tech: ['Next.js', 'Sanity CMS', 'GSAP'],
    color: '#a855f7',
    gradient: 'from-[#a855f7]/20 to-[#00ff88]/10',
  },
  {
    id: 4,
    title: 'Mobile Banking App',
    category: 'Full Stack',
    desc: 'Secure mobile banking UI with biometric auth, transaction history, and real-time notifications.',
    tech: ['React Native', 'Node.js', 'PostgreSQL'],
    color: '#f59e0b',
    gradient: 'from-[#f59e0b]/20 to-[#00ff88]/10',
  },
  {
    id: 5,
    title: 'AI Content Platform',
    category: 'Full Stack',
    desc: 'AI-powered content generation platform with subscription model and team collaboration.',
    tech: ['Next.js', 'OpenAI', 'Prisma'],
    color: '#00ff88',
    gradient: 'from-[#00ff88]/20 to-[#f59e0b]/10',
  },
  {
    id: 6,
    title: 'Real Estate Portal',
    category: 'Web Dev',
    desc: 'Property listing portal with map integration, advanced filters, and virtual tours.',
    tech: ['React', 'Google Maps', 'Firebase'],
    color: '#00ccff',
    gradient: 'from-[#00ccff]/20 to-[#a855f7]/10',
  },
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
          className="glass-dark rounded-3xl p-8 max-w-lg w-full relative border border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          >
            <FiX />
          </motion.button>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className={`w-full h-44 rounded-2xl bg-gradient-to-br ${project.gradient} mb-6 flex items-center justify-center relative overflow-hidden`}
          >
            <motion.span
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-6xl font-black"
              style={{ color: project.color, opacity: 0.35 }}
            >
              {project.title[0]}
            </motion.span>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <span className="text-xs px-3 py-1 rounded-full border mb-4 inline-block"
              style={{ background: `${project.color}15`, color: project.color, borderColor: `${project.color}30` }}>
              {project.category}
            </span>
            <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-gray-400 leading-relaxed mb-6">{project.desc}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="text-xs px-3 py-1 rounded-full glass text-gray-300 border border-white/10"
                >
                  {t}
                </motion.span>
              ))}
            </div>

            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 0 20px rgba(0,255,136,0.4)' }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00ff88] text-black text-sm font-semibold"
              >
                <FiExternalLink size={14} /> Live Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/10 text-white text-sm"
              >
                <FiGithub size={14} /> Source Code
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Portfolio() {
  const sectionRef = useRef()
  const headingRef = useRef()
  const cardsRef = useRef()
  const lineRef = useRef()
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' }
        }
      )

      gsap.fromTo(lineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: lineRef.current, start: 'top 85%' }
        }
      )

      gsap.fromTo(cardsRef.current.children,
        { opacity: 0, y: 70, scale: 0.9 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.75, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="portfolio" className="py-28 section-gradient relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#00ccff]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-20">
          <span className="inline-block text-[#00ff88] text-sm font-semibold tracking-widest uppercase mb-3">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div ref={lineRef} className="w-24 h-0.5 bg-gradient-to-r from-[#00ff88] to-[#00ccff] mx-auto mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            A showcase of our best work — from startups to enterprise solutions.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              onClick={() => setSelected(p)}
              className="glass-dark rounded-2xl overflow-hidden cursor-pointer group border border-white/5 hover:border-[#00ff88]/25 transition-colors duration-400"
            >
              {/* Thumbnail */}
              <div className={`relative h-48 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                <motion.div
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="text-8xl font-black opacity-15" style={{ color: p.color }}>
                    {p.title[0]}
                  </span>
                </motion.div>

                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/65 flex items-center justify-center gap-3"
                >
                  <motion.span
                    initial={{ y: 15, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                    className="flex items-center gap-2 px-5 py-2 rounded-full border text-sm font-semibold"
                    style={{ borderColor: p.color, color: p.color }}
                  >
                    View Details <FiArrowRight size={14} />
                  </motion.span>
                </motion.div>

                {/* Shimmer line */}
                <motion.div
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}
                  className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
                />
              </div>

              <div className="p-6">
                <span
                  className="text-xs px-3 py-1 rounded-full border mb-3 inline-block"
                  style={{ background: `${p.color}10`, color: p.color, borderColor: `${p.color}25` }}
                >
                  {p.category}
                </span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00ff88] transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
