/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      "xl": "1200px",
      "lg": "960px",
      "md": "768px",
      "sm": "640px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    colors: {
      primary: "#1c1c22",
      white: "#ffffff",
      accent: {
        DEFAULT: "#00ff99",
        hover: "#00e187",
      },
    },
    extend: {
      textColor: {
        'outline': 'transparent',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}