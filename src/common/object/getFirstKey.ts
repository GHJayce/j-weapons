import { reportExceptType } from '@/type/reportExceptType'

/**
 * 获取第一个属性键名，没有则返回undefined。
 * @param {Object} needle
 * @returns {(String|Undefined)}
 */
export function getFirstKey(needle: object): string | undefined {
  reportExceptType('object', needle)
  return Object.keys(needle)[0]
}
