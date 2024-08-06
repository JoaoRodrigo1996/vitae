import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      small: '430px',
      medium: '912px',
      large: '1020px'
    },
    extend: {
      backgroundImage: {
        pattern: 'url(/bg.png)'
      },
    },
  },
  plugins: [],
};
export default config;
