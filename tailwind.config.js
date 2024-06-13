/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway"],
      },
      colors: {
        salmon: "#F6AF9E",
        gold: "#FDCB6E",
        mint: "#E8F2F1",
        seafoam: {
          100: "#EDF0EF",
          200: "#EDF0EF",
        },
        "deep-lagoon-blue": "#003B40",
        disabled: "#B7C1C2",
      },
    },
  },
  plugins: [],
};
