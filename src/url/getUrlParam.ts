import { isSet } from '@/type/isSet.ts'
import { getUrlParams } from '@/url/getUrlParams.ts'
import type { JWeapons } from '@type/index'

/**
 * 获取指定url的指定参数
 * @param {String} url
 * @param {String|Number} key
 * @param {*} defaultVal
 * @returns {*}
 */
export const getUrlParam = (url: string, key: string, defaultVal?: any): string | undefined => {
  defaultVal = defaultVal || undefined
  const params: JWeapons.ObjectStrStr = getUrlParams(url)
  return isSet(params[key]) ? params[key] : defaultVal
}
