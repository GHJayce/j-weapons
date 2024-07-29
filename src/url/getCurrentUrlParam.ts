import { getUrlParam } from '@/url/getUrlParam.ts'

/**
 * 获取当前浏览器url的指定参数
 * @param {String} key
 * @param {*} defaultVal
 * @returns {*}
 */
export function getCurrentUrlParam(key: string, defaultVal?: any): any {
  defaultVal = defaultVal || undefined
  if (window && window.location && window.location.href) {
    return getUrlParam(window.location.href, key, defaultVal)
  }
  return defaultVal
}
