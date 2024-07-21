import { reportExceptType } from '@/type/reportExceptType.ts'
import { getType } from '@/type/getType.ts'
import type { HasGetIndex } from '@type/common/hasGetIndex.ts'

/**
 * 检查是否存在值，存在返回索引/key，不存在返回-1
 * @param {(String|Array|Object)} haystack 查找范围
 * @param {*} needle 要查找的值
 * @returns {(String|Number)}
 */
export const hasGetIndex = (
  haystack: HasGetIndex.Haystack,
  needle: HasGetIndex.Needle
): HasGetIndex.Return => {
  reportExceptType(['string', 'array', 'object'], haystack)

  const type: string = getType(haystack)
  let index

  if (type === 'object') {
    const keys: string[] = Object.keys(haystack)
    const keyIndex: number = Object.values(haystack).indexOf(needle)
    index = keyIndex === -1 ? keyIndex : keys[keyIndex]
  } else {
    index = haystack.indexOf(needle)
  }
  return index
}
