import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#F5F5F7",
        ink: "#1D1D1F",
        accent: "#0071E3",
        muted: "#6E6E73",
        line: "rgba(255,255,255,0.6)",
      },
      boxShadow: {
        card: "0 20px 45px rgba(15, 23, 42, 0.08)",
        cardHover: "0 28px 60px rgba(15, 23, 42, 0.14)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      backgroundImage: {
        "radial-soft":
          "radial-gradient(circle at top, rgba(0,113,227,0.10), transparent 38%), radial-gradient(circle at bottom, rgba(255,255,255,0.95), rgba(245,245,247,1) 55%)",
      },
    },
  },
  plugins: [],
};

export default config;
