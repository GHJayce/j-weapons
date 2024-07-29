import { reportExceptType } from '@/type/reportExceptType.ts'
import { getLength } from '@/common/getLength.ts'

/**
 * 获取最后一个属性键名，没有则返回undefined。
 * @param {Object} needle
 * @returns {(String|Undefined)}
 */
export function getLastKey(needle: object): string | undefined {
  reportExceptType('object', needle)
  return Object.keys(needle)[getLength(needle) - 1]
}
