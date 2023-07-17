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
        calm: "#f4f4f4",
        "calm-shade": "#f2f3f5",
        blue: "#ebeff8",
        purple: "#ecebf9",
      },
      colors: {
        primary: "#070b28",
        secondary: "#4f576c",
        link: "#4479e2",
        "link-shade": "#4654a5",
        border: "#e8e8e8",
      },
      fontFamily: {
        primary: ["var(--font-inter)"],
        secondary: ["var(--font-red-hat)"],
        apercu: ["var(--font-apercu)"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography")({
      className: "typography",
    }),
    require("@headlessui/tailwindcss")({ prefix: "ui" }),
  ],
}
