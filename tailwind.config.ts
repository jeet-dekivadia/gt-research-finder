import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-space-grotesk)'],
      },
      colors: {
        'gt-gold': '#B3A369',
        'gt-gold-light': '#E6D49C',
        'gt-navy': '#003057',
        'gt-blue': '#004F9F',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': {
            'box-shadow': '0 0 20px rgba(179, 163, 105, 0.7), 0 0 40px rgba(179, 163, 105, 0.3)',
          },
          '50%': {
            'box-shadow': '0 0 40px rgba(179, 163, 105, 0.9), 0 0 60px rgba(179, 163, 105, 0.5)',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
