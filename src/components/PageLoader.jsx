"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function PageLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-0"
          style={{ background: "var(--bg)" }}
        >
          {/* Glow orbs behind logo */}
          <div
            className="absolute w-72 h-72 rounded-full blur-3xl pointer-events-none"
            style={{ background: "rgba(134,90,255,0.12)" }}
          />
          <div
            className="absolute w-48 h-48 rounded-full blur-2xl pointer-events-none translate-x-16 translate-y-8"
            style={{ background: "rgba(90,255,115,0.07)" }}
          />

          {/* Logo */}
          <motion.picture
            initial={{ opacity: 0, scale: 0.7, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative z-10 mb-2"
          >
            <source media="(max-width: 767px)" srcSet="/logo-mobile.png" />

            <img
              src="/logo.png"
              alt="Worceny Infotech Logo"
              className="h-14 object-contain"
            />
          </motion.picture>

          {/* Progress bar */}
          <div
            className="w-64 h-1 rounded-full overflow-hidden relative z-10"
            style={{ background: "rgba(255,255,255,0.07)" }}
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.1, ease: "easeInOut" }}
              className="h-full rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, var(--accent), var(--accent2))",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
