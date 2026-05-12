import { motion } from "framer-motion";

const reasons = [
  {
    title: "Fast Delivery",
    desc: "We ship on time, every time. Agile sprints and clear milestones keep projects on track.",
    accent: "#2d4dca",
  },
  {
    title: "Clean Code",
    desc: "Scalable, well-documented code that your team can maintain and extend with confidence.",
    accent: "#7528f1",
  },
  {
    title: "Transparent Pricing",
    desc: "Fixed quotes with no hidden costs. You know exactly what you're paying for upfront.",
    accent: "#FF6B6B",
  },
  {
    title: "24/7 Support",
    desc: "We're always here for you — before, during, and after launch. Day or night.",
    accent: "#25D366",
  },
  {
    title: "Modern Tech Stack",
    desc: "React, Node.js, Next.js, and more. We use the best tools for every job.",
    accent: "#F7B731",
  },
  {
    title: "Post-Launch Support",
    desc: "3 months of free post-launch support included with every project. No strings attached.",
    accent: "#00BFFF",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "99%", label: "Satisfaction Rate" },
  { value: "2+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
];

export default function HomeWhyChoose() {
  return (
    <section style={{ background: "var(--bg)" }} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: Heading + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-6"
              style={{
                background: "rgba(45,77,202,0.1)",
                border: "1px solid rgba(45,77,202,0.28)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "var(--accent2)" }}
              />
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--accent)" }}
              >
                Why Choose Us
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-black mb-5 leading-tight"
              style={{ color: "var(--text)" }}
            >
              Why Choose <span className="gradient-text">Worceny Infotech</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: "var(--muted)" }}
            >
              We don't just build websites — we build digital experiences that
              grow your business. Here's what sets us apart from the rest.
            </p>

            {/* Stat Counters */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: "backOut",
                  }}
                  className="rounded-2xl p-5 text-center"
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(45,77,202,0.18)",
                    boxShadow: "0 4px 16px rgba(15,23,42,0.06)",
                  }}
                >
                  <div
                    className="text-3xl font-black mb-1"
                    style={{ color: "#111" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs" style={{ color: "#666" }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Reason Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, rotateY: 90 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -4,
                  boxShadow: `0 8px 32px ${reason.accent}20`,
                }}
                className="rounded-2xl p-5"
                style={{
                  background: "#ffffff",
                  border: `1.5px solid ${reason.accent}25`,
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ background: reason.accent }}
                  />
                  <h4 className="text-sm font-bold" style={{ color: "#111" }}>
                    {reason.title}
                  </h4>
                </div>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "#666" }}
                >
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision / Mission Strip */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              label: "Our Mission",
              text: "To empower businesses of all sizes with world-class digital solutions — built with integrity, delivered with excellence, and supported with care.",
              accent: "#2d4dca",
              accent2: "#7528f1",
            },
            {
              label: "Our Vision",
              text: "To become the most trusted digital partner for growing businesses globally — where every project we touch becomes a success story.",
              accent: "#7528f1",
              accent2: "#2d4dca",
            },
          ].map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="rounded-2xl p-8 relative overflow-hidden"
              style={{
                background: "var(--card-bg)",
                border: `1.5px solid transparent`,
                backgroundClip: "padding-box",
                boxShadow: `0 0 0 1.5px ${item.accent}40`,
              }}
            >
              {/* Gradient border glow */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${item.accent}18, ${item.accent2}18)`,
                }}
              />
              <div className="relative z-10">
                <div
                  className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4"
                  style={{
                    background: `linear-gradient(90deg, ${item.accent}, ${item.accent2})`,
                    color: "#fff",
                  }}
                >
                  {item.label}
                </div>
                <p
                  className="text-base leading-relaxed font-medium"
                  style={{ color: "var(--text-card)" }}
                >
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
