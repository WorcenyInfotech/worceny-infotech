import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
  const ref      = useRef()
  const inView   = useInView(ref, { once: true, margin: '-60px' })
  const navigate = useNavigate()

  const scrollTo = (section) => {
    navigate('/')
    setTimeout(() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' }), 320)
  }
  const goTo = (path) => { navigate(path); window.scrollTo({ top: 0, behavior: 'smooth' }) }

  const footerLinks = {
    Company: [
      { label: 'About',     action: () => scrollTo('about') },
      { label: 'Services',  action: () => scrollTo('services') },
      { label: 'Portfolio', action: () => goTo('/portfolio') },
      { label: 'Contact',   action: () => goTo('/contact') },
    ],
    Services: [
      { label: 'Web Development',      action: () => scrollTo('services') },
      { label: 'Frontend Dev',         action: () => scrollTo('services') },
      { label: 'Backend Dev',          action: () => scrollTo('services') },
      { label: 'Full Stack',           action: () => scrollTo('services') },
    ],
    Connect: [
      { label: 'LinkedIn',  action: () => {} },
      { label: 'Twitter',   action: () => {} },
      { label: 'GitHub',    action: () => {} },
      { label: 'Instagram', action: () => {} },
    ],
  }

  return (
    <footer className="relative overflow-hidden pt-16 pb-8"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>

      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--accent), var(--accent2), transparent)' }} />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="md:col-span-1"
          >
            <img src="./logo.png" alt="WorcenyInfotech"
              className="h-10 object-contain mb-4 cursor-pointer"
              onClick={() => { navigate('/'); window.scrollTo({ top: 0 }) }} />
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--muted)' }}>
              Building modern, scalable web solutions for businesses worldwide.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--accent2)' }} />
              <span className="text-xs" style={{ color: 'var(--accent2)' }}>Available for new projects</span>
            </div>
            <div className="space-y-1.5">
              {[
                '📧 worcenyinfotech@gmail.com',
                '📞 +91 98765 43210',
                '📍 Surat, Gujarat, India',
              ].map(item => (
                <div key={item} className="text-xs" style={{ color: 'var(--muted)' }}>{item}</div>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, items], gi) => (
            <motion.div key={title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + gi * 0.1 }}
            >
              <h4 className="font-semibold mb-5 text-sm" style={{ color: 'var(--text)' }}>{title}</h4>
              <ul className="space-y-3">
                {items.map((item, i) => (
                  <motion.li key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + gi * 0.1 + i * 0.05 }}
                  >
                    <motion.button
                      whileHover={{ x: 5, color: 'var(--accent)' }}
                      transition={{ duration: 0.2 }}
                      onClick={item.action}
                      className="text-sm transition-colors duration-300"
                      style={{ color: 'var(--muted)' }}
                    >
                      {item.label}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            © {new Date().getFullYear()} Worceny Infotech. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
