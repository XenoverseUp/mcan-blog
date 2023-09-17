const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      mono: ["var(--font-mono)", "Courier", "monospace"],
      staff: ["var(--font-staff)", "sans-serif"],
      "staff-wide": ["var(--font-staff-wide)", "sans-serif"],
      "staff-condensed": ["var(--font-staff-condensed)", "sans-serif"],
      commuter: ["var(--font-commuter)", "sans-serif"],
    },
    extend: {
      keyframes: {
        "bounce-x": {
          "0%": {
            transform: "translateX(0px)",
            "timing-function": "ease-in",
          },
          "37%": {
            transform: "translateX(10px)",
            "timing-function": "ease-out",
          },
          "55%": {
            transform: "translateX(-10px)",
            "timing-function": "ease-in",
          },
          "73%": {
            transform: "translateX(8px)",
            "timing-function": "ease-out",
          },
          "82%": {
            transform: "translateX(-8px)",
            "timing-function": "ease-in",
          },
          "91%": {
            transform: "translateX(4px)",
            "timing-function": "ease-out",
          },
          "96%": {
            transform: "translateX(-4px)",
            "timing-function": "ease-in",
          },
          "100%": {
            transform: "translateX(0px)",
            "timing-function": "ease-in",
          },
        },
      },
      animation: {
        "bounce-x": "bounce-x 0.6s forwards 0.05s",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        "cool-lime": {
          DEFAULT: "#CEFF9D",
          50: "#FFFFFF",
          100: "#F7FFEF",
          200: "#E2FFC6",
          300: "#CEFF9D",
          400: "#B5FF6A",
          500: "#9BFF37",
          600: "#82FF04",
          700: "#68D000",
          800: "#4F9D00",
          900: "#356A00",
          950: "#285000",
        },
        background: "rgb(var(--background) / <alpha-value>)",
        border: "var(--border)",
        "t-primary": "var(--t-primary)",
        "t-secondary": "var(--t-secondary)",
        warn: "rgb(var(--warn) / <alpha-value>)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography")(),
    require("tailwindcss-radix")({
      variantPrefix: false,
    }),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
