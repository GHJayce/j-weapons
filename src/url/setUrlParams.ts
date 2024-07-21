import { isSet } from '@/type/isSet.ts'
import { getUrlParams } from '@/url/getUrlParams.ts'
import { getType } from '@/type/getType.ts'
import type { SetUrlParams } from '@type/url/setUrlParams.ts'
import { JWeapons } from '@type/index'

/**
 * 设置URL单个或多个参数
 * @param {String} url
 * @param {String|Number|Object} key
 * @param {Undefined|String|Number} val
 * @returns {String}
 */
export const setUrlParams = (
  url: string,
  key?: SetUrlParams.Key,
  val?: SetUrlParams.Val
): string => {
  if (!isSet(key)) {
    return url
  }
  val = isSet(val) ? val : ''

  const urlLength: number = url.length
  const urlLastIndex: number = urlLength - 1

  let result: string[] = [] // first array, second string
  let params: JWeapons.ObjectStrStr = getUrlParams(url)

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
