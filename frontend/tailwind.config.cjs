/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { 
			'white': '#ECEBF3',
			'black': '#1D1F20',
			'forest': '#1F3333',
			'ruby': '#93032E',
			'carrot': '#F18F01',
			'lime': '#7BFB74',
			'pewter': '#7EA8BE',
			}
		},

		fontFamily: { 
			monospace: ['Anonymous_Pro', 'monospace'],
			serif: ['Rokkitt','serif'],
			sans: ['Prompt', 'sans-serif'] 
		}
	},
	plugins: [],

}
