import { defineConfig } from 'vitepress'
import sidebarConfig from './config/theme-config/sidebar'
import navConfig from './config/theme-config/nav'
import searchConfig from './config/theme-config/search'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/j-weapons/n/',
  lang: 'zh',
  title: 'j-weapons',
  description: 'J武器。一个开箱即用的函数库。平时自己在做开发时所用到的一些常用函数方法。',
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    editLink: {
      pattern: 'https://github.com/GHJayce/j-weapons/edit/master/docs/:path'
    },
    search: searchConfig,
    nav: navConfig,
    sidebar: sidebarConfig,
    socialLinks: [{ icon: 'github', link: 'https://github.com/GHJayce/j-weapons' }],
    outline: {
      level: 'deep',
      label: '目录'
    },
    footer: {
      message:
        'Released under the <a href="https://github.com/GHJayce/j-weapons/blob/master/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2019-present <a href="https://github.com/GHjayce">GHJayce</a>'
    }
  }
})
