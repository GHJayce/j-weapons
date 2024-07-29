import { typeofStr } from './typeofStr'

/**
 * 获取数据的类型，简洁版，能够识别我们认为的数据类型，浮点型除外
 * 返回小写；能识别array、null
 */
export function getType(needle: any): string {
  const type: string = typeofStr(needle)
  return type.substring(type.lastIndexOf(' ') + 1, type.lastIndexOf(']')).toLowerCase()
}
