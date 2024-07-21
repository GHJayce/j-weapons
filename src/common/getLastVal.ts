import { reportExceptType } from '@/type/reportExceptType.ts'
import { getType } from '@/type/getType.ts'
import { getLength } from '@/common/getLength.ts'
import type { GetFirstVal } from '@type/common/getLastVal.ts'
import type { JWeapons } from '@type/index'

/**
 * 获取最后一个元素值
 * @param {(String|Array|Object)} needle
 * @returns {*}
 */
export const getLastVal = (needle: GetFirstVal.Needle): any => {
  reportExceptType(['string', 'array', 'object'], needle)

  const type: string = getType(needle)
  let index: number | string = getLength(needle) - 1
  if (type === 'object') {
    index = Object.keys(needle)[index]
    return (needle as JWeapons.ObjectStrAny)[index]
  }
  return needle[index]
}
