import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { services } from '../data/servicesData'

export default function HomeServices() {
  const navigate = useNavigate()
  const displayed = services.slice(0, 6)

  return (
    <section style={{ background: 'var(--bg)' }} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-5"
            style={{
              background: 'rgba(45,77,202,0.1)',
              border: '1px solid rgba(45,77,202,0.28)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: 'var(--accent2)' }}
            />
            <span className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>
              What We Do
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ color: 'var(--text)' }}
          >
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            From design to deployment — we cover every aspect of your digital journey with
            precision and passion.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          style={{ perspective: '1200px' }}
        >
          {displayed.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, rotateY: -90, transformOrigin: 'left center' }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, boxShadow: `0 12px 40px ${service.accent}22` }}
              className="rounded-2xl p-6 flex flex-col cursor-pointer group"
              style={{
                background: '#ffffff',
                border: `1.5px solid ${service.accent}30`,
              }}
              onClick={() => navigate(`/services/${service.id}`)}
            >
              {/* Icon + Number */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: `${service.accent}15`, color: service.accent }}
                >
                  {service.icon}
                </div>
                <span
                  className="text-3xl font-black opacity-15 select-none"
                  style={{ color: service.accent }}
                >
                  {service.number}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3
                className="text-lg font-bold mb-1"
                style={{ color: '#111' }}
              >
                {service.title}
              </h3>
              <p className="text-xs font-semibold mb-2" style={{ color: service.accent }}>
                {service.subtitle}
              </p>

              {/* Desc */}
              <p
                className="text-sm leading-relaxed mb-4 line-clamp-2 flex-1"
                style={{ color: '#555' }}
              >
                {service.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: `${service.accent}12`,
                      color: service.accent,
                      border: `1px solid ${service.accent}25`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigate(`/services/${service.id}`)
                }}
                className="text-sm font-semibold flex items-center gap-1 transition-all duration-200 group-hover:gap-2"
                style={{ color: service.accent }}
              >
                More Details →
              </button>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 32px rgba(45,77,202,0.4)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              navigate('/services')
              window.scrollTo({ top: 0 })
            }}
            className="px-10 py-4 rounded-full font-bold text-base transition-all duration-300 cursor-pointer"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            View All Services →
          </motion.button>
        </div>
      </div>
    </section>
  )
}
