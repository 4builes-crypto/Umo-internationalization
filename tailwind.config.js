/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "#171717",
        surfaceHover: "#262626",
        unoOrange: "#f97316", // Naranja corporativo
        unoOrangeHover: "#ea580c",
        textPrimary: "#f3f4f6", // blanco alta legibilidad
        textSecondary: "#9ca3af",
        glassBg: "rgba(23, 23, 23, 0.6)",
        glassBorder: "rgba(255, 255, 255, 0.08)"
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
