import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiX, FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const categories = ["All", "Full Stack", "Frontend", "Web Dev", "Mobile"];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full Stack",
    year: "2024",
    desc: "A modern e-commerce platform with real-time inventory, payment integration, and admin dashboard built for 10K+ daily users.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
    accent: "#865aff",
    gradient: "rgba(134,90,255,0.15), rgba(90,255,115,0.08)",
    features: [
      "Real-time inventory",
      "Stripe payments",
      "Admin dashboard",
      "Mobile responsive",
    ],
  },
  {
    id: 2,
    title: "SaaS Analytics Dashboard",
    category: "Frontend",
    year: "2024",
    desc: "Analytics dashboard with real-time data visualization, dark theme, and responsive design for a B2B SaaS startup.",
    tech: ["React", "Tailwind", "Chart.js", "WebSocket"],
    accent: "#5aff73",
    gradient: "rgba(90,255,115,0.15), rgba(134,90,255,0.08)",
    features: [
      "Real-time charts",
      "Dark/light mode",
      "CSV export",
      "Role-based access",
    ],
  },
  {
    id: 3,
    title: "Corporate Website",
    category: "Web Dev",
    year: "2023",
    desc: "Premium corporate website with GSAP animations, Sanity CMS integration, and full SEO optimization.",
    tech: ["Next.js", "Sanity CMS", "GSAP", "Vercel"],
    accent: "#865aff",
    gradient: "rgba(134,90,255,0.15), rgba(90,255,115,0.06)",
    features: [
      "CMS integration",
      "SEO optimized",
      "GSAP animations",
      "Blog system",
    ],
  },
  {
    id: 4,
    title: "Mobile Banking App",
    category: "Mobile",
    year: "2023",
    desc: "Secure mobile banking UI with biometric auth, transaction history, and real-time push notifications.",
    tech: ["React Native", "Node.js", "PostgreSQL", "Firebase"],
    accent: "#5aff73",
    gradient: "rgba(90,255,115,0.15), rgba(134,90,255,0.08)",
    features: [
      "Biometric auth",
      "Push notifications",
      "Transaction history",
      "QR payments",
    ],
  },
  {
    id: 5,
    title: "AI Content Platform",
    category: "Full Stack",
    year: "2024",
    desc: "AI-powered content generation platform with subscription model, team collaboration, and usage analytics.",
    tech: ["Next.js", "OpenAI API", "Prisma", "Stripe"],
    accent: "#865aff",
    gradient: "rgba(134,90,255,0.15), rgba(90,255,115,0.06)",
    features: [
      "AI generation",
      "Team workspaces",
      "Subscription billing",
      "Usage analytics",
    ],
  },
  {
    id: 6,
    title: "Real Estate Portal",
    category: "Web Dev",
    year: "2023",
    desc: "Property listing portal with Google Maps integration, advanced filters, virtual tours, and agent dashboard.",
    tech: ["React", "Google Maps", "Firebase", "Node.js"],
    accent: "#5aff73",
    gradient: "rgba(90,255,115,0.15), rgba(134,90,255,0.08)",
    features: [
      "Map integration",
      "Virtual tours",
      "Agent dashboard",
      "Advanced filters",
    ],
  },
  {
    id: 7,
    title: "Healthcare Management",
    category: "Full Stack",
    year: "2024",
    desc: "Hospital management system with appointment booking, patient records, billing, and doctor portal.",
    tech: ["React", "Node.js", "MySQL", "Socket.io"],
    accent: "#865aff",
    gradient: "rgba(134,90,255,0.15), rgba(90,255,115,0.06)",
    features: [
      "Appointment booking",
      "Patient records",
      "Billing system",
      "Doctor portal",
    ],
  },
  {
    id: 8,
    title: "EdTech Learning Platform",
    category: "Full Stack",
    year: "2023",
    desc: "Online learning platform with video courses, quizzes, certificates, and student progress tracking.",
    tech: ["Next.js", "Node.js", "MongoDB", "AWS S3"],
    accent: "#5aff73",
    gradient: "rgba(90,255,115,0.15), rgba(134,90,255,0.08)",
    features: [
      "Video streaming",
      "Quiz engine",
      "Certificates",
      "Progress tracking",
    ],
  },
  {
    id: 9,
    title: "Restaurant Ordering App",
    category: "Mobile",
    year: "2023",
    desc: "Food ordering app with real-time order tracking, table booking, loyalty points, and kitchen display.",
    tech: ["React Native", "Node.js", "MongoDB", "Razorpay"],
    accent: "#865aff",
    gradient: "rgba(134,90,255,0.15), rgba(90,255,115,0.06)",
    features: [
      "Live order tracking",
      "Table booking",
      "Loyalty points",
      "Kitchen display",
    ],
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{
          background: "rgba(10,10,11,0.88)",
          backdropFilter: "blur(16px)",
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.78, opacity: 0, y: 55 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.82, opacity: 0, y: 35 }}
          transition={{ type: "spring", damping: 22, stiffness: 280 }}
          className="rounded-3xl p-8 max-w-xl w-full relative max-h-[90vh] overflow-y-auto"
          style={{
            background: "var(--card-bg)",
            border: "1px solid rgba(134,90,255,0.2)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200"
            style={{ background: "var(--surface2)", color: "var(--muted)" }}
          >
            <FiX size={16} />
          </motion.button>

          {/* Thumbnail */}
          <div
            className="w-full h-48 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${project.gradient})`,
            }}
          >
            <motion.span
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.06, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-7xl font-black"
              style={{ color: project.accent, opacity: 0.3 }}
            >
              {project.title[0]}
            </motion.span>
            <div
              className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs"
              style={{
                background: "rgba(10,10,11,0.6)",
                color: "var(--muted-card)",
              }}
            >
              {project.year}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
          >
            <span
              className="text-xs px-3 py-1 rounded-full mb-4 inline-block"
              style={{
                background: `${project.accent}15`,
                color: project.accent,
                border: `1px solid ${project.accent}30`,
              }}
            >
              {project.category}
            </span>
            <h3
              className="text-2xl font-bold mb-3"
              style={{ color: "var(--text-card)" }}
            >
              {project.title}
            </h3>
            <p
              className="leading-relaxed mb-6 text-sm"
              style={{ color: "var(--muted-card)" }}
            >
              {project.desc}
            </p>

            {/* Features */}
            <div className="mb-6">
              <h4
                className="text-sm font-semibold mb-3"
                style={{ color: "var(--text-card)" }}
              >
                Key Features
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {project.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2 text-xs"
                    style={{ color: "var(--muted-card)" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: project.accent }}
                    />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Tech */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    background: "var(--surface2)",
                    color: "var(--muted)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {t}
                </motion.span>
              ))}
            </div>

            <div className="flex gap-3">
              <motion.button
                whileHover={{
                  scale: 1.04,
                  boxShadow: `0 0 20px ${project.accent}40`,
                }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
                style={{ background: project.accent, color: "#fff" }}
              >
                <FiExternalLink size={14} /> Live Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm"
                style={{
                  background: "var(--surface2)",
                  color: "var(--text)",
                  border: "1px solid var(--border)",
                }}
              >
                <FiGithub size={14} /> Source Code
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function PortfolioPage() {
  const sectionRef = useRef();
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".port-hero-text",
        { opacity: 0, y: 55 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.2,
        },
      );
      gsap.fromTo(
        ".stat-item",
        { opacity: 0, scale: 0.7 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: ".stats-row", start: "top 85%" },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen pt-18"
      style={{ background: "var(--bg)" }}
    >
      {/* Hero */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-overlay pointer-events-none" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.07, 0.13, 0.07] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: "var(--accent)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 9, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: "var(--accent2)" }}
        />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div
            className="port-hero-text inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-6"
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
              Our Work Speaks for Itself
            </span>
          </div>
          <h1
            className="port-hero-text text-5xl md:text-7xl font-black mb-6"
            style={{ color: "var(--text)" }}
          >
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p
            className="port-hero-text text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            A curated showcase of our best work — from startups to enterprise
            solutions, built with passion and precision.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Stats */}
        <div className="stats-row grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 28px rgba(134,90,255,0.18)",
              }}
              className="stat-item rounded-2xl p-6 text-center"
              style={{
                background: "var(--card-bg)",
                border: "1px solid rgba(134,90,255,0.18)",
              }}
            >
              <div
                className="text-3xl font-black mb-1"
                style={{ color: "var(--text-card)" }}
              >
                {s.value}
              </div>
              <div className="text-sm" style={{ color: "var(--muted-card)" }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
              style={
                filter === cat
                  ? {
                      background: "var(--accent)",
                      color: "#fff",
                      boxShadow: "0 0 20px rgba(134,90,255,0.4)",
                    }
                  : {
                      background: "var(--card-bg)",
                      color: "var(--muted-card)",
                      border: "1px solid var(--border)",
                    }
              }
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.87, y: 38 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.87, y: 20 }}
                transition={{ duration: 0.42, delay: i * 0.06 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelected(p)}
                className="rounded-2xl overflow-hidden cursor-pointer group"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--border)",
                }}
              >
                {/* Thumbnail */}
                <div
                  className="relative h-48 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${p.gradient})`,
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <span
                      className="text-8xl font-black"
                      style={{ color: p.accent, opacity: 0.15 }}
                    >
                      {p.title[0]}
                    </span>
                  </motion.div>
                  <div
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs"
                    style={{
                      background: "rgba(10,10,11,0.65)",
                      color: "var(--muted-card)",
                    }}
                  >
                    {p.year}
                  </div>
                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.28 }}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ background: "rgba(10,10,11,0.7)" }}
                  >
                    <span
                      className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold"
                      style={{
                        border: `1px solid ${p.accent}`,
                        color: p.accent,
                      }}
                    >
                      View Details <FiArrowRight size={14} />
                    </span>
                  </motion.div>
                  {/* Shimmer */}
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.65 }}
                    className="absolute inset-y-0 w-1/3 skew-x-12 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
                    }}
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        background: `${p.accent}12`,
                        color: p.accent,
                        border: `1px solid ${p.accent}25`,
                      }}
                    >
                      {p.category}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-bold mb-2 transition-colors duration-300 group-hover:text-var(--accent)"
                    style={{ color: "var(--text-card)" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-sm line-clamp-2 mb-4"
                    style={{ color: "var(--muted-card)" }}
                  >
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded-md"
                        style={{
                          background: "var(--surface2)",
                          color: "var(--muted)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 3 && (
                      <span
                        className="text-xs px-2 py-0.5 rounded-md"
                        style={{
                          background: "var(--surface)",
                          color: "var(--muted)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        +{p.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center rounded-3xl p-12"
          style={{
            background: "var(--surface2)",
            border: "1px solid rgba(134,90,255,0.15)",
          }}
        >
          <h2
            className="text-3xl md:text-4xl font-black mb-4"
            style={{ color: "var(--text)" }}
          >
            Ready to Start Your <span className="gradient-text">Project?</span>
          </h2>
          <p
            className="mb-8 max-w-xl mx-auto text-sm"
            style={{ color: "var(--muted)" }}
          >
            Let's build something amazing together. Contact us today and get a
            free consultation.
          </p>
          <motion.button
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 36px rgba(134,90,255,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              navigate("/contact");
              window.scrollTo({ top: 0 });
            }}
            className="px-10 py-4 rounded-full font-bold text-base transition-all duration-300"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            Start a Project →
          </motion.button>
        </motion.div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
