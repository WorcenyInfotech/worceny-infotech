import { motion, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiTarget, FiEye, FiAward, FiUsers } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

const cards = [
  {
    icon: <FiTarget size={28} />,
    title: 'Our Mission',
    desc: 'To deliver cutting-edge digital solutions that empower businesses to thrive in the modern web landscape with speed, security, and scalability.',
  },
  {
    icon: <FiEye size={28} />,
    title: 'Our Vision',
    desc: 'To become the most trusted IT partner for startups and enterprises, building the future of the web one pixel at a time.',
  },
]

const stats = [
  { icon: <FiAward size={22} />, value: '50+', label: 'Projects Delivered' },
  { icon: <FiUsers size={22} />, value: '30+', label: 'Happy Clients' },
  { icon: <FiTarget size={22} />, value: '99%', label: 'Client Satisfaction' },
  { icon: <FiEye size={22} />, value: '5+', label: 'Years Experience' },
]

export default function About() {
  const sectionRef = useRef()
  const headingRef = useRef()
  const cardsRef = useRef()
  const statsRef = useRef()
  const lineRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.fromTo(headingRef.current.children,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%', toggleActions: 'play none none none' }
        }
      )

      // Animated underline
      gsap.fromTo(lineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: lineRef.current, start: 'top 85%' }
        }
      )

      // Cards stagger
      gsap.fromTo(cardsRef.current.children,
        { opacity: 0, y: 70, rotateY: -15 },
        {
          opacity: 1, y: 0, rotateY: 0, duration: 0.9, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' }
        }
      )

      // Stats counter-like pop
      gsap.fromTo(statsRef.current.children,
        { opacity: 0, scale: 0.6, y: 40 },
        {
          opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)',
          scrollTrigger: { trigger: statsRef.current, start: 'top 85%' }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-28 section-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00ff88]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-20">
          <span className="inline-block text-[#00ff88] text-sm font-semibold tracking-widest uppercase mb-3">Who We Are</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-6">
            About <span className="gradient-text">WorcenyInfotech</span>
          </h2>
          <div ref={lineRef} className="w-24 h-0.5 bg-gradient-to-r from-[#00ff88] to-[#00ccff] mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We are a passionate team of developers, designers, and strategists dedicated to crafting exceptional digital experiences that drive real business results.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 mb-20" style={{ perspective: '1000px' }}>
          {cards.map((card) => (
            <motion.div
              key={card.title}
              whileHover={{ y: -8, boxShadow: '0 0 40px rgba(0,255,136,0.18)', borderColor: 'rgba(0,255,136,0.4)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="glass-dark rounded-2xl p-8 group cursor-default border border-[#00ff88]/15"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 rounded-xl bg-[#00ff88]/10 flex items-center justify-center text-[#00ff88] mb-6"
              >
                {card.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#00ff88] transition-colors duration-300">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              whileHover={{ scale: 1.06, boxShadow: '0 0 30px rgba(0,255,136,0.2)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              className="glass rounded-2xl p-6 text-center neon-border group cursor-default"
            >
              <motion.div
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="text-[#00ff88] flex justify-center mb-3"
              >
                {s.icon}
              </motion.div>
              <div className="text-3xl font-black neon-text mb-1">{s.value}</div>
              <div className="text-gray-500 text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
