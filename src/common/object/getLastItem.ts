import { reportExceptType } from '@/type/reportExceptType'
import { isEmpty } from '@/type/isEmpty'
import { getLength } from '@/common/getLength'
import type { ObjectAny } from '@/type.d'

/**
 * 获取最后一个属性，没有则返回undefined。
 * @param {Object} needle
 * @returns {(Object|Undefined)}
 */
export function getLastItem(needle: object): object | undefined {
  reportExceptType('object', needle)

  if (isEmpty(needle)) {
    return undefined
  }

  const index: number = getLength(needle) - 1
  const key: string = Object.keys(needle)[index]
  const val: any = Object.values(needle)[index]

  let result: ObjectAny = {}
  result[key] = val
  return result
}
