import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#15201d",
        forest: "#0f3d36",
        jade: "#0f766e",
        wine: "#9f1239",
        paper: "#f7faf8",
        navy: "#10243e",
        midnight: "#07182f",
        champagne: "#d7b56d",
        mist: "#f4f7fb",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(21, 32, 29, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
