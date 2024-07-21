import { reportExceptType } from '@/type/reportExceptType.ts'
import { getType } from '@/type/getType.ts'
import type { GetFirstVal } from '@type/common/getFirstVal.ts'
import { JWeapons } from '@type/index'

/**
 * 获取第一个元素值
 * @param {(String|Array|Object)} needle
 * @returns {*}
 */
export const getFirstVal = (needle: GetFirstVal.Needle): any => {
  reportExceptType(['string', 'array', 'object'], needle)

  const type: string = getType(needle)
  let index: number | string = 0

  if (type === 'object') {
    index = Object.keys(needle)[index]
    return (needle as JWeapons.ObjectStrAny)[index]
  }
  return needle[index]
}
