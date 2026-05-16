/** Footer brand + contact lines (static copy). */
export const footerBrand = {
  tagline:
    "Surat-based IT & web company — modern websites, apps, and software for businesses in Gujarat and worldwide.",
  email: "info@worceny.com",
  /** First number matches previous footer primary ordering. */
  phones: ["+91 91069 30388", "+91 81403 98723"],
  address: "Surat, Gujarat, India",
};

/**
 * Footer navigation — resolved in `Footer.jsx` (scroll vs route vs external).
 * `connectIcon`: which react-icons/fa icon to show for Connect column rows.
 */
export const footerNavColumns = {
  Company: [
    { label: "About", kind: "homeSection", sectionId: "about" },
    { label: "Services", kind: "path", path: "/services" },
    { label: "Industries", kind: "path", path: "/industries" },
    { label: "Technologies", kind: "path", path: "/technologies" },
    { label: "Portfolio", kind: "path", path: "/portfolio" },
    { label: "Contact", kind: "path", path: "/contact" },
  ],
  Services: [
    { label: "Web Development", path: "/services/website" },
    { label: "Frontend Development", path: "/services/frontend" },
    { label: "Backend Development", path: "/services/backend" },
    { label: "Web Hosting", path: "/services/hosting" },
    { label: "SEO Optimization", path: "/services/seo" },
  ],
  Connect: [
    {
      label: "LinkedIn",
      connectIcon: "linkedin",
      href: "https://www.linkedin.com/company/worceny-infotech",
    },
    {
      label: "GitHub",
      connectIcon: "github",
      href: "https://github.com/WorcenyInfotech",
    },
  ],
};

export const footerCta = {
  headline: "Have a project in mind?",
  buttonLabel: "Let's Talk",
  path: "/contact",
};

export const footerLegal = {
  companyName: "Worceny Infotech",
  creditLine: "Designed with ❤️ by Worceny Infotech",
};
