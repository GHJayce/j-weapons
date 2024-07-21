import { isRealNaN } from '@/type/isRealNaN.ts'

/**
 * 检查是否设置变量
 * @param {*} needle
 * @returns {Boolean}
 */
export const isSet = (needle?: any): boolean => {
  return needle !== undefined && needle !== null && !isRealNaN(needle) && needle !== false
}
