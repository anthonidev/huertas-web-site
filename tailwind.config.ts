import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        pattern: 'url("/svg/pattern.svg")',
        'endless-clouds': 'url("/svg/endless-clouds.svg")',
      },
      colors: {
        pri: {
          DEFAULT: '#004b80',
          100: '#145781',
          200: '#075F80',
          300: '#075F80',
        },
        sec: {
          DEFAULT: '#418041',
          100: '#286851',
        },
      },
    },
  },
  plugins: [],
};
export default config;
