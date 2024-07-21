import { getType } from '@/type/getType.ts'

/**
 * 检查NaN
 * @param {*} needle
 * @returns {Boolean}
 */
export const isRealNaN = (needle?: any): boolean => {
  return getType(needle) === 'number' && needle !== needle
}
