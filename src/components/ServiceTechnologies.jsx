import { motion } from "framer-motion";

export default function ServiceTechnologies({ technologies, accent }) {
  if (!technologies || technologies.length === 0) {
    return null;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 mb-20">
      <div className="text-center mb-12">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
          style={{ background: `${accent}15`, border: `1px solid ${accent}30` }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: accent }}
          />
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: accent }}
          >
            Tech Stack
          </span>
        </div>
        <h2
          className="text-3xl md:text-4xl font-black mb-3"
          style={{ color: "var(--text)" }}
        >
          Technologies We <span className="gradient-text">Use</span>
        </h2>
        <p
          className="text-sm max-w-xl mx-auto"
          style={{ color: "var(--muted)" }}
        >
          Industry-leading tools and frameworks we use to deliver this service
          with precision and performance.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-3xl p-8 relative overflow-hidden"
        style={{
          background: "var(--card-bg)",
          border: `1px solid ${accent}20`,
          boxShadow: `0 0 60px ${accent}08`,
        }}
      >
        <div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none"
          style={{ background: `${accent}10` }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full blur-3xl pointer-events-none"
          style={{ background: `${accent}08` }}
        />

        <div
          className="w-full h-0.5 rounded-full mb-8"
          style={{
            background: `linear-gradient(90deg, ${accent}, transparent)`,
          }}
        />

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 relative z-10">
          {technologies.map((tech, i) => (
            <motion.div
              key={typeof tech === "string" ? tech : tech.name}
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.07,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              whileHover={{
                y: -8,
                boxShadow: `0 12px 32px ${accent}30`,
                borderColor: `${accent}60`,
              }}
              className="flex flex-col items-center gap-3 p-4 rounded-2xl cursor-default transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${accent}18`,
              }}
            >
              {typeof tech === "object" && tech.icon ? (
                <>
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${accent}12` }}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-7 h-7 object-contain"
                      style={{
                        filter: "drop-shadow(0 0 4px rgba(255,255,255,0.15))",
                      }}
                    />
                  </motion.div>
                  <span
                    className="text-[11px] font-semibold text-center leading-tight"
                    style={{ color: "var(--muted-card)" }}
                  >
                    {tech.name}
                  </span>
                </>
              ) : (
                <span
                  className="text-sm font-semibold text-center"
                  style={{ color: "var(--text-card)" }}
                >
                  {typeof tech === "string" ? tech : tech.name}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        <div
          className="w-full h-0.5 rounded-full mt-8"
          style={{
            background: `linear-gradient(90deg, transparent, ${accent})`,
          }}
        />
      </motion.div>
    </section>
  );
}
