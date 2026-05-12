// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // All your source files
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',           // Light background (#f5f7fb)
        surface: 'var(--surface)', // White surfaces (#ffffff)
        surface2: 'var(--surface2)', // Light gray (#f3f3f3)
        surface3: 'var(--surface3)', // Slightly darker (#e5e7eb)
        border: 'var(--border)',   // Logo blue (#2d4dca)
        accent: 'var(--accent)',   // Logo blue (#2d4dca)
        accent2: 'var(--accent2)', // Lighter blue (#4f63e5)
        accent3: 'var(--accent3)', // Lightest gray (#f3f3f3)
        accent4: 'var(--accent4)', // Lighter blue (#4f63e5)
        text: 'var(--text)',       // Primary text (#111827)
        textCard: 'var(--text-card)', // Card text (#1f2937)
        muted: 'var(--muted)',     // Muted text (#6b7280)
        mutedCard: 'var(--muted-card)', // Secondary muted (#9ca3af)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}