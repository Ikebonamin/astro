const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      aspectRatio: {
        thumbnail: '1.5',
      },
      fontFamily: {
        sans: ['cabin', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
// 1. isnatla fonte com npm; 2. cria o const defaultTheme..., 3 extende o tema na configuração CSS, 4. importa a fonte no layout
