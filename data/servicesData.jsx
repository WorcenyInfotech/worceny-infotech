import {
  FiLayout,
  FiServer,
  FiTrendingUp,
  FiMessageCircle,
  FiGlobe,
  FiCloud,
} from "react-icons/fi";

export const services = [
  {
    id: "website",
    icon: <FiGlobe size={36} />,
    iconSmall: <FiGlobe size={22} />,
    title: "Website Development",
    subtitle: "Your Digital Presence, Perfected",
    desc: "We craft high-performance websites that convert visitors into customers.",
    longDesc: `A great website is your most powerful sales tool. We design and develop fast, secure, and conversion-optimized websites, from wireframing to deployment.`,
    features: [
      "Custom UI/UX Design",
      "Mobile Responsive",
      "SEO Ready",
      "Fast Load Speed",
      "CMS Integration",
      "Cross-browser Compatible",
    ],
    tags: ["HTML/CSS", "React", "WordPress", "Next.js"],
    technologies: [
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "WordPress",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Vercel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      },
    ],
    accent: "#6C5CE7",
    number: "01",
    process: [
      {
        step: "01",
        title: "Discovery",
        desc: "Analyze business goals and audience.",
      },
      { step: "02", title: "Design", desc: "Wireframes and mockups." },
      { step: "03", title: "Development", desc: "Clean, scalable code." },
      {
        step: "04",
        title: "Launch",
        desc: "Testing, optimization, deployment.",
      },
    ],
    faqs: [
      {
        q: "Website build duration?",
        a: "Standard: 2–4 weeks. Complex: 6–10 weeks.",
      },
      {
        q: "Maintenance offered?",
        a: "Yes, with updates, backups, and monitoring.",
      },
      { q: "Mobile-friendly?", a: "All websites are fully responsive." },
    ],
    stats: [
      { v: "50+", l: "Sites Built" },
      { v: "99%", l: "Uptime" },
      { v: "2x", l: "Faster Load" },
      { v: "100%", l: "Responsive" },
    ],
  },
  {
    id: "seo",
    icon: <FiTrendingUp size={36} />,
    iconSmall: <FiTrendingUp size={22} />,
    title: "SEO Optimization",
    subtitle: "Rank Higher, Grow Faster",
    desc: "Improve your search ranking and drive organic traffic.",
    longDesc: `Holistic SEO approach: audits, keyword strategy, technical and on-page optimization for sustainable growth.`,
    features: [
      "Technical Audit",
      "On-Page Optimization",
      "Core Web Vitals",
      "Schema Markup",
      "Keyword Research",
      "Reporting",
    ],
    tags: ["Google Analytics", "Search Console", "Lighthouse", "SEMrush"],
    technologies: [
      {
        name: "Google Analytics",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
      },
      {
        name: "Search Console",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
      },
      {
        name: "Chrome DevTools",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
    ],
    accent: "#FF6B6B",
    number: "02",
    process: [
      { step: "01", title: "Audit", desc: "Identify gaps and opportunities." },
      {
        step: "02",
        title: "Strategy",
        desc: "Keyword and competitor analysis.",
      },
      { step: "03", title: "Optimize", desc: "Implement optimizations." },
      { step: "04", title: "Monitor", desc: "Rank tracking and reporting." },
    ],
    faqs: [
      { q: "Results timeline?", a: "3–6 months for measurable results." },
      {
        q: "Guarantee first-page?",
        a: "No guarantees; focus on sustainable growth.",
      },
      {
        q: "Monthly report includes?",
        a: "Traffic, ranks, Core Web Vitals, backlinks, optimizations.",
      },
    ],
    stats: [
      { v: "3x", l: "Traffic Growth" },
      { v: "90+", l: "Lighthouse Score" },
      { v: "50+", l: "Keywords Ranked" },
      { v: "6mo", l: "Avg. Results" },
    ],
  },
  {
    id: "whatsapp",
    icon: <FiMessageCircle size={36} />,
    iconSmall: <FiMessageCircle size={22} />,
    title: "WhatsApp Automation",
    subtitle: "Engage Customers Instantly",
    desc: "Automate communication with WhatsApp API, chatbots, and follow-ups.",
    longDesc: `End-to-end WhatsApp automation for lead capture, confirmations, reminders, and intelligent chatbots that hand off to agents when needed.`,
    features: [
      "WhatsApp API",
      "Chatbots",
      "Bulk Messaging",
      "Lead Automation",
      "Order Alerts",
      "CRM Integration",
    ],
    tags: ["WhatsApp API", "Chatbot", "Automation", "CRM"],
    technologies: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
    ],
    accent: "#25D366",
    number: "03",
    process: [
      { step: "01", title: "Setup", desc: "API verification and config." },
      {
        step: "02",
        title: "Flows",
        desc: "Design chatbots and automation triggers.",
      },
      { step: "03", title: "Integrate", desc: "Connect CRM and tools." },
      { step: "04", title: "Launch", desc: "Go live with analytics." },
    ],
    faqs: [
      {
        q: "WhatsApp Business account needed?",
        a: "Yes, we handle verification and setup.",
      },
      {
        q: "Complex queries?",
        a: "Chatbots escalate to agents intelligently.",
      },
      { q: "Bulk messaging allowed?", a: "Yes, compliant with official API." },
    ],
    stats: [
      { v: "2B+", l: "WA Users" },
      { v: "98%", l: "Open Rate" },
      { v: "24/7", l: "Automation" },
      { v: "5x", l: "Lead Response" },
    ],
  },
  {
    id: "hosting",
    icon: <FiCloud size={36} />,
    iconSmall: <FiCloud size={22} />,
    title: "Web Hosting",
    subtitle: "Always Online, Always Fast",
    desc: "Reliable, secure hosting with full management from server setup to SSL.",
    longDesc: `Enterprise-grade hosting solutions: shared, dedicated, or cloud, with performance, security, and uptime prioritized.`,
    features: [
      "99.9% Uptime",
      "Free SSL",
      "Daily Backups",
      "DDoS Protection",
      "CDN",
      "24/7 Monitoring",
    ],
    tags: ["AWS", "Vercel", "Cloudflare", "cPanel"],
    technologies: [
      {
        name: "Vercel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      },
      {
        name: "Netlify",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "NGINX",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
      },
      {
        name: "Linux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
      {
        name: "Cloudflare",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
      },
    ],
    accent: "#FFA500",
    number: "04",
    process: [
      { step: "01", title: "Assess", desc: "Traffic and budget evaluation." },
      { step: "02", title: "Configure", desc: "Server setup, SSL, and CDN." },
      { step: "03", title: "Migrate", desc: "Zero-downtime migration." },
      {
        step: "04",
        title: "Monitor",
        desc: "Uptime, backups, security updates.",
      },
    ],
    faqs: [
      { q: "Uptime guarantee?", a: "99.9% with SLA." },
      {
        q: "Handle migrations?",
        a: "Yes, zero-downtime with blue-green deployment.",
      },
      {
        q: "Hacked site?",
        a: "We restore from backups and protect with DDoS & malware scans.",
      },
    ],
    stats: [
      { v: "99.9%", l: "Uptime SLA" },
      { v: "< 1s", l: "Response Time" },
      { v: "Daily", l: "Backups" },
      { v: "24/7", l: "Monitoring" },
    ],
  },
  {
    id: "frontend",
    icon: <FiLayout size={36} />,
    iconSmall: <FiLayout size={22} />,
    title: "Frontend Development",
    subtitle: "Interfaces That Users Love",
    desc: "Pixel-perfect, interactive frontends with performance and accessibility in mind.",
    longDesc: `We build fast, responsive, and accessible frontends using React, Next.js, and modern tools. Components, design systems, and animations are optimized for a seamless user experience across devices.`,
    features: [
      "React & Next.js",
      "Tailwind CSS",
      "Framer Motion Animations",
      "Component Libraries",
      "Performance Optimization",
      "Accessibility (WCAG)",
    ],
    tags: ["React", "Next.js", "Tailwind", "TypeScript"],
    technologies: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Vue.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      },
    ],
    accent: "#00BFFF",
    number: "05",
    process: [
      {
        step: "01",
        title: "Architecture",
        desc: "Plan component structure and state management.",
      },
      {
        step: "02",
        title: "Build",
        desc: "Implement designs with reusable components.",
      },
      {
        step: "03",
        title: "Optimize",
        desc: "Code splitting, lazy loading, performance profiling.",
      },
      {
        step: "04",
        title: "Test",
        desc: "Cross-browser testing and accessibility audits.",
      },
    ],
    faqs: [
      {
        q: "Do you use TypeScript?",
        a: "Yes, for type safety and maintainability.",
      },
      {
        q: "Can you work with our existing design system?",
        a: "Yes, we can implement or build a new one.",
      },
      {
        q: "How do you handle state management?",
        a: "We use Zustand, Redux Toolkit, or React Query depending on needs.",
      },
    ],
    stats: [
      { v: "< 1s", l: "Load Time" },
      { v: "100", l: "Lighthouse" },
      { v: "WCAG", l: "Accessible" },
      { v: "TS", l: "Type Safe" },
    ],
  },
  {
    id: "backend",
    icon: <FiServer size={36} />,
    iconSmall: <FiServer size={22} />,
    title: "Backend Development",
    subtitle: "Powerful Engines Behind the Scenes",
    desc: "Secure, scalable backend systems that power applications efficiently.",
    longDesc: `We design APIs, databases, and server architectures that handle real-world traffic with security and scalability. REST, GraphQL, and microservices architectures are implemented following best practices.`,
    features: [
      "REST & GraphQL APIs",
      "Node.js / Express",
      "Database Design",
      "Authentication & Security",
      "Cloud Deployment",
      "Microservices",
    ],
    tags: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    technologies: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "GraphQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      },
    ],
    accent: "#8A2BE2",
    number: "06",
    process: [
      {
        step: "01",
        title: "Design",
        desc: "Plan API, database schema, and architecture.",
      },
      { step: "02", title: "Build", desc: "Develop secure, documented APIs." },
      {
        step: "03",
        title: "Test",
        desc: "Unit, integration, and load testing.",
      },
      {
        step: "04",
        title: "Deploy",
        desc: "Set up CI/CD, containerization, and cloud deployment.",
      },
    ],
    faqs: [
      {
        q: "REST or GraphQL?",
        a: "We implement both; choose based on project needs.",
      },
      {
        q: "Authentication methods?",
        a: "JWT, OAuth2, role-based access as required.",
      },
      {
        q: "Can handle high traffic?",
        a: "Yes, designed for scalability with caching and load balancing.",
      },
    ],
    stats: [
      { v: "10k+", l: "Req/sec" },
      { v: "JWT", l: "Secure Auth" },
      { v: "99.9%", l: "API Uptime" },
      { v: "CI/CD", l: "Auto Deploy" },
    ],
  }
];
