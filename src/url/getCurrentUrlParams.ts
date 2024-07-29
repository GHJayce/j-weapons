import { getUrlParams } from '@/url/getUrlParams.ts'
import type { ObjectStrStr } from '@/type.d.ts'

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
