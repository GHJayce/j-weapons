import { hasGetIndex } from '@/common/hasGetIndex.ts'
import type { HasGetIndex } from '@type/common/hasGetIndex.ts'

/**
 * 检查是否存在值
 * @param {(String|Array|Object)} haystack 查找范围
 * @param {*} needle 要查找的值
 * @returns {Boolean}
 */
export const has = (haystack: HasGetIndex.Haystack, needle: HasGetIndex.Needle): boolean => {
  return hasGetIndex(haystack, needle) !== -1
}
