import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FiArrowRight, FiX, FiExternalLink,
  FiChevronLeft, FiChevronRight, FiCheck,
} from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'Employee Management Services Website',
    category: 'Full Stack',
    year: '2025',
    desc: 'Full-stack Employee Management Services Website designed for companies to manage employees, attendance, leave requests, payroll, and internal operations with a secure multi-role system and admin control panel.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'AJAX'],
    accent: '#6C5CE7',
    liveDemo: 'https://emsraj.vercel.app/',
    images: ['/images/1.1.png', '/images/1.2.png', '/images/1.3.png'],
    features: ['Multi-role system', 'Attendance & leave management', 'Payroll processing', 'Admin dashboard analytics', 'Secure authentication'],
  },
  {
    id: 2,
    title: 'Ecommerce Watch Website with AI Support',
    category: 'Full Stack',
    year: '2025',
    desc: 'Modern ecommerce watch store with AI-powered customer support, product catalog, cart system, secure checkout, and intelligent chatbot for instant customer assistance and product recommendations.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'AI Chatbot API'],
    accent: '#FF6B9D',
    liveDemo: '#',
    images: ['/images/2.1.png', '/images/2.2.png', '/images/2.3.png'],
    features: ['AI chatbot support', 'Product catalog & filters', 'Shopping cart system', 'Secure checkout flow', 'Order tracking'],
  },
  {
    id: 3,
    title: 'QuickChat — Real-Time Chat Application',
    category: 'Full Stack',
    year: '2025',
    desc: 'Full-stack real-time chat application built with the MERN stack. Features JWT authentication, Socket.IO messaging, online/offline status, and 32 modern theme variations.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Zustand'],
    accent: '#00BFFF',
    liveDemo: 'https://quickchat-y6jq.onrender.com/',
    images: ['/images/3.1.png', '/images/3.2.png', '/images/3.3.png'],
    features: ['JWT authentication', 'Real-time messaging', 'Online/offline status', '32 custom themes', 'Responsive UI'],
  },
  {
    id: 4,
    title: 'ArtX — AI Image Generator',
    category: 'Full Stack',
    year: '2026',
    desc: 'Modern AI-powered image generation platform where users create stunning images from text prompts. Built with the MERN stack and advanced AI APIs for high-quality art generation.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'OpenAI API'],
    accent: '#F7B731',
    liveDemo: 'https://artx-ai.vercel.app/',
    images: ['/images/4.1.png', '/images/4.2.png', '/images/4.3.png'],
    features: ['AI image generation', 'Text-to-image prompts', 'Modern responsive UI', 'High-quality output', 'MERN architecture'],
  },
  {
    id: 5,
    title: 'GreatKart — Ecommerce Platform',
    category: 'Frontend',
    year: '2026',
    desc: 'Powerful ecommerce web application built with Python and Django. Includes shopping cart, secure checkout, order management, PayPal integration, and token-based email authentication.',
    tech: ['Python', 'Django', 'SQLite', 'Bootstrap', 'PayPal API'],
    accent: '#32CD32',
    liveDemo: '#',
    images: ['/images/6.1.png'],
    features: ['Cart & checkout system', 'PayPal integration', 'Order management', 'Email authentication', 'User dashboard'],
  },
  {
    id: 6,
    title: 'WavyMusic — Music Streaming Platform',
    category: 'Frontend',
    year: '2025',
    desc: 'Modern full-stack music streaming web application built using the MERN stack. Users explore albums, stream tracks, and enjoy a dynamic audio player with a visually engaging interface.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    accent: '#FF6B6B',
    liveDemo: 'https://wavymusic.vercel.app',
    images: ['/images/5.1.png'],
    features: ['Music streaming', 'Dynamic audio player', 'Album & track browsing', 'Responsive UI', 'MERN architecture'],
  },
]

// ─── Modal ────────────────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  const [imgIndex, setImgIndex] = useState(0)
  const hasImages = project.images?.length > 0
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: 'rgba(10,10,11,0.88)', backdropFilter: 'blur(16px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.78, opacity: 0, y: 55 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.82, opacity: 0, y: 35 }}
          transition={{ type: 'spring', damping: 22, stiffness: 280 }}
          className="rounded-3xl p-8 max-w-xl w-full relative max-h-[90vh] overflow-y-auto"
          style={{ background: '#ffffff', border: `1px solid ${project.accent}30` }}
          onClick={e => e.stopPropagation()}
        >
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="sticky top-0 float-right z-10 w-9 h-9 rounded-full flex items-center justify-center mb-2"
            style={{ background: '#f3f4f6', color: '#555' }}
          >
            <FiX size={16} />
          </motion.button>

          {/* Image gallery */}
          <div className="w-full h-52 rounded-2xl mb-4 relative overflow-hidden"
            style={{ background: `${project.accent}15` }}>
            {hasImages ? (
              <>
                <img src={project.images[imgIndex]} alt={project.title}
                  className="w-full h-full object-cover" />
                {project.images.length > 1 && (
                  <>
                    <button onClick={() => setImgIndex(i => (i - 1 + project.images.length) % project.images.length)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white">
                      <FiChevronLeft size={16} />
                    </button>
                    <button onClick={() => setImgIndex(i => (i + 1) % project.images.length)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white">
                      <FiChevronRight size={16} />
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {project.images.map((_, i) => (
                        <button key={i} onClick={() => setImgIndex(i)}
                          className="w-1.5 h-1.5 rounded-full transition-all"
                          style={{ background: i === imgIndex ? project.accent : 'rgba(255,255,255,0.5)' }} />
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-7xl font-black" style={{ color: project.accent, opacity: 0.2 }}>
                  {project.title[0]}
                </span>
              </div>
            )}
            <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold"
              style={{ background: project.accent, color: '#fff' }}>
              {project.year}
            </div>
          </div>

          {/* Thumbnails */}
          {hasImages && project.images.length > 1 && (
            <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
              {project.images.map((img, i) => (
                <img key={i} src={img} alt="" onClick={() => setImgIndex(i)}
                  className="w-14 h-10 object-cover rounded-lg cursor-pointer shrink-0 transition-all"
                  style={{ border: i === imgIndex ? `2px solid ${project.accent}` : '2px solid transparent', opacity: i === imgIndex ? 1 : 0.45 }} />
              ))}
            </div>
          )}

          <span className="text-xs px-3 py-1 rounded-full mb-4 inline-block font-semibold"
            style={{ background: `${project.accent}15`, color: project.accent, border: `1px solid ${project.accent}30` }}>
            {project.category}
          </span>
          <h3 className="text-xl font-black mb-3" style={{ color: '#111' }}>{project.title}</h3>
          <p className="text-sm leading-relaxed mb-5" style={{ color: '#555' }}>{project.desc}</p>

          <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: project.accent }}>Key Features</h4>
          <div className="grid grid-cols-2 gap-2 mb-5">
            {project.features.map(f => (
              <div key={f} className="flex items-center gap-2 text-xs" style={{ color: '#555' }}>
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: project.accent }} />
                {f}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t, i) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full"
                style={{ background: '#f3f4f6', color: '#444', border: '1px solid #e5e7eb' }}>
                {t}
              </span>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.04, boxShadow: `0 0 20px ${project.accent}40` }}
            whileTap={{ scale: 0.96 }}
            onClick={() => window.open(project.liveDemo, '_blank')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold"
            style={{ background: project.accent, color: '#fff' }}>
            <FiExternalLink size={14} /> Live Demo
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// ─── Horizontal Split Card ────────────────────────────────────────────────────
function SplitCard({ project, index, onSelect }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const isEven = index % 2 === 0

  // Image slides from left on even, right on odd
  // Content slides from right on even, left on odd
  const imgVariants = {
    hidden: { opacity: 0, x: isEven ? -80 : 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.05 } },
  }
  const contentVariants = {
    hidden: { opacity: 0, x: isEven ? 80 : -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.15 } },
  }

  return (
    <div
      ref={ref}
      className={[
        'overflow-hidden rounded-3xl',
        'relative',
        'transform-gpu will-change-transform',
        'transition-all duration-500 ease-out',
        'hover:-translate-y-1 hover:shadow-[0_22px_80px_rgba(15,23,42,0.18)]',
      ].join(' ')}
      style={{
        background: '#ffffff',
        border: `1px solid ${project.accent}22`,
        boxShadow: '0 10px 55px rgba(15,23,42,0.10)',
      }}
    >
      {/* subtle top glow */}
      <div
        className="absolute inset-x-0 top-0 h-24 pointer-events-none"
        style={{
          background: `radial-gradient(80% 90% at 50% 0%, ${project.accent}26 0%, transparent 72%)`,
        }}
      />
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>

        {/* ── Image panel ── */}
        <motion.div
          variants={imgVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="lg:w-5/12 relative overflow-hidden min-h-[250px] lg:min-h-[330px] group cursor-pointer"
          style={{ background: `linear-gradient(135deg, ${project.accent}18, ${project.accent}06)` }}
          onClick={() => onSelect(project)}
        >
          {/* Accent number watermark */}
          <span className="absolute top-4 left-5 text-8xl font-black select-none pointer-events-none z-0"
            style={{ color: `${project.accent}12` }}>
            {String(index + 1).padStart(2, '0')}
          </span>

          {project.images?.[0] ? (
            <motion.img
              src={project.images[0]} alt={project.title}
              className="w-full h-full object-cover absolute inset-0"
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.5 }}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-9xl font-black" style={{ color: project.accent, opacity: 0.12 }}>
                {project.title[0]}
              </span>
            </div>
          )}

          {/* Year + category badges */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full shadow-sm"
              style={{ background: project.accent, color: '#fff' }}
            >
              {project.year}
            </span>
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
              style={{
                background: 'rgba(255,255,255,0.86)',
                backdropFilter: 'blur(10px)',
                color: project.accent,
                border: `1px solid ${project.accent}30`,
              }}
            >
              {project.category}
            </span>
          </div>

          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 flex items-center justify-center z-10"
            style={{ background: `${project.accent}cc` }}>
            <span className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold bg-white"
              style={{ color: project.accent }}>
              View Details <FiArrowRight size={14} />
            </span>
          </motion.div>
        </motion.div>

        {/* ── Content panel ── */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="lg:w-7/12 p-7 sm:p-8 lg:p-10 flex flex-col justify-center"
        >
          {/* Top accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
            className="h-0.5 rounded-full mb-6 origin-left"
            style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
          />

          {/* Title */}
          <h3 className="text-xl lg:text-[26px] font-black mb-2.5 leading-tight tracking-tight" style={{ color: '#0b1220' }}>
            {project.title}
          </h3>

          {/* Desc */}
          <p className="text-sm leading-relaxed mb-6" style={{ color: '#4b5563' }}>
            {project.desc}
          </p>

          {/* Features — staggered dots */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
            {project.features.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                className="flex items-center gap-2.5 text-xs"
                style={{ color: '#334155' }}
              >
                <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: `${project.accent}18`, color: project.accent }}>
                  <FiCheck size={10} />
                </span>
                {f}
              </motion.div>
            ))}
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-7">
            {project.tech.slice(0, 4).map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.35, delay: 0.4 + i * 0.06 }}
                className="text-xs px-3 py-1 rounded-full font-medium"
                style={{ background: `${project.accent}10`, color: project.accent, border: `1px solid ${project.accent}25` }}
              >
                {t}
              </motion.span>
            ))}
            {project.tech.length > 4 && (
              <span className="text-xs px-3 py-1 rounded-full font-medium"
                style={{ background: '#f3f4f6', color: '#666', border: '1px solid #e5e7eb' }}>
                +{project.tech.length - 4} more
              </span>
            )}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: `0 0 24px ${project.accent}45` }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onSelect(project)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold cursor-pointer"
              style={{ background: project.accent, color: '#fff' }}
            >
              View Case Study <FiArrowRight size={13} />
            </motion.button>
            {project.liveDemo && project.liveDemo !== '#' && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => window.open(project.liveDemo, '_blank')}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold cursor-pointer"
                style={{
                  background: 'rgba(255,255,255,0.55)',
                  backdropFilter: 'blur(10px)',
                  border: `1.5px solid ${project.accent}35`,
                  color: project.accent,
                }}
              >
                <FiExternalLink size={13} /> Live Demo
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function HomePortfolio() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null)
  const homeProjects = projects.slice(0, 3)

  return (
    <section style={{ background: 'var(--bg)' }} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-5"
            style={{ background: 'rgba(45,77,202,0.1)', border: '1px solid rgba(45,77,202,0.28)' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--accent2)' }} />
            <span className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>Our Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: 'var(--text)' }}>
            Our Digital <span className="gradient-text">Masterpieces</span>
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            A curated showcase of our best work — from startups to enterprise solutions,
            built with passion and precision.
          </p>
        </motion.div>

        {/* Simple cards (Home shows 3 only) */}
        <div className="space-y-6 mb-14">
          {homeProjects.map((p, i) => (
            <SplitCard key={p.id} project={p} index={i} onSelect={setSelected} />
          ))}
        </div>

        {/* View All */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 32px rgba(45,77,202,0.4)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => { navigate('/portfolio'); window.scrollTo({ top: 0 }) }}
            className="px-10 py-4 rounded-full font-bold text-base cursor-pointer"
            style={{ background: 'var(--accent)', color: '#fff' }}>
            View All Projects →
          </motion.button>
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
