"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight, Sparkles } from "lucide-react";
import { services } from "../data/servicesData";
import { industries } from "../data/industriesData";
import { techGroups } from "../data/technologiesData";

const simpleLinks = [
  { label: "Home", href: "/", section: "home" },
  { label: "About", href: "/", section: "about" },
];

const megaKeys = ["services", "industries", "technologies"];

const portfolioContactLinks = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(null);
  const [mobileMega, setMobileMega] = useState(null);
  const [activeLink, setActiveLink] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const megaLeaveTimer = useRef(null);
  const navRef = useRef(null);

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (pathname === "/contact") {
      setActiveLink("Contact");
    } else if (pathname === "/portfolio") {
      setActiveLink("Portfolio");
    } else if (pathname.startsWith("/services")) {
      setActiveLink("Services");
    } else if (pathname.startsWith("/industries")) {
      setActiveLink("Industries");
    } else if (pathname.startsWith("/technologies")) {
      setActiveLink("Technologies");
    } else {
      setActiveLink("Home");
    }
    setMegaOpen(null);
    setMobileMega(null);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onDoc = (e) => {
      if (!navRef.current?.contains(e.target)) {
        setMegaOpen(null);
      }
    };
    document.addEventListener("pointerdown", onDoc);
    return () => document.removeEventListener("pointerdown", onDoc);
  }, []);

  const clearMegaLeave = () => {
    if (megaLeaveTimer.current) {
      clearTimeout(megaLeaveTimer.current);
      megaLeaveTimer.current = null;
    }
  };

  const scheduleMegaClose = () => {
    clearMegaLeave();
    megaLeaveTimer.current = setTimeout(() => setMegaOpen(null), 160);
  };

  // Fixed: Removed TypeScript type annotation
  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const handleNav = (link) => {
    setMenuOpen(false);
    setMegaOpen(null);
    if (link.section) {
      if (pathname !== "/") {
        setTimeout(
          () =>
            document
              .getElementById(link.section)
              ?.scrollIntoView({ behavior: "smooth" }),
          320
        );
      } else {
        document
          .getElementById(link.section)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const goMega = (path) => {
    setMegaOpen(null);
    setMenuOpen(false);
    setMobileMega(null);
  };

  const megaLabel = (key) =>
    key === "services"
      ? "Services"
      : key === "industries"
        ? "Industries"
        : "Technologies";

  const megaPath =
    megaOpen === "services"
      ? "/services"
      : megaOpen === "industries"
        ? "/industries"
        : "/technologies";

  const topBarSolid = !isHome || isScrolled;

  return (
    <>
      <motion.header
        ref={navRef}
        className="fixed top-0 right-0 left-0 z-50"
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -120 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Top promo bar */}
        <div
          className={`hidden border-b transition-colors md:block ${
            topBarSolid
              ? "border-rose-gold/15 bg-rose-gold text-white"
              : "border-white/10 bg-rose-gold/85 text-white backdrop-blur-md"
          }`}
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 font-medium tracking-wide">
              <Sparkles size={12} className="text-blush" />
              <span>{"Worceny Infotech — IT & Web Services in Surat"}</span>
            </div>
            <div className="flex items-center gap-3 text-white/95">
              <a href="tel:+919876543210" className="flex items-center gap-1.5 transition hover:text-blush">
                <span className="font-semibold">+91 98765 43210</span>
              </a>
              <span className="text-white/40">|</span>
              <span className="text-white/85">Mon–Sat 9AM–6PM</span>
            </div>
          </div>
        </div>

        {/* Main navbar */}
        <div className="border-b border-rose-gold/10 bg-white shadow-sm backdrop-blur-xl transition-all duration-300">
          <div
            className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8"
            onMouseLeave={scheduleMegaClose}
          >
            <Link
              href="/"
              className="group cursor-pointer flex items-center shrink-0"
              onMouseEnter={() => {
                clearMegaLeave();
                setMegaOpen(null);
              }}
              onClick={() => handleNav({ href: "/", section: "home" })}
            >
              <picture>
                <source media="(max-width: 767px)" srcSet="/logo-mobile.png" />
                <img
                  src="/logo.png"
                  alt="Worceny Infotech — IT & web services in Surat"
                  className="h-8 object-contain"
                />
              </picture>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 lg:flex">
              {simpleLinks.map((link) => {
                const isActiveLink = activeLink === link.label;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="relative rounded-full px-4 py-2 text-sm font-medium text-ink/80 transition hover:bg-blush/60 hover:text-rose-gold"
                    onMouseEnter={() => {
                      clearMegaLeave();
                      setMegaOpen(null);
                    }}
                    onClick={() => handleNav(link)}
                  >
                    {link.label}
                    {(isActiveLink || pathname === link.href) && (
                      <motion.span
                        layoutId="navbar-indicator"
                        className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-rose-gold"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}

              {megaKeys.map((key) => {
                const label = megaLabel(key);
                const isActiveMega = activeLink === label;
                const open = megaOpen === key;
                return (
                  <div
                    key={key}
                    className="relative"
                    onMouseEnter={() => {
                      clearMegaLeave();
                      setMegaOpen(key);
                    }}
                  >
                    <Link
                      href={megaPath}
                      className="relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition hover:bg-blush/60"
                      style={{
                        color: isActiveMega || open ? "var(--rose-gold)" : "var(--ink)/80",
                      }}
                      aria-expanded={open}
                      aria-haspopup="true"
                    >
                      {label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                      />
                      {(isActiveMega || open) && (
                        <motion.span
                          layoutId="navbar-indicator"
                          className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-rose-gold"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  </div>
                );
              })}

              {portfolioContactLinks.map((link) => {
                const isActiveLink = activeLink === link.label;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="relative rounded-full px-4 py-2 text-sm font-medium text-ink/80 transition hover:bg-blush/60 hover:text-rose-gold"
                    onMouseEnter={() => {
                      clearMegaLeave();
                      setMegaOpen(null);
                    }}
                  >
                    {link.label}
                    {isActiveLink && (
                      <motion.span
                        layoutId="navbar-indicator"
                        className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-rose-gold"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden items-center gap-2 rounded-full bg-rose-gold px-5 py-2.5 text-sm font-semibold text-white shadow-glow-rose transition hover:bg-rose-gold-deep hover:shadow-luxury-hover sm:inline-flex"
                onMouseEnter={() => {
                  clearMegaLeave();
                  setMegaOpen(null);
                }}
              >
                <span>Get Started</span>
                <Sparkles size={14} className="opacity-90" />
              </Link>

              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="rounded-2xl border border-rose-gold/15 bg-blush/50 p-2.5 text-ink transition hover:bg-blush lg:hidden"
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={{ rotate: menuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </button>
            </div>
          </div>

          {/* Desktop megamenu */}
          <AnimatePresence>
            {megaOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="hidden md:block absolute left-0 right-0 top-full z-40 px-6 sm:px-8 pt-2 pb-5"
                onMouseEnter={clearMegaLeave}
              >
                <div className="mx-auto max-w-7xl">
                  <div
                    className="rounded-2xl border shadow-xl overflow-hidden"
                    style={{
                      background: "#ffffff",
                      borderColor: "rgba(45,77,202,0.12)",
                      boxShadow: "0 24px 60px rgba(15,23,42,0.12)",
                    }}
                  >
                    <div className="p-6 lg:p-8">
                      {megaOpen === "services" && (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                          {services.map((s) => (
                            <Link
                              key={s.id}
                              href={`/services/${s.id}`}
                              className="text-left rounded-xl px-3 py-2.5 transition-colors hover:bg-[rgba(45,77,202,0.06)]"
                              onClick={() => goMega(`/services/${s.id}`)}
                            >
                              <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                                {s.title}
                              </div>
                              <div className="text-xs mt-0.5 line-clamp-2" style={{ color: "var(--muted-card)" }}>
                                {s.subtitle}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                      {megaOpen === "industries" && (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-[min(70vh,420px)] overflow-y-auto pr-1">
                          {industries.map((ind) => (
                            <Link
                              key={ind.id}
                              href={`/industries/${ind.id}`}
                              className="text-left rounded-xl px-3 py-2.5 transition-colors hover:bg-[rgba(45,77,202,0.06)]"
                              onClick={() => goMega(`/industries/${ind.id}`)}
                            >
                              <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                                {ind.title}
                              </div>
                              <div className="text-xs mt-0.5 line-clamp-2" style={{ color: "var(--muted-card)" }}>
                                {ind.subtitle}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                      {megaOpen === "technologies" && (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 max-h-[min(72vh,520px)] overflow-y-auto pr-1">
                          {techGroups.map((g) => (
                            <div key={g.id} className="min-w-0">
                              <Link
                                href={`/technologies/${g.id}`}
                                className="text-left w-full rounded-lg px-1 py-1 mb-2 transition-colors hover:bg-[rgba(40,77,202,0.08)]"
                                onClick={() => goMega(`/technologies/${g.id}`)}
                              >
                                <div className="text-sm font-black leading-tight" style={{ color: "var(--text)" }}>
                                  {g.label}
                                </div>
                                <div className="text-[11px] mt-0.5 line-clamp-2" style={{ color: "var(--muted-card)" }}>
                                  {g.subtitle}
                                </div>
                              </Link>
                              <ul
                                className="space-y-0.5 border-t pt-2"
                                style={{ borderColor: "rgba(45,77,202,0.1)" }}
                              >
                                {g.techs.map((t) => (
                                  <li key={`${g.id}-${t.slug}`}>
                                    <Link
                                      href={`/technologies/${g.id}/${t.slug}`}
                                      className="w-full text-left text-xs py-1.5 px-2 rounded-md transition-colors hover:bg-[rgba(45,77,202,0.08)]"
                                      onClick={() => goMega(`/technologies/${g.id}/${t.slug}`)}
                                      style={{ color: "var(--text)" }}
                                    >
                                      {t.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                      <div
                        className="mt-5 pt-4 flex justify-end border-t"
                        style={{ borderColor: "rgba(45,77,202,0.1)" }}
                      >
                        <Link
                          href={megaPath}
                          className="text-sm font-bold"
                          style={{ color: "var(--accent)" }}
                          onClick={() => goMega(megaPath)}
                        >
                          View all {megaLabel(megaOpen).toLowerCase()} →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-rose-gold/35 to-transparent opacity-100" />
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 z-50 flex h-full w-[min(100%,380px)] flex-col border-l border-rose-gold/15 bg-cream shadow-luxury lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
            >
              <div className="h-1.5 bg-gradient-to-r from-blush via-rose-gold to-blush" />

              <div className="flex items-center justify-between border-b border-rose-gold/10 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-gold to-rose-gold-deep font-display text-lg font-bold text-white shadow-md">
                    <span>W</span>
                  </div>
                  <div>
                    <div className="font-display text-lg font-semibold text-ink">Worceny Infotech</div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-rose-gold">
                      IT & Web Services
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl border border-rose-gold/20 p-2 text-ink transition hover:bg-blush"
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-6">
                {simpleLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.12 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-medium transition ${
                        activeLink === link.label
                          ? "bg-blush text-rose-gold-deep shadow-sm"
                          : "text-ink/85 hover:bg-blush/50 hover:text-rose-gold"
                      }`}
                      onClick={() => handleNav(link)}
                    >
                      <span>{link.label}</span>
                      {activeLink === link.label && (
                        <span className="h-2 w-2 rounded-full bg-rose-gold shadow-glow-rose" />
                      )}
                    </Link>
                  </motion.div>
                ))}

                {megaKeys.map((key, mi) => {
                  const label = megaLabel(key);
                  const expanded = mobileMega === key;
                  const basePath =
                    key === "services"
                      ? "/services"
                      : key === "industries"
                        ? "/industries"
                        : "/technologies";
                  const items =
                    key === "services"
                      ? services
                      : key === "industries"
                        ? industries
                        : techGroups;

                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (simpleLinks.length + mi) * 0.06 + 0.12 }}
                      className="rounded-lg overflow-hidden"
                      style={{
                        background: expanded ? "rgba(255,255,255,0.06)" : "transparent",
                      }}
                    >
                      <div className="flex items-center">
                        <Link
                          href={basePath}
                          className={`flex-1 text-left py-3.5 px-4 text-[15px] font-medium transition ${
                            activeLink === label && !expanded
                              ? "bg-blush text-rose-gold-deep"
                              : "text-ink/85 hover:bg-blush/50 hover:text-rose-gold"
                          }`}
                        >
                          {label}
                        </Link>
                        <button
                          type="button"
                          aria-expanded={expanded}
                          className="p-2.5 pr-3"
                          onClick={() => setMobileMega(expanded ? null : key)}
                          style={{ color: "rgba(255,255,255,0.7)" }}
                        >
                          <ChevronRight
                            size={18}
                            className={`transition-transform ${expanded ? "rotate-90" : ""}`}
                          />
                        </button>
                      </div>
                      <AnimatePresence>
                        {expanded && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-3 pb-2 space-y-1 overflow-hidden"
                          >
                            {key === "technologies"
                              ? techGroups.flatMap((g) => [
                                  <li key={`h-${g.id}`} className="pt-1 pb-0.5">
                                    <span
                                      className="px-4 text-[10px] font-bold uppercase tracking-wider"
                                      style={{ color: "rgba(255,255,255,0.45)" }}
                                    >
                                      {g.label}
                                    </span>
                                  </li>,
                                  ...g.techs.map((t) => (
                                    <li key={`${g.id}-${t.slug}`}>
                                      <Link
                                        href={`/technologies/${g.id}/${t.slug}`}
                                        className="block w-full text-left py-1.5 px-4 rounded-md text-xs text-ink/80 hover:bg-blush/50 hover:text-rose-gold"
                                        onClick={() => setMenuOpen(false)}
                                      >
                                        {t.name}
                                      </Link>
                                    </li>
                                  )),
                                  <li key={`a-${g.id}`} className="pb-1">
                                    <Link
                                      href={`/technologies/${g.id}`}
                                      className="block w-full text-left py-1.5 px-4 rounded-md text-[11px] font-semibold text-rose-gold"
                                      onClick={() => setMenuOpen(false)}
                                    >
                                      {g.label} — overview →
                                    </Link>
                                  </li>,
                                ])
                              : items.map((item) => {
                                  const id = item.id;
                                  const title = "title" in item ? item.title : item.label;
                                  return (
                                    <li key={id}>
                                      <Link
                                        href={`${basePath}/${id}`}
                                        className="block w-full text-left py-2 px-4 rounded-md text-xs text-ink/75 hover:bg-blush/50 hover:text-rose-gold"
                                        onClick={() => setMenuOpen(false)}
                                      >
                                        {title}
                                      </Link>
                                    </li>
                                  );
                                })}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}

                {portfolioContactLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: (simpleLinks.length + megaKeys.length + i) * 0.06 + 0.12,
                    }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-medium transition ${
                        activeLink === link.label
                          ? "bg-blush text-rose-gold-deep shadow-sm"
                          : "text-ink/85 hover:bg-blush/50 hover:text-rose-gold"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span>{link.label}</span>
                      {activeLink === link.label && (
                        <span className="h-2 w-2 rounded-full bg-rose-gold shadow-glow-rose" />
                      )}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: (simpleLinks.length + megaKeys.length + 2) * 0.06 + 0.12,
                  }}
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 rounded-2xl bg-rose-gold py-3.5 text-sm font-semibold text-white shadow-glow-rose transition hover:bg-rose-gold-deep"
                    onClick={() => setMenuOpen(false)}
                  >
                    <Sparkles size={16} />
                    Get Started
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
