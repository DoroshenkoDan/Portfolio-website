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
      primary: "#000000",
      white: "#b0b0b0",
      accent: {
        DEFAULT: "#ffffff",
        hover: "#464646",
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
        blink: {
          "0%": { opacity: "0.1" },
          "30%": { opacity: "1" },
          "100%": { opacity: "0.1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        blink: "blink 1s infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}