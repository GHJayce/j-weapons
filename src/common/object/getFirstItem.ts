import { reportExceptType } from '@/type/reportExceptType.ts'
import { isEmpty } from '@/type/isEmpty.ts'
import type { JWeapons } from '@type/index'

/**
 * 获取第一个属性，没有则返回undefined。
 * @param {Object} needle
 * @returns {(Object|Undefined)}
 */
export const getFirstItem = (needle: object): object | undefined => {
  reportExceptType('object', needle)

  if (isEmpty(needle)) {
    return undefined
  }

  const index: number = 0
  const key: string = Object.keys(needle)[index]
  const val: any = Object.values(needle)[index]

  let result: JWeapons.ObjectAny = {}
  result[key] = val
  return result
}
