import { decodeUrl } from '@/url/decodeUrl.ts'
import type { JWeapons } from '@type/index'

/**
 * 获取指定url的所有参数
 * @param {String} url
 * @returns {Object}
 */
export const getUrlParams = (url: string): JWeapons.ObjectStrStr => {
  const firstHashIndex: number = url.indexOf('#')
  const firstSearchIndex: number = url.indexOf('?')

  if (firstSearchIndex === -1) {
    return {}
  }

  const str: string = url.substring(
    firstSearchIndex + 1,
    firstHashIndex !== -1 ? firstHashIndex : url.length
  )

  return str
    .split('&')
    .filter((a: string) => a)
    .map((v: string) => {
      let keyValArr: string[] = v.split('=')
      if (keyValArr.length > 2) {
        const key: string = keyValArr.shift() as string
        const val: string = keyValArr.join('=')

        keyValArr = [key, val]
      }
      return keyValArr
    })
    .reduce((acc: JWeapons.ObjectAny, v: string[]) => {
      acc[decodeUrl(v[0].trim())] = v[1] === undefined ? '' : decodeUrl(v[1].trim())
      return acc
    }, {})
}
