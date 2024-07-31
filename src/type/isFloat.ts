import { getType } from '@/type/getType'
import { isRealNaN } from '@/type/isRealNaN'

/**
 * 是否为浮点型
 * @param {*} needle
 * @returns {Boolean}
 */
export function isFloat(needle: any): boolean {
  return getType(needle) === 'number' && !isRealNaN(needle) && needle % 1 != 0
}
