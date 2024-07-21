import { setUrlParams } from '@/url/setUrlParams.ts'
import type { SetCurrentUrlParams } from '@type/url/setCurrentUrlParams.ts'

/**
 * 设置当前URL参数
 * @param {String|Number|Object} key
 * @param {Undefined|String|Number} val
 * @returns {String}
 */
export const setCurrentUrlParams = (
  key: SetCurrentUrlParams.Key,
  val: SetCurrentUrlParams.Val
): string => {
  if (window && window.location && window.location.href) {
    return setUrlParams(window.location.href, key, val)
  }
  return setUrlParams('', key, val)
}
