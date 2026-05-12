import {
  FiGlobe,
  FiLayout,
  FiDatabase,
  FiServer,
  FiTrendingUp,
} from 'react-icons/fi'

/** Factory for technology items */
const createTech = (name, slug, icon, desc, longDesc, highlights = []) => ({
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
    desc: 'We create modern, responsive, and high-converting websites tailored to your business goals.',
    longDesc: `We deliver websites that load fast, rank well, and convert visitors into leads. React.js + Next.js power interactive interfaces, with WordPress where CMS control is needed.`,
    techs: [
      createTech(
        'React.js',
        'react-js',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        'Component-based UI for marketing sites & apps.',
        `Reusable UI, interactive sections, and integrations without sacrificing maintainability.`,
        ['Component reuse & faster iterations', 'Huge ecosystem', 'Pairs with Next.js for SEO-friendly rendering']
      ),
      createTech(
        'Next.js',
        'next-js',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        'Production React framework — SSR, routing & speed.',
        'Routing, image optimization, API routes, static/server rendering for fast pages.',
        ['SSR/SSG for SEO-critical pages', 'Built-in optimizations', 'Great DX for scaling content']
      ),
      createTech(
        'WordPress',
        'wordpress',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
        'CMS for marketing teams & publishers.',
        'Empowers teams with publishing control; we handle themes, plugins, and security.',
        ['Editor-friendly workflows', 'SEO plugins & structured content', 'Managed updates & hardening']
      ),
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
    desc: 'Pixel-perfect, high-performance user interfaces using modern frameworks.',
    longDesc: `Frontend Development covers layout, accessibility, perceived performance, and design fidelity.\n\nWe standardize on modern frameworks so your UI scales with product complexity.`,
    techs: [
      createTech(
        'React.js',
        'react-js',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        'Rich SPAs, dashboards & component libraries.',
        'Default for complex client-side apps—predictable state, huge ecosystem, strong hiring pipeline.',
        ['SPA & admin UIs', 'Design-system patterns', 'Works with Next.js & React Native stacks']
      ),
      createTech(
        'Next.js',
        'next-js',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        'React framework for production routing & data.',
        'Routing and rendering to ship faster with fewer surprises.',
        ['Hybrid rendering', 'Production-grade defaults', 'SEO + app UX together']
      ),
      createTech(
        'Vue.js',
        'vue-js',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        'Progressive framework for lean SPAs.',
        'Approachable syntax and incremental adoption, Vue 3 composition keeps logic tidy.',
        ['Fast POC → prod', 'Gentle learning curve', 'Pinia/Vuex patterns']
      ),
      createTech(
        'Angular',
        'angular',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
        'Structured enterprise-grade SPA framework.',
        'Fits large teams with DI, modules, and TypeScript-first workflows.',
        ['Enterprise-scale apps', 'RxJS-heavy workflows', 'CLI-driven consistency']
      ),
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
    desc: 'Secure and scalable backend systems with powerful APIs, authentication, database architecture, and server-side logic.',
    longDesc: 'Backend Development powers APIs, auth, integrations, and business rules with observability and secure defaults.',
    techs: [
      createTech(
        'Node.js',
        'nodejs',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        'JavaScript runtime for APIs & realtime workloads.',
        'Excels at I/O-heavy APIs, websockets, and sharing tooling with frontend teams.',
        ['REST & realtime', 'JWT/sessions', 'Integrates with Express stacks']
      ),
      createTech(
        'Laravel',
        'laravel',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
        'PHP framework for structured backends.',
        'Speeds up CRUD, queues, mail, and authentication with expressive syntax.',
        ['ORM & migrations', 'Queues & jobs', 'Sanctum/Passport auth']
      ),
      createTech(
        'PHP',
        'php',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
        'Server-side scripting powering much of the web.',
        'Modern PHP with Composer and standards-based tooling.',
        ['Wide hosting support', 'CMS integrations', 'Practical for rapid delivery']
      ),
    ],
    stats: [{ v: 'REST', l: 'APIs' }, { v: 'JWT', l: 'Auth' }, { v: '99.9%', l: 'Uptime goal' }, { v: 'Obs', l: 'Logging' }],
    useCases: ['REST APIs', 'Auth systems', 'Webhooks', 'Realtime features', 'Automation layers'],
  },
  // … keep database, seo, hosting similarly structured
]

// Exported hints and helpers remain the same
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

const compactKey = (s) =>
  String(s || '').trim().toLowerCase().replace(/\./g, '').replace(/\s+/g, '')

const techMatchesSlug = (tech, slugHint) => slugHint && tech.slug === slugHint
const techMatchesName = (tech, rawName) => {
  const a = compactKey(rawName)
  const b = compactKey(tech.name)
  return a === b || NAME_TO_SLUG_HINT[a] === tech.slug
}

/** Lookup helpers remain unchanged */
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
  return group.techs.find((t) => t.slug === techSlug) ? { group, tech: group.techs.find((t) => t.slug === techSlug) } : null
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