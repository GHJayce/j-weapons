import { reportExceptType } from '@/type/reportExceptType.ts'
import { getType } from '@/type/getType.ts'

/**
 * 获取数据长度
 * @param {(String|Array|Object)} needle
 * @returns {Number}
 */
export function getLength(
  needle: String | Array<any> | ArrayBuffer | SharedArrayBuffer | DataView | Object
): number {
  reportExceptType(
    [
      'string',
      'array',
      'int8array',
      'uint8array',
      'uint8clampedarray',
      'int16array',
      'uint16array',
      'int32array',
      'uint32array',
      'float32array',
      'float64array',
      'bigint64array',
      'biguint64array',

      'object',

      'arraybuffer',
      'sharedarraybuffer',
      'dataview'
    ],
    needle
  )

  const type: string = getType(needle)
  let length: number = 0

  switch (type) {
    case 'string':
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
    case 'object':
      length = Object.keys(needle).length
      break
    case 'arraybuffer':
    case 'sharedarraybuffer':
    case 'dataview':
      if ('byteLength' in needle) {
        length = needle.byteLength
      }
      break
  }
  return length
}
