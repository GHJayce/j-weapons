/**
 * url解码
 * @param {String} needle
 * @returns {String}
 */
export const decodeUrl = (needle: string): string => {
  return decodeURIComponent(needle)
}
