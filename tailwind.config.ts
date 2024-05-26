import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink': '#EF62D0'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(calc(0px - 100% - 100px))' }
        }
      },
      animation: {
        marquee: 'marquee 10s linear infinite'
      },

    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
export default config;
