import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#05070D',
        panel: '#0B1020',
        panelSoft: '#111827',
        line: 'rgba(148, 163, 184, 0.18)',
        muted: '#94A3B8',
        accent: '#3B82F6',
        accentSoft: 'rgba(59, 130, 246, 0.16)',
        success: '#10B981',
      },
      boxShadow: {
        glow: '0 0 80px rgba(59, 130, 246, 0.22)',
        card: '0 24px 80px rgba(0, 0, 0, 0.28)',
      },
      backgroundImage: {
        'radial-blue': 'radial-gradient(circle at 50% 0%, rgba(59,130,246,0.24), transparent 42%)',
        'grid-pattern': 'linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};

export default config;
