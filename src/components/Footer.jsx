import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo-new.png'

export default function Footer() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const navigate = useNavigate()

  const scrollTo = (section) => {
    navigate('/')
    setTimeout(() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' }), 300)
  }

  const goTo = (path) => { navigate(path); window.scrollTo({ top: 0, behavior: 'smooth' }) }

  const footerLinks = {
    Company: [
      { label: 'About', action: () => scrollTo('about') },
      { label: 'Services', action: () => scrollTo('services') },
      { label: 'Portfolio', action: () => goTo('/portfolio') },
      { label: 'Contact', action: () => goTo('/contact') },
    ],
    Services: [
      { label: 'Web Development', action: () => scrollTo('services') },
      { label: 'Frontend Dev', action: () => scrollTo('services') },
      { label: 'Backend Dev', action: () => scrollTo('services') },
      { label: 'Full Stack', action: () => scrollTo('services') },
    ],
    Connect: [
      { label: 'LinkedIn', action: () => {} },
      { label: 'Twitter', action: () => {} },
      { label: 'GitHub', action: () => {} },
      { label: 'Instagram', action: () => {} },
    ],
  }

  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#00ff88]/30 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="md:col-span-1"
          >
            <img src={logo} alt="WorcenyInfotech" className="h-14 w-auto object-contain mb-4 cursor-pointer"
              onClick={() => { navigate('/'); window.scrollTo({ top: 0 }) }} />
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Building modern, scalable web solutions for businesses worldwide.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
              <span className="text-[#00ff88] text-xs">Available for new projects</span>
            </div>
            <div className="space-y-1 text-xs text-gray-600">
              <div>📧 hello@worcenyinfotech.com</div>
              <div>📞 +91 98765 43210</div>
              <div>📍 Mumbai, India</div>
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, items], gi) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + gi * 0.1 }}
            >
              <h4 className="text-white font-semibold mb-5 text-sm">{title}</h4>
              <ul className="space-y-3">
                {items.map((item, i) => (
                  <motion.li key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + gi * 0.1 + i * 0.05 }}
                  >
                    <motion.button
                      whileHover={{ x: 5, color: '#00ff88' }}
                      transition={{ duration: 0.2 }}
                      onClick={item.action}
                      className="text-gray-500 text-sm transition-colors duration-300"
                    >
                      {item.label}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} WorcenyInfotech. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Built with <span className="text-[#00ff88]">♥</span> using React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
