import { reportExceptType } from '@/type/reportExceptType.ts'
import { getType } from '@/type/getType.ts'
import type { DeepCopy } from '@type/common/deepCopy.ts'

/**
 * 对象/数组深拷贝
 * @param {(Array|Object)} needle
 * @returns {(Array|Object)}
 */
export const deepCopy = (needle: DeepCopy.Needle): DeepCopy.Data => {
  reportExceptType(['array', 'object'], needle)

  let result: DeepCopy.Data = getType(needle) === 'object' ? {} : []
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
