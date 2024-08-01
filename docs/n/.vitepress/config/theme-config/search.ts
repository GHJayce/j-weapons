import type { DefaultTheme } from 'vitepress/types/default-theme'

const config: DefaultTheme.Config['search'] = {
  provider: 'local',
  options: {
    _render(src: any, env: any, md: any) {
      const html = md.render(src, env)
      if (env.frontmatter?.search === false) return ''
      if (env.relativePath.startsWith('o/')) return ''
      return html
    },
    miniSearch: {
      /**
       * @type {Pick<import('minisearch').Options, 'extractField' | 'tokenize' | 'processTerm'>}
       */
      options: {},
      /**
       * @type {import('minisearch').SearchOptions}
       * @default
       * { fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 1 } }
       */
      searchOptions: {
        fuzzy: 0.2,
        boostDocument: (
          documentId: any,
          term: string,
          storedFields?: Record<any, unknown>
        ): number => {
          const prefix = 'j-weapons/n'
          // @ts-ignore
          const path = window.location.pathname.substring(1).slice(prefix.length).slice('/'.length)
          const id = documentId.slice('/'.length).slice(prefix.length).slice('/'.length)
          const prefixVersion = path.indexOf('v')
          if (prefixVersion === 0) {
            const firstPathIndex = path.indexOf('/')
            const version = path.substring(0, firstPathIndex)
            if (!id.startsWith(version)) {
              return 0
            }
          }
          return 1
        }
      }
    }
  }
}

export default config
