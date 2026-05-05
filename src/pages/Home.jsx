import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroCanvas from '../components/HeroCanvas'

gsap.registerPlugin(ScrollTrigger)

const stats = [['50+', 'Projects Done'], ['30+', 'Happy Clients'], ['5+', 'Years Experience']]

export default function Home() {
  const sectionRef = useRef()
  const headingRef = useRef()
  const badgeRef = useRef()
  const subRef = useRef()
  const btnsRef = useRef()
  const statsRef = useRef()
  const navigate = useNavigate()

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 180])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  const smoothY = useSpring(y, { stiffness: 80, damping: 20 })

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 2.4 }) // after loader
      tl.fromTo(badgeRef.current,
        { opacity: 0, y: 30, scale: 0.85 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'back.out(1.7)' }
      )
      .fromTo(headingRef.current.children,
        { opacity: 0, y: 80, rotateX: -60, transformOrigin: 'top center' },
        { opacity: 1, y: 0, rotateX: 0, duration: 1.1, stagger: 0.12, ease: 'power4.out' }, '-=0.3'
      )
      .fromTo(subRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5'
      )
      .fromTo(btnsRef.current.children,
        { opacity: 0, y: 25, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12, ease: 'back.out(1.4)' }, '-=0.4'
      )
      .fromTo(statsRef.current.children,
        { opacity: 0, y: 30, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)' }, '-=0.3'
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      <HeroCanvas />

      {/* Animated glow orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00ff88] rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.07, 0.03] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#00ccff] rounded-full blur-3xl pointer-events-none"
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Content */}
      <motion.div style={{ y: smoothY, opacity, scale }} className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-32">
        {/* Badge */}
        <div ref={badgeRef} style={{ opacity: 0 }}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass neon-border mb-10">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
            <span className="text-[#00ff88] text-sm font-semibold tracking-wide">Available for Projects</span>
          </div>
        </div>

        {/* Heading */}
        <div ref={headingRef} className="mb-8" style={{ perspective: '1000px' }}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
            <span className="inline-block">We Build</span>{' '}
            <span className="inline-block gradient-text">Modern</span>
            <br />
            <span className="inline-block">Websites</span>
          </h1>
        </div>

        {/* Sub */}
        <p ref={subRef} style={{ opacity: 0 }} className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Creative, Fast, and Scalable Web Solutions for businesses that want to stand out in the digital world.
        </p>

        {/* Buttons */}
        <div ref={btnsRef} className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <motion.button
            whileHover={{ scale: 1.06, boxShadow: '0 0 40px rgba(0,255,136,0.55)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { navigate('/contact'); window.scrollTo({ top: 0 }) }}
            className="px-8 py-4 rounded-full bg-[#00ff88] text-black font-bold text-base neon-glow hover:bg-[#00e07a] transition-all duration-300"
          >
            Contact Us →
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { navigate('/portfolio'); window.scrollTo({ top: 0 }) }}
            className="px-8 py-4 rounded-full glass neon-border text-white font-semibold text-base hover:bg-white/5 transition-all duration-300"
          >
            View Our Work
          </motion.button>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {stats.map(([num, label]) => (
            <div key={label} className="text-center">
              <div className="text-2xl md:text-3xl font-black neon-text">{num}</div>
              <div className="text-xs text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#00ff88] to-transparent" />
      </motion.div>
    </section>
  )
}
