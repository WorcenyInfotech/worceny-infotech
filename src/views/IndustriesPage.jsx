"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
import { FiArrowRight, FiCheck, FiChevronDown } from "react-icons/fi";
import { industries } from "@/data/industriesData";
import { industriesWhyUs as whyUs } from "@/data/industriesPageData";

gsap.registerPlugin(ScrollTrigger);

function IndustryCard({ industry, index }) {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      whileHover={{ y: -6, boxShadow: `0 20px 50px ${industry.accent}18` }}
      className="rounded-3xl overflow-hidden flex flex-col"
      style={{
        background: "#ffffff",
        border: `1px solid ${industry.accent}30`,
      }}
    >
      <div className="p-7 flex flex-col flex-1">
        {/* Top accent bar */}
        <div
          className="w-full h-1 rounded-full mb-6"
          style={{
            background: `linear-gradient(90deg, ${industry.accent}, transparent)`,
          }}
        />

        <div className="flex items-start justify-between mb-5">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 6 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{
              background: `${industry.accent}15`,
              color: industry.accent,
            }}
          >
            {industry.icon}
          </motion.div>
          <span
            className="text-xs px-3 py-1 rounded-full font-medium"
            style={{
              background: `${industry.accent}12`,
              color: industry.accent,
              border: `1px solid ${industry.accent}30`,
            }}
          >
            {industry.clients[0]}
          </span>
        </div>

        <h3 className="text-xl font-black mb-1" style={{ color: "#111" }}>
          {industry.title}
        </h3>
        <p
          className="text-sm font-medium mb-3"
          style={{ color: industry.accent }}
        >
          {industry.subtitle}
        </p>
        <p className="text-sm leading-relaxed mb-5" style={{ color: "#555" }}>
          {industry.desc}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          {industry.stats.map((s, i) => (
            <div
              key={i}
              className="text-center p-2 rounded-xl"
              style={{
                background: `${industry.accent}08`,
                border: `1px solid ${industry.accent}20`,
              }}
            >
              <div
                className="text-sm font-black"
                style={{ color: industry.accent }}
              >
                {s.v}
              </div>
              <div className="text-xs" style={{ color: "#777" }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>

        {/* Toggle solutions */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-xs font-semibold cursor-pointer mb-4 transition-colors duration-200"
          style={{ color: industry.accent }}
        >
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <FiChevronDown size={14} />
          </motion.span>
          {expanded ? "Hide Solutions" : "View Solutions"}
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div className="grid grid-cols-1 gap-2 mb-5">
                {industry.solutions.map((sol) => (
                  <div
                    key={sol}
                    className="flex items-center gap-2.5 text-xs"
                    style={{ color: "#555" }}
                  >
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: `${industry.accent}15`,
                        color: industry.accent,
                      }}
                    >
                      <FiCheck size={9} />
                    </span>
                    {sol}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Buttons — pushed to bottom */}
        <div className="mt-auto flex flex-col gap-2 pt-2">
          <motion.button
            whileHover={{
              scale: 1.04,
              boxShadow: `0 0 24px ${industry.accent}45`,
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              router.push(`/industries/${industry.id}`);
              window.scrollTo({ top: 0 });
            }}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold cursor-pointer transition-all duration-300"
            style={{ background: industry.accent, color: "#fff" }}
          >
            More Details <FiArrowRight size={13} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              router.push("/contact");
              window.scrollTo({ top: 0 });
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-300"
            style={{
              background: "transparent",
              border: `1px solid ${industry.accent}35`,
              color: industry.accent,
            }}
          >
            Discuss Project
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function IndustriesPage() {
  const sectionRef = useRef();
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ind-hero-text",
        { opacity: 0, y: 55 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.2,
        }
      );
      gsap.fromTo(
        ".why-item",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ".why-section", start: "top 82%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen pt-16"
      style={{ background: "var(--bg)" }}
    >
      {/* Hero */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-overlay pointer-events-none" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.07, 0.14, 0.07] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "var(--accent)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.04, 0.09, 0.04] }}
          transition={{ duration: 9, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: "var(--accent2)" }}
        />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div
            className="ind-hero-text inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-6"
            style={{
              background: "rgba(134,90,255,0.1)",
              border: "1px solid rgba(134,90,255,0.28)",
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
          <h1
            className="ind-hero-text text-5xl md:text-7xl font-black mb-6"
            style={{ color: "var(--text)" }}
          >
            Built for <span className="gradient-text">Every</span>
            <br />
            Industry
          </h1>
          <p
            className="ind-hero-text text-lg max-w-2xl mx-auto leading-relaxed mb-10"
            style={{ color: "var(--muted)" }}
          >
            We've delivered digital solutions across 12+ industries. Whatever
            your sector, we bring domain expertise and technical excellence to
            every project.
          </p>
          <div className="ind-hero-text flex flex-wrap justify-center gap-3">
            {[
              { v: "12+", l: "Industries" },
              { v: "50+", l: "Projects" },
              { v: "99%", l: "Satisfaction" },
              { v: "2+", l: "Years" },
            ].map((s) => (
              <div
                key={s.l}
                className="px-5 py-2.5 rounded-full text-sm font-bold"
                style={{
                  background: "rgba(134,90,255,0.1)",
                  border: "1px solid rgba(134,90,255,0.25)",
                  color: "var(--accent)",
                }}
              >
                {s.v}{" "}
                <span className="font-normal" style={{ color: "var(--muted)" }}>
                  {s.l}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {industries.map((industry, i) => (
            <IndustryCard key={industry.id} industry={industry} index={i} />
          ))}
        </div>

        {/* Why Us */}
        <div className="why-section mb-20">
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
              style={{
                background: "rgba(134,90,255,0.1)",
                border: "1px solid rgba(134,90,255,0.25)",
              }}
            >
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "var(--accent)" }}
              >
                Why Choose Us
              </span>
            </div>
            <h2
              className="text-3xl md:text-5xl font-black"
              style={{ color: "var(--text)" }}
            >
              The <span className="gradient-text">Worceny</span> Advantage
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{
                  y: -6,
                  boxShadow: "0 20px 50px rgba(134,90,255,0.12)",
                }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className="why-item rounded-2xl p-6"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(134,90,255,0.2)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(134,90,255,0.12)" }}
                >
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ background: "var(--accent)" }}
                  />
                </div>
                <h3
                  className="text-base font-bold mb-2"
                  style={{ color: "#111" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#555" }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center rounded-3xl p-16 relative overflow-hidden"
          style={{
            background: "var(--surface2)",
            border: "1px solid rgba(134,90,255,0.2)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(134,90,255,0.1), transparent 60%)",
            }}
          />
          <h2
            className="text-3xl md:text-5xl font-black mb-4 relative z-10"
            style={{ color: "var(--text)" }}
          >
            Don't See Your Industry?
          </h2>
          <p
            className="mb-8 max-w-xl mx-auto text-sm relative z-10"
            style={{ color: "var(--muted)" }}
          >
            We work with businesses of all types. Tell us about your project and
            we'll find the right solution.
          </p>
          <div className="flex flex-wrap gap-4 justify-center relative z-10">
            <motion.button
              whileHover={{
                scale: 1.06,
                boxShadow: "0 0 36px rgba(134,90,255,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                router.push("/contact");
                window.scrollTo({ top: 0 });
              }}
              className="px-10 py-4 rounded-full font-bold text-base cursor-pointer"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              Let's Talk →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                router.push("/services");
                window.scrollTo({ top: 0 });
              }}
              className="px-10 py-4 rounded-full font-bold text-base cursor-pointer"
              style={{
                background: "transparent",
                border: "1.5px solid rgba(134,90,255,0.35)",
                color: "var(--text)",
              }}
            >
              View Services
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
