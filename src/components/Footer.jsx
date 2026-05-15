"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const ref = useRef();
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const router = useRouter();

  const scrollTo = (section) => {
    router.push("/");
    setTimeout(
      () =>
        document
          .getElementById(section)
          ?.scrollIntoView({ behavior: "smooth" }),
      320
    );
  };

  const goTo = (path) => {
    router.push(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    Company: [
      { label: "About", action: () => scrollTo("about") },
      { label: "Services", action: () => goTo("/services") },
      { label: "Industries", action: () => goTo("/industries") },
      { label: "Technologies", action: () => goTo("/technologies") },
      { label: "Portfolio", action: () => goTo("/portfolio") },
      { label: "Contact", action: () => goTo("/contact") },
    ],
    Services: [
      { label: "Web Development", action: () => goTo("/services/website") },
      {
        label: "Frontend Development",
        action: () => goTo("/services/frontend"),
      },
      { label: "Backend Development", action: () => goTo("/services/backend") },
      { label: "Web Hosting", action: () => goTo("/services/hosting") },
      { label: "SEO Optimization", action: () => goTo("/services/seo") },
    ],
    Connect: [
      {
        label: "LinkedIn",
        icon: <FaLinkedin className="inline mr-2" />,
        action: () =>
          window.open(
            "https://www.linkedin.com/company/worceny-infotech",
            "_blank"
          ),
      },
      {
        label: "GitHub",
        icon: <FaGithub className="inline mr-2" />,
        action: () =>
          window.open("https://github.com/WorcenyInfotech", "_blank"),
      },
    ],
  };

  return (
    <footer
      className="relative overflow-hidden pt-16 pb-12"
      style={{ background: "var(--surface)" }}
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="md:col-span-1"
          >
            <img
              src="/logo.png"
              alt="WorcenyInfotech"
              className="h-10 object-contain mb-4 cursor-pointer"
              onClick={() => router.push("/")}
            />
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: "var(--muted)" }}
            >
              Surat-based IT & web company — modern websites, apps, and software
              for businesses in Gujarat and worldwide.
            </p>
            <div
              className="space-y-2 text-sm mb-4"
              style={{ color: "var(--muted)" }}
            >
              <div>
                <FaEnvelope
                  className="inline mr-2"
                  style={{ color: "var(--accent2)" }}
                />
                worcenyinfotech@gmail.com
              </div>
              <div>
                <FaPhone
                  className="inline mr-2"
                  style={{ color: "var(--accent2)" }}
                />
                +91 91069 30388
              </div>
              <div>
                <FaPhone
                  className="inline mr-2"
                  style={{ color: "var(--accent2)" }}
                />
                +91 81403 98723
              </div>
              <div>
                <FaMapMarkerAlt
                  className="inline mr-2"
                  style={{ color: "var(--accent2)" }}
                />
                Surat, Gujarat, India
              </div>
            </div>
          </motion.div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([title, items], gi) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + gi * 0.1 }}
            >
              <h4
                className="font-semibold mb-5 text-sm"
                style={{ color: "var(--accent)" }}
              >
                {title}
              </h4>
              <ul className="space-y-3">
                {items.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + gi * 0.1 + i * 0.05 }}
                  >
                    <motion.button
                      whileHover={{ x: 5, color: "var(--accent2)" }}
                      transition={{ duration: 0.2 }}
                      onClick={item.action}
                      className="text-sm transition-colors duration-300 cursor-pointer flex items-center"
                      style={{ color: "var(--muted)" }}
                    >
                      {item.icon && <span>{item.icon}</span>}
                      {item.label}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="py-8 px-4 sm:px-0 rounded-lg mb-8 flex flex-col md:flex-row md:justify-between gap-6"
          style={{
            background: "var(--surface)",
          }}
        >
          <h3
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold p-2 text-center md:text-left"
            style={{
              color: "var(--text)",
              // background: "rgba(134, 90, 255, 0.4)",
            }}
          >
            Have a project in mind?
          </h3>
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold shadow-lg transition-all duration-300 ease-out cursor-pointer"
            style={{
              background:
                "linear-gradient(to right, var(--accent), var(--accent2))",
              color: "white",
            }}
            onClick={() => goTo("/contact")}
          >
            Let's Talk
          </motion.button>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
          style={{
            borderTop: "1px solid var(--border)",
            color: "var(--muted)",
          }}
        >
          <p>
            © {new Date().getFullYear()} Worceny Infotech. All rights reserved.
          </p>
          <p>Designed with ❤️ by Worceny Infotech</p>
        </motion.div>
      </div>
    </footer>
  );
}
