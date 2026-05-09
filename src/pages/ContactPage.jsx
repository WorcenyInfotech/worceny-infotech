import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FiMail,
  FiMapPin,
  FiSend,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FiLinkedin, FiGithub } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: <FiMail size={20} />,
    label: "Email Us",
    value: "worcenyinfotech@gmail.com",
    sub: "Reply within 2 hours",
    accent: "#865aff",
  },
  {
    icon: <FaWhatsapp size={20} />,
    label: "Call & WhatsApp",
    value: ["+91 81403 98723", "+91 91069 30388"],
    sub: "Mon-Sat, 9am-7pm IST",
    accent: "#25D366",
  },
  {
    icon: <FiMapPin size={20} />,
    label: "Office",
    value: "Surat, Gujarat, India",
    sub: "India — 400001",
    accent: "#865aff",
  },
  {
    icon: <FiClock size={20} />,
    label: "Working Hours",
    value: "Mon - Sat",
    sub: "9:00 AM - 7:00 PM IST",
    accent: "#5aff73",
  },
];

const socials = [
  {
    icon: <FiLinkedin size={17} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/worceny-infotech",
    accent: "#0077b5",
  },
  {
    icon: <FiGithub size={17} />,
    label: "GitHub",
    href: "https://github.com/WorcenyInfotech",
    accent: "#0e0e0e",
  },
];

const services = [
  "Web Development",
  "Frontend Development",
  "Backend Development",
  "Full Stack Development",
  "UI/UX Design",
  "Other",
];
const budgets = ["< ₹50K", "₹50K–1L", "₹1L–3L", "₹3L–5L", "₹5L+", "Discuss"];

const faqs = [
  {
    q: "How long does a project take?",
    a: "Typical projects take 2–8 weeks depending on complexity. We provide a detailed timeline after the initial consultation.",
  },
  {
    q: "What is your pricing model?",
    a: "We offer fixed-price and hourly models. After understanding your requirements, we provide a transparent quote with no hidden costs.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes! We offer 3 months of free support after launch, and ongoing maintenance packages are available.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Absolutely. We integrate seamlessly with in-house teams and adapt to your workflow and tools.",
  },
];

function AnimateHeight({ isOpen, children }) {
  return (
    <motion.div
      initial={false}
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      style={{ overflow: "hidden" }}
    >
      {children}
    </motion.div>
  );
}

export default function ContactPage() {
  const sectionRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-hero-text",
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
        ".contact-card",
        { opacity: 0, y: 45, scale: 0.93 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ".contact-cards-grid", start: "top 82%" },
        },
      );
      gsap.fromTo(
        ".faq-item",
        { opacity: 0, x: -28 },
        {
          opacity: 1,
          x: 0,
          duration: 0.55,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".faq-section", start: "top 82%" },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) return setErrors(errs);
    const subject = encodeURIComponent(`New Project Enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "N/A"}\nService: ${form.service || "N/A"}\nBudget: ${form.budget || "N/A"}\n\nProject Details:\n${form.message}`,
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&to=worcenyinfotech@gmail.com&su=${subject}&body=${body}`,
      "_blank",
    );
    setSent(true);
    setForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      message: "",
    });
    setErrors({});
    setTimeout(() => setSent(false), 6000);
  };

  const inputStyle = (key) => ({
    width: "100%",
    background: "var(--surface2)",
    border: `1px solid ${errors[key] ? "#ff5a5a" : focused === key ? "var(--accent)" : "var(--border)"}`,
    borderRadius: "12px",
    padding: "12px 16px",
    color: "var(--text)",
    outline: "none",
    transition: "border-color 0.3s",
    fontSize: "14px",
  });

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
          className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: "var(--accent)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 9, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: "var(--accent2)" }}
        />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div
            className="contact-hero-text inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-6"
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
              Available for Projects
            </span>
          </div>
          <h1
            className="contact-hero-text text-5xl md:text-7xl font-black mb-6"
            style={{ color: "var(--text)" }}
          >
            Let's <span className="gradient-text">Build</span> Something
            <br />
            <span className="gradient-text-rev">Amazing</span> Together
          </h1>
          <p
            className="contact-hero-text text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Have a project in mind? Fill out the form below or reach out
            directly — we respond within 2 hours.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">
        {/* Info Cards */}
        <div className="contact-cards-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
          {contactInfo.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -6, boxShadow: `0 0 28px ${item.accent}18` }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="contact-card rounded-2xl p-5 text-center cursor-default"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 8 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="w-11 h-11 rounded-xl mx-auto flex items-center justify-center mb-3"
                style={{ background: `${item.accent}14`, color: item.accent }}
              >
                {item.icon}
              </motion.div>
              <div
                className="text-xs mb-1"
                style={{ color: "var(--muted-card)" }}
              >
                {item.label}
              </div>
              <div
                className="text-xs font-semibold leading-tight mb-1 wrap-break-words"
                style={{ color: "var(--text-card)" }}
              >
                {Array.isArray(item.value) ? (
                  item.value.map((num, index) => (
                    <p key={index} className="break-all">
                      {num}
                    </p>
                  ))
                ) : (
                  <p className="break-all">{item.value}</p>
                )}
              </div>
              <div
                className="text-xs"
                style={{ color: "var(--muted-card)", opacity: 0.7 }}
              >
                {item.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Form + Sidebar */}
        <div className="grid lg:grid-cols-5 gap-10 mb-20">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div
              className="rounded-3xl p-8"
              style={{
                background: "var(--card-bg)",
                border: "1px solid rgba(134,90,255,0.15)",
              }}
            >
              <h2
                className="text-2xl font-black mb-1"
                style={{ color: "var(--text-card)" }}
              >
                Send Us a Message
              </h2>
              <p
                className="text-sm mb-8"
                style={{ color: "var(--muted-card)" }}
              >
                Fill in the details and we'll get back to you shortly.
              </p>

              {sent ? (
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", damping: 15 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.6 }}
                  >
                    <FiCheckCircle
                      size={64}
                      style={{ color: "var(--accent2)" }}
                      className="mb-5"
                    />
                  </motion.div>
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: "var(--text-card)" }}
                  >
                    Message Sent!
                  </h3>
                  <p style={{ color: "var(--muted-card)" }}>
                    We'll get back to you within 2 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1 */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="text-sm mb-2 block"
                        style={{ color: "var(--muted-card)" }}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        placeholder="John Doe"
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        style={inputStyle("name")}
                      />
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xs mt-1"
                          style={{ color: "#ff5a5a" }}
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </div>
                    <div>
                      <label
                        className="text-sm mb-2 block"
                        style={{ color: "var(--muted-card)" }}
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        placeholder="john@example.com"
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        style={inputStyle("email")}
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xs mt-1"
                          style={{ color: "#ff5a5a" }}
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="text-sm mb-2 block"
                        style={{ color: "var(--muted-card)" }}
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        placeholder="+91 98765 43210"
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        onFocus={() => setFocused("phone")}
                        onBlur={() => setFocused(null)}
                        style={inputStyle("phone")}
                      />
                    </div>
                    <div>
                      <label
                        className="text-sm mb-2 block"
                        style={{ color: "var(--muted-card)" }}
                      >
                        Service Needed
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) =>
                          setForm({ ...form, service: e.target.value })
                        }
                        onFocus={() => setFocused("service")}
                        onBlur={() => setFocused(null)}
                        style={{
                          ...inputStyle("service"),
                          cursor: "pointer",
                          color: form.service ? "var(--text)" : "#888",
                        }}
                      >
                        <option
                          value=""
                          disabled
                          style={{ background: "#1a1a2e", color: "#888" }}
                        >
                          Select a service
                        </option>
                        {services.map((s) => (
                          <option
                            key={s}
                            value={s}
                            style={{ background: "#1a1a2e", color: "#fff" }}
                          >
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label
                      className="text-sm mb-3 block"
                      style={{ color: "var(--muted-card)" }}
                    >
                      Project Budget
                    </label>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                      {budgets.map((b) => (
                        <motion.button
                          key={b}
                          type="button"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setForm({ ...form, budget: b })}
                          className="py-2 px-2 rounded-xl text-xs font-medium transition-all duration-200"
                          style={
                            form.budget === b
                              ? {
                                  background: "rgba(134,90,255,0.2)",
                                  border: "1px solid var(--accent)",
                                  color: "var(--accent)",
                                }
                              : {
                                  background: "var(--surface2)",
                                  border: "1px solid var(--border)",
                                  color: "var(--muted)",
                                }
                          }
                        >
                          {b}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="text-sm mb-2 block"
                      style={{ color: "var(--muted-card)" }}
                    >
                      Project Details *
                    </label>
                    <textarea
                      rows={5}
                      value={form.message}
                      placeholder="Tell us about your project, goals, timeline..."
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      style={{ ...inputStyle("message"), resize: "none" }}
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs mt-1"
                        style={{ color: "#ff5a5a" }}
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 36px rgba(134,90,255,0.5)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 text-base transition-all duration-300 cursor-pointer"
                    style={{ background: "var(--accent)", color: "#fff" }}
                  >
                    <FiSend size={16} /> Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Why Us */}
            <div
              className="rounded-3xl p-7"
              style={{
                background: "var(--card-bg)",
                border: "1px solid rgba(134,90,255,0.12)",
              }}
            >
              <h3
                className="text-xl font-bold mb-5"
                style={{ color: "var(--text-card)" }}
              >
                Why Choose Us?
              </h3>
              <div className="space-y-4">
                {[
                  { title: "Fast Delivery", desc: "On time, every time." },
                  { title: "Clean Code", desc: "Scalable & well-documented." },
                  {
                    title: "Transparent Pricing",
                    desc: "No hidden costs. Fixed quotes.",
                  },
                  { title: "24/7 Support", desc: "We're always here for you." },
                  {
                    title: "Modern Tech Stack",
                    desc: "React, Node.js, Next.js & more.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "rgba(134,90,255,0.15)" }}
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ background: "var(--accent)" }}
                      />
                    </span>
                    <div>
                      <div
                        className="text-sm font-semibold"
                        style={{ color: "var(--text-card)" }}
                      >
                        {item.title}
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "var(--muted-card)" }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div
              className="rounded-3xl p-7"
              style={{
                background: "var(--card-bg)",
                border: "1px solid rgba(134,90,255,0.12)",
              }}
            >
              <h3
                className="text-xl font-bold mb-5"
                style={{ color: "var(--text-card)" }}
              >
                Follow Us
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    whileHover={{ scale: 1.06, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300"
                    style={{
                      background: "var(--surface2)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <span style={{ color: s.accent }}>{s.icon}</span>
                    <span className="text-sm" style={{ color: "var(--muted)" }}>
                      {s.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Response badge */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl p-6 text-center"
              style={{
                background: "var(--card-bg)",
                border: "1px solid rgba(134,90,255,0.2)",
              }}
            >
              <div
                className="text-4xl font-black mb-1"
                style={{ color: "var(--text-card)" }}
              >
                2 hrs
              </div>
              <div className="text-sm" style={{ color: "var(--muted-card)" }}>
                Average Response Time
              </div>
              <div className="mt-3 flex items-center justify-center gap-2">
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: "var(--accent2)" }}
                />
                <span className="text-xs" style={{ color: "var(--accent2)" }}>
                  Currently Online
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ */}
        <div className="faq-section mb-10">
          <motion.div
            initial={{ opacity: 0, y: 38 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span
              className="text-sm font-semibold tracking-widest uppercase"
              style={{ color: "var(--accent)" }}
            >
              FAQ
            </span>
            <h2
              className="text-3xl md:text-4xl font-black mt-3 mb-4"
              style={{ color: "var(--text)" }}
            >
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="faq-item rounded-2xl overflow-hidden"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--border)",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                >
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-card)" }}
                  >
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-xl shrink-0 ml-4"
                    style={{ color: "var(--accent)" }}
                  >
                    +
                  </motion.span>
                </button>
                <AnimateHeight isOpen={openFaq === i}>
                  <p
                    className="px-6 pb-5 text-sm leading-relaxed"
                    style={{ color: "var(--muted-card)" }}
                  >
                    {faq.a}
                  </p>
                </AnimateHeight>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
