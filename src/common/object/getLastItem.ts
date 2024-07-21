import { reportExceptType } from '@/type/reportExceptType.ts'
import { isEmpty } from '@/type/isEmpty.ts'
import { getLength } from '@/common/getLength.ts'
import type { JWeapons } from '@type/index'

/**
 * 获取最后一个属性，没有则返回undefined。
 * @param {Object} needle
 * @returns {(Object|Undefined)}
 */
export const getLastItem = (needle: object): object | undefined => {
  reportExceptType('object', needle)

  if (isEmpty(needle)) {
    return undefined
  }

  const index: number = getLength(needle) - 1
  const key: string = Object.keys(needle)[index]
  const val: any = Object.values(needle)[index]

  let result: JWeapons.ObjectAny = {}
  result[key] = val
  return result
}
