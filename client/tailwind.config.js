/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        aqua: {
          50: "#e0f7ff",
          100: "#b3eaff",
          200: "#80daff",
          300: "#4dc9ff",
          400: "#26bcff",
          500: "#00aeff",
          600: "#0090d9",
          700: "#006fab",
          800: "#004f7c",
          900: "#003050",
        },
        navy: {
          DEFAULT: "#0a1628",
          light: "#0d1f3c",
          mid: "#112244",
        },
        gold: "#c9a84c",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        script: ["'Dancing Script'", "cursive"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        ripple: "ripple 2s linear infinite",
        "slide-up": "slideUp 0.7s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        shimmer: "shimmer 2.5s infinite",
        wave: "wave 8s linear infinite",
        "wave-slow": "wave 12s linear infinite",
        pulse2: "pulse2 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        bubble: "bubble 4s ease-in-out infinite",
        "drop-in": "dropIn 0.8s cubic-bezier(0.34,1.56,0.64,1) forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        ripple: {
          "0%": { transform: "scale(0.8)", opacity: 1 },
          "100%": { transform: "scale(2.4)", opacity: 0 },
        },
        slideUp: {
          from: { opacity: 0, transform: "translateY(40px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        wave: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulse2: {
          "0%, 100%": { transform: "scale(1)", opacity: 0.8 },
          "50%": { transform: "scale(1.05)", opacity: 1 },
        },
        bubble: {
          "0%, 100%": { transform: "translateY(0) scale(1)", opacity: 0.6 },
          "50%": { transform: "translateY(-30px) scale(1.1)", opacity: 1 },
        },
        dropIn: {
          "0%": { transform: "translateY(-60px) scale(0.5)", opacity: 0 },
          "100%": { transform: "translateY(0) scale(1)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
