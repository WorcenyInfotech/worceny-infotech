import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle,
  FiClock, FiGlobe, FiLinkedin, FiTwitter, FiGithub, FiInstagram
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const contactInfo = [
  { icon: <FiMail size={22} />, label: 'Email Us', value: 'hello@worcenyinfotech.com', sub: 'We reply within 2 hours', color: '#00ff88' },
  { icon: <FiPhone size={22} />, label: 'Call Us', value: '+91 98765 43210', sub: 'Mon–Sat, 9am–7pm IST', color: '#00ccff' },
  { icon: <FaWhatsapp size={22} />, label: 'WhatsApp', value: '+91 98765 43210', sub: 'Quick chat support', color: '#25D366' },
  { icon: <FiMapPin size={22} />, label: 'Office', value: 'Mumbai, Maharashtra', sub: 'India — 400001', color: '#a855f7' },
  { icon: <FiClock size={22} />, label: 'Working Hours', value: 'Mon – Sat', sub: '9:00 AM – 7:00 PM IST', color: '#f59e0b' },
  { icon: <FiGlobe size={22} />, label: 'Website', value: 'www.worcenyinfotech.com', sub: 'Visit our website', color: '#00ff88' },
]

const socials = [
  { icon: <FiLinkedin size={18} />, label: 'LinkedIn', href: '#', color: '#0077b5' },
  { icon: <FiTwitter size={18} />, label: 'Twitter', href: '#', color: '#1da1f2' },
  { icon: <FiGithub size={18} />, label: 'GitHub', href: '#', color: '#ffffff' },
  { icon: <FiInstagram size={18} />, label: 'Instagram', href: '#', color: '#e1306c' },
]

const services = ['Web Development', 'Frontend Development', 'Backend Development', 'Full Stack Development', 'UI/UX Design', 'Other']

const faqs = [
  { q: 'How long does a project take?', a: 'Typical projects take 2–8 weeks depending on complexity. We provide a detailed timeline after the initial consultation.' },
  { q: 'What is your pricing model?', a: 'We offer fixed-price and hourly models. After understanding your requirements, we provide a transparent quote with no hidden costs.' },
  { q: 'Do you provide post-launch support?', a: 'Yes! We offer 3 months of free support after launch, and ongoing maintenance packages are available.' },
  { q: 'Can you work with our existing team?', a: 'Absolutely. We integrate seamlessly with in-house teams and adapt to your workflow and tools.' },
]

export default function ContactPage() {
  const sectionRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState(null)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    window.scrollTo({ top: 0 })
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-hero-text',
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.2 }
      )
      gsap.fromTo('.contact-card',
        { opacity: 0, y: 50, scale: 0.93 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: '.contact-cards-grid', start: 'top 82%' }
        }
      )
      gsap.fromTo('.faq-item',
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.faq-section', start: 'top 82%' }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) return setErrors(errs)
    setSent(true)
    setForm({ name: '', email: '', phone: '', service: '', budget: '', message: '' })
    setErrors({})
    setTimeout(() => setSent(false), 6000)
  }

  const inputClass = (key) =>
    `w-full bg-white/5 border ${errors[key] ? 'border-red-500' : focused === key ? 'border-[#00ff88]' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-all duration-300`

  return (
    <div ref={sectionRef} className="min-h-screen bg-black pt-24">
      {/* Hero Banner */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <motion.div animate={{ scale: [1,1.2,1], opacity:[0.04,0.09,0.04] }} transition={{ duration:7, repeat:Infinity }} className="absolute top-0 right-1/4 w-96 h-96 bg-[#00ff88] rounded-full blur-3xl pointer-events-none" />
        <motion.div animate={{ scale: [1,1.3,1], opacity:[0.03,0.07,0.03] }} transition={{ duration:9, repeat:Infinity, delay:2 }} className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#00ccff] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="contact-hero-text inline-flex items-center gap-2 px-4 py-2 rounded-full glass neon-border mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
            <span className="text-[#00ff88] text-sm font-medium">We're Available for Projects</span>
          </div>
          <h1 className="contact-hero-text text-5xl md:text-7xl font-black mb-6">
            Let's <span className="gradient-text">Build</span> Something
            <br />
            <span className="gradient-text">Amazing</span> Together
          </h1>
          <p className="contact-hero-text text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? We'd love to hear about it. Fill out the form below or reach out directly — we respond within 2 hours.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="contact-cards-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {contactInfo.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -6, boxShadow: `0 0 30px ${item.color}20` }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="contact-card glass-dark rounded-2xl p-5 text-center group border border-white/5 hover:border-[#00ff88]/20 transition-colors duration-300 cursor-default"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 8 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="w-12 h-12 rounded-xl mx-auto flex items-center justify-center mb-3"
                style={{ background: `${item.color}15`, color: item.color }}
              >
                {item.icon}
              </motion.div>
              <div className="text-xs text-gray-500 mb-1">{item.label}</div>
              <div className="text-white text-xs font-semibold leading-tight mb-1">{item.value}</div>
              <div className="text-gray-600 text-xs">{item.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Main Form + Map */}
        <div className="grid lg:grid-cols-5 gap-10 mb-20">
          {/* Form — wider */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="glass-dark rounded-3xl p-8 border border-[#00ff88]/10">
              <h2 className="text-2xl font-black text-white mb-2">Send Us a Message</h2>
              <p className="text-gray-500 text-sm mb-8">Fill in the details below and we'll get back to you shortly.</p>

              {sent ? (
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', damping: 15 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div animate={{ scale: [1,1.2,1], rotate:[0,10,-10,0] }} transition={{ duration: 0.6 }}>
                    <FiCheckCircle size={64} className="text-[#00ff88] mb-5" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-400 mb-1">Thank you for reaching out to WorcenyInfotech.</p>
                  <p className="text-gray-500 text-sm">We'll get back to you within 2 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1 */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Full Name *</label>
                      <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                        onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                        placeholder="John Doe" className={inputClass('name')} />
                      {errors.name && <motion.p initial={{opacity:0,y:-4}} animate={{opacity:1,y:0}} className="text-red-400 text-xs mt-1">{errors.name}</motion.p>}
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Email Address *</label>
                      <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                        onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                        placeholder="john@example.com" className={inputClass('email')} />
                      {errors.email && <motion.p initial={{opacity:0,y:-4}} animate={{opacity:1,y:0}} className="text-red-400 text-xs mt-1">{errors.email}</motion.p>}
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Phone Number</label>
                      <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                        onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)}
                        placeholder="+91 98765 43210" className={inputClass('phone')} />
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Service Needed</label>
                      <select value={form.service} onChange={e => setForm({...form, service: e.target.value})}
                        onFocus={() => setFocused('service')} onBlur={() => setFocused(null)}
                        className={inputClass('service') + ' cursor-pointer'}>
                        <option value="" className="bg-black">Select a service</option>
                        {services.map(s => <option key={s} value={s} className="bg-black">{s}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Project Budget</label>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                      {['< ₹50K', '₹50K–1L', '₹1L–3L', '₹3L–5L', '₹5L+', 'Discuss'].map(b => (
                        <motion.button
                          key={b} type="button"
                          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                          onClick={() => setForm({...form, budget: b})}
                          className={`py-2 px-2 rounded-xl text-xs font-medium border transition-all duration-200 ${
                            form.budget === b
                              ? 'bg-[#00ff88]/20 border-[#00ff88] text-[#00ff88]'
                              : 'bg-white/5 border-white/10 text-gray-400 hover:border-[#00ff88]/40 hover:text-white'
                          }`}
                        >{b}</motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Project Details *</label>
                    <textarea rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                      onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                      placeholder="Tell us about your project, goals, timeline..."
                      className={inputClass('message') + ' resize-none'} />
                    {errors.message && <motion.p initial={{opacity:0,y:-4}} animate={{opacity:1,y:0}} className="text-red-400 text-xs mt-1">{errors.message}</motion.p>}
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(0,255,136,0.5)' }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-4 rounded-xl bg-[#00ff88] text-black font-bold flex items-center justify-center gap-2 hover:bg-[#00e07a] transition-all duration-300 text-base"
                  >
                    <FiSend size={16} /> Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right side info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Why Choose Us */}
            <div className="glass-dark rounded-3xl p-7 border border-[#00ff88]/10">
              <h3 className="text-xl font-bold text-white mb-5">Why Choose Us?</h3>
              <div className="space-y-4">
                {[
                  { title: 'Fast Delivery', desc: 'We deliver projects on time, every time.' },
                  { title: 'Clean Code', desc: 'Scalable, maintainable, and well-documented.' },
                  { title: 'Transparent Pricing', desc: 'No hidden costs. Fixed quotes upfront.' },
                  { title: '24/7 Support', desc: "We're always here when you need us." },
                  { title: 'Modern Tech Stack', desc: 'React, Node.js, Next.js, and more.' },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#00ff88]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-[#00ff88]" />
                    </span>
                    <div>
                      <div className="text-white text-sm font-semibold">{item.title}</div>
                      <div className="text-gray-500 text-xs">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-dark rounded-3xl p-7 border border-[#00ff88]/10">
              <h3 className="text-xl font-bold text-white mb-5">Follow Us</h3>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl glass border border-white/10 hover:border-[#00ff88]/30 transition-all duration-300 group"
                  >
                    <span style={{ color: s.color }} className="group-hover:scale-110 transition-transform duration-200">{s.icon}</span>
                    <span className="text-gray-400 text-sm group-hover:text-white transition-colors duration-200">{s.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Response time badge */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-dark rounded-3xl p-6 border border-[#00ff88]/20 text-center"
            >
              <div className="text-4xl font-black neon-text mb-1">2 hrs</div>
              <div className="text-gray-400 text-sm">Average Response Time</div>
              <div className="mt-3 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                <span className="text-[#00ff88] text-xs">Currently Online</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#00ff88] text-sm font-semibold tracking-widest uppercase">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-black mt-3 mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="faq-item glass-dark rounded-2xl border border-white/5 hover:border-[#00ff88]/20 transition-colors duration-300 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-white font-semibold text-sm">{faq.q}</span>
                  <motion.span
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-[#00ff88] text-xl shrink-0 ml-4"
                  >+</motion.span>
                </button>
                <AnimateHeight isOpen={openFaq === i}>
                  <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </AnimateHeight>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function AnimateHeight({ isOpen, children }) {
  return (
    <motion.div
      initial={false}
      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      style={{ overflow: 'hidden' }}
    >
      {children}
    </motion.div>
  )
}
