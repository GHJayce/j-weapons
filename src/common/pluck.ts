import { reportExceptType } from '@/type/reportExceptType.ts'
import type { ObjectAny, ObjArr } from '@/type.d.ts'

/**
 * 类似PHP array_column. 摘取数组中对象元素的某个key成为一个集合
 * @param {Array} haystack
 * @param {(String|Null)} needle 需要摘取的key，null则为全部
 * @param {(String|Undefined)} key 是否需要以某个key作为摘取结果的key
 * @returns {Array|Object}
 */
export function pluck(
  haystack: Array<ObjectAny>,
  needle: string | null,
  key?: string | undefined
): ObjArr {
  reportExceptType('array', haystack)
  reportExceptType(['string', 'null'], needle)
  key = key || undefined
  reportExceptType(['string', 'undefined'], key)

  if (key !== undefined) {
    return Object.fromEntries(
      haystack.map((item: ObjectAny) => [item[key], needle === null ? item : item[needle]])
    )
  }
  return haystack.map((item: ObjectAny) => (needle ? item[needle] : item))
}
