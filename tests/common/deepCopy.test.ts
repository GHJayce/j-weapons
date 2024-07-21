import { expect, test } from '@jest/globals'
import { deepCopy } from '@/common/deepCopy.ts'
import type { JWeapons } from '@type/index'

test('deepCopy', (): void => {
  let arrOrigin: number[] = [1, 2, 3]
  let arr0: JWeapons.ObjArr = deepCopy(arrOrigin)
  let arr1: JWeapons.ObjArr = deepCopy(arr0)
  arr0[0] = 0
  expect(arr1).toEqual(arrOrigin)

  let objOrigin = {
    a: 1,
    b: 2,
    c: 3
  }
  let obj0: JWeapons.ObjectAny = deepCopy(objOrigin)
  let obj1: JWeapons.ObjectAny = deepCopy(obj0)
  obj0.a = 0
  expect(obj1).toEqual(objOrigin)
})
