/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				satoshi: ["Satoshi", "sans-serif"],
				inter: ["Inter", "sans-serif"],
			},
			boxShadow: {
				'custom': 'inset 10px -50px 94px 0 rgb(199, 199, 199, 0.2)',
			}
		},
		plugins: [],
	}
}