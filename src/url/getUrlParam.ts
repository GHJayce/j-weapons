import { isSet } from '@/type/isSet'
import { getUrlParams } from '@/url/getUrlParams'
import type { ObjectStrStr } from '@/type.d'

/**
 * 获取指定url的指定参数
 * @param {String} url
 * @param {String|Number} key
 * @param {*} defaultVal
 * @returns {*}
 */
export function getUrlParam(url: string, key: string, defaultVal?: any): string | undefined {
  defaultVal = defaultVal || undefined
  const params: ObjectStrStr = getUrlParams(url)
  return isSet(params[key]) ? params[key] : defaultVal
}
