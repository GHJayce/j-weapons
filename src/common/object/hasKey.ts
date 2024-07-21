import { reportExceptType } from '@/type/reportExceptType.ts'
import { has } from '@/common/has.ts'

/**
 * 检查对象是否存在某个key
 * @param {Object} haystack
 * @param {(String|Number|Boolean)} needle
 * @returns {Boolean}
 */
export const hasKey = (haystack: object, needle: string | number | boolean | any): boolean => {
  reportExceptType('object', haystack)
  reportExceptType(['string', 'number', 'boolean'], needle)
  return has(Object.keys(haystack), needle.toString())
}