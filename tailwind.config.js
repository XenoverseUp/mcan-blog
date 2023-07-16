/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "primary-400": "#f4f4f4",
      },
      colors: {
        accent: "#280719",
        "accent-slight": "#6b5064",
        "accent-saturation": "#68072a",
      },
      fontFamily: {
        "red-hat": ["var(--font-red-hat)"],
        inter: [["var(--font-inter)"]],
        apercu: [["var(--font-apercu)"]],
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography")({
      className: "typography",
    }),
  ],
}
