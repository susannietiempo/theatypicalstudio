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
        page: "var(--c-bg)",
        surface: "var(--c-surface)",
        primary: "var(--c-text)",
        secondary: "var(--c-text2)",
        dark: "var(--c-dark)",
        accent: "var(--c-accent)",
        gold: "var(--c-gold)",
        border: "var(--c-border)",
        borderStrong: "var(--c-border-strong)",
        ring: "var(--c-ring)",
        onAccent: "var(--c-onAccent)",
        inverse: "var(--c-inverse)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-merriweather)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;

