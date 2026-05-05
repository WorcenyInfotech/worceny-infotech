import { motion, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiCode, FiLayout, FiServer, FiLayers } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: <FiLayout size={32} />,
    title: 'Frontend Development',
    desc: 'Pixel-perfect, responsive UIs built with React, Next.js, and modern CSS frameworks. Fast, accessible, and beautiful.',
    tags: ['React', 'Next.js', 'Tailwind'],
    color: '#00ff88',
  },
  {
    icon: <FiServer size={32} />,
    title: 'Backend Development',
    desc: 'Robust, scalable server-side solutions with Node.js, Express, and cloud-native architectures.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    color: '#00ccff',
  },
  {
    icon: <FiLayers size={32} />,
    title: 'Full Stack Development',
    desc: 'End-to-end web applications from database design to deployment, built for performance and scale.',
    tags: ['MERN Stack', 'REST APIs', 'AWS'],
    color: '#a855f7',
  },
  {
    icon: <FiCode size={32} />,
    title: 'Web Development',
    desc: 'Custom websites and web apps tailored to your brand, optimized for SEO and conversion.',
    tags: ['Custom CMS', 'SEO', 'PWA'],
    color: '#f59e0b',
  },
]

export default function Services() {
  const sectionRef = useRef()
  const headingRef = useRef()
  const cardsRef = useRef()
  const lineRef = useRef()

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
        { opacity: 0, y: 80, scale: 0.92 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="py-28 bg-black relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.02)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[#00ff88]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-20">
          <span className="inline-block text-[#00ff88] text-sm font-semibold tracking-widest uppercase mb-3">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <div ref={lineRef} className="w-24 h-0.5 bg-gradient-to-r from-[#00ff88] to-[#00ccff] mx-auto mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Comprehensive web solutions designed to elevate your digital presence.
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <motion.div
              key={s.title}
              whileHover={{ y: -10, boxShadow: `0 0 40px ${s.color}25` }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="glass-dark rounded-2xl p-7 group cursor-default relative overflow-hidden border border-white/5 hover:border-[#00ff88]/30 transition-colors duration-500"
            >
              {/* Animated corner glow */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl pointer-events-none"
                style={{ background: `${s.color}20` }}
              />

              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                style={{ background: `${s.color}15`, color: s.color }}
              >
                {s.icon}
              </motion.div>

              <h3 className="text-lg font-bold mb-3 text-white group-hover:text-[#00ff88] transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.desc}</p>

              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.08 }}
                    className="text-xs px-3 py-1 rounded-full border transition-all duration-300"
                    style={{
                      background: `${s.color}10`,
                      color: s.color,
                      borderColor: `${s.color}30`,
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Bottom line reveal */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 right-0 h-0.5 origin-left"
                style={{ background: `linear-gradient(90deg, ${s.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
