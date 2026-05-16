import {
  FiGlobe,
  FiLayout,
  FiServer,
  FiTrendingUp,
  FiCloud,
  FiMessageCircle,
} from "react-icons/fi";

/** Factory for technology items */
const createTech = (name, slug, icon, desc, longDesc, highlights = []) => ({
  name,
  slug,
  icon,
  desc,
  longDesc,
  highlights,
});

export const techGroups = [
  {
    id: "website-development",
    label: "Website Development",
    icon: <FiGlobe size={20} />,
    accent: "#6C5CE7",
    subtitle: "Website Development Services",
    desc: "Modern business websites, landing pages, and CMS-powered solutions.",
    longDesc: `We create high-performance websites focused on speed, SEO, responsiveness, and conversions. From business sites to advanced web platforms, we use modern technologies and scalable architectures.`,

    techs: [
      createTech(
        "React.js",
        "react-js",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "Component-based UI library.",
        "Reusable components and scalable frontend architecture for modern apps.",
        ["Reusable components", "Fast rendering", "Large ecosystem"]
      ),

      createTech(
        "Next.js",
        "next-js",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        "Production-grade React framework.",
        "Next.js provides SSR, SSG, API routes, SEO optimization, and performance improvements.",
        ["SSR & SSG", "SEO optimization", "Fast routing"]
      ),

      createTech(
        "WordPress",
        "wordpress",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
        "Popular CMS platform.",
        "WordPress enables easy content management with custom themes and plugins.",
        ["CMS management", "SEO plugins", "Large ecosystem"]
      ),
    ],

    stats: [
      { v: "50+", l: "Projects" },
      { v: "99%", l: "Responsive" },
      { v: "SEO", l: "Optimized" },
      { v: "Fast", l: "Performance" },
    ],

    useCases: [
      "Business websites",
      "Landing pages",
      "Portfolio websites",
      "Blogs & CMS",
      "Corporate platforms",
    ],
  },

  {
    id: "frontend-development",
    label: "Frontend Development",
    icon: <FiLayout size={20} />,
    accent: "#00BFFF",
    subtitle: "Frontend Engineering",
    desc: "Modern, fast, and scalable frontend interfaces.",
    longDesc: `We build highly interactive user interfaces with scalability, accessibility, and performance at the core.`,

    techs: [
      createTech(
        "React.js",
        "react-js",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "Modern component-based frontend library.",
        "React enables scalable frontend systems with reusable UI components.",
        ["SPA support", "Reusable UI", "Large ecosystem"]
      ),

      createTech(
        "Next.js",
        "next-js",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        "React framework for production.",
        "Hybrid rendering, routing, and optimization for enterprise apps.",
        ["SSR", "Static generation", "Performance optimization"]
      ),

      createTech(
        "TypeScript",
        "typescript",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        "Typed JavaScript for scalable apps.",
        "Type safety improves maintainability and developer productivity.",
        ["Type safety", "Better DX", "Scalable architecture"]
      ),

      createTech(
        "Vue.js",
        "vue-js",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        "Progressive frontend framework.",
        "Simple yet powerful framework for interactive applications.",
        ["Easy learning curve", "Reactive system", "Flexible integration"]
      ),

      createTech(
        "Angular",
        "angular",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        "Enterprise frontend framework.",
        "Complete frontend solution with TypeScript and RxJS.",
        ["Enterprise apps", "TypeScript-first", "Powerful tooling"]
      ),
    ],

    stats: [
      { v: "100", l: "Lighthouse" },
      { v: "<1s", l: "Load Time" },
      { v: "WCAG", l: "Accessible" },
      { v: "SPA", l: "Apps" },
    ],

    useCases: [
      "SaaS dashboards",
      "Admin panels",
      "Interactive UIs",
      "Frontend optimization",
      "Animations",
    ],
  },

  {
    id: "backend-development",
    label: "Backend Development",
    icon: <FiServer size={20} />,
    accent: "#8A2BE2",
    subtitle: "Backend Engineering",
    desc: "Secure APIs, scalable architecture, and cloud-ready backend systems.",
    longDesc: `We develop scalable backend systems, APIs, databases, authentication, and integrations optimized for production workloads.`,

    techs: [
      createTech(
        "Node.js",
        "nodejs",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        "JavaScript runtime for scalable backends.",
        "Efficient event-driven runtime for APIs and realtime systems.",
        ["REST APIs", "Realtime apps", "High concurrency"]
      ),

      createTech(
        "MongoDB",
        "mongodb",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        "NoSQL database for flexible data.",
        "Scalable document database for modern applications.",
        ["Flexible schema", "Horizontal scaling", "JSON-based"]
      ),

      createTech(
        "PostgreSQL",
        "postgresql",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        "Advanced relational database.",
        "Reliable SQL database with strong consistency and scalability.",
        ["ACID compliance", "Advanced queries", "High reliability"]
      ),

      createTech(
        "MySQL",
        "mysql",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        "Popular relational database.",
        "Widely used SQL database for web applications.",
        ["Fast queries", "Wide hosting support", "Reliable"]
      ),

      createTech(
        "Redis",
        "redis",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        "In-memory caching database.",
        "Used for caching, sessions, queues, and performance optimization.",
        ["Caching", "Queue systems", "Realtime performance"]
      ),

      createTech(
        "GraphQL",
        "graphql",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
        "Flexible API query language.",
        "Optimized API fetching with strongly typed schemas.",
        ["Efficient queries", "Typed schema", "Frontend flexibility"]
      ),
    ],

    stats: [
      { v: "10k+", l: "Req/sec" },
      { v: "JWT", l: "Auth" },
      { v: "99.9%", l: "Uptime" },
      { v: "Cloud", l: "Ready" },
    ],

    useCases: [
      "REST APIs",
      "Realtime systems",
      "Authentication",
      "Microservices",
      "Scalable platforms",
    ],
  },

  {
    id: "seo-optimization",
    label: "SEO Optimization",
    icon: <FiTrendingUp size={20} />,
    accent: "#FF6B6B",
    subtitle: "SEO & Performance",
    desc: "Improve rankings, visibility, and traffic growth.",
    longDesc: `Technical SEO, performance optimization, analytics, and keyword strategies to grow organic traffic.`,

    techs: [
      createTech(
        "Google Analytics",
        "google-analytics",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
        "Website analytics platform.",
        "Track traffic, conversions, and user behavior.",
        ["Traffic insights", "Conversion tracking", "Reports"]
      ),

      createTech(
        "Search Console",
        "search-console",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
        "Google indexing & SEO monitoring.",
        "Monitor website indexing and keyword performance.",
        ["Index monitoring", "Keyword tracking", "SEO insights"]
      ),

      createTech(
        "Lighthouse",
        "lighthouse",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
        "Performance auditing tool.",
        "Analyze SEO, accessibility, and performance.",
        ["Performance audits", "SEO scoring", "Accessibility"]
      ),
    ],

    stats: [
      { v: "3x", l: "Traffic" },
      { v: "90+", l: "SEO Score" },
      { v: "CWV", l: "Optimized" },
      { v: "Growth", l: "Focused" },
    ],

    useCases: [
      "Technical SEO",
      "Keyword optimization",
      "Analytics setup",
      "Performance audits",
    ],
  },

  {
    id: "web-hosting",
    label: "Web Hosting",
    icon: <FiCloud size={20} />,
    accent: "#FFA500",
    subtitle: "Hosting & Infrastructure",
    desc: "Reliable cloud hosting and deployment infrastructure.",
    longDesc: `Fast, secure, and scalable hosting with monitoring, CDN, SSL, and deployment automation.`,

    techs: [
      createTech(
        "Vercel",
        "vercel",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
        "Frontend deployment platform.",
        "Optimized hosting for modern frontend frameworks.",
        ["Global CDN", "Instant deploy", "Serverless support"]
      ),

      createTech(
        "Netlify",
        "netlify",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
        "Modern web hosting platform.",
        "Fast hosting for JAMstack websites and apps.",
        ["CI/CD", "Fast deploys", "Serverless"]
      ),

      createTech(
        "Docker",
        "docker",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        "Container deployment system.",
        "Portable deployment across environments.",
        [
          "Scalable containers",
          "Environment isolation",
          "Deployment automation",
        ]
      ),

      createTech(
        "NGINX",
        "nginx",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
        "High-performance web server.",
        "Used for reverse proxying, load balancing, and performance.",
        ["Load balancing", "Reverse proxy", "High performance"]
      ),

      createTech(
        "Cloudflare",
        "cloudflare",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
        "CDN and security platform.",
        "Improves speed and protects against attacks.",
        ["DDoS protection", "CDN", "SSL"]
      ),
    ],

    stats: [
      { v: "99.9%", l: "Uptime" },
      { v: "24/7", l: "Monitoring" },
      { v: "SSL", l: "Secure" },
      { v: "CDN", l: "Global" },
    ],

    useCases: [
      "Cloud hosting",
      "Frontend deployment",
      "CDN setup",
      "Server optimization",
    ],
  },

  {
    id: "whatsapp-automation",
    label: "WhatsApp Automation",
    icon: <FiMessageCircle size={20} />,
    accent: "#25D366",
    subtitle: "WhatsApp API & Automation",
    desc: "Automate customer communication with WhatsApp APIs and chatbots.",
    longDesc: `Build smart WhatsApp workflows, chatbot systems, CRM integrations, and lead automation.`,

    techs: [
      createTech(
        "WhatsApp API",
        "whatsapp-api",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        "Official WhatsApp business integrations.",
        "Automate messages, notifications, and customer workflows.",
        ["Automation", "Bulk messaging", "Customer support"]
      ),

      createTech(
        "Node.js",
        "nodejs",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        "Backend runtime for automation systems.",
        "Powers APIs and realtime communication systems.",
        ["Realtime systems", "Automation", "API integrations"]
      ),

      createTech(
        "MongoDB",
        "mongodb",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        "Flexible chatbot data storage.",
        "Stores chat history, leads, and workflows.",
        ["Flexible storage", "Scalable", "Fast development"]
      ),
    ],

    stats: [
      { v: "98%", l: "Open Rate" },
      { v: "24/7", l: "Automation" },
      { v: "5x", l: "Response Speed" },
      { v: "CRM", l: "Integrated" },
    ],

    useCases: [
      "Lead automation",
      "Customer support",
      "Chatbots",
      "CRM workflows",
    ],
  },
];

// Exported hints and helpers

export const SERVICE_TECH_GROUP_HINT = {
  website: ["website-development", "frontend-development", "web-hosting"],

  seo: ["seo-optimization"],

  hosting: ["web-hosting"],

  whatsapp: ["backend-development", "frontend-development"],

  uiux: ["frontend-development"],

  animation: ["frontend-development"],

  frontend: ["frontend-development"],

  backend: ["backend-development", "database-development"],

  database: ["database-development"],

  api: ["backend-development"],

  fullstack: [
    "frontend-development",
    "backend-development",
    "database-development",
  ],

  cms: ["website-development"],

  deployment: ["web-hosting"],

  cloud: ["web-hosting"],

  devops: ["web-hosting", "backend-development"],

  ecommerce: [
    "website-development",
    "backend-development",
    "database-development",
  ],

  chatbot: ["whatsapp-automation", "backend-development"],

  automation: ["whatsapp-automation", "backend-development"],
};

export const NAME_TO_SLUG_HINT = {
  // Frontend
  react: "react-js",
  reactjs: "react-js",

  next: "next-js",
  nextjs: "next-js",

  vue: "vue-js",
  vuejs: "vue-js",

  angular: "angular",
  angularjs: "angular",

  typescript: "typescript",
  ts: "typescript",

  redux: "redux-toolkit",
  reduxtoolkit: "redux-toolkit",

  zustand: "zustand",

  // Backend
  node: "nodejs",
  nodejs: "nodejs",
  nodes: "nodejs",

  express: "express-js",
  expressjs: "express-js",

  graphql: "graphql",

  socketio: "socket-io",
  socket: "socket-io",

  jwt: "jwt-auth",

  oauth: "oauth",

  // Database
  mongo: "mongodb",
  mongodb: "mongodb",

  postgres: "postgresql",
  postgresql: "postgresql",

  mysql: "mysql",

  sqlite: "sqlite",

  redis: "redis",

  firebase: "firebase",

  supabase: "supabase",

  prisma: "prisma",

  mongoose: "mongoose",

  sequelize: "sequelize",

  // PHP / CMS
  laravel: "laravel",

  php: "php",

  wordpress: "wordpress",

  flask: "flask",

  fastapi: "fastapi",

  // Hosting / DevOps
  vercel: "vercel",

  netlify: "netlify",

  docker: "docker",

  nginx: "nginx",

  linux: "linux",

  cloudflare: "cloudflare",

  aws: "aws",

  firebasehosting: "firebase-hosting",

  railway: "railway",

  render: "render",

  // SEO
  googleanalytics: "google-analytics",
  analytics: "google-analytics",

  searchconsole: "search-console",
  googlesearchconsole: "search-console",

  lighthouse: "lighthouse",

  chromedevtools: "chrome-devtools",
  devtools: "chrome-devtools",

  semrush: "semrush",

  // WhatsApp / Automation
  whatsapp: "whatsapp-api",
  whatsappapi: "whatsapp-api",

  chatbot: "chatbot",

  crm: "crm-integration",

  // Misc
  git: "git",

  github: "github",

  gitlab: "gitlab",

  postman: "postman",

  vite: "vite",

  webpack: "webpack",

  babel: "babel",
};

const compactKey = (s) =>
  String(s || "")
    .trim()
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/\s+/g, "");

const techMatchesSlug = (tech, slugHint) => slugHint && tech.slug === slugHint;

const techMatchesName = (tech, rawName) => {
  const a = compactKey(rawName);
  const b = compactKey(tech.name);

  return a === b || NAME_TO_SLUG_HINT[a] === tech.slug;
};

/** Lookup helpers */

export function lookupTechnologyLink(techName, serviceId = null) {
  if (!techName) {
    return null;
  }

  const hintedSlug = NAME_TO_SLUG_HINT[compactKey(techName)] ?? null;

  const searchGroups =
    serviceId && SERVICE_TECH_GROUP_HINT[serviceId]
      ? [...SERVICE_TECH_GROUP_HINT[serviceId], ...techGroups.map((g) => g.id)]
      : techGroups.map((g) => g.id);

  const seen = new Set();
  const orderedGroupIds = [];

  for (const gid of searchGroups) {
    if (!seen.has(gid)) {
      seen.add(gid);
      orderedGroupIds.push(gid);
    }
  }

  for (const gid of orderedGroupIds) {
    const group = techGroups.find((g) => g.id === gid);

    if (!group) {
      continue;
    }

    const tech =
      group.techs.find((t) => techMatchesName(t, techName)) ||
      group.techs.find((t) => techMatchesSlug(t, hintedSlug));

    if (tech) {
      return `/technologies/${gid}/${tech.slug}`;
    }
  }

  return null;
}

export function getTechItem(groupId, techSlug) {
  const group = techGroups.find((g) => g.id === groupId);

  if (!group) {
    return null;
  }

  const tech = group.techs.find((t) => t.slug === techSlug);

  return tech ? { group, tech } : null;
}

export function getTechSiblings(groupId, techSlug) {
  const group = techGroups.find((g) => g.id === groupId);

  if (!group) {
    return { prev: null, next: null };
  }

  const idx = group.techs.findIndex((t) => t.slug === techSlug);

  if (idx < 0) {
    return { prev: null, next: null };
  }

  return {
    prev: idx > 0 ? group.techs[idx - 1] : null,
    next: idx < group.techs.length - 1 ? group.techs[idx + 1] : null,
  };
}
