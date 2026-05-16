"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FiMail, FiMapPin, FiSend, FiCheckCircle, FiClock, FiLinkedin, FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { sendContact } from "@/lib/sendContact";

const contactInfo = [
  { icon: <FiMail size={20} />, label: "Email Us", value: "info@worceny.com", sub: "Reply within 2 hours", accent: "#865aff" },
  { icon: <FaWhatsapp size={20} />, label: "Call & WhatsApp", value: ["+91 81403 98723", "+91 91069 30388"], sub: "Mon-Sat, 9am-7pm IST", accent: "#25D366" },
  { icon: <FiMapPin size={20} />, label: "Office", value: "Surat, Gujarat, India", sub: "India — 395004", accent: "#865aff" },
  { icon: <FiClock size={20} />, label: "Working Hours", value: "Mon - Sat", sub: "9:00 AM - 7:00 PM IST", accent: "#5aff73" },
];

const socials = [
  { icon: <FiLinkedin size={17} />, label: "LinkedIn", href: "https://www.linkedin.com/company/worceny-infotech", accent: "#0077b5" },
  { icon: <FiGithub size={17} />, label: "GitHub", href: "https://github.com/WorcenyInfotech", accent: "#0e0e0e" },
];

const serviceOptions = ["Web Development","Frontend Development","Backend Development","Full Stack Development","UI/UX Design","Other"];
const budgets = ["< ₹50K","₹50K–1L","₹1L–3L","₹3L–5L","₹5L+","Discuss"];

export default function HomeContact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [focused, setFocused] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) return setErrors(errs);
    setLoading(true);
    setApiError("");
    const { success, error } = await sendContact(form);
    setLoading(false);
    if (!success) { setApiError(error); return; }
    setSent(true);
    setForm({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
    setErrors({});
    setTimeout(() => setSent(false), 6000);
  };

  const inputStyle = (key) => ({
    width: "100%", background: "var(--surface2)",
    border: `1px solid ${errors[key] ? "#ff5a5a" : focused === key ? "var(--accent)" : "var(--border)"}`,
    borderRadius: "12px", padding: "12px 16px", color: "var(--text)", outline: "none", transition: "border-color 0.3s", fontSize: "14px",
  });

  return (
    <section style={{ background: "var(--bg)" }} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-5"
            style={{ background: "rgba(134,90,255,0.1)", border: "1px solid rgba(134,90,255,0.28)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--accent2)" }} />
            <span className="text-sm font-semibold" style={{ color: "var(--accent)" }}>Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "var(--text)" }}>
            Let&apos;s Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
            Have a project in mind? Fill out the form below or reach out directly — we respond within 2 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {contactInfo.map((item, i) => (
            <motion.div key={item.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, boxShadow: `0 0 28px ${item.accent}18` }}
              className="rounded-2xl p-5 text-center cursor-default"
              style={{ background: "var(--card-bg)", border: "1px solid var(--border)" }}>
              <motion.div whileHover={{ scale: 1.2, rotate: 8 }} transition={{ type: "spring", stiffness: 400 }}
                className="w-11 h-11 rounded-xl mx-auto flex items-center justify-center mb-3"
                style={{ background: `${item.accent}14`, color: item.accent }}>
                {item.icon}
              </motion.div>
              <div className="text-xs mb-1" style={{ color: "var(--muted-card)" }}>{item.label}</div>
              <div className="text-xs font-semibold leading-tight mb-1" style={{ color: "var(--text-card)" }}>
                {Array.isArray(item.value) ? item.value.map((num, idx) => <p key={idx} className="break-all">{num}</p>) : <p className="break-all">{item.value}</p>}
              </div>
              <div className="text-xs" style={{ color: "var(--muted-card)", opacity: 0.7 }}>{item.sub}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div initial={{ opacity: 0, rotateY: -8 }} whileInView={{ opacity: 1, rotateY: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="lg:col-span-3">
            <div className="rounded-3xl p-8" style={{ background: "var(--card-bg)", border: "1px solid rgba(134,90,255,0.15)" }}>
              <h3 className="text-2xl font-black mb-1" style={{ color: "var(--text-card)" }}>Send Us a Message</h3>
              <p className="text-sm mb-8" style={{ color: "var(--muted-card)" }}>Fill in the details and we&apos;ll get back to you shortly.</p>
              {sent ? (
                <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", damping: 15 }}
                  className="flex flex-col items-center justify-center py-16 text-center">
                  <FiCheckCircle size={64} style={{ color: "var(--accent2)" }} className="mb-5" />
                  <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--text-card)" }}>Message Sent!</h3>
                  <p style={{ color: "var(--muted-card)" }}>We&apos;ll get back to you within 2 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm mb-2 block" style={{ color: "var(--muted-card)" }}>Full Name *</label>
                      <input type="text" value={form.name} placeholder="John Doe" onChange={(e) => setForm({ ...form, name: e.target.value })} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} style={inputStyle("name")} />
                      {errors.name && <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-xs mt-1" style={{ color: "#ff5a5a" }}>{errors.name}</motion.p>}
                    </div>
                    <div>
                      <label className="text-sm mb-2 block" style={{ color: "var(--muted-card)" }}>Email Address *</label>
                      <input type="email" value={form.email} placeholder="john@example.com" onChange={(e) => setForm({ ...form, email: e.target.value })} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} style={inputStyle("email")} />
                      {errors.email && <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-xs mt-1" style={{ color: "#ff5a5a" }}>{errors.email}</motion.p>}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm mb-2 block" style={{ color: "var(--muted-card)" }}>Phone Number</label>
                      <input type="tel" value={form.phone} placeholder="+91 98765 43210" onChange={(e) => setForm({ ...form, phone: e.target.value })} onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)} style={inputStyle("phone")} />
                    </div>
                    <div>
                      <label className="text-sm mb-2 block" style={{ color: "var(--muted-card)" }}>Service Needed</label>
                      <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} onFocus={() => setFocused("service")} onBlur={() => setFocused(null)}
                        style={{ ...inputStyle("service"), cursor: "pointer", color: form.service ? "var(--text)" : "#888" }}>
                        <option value="" disabled style={{ background: "#1a1a2e", color: "#888" }}>Select a service</option>
                        {serviceOptions.map((s) => <option key={s} value={s} style={{ background: "#1a1a2e", color: "#fff" }}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm mb-3 block" style={{ color: "var(--muted-card)" }}>Project Budget</label>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                      {budgets.map((b) => (
                        <motion.button key={b} type="button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                          onClick={() => setForm({ ...form, budget: b })}
                          className="py-2 px-2 rounded-xl text-xs font-medium transition-all duration-200"
                          style={form.budget === b ? { background: "rgba(134,90,255,0.2)", border: "1px solid var(--accent)", color: "var(--accent)" } : { background: "var(--surface2)", border: "1px solid var(--border)", color: "var(--muted)" }}>
                          {b}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm mb-2 block" style={{ color: "var(--muted-card)" }}>Project Details *</label>
                    <textarea rows={5} value={form.message} placeholder="Tell us about your project, goals, timeline..." onChange={(e) => setForm({ ...form, message: e.target.value })} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} style={{ ...inputStyle("message"), resize: "none" }} />
                    {errors.message && <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-xs mt-1" style={{ color: "#ff5a5a" }}>{errors.message}</motion.p>}
                  </div>
                  {apiError && (
                    <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-xs text-center" style={{ color: "#ff5a5a" }}>
                      {apiError}
                    </motion.p>
                  )}
                  <motion.button type="submit" disabled={loading} whileHover={{ scale: loading ? 1 : 1.02, boxShadow: loading ? "none" : "0 0 36px rgba(134,90,255,0.5)" }} whileTap={{ scale: loading ? 1 : 0.97 }}
                    className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 text-base transition-all duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{ background: "var(--accent)", color: "#fff" }}>
                    {loading ? (
                      <><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Sending...</>
                    ) : (
                      <><FiSend size={16} /> Send Message</>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-2 flex flex-col gap-5">
            <div className="rounded-3xl p-7" style={{ background: "var(--card-bg)", border: "1px solid rgba(134,90,255,0.12)" }}>
              <h3 className="text-xl font-bold mb-5" style={{ color: "var(--text-card)" }}>Why Choose Us?</h3>
              <div className="space-y-4">
                {[{ title: "Fast Delivery", desc: "On time, every time." }, { title: "Clean Code", desc: "Scalable & well-documented." }, { title: "Transparent Pricing", desc: "No hidden costs. Fixed quotes." }, { title: "24/7 Support", desc: "We're always here for you." }, { title: "Modern Tech Stack", desc: "React, Node.js, Next.js & more." }].map((item, i) => (
                  <motion.div key={item.title} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.08 }} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(134,90,255,0.15)" }}>
                      <span className="w-2 h-2 rounded-full" style={{ background: "var(--accent)" }} />
                    </span>
                    <div>
                      <div className="text-sm font-semibold" style={{ color: "var(--text-card)" }}>{item.title}</div>
                      <div className="text-xs" style={{ color: "var(--muted-card)" }}>{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl p-7" style={{ background: "var(--card-bg)", border: "1px solid rgba(134,90,255,0.12)" }}>
              <h3 className="text-xl font-bold mb-5" style={{ color: "var(--text-card)" }}>Follow Us</h3>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((s, i) => (
                  <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }} whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300"
                    style={{ background: "var(--surface2)", border: "1px solid var(--border)" }}>
                    <span style={{ color: s.accent }}>{s.icon}</span>
                    <span className="text-sm" style={{ color: "var(--muted)" }}>{s.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} className="rounded-3xl p-6 text-center"
              style={{ background: "var(--card-bg)", border: "1px solid rgba(134,90,255,0.2)" }}>
              <div className="text-4xl font-black mb-1" style={{ color: "var(--text-card)" }}>2 hrs</div>
              <div className="text-sm" style={{ color: "var(--muted-card)" }}>Average Response Time</div>
              <div className="mt-3 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--accent2)" }} />
                <span className="text-xs" style={{ color: "var(--accent2)" }}>Currently Online</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
