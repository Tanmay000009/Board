import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
      lato: ["Lato", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      openSans: ["Open Sans", "sans-serif"],
      figTree: ["FigTree", "sans-serif"],
    },
    animation: {
      "spin-slow": "spin 2s linear infinite",
    },
  },
  plugins: [],
};
export default config;
