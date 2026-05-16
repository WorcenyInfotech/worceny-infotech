"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import { homeTechnologyStackTabs as technologyTabs } from "@/data/homeTechnologiesPreviewData";

export default function Technologies() {
  const [active, setActive] = useState("website-development");
  const router = useRouter();
  const current = technologyTabs.find((s) => s.id === active);

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      {/* Background blobs */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(134,90,255,0.07)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(90,255,115,0.04)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{
              color: "var(--accent)",
              background: "rgba(134,90,255,0.1)",
              border: "1px solid rgba(134,90,255,0.2)",
            }}
          >
            Our Stack
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mt-4 mb-4"
            style={{ color: "var(--text)" }}
          >
            Technologies We <span className="gradient-text">Work With</span>
          </h2>
          <div
            className="w-20 h-0.5 mx-auto rounded-full"
            style={{
              background:
                "linear-gradient(90deg, var(--accent), var(--accent2))",
            }}
          />
        </motion.div>

        {/* ── Main 3-col layout ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-[220px_1fr_280px] gap-8 items-start"
        >
          {/* ── Left sidebar ── */}
          <div className="relative flex flex-col">
            <div
              className="absolute left-[10px] top-[22px] bottom-[22px] w-[2px] rounded-full z-0"
              style={{
                background:
                  "linear-gradient(to bottom, var(--accent), var(--accent2))",
              }}
            />

            {technologyTabs.map((s) => {
              const isActive = s.id === active;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className="relative flex items-center gap-3 py-3 pr-3 pl-0 text-left z-10 cursor-pointer"
                  style={{
                    background: "transparent",
                    border: "none",
                    outline: "none",
                  }}
                >
                  {/* Dot */}
                  <div
                    className="shrink-0 w-[22px] h-[22px] rounded-full flex items-center justify-center transition-all duration-300 z-10"
                    style={{
                      background: isActive ? "var(--accent)" : "var(--bg)",
                      border: isActive
                        ? "2px solid var(--accent)"
                        : "2px solid rgba(134,90,255,0.35)",
                      boxShadow: isActive
                        ? "0 0 12px rgba(134,90,255,0.7)"
                        : "none",
                    }}
                  >
                    {isActive && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                  {/* Label */}
                  <span
                    className="text-xs font-semibold transition-colors duration-200"
                    style={{
                      color: isActive ? "var(--accent)" : "var(--muted)",
                    }}
                  >
                    {s.label}
                  </span>
                  {/* Active right bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeBar"
                      className="absolute right-0 top-1 bottom-1 w-0.5 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* ── Center card — WHITE background ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl p-8 flex flex-col"
              style={{
                background: "#ffffff",
                boxShadow:
                  "0 8px 48px rgba(0,0,0,0.14), 0 0 0 1px rgba(134,90,255,0.1)",
              }}
            >
              {/* Top accent bar */}
              <div
                className="w-full h-1 rounded-full mb-6"
                style={{
                  background:
                    "linear-gradient(90deg, var(--accent), var(--accent2))",
                }}
              />

              {/* Heading */}
              <h3
                className="text-2xl font-black mb-3"
                style={{ color: "#111" }}
              >
                {current.heading}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: "#555" }}
              >
                {current.desc}
              </p>

              {/* Tech icon grid */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-8">
                {current.techs.map((tech, i) => (
                  <motion.button
                    type="button"
                    key={`${active}-${tech.slug}`}
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: i * 0.07,
                      type: "spring",
                      stiffness: 300,
                    }}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 8px 20px rgba(134,90,255,0.18)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      router.push(`/technologies/${active}/${tech.slug}`);
                      window.scrollTo({ top: 0 });
                    }}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl cursor-pointer transition-all duration-200 border border-solid appearance-none bg-transparent font-[inherit]"
                    style={{ background: "#f8f7ff", borderColor: "#ede9ff" }}
                  >
                    <img
                      src={tech.icon}
                      alt=""
                      className="w-8 h-8 object-contain"
                    />
                    <span
                      className="text-[10px] text-center font-semibold leading-tight"
                      style={{ color: "#444" }}
                    >
                      {tech.name}
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* ── More Details button ── */}
              <div className="mt-auto pt-4 border-t border-gray-100">
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 28px rgba(134,90,255,0.35)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    router.push(`/technologies`);
                    window.scrollTo({ top: 0 });
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold cursor-pointer transition-all duration-300"
                  style={{ background: "var(--accent)", color: "#fff" }}
                >
                  More Details <FiArrowRight size={14} />
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── Right image + CTA ── */}
          <div className="flex flex-col gap-4">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden relative"
              style={{
                height: "300px",
                border: "1px solid rgba(134,90,255,0.2)",
              }}
            >
              <Image
                src="/home-technology.png"
                alt="Developer"
                fill
                priority
                className="object-cover"
                style={{ filter: "brightness(0.65) saturate(0.75)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(8,8,12,0.95) 0%, rgba(8,8,12,0.3) 50%, transparent 100%)",
                }}
              />
              <div
                className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{
                  background: "rgba(134,90,255,0.85)",
                  color: "#fff",
                  backdropFilter: "blur(8px)",
                }}
              >
                ● Available Now
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <div
                  className="text-xs font-semibold mb-1"
                  style={{ color: "#5aff73" }}
                >
                  Expert Developers
                </div>
                <div className="text-base font-black text-white leading-tight">
                  Ready to build your vision
                </div>
                <div
                  className="text-xs mt-1"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  Web • SEO • Hosting
                </div>
              </div>
            </motion.div>

            {/* Hire CTA */}
            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 32px rgba(134,90,255,0.45)",
              }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                router.push("/contact");
                window.scrollTo({ top: 0 });
              }}
              className="w-full py-4 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer"
              style={{
                background: "var(--accent)",
                color: "#fff",
                boxShadow: "0 0 20px rgba(134,90,255,0.3)",
              }}
            >
              Hire Developer →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
