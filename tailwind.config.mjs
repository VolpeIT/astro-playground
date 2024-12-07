/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // cardHover: "#667085bb",
      },
      gridTemplateColumns: {
        // market: "repeat(auto-fill, minmax(min(100%, 250px), 1fr))",
      },
      gridTemplateRows: {
        // market: "200px min-content min-content 1fr",
      },
    },
  },
  plugins: [],
};
