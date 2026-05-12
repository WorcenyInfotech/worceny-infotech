import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowLeft, FiArrowRight, FiCheck } from "react-icons/fi";
import { techGroups } from "../data/technologiesData";

gsap.registerPlugin(ScrollTrigger);

export default function TechnologyDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pageRef = useRef();

  const group = techGroups.find((g) => g.id === id);
  const currentIndex = techGroups.findIndex((g) => g.id === id);
  const prev = techGroups[currentIndex - 1];
  const next = techGroups[currentIndex + 1];

  useEffect(() => {
    window.scrollTo({ top: 0 });
    if (!group) {
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".td-hero-el",
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
        ".td-stat",
        { opacity: 0, scale: 0.7, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: ".td-stats", start: "top 85%" },
        }
      );
      gsap.fromTo(
        ".td-tech-card",
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: { trigger: ".td-techs", start: "top 82%" },
        }
      );
    }, pageRef);
    return () => ctx.revert();
  }, [id, group]);

  if (!group) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{ background: "var(--bg)" }}
      >
        <h2
          className="text-3xl font-black mb-4"
          style={{ color: "var(--text)" }}
        >
          Technology Not Found
        </h2>
        <button
          onClick={() => navigate("/technologies")}
          className="px-6 py-3 rounded-full font-bold cursor-pointer"
          style={{ background: "var(--accent)", color: "#fff" }}
        >
          Back to Technologies
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
          style={{ background: group.accent }}
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
            onClick={() => navigate("/technologies")}
            className="flex items-center gap-2 mb-10 text-sm font-medium cursor-pointer transition-colors duration-200"
            style={{ color: "var(--muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = group.accent)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            <FiArrowLeft size={16} /> Back to Technologies
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div
                className="td-hero-el inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-6"
                style={{
                  background: `${group.accent}15`,
                  border: `1px solid ${group.accent}35`,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: group.accent }}
                />
                <span
                  className="text-sm font-semibold"
                  style={{ color: group.accent }}
                >
                  Technology Group
                </span>
              </div>
              <h1
                className="td-hero-el text-4xl md:text-6xl font-black mb-4 leading-tight"
                style={{ color: "var(--text)" }}
              >
                {group.label}
              </h1>
              <p
                className="td-hero-el text-xl font-medium mb-6"
                style={{ color: group.accent }}
              >
                {group.subtitle}
              </p>
              <p
                className="td-hero-el text-base leading-relaxed mb-8"
                style={{ color: "var(--muted)" }}
              >
                {group.desc}
              </p>
              <div className="td-hero-el flex flex-wrap gap-4">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 0 32px ${group.accent}55`,
                  }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    navigate("/contact");
                    window.scrollTo({ top: 0 });
                  }}
                  className="flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm cursor-pointer"
                  style={{ background: group.accent, color: "#fff" }}
                >
                  Start a Project <FiArrowRight size={14} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => navigate("/technologies")}
                  className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm cursor-pointer"
                  style={{
                    background: "transparent",
                    border: `1.5px solid ${group.accent}50`,
                    color: "var(--text)",
                  }}
                >
                  All Technologies
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
                  style={{ border: `1px dashed ${group.accent}30` }}
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
                    border: `1px dashed ${group.accent}50`,
                  }}
                />
                <div
                  className="w-64 h-64 rounded-full flex items-center justify-center relative z-10"
                  style={{
                    background: `radial-gradient(circle, ${group.accent}20, ${group.accent}05)`,
                    border: `2px solid ${group.accent}25`,
                  }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-28 h-28 rounded-3xl flex items-center justify-center"
                    style={{
                      background: `${group.accent}20`,
                      color: group.accent,
                      fontSize: "3.5rem",
                    }}
                  >
                    {group.icon}
                  </motion.div>
                </div>
                <div
                  className="absolute -top-4 -right-4 w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xs text-center leading-tight px-1"
                  style={{ background: group.accent, color: "#fff" }}
                >
                  {group.techs.length} Tools
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="td-stats grid grid-cols-2 md:grid-cols-4 gap-4">
          {group.stats.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, boxShadow: `0 0 28px ${group.accent}25` }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="td-stat rounded-2xl p-6 text-center"
              style={{
                background: "var(--card-bg)",
                border: `1px solid ${group.accent}20`,
              }}
            >
              <div
                className="text-3xl font-black mb-1"
                style={{ color: group.accent }}
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

      {/* ── Long description + Use Cases ── */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
              style={{
                background: `${group.accent}12`,
                border: `1px solid ${group.accent}25`,
              }}
            >
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: group.accent }}
              >
                Overview
              </span>
            </div>
            <div className="space-y-4">
              {group.longDesc.split("\n\n").map((para, i) => (
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
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
              style={{
                background: `${group.accent}12`,
                border: `1px solid ${group.accent}25`,
              }}
            >
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: group.accent }}
              >
                Use Cases
              </span>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {group.useCases.map((uc, i) => (
                <motion.div
                  key={uc}
                  whileHover={{ x: 6, boxShadow: `0 0 20px ${group.accent}15` }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-center gap-4 p-4 rounded-2xl"
                  style={{
                    background: "var(--card-bg)",
                    border: `1px solid ${group.accent}15`,
                  }}
                >
                  <span
                    className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `${group.accent}20`,
                      color: group.accent,
                    }}
                  >
                    <FiCheck size={14} />
                  </span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--text-card)" }}
                  >
                    {uc}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Technology Cards with descriptions ── */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
            style={{
              background: `${group.accent}15`,
              border: `1px solid ${group.accent}30`,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: group.accent }}
            />
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: group.accent }}
            >
              Tools & Frameworks
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-black mb-3"
            style={{ color: "var(--text)" }}
          >
            {group.label} <span className="gradient-text">Stack</span>
          </h2>
          <p
            className="text-sm max-w-xl mx-auto"
            style={{ color: "var(--muted)" }}
          >
            Every tool we use in this category — with a description of how and
            why we use it.
          </p>
        </div>

        {/* White outer card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="td-techs rounded-3xl p-8 relative overflow-hidden"
          style={{
            background: "#ffffff",
            border: `1px solid ${group.accent}25`,
            boxShadow: `0 8px 48px rgba(0,0,0,0.10), 0 0 0 1px ${group.accent}10`,
          }}
        >
          {/* Glow blobs */}
          <div
            className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl pointer-events-none"
            style={{ background: `${group.accent}10` }}
          />
          <div
            className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full blur-3xl pointer-events-none"
            style={{ background: `${group.accent}08` }}
          />

          {/* Top accent bar */}
          <div
            className="w-full h-1 rounded-full mb-8"
            style={{
              background: `linear-gradient(90deg, ${group.accent}, transparent)`,
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
            {group.techs.map((tech, i) => (
              <motion.div
                key={tech.name}
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
                  y: -6,
                  boxShadow: `0 12px 32px ${group.accent}22`,
                  borderColor: `${group.accent}55`,
                }}
                className="td-tech-card flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 cursor-pointer"
                style={{
                  background: "#f8f7ff",
                  border: `1px solid ${group.accent}18`,
                }}
                onClick={() => {
                  navigate(`/technologies/${group.id}/${tech.slug}`);
                  window.scrollTo({ top: 0 });
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    navigate(`/technologies/${group.id}/${tech.slug}`);
                    window.scrollTo({ top: 0 });
                  }
                }}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${group.accent}14` }}
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-7 h-7 object-contain"
                    style={{
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.12))",
                    }}
                  />
                </motion.div>
                {/* Text */}
                <div className="min-w-0 flex-1">
                  <h4
                    className="text-sm font-bold mb-1"
                    style={{ color: "#111" }}
                  >
                    {tech.name}
                  </h4>
                  <p
                    className="text-xs leading-relaxed mb-2"
                    style={{ color: "#666" }}
                  >
                    {tech.desc}
                  </p>
                  <span
                    className="text-[11px] font-bold"
                    style={{ color: group.accent }}
                  >
                    View detail →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom accent bar */}
          <div
            className="w-full h-px rounded-full mt-8"
            style={{
              background: `linear-gradient(90deg, transparent, ${group.accent}40)`,
            }}
          />
        </motion.div>
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
            border: `1px solid ${group.accent}25`,
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 0%, ${group.accent}12, transparent 60%)`,
            }}
          />
          <h2
            className="text-3xl md:text-4xl font-black mb-4 relative z-10"
            style={{ color: "var(--text-card)" }}
          >
            Want to Build with{" "}
            <span className="gradient-text">{group.label}?</span>
          </h2>
          <p
            className="mb-8 max-w-xl mx-auto text-sm relative z-10"
            style={{ color: "var(--muted-card)" }}
          >
            Let's discuss your project and find the right stack for your goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center relative z-10">
            <motion.button
              whileHover={{
                scale: 1.06,
                boxShadow: `0 0 36px ${group.accent}55`,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                navigate("/contact");
                window.scrollTo({ top: 0 });
              }}
              className="px-10 py-4 rounded-full font-bold text-base cursor-pointer"
              style={{ background: group.accent, color: "#fff" }}
            >
              Contact Us →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/technologies")}
              className="px-10 py-4 rounded-full font-bold text-base cursor-pointer"
              style={{
                background: "transparent",
                border: `1.5px solid ${group.accent}40`,
                color: "var(--text-card)",
              }}
            >
              All Technologies
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
                navigate(`/technologies/${prev.id}`);
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
                <div>{prev.label}</div>
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
                navigate(`/technologies/${next.id}`);
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
                <div>{next.label}</div>
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
