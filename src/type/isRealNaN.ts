import { getType } from '@/type/getType'

/**
 * 检查NaN
 * @param {*} needle
 * @returns {Boolean}
 */
export function isRealNaN(needle?: any): boolean {
  return getType(needle) === 'number' && needle !== needle
}
