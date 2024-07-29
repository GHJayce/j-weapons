/**
 * url编码
 * @param {String} needle
 * @returns {String}
 */
export function encodeUrl(needle: string): string {
  return encodeURIComponent(needle)
}
