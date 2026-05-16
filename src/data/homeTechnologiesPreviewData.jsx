import {
  FiGlobe,
  FiTrendingUp,
  FiServer,
  FiLayout,
  FiDatabase,
} from "react-icons/fi";

/**
 * Sidebar tabs + content for the home “Technologies We Work With” section (`Technologies.jsx`).
 * Each item’s `id` matches a `techGroups` entry in `technologiesData.jsx` for deep links.
 */
export const homeTechnologyStackTabs = [
  {
    id: "website-development",
    icon: FiGlobe,
    label: "Website Development",
    heading: "Website Development Services",
    desc: "We create modern, responsive, and high-converting websites tailored to your business goals. From landing pages to enterprise platforms, our websites are optimized for speed, SEO, and exceptional user experience.",
    techs: [
      {
        name: "React.js",
        slug: "react-js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        slug: "next-js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "WordPress",
        slug: "wordpress",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
      },
    ],
  },
  {
    id: "frontend-development",
    icon: FiLayout,
    label: "Frontend Development",
    heading: "Front-end Technology",
    desc: "We craft pixel-perfect, high-performance user interfaces using the latest frontend frameworks. Our team delivers blazing-fast, accessible, and visually stunning web experiences.",
    techs: [
      {
        name: "React.js",
        slug: "react-js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        slug: "next-js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Vue.js",
        slug: "vue-js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      },
      {
        name: "Angular",
        slug: "angular",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      },
    ],
  },
  {
    id: "backend-development",
    icon: FiDatabase,
    label: "Backend Development",
    heading: "Back-end Technology",
    desc: "We develop secure and scalable backend systems with powerful APIs, authentication, database architecture, and server-side logic designed for modern web applications.",
    techs: [
      {
        name: "Node.js",
        slug: "nodejs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Laravel",
        slug: "laravel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      },
      {
        name: "PHP",
        slug: "php",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
    ],
  },
  {
    id: "database-development",
    icon: FiDatabase,
    label: "Database Development",
    heading: "Database Technology",
    desc: "We design and manage databases to ensure efficient, reliable, and scalable storage for your applications, with expertise in both relational and NoSQL solutions.",
    techs: [
      {
        name: "MySQL",
        slug: "mysql",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "MongoDB",
        slug: "mongodb",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "PostgreSQL",
        slug: "postgresql",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "SQLite",
        slug: "sqlite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
      },
      {
        name: "Redis",
        slug: "redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
    ],
  },
  {
    id: "seo-optimization",
    icon: FiTrendingUp,
    label: "SEO Optimization",
    heading: "SEO & Performance Optimization",
    desc: "Improve your search engine rankings and website visibility with advanced SEO strategies, technical optimization, keyword targeting, and lightning-fast performance enhancements that drive organic traffic.",
    techs: [
      {
        name: "Google Analytics",
        slug: "google-analytics",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
      },
      {
        name: "Search Console",
        slug: "search-console",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
      },
      {
        name: "Chrome DevTools",
        slug: "chrome-devtools",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
      },
    ],
  },
  {
    id: "web-hosting",
    icon: FiServer,
    label: "Web Hosting",
    heading: "Web Hosting & Deployment",
    desc: "Reliable, secure, and high-performance hosting solutions for websites and web applications. We manage deployment, domain setup, SSL security, server optimization, and scalable cloud infrastructure.",
    techs: [
      {
        name: "Vercel",
        slug: "vercel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      },
      {
        name: "Netlify",
        slug: "netlify",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
      },
      {
        name: "Docker",
        slug: "docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "NGINX",
        slug: "nginx",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
      },
      {
        name: "Linux",
        slug: "linux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
      {
        name: "Cloudflare",
        slug: "cloudflare",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
      },
    ],
  },
];
