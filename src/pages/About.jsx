import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiTarget, FiEye, FiAward, FiUsers, FiZap, FiShield } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

const cards = [
  {
    icon: <FiTarget size={26} />,
    title: 'Our Mission',
    desc: 'To deliver cutting-edge digital solutions that empower businesses to thrive in the modern web landscape with speed, security, and scalability.',
    accent: 'var(--accent)',
  },
  {
    icon: <FiEye size={26} />,
    title: 'Our Vision',
    desc: 'To become the most trusted IT partner for startups and enterprises, building the future of the web one pixel at a time.',
    accent: 'var(--accent2)',
  },
]

const stats = [
  { icon: <FiAward size={20} />,  value: '50+', label: 'Projects Delivered' },
  { icon: <FiUsers size={20} />,  value: '30+', label: 'Happy Clients' },
  { icon: <FiZap size={20} />,    value: '99%', label: 'Client Satisfaction' },
  { icon: <FiShield size={20} />, value: '5+',  label: 'Years Experience' },
]

const team = [
  { name: 'Rahul Sharma',   role: 'Founder & CEO',        initials: 'RS' },
  { name: 'Priya Mehta',    role: 'Lead Frontend Dev',     initials: 'PM' },
  { name: 'Arjun Patel',    role: 'Backend Architect',     initials: 'AP' },
  { name: 'Sneha Verma',    role: 'UI/UX Designer',        initials: 'SV' },
]

export default function About() {
  const sectionRef = useRef()
  const headingRef = useRef()
  const lineRef    = useRef()
  const cardsRef   = useRef()
  const statsRef   = useRef()
  const teamRef    = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      // heading
      gsap.fromTo(headingRef.current.children,
        { opacity: 0, y: 55 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.11, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' } }
      )
      // line
      gsap.fromTo(lineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: lineRef.current, start: 'top 85%' } }
      )
      // cards
      gsap.fromTo(cardsRef.current.children,
        { opacity: 0, y: 65, rotateY: -12 },
        { opacity: 1, y: 0, rotateY: 0, duration: 0.9, stagger: 0.18, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' } }
      )
      // stats
      gsap.fromTo(statsRef.current.children,
        { opacity: 0, scale: 0.65, y: 35 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)',
          scrollTrigger: { trigger: statsRef.current, start: 'top 85%' } }
      )
      // team
      gsap.fromTo(teamRef.current.children,
        { opacity: 0, y: 40, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: teamRef.current, start: 'top 85%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-28 section-gradient relative overflow-hidden">
      {/* bg accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(134,90,255,0.05)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(90,255,115,0.03)' }} />

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div ref={headingRef} className="text-center mb-20">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: 'var(--accent)' }}>Who We Are</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4" style={{ color: 'var(--text)' }}>
            About <span className="gradient-text">WorcenyInfotech</span>
          </h2>
          <div ref={lineRef} className="w-24 h-0.5 mx-auto mb-6 rounded-full"
            style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent2))' }} />
          <p className="max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
            We are a passionate team of developers, designers, and strategists dedicated to crafting exceptional digital experiences that drive real business results.
          </p>
        </div>

        {/* Mission & Vision */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 mb-20" style={{ perspective: '1000px' }}>
          {cards.map((card) => (
            <motion.div
              key={card.title}
              whileHover={{ y: -8, boxShadow: `0 0 40px ${card.accent}20` }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              className="rounded-2xl p-8 group cursor-default"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ background: `${card.accent}15`, color: card.accent }}
              >
                {card.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[var(--accent)]"
                style={{ color: 'var(--text)' }}>{card.title}</h3>
              <p className="leading-relaxed" style={{ color: 'var(--muted)' }}>{card.desc}</p>
              {/* bottom accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
                className="mt-6 h-px rounded-full origin-left"
                style={{ background: `linear-gradient(90deg, ${card.accent}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              whileHover={{ scale: 1.06, boxShadow: '0 0 30px rgba(134,90,255,0.18)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              className="rounded-2xl p-6 text-center cursor-default"
              style={{ background: 'var(--card-bg)', border: '1px solid rgba(134,90,255,0.2)' }}
            >
              <motion.div
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="flex justify-center mb-3"
                style={{ color: 'var(--accent)' }}
              >
                {s.icon}
              </motion.div>
              <div className="text-3xl font-black mb-1 gradient-text">{s.value}</div>
              <div className="text-sm" style={{ color: 'var(--muted)' }}>{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Team */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: 'var(--accent2)' }}>The Team</span>
          <h3 className="text-3xl font-black" style={{ color: 'var(--text)' }}>
            Meet the <span className="gradient-text">Experts</span>
          </h3>
        </div>

        <div ref={teamRef} className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              whileHover={{ y: -6, boxShadow: '0 0 30px rgba(134,90,255,0.15)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="rounded-2xl p-6 text-center cursor-default group"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
            >
              {/* Avatar */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-lg font-black"
                style={{
                  background: i % 2 === 0 ? 'rgba(134,90,255,0.15)' : 'rgba(90,255,115,0.12)',
                  color: i % 2 === 0 ? 'var(--accent)' : 'var(--accent2)',
                  border: `1px solid ${i % 2 === 0 ? 'rgba(134,90,255,0.25)' : 'rgba(90,255,115,0.2)'}`,
                }}
              >
                {member.initials}
              </motion.div>
              <div className="font-bold text-sm mb-1" style={{ color: 'var(--text)' }}>{member.name}</div>
              <div className="text-xs" style={{ color: 'var(--muted)' }}>{member.role}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
