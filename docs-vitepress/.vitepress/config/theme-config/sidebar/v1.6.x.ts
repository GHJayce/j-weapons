
import { DefaultTheme } from "vitepress/types/default-theme";

const config:DefaultTheme.SidebarItem[] = [
  {
    text: '简介',
    items: [
      { text: '什么是j-weapons？', link: '/v1.6.x/index' },
      { text: '快速开始', link: '/v1.6.x/quick-start' }
    ]
  },
  {
    text: '武器库',
    items: [
      {
        text: '类型',
        link: '/v1.6.x/weapon/type',
      },
      {
        text: 'URL',
        link: '/v1.6.x/weapon/url',
      },
      {
        text: '对象',
        link: '/v1.6.x/weapon/common/object',
      },
      {
        text: '字符串',
        link: '/v1.6.x/weapon/common/string',
      },
      {
        text: '公共',
        link: '/v1.6.x/weapon/common/common',
      },
    ]
  }
]

export default config