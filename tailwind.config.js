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
        "red-hat": [
          "__Red_Hat_Display_59990b",
          "__Red_Hat_Display_Fallback_59990b",
          "__Inter_20951f",
          "__Inter_Fallback_20951f",
          "sans-serif",
        ],
        inter: [
          "__Inter_20951f",
          "__Inter_Fallback_20951f",
          "__Red_Hat_Display_59990b",
          "__Red_Hat_Display_Fallback_59990b",
          "sans-serif",
        ],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(0)" },
          "50%": { transform: "rotate(45deg)" },
        },
      },
      animation: {
        wiggle: "wiggle .5s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
    require("@tailwindcss/container-queries"),
  ],
}
