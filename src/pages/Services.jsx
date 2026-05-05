import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiCode, FiLayout, FiServer, FiLayers, FiSmartphone, FiTrendingUp } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: <FiLayout size={30} />,
    title: 'Frontend Development',
    desc: 'Pixel-perfect, responsive UIs built with React, Next.js, and modern CSS. Fast, accessible, and beautiful.',
    tags: ['React', 'Next.js', 'Tailwind'],
    accent: '#865aff',
  },
  {
    icon: <FiServer size={30} />,
    title: 'Backend Development',
    desc: 'Robust, scalable server-side solutions with Node.js, Express, and cloud-native architectures.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    accent: '#5aff73',
  },
  {
    icon: <FiLayers size={30} />,
    title: 'Full Stack Development',
    desc: 'End-to-end web applications from database design to deployment, built for performance and scale.',
    tags: ['MERN Stack', 'REST APIs', 'AWS'],
    accent: '#865aff',
  },
  {
    icon: <FiCode size={30} />,
    title: 'Web Development',
    desc: 'Custom websites and web apps tailored to your brand, optimized for SEO and conversion.',
    tags: ['Custom CMS', 'SEO', 'PWA'],
    accent: '#5aff73',
  },
  {
    icon: <FiSmartphone size={30} />,
    title: 'Mobile Development',
    desc: 'Cross-platform mobile apps with React Native that feel native on both iOS and Android.',
    tags: ['React Native', 'Expo', 'Firebase'],
    accent: '#865aff',
  },
  {
    icon: <FiTrendingUp size={30} />,
    title: 'SEO & Performance',
    desc: 'Boost your rankings and site speed with technical SEO, Core Web Vitals, and performance audits.',
    tags: ['Core Web Vitals', 'Lighthouse', 'Analytics'],
    accent: '#5aff73',
  },
]

export default function Services() {
  const sectionRef = useRef()
  const headingRef = useRef()
  const lineRef    = useRef()
  const cardsRef   = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' } }
      )
      gsap.fromTo(lineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: lineRef.current, start: 'top 85%' } }
      )
      gsap.fromTo(cardsRef.current.children,
        { opacity: 0, y: 70, scale: 0.93 },
        { opacity: 1, y: 0, scale: 1, duration: 0.75, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="py-28 relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      {/* bg accents */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(134,90,255,0.05)' }} />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(90,255,115,0.03)' }} />

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div ref={headingRef} className="text-center mb-20">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: 'var(--accent2)' }}>What We Do</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4" style={{ color: 'var(--text)' }}>
            Our <span className="gradient-text">Services</span>
          </h2>
          <div ref={lineRef} className="w-24 h-0.5 mx-auto mb-6 rounded-full"
            style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent2))' }} />
          <p className="max-w-xl mx-auto text-lg" style={{ color: 'var(--muted)' }}>
            Comprehensive web solutions designed to elevate your digital presence.
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <motion.div
              key={s.title}
              whileHover={{ y: -10, boxShadow: `0 0 40px ${s.accent}20` }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              className="rounded-2xl p-7 group cursor-default relative overflow-hidden"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
              }}
            >
              {/* Corner glow on hover */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute -top-12 -right-12 w-36 h-36 rounded-full blur-2xl pointer-events-none"
                style={{ background: `${s.accent}18` }}
              />

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.15, rotate: 6 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                style={{ background: `${s.accent}12`, color: s.accent }}
              >
                {s.icon}
              </motion.div>

              <h3
                className="text-lg font-bold mb-3 relative z-10 transition-colors duration-300"
                style={{ color: 'var(--text)' }}
              >
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5 relative z-10" style={{ color: 'var(--muted)' }}>
                {s.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {s.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.08 }}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{
                      background: `${s.accent}10`,
                      color: s.accent,
                      border: `1px solid ${s.accent}28`,
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Bottom reveal line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 right-0 h-0.5 origin-left"
                style={{ background: `linear-gradient(90deg, ${s.accent}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: 'var(--surface2)', border: '1px solid rgba(134,90,255,0.15)' }}
        >
          <div>
            <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text)' }}>
              Need a custom solution?
            </h3>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              We tailor every project to your exact requirements. Let's talk.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 28px rgba(134,90,255,0.5)' }}
            whileTap={{ scale: 0.96 }}
            onClick={() => { window.location.href = '/contact'; window.scrollTo({ top: 0 }) }}
            className="px-7 py-3 rounded-full font-bold text-sm shrink-0 transition-all duration-300"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            Get a Free Quote →
          </motion.button>
        </motion.div>

      </div>
    </section>
  )
}
