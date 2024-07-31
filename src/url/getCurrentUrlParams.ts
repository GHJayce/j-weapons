import { getUrlParams } from '@/url/getUrlParams'
import type { ObjectStrStr } from '@/type.d'

/**
 * 获取当前浏览器url参数
 * @returns {ObjectStrStr}
 */
export function getCurrentUrlParams(): ObjectStrStr {
  if (window && window.location && window.location.href) {
    return getUrlParams(window.location.href)
  }
  return {}
}
