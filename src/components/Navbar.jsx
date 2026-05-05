import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo-best.png'

const navLinks = [
  { label: 'Home',      path: '/', section: 'home' },
  { label: 'About',     path: '/', section: 'about' },
  { label: 'Services',  path: '/', section: 'services' },
  { label: 'Portfolio', path: '/portfolio', section: null },
  { label: 'Contact',   path: '/contact',   section: null },
]

export default function Navbar() {
  const [scrolled,    setScrolled]  = useState(false)
  const [menuOpen,    setMenuOpen]  = useState(false)
  const [activeLink,  setActiveLink] = useState('Home')
  const { scrollY } = useScroll()
  const location     = useLocation()
  const navigate     = useNavigate()

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 40))

  useEffect(() => {
    if (location.pathname === '/contact')   setActiveLink('Contact')
    else if (location.pathname === '/portfolio') setActiveLink('Portfolio')
    else setActiveLink('Home')
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => {
      if (location.pathname !== '/') return
      const pos = window.scrollY + 120
      ;['home', 'about', 'services'].forEach((id) => {
        const el = document.getElementById(id)
        if (el && pos >= el.offsetTop)
          setActiveLink(id.charAt(0).toUpperCase() + id.slice(1))
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  const handleNav = (link) => {
    setMenuOpen(false)
    if (link.section) {
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => document.getElementById(link.section)?.scrollIntoView({ behavior: 'smooth' }), 320)
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
        scrolled
          ? 'shadow-xl shadow-black/60'
          : 'bg-transparent'
      }`}
      style={scrolled ? { background: 'rgba(17,17,20,0.85)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.07)' } : {}}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between gap-8">

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="cursor-pointer flex items-center shrink-0"
          onClick={() => handleNav({ path: '/', section: 'home' })}
        >
          <img src={logo} alt="WorcenyInfotech" className="h-32 w-32 object-contain" />
        </motion.div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = activeLink === link.label
            return (
              <li key={link.label}>
                <button
                  onClick={() => handleNav(link)}
                  className="relative py-1 text-sm font-medium group"
                >
                  <span
                    className="transition-colors duration-300"
                    style={{ color: isActive ? 'var(--accent)' : 'var(--muted)' }}
                    onMouseEnter={e => { if (!isActive) e.target.style.color = 'var(--text)' }}
                    onMouseLeave={e => { if (!isActive) e.target.style.color = 'var(--muted)' }}
                  >
                    {link.label}
                  </span>
                  {/* active underline */}
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-px rounded-full"
                    style={{ background: 'var(--accent)' }}
                    animate={{ opacity: isActive ? 1 : 0, scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* hover underline */}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-px rounded-full group-hover:w-full transition-all duration-300"
                    style={{ background: 'rgba(134,90,255,0.4)' }}
                  />
                </button>
              </li>
            )
          })}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center shrink-0">
          <motion.button
            whileHover={{ scale: 1.06, boxShadow: '0 0 28px rgba(134,90,255,0.55)' }}
            whileTap={{ scale: 0.94 }}
            onClick={() => { navigate('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            Get Started →
          </motion.button>
        </div>

        {/* Mobile hamburger */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-2xl"
          style={{ color: 'var(--accent)' }}
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

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden"
            style={{ background: 'rgba(17,17,20,0.95)', borderTop: '1px solid rgba(134,90,255,0.12)' }}
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
                    className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-200"
                    style={{
                      color: activeLink === link.label ? 'var(--accent)' : 'var(--muted)',
                      background: activeLink === link.label ? 'rgba(134,90,255,0.1)' : 'transparent',
                    }}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: navLinks.length * 0.06 }}>
                <button
                  onClick={() => { navigate('/contact'); window.scrollTo({ top: 0 }); setMenuOpen(false) }}
                  className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-bold mt-2"
                  style={{ color: 'var(--accent)', background: 'rgba(134,90,255,0.1)' }}
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
