"use client";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiTarget, FiEye, FiAward, FiUsers, FiZap, FiShield } from "react-icons/fi";
import Technologies from "@/components/Technologies";
import WorkProcess from "@/components/WorkProcess";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { icon: <FiTarget size={26} />, title: "Our Mission", desc: "To deliver cutting-edge digital solutions that empower businesses to thrive in the modern web landscape with speed, security, and scalability.", accent: "var(--accent)" },
  { icon: <FiEye size={26} />, title: "Our Vision", desc: "To become the most trusted IT partner for startups and enterprises, building the future of the web one pixel at a time.", accent: "var(--accent)" },
];

const stats = [
  { icon: <FiAward size={20} />, value: "50+", label: "Projects Delivered" },
  { icon: <FiUsers size={20} />, value: "50+", label: "Happy Clients" },
  { icon: <FiZap size={20} />, value: "99%", label: "Client Satisfaction" },
  { icon: <FiShield size={20} />, value: "2+", label: "Years Experience" },
];

export default function AboutSection() {
  const sectionRef = useRef();
  const headingRef = useRef();
  const lineRef = useRef();
  const cardsRef = useRef();
  const statsRef = useRef();
  const teamRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current.children, { opacity: 0, y: 55 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.11, ease: "power3.out", scrollTrigger: { trigger: headingRef.current, start: "top 85%" } });
      gsap.fromTo(lineRef.current, { scaleX: 0, transformOrigin: "left center" }, { scaleX: 1, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: lineRef.current, start: "top 85%" } });
      gsap.fromTo(cardsRef.current.children, { opacity: 0, y: 65, rotateY: -12 }, { opacity: 1, y: 0, rotateY: 0, duration: 0.9, stagger: 0.18, ease: "power3.out", scrollTrigger: { trigger: cardsRef.current, start: "top 80%" } });
      gsap.fromTo(statsRef.current.children, { opacity: 0, scale: 0.65, y: 35 }, { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)", scrollTrigger: { trigger: statsRef.current, start: "top 85%" } });
      if (teamRef.current?.children) {
        gsap.fromTo(teamRef.current.children, { opacity: 0, y: 40, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: teamRef.current, start: "top 85%" } });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-28 section-gradient relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(134,90,255,0.05)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none" style={{ background: "rgba(90,255,115,0.03)" }} />

      <div className="max-w-7xl mx-auto px-6">
        <div ref={headingRef} className="text-center mb-20">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>Who We Are</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4" style={{ color: "var(--text)" }}>
            About <span className="gradient-text">Worceny Infotech</span>
          </h2>
          <div ref={lineRef} className="w-24 h-0.5 mx-auto mb-6 rounded-full" style={{ background: "linear-gradient(90deg, var(--accent), var(--accent2))" }} />
          <p className="max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
            Based in Surat, Gujarat, we are a passionate team of developers, designers, and strategists crafting exceptional digital experiences that drive real business results for clients across India and beyond.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 mb-20" style={{ perspective: "1200px" }}>
          {cards.map((card) => (
            <motion.div key={card.title}
              whileHover={{ y: -10, boxShadow: `0 20px 60px ${card.accent}25`, rotateX: 3, rotateY: 3 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
              className="rounded-2xl p-8 group cursor-default"
              style={{ background: "#ffffff", border: "1px solid rgba(45,77,202,0.14)", boxShadow: "0 12px 40px rgba(15,23,42,0.06)", transformStyle: "preserve-3d" }}>
              <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }}
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ background: `${card.accent}15`, color: card.accent }}>
                {card.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-[var(--accent)]" style={{ color: "var(--text)" }}>{card.title}</h3>
              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>{card.desc}</p>
              <motion.div initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} transition={{ duration: 0.4 }}
                className="mt-6 h-px rounded-full origin-left"
                style={{ background: `linear-gradient(90deg, ${card.accent}, transparent)` }} />
            </motion.div>
          ))}
        </div>

        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((s) => (
            <motion.div key={s.label}
              whileHover={{ scale: 1.07, boxShadow: "0 0 40px rgba(134,90,255,0.2)" }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="rounded-2xl p-6 text-center cursor-default"
              style={{ background: "var(--card-bg)", border: "1px solid rgba(134,90,255,0.2)" }}>
              <motion.div whileHover={{ scale: 1.35, rotate: 12 }} transition={{ type: "spring", stiffness: 400 }}
                className="flex justify-center mb-3" style={{ color: "var(--accent)" }}>
                {s.icon}
              </motion.div>
              <div className="text-3xl font-black mb-1" style={{ color: "var(--text-card)" }}>{s.value}</div>
              <div className="text-sm" style={{ color: "var(--muted-card)" }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <Technologies />
      <WorkProcess />
    </section>
  );
}
