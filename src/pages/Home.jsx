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
  const badgeRef   = useRef()
  const headingRef = useRef()
  const subRef     = useRef()
  const btnsRef    = useRef()
  const statsRef   = useRef()
  const navigate   = useNavigate()

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const y       = useTransform(scrollYProgress, [0, 1], [0, 160])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const scale   = useTransform(scrollYProgress, [0, 1], [1, 0.93])
  const smoothY = useSpring(y, { stiffness: 80, damping: 20 })

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 2.5 })
      tl.fromTo(badgeRef.current,
        { opacity: 0, y: 28, scale: 0.85 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'back.out(1.7)' }
      )
      .fromTo(headingRef.current.children,
        { opacity: 0, y: 80, rotateX: -55, transformOrigin: 'top center' },
        { opacity: 1, y: 0, rotateX: 0, duration: 1.1, stagger: 0.13, ease: 'power4.out' }, '-=0.3'
      )
      .fromTo(subRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5'
      )
      .fromTo(btnsRef.current.children,
        { opacity: 0, y: 22, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12, ease: 'back.out(1.4)' }, '-=0.4'
      )
      .fromTo(statsRef.current.children,
        { opacity: 0, y: 28, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.7)' }, '-=0.3'
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
    >
      <HeroCanvas />

      {/* Glow orbs */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/4 w-[480px] h-[480px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'var(--accent)' }}
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[380px] h-[380px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'var(--accent2)' }}
      />

      {/* Grid */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ y: smoothY, opacity, scale }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-32"
      >
        {/* Badge */}
        <div ref={badgeRef} style={{ opacity: 0 }}>
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-10"
            style={{ background: 'rgba(134,90,255,0.1)', border: '1px solid rgba(134,90,255,0.3)' }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--accent2)' }} />
            <span className="text-sm font-semibold tracking-wide" style={{ color: 'var(--accent)' }}>
              Available for Projects
            </span>
          </div>
        </div>

        {/* Heading */}
        <div ref={headingRef} className="mb-8" style={{ perspective: '1000px' }}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight" style={{ color: 'var(--text)' }}>
            <span className="inline-block">We Build</span>{' '}
            <span className="inline-block gradient-text">Modern</span>
            <br />
            <span className="inline-block">Websites</span>
          </h1>
        </div>

        {/* Subheading */}
        <p
          ref={subRef}
          style={{ opacity: 0, color: 'var(--muted)' }}
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Creative, Fast, and Scalable Web Solutions for businesses that want to stand out in the digital world.
        </p>

        {/* Buttons */}
        <div ref={btnsRef} className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <motion.button
            whileHover={{ scale: 1.06, boxShadow: '0 0 40px rgba(134,90,255,0.55)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { navigate('/contact'); window.scrollTo({ top: 0 }) }}
            className="px-8 py-4 rounded-full font-bold text-base transition-all duration-300"
            style={{ background: 'var(--accent)', color: '#fff', boxShadow: '0 0 24px rgba(134,90,255,0.35)' }}
          >
            Contact Us →
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.06, borderColor: 'var(--accent)', color: 'var(--accent)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { navigate('/portfolio'); window.scrollTo({ top: 0 }) }}
            className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-300"
            style={{ background: 'rgba(134,90,255,0.08)', border: '1px solid rgba(134,90,255,0.25)', color: 'var(--text)' }}
          >
            View Our Work
          </motion.button>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {stats.map(([num, label], i) => (
            <div key={label} className="text-center">
              {i > 0 && (
                <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-8"
                  style={{ background: 'var(--border)' }} />
              )}
              <div className="text-2xl md:text-3xl font-black gradient-text">{num}</div>
              <div className="text-xs mt-1" style={{ color: 'var(--muted)' }}>{label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'var(--muted)' }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />
      </motion.div>
    </section>
  )
}
