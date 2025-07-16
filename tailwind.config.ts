import type { Config } from "tailwindcss"
import animatePlugin from "tailwindcss-animate"
import shadcnConfig from "shadcn/ui/tailwind.config"

/**
 * Stand-alone Tailwind configuration.
 * Extends shadcn/ui's default Tailwind config.
 */
const config: Config = {
  ...shadcnConfig,
  content: [
    ...shadcnConfig.content,
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...shadcnConfig.theme,
    extend: {
      ...shadcnConfig.theme.extend,
      fontFamily: {
        inter: ["var(--font-inter)"],
        gaming: ["var(--font-orbitron)"],
      },
      colors: {
        ...shadcnConfig.theme.extend.colors,
        "neon-cyan": "#00FFE0",
        "neon-pink": "#FF2CDF",
        "dark-blue": "#1B1F3B",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px #00FFE0" },
          "50%": {
            boxShadow: "0 0 40px #00FFE0, 0 0 60px #00FFE0",
          },
        },
      },
    },
  },
  plugins: [...shadcnConfig.plugins, animatePlugin],
}

export default config
