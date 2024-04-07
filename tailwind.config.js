/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
            "bright-yellow": "#ffb703",
            "light-blue": "#90c8f5",
            "dark-blue": "#2571bc",
            "text-color": "#293241"
        }
    },
  },
  plugins: [],
};
