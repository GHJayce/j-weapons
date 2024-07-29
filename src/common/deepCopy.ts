import { reportExceptType } from '@/type/reportExceptType.ts'
import { getType } from '@/type/getType.ts'
import type { ObjectAny } from '@/type.d.ts'

/**
 * 对象/数组深拷贝
 * @param {(Array|Object)} needle
 * @returns {(Array|Object)}
 */
export function deepCopy(needle: ObjectAny): ObjectAny {
  reportExceptType(['array', 'object'], needle)

  let result: ObjectAny = getType(needle) === 'object' ? {} : []
  let i: any

  for (i in needle) {
    if (getType(needle[i]) === 'object') {
      result[i] = deepCopy(needle[i])
    } else {
      result[i] = needle[i]
    }
  }
  return result
  // return getType(data) === 'object' ? Object.assign({}, data) : Object.values(data);
}
