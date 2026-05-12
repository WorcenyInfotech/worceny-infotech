import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowLeft, FiArrowRight, FiCheck } from "react-icons/fi";
import { industries } from "../data/industriesData";

gsap.registerPlugin(ScrollTrigger);

export default function IndustryDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pageRef = useRef();

  const industry = industries.find((i) => i.id === id);
  const currentIndex = industries.findIndex((i) => i.id === id);
  const prev = industries[currentIndex - 1];
  const next = industries[currentIndex + 1];

  useEffect(() => {
    window.scrollTo({ top: 0 });
    if (!industry) {
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".id-hero-el",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.1,
        }
      );
      gsap.fromTo(
        ".id-stat",
        { opacity: 0, scale: 0.7, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: ".id-stats", start: "top 85%" },
        }
      );
      gsap.fromTo(
        ".id-feature",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: { trigger: ".id-features", start: "top 82%" },
        }
      );
      gsap.fromTo(
        ".id-solution",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: { trigger: ".id-solutions", start: "top 82%" },
        }
      );
    }, pageRef);
    return () => ctx.revert();
  }, [id, industry]);

  if (!industry) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{ background: "var(--bg)" }}
      >
        <h2
          className="text-3xl font-black mb-4"
          style={{ color: "var(--text)" }}
        >
          Industry Not Found
        </h2>
        <button
          onClick={() => navigate("/industries")}
          className="px-6 py-3 rounded-full font-bold cursor-pointer"
          style={{ background: "var(--accent)", color: "#fff" }}
        >
          Back to Industries
        </button>
      </div>
    );
  }

  return (
    <div
      ref={pageRef}
      className="min-h-screen pt-16"
      style={{ background: "var(--bg)" }}
    >
      {/* ── Hero ── */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-overlay pointer-events-none" />
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.08, 0.16, 0.08] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
          style={{ background: industry.accent }}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.04, 0.09, 0.04] }}
          transition={{ duration: 10, repeat: Infinity, delay: 3 }}
          className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: "var(--accent2)" }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Back */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -4 }}
            onClick={() => navigate("/industries")}
            className="flex items-center gap-2 mb-10 text-sm font-medium cursor-pointer transition-colors duration-200"
            style={{ color: "var(--muted)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = industry.accent)
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            <FiArrowLeft size={16} /> Back to Industries
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div
                className="id-hero-el inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-6"
                style={{
                  background: `${industry.accent}15`,
                  border: `1px solid ${industry.accent}35`,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: industry.accent }}
                />
                <span
                  className="text-sm font-semibold"
                  style={{ color: industry.accent }}
                >
                  Industry
                </span>
              </div>
              <h1
                className="id-hero-el text-4xl md:text-6xl font-black mb-4 leading-tight"
                style={{ color: "var(--text)" }}
              >
                {industry.title}
              </h1>
              <p
                className="id-hero-el text-xl font-medium mb-6"
                style={{ color: industry.accent }}
              >
                {industry.subtitle}
              </p>
              <p
                className="id-hero-el text-base leading-relaxed mb-8"
                style={{ color: "var(--muted)" }}
              >
                {industry.desc}
              </p>

              {/* Client types */}
              <div className="id-hero-el flex flex-wrap gap-2 mb-8">
                {industry.clients.map((c) => (
                  <span
                    key={c}
                    className="text-xs px-3 py-1.5 rounded-full font-medium"
                    style={{
                      background: `${industry.accent}12`,
                      color: industry.accent,
                      border: `1px solid ${industry.accent}30`,
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="id-hero-el flex flex-wrap gap-4">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 0 32px ${industry.accent}55`,
                  }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    navigate("/contact");
                    window.scrollTo({ top: 0 });
                  }}
                  className="flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm cursor-pointer"
                  style={{ background: industry.accent, color: "#fff" }}
                >
                  Start Your Project <FiArrowRight size={14} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => navigate("/industries")}
                  className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm cursor-pointer"
                  style={{
                    background: "transparent",
                    border: `1.5px solid ${industry.accent}50`,
                    color: "var(--text)",
                  }}
                >
                  All Industries
                </motion.button>
              </div>
            </div>

            {/* Right — animated icon */}
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.3,
                }}
                className="relative"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-64 h-64 rounded-full absolute inset-0"
                  style={{ border: `1px dashed ${industry.accent}30` }}
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-48 h-48 rounded-full absolute"
                  style={{
                    top: "32px",
                    left: "32px",
                    border: `1px dashed ${industry.accent}50`,
                  }}
                />
                <div
                  className="w-64 h-64 rounded-full flex items-center justify-center relative z-10"
                  style={{
                    background: `radial-gradient(circle, ${industry.accent}20, ${industry.accent}05)`,
                    border: `2px solid ${industry.accent}25`,
                  }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-28 h-28 rounded-3xl flex items-center justify-center"
                    style={{
                      background: `${industry.accent}20`,
                      color: industry.accent,
                      fontSize: "3.5rem",
                    }}
                  >
                    {industry.iconLg}
                  </motion.div>
                </div>
                {/* Floating client badge */}
                <div
                  className="absolute -top-4 -right-4 px-3 py-2 rounded-2xl text-xs font-bold text-center"
                  style={{
                    background: industry.accent,
                    color: "#fff",
                    maxWidth: 80,
                  }}
                >
                  {industry.clients[0]}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="id-stats grid grid-cols-2 md:grid-cols-4 gap-4">
          {industry.stats.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, boxShadow: `0 0 28px ${industry.accent}25` }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="id-stat rounded-2xl p-6 text-center"
              style={{
                background: "var(--card-bg)",
                border: `1px solid ${industry.accent}20`,
              }}
            >
              <div
                className="text-3xl font-black mb-1"
                style={{ color: industry.accent }}
              >
                {s.v}
              </div>
              <div className="text-sm" style={{ color: "var(--muted-card)" }}>
                {s.l}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Long description + Solutions ── */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Long desc */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
              style={{
                background: `${industry.accent}12`,
                border: `1px solid ${industry.accent}25`,
              }}
            >
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: industry.accent }}
              >
                Overview
              </span>
            </div>
            <div className="space-y-4">
              {industry.longDesc.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="id-solutions">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
              style={{
                background: `${industry.accent}12`,
                border: `1px solid ${industry.accent}25`,
              }}
            >
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: industry.accent }}
              >
                Our Solutions
              </span>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {industry.solutions.map((sol, i) => (
                <motion.div
                  key={sol}
                  whileHover={{
                    x: 6,
                    boxShadow: `0 0 20px ${industry.accent}15`,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="id-solution flex items-center gap-4 p-4 rounded-2xl"
                  style={{
                    background: "var(--card-bg)",
                    border: `1px solid ${industry.accent}15`,
                  }}
                >
                  <span
                    className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `${industry.accent}20`,
                      color: industry.accent,
                    }}
                  >
                    <FiCheck size={14} />
                  </span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--text-card)" }}
                  >
                    {sol}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Features — WHITE card ── */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{
              background: `${industry.accent}15`,
              border: `1px solid ${industry.accent}30`,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: industry.accent }}
            />
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: industry.accent }}
            >
              Key Features
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-black mb-3"
            style={{ color: "var(--text)" }}
          >
            What We <span className="gradient-text">Deliver</span>
          </h2>
          <p
            className="text-sm max-w-xl mx-auto"
            style={{ color: "var(--muted)" }}
          >
            Every feature is purpose-built for the {industry.title} sector.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="id-features rounded-3xl p-8 relative overflow-hidden"
          style={{
            background: "#ffffff",
            border: `1px solid ${industry.accent}25`,
            boxShadow: `0 8px 48px rgba(0,0,0,0.10)`,
          }}
        >
          {/* Glow */}
          <div
            className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl pointer-events-none"
            style={{ background: `${industry.accent}10` }}
          />
          {/* Top bar */}
          <div
            className="w-full h-1 rounded-full mb-8"
            style={{
              background: `linear-gradient(90deg, ${industry.accent}, transparent)`,
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
            {industry.features.map((feat, i) => (
              <motion.div
                key={feat}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.07,
                  type: "spring",
                  stiffness: 280,
                  damping: 22,
                }}
                whileHover={{
                  y: -5,
                  boxShadow: `0 10px 28px ${industry.accent}20`,
                  borderColor: `${industry.accent}50`,
                }}
                className="id-feature flex items-center gap-3 p-4 rounded-2xl transition-all duration-300"
                style={{
                  background: "#f8f7ff",
                  border: `1px solid ${industry.accent}18`,
                }}
              >
                <span
                  className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: `${industry.accent}18`,
                    color: industry.accent,
                  }}
                >
                  <FiCheck size={13} />
                </span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: "#111" }}
                >
                  {feat}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Bottom bar */}
          <div
            className="w-full h-px rounded-full mt-8"
            style={{
              background: `linear-gradient(90deg, transparent, ${industry.accent}40)`,
            }}
          />
        </motion.div>
      </div>

      {/* ── Tech Stack ── */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center mb-8">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{
              background: `${industry.accent}12`,
              border: `1px solid ${industry.accent}25`,
            }}
          >
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: industry.accent }}
            >
              Tech Stack
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-black"
            style={{ color: "var(--text)" }}
          >
            Technologies We <span className="gradient-text">Use</span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {industry.techStack.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 300 }}
              whileHover={{
                y: -4,
                boxShadow: `0 8px 24px ${industry.accent}30`,
              }}
              className="px-6 py-3 rounded-2xl text-sm font-bold cursor-default"
              style={{
                background: "#ffffff",
                border: `1px solid ${industry.accent}30`,
                color: "#111",
              }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center rounded-3xl p-14 relative overflow-hidden"
          style={{
            background: "var(--card-bg)",
            border: `1px solid ${industry.accent}25`,
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 0%, ${industry.accent}12, transparent 60%)`,
            }}
          />
          <h2
            className="text-3xl md:text-4xl font-black mb-4 relative z-10"
            style={{ color: "var(--text-card)" }}
          >
            Ready to Build for{" "}
            <span className="gradient-text">{industry.title}?</span>
          </h2>
          <p
            className="mb-8 max-w-xl mx-auto text-sm relative z-10"
            style={{ color: "var(--muted-card)" }}
          >
            Let's discuss your project. Free consultation, no commitment
            required.
          </p>
          <div className="flex flex-wrap gap-4 justify-center relative z-10">
            <motion.button
              whileHover={{
                scale: 1.06,
                boxShadow: `0 0 36px ${industry.accent}55`,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                navigate("/contact");
                window.scrollTo({ top: 0 });
              }}
              className="px-10 py-4 rounded-full font-bold text-base cursor-pointer"
              style={{ background: industry.accent, color: "#fff" }}
            >
              Contact Us →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/industries")}
              className="px-10 py-4 rounded-full font-bold text-base cursor-pointer"
              style={{
                background: "transparent",
                border: `1.5px solid ${industry.accent}40`,
                color: "var(--text-card)",
              }}
            >
              All Industries
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* ── Prev / Next ── */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          {prev ? (
            <motion.button
              whileHover={{ x: -4 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                navigate(`/industries/${prev.id}`);
                window.scrollTo({ top: 0 });
              }}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl text-sm font-semibold cursor-pointer"
              style={{
                background: "var(--card-bg)",
                border: `1px solid ${prev.accent}25`,
                color: "var(--text-card)",
              }}
            >
              <FiArrowLeft size={16} style={{ color: prev.accent }} />
              <div className="text-left">
                <div
                  className="text-xs mb-0.5"
                  style={{ color: "var(--muted-card)" }}
                >
                  Previous
                </div>
                <div>{prev.title}</div>
              </div>
            </motion.button>
          ) : (
            <div />
          )}
          {next ? (
            <motion.button
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                navigate(`/industries/${next.id}`);
                window.scrollTo({ top: 0 });
              }}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl text-sm font-semibold cursor-pointer"
              style={{
                background: "var(--card-bg)",
                border: `1px solid ${next.accent}25`,
                color: "var(--text-card)",
              }}
            >
              <div className="text-right">
                <div
                  className="text-xs mb-0.5"
                  style={{ color: "var(--muted-card)" }}
                >
                  Next
                </div>
                <div>{next.title}</div>
              </div>
              <FiArrowRight size={16} style={{ color: next.accent }} />
            </motion.button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
