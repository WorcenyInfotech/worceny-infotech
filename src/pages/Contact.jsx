import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

const contactInfo = [
  { icon: <FiMail size={20} />, label: 'Email', value: 'worcenyinfotech@gmail.com' },
  { icon: <FiPhone size={20} />, label: 'Phone', value: '+91 81403 98723' },
  { icon: <FiMapPin size={20} />, label: 'Location', value: 'Surat, Gujarat, India' },
]

export default function Contact() {
  const sectionRef = useRef()
  const headingRef = useRef()
  const leftRef = useRef()
  const rightRef = useRef()
  const lineRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' }
        }
      )

      gsap.fromTo(lineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: lineRef.current, start: 'top 85%' }
        }
      )

      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: leftRef.current, start: 'top 80%' }
        }
      )

      gsap.fromTo(rightRef.current,
        { opacity: 0, x: 60 },
        {
          opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: rightRef.current, start: 'top 80%' }
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
    const subject = encodeURIComponent(`New Message from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.open(`https://mail.google.com/mail/?view=cm&to=worcenyinfotech@gmail.com&su=${subject}&body=${body}`, '_blank')
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setErrors({})
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section ref={sectionRef} id="contact" className="py-28 bg-black relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00ff88]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#00ccff]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.02)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headingRef} className="text-center mb-20">
          <span className="inline-block text-[#00ff88] text-sm font-semibold tracking-widest uppercase mb-3">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <div ref={lineRef} className="w-24 h-0.5 bg-gradient-to-r from-[#00ff88] to-[#00ccff] mx-auto mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div ref={leftRef} style={{ opacity: 0 }}>
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            <div className="space-y-4 mb-10">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 6, boxShadow: '0 0 25px rgba(0,255,136,0.12)', borderColor: 'rgba(0,255,136,0.35)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="flex items-center gap-4 glass-dark rounded-2xl p-5 group border border-[#00ff88]/10 cursor-default"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    className="w-12 h-12 rounded-xl bg-[#00ff88]/10 flex items-center justify-center text-[#00ff88] shrink-0"
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">{item.label}</div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {['LinkedIn', 'Twitter', 'GitHub', 'Instagram'].map((s, i) => (
                <motion.button
                  key={s}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  whileHover={{ scale: 1.1, y: -3, color: '#00ff88', borderColor: 'rgba(0,255,136,0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-full glass text-gray-400 text-xs border border-white/10 transition-colors duration-300"
                >
                  {s}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Form */}
          <div ref={rightRef} style={{ opacity: 0 }}>
            <motion.div
              whileHover={{ boxShadow: '0 0 50px rgba(0,255,136,0.08)' }}
              className="glass-dark rounded-3xl p-8 border border-[#00ff88]/10"
            >
              {sent ? (
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', damping: 15 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.15, 1], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.6 }}
                  >
                    <FiCheckCircle size={60} className="text-[#00ff88] mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { key: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                    { key: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="text-sm text-gray-400 mb-2 block">{field.label}</label>
                      <motion.div
                        animate={{ boxShadow: focused === field.key ? '0 0 0 2px rgba(0,255,136,0.35)' : '0 0 0 0px transparent' }}
                        className="rounded-xl overflow-hidden"
                      >
                        <input
                          type={field.type}
                          value={form[field.key]}
                          onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                          onFocus={() => setFocused(field.key)}
                          onBlur={() => setFocused(null)}
                          placeholder={field.placeholder}
                          className={`w-full bg-white/5 border ${errors[field.key] ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00ff88] transition-colors duration-300`}
                        />
                      </motion.div>
                      {errors[field.key] && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-xs mt-1"
                        >
                          {errors[field.key]}
                        </motion.p>
                      )}
                    </div>
                  ))}

                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Message</label>
                    <motion.div
                      animate={{ boxShadow: focused === 'message' ? '0 0 0 2px rgba(0,255,136,0.35)' : '0 0 0 0px transparent' }}
                      className="rounded-xl overflow-hidden"
                    >
                      <textarea
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        placeholder="Tell us about your project..."
                        className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00ff88] transition-colors duration-300 resize-none`}
                      />
                    </motion.div>
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs mt-1"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: '0 0 35px rgba(0,255,136,0.45)' }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-4 rounded-xl bg-[#00ff88] text-black font-bold flex items-center justify-center gap-2 hover:bg-[#00e07a] transition-all duration-300 text-base"
                  >
                    <FiSend size={16} /> Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
