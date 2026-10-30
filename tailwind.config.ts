import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        stack: {
          navy: "#071827",
          blue: "#0D5C99",
          sky: "#2AA6E0",
          mint: "#72E4D0",
        },
      },
      boxShadow: {
        glow: "0 0 70px rgba(42,166,224,.17)",
      },
    },
  },
  plugins: [],
};

export default config;
