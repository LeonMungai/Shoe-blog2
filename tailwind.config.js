/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "leo-red": "#ff1000",
        "leo-main": {
          100: "red",
          200: "green",
        },
        primary: "var(--shoe-primary)"

      }

    },
  },
  plugins: [],
}

