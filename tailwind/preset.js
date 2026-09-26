/**
 * The Quiet Press — Tailwind CSS Preset
 * Usage in any project's tailwind.config.js:
 * 
 * module.exports = {
 *   presets: [require('@ali/design-system/tailwind')],
 *   content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
 *   ...
 * }
 */

module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        press: {
          ivory: '#faf9f5',
          'ivory-alt': '#f0ede4',
          slate: '#141413',
          'slate-alt': '#1c1b19',
          'slate-subtle': '#2b2a26',
          sky: {
            DEFAULT: '#0284c7',
            light: '#38bdf8',
            hover: '#0369a1',
            subtle: 'rgba(2, 132, 199, 0.12)',
          },
          primary: {
            DEFAULT: '#0284c7',
            light: '#38bdf8',
            hover: '#0369a1',
            subtle: 'rgba(2, 132, 199, 0.12)',
          },
          sage: '#788c5d',
          blue: '#6a9bcc',
          amber: '#d4973b',
          crimson: '#c2534a',
          border: {
            light: '#e8e6dc',
            dark: '#2e2d2a',
          },
          muted: {
            light: '#737168',
            dark: '#b0aea5',
          },
        },
      },
      fontFamily: {
        serif: ['Newsreader', 'Tiempos Text', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        'press-sm': '4px',
        'press-md': '8px',
        'press-lg': '12px',
        'press-xl': '16px',
        'press-2xl': '20px',
      },
      lineHeight: {
        'press-prose': '1.7',
      },
    },
  },
};
