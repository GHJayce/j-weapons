import { reportExceptType } from '@/type/reportExceptType.ts'
import { isEmpty } from '@/type/isEmpty.ts'
import type { ObjectAny } from '@/type.d.ts'

/**
 * 获取第一个属性，没有则返回undefined。
 * @param {Object} needle
 * @returns {(Object|Undefined)}
 */
export function getFirstItem(needle: object): object | undefined {
  reportExceptType('object', needle)

  if (isEmpty(needle)) {
    return undefined
  }

  const index: number = 0
  const key: string = Object.keys(needle)[index]
  const val: any = Object.values(needle)[index]

  let result: ObjectAny = {}
  result[key] = val
  return result
}
