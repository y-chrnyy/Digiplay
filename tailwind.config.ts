import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink': '#ff54a6'
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
      fontFamily: {
        yanone: 'var(--font-yanone)',
        kurut: 'var(--font-kurut)'
      },
      fontSize: {
        'header-xl': ['230px', '100%'],
        'header-lg': ['180px', '100%'],
        'header-md': ['120px', '100%'],
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
export default config;
