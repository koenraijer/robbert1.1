const typography = require('@tailwindcss/typography');
const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	daisyui: {
		themes: [
		  {
			light: {
			  ...require("daisyui/src/colors/themes")["[data-theme=light]"],
			  primary: "#00401F",
			  secondary: "#cc8500",
			  secondaryFocus: "cc8500",
			  "--navbar-padding": "1rem"
			},
		  },
		],
	  },

	theme: {
		extend: {
			fontFamily: {
				header: [`'Matter'`, ...defaultTheme.fontFamily.sans,]
			},
		}
	},

	plugins: [typography, require('daisyui'), require('tailwindcss-fluid-type')]
};

module.exports = config;
