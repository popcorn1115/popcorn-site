import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: '爆米花配可乐', // 标题
	description: '争取把写代码变成副业',
	lastUpdated: true,
	cleanUrls: true,
	themeConfig: {
		logo: { src: '/popcorn-logo.svg', width: 24, height: 24 }, // docs/public
		// https://vitepress.dev/reference/default-theme-config
		nav: [],

		sidebar: [
			{
				text: 'Examples',
				items: [
					{ text: 'Markdown Examples', link: '/markdown-examples' },
					{ text: 'Runtime API Examples', link: '/api-examples' }
				]
			}
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }
		],
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2023-present 爆米花配可乐'
		}
	}
})
