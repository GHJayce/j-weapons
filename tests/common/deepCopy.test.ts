import { expect, test } from '@jest/globals'
import { deepCopy } from '@/common/deepCopy.ts'
import type { ObjectAny, ObjArr } from '@/type.d.ts'

test('deepCopy', (): void => {
  let arrOrigin: number[] = [1, 2, 3]
  let arr0: ObjArr = deepCopy(arrOrigin)
  let arr1: ObjArr = deepCopy(arr0)
  arr0[0] = 0
  expect(arr1).toEqual(arrOrigin)

  let objOrigin = {
    a: 1,
    b: 2,
    c: 3
  }
  let obj0: ObjectAny = deepCopy(objOrigin)
  let obj1: ObjectAny = deepCopy(obj0)
  obj0.a = 0
  expect(obj1).toEqual(objOrigin)
})
