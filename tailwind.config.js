/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        danfo: ["Danfo", "sans-serif"],
        jacquard: ["Jacquard 12", "sans-serif"],
        neucha: ["Neucha", "cursive"],
      },
      boxShadow: {
        "custom-black": "0 0 8px rgba(0, 0, 0, 0.5)",
        "active-black": "0 0 5px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
