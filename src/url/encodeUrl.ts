/**
 * url编码
 * @param {String} needle
 * @returns {String}
 */
export const encodeUrl = (needle: string): string => {
  return encodeURIComponent(needle)
}
