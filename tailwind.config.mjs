/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // HIER Dark-Mode aktiviert (auf Basis der CSS-Klasse "dark")
  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        // Überschreibt die default "sans"-Familie für Tailwind
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // Hinzufügen von benutzerdefinierten Keyframes
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'bounce-in': {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          '40%': {
            transform: 'translateY(-30px)',
            opacity: '1',
          },
          '60%': {
            transform: 'translateY(-15px)',
            opacity: '1',
          },
        },
        'scale-up': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'slide-from-left': {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-from-right': {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        }
      },
      // Definieren der benutzerdefinierten Animationen
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-in': 'slide-in 0.5s ease-out forwards',
        'bounce-in': 'bounce-in 1s ease-out forwards',
        'scale-up': 'scale-up 0.5s ease-out forwards',
        'slide-from-left': 'slide-from-left 0.7s ease-out forwards',
        'slide-from-right': 'slide-from-right 0.7s ease-out forwards',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};