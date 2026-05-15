"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { industries } from "../data/industriesData";

export default function HomeIndustries() {
  const router = useRouter();
  const displayed = industries.slice(0, 6);

  return (
    <section style={{ background: "var(--surface2)" }} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-5"
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
              Industries We Serve
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ color: "var(--text)" }}
          >
            Built for <span className="gradient-text">Every Industry</span>
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "var(--muted)" }}
          >
            We bring deep domain expertise across a wide range of industries —
            delivering tailored digital solutions that drive real results.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayed.map((industry, i) => (
            <motion.div
              key={industry.id}
              initial={{
                opacity: 0,
                rotateX: 90,
                transformOrigin: "top center",
              }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -6,
                boxShadow: `0 12px 40px ${industry.accent}22`,
              }}
              className="rounded-2xl p-6 flex flex-col cursor-pointer group"
              style={{
                background: "#ffffff",
                border: `1.5px solid ${industry.accent}30`,
              }}
              onClick={() => router.push(`/industries/${industry.id}`)}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: `${industry.accent}15`,
                  color: industry.accent,
                }}
              >
                {industry.icon}
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-lg font-bold mb-1" style={{ color: "#111" }}>
                {industry.title}
              </h3>
              <p
                className="text-xs font-semibold mb-2"
                style={{ color: industry.accent }}
              >
                {industry.subtitle}
              </p>

              {/* Desc */}
              <p
                className="text-sm leading-relaxed mb-4 flex-1"
                style={{ color: "#555" }}
              >
                {industry.desc}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-2 mb-4">
                {industry.stats.slice(0, 3).map((stat) => (
                  <div
                    key={stat.l}
                    className="flex flex-col items-center px-3 py-1.5 rounded-xl"
                    style={{
                      background: `${industry.accent}10`,
                      border: `1px solid ${industry.accent}20`,
                    }}
                  >
                    <span
                      className="text-sm font-black"
                      style={{ color: industry.accent }}
                    >
                      {stat.v}
                    </span>
                    <span className="text-xs" style={{ color: "#777" }}>
                      {stat.l}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/industries/${industry.id}`);
                }}
                className="text-sm font-semibold flex items-center gap-1 transition-all duration-200 group-hover:gap-2"
                style={{ color: industry.accent }}
              >
                More Details →
              </button>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 32px rgba(45,77,202,0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              router.push("/industries");
              window.scrollTo({ top: 0 });
            }}
            className="px-10 py-4 rounded-full font-bold text-base transition-all duration-300 cursor-pointer"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            View All Industries →
          </motion.button>
        </div>
      </div>
    </section>
  );
}
