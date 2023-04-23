/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        prism: ['Tilt Prism', 'sans-serif']
      },
      colors: {
        'chicagoBlue': '#bbdcf1',
        'chicagoRed': '#e93423',
        'bearsBlue': '#1e2c53',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
