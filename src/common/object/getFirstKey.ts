import { reportExceptType } from '@/type/reportExceptType.ts'

/**
 * 获取第一个属性键名，没有则返回undefined。
 * @param {Object} needle
 * @returns {(String|Undefined)}
 */
export const getFirstKey = (needle: object): string | undefined => {
  reportExceptType('object', needle)
  return Object.keys(needle)[0]
}
