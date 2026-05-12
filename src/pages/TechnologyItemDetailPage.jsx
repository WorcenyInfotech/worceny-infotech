import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowLeft, FiArrowRight, FiCheck } from "react-icons/fi";
import { getTechItem, getTechSiblings } from "../data/technologiesData";

gsap.registerPlugin(ScrollTrigger);

export default function TechnologyItemDetailPage() {
  const { groupId, techSlug } = useParams();
  const navigate = useNavigate();
  const pageRef = useRef();

  const result = groupId && techSlug ? getTechItem(groupId, techSlug) : null;
  const { prev, next } =
    groupId && techSlug
      ? getTechSiblings(groupId, techSlug)
      : { prev: null, next: null };

  useEffect(() => {
    window.scrollTo({ top: 0 });
    if (!result) {
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ti-hero-el",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.05,
        }
      );
      gsap.fromTo(
        ".ti-hl",
        { opacity: 0, x: -12 },
        {
          opacity: 1,
          x: 0,
          duration: 0.45,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: { trigger: ".ti-highlights", start: "top 88%" },
        }
      );
    }, pageRef);
    return () => ctx.revert();
  }, [groupId, techSlug, result]);

  if (!result) {
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
          type="button"
          onClick={() => navigate("/technologies")}
          className="px-6 py-3 rounded-full font-bold cursor-pointer"
          style={{ background: "var(--accent)", color: "#fff" }}
        >
          Back to Technologies
        </button>
      </div>
    );
  }

  const { group, tech } = result;

  return (
    <div
      ref={pageRef}
      className="min-h-screen pt-16"
      style={{ background: "var(--bg)" }}
    >
      <div className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 grid-overlay pointer-events-none" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute top-0 right-1/4 w-[480px] h-[480px] rounded-full blur-3xl pointer-events-none"
          style={{ background: group.accent }}
        />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.button
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -3 }}
            type="button"
            onClick={() => {
              navigate(`/technologies/${group.id}`);
              window.scrollTo({ top: 0 });
            }}
            className="flex items-center gap-2 mb-8 text-sm font-medium cursor-pointer"
            style={{ color: "var(--muted)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = group.accent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--muted)";
            }}
          >
            <FiArrowLeft size={16} /> Back to {group.label}
          </motion.button>

          <div
            className="ti-hero-el inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: `${group.accent}14`,
              border: `1px solid ${group.accent}35`,
            }}
          >
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: group.accent }}
            >
              {group.label}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start gap-8 mb-10">
            <motion.div
              className="ti-hero-el w-24 h-24 rounded-2xl flex items-center justify-center shrink-0"
              style={{
                background: `${group.accent}18`,
                border: `1px solid ${group.accent}30`,
                boxShadow: `0 12px 40px ${group.accent}20`,
              }}
            >
              <img
                src={tech.icon}
                alt=""
                className="w-14 h-14 object-contain"
              />
            </motion.div>
            <div>
              <h1
                className="ti-hero-el text-4xl md:text-5xl font-black mb-3 leading-tight"
                style={{ color: "var(--text)" }}
              >
                {tech.name}
              </h1>
              <p
                className="ti-hero-el text-lg font-medium mb-4"
                style={{ color: group.accent }}
              >
                {tech.desc}
              </p>
            </div>
          </div>

          <div className="ti-hero-el space-y-4 mb-12">
            {tech.longDesc.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="text-base leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                {para}
              </p>
            ))}
          </div>

          <div className="ti-highlights mb-16">
            <h2
              className="text-sm font-bold uppercase tracking-widest mb-4"
              style={{ color: group.accent }}
            >
              Highlights
            </h2>
            <div className="grid gap-3">
              {tech.highlights.map((h) => (
                <motion.div
                  key={h}
                  className="ti-hl flex items-start gap-3 p-4 rounded-2xl"
                  style={{
                    background: "var(--card-bg)",
                    border: `1px solid ${group.accent}18`,
                  }}
                >
                  <span
                    className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      background: `${group.accent}18`,
                      color: group.accent,
                    }}
                  >
                    <FiCheck size={14} />
                  </span>
                  <span
                    className="text-sm font-medium pt-1.5"
                    style={{ color: "var(--text-card)" }}
                  >
                    {h}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-16">
            <motion.button
              whileHover={{
                scale: 1.04,
                boxShadow: `0 0 28px ${group.accent}45`,
              }}
              whileTap={{ scale: 0.97 }}
              type="button"
              onClick={() => {
                navigate("/contact");
                window.scrollTo({ top: 0 });
              }}
              className="px-8 py-3.5 rounded-full font-bold text-sm cursor-pointer"
              style={{ background: group.accent, color: "#fff" }}
            >
              Start a Project →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              onClick={() => {
                navigate("/technologies");
                window.scrollTo({ top: 0 });
              }}
              className="px-8 py-3.5 rounded-full font-semibold text-sm cursor-pointer"
              style={{
                background: "transparent",
                border: `1.5px solid ${group.accent}45`,
                color: "var(--text)",
              }}
            >
              All Technologies
            </motion.button>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-between pb-16 border-t pt-10"
            style={{ borderColor: "rgba(134,90,255,0.12)" }}
          >
            {prev ? (
              <motion.button
                whileHover={{ x: -3 }}
                type="button"
                onClick={() => {
                  navigate(`/technologies/${group.id}/${prev.slug}`);
                  window.scrollTo({ top: 0 });
                }}
                className="flex items-center gap-3 px-5 py-4 rounded-2xl text-sm font-semibold cursor-pointer text-left"
                style={{
                  background: "var(--card-bg)",
                  border: `1px solid ${group.accent}22`,
                  color: "var(--text-card)",
                }}
              >
                <FiArrowLeft size={16} style={{ color: group.accent }} />
                <div>
                  <div
                    className="text-xs mb-0.5"
                    style={{ color: "var(--muted-card)" }}
                  >
                    Previous in category
                  </div>
                  <div>{prev.name}</div>
                </div>
              </motion.button>
            ) : (
              <div />
            )}
            {next ? (
              <motion.button
                whileHover={{ x: 3 }}
                type="button"
                onClick={() => {
                  navigate(`/technologies/${group.id}/${next.slug}`);
                  window.scrollTo({ top: 0 });
                }}
                className="flex items-center gap-3 px-5 py-4 rounded-2xl text-sm font-semibold cursor-pointer text-right sm:ml-auto"
                style={{
                  background: "var(--card-bg)",
                  border: `1px solid ${group.accent}22`,
                  color: "var(--text-card)",
                }}
              >
                <div>
                  <div
                    className="text-xs mb-0.5"
                    style={{ color: "var(--muted-card)" }}
                  >
                    Next in category
                  </div>
                  <div>{next.name}</div>
                </div>
                <FiArrowRight size={16} style={{ color: group.accent }} />
              </motion.button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
