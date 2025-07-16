import type { Config } from "tailwindcss"
import defaultConfig from "shadcn/ui/tailwind.config"

const config: Config = {
  ...defaultConfig,
  content: [...defaultConfig.content, "./pages/**/*.{js,ts,jsx,tsx,mdx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    ...defaultConfig.theme,
    extend: {
      ...defaultConfig.theme.extend,
      fontFamily: {
        inter: ["var(--font-inter)"],
        gaming: ["var(--font-orbitron)"],
      },
      colors: {
        ...defaultConfig.theme.extend.colors,
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
          "50%": { boxShadow: "0 0 40px #00FFE0, 0 0 60px #00FFE0" },
        },
      },
    },
  },
  plugins: [
    ...defaultConfig.plugins,
    // Optional: add the official Tailwind plugins if you use them
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/typography"),
  ],
}

export default config
