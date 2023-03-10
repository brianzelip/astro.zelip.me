/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,md}"],
  theme: {
    extend: {
      screens: {
        md: "832px", // 52em legacy Basscss vs. Tailwind's 768px
      },
    },
  },
  plugins: [],
};
