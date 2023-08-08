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
      mono: ["var(--font-space-mono)", "mono"],
      staff: ["var(--font-staff)", "sans-serif"],
      "staff-wide": ["var(--font-staff-wide)", "sans-serif"],
      "staff-condensed": ["var(--font-staff-condensed)", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        accent: "#CEFF9D",
        background: "#000",
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography")({
      className: "typography",
    }),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
