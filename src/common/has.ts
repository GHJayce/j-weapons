import { hasGetIndex } from '@/common/hasGetIndex.ts'
import type { ObjArrStr } from '@/type.d.ts'

/**
 * 检查是否存在值
 * @param {(String|Array|Object)} haystack 查找范围
 * @param {*} needle 要查找的值
 * @returns {Boolean}
 */
export function has(haystack: ObjArrStr, needle: any): boolean {
  return hasGetIndex(haystack, needle) !== -1
}
