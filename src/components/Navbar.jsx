import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { services } from "../data/servicesData";
import { industries } from "../data/industriesData";
import { techGroups } from "../data/technologiesData";

const simpleLinks = [
  { label: "Home", path: "/", section: "home" },
  { label: "About", path: "/", section: "about" },
];

const megaKeys = ["services", "industries", "technologies"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(null);
  const [mobileMega, setMobileMega] = useState(null);
  const [activeLink, setActiveLink] = useState("Home");
  const location = useLocation();
  const navigate = useNavigate();
  const megaLeaveTimer = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    if (location.pathname === "/contact") {
      setActiveLink("Contact");
    } else if (location.pathname === "/portfolio") {
      setActiveLink("Portfolio");
    } else if (location.pathname.startsWith("/services")) {
      setActiveLink("Services");
    } else if (location.pathname.startsWith("/industries")) {
      setActiveLink("Industries");
    } else if (location.pathname.startsWith("/technologies")) {
      setActiveLink("Technologies");
    } else {
      setActiveLink("Home");
    }
  }, [location.pathname]);

  useEffect(() => {
    setMegaOpen(null);
    setMobileMega(null);
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      if (location.pathname !== "/") {
        return;
      }
      const pos = window.scrollY + 120;
      ["home", "about"].forEach((id) => {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop) {
          setActiveLink(id.charAt(0).toUpperCase() + id.slice(1));
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

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

  const handleNav = (link) => {
    setMenuOpen(false);
    setMegaOpen(null);
    if (link.section) {
      if (location.pathname !== "/") {
        navigate("/");
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
    } else {
      navigate(link.path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goMega = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
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

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white`}
    >
      <div className="relative" onMouseLeave={scheduleMegaClose}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between gap-6">
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="cursor-pointer flex items-center shrink-0"
            onMouseEnter={() => {
              clearMegaLeave();
              setMegaOpen(null);
            }}
            onClick={() => handleNav({ path: "/", section: "home" })}
          >
            <picture>
              <source media="(max-width: 767px)" srcSet="/logo-mobile.png" />
              <img
                src="/logo.png"
                alt="Worceny Infotech — IT & web services in Surat"
                className="h-8 object-contain"
              />
            </picture>
          </motion.div>

          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {simpleLinks.map((link) => {
              const isActive = activeLink === link.label;
              return (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link)}
                    onMouseEnter={() => {
                      clearMegaLeave();
                      setMegaOpen(null);
                    }}
                    className="relative py-1 text-sm font-medium group cursor-pointer"
                  >
                    <span
                      className="transition-colors duration-300"
                      style={{
                        color: isActive ? "var(--accent)" : "var(--muted)",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.target.style.color = "var(--text)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.target.style.color = "var(--muted)";
                        }
                      }}
                    >
                      {link.label}
                    </span>
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-px rounded-full"
                      style={{ background: "var(--accent)" }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scaleX: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <span
                      className="absolute -bottom-1 left-0 w-0 h-px rounded-full group-hover:w-full transition-all duration-300"
                      style={{ background: "rgba(134,90,255,0.4)" }}
                    />
                  </button>
                </li>
              );
            })}

            {megaKeys.map((key) => {
              const label = megaLabel(key);
              const isActive = activeLink === label;
              const open = megaOpen === key;
              return (
                <li
                  key={key}
                  className="relative"
                  onMouseEnter={() => {
                    clearMegaLeave();
                    setMegaOpen(key);
                  }}
                >
                  <button
                    type="button"
                    className="relative py-1 text-sm font-medium group cursor-pointer flex items-center gap-1"
                    onClick={() =>
                      goMega(
                        key === "services"
                          ? "/services"
                          : key === "industries"
                            ? "/industries"
                            : "/technologies"
                      )
                    }
                    aria-expanded={open}
                    aria-haspopup="true"
                  >
                    <span
                      className="transition-colors duration-300"
                      style={{
                        color:
                          isActive || open ? "var(--accent)" : "var(--muted)",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive && !open) {
                          e.target.style.color = "var(--text)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive && !open) {
                          e.target.style.color = "var(--muted)";
                        }
                      }}
                    >
                      {label}
                    </span>
                    <FiChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                      style={{
                        color:
                          isActive || open ? "var(--accent)" : "var(--muted)",
                      }}
                    />
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-px rounded-full"
                      style={{ background: "var(--accent)" }}
                      animate={{
                        opacity: isActive || open ? 1 : 0,
                        scaleX: isActive || open ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </li>
              );
            })}

            {[
              { label: "Portfolio", path: "/portfolio", section: null },
              { label: "Contact", path: "/contact", section: null },
            ].map((link) => {
              const isActive = activeLink === link.label;
              return (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link)}
                    onMouseEnter={() => {
                      clearMegaLeave();
                      setMegaOpen(null);
                    }}
                    className="relative py-1 text-sm font-medium group cursor-pointer"
                  >
                    <span
                      className="transition-colors duration-300"
                      style={{
                        color: isActive ? "var(--accent)" : "var(--muted)",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.target.style.color = "var(--text)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.target.style.color = "var(--muted)";
                        }
                      }}
                    >
                      {link.label}
                    </span>
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-px rounded-full"
                      style={{ background: "var(--accent)" }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scaleX: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <span
                      className="absolute -bottom-1 left-0 w-0 h-px rounded-full group-hover:w-full transition-all duration-300"
                      style={{ background: "rgba(134,90,255,0.4)" }}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:flex items-center shrink-0">
            <motion.button
              whileHover={{
                scale: 1.06,
                boxShadow: "0 0 28px rgba(134,90,255,0.55)",
              }}
              whileTap={{ scale: 0.94 }}
              onMouseEnter={() => {
                clearMegaLeave();
                setMegaOpen(null);
              }}
              onClick={() => {
                navigate("/contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              Get Started →
            </motion.button>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-2xl"
            style={{ color: "var(--accent)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={menuOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="block"
              >
                {menuOpen ? <HiX /> : <HiMenuAlt3 />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>

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
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => goMega(`/services/${s.id}`)}
                            className="text-left rounded-xl px-3 py-2.5 transition-colors hover:bg-[rgba(45,77,202,0.06)] cursor-pointer"
                          >
                            <div
                              className="text-sm font-semibold"
                              style={{ color: "var(--text)" }}
                            >
                              {s.title}
                            </div>
                            <div
                              className="text-xs mt-0.5 line-clamp-2"
                              style={{ color: "var(--muted-card)" }}
                            >
                              {s.subtitle}
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                    {megaOpen === "industries" && (
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-[min(70vh,420px)] overflow-y-auto pr-1">
                        {industries.map((ind) => (
                          <button
                            key={ind.id}
                            type="button"
                            onClick={() => goMega(`/industries/${ind.id}`)}
                            className="text-left rounded-xl px-3 py-2.5 transition-colors hover:bg-[rgba(45,77,202,0.06)] cursor-pointer"
                          >
                            <div
                              className="text-sm font-semibold"
                              style={{ color: "var(--text)" }}
                            >
                              {ind.title}
                            </div>
                            <div
                              className="text-xs mt-0.5 line-clamp-2"
                              style={{ color: "var(--muted-card)" }}
                            >
                              {ind.subtitle}
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                    {megaOpen === "technologies" && (
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 max-h-[min(72vh,520px)] overflow-y-auto pr-1">
                        {techGroups.map((g) => (
                          <div key={g.id} className="min-w-0">
                            <button
                              type="button"
                              onClick={() => goMega(`/technologies/${g.id}`)}
                              className="text-left w-full rounded-lg px-1 py-1 mb-2 transition-colors hover:bg-[rgba(40,77,202,0.08)] cursor-pointer"
                            >
                              <div
                                className="text-sm font-black leading-tight"
                                style={{ color: "var(--text)" }}
                              >
                                {g.label}
                              </div>
                              <div
                                className="text-[11px] mt-0.5 line-clamp-2"
                                style={{ color: "var(--muted-card)" }}
                              >
                                {g.subtitle}
                              </div>
                            </button>
                            <ul
                              className="space-y-0.5 border-t pt-2"
                              style={{ borderColor: "rgba(45,77,202,0.1)" }}
                            >
                              {g.techs.map((t) => (
                                <li key={`${g.id}-${t.slug}`}>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      goMega(`/technologies/${g.id}/${t.slug}`)
                                    }
                                    className="w-full text-left text-xs py-1.5 px-2 rounded-md transition-colors hover:bg-[rgba(45,77,202,0.08)] cursor-pointer"
                                    style={{ color: "var(--text)" }}
                                  >
                                    {t.name}
                                  </button>
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
                      <button
                        type="button"
                        onClick={() => goMega(megaPath)}
                        className="text-sm font-bold cursor-pointer"
                        style={{ color: "var(--accent)" }}
                      >
                        View all {megaLabel(megaOpen).toLowerCase()} →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden max-h-[85vh] overflow-y-auto"
            style={{
              background: "rgba(17,17,20,0.95)",
              borderTop: "1px solid rgba(134,90,255,0.12)",
            }}
          >
            <ul className="flex flex-col px-6 py-5 gap-1">
              {simpleLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <button
                    onClick={() => handleNav(link)}
                    className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer"
                    style={{
                      color:
                        activeLink === link.label
                          ? "var(--accent)"
                          : "rgba(255,255,255,0.72)",
                      background:
                        activeLink === link.label
                          ? "var(--surface)"
                          : "transparent",
                    }}
                  >
                    {link.label}
                  </button>
                </motion.li>
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
                  <motion.li
                    key={key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (simpleLinks.length + mi) * 0.06 }}
                    className="rounded-lg overflow-hidden"
                    style={{
                      background: expanded
                        ? "rgba(255,255,255,0.06)"
                        : "transparent",
                    }}
                  >
                    <div className="flex items-center">
                      <button
                        onClick={() => goMega(basePath)}
                        className="flex-1 text-left py-2.5 px-3 text-sm font-medium cursor-pointer"
                        style={{
                          color:
                            activeLink === label && !expanded
                              ? "var(--accent)"
                              : "rgba(255,255,255,0.9)",
                        }}
                      >
                        {label}
                      </button>
                      <button
                        type="button"
                        aria-expanded={expanded}
                        className="p-2.5 pr-3 cursor-pointer"
                        onClick={() => setMobileMega(expanded ? null : key)}
                        style={{ color: "rgba(255,255,255,0.7)" }}
                      >
                        <FiChevronRight
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
                                    className="px-3 text-[10px] font-bold uppercase tracking-wider"
                                    style={{ color: "rgba(255,255,255,0.45)" }}
                                  >
                                    {g.label}
                                  </span>
                                </li>,
                                ...g.techs.map((t) => (
                                  <li key={`${g.id}-${t.slug}`}>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        goMega(`${basePath}/${g.id}/${t.slug}`)
                                      }
                                      className="w-full text-left py-1.5 px-3 rounded-md text-xs cursor-pointer"
                                      style={{ color: "rgba(255,255,255,0.8)" }}
                                    >
                                      {t.name}
                                    </button>
                                  </li>
                                )),
                                <li key={`a-${g.id}`} className="pb-1">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      goMega(`${basePath}/${g.id}`)
                                    }
                                    className="w-full text-left py-1.5 px-3 rounded-md text-[11px] font-semibold cursor-pointer"
                                    style={{ color: "var(--accent)" }}
                                  >
                                    {g.label} — overview →
                                  </button>
                                </li>,
                              ])
                            : items.map((item) => {
                                const id = item.id;
                                const title =
                                  "title" in item ? item.title : item.label;
                                return (
                                  <li key={id}>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        goMega(`${basePath}/${id}`)
                                      }
                                      className="w-full text-left py-2 px-3 rounded-md text-xs cursor-pointer"
                                      style={{
                                        color: "rgba(255,255,255,0.75)",
                                      }}
                                    >
                                      {title}
                                    </button>
                                  </li>
                                );
                              })}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              })}

              {[
                { label: "Portfolio", path: "/portfolio", section: null },
                { label: "Contact", path: "/contact", section: null },
              ].map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: (simpleLinks.length + megaKeys.length + i) * 0.06,
                  }}
                >
                  <button
                    onClick={() => handleNav(link)}
                    className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer"
                    style={{
                      color:
                        activeLink === link.label
                          ? "var(--accent)"
                          : "rgba(255,255,255,0.72)",
                      background:
                        activeLink === link.label
                          ? "var(--surface)"
                          : "transparent",
                    }}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: (simpleLinks.length + megaKeys.length + 2) * 0.06,
                }}
              >
                <button
                  onClick={() => {
                    navigate("/contact");
                    window.scrollTo({ top: 0 });
                    setMenuOpen(false);
                  }}
                  className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-bold mt-2 cursor-pointer"
                  style={{
                    color: "var(--surface)",
                    background: "var(--accent)",
                  }}
                >
                  Get Started →
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
