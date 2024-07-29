import { reportExceptType } from '@/type/reportExceptType.ts'
import { toNumber } from '@/type/toNumber'

/**
 * 转化为数组
 * @param {Object} needle
 * @param {Number} options 1：默认，对象所有属性值组成的数组；2：保留结构，外面套一层数组
 * @returns {Array}
 */
export function toArray(needle: object, options?: number): any[] {
  reportExceptType('object', needle)

  options = options ? toNumber(options) : 1

  let result: any[] = []

  switch (options) {
    case 1:
      result = Object.values(needle)
      break
    case 2:
      result = [needle]
      break
  }
  return result
}
