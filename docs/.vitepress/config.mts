import { defineConfig } from 'vitepress'
import { nav } from './customConfig/nav';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	lang: 'zh-CN',
	title: '爆米花配可乐', // 标题
	description: '争取把写代码变成副业',
	lastUpdated: true,
	cleanUrls: true,
	themeConfig: {
		logo: { src: '/popcorn-logo.svg', width: 24, height: 24 }, // docs/public
		// https://vitepress.dev/reference/default-theme-config
		nav,
		sidebar: [
			{
				text: '面试八股文',
				items: [
					{ text: 'HTML', link: '/fe/interview/html/index' },
					{ text: 'CSS', link: '/api-examples' },
					{ text: 'JavaScript', link: '/fe/interview/JavaScript/index' }
				]
			}
		],

		outline: {
			level: 'deep',
			label: '本页目录'
		},

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }
		],
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2023-present 爆米花配可乐'
		},

		docFooter: {
			prev: '上一篇',
			next: '下一篇'
		},

		darkModeSwitchLabel: '外观',
		returnToTopLabel: '返回顶部'
	}
})
