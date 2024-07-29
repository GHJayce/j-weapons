import { getType } from '@/type/getType.ts'
import { getLength } from '@/common/getLength.ts'
import { has } from '@/common/has.ts'

/**
 * 判断是否为空
 * @param {*} needle
 * @param {Boolean} strict 默认false。非严格模式，以下情况被识别为空，字符串：'0'、'null'、'undefined'、'false'、'NaN'
 * @returns {Boolean}
 */
export function isEmpty(needle: any, strict: boolean | number): boolean {
  const type: string = getType(needle)
  let result

  strict = strict === undefined ? false : strict

  switch (type) {
    case 'object':
    case 'array':
    case 'int8array':
    case 'uint8array':
    case 'uint8clampedarray':
    case 'int16array':
    case 'uint16array':
    case 'int32array':
    case 'uint32array':
    case 'float32array':
    case 'float64array':
    case 'bigint64array':
    case 'biguint64array':
    case 'arraybuffer':
    case 'sharedarraybuffer':
    case 'dataview':
      result = getLength(needle) === 0
      break
    case 'number':
      result = needle !== needle || needle === 0
      break
    case 'string':
      const str: string = needle.clueTrim()
      const lower: string = str.toLowerCase()
      const notStrictKeywords: string[] = ['0', 'null', 'undefined', 'false']
      let keywords: string[] = ['']

      if (!strict) keywords.push(...notStrictKeywords)

      result = has(keywords, lower)
      result = !strict ? result || str === 'NaN' : result
      break
    case 'undefined':
    case 'null':
      result = true
      break
    case 'boolean':
      result = !needle
      break
    default:
      result = needle.toString() === ''
      break
  }

  return result
}
