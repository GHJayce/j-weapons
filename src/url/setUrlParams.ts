import { isSet } from '@/type/isSet'
import { getUrlParams } from '@/url/getUrlParams'
import { getType } from '@/type/getType'
import type { ObjectStrStr } from '@/type.d'

/**
 * 设置URL单个或多个参数
 * @param {String} url
 * @param {String|Number|Object} key
 * @param {Undefined|String|Number} val
 * @returns {String}
 */
export function setUrlParams(
  url: string,
  key?: string | number | object,
  val?: undefined | string | number | any
): string {
  if (!isSet(key)) {
    return url
  }
  val = isSet(val) ? val : ''

  const urlLength: number = url.length
  const urlLastIndex: number = urlLength - 1

  let result: string[] = [] // first array, second string
  let params: ObjectStrStr = getUrlParams(url)

  if (getType(key) === 'object') {
    params = Object.assign(params, key)
  } else {
    params[String(key)] = String(val)
  }

  let i: string
  for (i in params) {
    result.push(i + '=' + params[i])
  }
  let resultStr: string = result.join('&')

  let firstSearchIndex: number = url.indexOf('?')
  let firstHashIndex: number = url.indexOf('#')

  if (firstSearchIndex === -1) {
    firstSearchIndex = urlLastIndex
    resultStr = '?' + resultStr
  }

  firstHashIndex = firstHashIndex === -1 ? urlLastIndex + 1 : firstHashIndex - 1
  return url.rangeIndexReplace(resultStr, firstSearchIndex + 1, firstHashIndex)
}
