import { motion } from "framer-motion";

export function SectionBadge({ label, color = "var(--accent)" }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="inline-block text-sm font-semibold tracking-widest uppercase mb-3"
      style={{ color }}
    >
      {label}
    </motion.span>
  );
}

export function GradientLine() {
  return (
    <motion.div
      initial={{ scaleX: 0, transformOrigin: "left center" }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, ease: "power3.out" }}
      className="w-24 h-0.5 mx-auto mb-6 rounded-full"
      style={{
        background: "linear-gradient(90deg, var(--accent), var(--accent2))",
      }}
    />
  );
}

export function CardHover({
  children,
  accent = "var(--accent)",
  className = "",
}) {
  return (
    <motion.div
      whileHover={{ y: -7, boxShadow: `0 0 36px ${accent}20` }}
      transition={{ type: "spring", stiffness: 280, damping: 20 }}
      className={`rounded-2xl cursor-default ${className}`}
      style={{
        background: "var(--card-bg)",
        border: "1px solid var(--border)",
      }}
    >
      {children}
    </motion.div>
  );
}

export function AccentButton({ children, onClick, secondary = false }) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: secondary ? "none" : "0 0 28px rgba(134,90,255,0.5)",
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="px-7 py-3 rounded-full font-bold text-sm transition-all duration-300"
      style={
        secondary
          ? {
              background: "rgba(134,90,255,0.1)",
              border: "1px solid rgba(134,90,255,0.28)",
              color: "var(--accent)",
            }
          : { background: "var(--accent)", color: "#fff" }
      }
    >
      {children}
    </motion.button>
  );
}
