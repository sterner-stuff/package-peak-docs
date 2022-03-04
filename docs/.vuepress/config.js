module.exports = {
	// site config
	lang: "en-US",
	title: "Package Peak",
	description:
		"Documentation for Package Peak, a package manager for ThemeForest and CodeCanyon.",
	base: "/package-peak-docs/",

	// theme and its config
	theme: "@vuepress/theme-default",
	themeConfig: {
		logo: "https://vuejs.org/images/logo.png",
		sidebar: [
			{
				text: "Home",
				link: "/",
			},
			{
				text: "Getting Started",
				link: "/getting-started.html",
			},
			{
				text: "Troubleshooting",
				link: "/troubleshooting.html",
			},
		],
		navbar: [
			{
				text: 'Back to Package Peak',
				link: 'https://packagepeak.app'
			}
		]
	},
	plugins: [
		[
			"@vuepress/plugin-google-analytics",
			{
				id: "G-X5F1808L49",
			},
		],
		[
			"@vuepress/plugin-search",
			{
				locales: {
					"/": {
						placeholder: "Search",
					},
				},
			},
		],
	],
};
