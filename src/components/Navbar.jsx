import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useMotionValueEvent, useScroll } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo-new.png'

const navLinks = [
  { label: 'Home', path: '/', section: 'home' },
  { label: 'About', path: '/', section: 'about' },
  { label: 'Services', path: '/', section: 'services' },
  { label: 'Portfolio', path: '/portfolio', section: null },
  { label: 'Contact', path: '/contact', section: null },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')
  const { scrollY } = useScroll()
  const location = useLocation()
  const navigate = useNavigate()

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 40))

  useEffect(() => {
    if (location.pathname === '/contact') setActiveLink('Contact')
    else if (location.pathname === '/portfolio') setActiveLink('Portfolio')
    else setActiveLink('Home')
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== '/') return
      const sections = ['home', 'about', 'services']
      const pos = window.scrollY + 120
      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (el && pos >= el.offsetTop) {
          setActiveLink(id.charAt(0).toUpperCase() + id.slice(1))
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const handleNav = (link) => {
    setMenuOpen(false)
    if (link.section) {
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          document.getElementById(link.section)?.scrollIntoView({ behavior: 'smooth' })
        }, 300)
      } else {
        document.getElementById(link.section)?.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate(link.path)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-dark shadow-xl shadow-black/60' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between gap-8">
        {/* Logo — bigger size */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="cursor-pointer flex items-center"
          onClick={() => handleNav({ path: '/', section: 'home' })}
        >
          <img src={logo} alt="WorcenyInfotech" className="h-14 w-auto object-contain" />
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNav(link)}
                className="text-sm font-medium relative group py-1"
              >
                <span className={`transition-colors duration-300 ${
                  activeLink === link.label ? 'text-[#00ff88]' : 'text-gray-400 hover:text-white'
                }`}>
                  {link.label}
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-px bg-[#00ff88]"
                  animate={{ opacity: activeLink === link.label ? 1 : 0, scaleX: activeLink === link.label ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00ff88]/40 group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.06, boxShadow: '0 0 28px rgba(0,255,136,0.55)' }}
            whileTap={{ scale: 0.94 }}
            onClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="px-6 py-2.5 rounded-full bg-[#00ff88] text-black text-sm font-bold neon-glow hover:bg-[#00e07a] transition-all duration-300"
          >
            Get Started →
          </motion.button>
        </div>

        {/* Mobile toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-[#00ff88] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={menuOpen ? 'close' : 'open'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="block"
            >
              {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden glass-dark border-t border-[#00ff88]/10 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-5 gap-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <button
                    onClick={() => handleNav(link)}
                    className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeLink === link.label
                        ? 'text-[#00ff88] bg-[#00ff88]/10'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: navLinks.length * 0.06 }}>
                <button
                  onClick={() => { navigate('/contact'); window.scrollTo({ top: 0 }); setMenuOpen(false) }}
                  className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-bold text-[#00ff88] bg-[#00ff88]/10 mt-2"
                >
                  Get Started →
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
