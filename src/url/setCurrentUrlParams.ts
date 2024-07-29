import { setUrlParams } from '@/url/setUrlParams.ts'

/**
 * 设置当前URL参数
 * @param {String|Number|Object} key
 * @param {Undefined|String|Number} val
 * @returns {String}
 */
export function setCurrentUrlParams(
  key: string | number | object,
  val: undefined | string | number
): string {
  if (window && window.location && window.location.href) {
    return setUrlParams(window.location.href, key, val)
  }
  return setUrlParams('', key, val)
}
