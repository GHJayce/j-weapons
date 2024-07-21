import { getUrlParams } from '@/url/getUrlParams.ts'
import type { JWeapons } from '@type/index'

/**
 * 获取当前浏览器url参数
 * @returns {JWeapons.ObjectStrStr}
 */
export const getCurrentUrlParams = (): JWeapons.ObjectStrStr => {
  if (window && window.location && window.location.href) {
    return getUrlParams(window.location.href)
  }
  return {}
}
