module.exports = {
	// site config
	lang: "en-US",
	title: "Package Peak",
	description:
	"Documentation for Package Peak, a package manager for Envato.",
	base: '/package-peak-docs/',

	// theme and its config
	theme: "@vuepress/theme-default",
	themeConfig: {
		logo: "https://vuejs.org/images/logo.png",
		sidebar: [
			{
				text: 'Home',
				link: '/'
			},
			{
				text: 'Getting Started',
				link: '/getting-started.html'
			},
			{
				text: 'Troubleshooting',
				link: '/troubleshooting.html'
			}
		]
	},
	plugins: [
		[
			"@vuepress/plugin-google-analytics",
			{
				id: "G-XXXXXXXXXX",
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
		]
	],
};
