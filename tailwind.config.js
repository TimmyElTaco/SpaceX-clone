/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'D-DIN-Medium': ['D-DIN-Medium', 'sans-serif'],
        'D-DIN-Light': ['D-DIN-Light', 'sans-serif'],
        'D-DIN-Bold': ['D-DIN-Bold', 'sans-serif'],
        'D-DIN-Regular': ['D-DIN-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
}


