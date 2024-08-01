import type { DefaultTheme } from 'vitepress/types/default-theme'

const config: DefaultTheme.Config['search'] = {
  provider: 'local',
  options: {
    // /**
    //  * @param {string} src
    //  * @param {import('vitepress').MarkdownEnv} env
    //  * @param {import('markdown-it')} md
    //  */
    // _render(src, env, md) {
    //   const html = md.render(src, env)
    //   if (env.frontmatter?.search === false) return ''
    //   // if (env.relativePath.startsWith('some/path')) return ''
    //   return html
    // },
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
          const path = window.location.pathname.substring(1)
          if (path.indexOf('v') === 0) {
            const firstPathIndex = path.indexOf('/')
            const version = path.substring(0, firstPathIndex)
            if (!documentId.substring(1).startsWith(version)) {
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
