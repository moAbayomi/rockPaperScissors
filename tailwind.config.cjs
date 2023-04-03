/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				rd: "radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
				rules: "hsl(214, 47%, 23%)",
				/* triangle: "url(./src/assets/images/bg-triangle.svg)", */
			},

			colors: {
				borderHeader: "hsl(217, 16%, 45%)",
				score: "hsl(229, 64%, 46%)",
				darktxt: "hsl(229, 25%, 31%)",
				buttonPaper: "hsl(230, 89%, 65%)",
				buttonRock: " hsl(349, 71%, 56%)",
				buttonScissors: "hsl(39, 89%, 49%)",
				buttonSpock: "hsl(189, 59%, 53%)",
				buttonLizard: "hsl(261, 73%, 60%)",
				modal: "rgba(255, 255, 255, 0.151)",
			},

			fontFamily: {
				display: ["Barlow Semi Condensed", "sans-serif"],
			},
		},
	},
	plugins: [],
};
