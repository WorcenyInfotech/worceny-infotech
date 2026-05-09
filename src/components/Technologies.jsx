import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiCode, FiSmartphone } from 'react-icons/fi'
import {
  FiGlobe,
  FiTrendingUp,
  FiMessageCircle,
  FiServer,
  FiLayout,
  FiDatabase,
  FiLayers
} from "react-icons/fi";

const services = [
  {
    id: 'website-development',
    icon: FiGlobe,
    label: 'Website Development',
    heading: 'Website Development Services',
    desc: 'We create modern, responsive, and high-converting websites tailored to your business goals. From landing pages to enterprise platforms, our websites are optimized for speed, SEO, and exceptional user experience.',
    techs: [
      { name: 'HTML5',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'ReactJS',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next JS',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'WordPress',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
    ],
  },

  {
    id: 'seo-optimization',
    icon: FiTrendingUp,
    label: 'SEO Optimization',
    heading: 'SEO & Performance Optimization',
    desc: 'Improve your search engine rankings and website visibility with advanced SEO strategies, technical optimization, keyword targeting, and lightning-fast performance enhancements that drive organic traffic.',
    techs: [
      { name: 'Google',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
      { name: 'Chrome DevTools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg' },
      { name: 'Vercel',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
      { name: 'Webpack',         icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg' },
      { name: 'GitHub',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Vite',            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
    ],
  },

  {
    id: 'whatsapp-automation',
    icon: FiMessageCircle,
    label: 'WhatsApp Automation',
    heading: 'WhatsApp Automation Solutions',
    desc: 'Automate customer communication with intelligent WhatsApp workflows including auto-replies, booking systems, lead generation, chatbot integration, notifications, and customer support automation.',
    techs: [
      { name: 'Node.js',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'MongoDB',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Firebase',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'Webhook API',  icon: 'https://cdn-icons-png.flaticon.com/512/2165/2165004.png' },
      { name: 'Cloud API',    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968841.png' },
    ],
  },

  {
    id: 'web-hosting',
    icon: FiServer,
    label: 'Web Hosting',
    heading: 'Web Hosting & Deployment',
    desc: 'Reliable, secure, and high-performance hosting solutions for websites and web applications. We manage deployment, domain setup, SSL security, server optimization, and scalable cloud infrastructure.',
    techs: [
      { name: 'Vercel',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
      { name: 'Netlify',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
      { name: 'Docker',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'NGINX',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
      { name: 'Linux',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      { name: 'Cloudflare',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg' },
    ],
  },

  {
    id: 'frontend-development',
    icon: FiLayout,
    label: 'Frontend Development',
    heading: 'Front-end Technology',
    desc: 'We craft pixel-perfect, high-performance user interfaces using the latest frontend frameworks. Our team delivers blazing-fast, accessible, and visually stunning web experiences.',
    techs: [
      { name: 'ReactJS',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next JS',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Vue.js',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'Angular',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'TypeScript',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    ],
  },

  {
    id: 'backend-development',
    icon: FiDatabase,
    label: 'Backend Development',
    heading: 'Back-end Technology',
    desc: 'We develop secure and scalable backend systems with powerful APIs, authentication, database architecture, and server-side logic designed for modern web applications.',
    techs: [
      { name: 'Node.js',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'Laravel',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
      { name: 'PHP',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'Python',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'GraphQL',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
    ],
  },

  {
    id: 'fullstack-development',
    icon: FiLayers,
    label: 'Full Stack Development',
    heading: 'Full Stack Technology',
    desc: 'Complete end-to-end application development combining frontend, backend, database, and deployment technologies to build scalable and production-ready digital products.',
    techs: [
      { name: 'React',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'MongoDB',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Next JS',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Docker',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    ],
  },
]

export default function Technologies() {
  const [active, setActive] = useState('website-development')
  const navigate = useNavigate()
  const current = services.find(s => s.id === active)
  const activeIndex = services.findIndex(s => s.id === active)

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(134,90,255,0.07)' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(90,255,115,0.04)' }} />

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{ color: 'var(--accent)', background: 'rgba(134,90,255,0.1)', border: '1px solid rgba(134,90,255,0.2)' }}>
            Our Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4" style={{ color: 'var(--text)' }}>
            Technologies We <span className="gradient-text">Work With</span>
          </h2>
          <div className="w-20 h-0.5 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent2))' }} />
        </motion.div>

        {/* Main 3-col layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-[220px_1fr_280px] gap-8 items-start"
        >

          {/* ── Left sidebar ── */}
          <div className="relative flex flex-col">
            {/* Vertical line — positioned behind dots */}
            <div className="absolute left-[10px] top-[22px] bottom-[22px] w-[2px] rounded-full z-0"
              style={{ background: 'linear-gradient(to bottom, var(--accent), var(--accent2))' }} />

            {services.map((s, i) => {
              const Icon = s.icon
              const isActive = s.id === active
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className="relative flex items-center gap-3 py-3 pr-3 pl-0 text-left z-10 group"
                  style={{ background: 'transparent', border: 'none', outline: 'none' }}
                >
                  {/* Circle dot */}
                  <div className="shrink-0 w-[22px] h-[22px] rounded-full flex items-center justify-center transition-all duration-300 z-10"
                    style={{
                      background: isActive ? 'var(--accent)' : 'var(--bg)',
                      border: isActive ? '2px solid var(--accent)' : '2px solid rgba(134,90,255,0.35)',
                      boxShadow: isActive ? '0 0 12px rgba(134,90,255,0.7)' : 'none',
                    }}>
                    {isActive && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>

                  {/* Label */}
                  <span className="text-xs font-semibold transition-colors duration-200"
                    style={{ color: isActive ? 'var(--muted)' : 'var(--muted)' }}>
                    {s.label}
                  </span>

                  {/* Active left bar */}
                  {isActive && (
                    <motion.div layoutId="activeBar"
                      className="absolute right-0 top-1 bottom-1 w-0.5 rounded-full"
                      style={{ background: 'var(--accent)' }} />
                  )}
                </button>
              )
            })}
          </div>

          {/* ── Center white card ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl p-8"
              style={{
                background: '#ffffff',
                boxShadow: '0 8px 48px rgba(0,0,0,0.22), 0 0 0 1px rgba(134,90,255,0.1)',
              }}
            >
              {/* Top accent bar */}
              {/* <div className="w-full h-1 rounded-full mb-6" style={{ background: 'linear-gradient(90deg, #865aff, #5aff73)' }} /> */}

              {/* Heading */}
              <h3 className="text-2xl font-black mb-1" style={{ color: '#111' }}>
                {current.heading}
              </h3>
              {/* <div className="w-full h-1 rounded-full mb-6" style={{ background: 'linear-gradient(90deg, #865aff, #5aff73)' }} /> */}
              {/* <div className="w-10 h-0.5 rounded-full mb-5" style={{ background: 'linear-gradient(90deg, #865aff, #5aff73)' }} /> */}

              <p className="text-sm leading-relaxed mb-8" style={{ color: '#555' }}>
                {current.desc}
              </p>

              {/* Tech icons */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {current.techs.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.07, type: 'spring', stiffness: 300 }}
                    whileHover={{ y: -5, boxShadow: '0 8px 20px rgba(134,90,255,0.15)' }}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl cursor-default transition-all duration-200"
                    style={{ background: '#f8f7ff', border: '1px solid #ede9ff' }}
                  >
                    <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                    <span className="text-[10px] text-center font-semibold leading-tight" style={{ color: '#444' }}>
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── Right image + CTA ── */}
          <div className="flex flex-col gap-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden relative"
              style={{ height: '300px', border: '1px solid rgba(134,90,255,0.2)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?w=600&q=80"
                alt="Developer"
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.65) saturate(0.75)' }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,8,12,0.95) 0%, rgba(8,8,12,0.3) 50%, transparent 100%)' }} />

              {/* Badge */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{ background: 'rgba(134,90,255,0.85)', color: '#fff', backdropFilter: 'blur(8px)' }}>
                ● Available Now
              </div>

              {/* Bottom text */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-xs font-semibold mb-1" style={{ color: '#5aff73' }}>Expert Developers</div>
                <div className="text-base font-black text-white leading-tight">Ready to build your vision</div>
                <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.55)' }}>Web • SEO • Hosting</div>
              </div>
            </motion.div>

            {/* Stats row
            <div className="grid grid-cols-2 gap-3">
              {[{ val: '10+', label: 'Projects' }, { val: '99%', label: 'Satisfaction' }].map(s => (
                <div key={s.label} className="rounded-xl p-4 text-center"
                  style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
                  <div className="text-xl font-black gradient-text">{s.val}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>{s.label}</div>
                </div>
              ))}
            </div> */}

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 0 32px rgba(134,90,255,0.45)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => { navigate('/contact'); window.scrollTo({ top: 0 }) }}
              className="w-full py-4 rounded-xl text-sm font-bold transition-all duration-300"
              style={{ background: 'var(--accent)', color: '#fff', boxShadow: '0 0 20px rgba(134,90,255,0.3)' }}
            >
              Hire Developer →
            </motion.button>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
