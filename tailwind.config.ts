import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        pattern: 'url("/svg/pattern.svg")',
        "endless-clouds": 'url("/svg/endless-clouds.svg")',
      },
      colors: {
        pri: {
          DEFAULT: "#004b80",
          100: "#145781",
          200: "#075F80",
          300: "#075F80",
        },
        sec: {
          DEFAULT: "#418041",
          100: "#286851",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
