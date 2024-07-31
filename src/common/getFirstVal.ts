import { reportExceptType } from '@/type/reportExceptType'
import { getType } from '@/type/getType'
import type { ObjArrStr, ObjectStrAny } from '@/type.d'

/**
 * 获取第一个元素值
 * @param {(String|Array|Object)} needle
 * @returns {*}
 */
export function getFirstVal(needle: ObjArrStr): any {
  reportExceptType(['string', 'array', 'object'], needle)

  const type: string = getType(needle)
  let index: number | string = 0

  if (type === 'object') {
    index = Object.keys(needle)[index]
    return (needle as ObjectStrAny)[index]
  }
  return needle[index]
}
