import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiX,
  FiExternalLink,
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const categories = ["All", "Full Stack", "Frontend", "Backend"];

const projects = [
  {
    id: 1,
    title: "Employee Management Services Website | Business Website",
    category: "Full Stack",
    year: "2025",
    desc: "Full-stack Employee Management Services Website designed for companies to manage employees, attendance, leave requests, payroll, and internal operations with a secure multi-role system and admin control panel.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "AJAX"],
    accent: "#5aff73",
    gradient: "rgba(90,255,115,0.15), rgba(134,90,255,0.08)",
    liveDemo: "https://emsraj.vercel.app/", // TODO: replace with real URL
    images: ["/images/1.1.png", "/images/1.2.png", "/images/1.3.png"],
    features: [
      "Multi-role system (Admin, Employee, Super Admin)",
      "Attendance & leave management",
      "Payroll & salary processing",
      "Admin dashboard analytics",
      "Secure authentication system",
    ],
  },
  {
    id: 2,
    title: "Ecommerce Watch Website with AI Customer Support",
    category: "Full Stack",
    year: "2025",
    desc: "Modern ecommerce watch store with AI-powered customer support, product catalog, cart system, secure checkout, and intelligent chatbot for instant customer assistance and product recommendations.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "AI Chatbot API",
    ],
    accent: "#5aff73",
    gradient: "rgba(90,255,115,0.15), rgba(134,90,255,0.08)",
    liveDemo: "#", // TODO: replace with real URL
    images: ["/images/2.1.png", "/images/2.2.png", "/images/2.3.png"],
    features: [
      "AI chatbot customer support",
      "Product catalog & filters",
      "Shopping cart system",
      "Secure checkout flow",
      "Order tracking system",
    ],
  },
  {
    id: 3,
    title: "QuickChat - Real-Time Chat Application",
    category: "Full Stack",
    year: "2025",
    desc: "QuickChat is a full-stack real-time chat application built with the MERN stack. It features JWT authentication, Socket.IO powered real-time messaging, online/offline user status, responsive UI, and 32 modern theme variations using Zustand and Tailwind CSS.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Tailwind CSS",
      "Zustand",
    ],
    accent: "#5aff73",
    gradient: "rgba(90,255,115,0.15), rgba(134,90,255,0.08)",
    liveDemo: "https://quickchat-y6jq.onrender.com/",
    images: ["/images/3.1.png", "/images/3.2.png", "/images/3.3.png"],
    features: [
      "JWT authentication",
      "Real-time messaging",
      "Online/offline status",
      "32 custom themes",
      "Responsive chat interface",
    ],
  },
  {
    id: 4,
    title: "GreatKart - Ecommerce Platform",
    category: "Frontend",
    year: "2026",
    desc: "GreatKart is a powerful ecommerce web application built with Python and Django. It includes shopping cart functionality, secure checkout system, order management, PayPal Sandbox payment integration, user dashboard, and token-based email authentication.",
    tech: ["Python", "Django", "SQLite", "Bootstrap", "PayPal API"],
    accent: "#5aff73",
    gradient: "rgba(90,255,115,0.15), rgba(134,90,255,0.08)",
    liveDemo: "#",
    images: ["/images/6.1.png"],
    features: [
      "Cart & checkout system",
      "Payment integration",
      "Order management",
      "Email authentication",
      "User dashboard",
    ],
  },
  {
    id: 5,
    title: "ArtX - AI Image Generator",
    category: "Full Stack",
    year: "2026",
    desc: "ArtX is a modern AI-powered image generation platform where users can create stunning images from text prompts. Built using the MERN stack with advanced AI APIs, it delivers high-quality AI art generation with a sleek and responsive user experience.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "OpenAI API",
    ],
    accent: "#5aff73",
    gradient: "rgba(90,255,115,0.15), rgba(134,90,255,0.08)",
    liveDemo: "https://artx-ai.vercel.app/",
    images: ["/images/4.1.png", "/images/4.2.png", "/images/4.3.png"],
    features: [
      "AI image generation",
      "Text-to-image prompts",
      "Modern responsive UI",
      "High-quality image output",
      "Full-stack MERN architecture",
    ],
  },
  {
    id: 6,
    title: "WavyMusic - Music Streaming Platform",
    category: "Frontend",
    year: "2025",
    desc: "WavyMusic is a modern full-stack music streaming web application built using the MERN stack. Users can explore albums, stream tracks, and enjoy a dynamic audio player with a responsive and visually engaging interface.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    accent: "#5aff73",
    gradient: "rgba(90,255,115,0.15), rgba(134,90,255,0.08)",
    liveDemo: "https://wavymusic.vercel.app",
    images: ["/images/5.1.png"],
    features: [
      "Music streaming",
      "Dynamic audio player",
      "Album & track browsing",
      "Responsive UI",
      "Modern MERN architecture",
    ],
  },
  {
    id: 7,
    title: "Online Chess Game - TimewithChess website",
    category: "Backend",
    year: "2025",
    desc: "A real-time multiplayer chess application inspired by Time with Chess, built using Node.js and Socket.IO. Players can compete online with live game synchronization, responsive gameplay, and seamless real-time interactions.",
    tech: ["Node.js", "Express.js", "Socket.IO", "JavaScript", "HTML", "CSS"],
    accent: "#5aff73",
    gradient: "rgba(90,255,115,0.15), rgba(134,90,255,0.08)",
    liveDemo: "#",
    images: ["/images/7.1.png", "/images/7.2.png"],
    features: [
      "Real-time multiplayer chess",
      "Live game synchronization",
      "Socket.IO integration",
      "Responsive gameplay UI",
      "Online player matchmaking",
    ],
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "2+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

function ProjectModal({ project, onClose }) {
  const [imgIndex, setImgIndex] = useState(0);
  const hasImages = project.images && project.images.length > 0;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{
          background: "",
          backdropFilter: "blur(0px)",
          WebkitBackdropFilter: "blur(0px)",
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
            background: "#111116",
            border: "1px solid rgba(134,90,255,0.28)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.45)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="sticky top-0 float-right z-10 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 mb-2"
            style={{ background: "rgba(255,255,255,0.08)", color: "#e4e4e7" }}
          >
            <FiX size={16} />
          </motion.button>

          {/* Image Gallery */}
          <div
            className="w-full h-48 rounded-2xl mb-4 relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${project.gradient})`,
            }}
          >
            {hasImages ? (
              <>
                <img
                  src={project.images[imgIndex]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setImgIndex(
                          (i) =>
                            (i - 1 + project.images.length) %
                            project.images.length
                        )
                      }
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center bg-black/55 text-white hover:bg-black/75 border border-white/15"
                    >
                      <FiChevronLeft size={16} />
                    </button>
                    <button
                      onClick={() =>
                        setImgIndex((i) => (i + 1) % project.images.length)
                      }
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center bg-black/55 text-white hover:bg-black/75 border border-white/15"
                    >
                      <FiChevronRight size={16} />
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {project.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setImgIndex(i)}
                          className="w-1.5 h-1.5 rounded-full transition-all"
                          style={{
                            background:
                              i === imgIndex
                                ? project.accent
                                : "rgba(255,255,255,0.4)",
                          }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span
                  className="text-7xl font-black"
                  style={{ color: project.accent, opacity: 0.3 }}
                >
                  {project.title[0]}
                </span>
              </div>
            )}
            <div
              className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs pointer-events-none"
              style={{
                background: "rgba(0,0,0,0.62)",
                color: "rgba(255,255,255,0.92)",
              }}
            >
              {project.year}
            </div>
          </div>

          {/* Thumbnail strip */}
          {hasImages && project.images.length > 1 && (
            <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
              {project.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  onClick={() => setImgIndex(i)}
                  className="w-14 h-10 object-cover rounded-lg cursor-pointer shrink-0 transition-all"
                  style={{
                    border:
                      i === imgIndex
                        ? `2px solid ${project.accent}`
                        : "2px solid transparent",
                    opacity: i === imgIndex ? 1 : 0.5,
                  }}
                />
              ))}
            </div>
          )}

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
              style={{ color: "#f4f4f5" }}
            >
              {project.title}
            </h3>
            <p
              className="leading-relaxed mb-6 text-sm"
              style={{ color: "#a8a8b3" }}
            >
              {project.desc}
            </p>

            <div className="mb-6">
              <h4
                className="text-sm font-semibold mb-3"
                style={{ color: "#f4f4f5" }}
              >
                Key Features
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {project.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2 text-xs"
                    style={{ color: "#a8a8b3" }}
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

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "#d4d4d8",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  {t}
                </motion.span>
              ))}
            </div>

            <motion.button
              whileHover={{
                scale: 1.04,
                boxShadow: `0 0 20px ${project.accent}40`,
              }}
              whileTap={{ scale: 0.96 }}
              onClick={() => window.open(project.liveDemo, "_blank")}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
              style={{ background: project.accent, color: "#fff" }}
            >
              <FiExternalLink size={14} /> Live Demo
            </motion.button>
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
        }
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
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen pt-16 md:pt-18"
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
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
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
                  background: "#111116",
                  border: "1px solid rgba(134,90,255,0.22)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
                }}
              >
                {/* Thumbnail */}
                <div
                  className="relative h-48 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${p.gradient})`,
                  }}
                >
                  {p.images && p.images.length > 0 ? (
                    <motion.img
                      src={p.images[0]}
                      alt={p.title}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-cover"
                    />
                  ) : (
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
                  )}
                  <div
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs"
                    style={{
                      background: "rgba(0,0,0,0.62)",
                      color: "rgba(255,255,255,0.92)",
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
                    style={{
                      background: "rgba(10,10,14,0.72)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <span
                      className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold bg-transparent"
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
                    className="text-lg font-bold mb-2 transition-colors duration-300 group-hover:text-[var(--accent)]"
                    style={{ color: "#f4f4f5" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-sm line-clamp-2 mb-4"
                    style={{ color: "#a8a8b3" }}
                  >
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded-md"
                        style={{
                          background: "rgba(255,255,255,0.06)",
                          color: "#d4d4d8",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 3 && (
                      <span
                        className="text-xs px-2 py-0.5 rounded-md"
                        style={{
                          background: "rgba(255,255,255,0.06)",
                          color: "#d4d4d8",
                          border: "1px solid rgba(255,255,255,0.1)",
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
            className="px-10 py-4 rounded-full font-bold text-base transition-all duration-300 cursor-pointer"
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
