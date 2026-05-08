import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  FiCode, FiLayout, FiServer, FiLayers,
  FiTrendingUp, FiMessageCircle, FiGlobe, FiCloud, FiArrowRight, FiCheck
} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    id: 'website',
    icon: <FiGlobe size={36} />,
    title: 'Website Development',
    subtitle: 'Your Digital Presence, Perfected',
    desc: 'We craft stunning, high-performance websites that represent your brand and convert visitors into customers. From simple landing pages to complex business portals — built to impress.',
    features: ['Custom UI/UX Design', 'Mobile Responsive', 'SEO Ready Structure', 'Fast Load Speed', 'CMS Integration', 'Cross-browser Compatible'],
    tags: ['HTML/CSS', 'React', 'WordPress', 'Next.js'],
    accent: '#865aff',
    number: '01',
  },
  {
    id: 'seo',
    icon: <FiTrendingUp size={36} />,
    title: 'SEO Optimization',
    subtitle: 'Rank Higher, Grow Faster',
    desc: 'Get found on Google. We implement technical SEO, content strategy, and performance improvements that drive organic traffic and improve your search rankings sustainably.',
    features: ['Technical SEO Audit', 'On-Page Optimization', 'Core Web Vitals', 'Schema Markup', 'Keyword Research', 'Monthly Reporting'],
    tags: ['Google Analytics', 'Search Console', 'Lighthouse', 'SEMrush'],
    accent: '#ff9f43',
    number: '02',
  },
  {
    id: 'whatsapp',
    icon: <FiMessageCircle size={36} />,
    title: 'WhatsApp Automation',
    subtitle: 'Engage Customers Instantly',
    desc: 'Automate your customer communication with WhatsApp Business API. Send bulk messages, set up intelligent chatbots, automate follow-ups, and never miss a lead again.',
    features: ['WhatsApp Business API', 'Chatbot Setup', 'Bulk Messaging', 'Lead Follow-up Automation', 'Order & Booking Alerts', 'CRM Integration'],
    tags: ['WhatsApp API', 'Chatbot', 'Automation', 'CRM'],
    accent: '#25D366',
    number: '03',
  },
  {
    id: 'hosting',
    icon: <FiCloud size={36} />,
    title: 'Web Hosting',
    subtitle: 'Always Online, Always Fast',
    desc: 'Reliable, secure, and blazing-fast hosting for your website. We manage everything — from server setup to SSL certificates — so you can focus on your business.',
    features: ['99.9% Uptime SLA', 'Free SSL Certificate', 'Daily Backups', 'DDoS Protection', 'CDN Integration', '24/7 Monitoring'],
    tags: ['AWS', 'Vercel', 'Cloudflare', 'cPanel'],
    accent: '#5aff73',
    number: '04',
  },
  {
    id: 'frontend',
    icon: <FiLayout size={36} />,
    title: 'Frontend Development',
    subtitle: 'Interfaces That Users Love',
    desc: 'We build pixel-perfect, interactive frontends using the latest technologies. Every component is crafted for performance, accessibility, and a seamless user experience across all devices.',
    features: ['React & Next.js', 'Tailwind CSS', 'Framer Motion Animations', 'Component Libraries', 'Performance Optimization', 'Accessibility (WCAG)'],
    tags: ['React', 'Next.js', 'Tailwind', 'TypeScript'],
    accent: '#5aff73',
    number: '05',
  },
  {
    id: 'backend',
    icon: <FiServer size={36} />,
    title: 'Backend Development',
    subtitle: 'Powerful Engines Behind the Scenes',
    desc: 'Robust, secure, and scalable backend systems that power your applications. We design APIs, databases, and server architectures that handle real-world traffic with ease.',
    features: ['REST & GraphQL APIs', 'Node.js / Express', 'Database Design', 'Authentication & Security', 'Cloud Deployment', 'Microservices Architecture'],
    tags: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    accent: '#865aff',
    number: '06',
  },
  {
    id: 'fullstack',
    icon: <FiLayers size={36} />,
    title: 'Full Stack Development',
    subtitle: 'Complete Solutions, One Team',
    desc: 'From database to deployment — we handle the entire stack. Our full-stack expertise means faster delivery, consistent code quality, and a single point of accountability for your project.',
    features: ['MERN / MEAN Stack', 'End-to-End Development', 'DevOps & CI/CD', 'Scalable Architecture', 'Third-party Integrations', 'Post-launch Support'],
    tags: ['MERN Stack', 'AWS', 'Docker', 'REST APIs'],
    accent: '#5aff73',
    number: '07',
  },
]

export default function ServicesPage() {
  const sectionRef = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0 })
    const ctx = gsap.context(() => {
      gsap.fromTo('.srv-hero-text',
        { opacity: 0, y: 55 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.2 }
      )
      services.forEach((s) => {
        gsap.fromTo(`#srv-${s.id}`,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: `#srv-${s.id}`, start: 'top 80%' } }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="min-h-screen pt-18" style={{ background: 'var(--bg)' }}>

      {/* Hero */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-overlay pointer-events-none" />
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.07, 0.13, 0.07] }} transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'var(--accent)' }} />
        <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.04, 0.08, 0.04] }} transition={{ duration: 9, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'var(--accent2)' }} />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="srv-hero-text inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-6"
            style={{ background: 'rgba(134,90,255,0.1)', border: '1px solid rgba(134,90,255,0.28)' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--accent2)' }} />
            <span className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>What We Offer</span>
          </div>
          <h1 className="srv-hero-text text-5xl md:text-7xl font-black mb-6" style={{ color: 'var(--text)' }}>
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="srv-hero-text text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--muted)' }}>
            Comprehensive digital solutions to grow your business — from design to deployment and beyond.
          </p>
          {/* Quick nav pills */}
          <div className="srv-hero-text flex flex-wrap justify-center gap-3 mt-10">
            {services.map((s) => (
              <button key={s.id}
                onClick={() => document.getElementById(`srv-${s.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                className="text-xs px-4 py-2 rounded-full transition-all duration-200 hover:scale-105"
                style={{ background: `${s.accent}15`, color: s.accent, border: `1px solid ${s.accent}30` }}>
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Service Sections */}
      <div className="max-w-7xl mx-auto px-6 pb-20 space-y-6">
        {services.map((s, i) => {
          const isEven = i % 2 === 0
          return (
            <div id={`srv-${s.id}`} key={s.id}
              className="rounded-3xl overflow-hidden"
              style={{ background: '#ffffff', border: '1px solid #1a1a1a' }}>
              <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0`}>

                {/* Visual Panel */}
                <div className="lg:w-2/5 relative flex flex-col items-center justify-center p-12 min-h-[320px]"
                  style={{ background: `linear-gradient(135deg, ${s.accent}12, ${s.accent}04)`, borderRight: isEven ? `1px solid ${s.accent}15` : 'none', borderLeft: !isEven ? `1px solid ${s.accent}15` : 'none' }}>
                  {/* Big number */}
                  <span className="absolute top-6 left-8 text-7xl font-black select-none"
                    style={{ color: `${s.accent}10` }}>{s.number}</span>
                  {/* Icon circle */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="w-28 h-28 rounded-3xl flex items-center justify-center mb-6 relative z-10"
                    style={{ background: `${s.accent}18`, color: s.accent, border: `2px solid ${s.accent}30` }}>
                    {s.icon}
                  </motion.div>
                  <h2 className="text-2xl font-black text-center relative z-10" style={{ color: '#1a1a1a' }}>{s.title}</h2>
                  <p className="text-sm text-center mt-2 relative z-10" style={{ color: s.accent }}>{s.subtitle}</p>
                  {/* Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mt-5 relative z-10">
                    {s.tags.map(tag => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full"
                        style={{ background: `${s.accent}12`, color: s.accent, border: `1px solid ${s.accent}25` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Glow */}
                  <div className="absolute inset-0 pointer-events-none rounded-3xl"
                    style={{ background: `radial-gradient(circle at 50% 50%, ${s.accent}08, transparent 70%)` }} />
                </div>

                {/* Content Panel */}
                <div className="lg:w-3/5 p-10 lg:p-12 flex flex-col justify-center">
                  <p className="text-base leading-relaxed mb-8" style={{ color: '#444444' }}>{s.desc}</p>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-5" style={{ color: s.accent }}>What's Included</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {s.features.map(f => (
                      <div key={f} className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                          style={{ background: `${s.accent}15`, color: s.accent }}>
                          <FiCheck size={12} />
                        </span>
                        <span className="text-sm" style={{ color: '#1a1a1a' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.04, x: 4 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => { navigate('/contact'); window.scrollTo({ top: 0 }) }}
                    className="self-start flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300"
                    style={{ background: `${s.accent}18`, color: s.accent, border: `1px solid ${s.accent}35` }}>
                    Get Started <FiArrowRight size={14} />
                  </motion.button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center rounded-3xl p-16 relative overflow-hidden"
          style={{ background: 'var(--surface2)', border: '1px solid rgba(134,90,255,0.2)' }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(circle at 50% 0%, rgba(134,90,255,0.1), transparent 60%)' }} />
          <h2 className="text-3xl md:text-5xl font-black mb-4 relative z-10" style={{ color: 'var(--text)' }}>
            Ready to Build Something <span className="gradient-text">Amazing?</span>
          </h2>
          <p className="mb-8 max-w-xl mx-auto text-sm relative z-10" style={{ color: 'var(--muted)' }}>
            Let's discuss your project and find the perfect solution for your business. Free consultation, no commitment.
          </p>
          <motion.button
            whileHover={{ scale: 1.06, boxShadow: '0 0 36px rgba(134,90,255,0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { navigate('/contact'); window.scrollTo({ top: 0 }) }}
            className="px-10 py-4 rounded-full font-bold text-base relative z-10"
            style={{ background: 'var(--accent)', color: '#fff' }}>
            Get a Free Quote →
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
