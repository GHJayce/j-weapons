import { getType } from '@/type/getType.ts'

/**
 * 报告非指定类型外的类型
 * @param {(String|Array)} allowTypes
 * @param {*} needle
 * @throws
 */
export function reportExceptType(allowTypes: string | Array<any>, needle: any): void {
  const type: string = getType(needle)
  let allowTypesStr: string = ''
  if (typeof allowTypes !== 'string') {
    allowTypesStr = allowTypes.join()
  } else {
    allowTypesStr = allowTypes
  }

  if (allowTypes.indexOf(type) === -1) {
    throw new Error(`j-weapons: The data type is not accepted.
Give: ${type}.
Allow types by getType: ${allowTypesStr}.
`)
  }
}
