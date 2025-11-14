import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // This tells Tailwind to scan your src folder for classes
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 1. Custom Font
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },
      // 2. Custom Colors
      colors: {
        "un-bg": "#05020D",
        "un-bg-card": "#0c0818",
        "un-border": "#2a233b",
        "un-border-ghost": "#504f5e",
        "un-text-gray": "#a0a0a0",
        "un-text-gray-light": "#c0c0c0",
        "un-purple": "#a04aff",
        "un-purple-light": "#c28fff",
        "un-purple-bg": "rgba(160, 74, 255, 0.1)",
        "un-purple-border": "rgba(160, 74, 255, 0.5)",
        "un-blue": "#4b91e0",
        "un-teal": "#4ff1d3",
      },
      // 3. Custom Animations
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        gradientDrift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        
        // 1b & 5a. Neon Glow Pulse / Shimmer
        neonShimmer: {
          '0%, 100%': { 
            filter: 'drop-shadow(0 0 4px rgba(194, 143, 255, 0.3))' 
          },
          '50%': { 
            filter: 'drop-shadow(0 0 8px rgba(194, 143, 255, 0.5))' 
          },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out forwards",
        blink: "blink 1.2s infinite ease-in-out",
        marquee: "marquee 40s linear infinite",
        gradientDrift: 'gradientDrift 8s ease infinite',
        // 1b & 5a. Neon Glow Pulse / Shimmer
        neonShimmer: 'neonShimmer 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
