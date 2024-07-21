import { reportExceptType } from './reportExceptType'

/**
 * 转换为对象数据类型
 * @param {(String|Array)} needle
 * @returns {Object}
 */
export const toObject = (needle: string | Array<any>): object => {
  reportExceptType(['string', 'array'], needle)
  return Object.assign({}, needle) as object
}
