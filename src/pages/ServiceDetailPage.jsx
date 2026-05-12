import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiCheck, FiArrowLeft, FiArrowRight, FiChevronDown } from 'react-icons/fi'
import { services } from '../data/servicesData'
import { lookupTechnologyLink } from '../data/technologiesData'

gsap.registerPlugin(ScrollTrigger)

export default function ServiceDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const pageRef = useRef()
  const [openFaq, setOpenFaq] = useState(null)

  const service = services.find(s => s.id === id)
  const currentIndex = services.findIndex(s => s.id === id)
  const prevService = services[currentIndex - 1]
  const nextService = services[currentIndex + 1]

  useEffect(() => {
    window.scrollTo({ top: 0 })
    if (!service) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.detail-hero-el',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out', delay: 0.1 }
      )
      gsap.fromTo('.stat-card',
        { opacity: 0, scale: 0.75, y: 30 },
        {
          opacity: 1, scale: 1, y: 0, duration: 0.55, stagger: 0.08, ease: 'back.out(1.7)',
          scrollTrigger: { trigger: '.stats-row', start: 'top 85%' }
        }
      )
      gsap.fromTo('.process-step',
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: '.process-section', start: 'top 80%' }
        }
      )
      gsap.fromTo('.feature-item',
        { opacity: 0, y: 25 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.07, ease: 'power3.out',
          scrollTrigger: { trigger: '.features-section', start: 'top 82%' }
        }
      )
    }, pageRef)
    return () => ctx.revert()
  }, [id, service])

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: 'var(--bg)' }}>
        <h2 className="text-3xl font-black mb-4" style={{ color: 'var(--text)' }}>Service Not Found</h2>
        <button onClick={() => navigate('/services')}
          className="px-6 py-3 rounded-full font-bold cursor-pointer"
          style={{ background: 'var(--accent)', color: '#fff' }}>
          Back to Services
        </button>
      </div>
    )
  }

  return (
    <div ref={pageRef} className="min-h-screen pt-16" style={{ background: 'var(--bg)' }}>

      {/* Hero */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-overlay pointer-events-none" />
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
          style={{ background: service.accent }}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.04, 0.09, 0.04] }}
          transition={{ duration: 10, repeat: Infinity, delay: 3 }}
          className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'var(--accent2)' }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ x: -4 }}
            onClick={() => navigate('/services')}
            className="flex items-center gap-2 mb-10 text-sm font-medium cursor-pointer transition-colors duration-200"
            style={{ color: 'var(--muted)' }}
            onMouseEnter={e => e.currentTarget.style.color = service.accent}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            <FiArrowLeft size={16} /> Back to Services
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <div className="detail-hero-el inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-6"
                style={{ background: `${service.accent}15`, border: `1px solid ${service.accent}35` }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: service.accent }} />
                <span className="text-sm font-semibold" style={{ color: service.accent }}>Service {service.number}</span>
              </div>

              <h1 className="detail-hero-el text-4xl md:text-6xl font-black mb-4 leading-tight" style={{ color: 'var(--text)' }}>
                {service.title}
              </h1>
              <p className="detail-hero-el text-xl font-medium mb-6" style={{ color: service.accent }}>
                {service.subtitle}
              </p>
              <p className="detail-hero-el text-base leading-relaxed mb-8" style={{ color: 'var(--muted)' }}>
                {service.desc}
              </p>

              <div className="detail-hero-el flex flex-wrap gap-3 mb-8">
                {service.tags.map(tag => (
                  <span key={tag} className="text-sm px-4 py-1.5 rounded-full font-medium"
                    style={{ background: `${service.accent}12`, color: service.accent, border: `1px solid ${service.accent}30` }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="detail-hero-el flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: `0 0 32px ${service.accent}55` }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => { navigate('/contact'); window.scrollTo({ top: 0 }) }}
                  className="flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm cursor-pointer"
                  style={{ background: service.accent, color: '#fff' }}>
                  Get Started <FiArrowRight size={14} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    if (window.Calendly) {
                      window.Calendly.initPopupWidget({ url: 'https://calendly.com/worcenyinfotech/new-meeting' })
                    } else {
                      window.open('https://calendly.com/worcenyinfotech/new-meeting', '_blank')
                    }
                  }}
                  className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm cursor-pointer"
                  style={{ background: 'transparent', border: `1.5px solid ${service.accent}50`, color: 'var(--text)' }}>
                  Free Consultation
                </motion.button>
              </div>
            </div>

            {/* Right: Icon visual */}
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="relative"
              >
                {/* Outer ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="w-64 h-64 rounded-full absolute inset-0"
                  style={{ border: `1px dashed ${service.accent}30` }}
                />
                {/* Middle ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                  className="w-48 h-48 rounded-full absolute"
                  style={{ top: '32px', left: '32px', border: `1px dashed ${service.accent}50` }}
                />
                {/* Center icon */}
                <div className="w-64 h-64 rounded-full flex items-center justify-center relative z-10"
                  style={{ background: `radial-gradient(circle, ${service.accent}20, ${service.accent}05)`, border: `2px solid ${service.accent}25` }}>
                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-28 h-28 rounded-3xl flex items-center justify-center"
                    style={{ background: `${service.accent}20`, color: service.accent, fontSize: '3rem' }}>
                    {service.icon}
                  </motion.div>
                </div>
                {/* Floating number */}
                <div className="absolute -top-4 -right-4 w-14 h-14 rounded-2xl flex items-center justify-center font-black text-lg"
                  style={{ background: service.accent, color: '#fff' }}>
                  {service.number}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="stats-row grid grid-cols-2 md:grid-cols-4 gap-4">
          {service.stats.map((s, i) => (
            <motion.div key={i}
              whileHover={{ y: -6, boxShadow: `0 0 28px ${service.accent}25` }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="stat-card rounded-2xl p-6 text-center"
              style={{ background: 'var(--card-bg)', border: `1px solid ${service.accent}20` }}>
              <div className="text-3xl font-black mb-1" style={{ color: service.accent }}>{s.v}</div>
              <div className="text-sm" style={{ color: 'var(--muted-card)' }}>{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Long description + Features */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Long desc */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
              style={{ background: `${service.accent}12`, border: `1px solid ${service.accent}25` }}>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: service.accent }}>Overview</span>
            </div>
            <div className="space-y-4">
              {service.longDesc.split('\n\n').map((para, i) => (
                <p key={i} className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>{para}</p>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="features-section">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
              style={{ background: `${service.accent}12`, border: `1px solid ${service.accent}25` }}>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: service.accent }}>What's Included</span>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {service.features.map((f, i) => (
                <motion.div key={f}
                  whileHover={{ x: 6, boxShadow: `0 0 20px ${service.accent}15` }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="feature-item flex items-center gap-4 p-4 rounded-2xl"
                  style={{ background: 'var(--card-bg)', border: `1px solid ${service.accent}15` }}>
                  <span className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${service.accent}20`, color: service.accent }}>
                    <FiCheck size={14} />
                  </span>
                  <span className="text-sm font-medium" style={{ color: 'var(--text-card)' }}>{f}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      {service.technologies?.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 mb-20">
          {/* Section header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
              style={{ background: `${service.accent}15`, border: `1px solid ${service.accent}30` }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: service.accent }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: service.accent }}>Tech Stack</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-3" style={{ color: 'var(--text)' }}>
              Technologies We <span className="gradient-text">Use</span>
            </h2>
            <p className="text-sm max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
              Industry-leading tools and frameworks we use to deliver this service with precision and performance.
            </p>
          </div>

          {/* White card wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl p-8 relative overflow-hidden"
            style={{
              background: '#ffffff',
              border: `1px solid ${service.accent}25`,
              boxShadow: `0 8px 48px rgba(0,0,0,0.10), 0 0 0 1px ${service.accent}10`,
            }}
          >
            {/* Top accent bar */}
            <div className="w-full h-1 rounded-full mb-8"
              style={{ background: `linear-gradient(90deg, ${service.accent}, transparent)` }} />

            {/* Tech icon grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-8">
              {service.technologies.map((tech, i) => {
                const techHref = lookupTechnologyLink(tech.name, service.id)
                const Wrapper = techHref ? motion.button : motion.div
                const wrapProps = techHref
                  ? {
                      type: 'button',
                      onClick: () => {
                        navigate(techHref)
                        window.scrollTo({ top: 0 })
                      },
                    }
                  : {}
                return (
                  <Wrapper
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.7, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, type: 'spring', stiffness: 300, damping: 20 }}
                    whileHover={{ y: -8, boxShadow: `0 12px 28px ${service.accent}25`, borderColor: `${service.accent}55` }}
                    className={`flex flex-col items-center gap-3 p-4 rounded-2xl transition-all duration-300 border border-solid ${techHref ? 'cursor-pointer appearance-none bg-transparent font-[inherit]' : 'cursor-default'}`}
                    style={{ background: '#f8f7ff', borderColor: `${service.accent}33` }}
                    {...wrapProps}
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: `${service.accent}12` }}
                    >
                      <img src={tech.icon} alt="" className="w-7 h-7 object-contain"
                        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.12))' }} />
                    </motion.div>
                    <span className="text-[11px] font-semibold text-center leading-tight" style={{ color: '#444' }}>
                      {tech.name}
                    </span>
                    {techHref && (
                      <span className="text-[10px] font-bold" style={{ color: service.accent }}>View →</span>
                    )}
                  </Wrapper>
                )
              })}
            </div>

            {/* Bottom accent bar */}
            <div className="w-full h-px rounded-full"
              style={{ background: `linear-gradient(90deg, transparent, ${service.accent}40)` }} />
          </motion.div>
        </div>
      )}

      {/* Process */}
      <div className="process-section max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{ background: `${service.accent}12`, border: `1px solid ${service.accent}25` }}>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: service.accent }}>How We Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black" style={{ color: 'var(--text)' }}>
            Our <span className="gradient-text">Process</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((step, i) => (
            <motion.div key={i}
              whileHover={{ y: -8, boxShadow: `0 20px 50px ${service.accent}20` }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              className="process-step rounded-2xl p-6 relative overflow-hidden"
              style={{ background: 'var(--card-bg)', border: `1px solid ${service.accent}20` }}>
              {/* Step number bg */}
              <span className="absolute top-4 right-4 text-5xl font-black select-none"
                style={{ color: `${service.accent}12` }}>{step.step}</span>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 font-black text-lg"
                style={{ background: `${service.accent}20`, color: service.accent }}>
                {step.step}
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-card)' }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-card)' }}>{step.desc}</p>
              {/* Connector line */}
              {i < service.process.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px z-10"
                  style={{ background: `${service.accent}50` }} />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{ background: `${service.accent}12`, border: `1px solid ${service.accent}25` }}>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: service.accent }}>FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black" style={{ color: 'var(--text)' }}>
            Common <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {service.faqs.map((faq, i) => (
            <motion.div key={i}
              whileHover={{ boxShadow: `0 0 24px ${service.accent}12` }}
              className="rounded-2xl overflow-hidden"
              style={{ background: 'var(--card-bg)', border: `1px solid ${service.accent}18` }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer">
                <span className="text-sm font-semibold pr-4" style={{ color: 'var(--text-card)' }}>{faq.q}</span>
                <motion.span
                  animate={{ rotate: openFaq === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0"
                  style={{ color: service.accent }}>
                  <FiChevronDown size={18} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: 'hidden' }}>
                    <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: 'var(--muted-card)' }}>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center rounded-3xl p-14 relative overflow-hidden"
          style={{ background: 'var(--card-bg)', border: `1px solid ${service.accent}25` }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(circle at 50% 0%, ${service.accent}12, transparent 60%)` }} />
          <h2 className="text-3xl md:text-4xl font-black mb-4 relative z-10" style={{ color: 'var(--text-card)' }}>
            Ready to Get Started with <span className="gradient-text">{service.title}?</span>
          </h2>
          <p className="mb-8 max-w-xl mx-auto text-sm relative z-10" style={{ color: 'var(--muted-card)' }}>
            Let's discuss your project. Free consultation, no commitment required.
          </p>
          <div className="flex flex-wrap gap-4 justify-center relative z-10">
            <motion.button
              whileHover={{ scale: 1.06, boxShadow: `0 0 36px ${service.accent}55` }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { navigate('/contact'); window.scrollTo({ top: 0 }) }}
              className="px-10 py-4 rounded-full font-bold text-base cursor-pointer"
              style={{ background: service.accent, color: '#fff' }}>
              Contact Us →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/services')}
              className="px-10 py-4 rounded-full font-bold text-base cursor-pointer"
              style={{ background: 'transparent', border: `1.5px solid ${service.accent}40`, color: 'var(--text-card)' }}>
              All Services
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Prev / Next navigation */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          {prevService ? (
            <motion.button
              whileHover={{ x: -4, boxShadow: `0 0 20px ${prevService.accent}25` }}
              whileTap={{ scale: 0.97 }}
              onClick={() => { navigate(`/services/${prevService.id}`); window.scrollTo({ top: 0 }) }}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl text-sm font-semibold cursor-pointer"
              style={{ background: 'var(--card-bg)', border: `1px solid ${prevService.accent}25`, color: 'var(--text-card)' }}>
              <FiArrowLeft size={16} style={{ color: prevService.accent }} />
              <div className="text-left">
                <div className="text-xs mb-0.5" style={{ color: 'var(--muted-card)' }}>Previous</div>
                <div>{prevService.title}</div>
              </div>
            </motion.button>
          ) : <div />}

          {nextService ? (
            <motion.button
              whileHover={{ x: 4, boxShadow: `0 0 20px ${nextService.accent}25` }}
              whileTap={{ scale: 0.97 }}
              onClick={() => { navigate(`/services/${nextService.id}`); window.scrollTo({ top: 0 }) }}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl text-sm font-semibold cursor-pointer"
              style={{ background: 'var(--card-bg)', border: `1px solid ${nextService.accent}25`, color: 'var(--text-card)' }}>
              <div className="text-right">
                <div className="text-xs mb-0.5" style={{ color: 'var(--muted-card)' }}>Next</div>
                <div>{nextService.title}</div>
              </div>
              <FiArrowRight size={16} style={{ color: nextService.accent }} />
            </motion.button>
          ) : <div />}
        </div>
      </div>
    </div>
  )
}

