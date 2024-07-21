import { expect, test } from '@jest/globals'
import { getLength } from '@/common/getLength.ts'

test('getLength', (): void => {
  expect(getLength('banana')).toBe(6)

  expect(getLength(['a', 'b', 'c'])).toBe(3)

  expect(
    getLength({
      a: 1,
      b: 2,
      c: 3
    })
  ).toBe(3)

  expect(getLength(new Int8Array())).toBe(0)
  expect(getLength(new Int8Array(1))).toBe(1)
  expect(getLength(new ArrayBuffer(0))).toBe(0)
  expect(getLength(new ArrayBuffer(1))).toBe(1)
})
