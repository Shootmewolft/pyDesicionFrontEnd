/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: "#161616",
				secondary: "#1A1A1A",
        accent: "#fff"
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
