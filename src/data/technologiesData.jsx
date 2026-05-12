import {
  FiGlobe,
  FiLayout,
  FiDatabase,
  FiServer,
  FiTrendingUp,
} from 'react-icons/fi'

/** Mirrors home `Technologies.jsx` — same 6 categories & tool lists (React.js, Next.js, etc.). */
const T = (name, slug, icon, desc, longDesc, highlights) => ({
  name,
  slug,
  icon,
  desc,
  longDesc,
  highlights,
})

export const techGroups = [
  {
    id: 'website-development',
    label: 'Website Development',
    icon: <FiGlobe size={20} />,
    accent: '#6C5CE7',
    subtitle: 'Website Development Services',
    desc: 'We create modern, responsive, and high-converting websites tailored to your business goals. From landing pages to enterprise platforms, our websites are optimized for speed, SEO, and exceptional user experience.',
    longDesc: `We deliver websites that load fast, rank well, and convert visitors into leads. We combine React.js and Next.js for rich interfaces with WordPress when editorial teams need full CMS control.`,
    techs: [
      T('React.js', 'react-js', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 'Component-based UI for marketing sites & apps.', `React.js lets us ship reusable UI, interactive sections, and integrations without sacrificing maintainability.\n\nIdeal when your marketing site grows into dashboards or logged-in experiences.`, ['Component reuse & faster iterations', 'Huge ecosystem', 'Pairs with Next.js for SEO-friendly rendering']),
      T('Next.js', 'next-js', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', 'Production React framework — SSR, routing & speed.', `Next.js adds routing, image optimization, API routes, and static or server rendering so pages stay fast and search-friendly.\n\nWe deploy to edge-ready platforms when global performance matters.`, ['SSR/SSG for SEO-critical pages', 'Built-in optimizations', 'Great DX for scaling content']),
      T('WordPress', 'wordpress', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg', 'CMS for marketing teams & publishers.', `WordPress puts publishing power in your team’s hands while we handle themes, plugins, security, and performance.\n\nPerfect for blogs, landing hubs, and content-heavy brands.`, ['Editor-friendly workflows', 'SEO plugins & structured content', 'Managed updates & hardening']),
    ],
    stats: [{ v: '3', l: 'Core Tools' }, { v: 'SEO', l: 'Focused' }, { v: '99%', l: 'Responsive' }, { v: 'CMS', l: '+ React' }],
    useCases: ['Corporate sites', 'Landing pages', 'Marketing + blog', 'Lead-gen portals', 'Hybrid CMS setups'],
  },
  {
    id: 'frontend-development',
    label: 'Frontend Development',
    icon: <FiLayout size={20} />,
    accent: '#00BFFF',
    subtitle: 'Front-end Technology',
    desc: 'We craft pixel-perfect, high-performance user interfaces using the latest frontend frameworks. Our team delivers blazing-fast, accessible, and visually stunning web experiences.',
    longDesc: `Frontend Development covers layout, accessibility, perceived performance, and design fidelity.\n\nWe standardize on modern frameworks so your UI scales with product complexity.`,
    techs: [
      T('React.js', 'react-js', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 'Rich SPAs, dashboards & component libraries.', `React.js is our default for complex client-side apps—predictable state, huge ecosystem, and strong hiring pipeline.\n\nWe pair it with disciplined testing where reliability matters.`, ['SPA & admin UIs', 'Design-system patterns', 'Works with Next.js & React Native stacks']),
      T('Next.js', 'next-js', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', 'React framework for production routing & data.', `Next.js structures routing and rendering so teams ship faster with fewer surprises.\n\nISR and edge configs help when freshness and speed both matter.`, ['Hybrid rendering', 'Production-grade defaults', 'SEO + app UX together']),
      T('Vue.js', 'vue-js', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', 'Progressive framework for lean SPAs.', `Vue.js offers approachable syntax and incremental adoption—great when you want reactivity without a full rewrite.\n\nVue 3 composition keeps logic tidy as apps grow.`, ['Fast POC → prod', 'Gentle learning curve', 'Pinia/Vuex patterns']),
      T('Angular', 'angular', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', 'Structured enterprise-grade SPA framework.', `Angular fits large teams that benefit from conventions: DI, modules, and TypeScript-first workflows.\n\nWe align with enterprise testing and release cadences.`, ['Enterprise-scale apps', 'RxJS-heavy workflows', 'CLI-driven consistency']),
    ],
    stats: [{ v: '4', l: 'Frameworks' }, { v: '<1s', l: 'Target FCP' }, { v: 'A11y', l: 'Focused' }, { v: 'DX', l: 'Strong' }],
    useCases: ['SaaS dashboards', 'Design-system rollouts', 'Marketing sites with heavy JS', 'Performance tuning'],
  },
  {
    id: 'backend-development',
    label: 'Backend Development',
    icon: <FiDatabase size={20} />,
    accent: '#8A2BE2',
    subtitle: 'Back-end Technology',
    desc: 'We develop secure and scalable backend systems with powerful APIs, authentication, database architecture, and server-side logic designed for modern web applications.',
    longDesc: `Backend Development is where APIs, auth, integrations, and business rules live.\n\nWe prioritize predictable interfaces, observability, and secure defaults.`,
    techs: [
      T('Node.js', 'nodejs', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', 'JavaScript runtime for APIs & realtime workloads.', `Node.js excels at I/O-heavy APIs, websockets, and sharing tooling with frontend teams.\n\nWe structure services with clear boundaries and error handling.`, ['REST & realtime', 'JWT/sessions', 'Integrates with Express stacks']),
      T('Laravel', 'laravel', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', 'PHP framework for structured backends.', `Laravel speeds up CRUD, queues, mail, and authentication with expressive syntax.\n\nStrong fit for admin-heavy products and PHP ecosystems.`, ['ORM & migrations', 'Queues & jobs', 'Sanctum/Passport auth']),
      T('PHP', 'php', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', 'Server-side scripting powering much of the web.', `We write modern PHP with Composer and standards-based tooling.\n\nIdeal when integrating CMS plugins or legacy PHP stacks.`, ['Wide hosting support', 'CMS integrations', 'Practical for rapid delivery']),
    ],
    stats: [{ v: 'REST', l: 'APIs' }, { v: 'JWT', l: 'Auth' }, { v: '99.9%', l: 'Uptime goal' }, { v: 'Obs', l: 'Logging' }],
    useCases: ['REST APIs', 'Auth systems', 'Webhooks', 'Realtime features', 'Automation layers'],
  },
  {
    id: 'database-development',
    label: 'Database Development',
    icon: <FiDatabase size={20} />,
    accent: '#32CD32',
    subtitle: 'Database Technology',
    desc: 'We design and manage databases to ensure efficient, reliable, and scalable storage for your applications, with expertise in both relational and NoSQL solutions.',
    longDesc: `Database Development spans modeling, indexing, backups, and migrations.\n\nWe choose engines based on consistency needs and query patterns.`,
    techs: [
      T('MySQL', 'mysql', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', 'Popular relational database.', `MySQL powers many workloads with mature tooling.\n\nWe tune indexes and replication paths when traffic grows.`, ['Transactional apps', 'Broad hosting support', 'Replication patterns']),
      T('MongoDB', 'mongodb', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', 'Flexible document database.', `MongoDB suits evolving schemas and document-heavy domains.\n\nAggregation pipelines support analytics alongside OLTP.`, ['Flexible schemas', 'Atlas-ready', 'Aggregation']),
      T('PostgreSQL', 'postgresql', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', 'Advanced open-source relational DB.', `PostgreSQL handles complex constraints, JSONB hybrids, and extensions.\n\nOur pick when relational integrity dominates.`, ['Complex SQL', 'JSONB patterns', 'Strong consistency']),
      T('SQLite', 'sqlite', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', 'Embedded DB for tooling & edge.', `SQLite fits embedded clients and zero-config environments.\n\nWe respect concurrency limits and migration hygiene.`, ['Local/offline patterns', 'Tests & fixtures', 'Lightweight deployments']),
      T('Redis', 'redis', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', 'In-memory cache & realtime structures.', `Redis accelerates sessions, rate limits, leaderboards, and pub/sub.\n\nEviction and persistence tuned to your risk profile.`, ['Caching', 'Sessions', 'Pub/sub']),
    ],
    stats: [{ v: '5', l: 'Engines' }, { v: 'ACID', l: 'Where needed' }, { v: 'BK', l: 'Backups' }, { v: 'HA', l: 'Patterns' }],
    useCases: ['Schema design', 'Read replicas', 'Caching layers', 'Analytics stores', 'Migrations'],
  },
  {
    id: 'seo-optimization',
    label: 'SEO Optimization',
    icon: <FiTrendingUp size={20} />,
    accent: '#FF6B6B',
    subtitle: 'SEO & Performance Optimization',
    desc: 'Improve your search engine rankings and website visibility with advanced SEO strategies, technical optimization, keyword targeting, and lightning-fast performance enhancements that drive organic traffic.',
    longDesc: `SEO Optimization blends technical audits with measurable analytics loops.\n\nWe align Core Web Vitals, structured data, and Search Console insights with business KPIs.`,
    techs: [
      T('Google Analytics', 'google-analytics', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg', 'Acquisition & conversion analytics.', `Google Analytics reveals channels, engagement, and funnel performance.\n\nWe configure GA4 events tied to outcomes you care about.`, ['GA4 events', 'Audiences', 'Attribution views']),
      T('Search Console', 'search-console', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg', 'Indexing & query performance.', `Search Console exposes crawl coverage, enhancements, and query trends.\n\nWe resolve errors and monitor Core Web Vitals reports.`, ['Coverage fixes', 'CTR insights', 'CWV signals']),
      T('Chrome DevTools', 'chrome-devtools', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg', 'Performance profiling & audits.', `DevTools catches layout shifts, slow waterfalls, and Lighthouse regressions.\n\nWe iterate until budgets are met on real hardware.`, ['Profiling', 'Network tuning', 'Accessibility checks']),
    ],
    stats: [{ v: '90+', l: 'LH goal' }, { v: 'CWV', l: 'Tracked' }, { v: 'SERP', l: 'Growth' }, { v: 'ROI', l: 'Focused' }],
    useCases: ['Technical SEO', 'Structured data', 'Speed programs', 'Reporting'],
  },
  {
    id: 'web-hosting',
    label: 'Web Hosting',
    icon: <FiServer size={20} />,
    accent: '#FFA500',
    subtitle: 'Web Hosting & Deployment',
    desc: 'Reliable, secure, and high-performance hosting solutions for websites and web applications. We manage deployment, domain setup, SSL security, server optimization, and scalable cloud infrastructure.',
    longDesc: `Hosting & deployment covers TLS, CDN, CI/CD, backups, and incident readiness.\n\nWe automate releases and monitor uptime.`,
    techs: [
      T('Vercel', 'vercel', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', 'Frontend & Next.js deployments.', `Vercel optimizes static and serverless workloads at the edge.\n\nPreview deployments tie reviews to PRs.`, ['Preview envs', 'Edge functions', 'Next-native UX']),
      T('Netlify', 'netlify', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg', 'JAMstack hosting & functions.', `Netlify suits Git-driven static sites with lightweight backends.\n\nGreat for campaign sites and forms.`, ['Git deploys', 'Serverless hooks', 'Forms']),
      T('Docker', 'docker', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', 'Reproducible containers.', `Docker locks dependencies across environments.\n\nCompose stacks accelerate local development.`, ['Parity dev→prod', 'CI images', 'Portable services']),
      T('NGINX', 'nginx', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', 'Reverse proxy & TLS termination.', `NGINX routes traffic, terminates TLS, and caches efficiently.\n\nTuned keep-alive and buffering for throughput.`, ['SSL termination', 'Load balancing', 'Static caching']),
      T('Linux', 'linux', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', 'Server OS foundation.', `Linux hosts most production workloads.\n\nWe harden SSH, firewalls, updates, and observability.`, ['VPS baseline', 'systemd hygiene', 'Logs/metrics']),
      T('Cloudflare', 'cloudflare', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg', 'CDN, DNS & edge security.', `Cloudflare speeds assets globally and absorbs abusive traffic.\n\nWAF rules matched to your threat model.`, ['CDN caching', 'DDoS mitigation', 'DNS automation']),
    ],
    stats: [{ v: 'TLS', l: 'Everywhere' }, { v: 'CI/CD', l: 'Automated' }, { v: 'CDN', l: 'Edge' }, { v: 'MON', l: '24/7' }],
    useCases: ['Production launches', 'Blue/green deploys', 'Backups', 'Scaling'],
  },
]

/** Prefer these groups first when resolving a service detail tech tile → `/technologies/:group/:slug`. */
export const SERVICE_TECH_GROUP_HINT = {
  website: ['website-development', 'frontend-development', 'web-hosting'],
  seo: ['seo-optimization'],
  hosting: ['web-hosting'],
  whatsapp: ['backend-development', 'frontend-development'],
  uiux: ['frontend-development'],
  animation: ['frontend-development'],
  frontend: ['frontend-development'],
  backend: ['backend-development'],
  fullstack: ['frontend-development', 'backend-development', 'database-development'],
}

function compactKey(s) {
  return String(s || '')
    .trim()
    .toLowerCase()
    .replace(/\./g, '')
    .replace(/\s+/g, '')
}

/** Synonyms → canonical slug (within whichever group matches first). */
const NAME_TO_SLUG_HINT = {
  react: 'react-js',
  reactjs: 'react-js',
  next: 'next-js',
  nextjs: 'next-js',
  vue: 'vue-js',
  vuejs: 'vue-js',
  angularjs: 'angular',
  node: 'nodejs',
  nodes: 'nodejs',
  mysql: 'mysql',
  mongo: 'mongodb',
  mongodb: 'mongodb',
  postgres: 'postgresql',
  postgresql: 'postgresql',
  sqlite: 'sqlite',
  redis: 'redis',
  googleanalytics: 'google-analytics',
  analytics: 'google-analytics',
  searchconsole: 'search-console',
  googlesearchconsole: 'search-console',
  chromedevtools: 'chrome-devtools',
  devtools: 'chrome-devtools',
  laravel: 'laravel',
  php: 'php',
  wordpress: 'wordpress',
  vercel: 'vercel',
  netlify: 'netlify',
  docker: 'docker',
  nginx: 'nginx',
  linux: 'linux',
  cloudflare: 'cloudflare',
  express: 'nodejs',
  expressjs: 'nodejs',
}

function techMatchesSlug(tech, slugHint) {
  if (!slugHint) return false
  return tech.slug === slugHint || compactKey(tech.slug) === compactKey(slugHint)
}

function techMatchesName(tech, rawName) {
  const a = compactKey(rawName)
  const b = compactKey(tech.name)
  if (a === b) return true
  const hinted = NAME_TO_SLUG_HINT[a]
  if (hinted && tech.slug === hinted) return true
  return false
}

/**
 * Resolve `/technologies/:groupId/:slug` from a tech label (as shown on service pages).
 * @param {string} techName - e.g. "React", "Next.js", "Node.js"
 * @param {string|null} serviceId - servicesData id e.g. "website", "whatsapp"
 */
export function lookupTechnologyLink(techName, serviceId = null) {
  if (!techName) return null
  const hintedSlug = NAME_TO_SLUG_HINT[compactKey(techName)] ?? null
  const searchGroups = serviceId && SERVICE_TECH_GROUP_HINT[serviceId]
    ? [...SERVICE_TECH_GROUP_HINT[serviceId], ...techGroups.map((g) => g.id)]
    : techGroups.map((g) => g.id)

  const seen = new Set()
  const orderedGroupIds = []
  for (const gid of searchGroups) {
    if (!seen.has(gid)) {
      seen.add(gid)
      orderedGroupIds.push(gid)
    }
  }

  for (const gid of orderedGroupIds) {
    const group = techGroups.find((g) => g.id === gid)
    if (!group) continue
    const tech =
      group.techs.find((t) => techMatchesName(t, techName)) ||
      group.techs.find((t) => techMatchesSlug(t, hintedSlug))
    if (tech) return `/technologies/${gid}/${tech.slug}`
  }

  return null
}

export function getTechItem(groupId, techSlug) {
  const group = techGroups.find((g) => g.id === groupId)
  if (!group) return null
  const tech = group.techs.find((t) => t.slug === techSlug)
  if (!tech) return null
  return { group, tech }
}

export function getTechSiblings(groupId, techSlug) {
  const group = techGroups.find((g) => g.id === groupId)
  if (!group) return { prev: null, next: null }
  const idx = group.techs.findIndex((t) => t.slug === techSlug)
  if (idx < 0) return { prev: null, next: null }
  return {
    prev: idx > 0 ? group.techs[idx - 1] : null,
    next: idx < group.techs.length - 1 ? group.techs[idx + 1] : null,
  }
}
