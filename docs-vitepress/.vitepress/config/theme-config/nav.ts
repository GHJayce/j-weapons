
import type {DefaultTheme} from 'vitepress/types/default-theme'

const config:DefaultTheme.Config['nav'] = [
  {
    text: '文档版本',
    items: [
      { text: 'v1.6.x', link: '/v1.6.x/' },
      { text: 'v1.5.x', link: '/v1.5.x/' }
    ]
  }
]

export default config